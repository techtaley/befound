import React from 'react'
import './App.css'

export default function Slider({image, key, alt, title, desc, link}){
	let slideIndex = 0;
	showSlides();
	
	function showSlides() {
	  
	  let slides = document.getElementsByClassName("mySlides");
	  for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	  }
	  slideIndex++;
	  if (slideIndex > slides.length) {slideIndex = 1}
	  for (let i = 0; i < slides.length; i++) {
		slides[slideIndex-1].style.display = "block";
	}
	  setTimeout(showSlides, 5000); // Change image every 3 seconds
	}

	return (
		<div className="mySlides fade">
			<img className="banner-img" src={image} key={key} alt={alt} />
			<div className="banner-div">
				<h1 className="banner-title">{title}</h1>
				<h2 className="banner-description">{desc}</h2>
				<button className="header-btn">
					<a className="header-link" href={link}>My Work</a>
				</button>
			</div>
		</div>
	)
}