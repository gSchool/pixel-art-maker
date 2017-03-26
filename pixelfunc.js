$(document).ready(function() {
    let currentColor = '#ffffff'
    let fillTool = $('#fill-tool').data('selected');

    function populateGrid() {
        let widthRem = ($('.canvas').width() / 16);
        let heightRem = ($('.canvas').height() / 16);

        function addRows(heightRem, widthRem) {
            for (let row = 0; row < heightRem; row++) {
                if (row < 10) {
                    $('table').append('<tr id="row-0' + row + '">' + addCell(widthRem, row) + '</tr>');
                } else {
                    $('table').append('<tr id="row-' + row + '">' + addCell(widthRem, row) + '</tr>');
                }
            }
        }

        function addCell(widthRem, row) {
            let cellsPerRow = ''
            for (let cell = 0; cell < widthRem; cell++) {
                if (cell < 10) {
                    cellsPerRow += '<td id="cell-0' + cell + '"class="table-cell basic-paint"></td>'
                } else {
                    cellsPerRow += '<td id="cell-' + cell + '"class="table-cell basic-paint"></td>'
                }
            }
            return cellsPerRow
        }
        addRows(heightRem, widthRem);
    }

    function changeCellColor(e) {
        console.log(e.target);
        $(e.target).css('background-color', currentColor)
        $('.basic-paint').on('mouseenter', function(e) {
            $(e.target).css('background-color', currentColor)
        })
    }

    function changeSelectorColor(e) {
        if (e.target.type == 'color') {
            currentColor = $(e.target).val();
        } else {
            currentColor = $(e.target).css('background-color')
            console.log(currentColor);
        }
        $('#color-selected').css('background-color', currentColor)
    }

    function stopDraw() {
        $('.basic-paint').unbind('mouseenter')
    }

    function fillToolActiv(e) {
        if (!$('#fill-tool').data('selected')) {
            $('.basic-paint').addClass('fill-on-click');
            $('.basic-paint').unbind();
            $('#fill-tool').data('selected', true)
            $('.fill-on-click').removeClass('basic-paint');
            console.log('fill-tool on');
        } else {
            $('#fill-tool').data('selected', false);
            $('.fill-on-click').addClass('basic-paint');
            $('.basic-paint').bind('mousedown', changeCellColor);
            $('.basic-paint').bind('mouseup', stopDraw);
            $('.basic-paint').removeClass('fill-on-click');
            console.log('fill-tool off');
        }
    }

    function useFillTool(e) {
        let cell = e.target.id
        let row = $(e.target).parent()[0].id
        let node = `#${row} #${cell}`
        console.log('background color before setting to target', $(e.target).css('background-color'));
        let targetColor = $(e.target).css('background-color')

        fill(node, targetColor)

        function fill(node, targetColor) {
            // console.log('node', node);
            // console.log('slicing up!', node.slice(5, 7));
            // console.log('slicing .length', node.slice(5, 7).length);
            // console.log('turning it into a number', Number(node.slice(5, 8)));
            // console.log('this is what were doing to row when going up', (Number(node.slice(5, 8)) - 1) + node.slice(7, node.length))
            // console.log('target color', targetColor);
            // console.log('background-color', $(node).css('background-color'))
            if (targetColor == currentColor) {
                console.log('color of clicked cell was already that color!');
                return;
            } else if ($(node).css('background-color') != targetColor) {
                console.log('ran into a wall! / other color', node);
                return;
            } else {
                $(node).css('background-color', currentColor)
            }

            //fill downward from original node
            fill(`#${'row-' + (Number(node.slice(5,7)) + 1)} ${node.slice(8,node.length)}`, targetColor)

            //fill upward from original node
            if (node.slice(5, 8) < 11) {
                fill(`#row-${ ('0' +(Number(node.slice(5,8)) - 1))} ${node.slice(8,node.length)}`, targetColor)
            } else {
                fill(`#row-${ (Number(node.slice(5,8)) - 1)} ${node.slice(8,node.length)}`, targetColor)
            }

            //filling right
            // console.log(`#cell-${(Number(node.slice(14,node.length)) + 1)}`);
            fill(`${node.slice(0,7)} #cell-${(Number(node.slice(14,node.length)) + 1)}`, targetColor)

            //filling left
            fill(`${node.slice(0,7)} #cell-${(Number(node.slice(14,node.length)) - 1)}`, targetColor)
        }
    }



    populateGrid();
    $('.color-box').on('click', changeSelectorColor);
    $('#color-picker').on('change', changeSelectorColor);
    $('#fill-tool').on('click', fillToolActiv);
    $('table').on('click', '.fill-on-click', useFillTool);
    $('.basic-paint').bind('mousedown', changeCellColor)
    $('.basic-paint').bind('mouseup', stopDraw);




})
