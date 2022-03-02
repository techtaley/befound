import React from 'react'
import './App.css'

export default function Banner(){

	return (
		<div>
			<img className="banner-img" src="https://images.unsplash.com/photo-1524696465145-27f3e2c31352?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1042&q=80" key="Sunflower" alt="Sunflower" />
			<div className="banner-div">
				<h1 className="banner-title">Sunflower</h1>
				<h2 className="banner-description">"Aziz Acharki"</h2>
				<button className="header-btn">
					<a className="header-link" href="https://unsplash.com/@acharki95">My Work</a>
				</button>
			</div>
		</div>
	)
}
// export default function Banner({image, key, alt, title, desc, link}){

// 	return (
// 		<div>
// 			<img className="banner-img" src={image} key={key} alt={alt} />
// 			<div className="banner-div">
// 				<h1 className="banner-title">{title}</h1>
// 				<h2 className="banner-description">{desc}</h2>
// 				<button className="header-btn">
// 					<a className="header-link" href={link}>My Work</a>
// 				</button>
// 			</div>
// 		</div>
// 	)
// }