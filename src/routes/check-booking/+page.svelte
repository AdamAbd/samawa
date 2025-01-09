<script>
	// import '../check-booking/style.css';
	import '../../app.css';
</script>

<div class="flex justify-between items-center h-screen bg-gray-100">
	<div class="pl-24 pr-20 w-1/2">
		<div class="bg-white rounded-2xl p-8 shadow-lg text-center relative">
			<h2 class="text-xl font-bold text-gray-800 mb-6 text-left">Check My Booking</h2>
			<form>
				<div class="mb-4 relative">
					<label for="booking-id" class="block text-sm font-medium text-gray-700 mb-2 text-left"
						>Booking ID</label
					>
					<span class="absolute left-4 bottom-2.5 w-5 h-5">
						<img
							src="/src/lib/images/note-favorite.png"
							alt="Calendar Icon"
							class="w-full h-full"
						/>
					</span>
					<input
						type="text"
						id="booking-id"
						placeholder="Write your booking id"
						class="w-full py-2 pl-12 pr-4 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400"
					/>
				</div>
				<div class="mb-4 relative">
					<label for="phone-number" class="block text-sm font-medium text-gray-700 mb-2 text-left"
						>Phone Number</label
					>
					<span class="absolute left-4 bottom-2.5 w-5 h-5">
						<img src="/src/lib/images/call.png" alt="Phone Icon" class="w-full h-full" />
					</span>
					<input
						type="text"
						id="phone-number"
						placeholder="0821938491"
						class="w-full py-2 pl-12 pr-4 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400"
					/>
				</div>
				<button
					type="submit"
					class="w-full py-3 bg-pink-500 text-white rounded-full font-bold text-sm hover:bg-pink-600 transition duration-300"
				>
					Find Booking Details
				</button>
			</form>
		</div>
	</div>

	<div class="wedding-image"></div>
</div>

<style>
	.wedding-image {
		@apply w-1/2 h-full bg-cover bg-center bg-no-repeat;
		background-image: url('/src/lib/images/wedding_image.png');
	}
</style>
