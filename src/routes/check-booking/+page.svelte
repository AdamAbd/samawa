<script>
	import '../check-booking/style.css'
</script>

<body>
	<div class="container">
		<div class="booking-box">
			<h2>Check My Booking</h2>
			<form>
				<div class="input-group">
					<label for="booking-id">
						<i class="icon-calendar"></i>
						Booking ID
					</label>
					<input type="text" id="booking-id" placeholder="Write your booking id">
				</div>
				<div class="input-group">
					<label for="phone-number">
						<i class="icon-phone"></i>
						Phone Number
					</label>
					<input type="text" id="phone-number" value="0821938491">
				</div>
				<button type="submit" class="booking-btn">Find Booking Details</button>
			</form>
		</div>
	</div>	
</body>
