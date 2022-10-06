import React, { useState, useEffect } from 'react'
//import React from 'react'
import Nav from './Nav'
import Banner from './Banner'
import Main from './Main'
import Footer from './Footer'
//import Form from './Form'
//require('dotenv').config()

import './App.css'

export default function BeFound(){  //use can only use hooks in function components
	const [navMenu, setNavMenu] = useState([])	
	//const [bannerImages, setBannerImages] = useState([])

	useEffect(() => {
		async function fetchBanner(){
			try {
				//const response = await fetch(`https://api.unsplash.com/photos/random?client_id=p2bChyPOiavirooedfC2QlV7Iks1lGKbMNEagO8MNlg&query=flowers&orientation=portrait&count=3&include_adult=false`)
				const response = await fetch(`https://webdata-api.herokuapp.com`)
				const data = await response.json()	
				setNavMenu(data[0].results.menus)			
				//setBannerImages(data[0].results.urls)					
				//console.log(data[0].results.menus)
			} catch(err){
				console.log("Issue loading images", err)
			}
		}
		fetchBanner()
	}, [navMenu])	
	//}, [navMenu, bannerImages])	

	return (
		<div>
			
		{ navMenu.map(({home, about, services, contact}) => (
			<Nav 
				home={home}
				about={about}
				services={services}
				contact={contact}
			/>
			))} 

			<Banner />
			{/* { bannerImages.map(({id, img, title, desc, link}) => (
				<Banner
					key={id}
					image={img}
					title={title}
					desc={desc}
					link={link}			
					alt={title}
				/>
			))} */}

			<Main />			
			<Footer />
		</div>			
	)
}	