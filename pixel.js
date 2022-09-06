
let cont = document.querySelector('.container')
let currentColor = document.querySelector('.colorMe').value
let eraseMe = document.querySelector('.eraseMe')
let paintAll = document.querySelector('.paintAll')



function grid(size) {
    for(let i = 0; i < size * size; i++) {
        let pixel = document.createElement('div') 
        pixel.classList.add('pixels')
        pixel.addEventListener('click', () => {
            pixel.style.backgroundColor = currentColor
        })
      

        pixel.addEventListener('mousedown', () => {
            pixel.style.backgroundColor = undefined
        })
        

        cont.appendChild(pixel)
        eraseMe.addEventListener('click' ,() => {
            pixel.style.backgroundColor = "white"
             })

        paintAll.addEventListener('click', () => {
            pixel.style.backgroundColor = paintAll
        })
        
      
    }
}
grid(32.01)

let saveFile = document.querySelector('.storage')
function save() {

}



