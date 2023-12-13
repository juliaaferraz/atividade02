'use strict'


const forma1 = document.getElementById('forma1')
const forma2 = document.getElementById('forma2')
const forma3 = document.getElementById('forma3')
const forma4 = document.getElementById('forma4')
const forma5 = document.getElementById('forma5')
const forma6 = document.getElementById('forma6')
const forma7 = document.getElementById('forma7')
const forma8 = document.getElementById('forma8')





function mudarCor () {
    forma1.classList.toggle('vermelho')
}
function mudarForma () {
    forma2.classList.toggle('circulo')
}
function mudarForma1 () {
    forma3.classList.toggle('retangulo')
}
function mudarImagem () {
    forma4.classList.toggle('imagem')
}
function mudarPiscar () {
    forma5.classList.toggle('piscar')
}
function mudarPassar () {
    forma6.classList.toggle('passar')
}
function mudarRotacao () {
    forma7.classList.toggle('rodar')
}
function mudarDesaparecer () {
    forma8.classList.toggle('desaparecer')
}



forma1.addEventListener('click', mudarCor)
forma2.addEventListener('click', mudarForma)
forma3.addEventListener('click', mudarForma1)
forma4.addEventListener('click', mudarImagem)
forma5.addEventListener('click', mudarPiscar)
forma6.addEventListener('click', mudarPassar)
forma7.addEventListener('click', mudarRotacao)
forma8.addEventListener('click', mudarDesaparecer)