<script>
	import '../../../app.css';
	import logo from '$lib/images/logo.svg';
	import bca from '$lib/images/bca.png';
	import mandiri from '$lib/images/mandiri.png';
	import andri from '$lib/images/andrianaputri.png';
	import dua from '$lib/images/duaputri.png';
	import wed from '$lib/images/photowed.png';
	import Header from '../../../lib/components/Header.svelte';
	import Footer from '../../../lib/components/Footer.svelte';
	import { onMount } from 'svelte';

	let { data } = $props();

	let loading = $state(false);
	let place = $state(null);

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

	let totalPayment = $derived({
		price: place?.price,
		tax: place?.price * (0.12 / 100)
	});

	onMount(() => {
		fetchPlace();
	});
</script>

<div class="bg-gray-100">
	<Header />

	<main class="container mx-auto mt-[114px] py-10">
		<h1 class="text-2xl font-bold mb-6">Checkout Package</h1>
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
			<div class="lg:col-span-2 space-y-6">
				<div class="bg-white p-6 rounded-lg shadow-sm">
					<div class="flex justify-between items-center mb-4 cursor-pointer">
						<h2 class="text-xl font-semibold">Customer Information</h2>
						<i
							class="fas fa-chevron-down text-white dropdown-icon"
							style="width: 22px; height: 22px;"
						>
						</i>
					</div>
					<div class="content">
						<hr class="my-4" />
						<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div>
								<label class="block text-gray-700 mb-2"> Full Name </label>
								<div class="flex items-center border rounded-full p-2 input-container">
									<i class="fas fa-user text-pink-500 mr-2"> </i>
									<input
										class="w-full outline-none"
										placeholder="Write your complete name"
										type="text"
									/>
								</div>
							</div>
							<div>
								<label class="block text-gray-700 mb-2"> Email Address </label>
								<div class="flex items-center border rounded-full p-2 input-container">
									<i class="fas fa-envelope text-pink-500 mr-2"> </i>
									<input class="w-full outline-none" placeholder="example@gmail.com" type="email" />
								</div>
							</div>
							<div>
								<label class="block text-gray-700 mb-2"> Phone Number </label>
								<div class="flex items-center border rounded-full p-2 input-container">
									<i class="fas fa-phone text-pink-500 mr-2"> </i>
									<input
										class="w-full outline-none"
										placeholder="Let us know your number"
										type="text"
									/>
								</div>
							</div>
							<div>
								<label class="block text-gray-700 mb-2"> Started At </label>
								<div class="flex items-center border rounded-full p-2 input-container">
									<i class="fas fa-calendar-alt text-pink-500 mr-2"> </i>
									<input class="w-full outline-none" placeholder="Choose your date" type="text" />
								</div>
							</div>
						</div>
					</div>
					<hr class="my-4" />
					<div class="flex items-center">
						<i class="fas fa-shield-alt text-green-500 mr-2"> </i>
						<p class="text-black font-semibold">Angga X is protecting your privacy better</p>
					</div>
				</div>
				<div class="bg-white p-6 rounded-lg shadow-sm mt-6">
					<div class="flex justify-between items-center mb-4 cursor-pointer">
						<h2 class="text-xl font-semibold">Payment Details</h2>
						<i
							class="fas fa-chevron-down text-white dropdown-icon"
							style="width: 22px; height: 22px;"
						>
						</i>
					</div>
					<div class="content">
						<hr class="my-4" />
						<div class="space-y-2">
							<div class="flex justify-between">
								<span class="flex items-center">
									<i class="fas fa-box text-pink-500 mr-2"> </i>
									Package Quantity
								</span>
								<span class="font-semibold"> 1 {place?.name} </span>
							</div>
							<div class="flex justify-between">
								<span class="flex items-center">
									<i class="fas fa-tag text-pink-500 mr-2"> </i>
									Package Price (1x)
								</span>
								<span class="font-semibold">
									{new Intl.NumberFormat('id-ID', {
										style: 'currency',
										currency: 'IDR'
									}).format(parseInt(totalPayment.price))}
								</span>
							</div>
							<div class="flex justify-between">
								<span class="flex items-center">
									<i class="fas fa-percentage text-pink-500 mr-2"> </i>
									Country Tax 12%
								</span>
								<span class="font-semibold"
									>{new Intl.NumberFormat('id-ID', {
										style: 'currency',
										currency: 'IDR'
									}).format(totalPayment.tax)}
								</span>
							</div>
							<div class="flex justify-between">
								<span class="flex items-center">
									<i class="fas fa-shield-alt text-pink-500 mr-2"> </i>
									Consultation &amp; Insurance
								</span>
								<span class="font-semibold"> Rp 0 (Free) </span>
							</div>
							<div class="flex justify-between font-bold text-black">
								<span class="flex items-center">
									<i class="fas fa-money-bill-wave text-pink-500 mr-2"> </i>
									Grand Total Amount
								</span>
								<span class="text-pink-500">
									{new Intl.NumberFormat('id-ID', {
										style: 'currency',
										currency: 'IDR'
									}).format(parseInt(totalPayment.price) + totalPayment.tax)}
								</span>
							</div>
						</div>
					</div>
				</div>
				<div class="bg-white p-6 rounded-lg shadow-sm mt-6">
					<div class="flex justify-between items-center mb-4 cursor-pointer">
						<h2 class="text-xl font-semibold">Proceed Payment to</h2>
						<i
							class="fas fa-chevron-down text-white dropdown-icon"
							style="width: 22px; height: 22px;"
						>
						</i>
					</div>
					<div class="content">
						<hr class="my-4" />
						<div class="flex space-x-4 mb-8">
							<button
								class="payment-option flex items-center border px-4 py-2 rounded-full selected"
							>
								<i class="fas fa-university text-pink-500 mr-2"> </i>
								<span class="text-black font-semibold"> Bank Transfer </span>
							</button>
							<button class="payment-option flex items-center border px-4 py-2 rounded-full">
								<i class="fas fa-credit-card text-pink-500 mr-2"> </i>
								<span class="text-black font-semibold"> Credit Card </span>
							</button>
							<button class="payment-option flex items-center border px-4 py-2 rounded-full">
								<i class="fas fa-gift text-pink-500 mr-2"> </i>
								<span class="text-black font-semibold"> Redeem Points </span>
							</button>
						</div>
						<div class="flex space-x-4 mb-4">
							<div class="flex items-center">
								<img alt="BCA logo" class="mr-2" height="40" src={bca} width="40" />
								<span class="font-semibold">
									Samawa Indonesia
									<i class="fas fa-check-circle text-green-500 ml-1"> </i>
									<span class="text-gray-500"> 8008288293 </span>
								</span>
							</div>
							<div class="flex items-center">
								<img alt="Mandiri logo" class="mr-2" height="40" src={mandiri} width="40" />
								<span class="font-semibold">
									Samawa Indonesia
									<i class="fas fa-check-circle text-green-500 ml-1"> </i>
									<span class="text-gray-500"> 1237984398281 </span>
								</span>
							</div>
						</div>
						<hr class="my-8" />
						<h2 class="text-xl font-semibold mb-4 mt-6">Upload Proof of Payment</h2>
						<div class="flex items-center border-2 rounded-full p-1 mb-4 relative">
							<i class="fas fa-paperclip text-pink-500 mr-2"> </i>
							<label class="w-full outline-none cursor-pointer">
								Add an attachment
								<input class="custom-file-input" type="file" />
							</label>
						</div>
						<div class="flex space-x-4">
							<button class="border border-pink-500 text-pink-500 px-4 py-2 rounded-full flex-1">
								Save as a Wishlist
							</button>
							<a
								href="/checkout-finished"
								class="bg-pink-500 px-4 py-2 w-1/2 rounded-full flex items-center justify-center"
							>
								<span class="text-white">Confirm Payment</span>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div class="space-y-6">
				<div class="bg-white p-6 rounded-lg shadow-sm">
					<h2 class="text-xl font-semibold mb-4">{place?.name}</h2>
					<img
						alt="Wedding Illustration"
						class="w-full rounded-lg mb-4"
						height="200"
						src={wed}
						width="300"
					/>
					<div class="text-pink-500 text-2xl font-bold mb-10">
						{new Intl.NumberFormat('id-ID', {
							style: 'currency',
							currency: 'IDR'
						}).format(parseInt(place?.price))}
					</div>
					<hr class="my-5" />
					<div class="mb-10">
						<h3 class="font-semibold mb-5">Happy Story</h3>
						<div class="border p-4 rounded-lg mb-5">
							<div class="flex items-center mb-2">
								<i class="fas fa-star text-yellow-500"> </i>
								<i class="fas fa-star text-yellow-500"> </i>
								<i class="fas fa-star text-yellow-500"> </i>
								<i class="fas fa-star text-yellow-500"> </i>
								<i class="fas fa-star text-yellow-500"> </i>
							</div>
							<p class="text-gray-700 mb-5">
								Keren banget Samawa, gue bisa nikah dengan pengalaman bagus dengan harga terjangkau!
								God.
							</p>
							<div class="flex items-center mt-5">
								<img
									alt="Andriana Putri"
									class="rounded-full mr-2"
									height="40"
									src={andri}
									width="40"
								/>
								<span class="font-semibold"> Andriana Putri </span>
							</div>
						</div>
					</div>
					<hr class="my-5" />
					<div>
						<h3 class="font-semibold mb-3">Wedding Organizer</h3>
						<div class="border p-2 rounded-lg">
							<div class="flex items-center">
								<img alt="Dua Putri" class="rounded-full mr-2" height="40" src={dua} width="40" />
								<div>
									<span class="font-semibold"> Dua Putri </span>
									<span class="text-gray-500 block"> 194 Packages </span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>

	<Footer />
</div>

<style>
	body {
		font-family: 'Inter', sans-serif;
	}
	.payment-option {
		border-color: black;
		color: black;
	}
	.payment-option.selected {
		border-color: #ec4899;
	}
	.custom-file-input {
		position: absolute;
		width: 100%;
		height: 100%;
		opacity: 0;
		cursor: pointer;
	}
	.input-container:focus-within {
		border-color: #ec4899;
	}
	.dropdown-icon {
		border: 2px solid #ec4899;
		border-radius: 50%;
		padding: 4px;
		background-color: #ec4899;
		width: 22px;
		height: 22px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
