var btnmobile = document.getElementById('btn-mobile')

function toggleMenu(){
    var nav = document.getElementsById('nav')
    nav.classList.toggle('active')
}

btnmobile.addEventListener('click',toggleMenu);