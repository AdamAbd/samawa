<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/logo.svg';
</script>

<header>
	<div class="fixed top-0 left-0 z-[9999] w-full bg-white">
		<div class="container mx-auto my-[30px] flex flex-row items-center justify-between">
			<div class="flex flex-row gap-2.5 items-center">
				<a href="https://kit.svelte.dev">
					<img src={logo} alt="Samawa Logo" class="h-10" />
				</a>
				<span class="text-2xl font-bold">Samawa</span>
			</div>
			<nav class="flex flex-row gap-10 items-center">
				<a
					href="/"
					class="text-base hover:underline font-bold"
					aria-current={$page.url.pathname === '/' ? 'page' : undefined}>Home</a
				>
				<a
					href="/about"
					class="text-base hover:underline"
					aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>Category</a
				>
				<a
					href="/about"
					class="text-base hover:underline"
					aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>Packages</a
				>
				<a
					href="/about"
					class="text-base hover:underline"
					aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>Testimonials</a
				>
			</nav>
			<div class="flex flex-row gap-3 items-center">
				<button class="px-5 py-3.5 border border-black rounded-full">
					<span class="text-base font-semibold">Contact Us</span>
				</button>
				<button class="px-5 py-3.5 bg-[#FF48B6] hover:bg-[#FF48B6]/40 rounded-full">
					<span class="text-base text-white font-semibold">My Booking</span>
				</button>
			</div>
		</div>
	</div>
</header>
