<script lang="ts">
	import Rohit from '$lib/assets/images/rohit_singh.png?enhanced';
	import Binong from '$lib/assets/images/binong.jpeg?enhanced';
	import Pattern from '$lib/assets/images/pexels-this-and-no-internet-25-288559-35336018.jpg?enhanced';

	const attorneys = [
		{
			img: Rohit,
			name: 'Rohit Singh',
			qualification: 'B.A. LL.B(Hons.), M.A, LL.M',
			designation: 'Partner'
		},
		{
			img: Binong,
			name: 'Binong Rongphar',
			qualification: 'B.A. LL.B(Hons.), PGDCA, LL.M',
			designation: 'Partner'
		}
	];
</script>

<div
	class="grid gap-4 md:grid-cols-[1fr_4fr] grid-flow-row md:grid-flow-col md:p-20 bg-green-400/10 relative p-4"
>
	<div class="uppercase font-mono text-sm min-w-0">Our Attorneys</div>

	<div class="w-full flex flex-col gap-6 justify-start min-w-0" id="attorneys">
		<p class="text-xl md:text-3xl font-medium font-inter tracking-tight">
			<b class="text-foreground/80">Our Lawyers</b> Are Dedicated To Upholding The Highest Standards of
			Ethics and Professionalism
		</p>
		<div class="flex flex-row md:overflow-x-auto gap-4 flex-wrap">
			{#each attorneys as attorney, id (id)}
				<div class="border p-4 rounded-xl flex flex-col gap-4 w-full md:w-72 relative md:h-96 h-64">
					<enhanced:img
						src={attorney.img}
						alt={attorney.name}
						class="absolute inset-0 object-contain md:object-cover h-full w-full z-0 rounded-xl"
					/>
					<div class="bg-black/15 absolute h-full w-full z-0 inset-0 rounded-xl"></div>
					<div class="relative flex flex-col justify-between h-full text-white">
						<span class="flex flex-1"></span>

						<div class="flex flex-row justify-between bg-black/20 rounded-xl p-2">
							<div class="flex flex-col">
								<p class="text-xl font-bold">{attorney.name}</p>
								<p class="text-[0.65rem]">{attorney.qualification}</p>
							</div>

							<p>{attorney.designation}</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>

	<enhanced:img
		src={Pattern}
		alt="About Us"
		class="absolute inset-0 w-full h-full object-cover -z-1 opacity-10"
	/>
</div>
