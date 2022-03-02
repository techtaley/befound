import React from 'react'

export default function About({image, alt, name, title, heading, desc}){
	return (
		<>
			<h2 className="about-title turquoise">About</h2>

			<div className="section about_section_one">
				<div className="subsection">
					<img
						className="team_image"
						src={image}
						alt={alt}
					/>
					<h3 className="team_name">{name}</h3>
					<p className="team_title">{title}</p>
					<div className="social_media">
						<a href="{}" target="_blank">
							<img
								src="{}"
								className="social_image_small"
								alt=""
							/>
						</a>
					</div>
				</div>

				<p className="about-description">
					<span className="logo">{heading} </span> 
					{desc} 
				</p>			
			</div>		
		</>
	)
}  