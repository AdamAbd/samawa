<script>
	import '../../app.css';
	import Header from '../../lib/components/Header.svelte';
</script>

<div>
	<Header />

	<div class="flex justify-center items-center w-full h-screen p-10">
		<div class="bg-white p-8 w-[430px] h-[577px] rounded-[40px] shadow-md text-center">
			<h2 class="text-xl font-bold mb-5">Booking Finished!</h2>
			<div class="image"></div>
			<div class="text-left mt-5">
				<label for="booking-id" class="block font-medium mb-2">Booking ID</label>
				<div class="relative flex items-center border-2 border-gray-200 rounded-full p-2 mb-4">
					<span class="mr-2 pl-2 pt-1">
						<img src="/src/lib/images/note-favorite.png" alt="Icon" />
					</span>
					<input
						type="text"
						id="booking-id"
						value="SMWBWA1934"
						readonly
						class="w-full border-none outline-none text-lg font-bold text-gray-800"
					/>
				</div>
				<p class="text-sm text-black mb-5">
					Gunakan kode booking di atas untuk memeriksa status pemesananmu
				</p>
				<button
					class="block w-full h-13 px-3 py-3 rounded-full bg-pink-500 text-white font-bold mb-3 hover:bg-pink-400"
				>
					Booking Other Package
				</button>
				<button
					class="block w-full h-13 px-3 py-3 rounded-full border border-black bg-transparent text-black font-bold hover:text-pink-500"
				>
					View My Booking
				</button>
			</div>
		</div>
	</div>
</div>

<style>
	.image {
		@apply w-full h-44 rounded-lg bg-cover bg-center bg-no-repeat;
		background-image: url('$lib/images/wedding_image2.png');
	}
</style>
