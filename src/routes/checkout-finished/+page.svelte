<script>
	import '../checkout-finished/style.css';
    import bookingImage from '$lib/images/wedding_image.png'
</script>

<head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>

<div class="container">
    <div class="booking-card">
        <h2>Booking Finished!</h2>
        <!-- <img src={bookingImage} alt="Booking Completed Image" class="booking-image" /> -->
         <div class="image-container"></div>
        <div class="booking-details">
          <label for="booking-id">Booking ID</label>
          <div class="input-group">
            <span class="icon"><img src="/src/lib/images/note-favorite.png" alt="Icon" /></span>
            <input type="text" id="booking-id" value="SMWBWA1934" readonly />
          </div>
          <p>Gunakan kode booking di atas untuk memeriksa status pemesananmu</p>
          <button class="other-package-button">Booking Other Package</button>
          <button class="view-booking-button">View My Booking</button>
        </div>
    </div>
</div>
