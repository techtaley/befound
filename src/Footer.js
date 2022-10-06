import React from 'react'

export default function Footer(){
	return (
		<footer className="footer">
			<div className="footer_primary">
				<div className="footer_logo">
					<img
						className="footer_logo_image"
						src="images/selector.png"
						alt=""
					/>
					<h1 className="footer_logo_text">Be Found</h1>
					<div className="footer_links">
						<a href="grid.html#header">home</a>
						<a href="grid.html#about_section_textimage">about</a>
						<a href="grid.html#contact_section">contact</a>
																							
					</div>

				</div>

				<div className="footer_subscribe">
					<h2>Subscribe</h2>
					<p className="footer_paragraph">
						We'll email you about new items!
					</p>

					<form className="subscribe_form" action="mailto:taloveous@expansivedesigns.com" method="post" encType="text/plain">
						<input
							className="subscribe_email"
							type="text"
							name="subscribe"
							placeholder="Your email address"
							maxlength="40"
						/>
						<div className="subscribe_captcha_form">
							<label className="subscribe_captcha_entry"></label>
							<input type="text" 
								className="subscribe_spam" 
								name="spam" 
								placeholder="Type captcha." 
								size="30"
								maxlength="6" 
								/>
						</div>	

						<input
							className="button subscribe subscribe_button"
							type="submit"
							value="Submit"
						/>
						<div className="prompts">	
							<label className="subscribeEmailPrompt textPromptMsg"></label>	
							<label className="subscribeEmailFormatPrompt textPromptMsg"></label>
							<label className="subscribe_commentSpamPrompt textPromptMsg"></label>								
						</div>

					</form>

					<div className="thankyou_subscribe">
						Thank you for subscribing!
					</div>
				</div>

				<div className="footer_social">
					<h2>Let's Connect!</h2>

					<div className="footer_social_images">
						<a href="https://www.facebook.com/expansivedesigns/?ref=hl">Facebook</a>
						<br />
						<a href="https://www.instagram.com/expansivedesigns/">Instagram</a>
						<br />
						<a href="https://twitter.com/expansivedesign">Twitter</a>
						<br />
					</div>
				</div>
			</div>

			<div className="footer_secondary">
				<p>
					Copyright&copy; Legendary Gemstone LLC dba Expansive
					Designs &nbsp; &bullet; &nbsp; Woodhaven, NY 11421
				</p>
			</div>
		</footer>
	)
} 