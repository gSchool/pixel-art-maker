// document.body.innerHTML = "Hello world!";

let main = document.createElement('div');
main.className = 'divContainer';
document.body.appendChild(main);
let className;

for(let i=0;i<50;i++) {
    const rowDiv=document.createElement('div');
    rowDiv.className = 'rowDivContainer';
    main.appendChild(rowDiv);

    for(let j=0;j<50;j++) {
        const div=document.createElement('div');
        div.className='divElem';
        div.addEventListener("click",(e)=>{
            e.target.className='colorChange';

            if(typeof className !=='undefined'){
                e.target.className=className;
                e.target.style="border-radius:0"
            }

        });
        rowDiv.appendChild(div);
    }
}
const colorArray=['red','blue','green','black','purple','aqua','pink','lightcoral','gold',
    'brown','blueviolet','olivedrab','blanchedalmond','darkorange','yellow','plum','cadetblue',
    'paleturquoise','tomato','turquoise','peachpuff','silver','lightseagreen','slateblue',
    'lavender','greenyellow','rebeccapurple'];
let palette = document.createElement('div');
palette.className = 'Pal';
document.body.appendChild(palette);
for(let i=0;i<33;i++) {
    const color = document.createElement('div');
    color.className = 'palColor'+i;
    //color.style="background-color: blue"
    palette.appendChild(color);
     color.addEventListener("click",(e)=>{
         className = e.target.className;
     })
}
