import React from 'react'

export default function Contact(){
	return (
		<>	
			<h2 className="contact-title turquoise">Contact</h2>
			<hr/>

			<div className="section contact_section">
				<iframe 
					className="google_map" 
					title="{}"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.70859824347!2d-73.87162168515073!3d40.72443097933047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25e46cc1fbd1f%3A0x382fe1038e09145b!2s9800%20Woodhaven%20Blvd%2C%20Rego%20Park%2C%20NY%2011374!5e0!3m2!1sen!2sus!4v1591109676630!5m2!1sen!2sus" frameborder="0" 
					//style="{}" 
					allowfullscreen=""
					aria-hidden="false" 
					tabindex="0"
				>
				</iframe>

				<div className="address">
					<p>

					</p>

					<form className="contact_form">
						<input
							className="contact_name"
							type="text"
							name="name"
							placeholder="Your full name"
							maxlength="30"
						/>
												
						<input
							className="contact_email"
							type="text"
							name="email"
							placeholder="Your email address"
							maxlength="40"
						/>

						<div className="contact_captcha_form">
							<label className="contact_captcha_entry"></label>		

							<input type="text" 
								className="contact_spam1" 
								name="spam" 
								placeholder="Type captcha." 
								size="30" 
								tabindex="213"
								maxlength="6" required 
							/>
						</div>

						<input
							className="button contact contact_button"
							type="submit"
							value="Submit"
						/>

						<div className="prompts">	
							<label className="contactNamePrompt textPromptMsg"></label>
							<label className="contactEmailPrompt textPromptMsg"></label>
							<label className="contactEmailFormatPrompt textPromptMsg"></label>
							<label className="contact_commentSpamPrompt textPromptMsg"></label>
						</div>															
					</form>

					<br/><br/>

					<div className="thankyou_contact">
						Thank you for contacting us!
					</div>
				</div>	
			</div>		
		</>					
	)
}	