let images = [...document.querySelectorAll('.item')]
const slider = document.querySelector('.slider')
const parent = document.querySelector('.parent')
const items = document.querySelectorAll('.item')
let paral = 0

for(let i = 0; i <items.length; i++) {
    images[i].style.backgroundImage = `url(./img/${i+1}.jpg)`
}

let current = 0
parent.onmousewheel = (e) => {
    // current += e.deltaY / 40
    if(current >= 350) {
        current = 0  
    }else if(current <=0 ){
        current = 350
    }
    slider.style.left = -current + '%'
}
