var btnmobile = document.getElementById('btn-mobile')

function toggleMenu(){
    var navmobile = document.getElementById('nav')
    navmobile.classList.toggle('active')
}




var main = document.getElementById('mainMobile')
var sobre = document.getElementById('sobreMobile')
var contato = document.getElementById('contatoMobile')
var portfolio = document.getElementById('portfolioMobile')

function escondeMenu(){
    var navmobile = document.getElementById('nav')
    navmobile.classList.remove('active')
}
   



main.addEventListener('click',escondeMenu);
sobre.addEventListener('click',escondeMenu);
contato.addEventListener('click',escondeMenu);
portfolio.addEventListener('click',escondeMenu);

btnmobile.addEventListener('click', toggleMenu);
