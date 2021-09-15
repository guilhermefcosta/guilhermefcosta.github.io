var slide_indice = 1
var time_espera = 0
showIndex(slide_indice)

function showIndex(indice) {
    if (time_espera) {
        clearTimeout(time_espera)
    }

    let slides = document.getElementsByClassName('mySlides');
    let pontos = document.getElementsByClassName('dot');
    
    if (indice > slides.length) { slide_indice = 1 }
    else if (indice < 1) { slide_indice = slides.length }
    else { slide_indice = indice }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    
    for (let i = 0; i < pontos.length; i++) {
        pontos[i].className = "dot"
    }
    
    slides[slide_indice - 1].style.display = "block"
    pontos[slide_indice - 1].className += " active"

    time_espera = setTimeout(() => {
        slide_indice++
        showIndex(slide_indice)
    }, 4000)
    
    
}