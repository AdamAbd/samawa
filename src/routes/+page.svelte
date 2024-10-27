<script>
	import '../app.css';
	import 'remixicon/fonts/remixicon.css';

	import Header from './Header.svelte';
	import Crown from '$lib/images/crown.svg';
	import Location from '$lib/images/location.svg';
	import House from '$lib/images/house.svg';
	import Like from '$lib/images/like.svg';
	import london from '$lib/images/london.png';
	import star from '$lib/images/star.svg';
	import user from '$lib/images/user.png';

	import logo from '$lib/images/logo.svg';
</script>

<div>
	<Header />

	<div class="flex flex-col mt-[114px]">
		<section>
			<div class="flex items-center px-[50px] w-[1000px] h-[480px] bg-red-50 rounded-[30px]">
				<div class="flex flex-col gap-5 p-5 w-[305px] h-fit bg-white rounded-[20px]">
					<div
						class="inline-flex items-center space-x-2 px-3.5 py-1.5 w-fit bg-[#5C2D2D] rounded-full"
					>
						<img class="h-[18px] aspect-square" src={Crown} alt="Icon Crow" />
						<span class="text-sm text-white font-bold">POPULAR</span>
					</div>
					<div class="flex flex-col gap-2">
						<span class="text-[28px] leading-[38px] font-bold"
							>Nikah Muda Abadi Pantai Bali Nusa</span
						>
						<span class="text-lg text-[#FF48B6] font-semibold">Rp 198.493.000</span>
					</div>
					<div class="inline-flex items-center gap-3.5">
						<div class="inline-flex gap-1.5 items-center">
							<img class="h-5 aspect-square" src={Location} alt="Icon Location" />
							<span class="text-sm font-bold">Luxemborgio</span>
						</div>
						<div class="inline-flex gap-1.5 items-center">
							<img class="h-5 aspect-square" src={House} alt="Icon Location" />
							<span class="text-sm font-bold">Tentram</span>
						</div>
					</div>
					<button class="px-5 py-3.5 w-full rounded-full bg-[#FF48B6]">
						<span class="font-semibold text-white">View Package</span>
					</button>
				</div>
			</div>
		</section>

		<section id="reason" class="container mx-auto my-[70px] flex flex-col items-center gap-[30px]">
			<h2 class="text-3xl font-bold text-center leading-10">
				Alasan Mereka Memilih <br /> Wedding Package Samawa
			</h2>
			<div class="inline-flex gap-10">
				<div
					class="flex flex-col flex-1 items-start gap-5 p-[30px] min-w-[340px] border rounded-[30px]"
				>
					<img class="h-[50px] aspect-square" src={Like} alt="Icon Like" />
					<div class="flex flex-col gap-2">
						<h3 class="text-xl font-bold">Dipercaya Sejak 1970</h3>
						<span
							>Kami telah melayani dengan kepercayaan dan dedikasi sejak tahun 1970, memastikan
							setiap momen pernikahan sempurna.</span
						>
					</div>
					<a href="/" class="text-[#FF48B6] font-semibold underline">Learn More</a>
				</div>
				<div
					class="flex flex-col flex-1 items-start gap-5 p-[30px] min-w-[340px] border rounded-[30px]"
				>
					<img class="h-[50px] aspect-square" src={Like} alt="Icon Like" />
					<div class="flex flex-col gap-2">
						<h3 class="text-xl font-bold">Boleh Refund 100%</h3>
						<span
							>Kepuasan Anda adalah prioritas kami. Nikmati jaminan pengembalian dana 100% tanpa
							syarat.</span
						>
					</div>
					<a href="/" class="text-[#FF48B6] font-semibold underline">Learn More</a>
				</div>
				<div
					class="flex flex-col flex-1 items-start gap-5 p-[30px] min-w-[340px] border rounded-[30px]"
				>
					<img class="h-[50px] aspect-square" src={Like} alt="Icon Like" />
					<div class="flex flex-col gap-2">
						<h3 class="text-xl font-bold">Top Organizers</h3>
						<span
							>Dengan tim terbaik, kami siap mewujudkan pernikahan impian Anda dengan layanan
							profesional dan berpengalaman.</span
						>
					</div>
					<a href="/" class="text-[#FF48B6] font-semibold underline">Learn More</a>
				</div>
			</div>
		</section>

		<section class="py-[70px] w-full bg-[#F7F7F9]">
			<div class="container mx-auto flex flex-col gap-y-7">
				<div class="inline-flex items-center justify-between">
					<h2 class="text-3xl font-bold leading-10">
						Browse Packages <br /> City Recomendation
					</h2>
					<button class="px-5 py-3.5 h-fit border border-black rounded-full">
						<span class="font-semibold">Explore All</span>
					</button>
				</div>
				<div class="grid grid-cols-3 gap-x-7 gap-y-6">
					<div class="inline-flex items-center gap-5 p-5 rounded-[30px] bg-white">
						<img src={london} alt="" />
						<div class="flex flex-col">
							<span class="text-xl font-bold">London</span>
							<span>183,498 Packages</span>
						</div>
					</div>
					<div class="inline-flex items-center gap-5 p-5 rounded-[30px] bg-white">
						<img src={london} alt="" />
						<div class="flex flex-col">
							<span class="text-xl font-bold">London</span>
							<span>183,498 Packages</span>
						</div>
					</div>
					<div class="inline-flex items-center gap-5 p-5 rounded-[30px] bg-white">
						<img src={london} alt="" />
						<div class="flex flex-col">
							<span class="text-xl font-bold">London</span>
							<span>183,498 Packages</span>
						</div>
					</div>
					<div class="inline-flex items-center gap-5 p-5 rounded-[30px] bg-white">
						<img src={london} alt="" />
						<div class="flex flex-col">
							<span class="text-xl font-bold">London</span>
							<span>183,498 Packages</span>
						</div>
					</div>
					<div class="inline-flex items-center gap-5 p-5 rounded-[30px] bg-white">
						<img src={london} alt="" />
						<div class="flex flex-col">
							<span class="text-xl font-bold">London</span>
							<span>183,498 Packages</span>
						</div>
					</div>
					<div class="inline-flex items-center gap-5 p-5 rounded-[30px] bg-white">
						<img src={london} alt="" />
						<div class="flex flex-col">
							<span class="text-xl font-bold">London</span>
							<span>183,498 Packages</span>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section id="review" class="my-[70px] flex flex-col gap-[30px]">
			<div class="container mx-auto inline-flex items-center justify-between">
				<h2 class="text-3xl font-bold leading-10">
					Happy Stories of <br />
					Our Wedding
				</h2>
			</div>

			<div class="marquee">
				<ul class="marquee__content">
					<div class="flex flex-col gap-5 p-[30px] w-[340px] border rounded-[30px]">
						<div class="inline-flex gap-1">
							<img class="h-5 aspect-square" src={star} alt="Star Location" />
							<img class="h-5 aspect-square" src={star} alt="Star Location" />
							<img class="h-5 aspect-square" src={star} alt="Star Location" />
							<img class="h-5 aspect-square" src={star} alt="Star Location" />
							<img class="h-5 aspect-square" src={star} alt="Star Location" />
						</div>
						<p class="leading-7">
							Keren banget Samawa, gue bisa nikah dengan pengalaman bagus dengan harga terjangkau!
							Good.
						</p>
						<div class="inline-flex gap-5 items-center">
							<img class="h-[70px] aspect-square" src={user} alt="User Location" />
							<div class="flex flex-col">
								<b>Andriana Putri</b>
								<span>Programmer</span>
							</div>
						</div>
					</div>
					<div class="flex flex-col gap-5 p-[30px] w-[340px] border rounded-[30px]">
						<div class="inline-flex gap-1">
							<img class="h-5 aspect-square" src={star} alt="Star Location" />
							<img class="h-5 aspect-square" src={star} alt="Star Location" />
							<img class="h-5 aspect-square" src={star} alt="Star Location" />
							<img class="h-5 aspect-square" src={star} alt="Star Location" />
							<img class="h-5 aspect-square" src={star} alt="Star Location" />
						</div>
						<p class="leading-7">
							Keren banget Samawa, gue bisa nikah dengan pengalaman bagus dengan harga terjangkau!
							Good.
						</p>
						<div class="inline-flex gap-5 items-center">
							<img class="h-[70px] aspect-square" src={user} alt="User Location" />
							<div class="flex flex-col">
								<b>Andriana Putri</b>
								<span>Programmer</span>
							</div>
						</div>
					</div>
					<div class="flex flex-col gap-5 p-[30px] w-[340px] border rounded-[30px]">
						<div class="inline-flex gap-1">
							<img class="h-5 aspect-square" src={star} alt="Star Location" />
							<img class="h-5 aspect-square" src={star} alt="Star Location" />
							<img class="h-5 aspect-square" src={star} alt="Star Location" />
							<img class="h-5 aspect-square" src={star} alt="Star Location" />
							<img class="h-5 aspect-square" src={star} alt="Star Location" />
						</div>
						<p class="leading-7">
							Keren banget Samawa, gue bisa nikah dengan pengalaman bagus dengan harga terjangkau!
							Good.
						</p>
						<div class="inline-flex gap-5 items-center">
							<img class="h-[70px] aspect-square" src={user} alt="User Location" />
							<div class="flex flex-col">
								<b>Andriana Putri</b>
								<span>Programmer</span>
							</div>
						</div>
					</div>
					<div class="flex flex-col gap-5 p-[30px] w-[340px] border rounded-[30px]">
						<div class="inline-flex gap-1">
							<img class="h-5 aspect-square" src={star} alt="Star Location" />
							<img class="h-5 aspect-square" src={star} alt="Star Location" />
							<img class="h-5 aspect-square" src={star} alt="Star Location" />
							<img class="h-5 aspect-square" src={star} alt="Star Location" />
							<img class="h-5 aspect-square" src={star} alt="Star Location" />
						</div>
						<p class="leading-7">
							Keren banget Samawa, gue bisa nikah dengan pengalaman bagus dengan harga terjangkau!
							Good.
						</p>
						<div class="inline-flex gap-5 items-center">
							<img class="h-[70px] aspect-square" src={user} alt="User Location" />
							<div class="flex flex-col">
								<b>Andriana Putri</b>
								<span>Programmer</span>
							</div>
						</div>
					</div>
				</ul>
				<!-- Mirrors the content above -->
				<ul class="marquee__content" aria-hidden="true">
					<div class="flex flex-col gap-5 p-[30px] w-[340px] border rounded-[30px]">
						<div class="inline-flex gap-1">
							<img class="h-5 aspect-square" src={star} alt="Star Location" />
							<img class="h-5 aspect-square" src={star} alt="Star Location" />
							<img class="h-5 aspect-square" src={star} alt="Star Location" />
							<img class="h-5 aspect-square" src={star} alt="Star Location" />
							<img class="h-5 aspect-square" src={star} alt="Star Location" />
						</div>
						<p class="leading-7">
							Keren banget Samawa, gue bisa nikah dengan pengalaman bagus dengan harga terjangkau!
							Good.
						</p>
						<div class="inline-flex gap-5 items-center">
							<img class="h-[70px] aspect-square" src={user} alt="User Location" />
							<div class="flex flex-col">
								<b>Andriana Putri</b>
								<span>Programmer</span>
							</div>
						</div>
					</div>
					<div class="flex flex-col gap-5 p-[30px] w-[340px] border rounded-[30px]">
						<div class="inline-flex gap-1">
							<img class="h-5 aspect-square" src={star} alt="Star Location" />
							<img class="h-5 aspect-square" src={star} alt="Star Location" />
							<img class="h-5 aspect-square" src={star} alt="Star Location" />
							<img class="h-5 aspect-square" src={star} alt="Star Location" />
							<img class="h-5 aspect-square" src={star} alt="Star Location" />
						</div>
						<p class="leading-7">
							Keren banget Samawa, gue bisa nikah dengan pengalaman bagus dengan harga terjangkau!
							Good.
						</p>
						<div class="inline-flex gap-5 items-center">
							<img class="h-[70px] aspect-square" src={user} alt="User Location" />
							<div class="flex flex-col">
								<b>Andriana Putri</b>
								<span>Programmer</span>
							</div>
						</div>
					</div>
					<div class="flex flex-col gap-5 p-[30px] w-[340px] border rounded-[30px]">
						<div class="inline-flex gap-1">
							<img class="h-5 aspect-square" src={star} alt="Star Location" />
							<img class="h-5 aspect-square" src={star} alt="Star Location" />
							<img class="h-5 aspect-square" src={star} alt="Star Location" />
							<img class="h-5 aspect-square" src={star} alt="Star Location" />
							<img class="h-5 aspect-square" src={star} alt="Star Location" />
						</div>
						<p class="leading-7">
							Keren banget Samawa, gue bisa nikah dengan pengalaman bagus dengan harga terjangkau!
							Good.
						</p>
						<div class="inline-flex gap-5 items-center">
							<img class="h-[70px] aspect-square" src={user} alt="User Location" />
							<div class="flex flex-col">
								<b>Andriana Putri</b>
								<span>Programmer</span>
							</div>
						</div>
					</div>
					<div class="flex flex-col gap-5 p-[30px] w-[340px] border rounded-[30px]">
						<div class="inline-flex gap-1">
							<img class="h-5 aspect-square" src={star} alt="Star Location" />
							<img class="h-5 aspect-square" src={star} alt="Star Location" />
							<img class="h-5 aspect-square" src={star} alt="Star Location" />
							<img class="h-5 aspect-square" src={star} alt="Star Location" />
							<img class="h-5 aspect-square" src={star} alt="Star Location" />
						</div>
						<p class="leading-7">
							Keren banget Samawa, gue bisa nikah dengan pengalaman bagus dengan harga terjangkau!
							Good.
						</p>
						<div class="inline-flex gap-5 items-center">
							<img class="h-[70px] aspect-square" src={user} alt="User Location" />
							<div class="flex flex-col">
								<b>Andriana Putri</b>
								<span>Programmer</span>
							</div>
						</div>
					</div>
				</ul>
			</div>
		</section>
	</div>

	<div class="py-16 bg-black/70 text-white">
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
	</div>
</div>

<style>
	.marquee {
		--gap: 2.5rem;
		display: flex;
		overflow: hidden;
		user-select: none;
		gap: var(--gap);
	}

	.marquee__content {
		flex-shrink: 0;
		display: flex;
		justify-content: space-around;
		min-width: 100%;
		gap: var(--gap);
		animation: scroll 10s linear infinite;
	}

	@keyframes scroll {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(calc(-100% - var(--gap)));
		}
	}
</style>
