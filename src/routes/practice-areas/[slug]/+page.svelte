<script>
	import { resolve } from '$app/paths';
	import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Scale } from '@lucide/svelte';

	let { data } = $props();

	const area = $derived(data.practiceArea);
</script>

<svelte:head>
	<title>{area.title} | Your Law Firm</title>

	<meta name="description" content={area.description} />
</svelte:head>

<!-- Hero -->
<section class="relative overflow-hidden bg-stone-950 text-white">
	<div class="relative mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8 lg:py-32">
		<a
			href={resolve('/practice-areas')}
			class="group mb-12 inline-flex items-center gap-2 text-sm
             text-stone-400 transition-colors hover:text-white"
		>
			<ArrowLeft size={16} class="transition-transform group-hover:-translate-x-1" />
			All Practice Areas
		</a>

		<div class="grid items-end gap-12 lg:grid-cols-[1fr_380px]">
			<div class="max-w-3xl">
				<div class="mb-6 flex items-center gap-3">
					<span class="h-px w-10 bg-primary"></span>

					<span
						class="text-xs font-semibold uppercase tracking-[0.22em]
                   text-chart-2"
					>
						Practice Area
					</span>
				</div>

				<h1
					class=" text-4xl font-medium leading-[1.08]
                 tracking-tight sm:text-5xl lg:text-6xl"
				>
					{area.title}
				</h1>

				<p
					class="mt-7 max-w-2xl text-base leading-8 text-stone-300
                 sm:text-lg"
				>
					{area.description}
				</p>
			</div>

			<!-- Hero info -->
			<div class="border-l border-stone-800 pl-6 lg:pl-8">
				<p class="text-xs uppercase tracking-[0.2em] text-stone-500">Services</p>

				<p class="mt-2 text-4xl text-white">
					{String(area.services.length).padStart(2, '0')}
				</p>

				<p class="mt-3 text-sm leading-6 text-stone-400">
					Dedicated legal services within this practice area.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Main content -->
<section class="bg-stone-50 py-20 sm:py-28">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="grid gap-14 lg:grid-cols-[320px_1fr] lg:gap-20">
			<!-- Sidebar -->
			<aside>
				<div class="lg:sticky lg:top-28">
					<p
						class="text-xs font-semibold uppercase tracking-[0.2em]
                   text-chart-2"
					>
						Our Services
					</p>

					<h2
						class="mt-4 text-3xl font-medium
                   tracking-tight text-stone-950"
					>
						How we can assist
					</h2>

					<p class="mt-5 text-sm leading-7 text-stone-600">
						Our lawyers provide strategic and practical legal solutions tailored to the requirements
						of individuals, businesses and organisations.
					</p>

					<div class="mt-8 h-px bg-stone-200"></div>

					<!-- Quick navigation -->
					<nav class="mt-7 space-y-1">
						{#each area.services as service, index (index)}
							<a
								href={`#service-${index}`}
								class="group flex items-center justify-between
                       border-b border-stone-200 py-3 text-sm
                       text-stone-600 transition-colors
                       hover:text-chart-2"
							>
								<span>{service.title}</span>

								<ArrowRight
									size={14}
									class="opacity-0 transition-all
                         group-hover:translate-x-1
                         group-hover:opacity-100"
								/>
							</a>
						{/each}
					</nav>
				</div>
			</aside>

			<!-- Services -->
			<div>
				<div class="mb-10">
					<p class="text-sm text-stone-500">Explore our expertise in</p>

					<h2
						class="mt-2 text-3xl font-medium
                   text-stone-950 sm:text-4xl"
					>
						{area.title}
					</h2>
				</div>

				<div
					class="overflow-hidden rounded-2xl border
                 border-stone-200 bg-stone-200"
				>
					{#each area.services as service, index (index)}
						<article
							id={`service-${index}`}
							class="group bg-white p-7 transition-colors
                     duration-300 hover:bg-stone-950/90
                     sm:p-9"
						>
							<div class="flex gap-5 sm:gap-8">
								<!-- Number -->
								<div class="shrink-0">
									<span
										class="font-mono text-xs text-stone-400
                           group-hover:text-stone-600"
									>
										{String(index + 1).padStart(2, '0')}
									</span>
								</div>

								<!-- Content -->
								<div class="flex-1">
									<div class="flex items-start justify-between gap-5">
										<h3
											class=" text-xl font-medium
                             text-stone-950 transition-colors
                             group-hover:text-white sm:text-2xl"
										>
											{service.title}
										</h3>

										<ArrowUpRight
											size={18}
											class="mt-1 shrink-0 text-stone-400
                             transition-all duration-300
                             group-hover:-translate-y-1
                             group-hover:translate-x-1
                             group-hover:text-chart-2"
										/>
									</div>

									<p
										class="mt-4 max-w-2xl text-sm leading-7
                           text-stone-600 transition-colors
                           group-hover:text-stone-400"
									>
										{service.description}
									</p>
								</div>
							</div>
						</article>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Why choose us -->
<section class="border-y border-stone-200 bg-white py-20">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="grid gap-12 lg:grid-cols-2 lg:gap-20">
			<div>
				<p
					class="text-xs font-semibold uppercase tracking-[0.2em]
                 text-chart-2"
				>
					Our Approach
				</p>

				<h2
					class="mt-4 max-w-lg text-3xl font-medium
                 tracking-tight text-stone-950 sm:text-4xl"
				>
					Practical legal advice focused on your objectives.
				</h2>
			</div>

			<div class="grid gap-6 sm:grid-cols-2">
				<div class="border-t border-stone-200 pt-5">
					<Check size={18} class="text-chart-2" />

					<h3 class="mt-4 font-medium text-stone-950">Strategic Advice</h3>

					<p class="mt-2 text-sm leading-6 text-stone-600">
						Legal strategies developed around your commercial and personal objectives.
					</p>
				</div>

				<div class="border-t border-stone-200 pt-5">
					<Check size={18} class="text-chart-2" />

					<h3 class="mt-4 font-medium text-stone-950">Clear Communication</h3>

					<p class="mt-2 text-sm leading-6 text-stone-600">
						Complex legal issues explained clearly so you can make informed decisions.
					</p>
				</div>

				<div class="border-t border-stone-200 pt-5">
					<Check size={18} class="text-chart-2" />

					<h3 class="mt-4 font-medium text-stone-950">Client Focused</h3>

					<p class="mt-2 text-sm leading-6 text-stone-600">
						Solutions tailored to the circumstances and requirements of each client.
					</p>
				</div>

				<div class="border-t border-stone-200 pt-5">
					<Check size={18} class="text-chart-2" />

					<h3 class="mt-4 font-medium text-stone-950">Comprehensive Support</h3>

					<p class="mt-2 text-sm leading-6 text-stone-600">
						Assistance from initial consultation through resolution or completion.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- CTA -->
<section class="bg-stone-950 py-20 text-white">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div
			class="flex flex-col gap-10 lg:flex-row
             lg:items-center lg:justify-between"
		>
			<div class="max-w-2xl">
				<div class="mb-5 flex items-center gap-3">
					<Scale size={18} class="text-chart-1" />

					<span
						class="text-xs font-semibold uppercase
                   tracking-[0.2em] text-chart-1"
					>
						Legal Consultation
					</span>
				</div>

				<h2
					class=" text-3xl font-medium
                 tracking-tight sm:text-4xl"
				>
					Need assistance with {area.title}?
				</h2>

				<p class="mt-4 max-w-xl text-sm leading-7 text-stone-400">
					Speak with our legal team to discuss your matter and understand the options available to
					you.
				</p>
			</div>

			<a
				href={resolve('/contact')}
				class="group inline-flex w-fit items-center gap-3
               bg-primary px-7 py-4 text-sm font-semibold
               text-white transition-colors hover:bg-chart-2 rounded-xl"
			>
				Request a Consultation

				<ArrowUpRight
					size={17}
					class="transition-transform
                 group-hover:-translate-y-0.5
                 group-hover:translate-x-0.5"
				/>
			</a>
		</div>
	</div>
</section>

<hr />
