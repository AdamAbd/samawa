<script>
	import logo from '$lib/images/logo.svg';
</script>

<footer class="py-16 bg-black/70 text-white">
	<div class="container mx-auto flex flex-col gap-5">
		<div class="inline-flex gap-2.5 items-center">
			<a href="/">
				<img src={logo} alt="Samawa Logo" class="h-10" />
			</a>
			<span class="text-2xl font-bold">Samawa</span>
		</div>
		<div class="flex flex-row justify-between">
			<span class="text-lg font-medium">Get Your <br /> Wedding Dream Here!</span>

			<div class="flex flex-col gap-2">
				<b>Our Service</b>
				<ul>
					<li>Home</li>
					<li>Package</li>
					<li>Testimonials</li>
				</ul>
			</div>

			<div class="flex flex-col gap-2">
				<b>Get In Touch</b>
				<ul class="flex flex-col">
					<li class="inline-flex gap-2">
						<i class="ri-map-pin-fill"></i>
						Jakarta, Indonesia
					</li>
					<li class="inline-flex gap-2">
						<i class="ri-phone-fill"></i>
						+628-129-999-786
					</li>
					<li class="inline-flex gap-2">
						<i class="ri-mail-line"></i>
						smwedding@gmail.com
					</li>
				</ul>
			</div>

			<div class="flex flex-col gap-2">
				<b>Our Social Media</b>
				<div class="inline-flex gap-6">
					<i class="ri-instagram-line text-3xl leading-none"></i>
					<i class="ri-facebook-circle-fill text-3xl leading-none"></i>
					<i class="ri-tiktok-fill text-3xl leading-none"></i>
					<i class="ri-twitter-x-line text-3xl leading-none"></i>
				</div>
			</div>
		</div>
	</div>
</footer>
