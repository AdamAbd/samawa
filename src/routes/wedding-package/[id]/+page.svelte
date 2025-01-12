<script>
	import '../../../app.css';

	import loc_icon from '$lib/images/location.svg';
	import star_icon from '$lib/images/star.svg';
	import popular_icon from '$lib/images/crown.png';
	import brochure_icon from '$lib/images/brochure.png';
	import virtual_icon from '$lib/images/play-icon.png';
	import dua_putri_icon from '$lib/images/duaputri.png';
	import image1 from '$lib/images/Package-wedding-image-1.png';
	import image2 from '$lib/images/Package-wedding-image-2.png';
	import image3 from '$lib/images/Package-wedding-image-3.png';
	import bonus_image from '$lib/images/bonus.png';
	import kenny from '$lib/images/Kenny.png';
	import andrianaputri from '$lib/images/andrianaputri.png';
	import Modal from '../Modal.svelte';
	import Header from '../../../lib/components/Header.svelte';
	import { onMount } from 'svelte';

	let { data } = $props();

	// modal for the bonus details
	let isModalOpen = $state(false);
	let currentImageIndex = $state(0);
	let loading = $state(false);
	let place = $state(null);

	function openModal() {
		isModalOpen = true;
		document.body.style.overflow = 'hidden';
	}

	function closeModal() {
		isModalOpen = false;
		document.body.style.overflow = '';
	}

	async function fetchPlace() {
		try {
			loading = true;

			const res = await fetch('https://samawa-api.riqgarden.pp.ua/wedding-places', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization:
						'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ0ZXN0dXNlciIsImlhdCI6MTczNjQ4MDIyNX0.WNSq8dgzSQ0lszLinN-H1CadUd0XV7wIyU8-G5uBU7A'
				}
			});
			if (res.ok) {
				const places = await res.json();

				place = places.find((item) => item.id === parseInt(data.id));
			} else {
				console.error('Failed to fetch place:', res.status);
			}
		} catch (error) {
			console.error('Error fetching place:', error);
		} finally {
			loading = false;
		}
	}

	// const images = [image1, image2, image3];
	let images = $derived([place?.image, image2, image3]);

	// Auto-switch images every 5 seconds
	setInterval(() => {
		currentImageIndex = (currentImageIndex + 1) % images.length;
	}, 5000);

	onMount(() => {
		fetchPlace();
	});
</script>

<div>
	<Header />

	<div class="container mx-auto mt-[114px]">
		<div class="max-w-7xl mx-auto flex justify-between items-start pb-5">
			<div class="flex flex-col">
				<h1 class="text-2xl font-bold mt-2 mb-0">{place?.name}</h1>
				<p class="text-black font-bold text-lg mt-1">
					<img class="pr-1 align-middle inline" src={loc_icon} alt="" />
					{place?.location}
				</p>
			</div>

			<div class="flex flex-col items-end mt-5">
				<div class="flex space-x-1">
					<span><img src={star_icon} alt="" /></span>
					<span><img src={star_icon} alt="" /></span>
					<span><img src={star_icon} alt="" /></span>
					<span><img src={star_icon} alt="" /></span>
					<span><img src={star_icon} alt="" /></span>
				</div>
				<span class="mt-1 ml-4 text-black font-bold">(18,493)</span>
			</div>
		</div>

		<!-- Image Gallery Section -->
		<div class="w-full flex gap-4 mb-8 relative">
			<img
				class="w-[calc(100%-280px)] h-[554px] rounded-[30px] object-cover"
				src={images[currentImageIndex]}
				alt="Wedding Package Overview"
			/>
			<div class="flex flex-col gap-4">
				{#each images as image, index}
					<button
						type="button"
						class={`cursor-pointer rounded-[24px] border-2 ${
							index === currentImageIndex ? 'border-[#FF48B6]' : 'border-transparent'
						}`}
						onclick={() => (currentImageIndex = index)}
					>
						<img class="w-[280px] h-[170px] rounded-[22px]" src={image} alt="Thumbnail" />
					</button>
				{/each}
			</div>
			<!-- Tags -->
			<span
				class="absolute top-5 left-5 px-3 py-1.5 rounded-[20px] text-sm font-bold text-black bg-white flex items-center gap-1 shadow-md"
			>
				<img src={popular_icon} alt="img" /> POPULAR
			</span>
			<span
				class="absolute bottom-6 left-5 px-3 py-1.5 rounded-[20px] text-sm font-bold text-black bg-white flex items-center gap-1 shadow-md"
			>
				<img src={brochure_icon} alt="" />BROCHURE .PDF
			</span>
			<span
				class="absolute bottom-6 right-[calc(280px+20px+16px)] px-3 py-1.5 rounded-[20px] text-sm font-bold text-black bg-white flex items-center gap-1 shadow-md"
			>
				<img src={virtual_icon} alt="" />VIRTUAL 360
			</span>
		</div>

		<!-- Description and Price Section -->
		<div class="flex gap-6 mb-8 w-full">
			<div class="w-2/3">
				<h2 class="text-lg font-bold mb-4">PAKET WEDDING GOLD</h2>

				<!-- Rias & Busana Section -->
				<h3 class="text-base font-semibold mt-4">Rias & Busana</h3>
				<ul class="list-disc list-inside pl-4">
					<li>Make up dan busana pengantin akad nikah 1 pasang</li>
					<li>Touch up dan busana resepsi 1 pasang</li>
					<li>Aksesoris dan melati</li>
					<li>Makeup dan busana ibu pengantin 2 orang</li>
					<li>Busana bapak pengantin 2 orang</li>
					<li>Makeup dan busana penerima tamu 4 orang</li>
					<li>Make up dan busana among perempuan/keluarga 4 orang</li>
					<li>Busana among laki-laki/keluarga 4 orang</li>
				</ul>

				<!-- Dekorasi & Alat Section -->
				<h3 class="text-base font-semibold mt-4">Dekorasi & Alat</h3>
				<ul class="list-disc list-inside pl-4">
					<li>Dekorasi Premium yang disesuaikan dengan tema khusus dan bunga segar</li>
					<li>Backdrop Resepsi yang mewah</li>
					<li>Piring makan + sendok + garpu 400 pcs</li>
					<li>Meja Buffe 10</li>
				</ul>

				<!-- Dokumentasi & Foto Section -->
				<h3 class="text-base font-semibold mt-4">Dokumentasi & Foto</h3>
				<ul class="list-disc list-inside pl-4">
					<li>2 Photographer</li>
					<li>2 Videographer</li>
					<li>1 Album Kolase</li>
					<li>Video sinematik</li>
				</ul>

				<!-- Hiburan Section -->
				<h3 class="text-base font-semibold mt-4">Hiburan</h3>
				<ul class="list-disc list-inside pl-4">
					<li>Live Band atau DJ</li>
					<li>MC Profesional</li>
				</ul>

				<!-- Layanan Tambahan Section -->
				<h3 class="text-base font-semibold mt-4">Layanan Tambahan</h3>
				<ul class="list-disc list-inside pl-4">
					<li>Wedding Planner Profesional</li>
					<li>Souvenir Eksklusif untuk tamu undangan</li>
					<li>Suite pengantin yang mewah</li>
				</ul>

				<!-- Bonus Section -->
				<div class="mt-8 rounded-lg">
					<h3 class="text-lg font-bold mb-3">Bonus Included</h3>
					<div class="flex flex-col gap-4">
						<div
							class="flex items-center justify-between py-4 px-5 gap-1 rounded-3xl mb-4 border border-gray-300"
						>
							<div class="flex items-center justify-between">
								<img src={bonus_image} alt="Bonus" class="max-w-[170px] max-h-[130px]" />
								<div class="pl-5">
									<h3 class="font-bold">Post Wedding <br />Photography Album</h3>
									<p class="text-pink-500 text-base mt-0 mb-5">
										Rp 0/package <s class="text-black">Rp 680.000.000</s>
									</p>
								</div>
							</div>
							<button
								onclick={openModal}
								class="flex items-center justify-center text-center min-w-[127px] max-h-[41px] bg-transparent border border-black rounded-full text-black font-semibold px-5 py-3 cursor-pointer hover:bg-gray-200"
							>
								View Details
							</button>
							<Modal isOpen={isModalOpen} onClose={closeModal} />
						</div>
					</div>
				</div>

				<!-- Testimonials Section -->
				<div class="mt-8">
					<h3 class="text-lg font-bold mb-3">Wedding Testimonials</h3>
					<div class="flex gap-5">
						<div class="w-1/2 bg-transparent p-4 rounded-2xl mb-4 border border-gray-300">
							<div class="flex items-center gap-1 mb-5">
								<span><img src={star_icon} alt="" /></span>
								<span><img src={star_icon} alt="" /></span>
								<span><img src={star_icon} alt="" /></span>
								<span><img src={star_icon} alt="" /></span>
								<span><img src={star_icon} alt="" /></span>
							</div>
							<p class="text-base mt-5 mb-5">
								Semua detail diperhatikan dengan baik dan hasilnya luar biasa. Highly recommended!
							</p>
							<span class="font-bold text-sm text-black flex items-center">
								<img class="w-12 h-12 mr-3 align-middle" src={kenny} alt="" />Kenny
							</span>
						</div>
						<div class="w-1/2 bg-transparent p-4 rounded-2xl mb-4 border border-gray-300">
							<div class="flex items-center gap-1 mb-5">
								<span><img src={star_icon} alt="" /></span>
								<span><img src={star_icon} alt="" /></span>
								<span><img src={star_icon} alt="" /></span>
								<span><img src={star_icon} alt="" /></span>
								<span><img src={star_icon} alt="" /></span>
							</div>
							<p class="text-base mt-5 mb-5">
								Terima kasih, Samawa! Pernikahan kami berjalan lancar dan sempurna.
							</p>
							<span class="font-bold text-sm text-black flex items-center">
								<img class="w-12 h-12 mr-3 align-middle" src={andrianaputri} alt="" />Andriana Putri
							</span>
						</div>
					</div>
				</div>
			</div>

			<!-- Price and Booking Section -->
			<div class="sticky top-32 w-1/3 h-min p-6 border rounded-2xl">
				<div class="text-3xl font-bold text-pink-500 mb-5">
					{new Intl.NumberFormat('id-ID', {
						style: 'currency',
						currency: 'IDR'
					}).format(parseInt(place?.price))}
				</div>
				<hr class="border-t border-gray-300 my-2" />
				<div class="font-bold text-black text-base mb-2">Wedding Organizer</div>

				<div
					class="flex items-center gap-3 p-3 rounded-xl border border-gray-300 bg-transparent mb-5"
				>
					<img src={dua_putri_icon} alt="Organizer Icon" class="w-12 h-12 rounded-full" />
					<div class="text-left">
						<div class="font-bold text-black">Dua Putri</div>
						<div class="text-sm text-black">194 Packages</div>
					</div>
				</div>

				<a
					href={`/checkout/${place?.id}`}
					class="w-full h-13 py-3 rounded-full bg-pink-500 text-white text-base font-bold hover:bg-pink-700"
				>
					Choose This Package
				</a>
			</div>
		</div>
	</div>
</div>
