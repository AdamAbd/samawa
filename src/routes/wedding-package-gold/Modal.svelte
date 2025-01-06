<script>
    import bonus_img from '$lib/images/bonus-detail-1.png';
    export let isOpen = false; // prop to control modal visibility
    export let onClose; // function to handle close action
  
    // Close the modal if the user clicks on the overlay background
    function handleOverlayClick(event) {
      if (event.target === event.currentTarget) {
        onClose();
      }
    }

  </script>
  
  {#if isOpen}
    <div class="modal" on:click={handleOverlayClick}>
      <div class="modal-content">
        <img src={bonus_img} alt="Wedding Package Image" class="modal-image">
        <h2>Pre Post Wedding Photography Album</h2>
        <p class="price"><span class="new-price">Rp 0/package</span> <span class="old-price">Rp 680.000.000</span></p>
        <hr class="divider" />
        <h3>About</h3>
        <p>Paket pernikahan eksklusif kami menawarkan perayaan yang tak terlupakan sesuai dengan impian Anda. Nikmati venue yang menakjubkan, dekorasi elegan, dan menu gourmet lezat yang disiapkan oleh chef terbaik. Abadikan setiap momen berharga dengan fotografi dan videografi profesional. Menari sepanjang malam dengan live band atau DJ.</p>
        <hr class="divider" />
        <button on:click={onClose} class="close-details">Close Details</button>
      </div>
    </div>
  {/if}
  
  <style>
    .no-scroll {
      overflow: hidden;
    }
    /* Basic styling for modal overlay */
    .modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.7);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }
  
    /* Styling for modal content */
    .modal-content {
      background-color: #fff;
      padding: 20px;
      border-radius: 30px;
      width: 100%;
      max-width: 690px;
      height: 100%;
      max-height: 785px;
      position: relative;
    }

    .modal-content p {
      color: #000;
      line-height: 36px;
      margin-bottom: 0px;
    }

    .modal-content h2 {
      margin-bottom: 10px;
      color: #000;
    }

    .modal-content h3 {
      margin-top: 0px;
      color: #000;
    }
  
    .modal-image {
      width: 690px;
      max-width: 690px;
      height: 350px;
      max-height: 350px;
      border-radius: 20px;
    }
  
    .price {
      font-size: 1.2rem;
      color: #333;
      margin-bottom: 24px;
    }
  
    .new-price {
      color: #FF48B6;
      font-weight: bold;
    }
  
    .old-price {
      font-weight: normal;
      text-decoration: line-through;
      color: #000;
      margin-left: 10px;
    }

    .divider {
      border: none;
      border-top: 1px solid #e0e0e0;
      margin: 0.5rem 0;
      margin: 0;
      padding-bottom: 24px;
    }
  
    /* Center the modal button text */
    .close-details {
      width: 20%;
      margin-top: 0px;
      padding: 10px;
      font-size: 1rem;
      font-weight: 650;
      color: #000;
      background-color: transparent;
      border: 2px solid #000;
      border-radius: 50px;
      cursor: pointer;
      text-align: center;
    }

    .close-details:hover {
    background-color: #eaeaea;
    }
  </style>
  