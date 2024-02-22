let searchbar = document.querySelector('#search-bar');
let searchbox = document.querySelector('.search-box');
let menubar = document.querySelector('#menu-bar');
let mynav = document.querySelector('.navbar');

searchbar.onclick = () =>{
    searchbox.classList.toggle('active')
}

menubar.onclick = () =>{
    mynav.classList.toggle('active');
}