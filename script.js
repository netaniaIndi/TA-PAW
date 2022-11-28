// import { MY_API_KEY } from 'config.js'; 
let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ea6f0d8d8amsh25f8e6801b976bcp1123e6jsn036194e4b416',
		'X-RapidAPI-Host': 'webcamstravel.p.rapidapi.com'
	}
};

fetch('https://webcamstravel.p.rapidapi.com/webcams/list/nearby=%7Blat%7D,%7Blng%7D,%7Bradius%7D?lang=en&show=webcams%3Aimage%2Clocation', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

menu.addEventListener('click', () =>{
    // kalo search di klik icons akan berubah jadi tanda X
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        // bakal ganti" videonya
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

