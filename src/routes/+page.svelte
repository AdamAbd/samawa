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

	import WeedingPackage from '$lib/images/package.png';
	import Footer from './Footer.svelte';
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

		<section
			id="packages"
			class="container mx-auto mb-[70px] flex flex-col items-center gap-[30px]"
		>
			<div class="inline-flex items-center justify-between w-full">
				<h2 class="text-3xl font-bold leading-10">
					Our Latest & Best <br /> Wedding Packages
				</h2>
				<button class="px-5 py-3.5 h-fit border border-black rounded-full">
					<span class="font-semibold">Explore All</span>
				</button>
			</div>

			<div class="flex flex-row justify-between w-full">
				<div class="flex flex-col gap-4 w-[260px]">
					<img class="h-[300px]" src={WeedingPackage} alt="Weeding Package" />
					<span class="text-xl font-bold leading-[30px]"
						>Nikah Muda Abadi Pantai Bali Nusa Penida</span
					>
					<div class="flex flex-col gap-3.5">
						<div class="inline-flex gap-1.5 items-center">
							<img class="h-5 aspect-square" src={Location} alt="Icon Location" />
							<span class="text-sm font-bold">Luxemborgio City</span>
						</div>
						<div class="inline-flex gap-1.5 items-center">
							<img class="h-5 aspect-square" src={House} alt="Icon Location" />
							<span class="text-sm font-bold">Tentram Organizer</span>
						</div>
					</div>
					<span class="text-[#FF48B6] font-bold">Rp 198.493.000</span>
				</div>
				<div class="flex flex-col gap-4 w-[260px]">
					<img class="h-[300px]" src={WeedingPackage} alt="Weeding Package" />
					<span class="text-xl font-bold leading-[30px] h-[60px]">Honeymoon Fast</span>
					<div class="flex flex-col gap-3.5">
						<div class="inline-flex gap-1.5 items-center">
							<img class="h-5 aspect-square" src={Location} alt="Icon Location" />
							<span class="text-sm font-bold">Luxemborgio City</span>
						</div>
						<div class="inline-flex gap-1.5 items-center">
							<img class="h-5 aspect-square" src={House} alt="Icon Location" />
							<span class="text-sm font-bold">Tentram Organizer</span>
						</div>
					</div>
					<span class="text-[#FF48B6] font-bold">Rp 198.493.000</span>
				</div>
				<div class="flex flex-col gap-4 w-[260px]">
					<img class="h-[300px]" src={WeedingPackage} alt="Weeding Package" />
					<span class="text-xl font-bold leading-[30px]"
						>Nikah Muda Abadi Pantai Bali Nusa Penida</span
					>
					<div class="flex flex-col gap-3.5">
						<div class="inline-flex gap-1.5 items-center">
							<img class="h-5 aspect-square" src={Location} alt="Icon Location" />
							<span class="text-sm font-bold">Luxemborgio City</span>
						</div>
						<div class="inline-flex gap-1.5 items-center">
							<img class="h-5 aspect-square" src={House} alt="Icon Location" />
							<span class="text-sm font-bold">Tentram Organizer</span>
						</div>
					</div>
					<span class="text-[#FF48B6] font-bold">Rp 198.493.000</span>
				</div>
				<div class="flex flex-col gap-4 w-[260px]">
					<img class="h-[300px]" src={WeedingPackage} alt="Weeding Package" />
					<span class="text-xl font-bold leading-[30px]"
						>Nikah Muda Abadi Pantai Bali Nusa Penida</span
					>
					<div class="flex flex-col gap-3.5">
						<div class="inline-flex gap-1.5 items-center">
							<img class="h-5 aspect-square" src={Location} alt="Icon Location" />
							<span class="text-sm font-bold">Luxemborgio City</span>
						</div>
						<div class="inline-flex gap-1.5 items-center">
							<img class="h-5 aspect-square" src={House} alt="Icon Location" />
							<span class="text-sm font-bold">Tentram Organizer</span>
						</div>
					</div>
					<span class="text-[#FF48B6] font-bold">Rp 198.493.000</span>
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

	<Footer />
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
