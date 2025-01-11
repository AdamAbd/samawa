<script>
	import { goto } from '$app/navigation';
	import '../../app.css';

	let username = $state('');
	let password = $state('');
	let loading = $state(false);
	let errorMessage = $state('');

	const handleLogin = async (event) => {
		event.preventDefault();
		errorMessage = ''; // Reset error message
		loading = true; // Show loading indicator

		try {
			const res = await fetch('https://samawa-api.riqgarden.pp.ua/auth/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ username, password })
			});

			if (res.ok) {
				const data = await res.json();
				console.log('Login successful:', data);

				// Store token in localStorage
				localStorage.setItem('token', data.token);

				// Redirect to home page
				goto('/');
			} else {
				const errorData = await res.json();
				errorMessage = errorData.message || 'Login failed. Please try again.';
				console.error('Failed to login:', res.status, errorMessage);
			}
		} catch (error) {
			errorMessage = 'An unexpected error occurred. Please try again.';
			console.error('Error during authentication:', error);
		} finally {
			loading = false; // Hide loading indicator
		}
	};
</script>

<div class="flex justify-between items-center h-screen bg-gray-100">
	<div class="pl-24 pr-20 w-1/2">
		<div class="bg-white rounded-2xl p-8 shadow-lg text-center relative">
			<h2 class="text-xl font-bold text-gray-800 mb-6 text-left">Login</h2>
			<form onsubmit={handleLogin}>
				{#if errorMessage}
					<p class="text-sm mb-4 text-left" style="color: red;">{errorMessage}</p>
				{/if}
				<div class="mb-4 relative">
					<label for="username" class="block text-sm font-medium text-gray-700 mb-2 text-left"
						>Username or Email</label
					>
					<span class="absolute left-4 bottom-2.5 w-5 h-5">
						<img src="/src/lib/images/user-icon.png" alt="User Icon" class="w-full h-full" />
					</span>
					<input
						type="text"
						id="username"
						bind:value={username}
						autocomplete="username"
						placeholder="Enter your username or email"
						class="w-full py-2 pl-12 pr-4 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400"
					/>
				</div>
				<div class="mb-4 relative">
					<label for="password" class="block text-sm font-medium text-gray-700 mb-2 text-left"
						>Password</label
					>
					<span class="absolute left-4 bottom-2.5 w-5 h-5">
						<img src="/src/lib/images/lock-icon.png" alt="Lock Icon" class="w-full h-full" />
					</span>
					<input
						type="password"
						id="password"
						bind:value={password}
						autocomplete="current-password"
						placeholder="Enter your password"
						class="w-full py-2 pl-12 pr-4 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400"
					/>
				</div>
				<button
					type="submit"
					class="w-full py-3 bg-pink-500 text-white rounded-full font-bold text-sm hover:bg-pink-600 transition duration-300 disabled:bg-pink-300 disabled:cursor-not-allowed"
					disabled={loading}
				>
					{#if loading}
						<div class="flex items-center justify-center w-full">
							<svg
								class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
							>
								<circle
									class="opacity-25"
									cx="12"
									cy="12"
									r="10"
									stroke="currentColor"
									stroke-width="4"
								></circle>
								<path
									class="opacity-75"
									fill="currentColor"
									d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
								></path>
							</svg>
							Loading
						</div>
					{:else}
						Login
					{/if}
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
	.loader {
		border-width: 2px;
	}
</style>
