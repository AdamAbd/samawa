<script>
	import '../wedding-package-gold/style.css';
	import '../../app.css';

	let currentImageIndex = 0;
	import loc_icon from '$lib/images/location.svg';
	import star_icon from '$lib/images/star.svg';
	import popular_icon from '$lib/images/crown.png';
	import brochure_icon from '$lib/images/brochure.png';
	import virtual_icon from '$lib/images/play-icon.png';
	import dua_putri_icon from '$lib/images/duaputri.png';
	import image1 from '$lib/images/Package-wedding-image-1.png';
	import image2 from '$lib/images/Package-wedding-image-2.png';
	import image3 from '$lib/images/Package-wedding-image-3.png';
	import bonus_image_1 from '$lib/images/bonus.png';
	import bonus_image_2 from '$lib/images/bonus(1).png';
	import kenny from '$lib/images/Kenny.png';
	import andrianaputri from '$lib/images/andrianaputri.png';
	const images = [image1, image2, image3];

	// Auto-switch images every 5 seconds
	setInterval(() => {
		currentImageIndex = (currentImageIndex + 1) % images.length;
	}, 5000);

	// modal for the bonus details
	import Modal from './Modal.svelte';
	import Header from '../Header.svelte';
	import Footer from '../Footer.svelte';

	// Track which modal is open by ID, or set to `null` if none are open
	let currentModal = 0;
	let isModalOpen = false;

	// Open a specific modal by ID
	function openModal(modalID) {
		currentModal = modalID;
		isModalOpen = true;
		document.body.style.overflow = 'hidden';
	}

	// Close any open modal
	function closeModal() {
		currentModal = 0;
		isModalOpen = false;
		document.body.style.overflow = '';
	}
</script>

<div>
	<Header />

	<div class="container mt-[114px]">
		<!-- Header Section -->
		<div class="package-header">
			<div class="header-left">
				<h1 class="package-title">PLATINUM</h1>
				<p class="package-location">
					<img class="location-icon" src={loc_icon} alt="" /> Jakarta, Indonesia
				</p>
			</div>

			<div class="header-right">
				<div class="stars">
					<span><img src={star_icon} alt="" /></span>
					<span><img src={star_icon} alt="" /></span>
					<span><img src={star_icon} alt="" /></span>
					<span><img src={star_icon} alt="" /></span>
					<span><img src={star_icon} alt="" /></span>
				</div>
				<span class="review-count">(20,468)</span>
			</div>
		</div>

		<!-- Image Gallery Section -->
		<div class="gallery">
			<div class="main-image">
				<img src={images[currentImageIndex]} alt="Wedding Package Overview" />
			</div>
			<div class="thumbnail-images">
				{#each images as image, index}
					<img
						src={image}
						alt="Thumbnail"
						class:selected={index === currentImageIndex}
						on:click={() => (currentImageIndex = index)}
					/>
				{/each}
			</div>
			<!-- Tags -->
			<span class="tag top-left"> <img src={popular_icon} alt="img" /> POPULAR</span>
			<span class="tag bottom-left"> <img src={brochure_icon} alt="" />BROCHURE .PDF</span>
			<span class="tag bottom-right"> <img src={virtual_icon} alt="" />VIRTUAL 360</span>
		</div>

		<!-- Description and Price Section -->
		<div class="content">
			<div class="package-details">
				<h1 class="package-details-header">It's a Good Package</h1>
				<h2 class="text-lg font-bold mt-8 mb-4">PAKET WEDDING PLATINUM</h2>

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
					<li>Dekorasi Premium yang disesuaikan dengan bunga impor</li>
					<li>Backdrop Resepsi yang mewah</li>
					<li>Piring makan + sendok + garpu 600 pcs</li>
					<li>Meja Buffe 10</li>
				</ul>

				<!-- Dokumentasi & Foto Section -->
				<h3 class="text-base font-semibold mt-4">Dokumentasi & Foto</h3>
				<ul class="list-disc list-inside pl-4">
					<li>3 Photographer</li>
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
					<li>Layanan tambahan seperti pre-wedding photoshoot dan honeymoon planning</li>
				</ul>
			</div>

			<!-- Price and Booking Section -->
			<div class="price-container">
				<div class="price">Rp 225.500.000</div>
				<hr class="divider" />
				<hr class="divider" />
				<div class="organizer-title">Wedding Organizer</div>

				<div class="organizer-info">
					<img src={dua_putri_icon} alt="Organizer Icon" class="organizer-icon" />
					<div class="organizer-details">
						<div class="organizer-name">Dua Putri</div>
						<div class="organizer-packages">194 Packages</div>
					</div>
				</div>

				<hr class="divider" />
				<button class="choose-package-btn">Choose This Package</button>
			</div>
		</div>

		<!-- Bonus Section -->
		<div class="bonus">
			<h3>Bonus Included</h3>
			<div class="bonus-cards">
				<div class="bonus-card">
					<div class="bonus-description">
						<img src={bonus_image_1} alt="bonus-image" />
						<div class="bonus-info">
							<h3>Post Wedding <br />Photography Album</h3>
							<p>Rp 0/package <s>Rp 680.000.000</s></p>
						</div>
					</div>
					<button on:click={() => openModal(1)} class="bonus-details-btn">View Details</button>
				</div>
				<div class="bonus-card">
					<div class="bonus-description">
						<img src={bonus_image_2} alt="bonus-image" />
						<div class="bonus-info">
							<h3>Post Wedding <br />Photography Album</h3>
							<p>Rp 0/package <s>Rp 680.000.000</s></p>
						</div>
					</div>
					<button on:click={() => openModal(2)} class="bonus-details-btn">View Details</button>
					<Modal isOpen={isModalOpen} onClose={closeModal} {currentModal} />
				</div>
			</div>
		</div>

		<!-- Testimonials Section -->
		<div class="testimonials">
			<h3>Wedding Testimonials</h3>
			<div class="testimonial-cards">
				<div class="testimonial-card">
					<div class="testimonial-stars">
						<span><img src={star_icon} alt="" /></span>
						<span><img src={star_icon} alt="" /></span>
						<span><img src={star_icon} alt="" /></span>
						<span><img src={star_icon} alt="" /></span>
						<span><img src={star_icon} alt="" /></span>
					</div>
					<p>Semua detail diperhatikan dengan baik dan hasilnya luar biasa. Highly recommended!</p>
					<span><img class="persona-image" src={kenny} alt="" />Kenny</span>
				</div>
				<div class="testimonial-card">
					<div class="testimonial-stars">
						<span><img src={star_icon} alt="" /></span>
						<span><img src={star_icon} alt="" /></span>
						<span><img src={star_icon} alt="" /></span>
						<span><img src={star_icon} alt="" /></span>
						<span><img src={star_icon} alt="" /></span>
					</div>
					<p>Terima kasih, Samawa! Pernikahan kami berjalan lancar dan sempurna.</p>
					<span><img class="persona-image" src={andrianaputri} alt="" />Andriana Putri</span>
				</div>
			</div>
		</div>
	</div>

	<Footer />
</div>
