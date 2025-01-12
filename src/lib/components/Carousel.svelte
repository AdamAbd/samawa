<script>
	import 'remixicon/fonts/remixicon.css';

	import Crown from '$lib/images/crown.svg';
	import Location from '$lib/images/location.svg';
	import House from '$lib/images/house.svg';

	export let places;
</script>

<section>
	<div class="marquee">
		{#each Array(2) as index}
			<ul class="marquee__content" aria-hidden={index === 0 ? 'false' : 'true'}>
				{#each places as item}
					<div
						class="flex items-center px-[50px] w-[1000px] h-[480px] rounded-[30px]"
						style="background-image: url({item.image}); background-size: cover; background-position: center;"
					>
						<div class="flex flex-col gap-5 p-5 w-[305px] h-fit bg-white rounded-[20px]">
							<div
								class="inline-flex items-center space-x-2 px-3.5 py-1.5 w-fit bg-[#5C2D2D] rounded-full"
							>
								<img class="h-[18px] aspect-square" src={Crown} alt="Icon Crow" />
								<span class="text-sm text-white font-bold">POPULAR</span>
							</div>
							<div class="flex flex-col gap-2">
								<span class="text-[28px] leading-[38px] font-bold">{item.name}</span>
								<span class="text-lg text-[#FF48B6] font-semibold"
									>{new Intl.NumberFormat('id-ID', {
										style: 'currency',
										currency: 'IDR'
									}).format(parseInt(item.price))}</span
								>
							</div>
							<div class="inline-flex items-center gap-3.5">
								<div class="inline-flex gap-1.5 items-center">
									<img class="h-5 aspect-square" src={Location} alt="Icon Location" />
									<span class="text-sm font-bold">{item.location}</span>
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
				{/each}
			</ul>
		{/each}
	</div>
</section>

<style>
	.marquee {
		--gap: 2.5rem;
		display: flex;
		overflow: hidden;
		user-select: none;
		gap: var(--gap);
	}

	.marquee__content {
		flex-shrink: 0;
		display: flex;
		justify-content: space-around;
		min-width: 100%;
		gap: var(--gap);
		animation: scroll 20s linear infinite;
	}

	@keyframes scroll {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(calc(-100% - var(--gap)));
		}
	}
</style>
