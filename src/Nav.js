import React from 'react'

export default function Nav(){	
	return(
			<div className="topmenu">
				<a href="#header" class="top_link">home</a>
				<a href="#about_section" class="top_link">about</a>
				<a href="#services_section" class="top_link">services</a>
				<a href="#contact_section" class="top_link">contact</a>				
			</div>
		
	)
}
// export default function Nav({home, about, services, contact}){
	
// 	return(
// 			<div className="topmenu">
// 				<a href="#header" class="top_link">{home}</a>
// 				<a href="#about_section" class="top_link">{about}</a>
// 				<a href="#services_section" class="top_link">{services}</a>
// 				<a href="#contact_section" class="top_link">{contact}</a>				
// 			</div>
		
// 	)
// }