<script>
	import '../contact-info/style.css';
	import Email_icon from '$lib/images/Email-icon.png';
	import Phone_icon from '$lib/images/Phone-icon.png';
	import Clock_icon from '$lib/images/Clock-icon.png';
</script>

<div>
	<div class="contact-container">
		<div class="contact-form">
			<h2>Contact Us</h2>
			<p>Feel free to contact us anytime. We will get back to you as soon as we can</p>
			<form>
				<input type="text" id="name" placeholder="Name*" required />

				<input type="email" id="email" placeholder="Email*" required />

				<input id="message" placeholder="Message*" required />

				<button type="submit">SEND</button>
			</form>
		</div>

		<div class="contact-info">
			<h2>Info</h2>
			<div class="info-item">
				<span class="icon"><img src={Email_icon} class="email-icon" alt="Email Icon" /></span>
				<a href="mailto:smwedding@gmail.com">smwedding@gmail.com</a>
			</div>
			<div class="info-item">
				<span class="icon"><img src={Phone_icon} class="phone-icon" alt="Phone Icon" /></span>
				<a href="tel:+628129999788">+628-129-999-788</a>
			</div>
			<div class="info-item">
				<span class="icon"><img src={Clock_icon} class="clock-icon" alt="Clock Icon" /></span>
				<span>09:00 - 18:00</span>
			</div>
		</div>
	</div>
</div>
