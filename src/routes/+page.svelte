<script>
	import '../app.css';

	import Header from './Header.svelte';
	import Crown from '$lib/images/crown.svg';
	import Location from '$lib/images/location.svg';
	import House from '$lib/images/house.svg';
</script>

<div>
	<Header />

	<div class="flex flex-col">
		<div>
			<div class="flex items-center px-[50px] w-[1000px] h-[480px] bg-red-50 rounded-[30px]">
				<div class="flex flex-col gap-5 p-5 w-[305px] h-fit bg-white rounded-[20px]">
					<div
						class="inline-flex items-center space-x-2 px-3.5 py-1.5 w-fit bg-[#5C2D2D] rounded-full"
					>
						<img class="h-[18px] aspect-square" src={Crown} alt="Icon Crow" />
						<span class="text-sm text-white font-bold">POPULAR</span>
					</div>
					<div class="flex flex-col gap-2">
						<span class="text-[28px] leading-[38px] font-bold"
							>Nikah Muda Abadi Pantai Bali Nusa</span
						>
						<span class="text-lg text-[#FF48B6] font-semibold">Rp 198.493.000</span>
					</div>
					<div class="inline-flex items-center gap-3.5">
						<div class="inline-flex gap-1.5 items-center">
							<img class="h-5 aspect-square" src={Location} alt="Icon Location" />
							<span class="text-sm font-bold">Luxemborgio</span>
						</div>
						<div class="inline-flex gap-1.5 items-center">
							<img class="h-5 aspect-square" src={House} alt="Icon Location" />
							<span class="text-sm font-bold">Tentram</span>
						</div>
					</div>
					<button class="px-5 py-3.5 w-full rounded-full bg-[#FF48B6]">
						<span class="font-semibold text-white">View Package</span>
					</button>
				</div>
			</div>
		</div>
	</div>

	<h1 class="text-3xl font-bold underline">Hello world!</h1>
</div>
