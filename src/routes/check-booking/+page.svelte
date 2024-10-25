<script>
	import '../check-booking/style.css';
</script>

<head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>

<body>
	<div class="container">
		<div class="booking-box">
			<h2>Check My Booking</h2>
			<form>
				<div class="input-group">
					<label for="booking-id">
						Booking ID
					</label>
					<span class="icon">
                        <img src="/src/lib/images/note-favorite.png" alt="Calendar Icon">
                    </span>
					<input type="text" id="booking-id" placeholder="Write your booking id">
				</div>
				<div class="input-group">
					<label for="phone-number">
						Phone Number
					</label>
					<span class="icon">
                        <img src="/src/lib/images/call.png" alt="Phone Icon">
                    </span>
					<input type="text" id="phone-number" placeholder="0821938491">
				</div>
				<button type="submit" class="booking-btn">Find Booking Details</button>
			</form>
		</div>
	</div>

	<div class="image-container">
		<img src="/src/lib/images/wedding_image.png" alt="wedding image">
	</div>

</body>






