import React, { useState, useEffect } from 'react'
import About from './About'	
import Services from './Services'
import Contact from './Contact' 
//import Video from './Video'

export default function Main(){
	const [aboutImages, setAboutImages] = useState([])	
	const [servicesImages, setServicesImages] = useState([])	

	useEffect(() => {
		async function fetchData(){
			try {
				////https://images.unsplash.com/photo-1614173968962-0e61c5ed196f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDAxNTN8MHwxfHJhbmRvbXx8fHx8fHx8&ixlib=rb-1.2.1&q=80&w=200
				//const response = await fetch(`https://api.unsplash.com/photos/random?client_id=p2bChyPOiavirooedfC2QlV7Iks1lGKbMNEagO8MNlg&query=woman-face&orientation=portrait&count=1&include_adult=false`)
				const response = await fetch(`https://webdata-api.herokuapp.com`)
				const data = await response.json()
				setAboutImages(data[0].results.about)
				setServicesImages(data[0].results.services)

				//console.log(data.results.team)
			} catch(err){
				console.log("Issue loading images", err)
			}
		}
		fetchData()
	}, [])	


	// useEffect(() => {
	// 	async function fetchServices(){
	// 		try {
	// 			const response = await fetch(`https://webdata-api.herokuapp.com/data`)
	// 			const data = await response.json()
	// 			//console.log(data.results.services)
	// 		} catch(err){
	// 			console.log("Issue loading images", err)
	// 		}
	// 	}
	// 	fetchServices()
	// }, [])		
		
	return (
		<div className="main">
			<div className="quote_header">
				<q className="mainquote">There is no greater agony than bearing an untold story inside you.</q>
				<p className="quotecredit">~ Maya Angelou</p>
			</div>	

			{ aboutImages.map(({img, alt, name, title, heading, desc}) => (
				<About 
					image={img}
					alt={alt}
					name={name}
					title={title}
					heading={heading}
					desc={desc}
				/>
			))}

			<h2 className="services-title turquoise">Services</h2>
			<hr />
			<div className="section services_section">
				{ servicesImages.map(({img, alt, name, desc}) => (
					<Services
						image={img}	
						alt={alt}
						name={name}
						desc={desc}				
					/>														
				))}
			</div>


			<div className="quote_middle">
				<q className="mainquote">I never dreamed about success, I worked for it.</q>
				<p className="quotecredit">~ Estee Lauder</p>
			</div>

			<Contact />

		</div>
	)
}