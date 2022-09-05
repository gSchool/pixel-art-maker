
let cont = document.querySelector('.container')
let currentColor = document.querySelector('.colorMe').value
let eraseMe = document.querySelector('.eraseMe')



function grid(size) {
    for(let i = 0; i < size * size; i++) {
        let pixel = document.createElement('div') 
        pixel.classList.add('pixels')
        pixel.addEventListener('click', () => {
            pixel.style.backgroundColor = currentColor
        })

        cont.appendChild(pixel)
        eraseMe.addEventListener('click' ,() => {
            pixel.style.backgroundColor = "white"
             })
      
    }
}
grid(32.01)




