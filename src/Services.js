import React from 'react'

export default function Services({image, alt, name, desc}){
	return (
		<>

				<div className="subsection" >
					<img											
						className="services_image"
						src={image}
						alt={alt}
					/>
					<h3 className="services_name">{name}</h3>
					<p className="services_description">{desc}</p>
				</div>							
				
		</>
	
	)
}		