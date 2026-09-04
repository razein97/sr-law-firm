<script lang="ts">
	import { ArrowUpRight } from '@lucide/svelte';
	import type { PageProps } from './$types';
	import { practiceAreas } from '$lib/data/practiceAreas';

	let { data }: PageProps = $props();
</script>

<section class="py-20 sm:py-28">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<!-- Section heading -->
		<div class="mb-14 max-w-2xl">
			<p class="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
				Our Expertise
			</p>

			<h2
				class=" text-4xl font-medium tracking-tight text-stone-950
               sm:text-5xl"
			>
				Practice Areas
			</h2>

			<p class="mt-5 text-base leading-7 text-stone-600 sm:text-lg">
				Comprehensive legal counsel across key areas of Indian law, serving businesses, institutions
				and individuals.
			</p>
		</div>

		<!-- Grid -->
		<div
			class="grid gap-px overflow-hidden rounded-2xl
                border border-stone-200
                md:grid-cols-2 lg:grid-cols-3"
		>
			{#each practiceAreas as area, index (index)}
				<a
					href={`/practice-areas/${area.slug}`}
					class="group relative flex min-h-80 flex-col
                 bg-card p-7 transition-colors duration-300
                 hover:bg-stone-950/90 sm:p-8"
				>
					<!-- Number + Arrow -->
					<div class="flex items-start justify-between">
						<span
							class="font-mono text-xs tracking-widest text-stone-400
                     transition-colors group-hover:text-stone-500"
						>
							{String(index + 1).padStart(2, '0')}
						</span>

						<div
							class="flex size-10 items-center justify-center rounded-full
                     border border-stone-200 text-stone-600
                     transition-all duration-300
                     group-hover:border-stone-700
                     group-hover:bg-stone-900/90
                     group-hover:text-white"
						>
							<ArrowUpRight
								size={17}
								class="transition-transform duration-300
                       group-hover:-translate-y-0.5
                       group-hover:translate-x-0.5"
							/>
						</div>
					</div>

					<!-- Content -->
					<div class="mt-12">
						<h3
							class=" text-2xl font-medium leading-tight
                     text-stone-950 transition-colors
                     group-hover:text-white"
						>
							{area.title}
						</h3>

						<p
							class="mt-4 line-clamp-3 text-sm leading-6 text-stone-600
                     transition-colors group-hover:text-stone-400"
						>
							{area.description}
						</p>
					</div>

					<!-- Services preview -->
					<div class="mt-auto pt-8">
						<div
							class="mb-4 h-px w-full bg-stone-100
                     transition-colors group-hover:bg-stone-800"
						></div>

						<div class="flex flex-wrap gap-x-4 gap-y-2">
							{#each area.services.slice(0, 3) as service, id (id)}
								<span
									class="text-xs font-medium text-stone-500
                         transition-colors group-hover:text-stone-400"
								>
									{service.title}
								</span>
							{/each}

							{#if area.services.length > 3}
								<span
									class="text-xs font-medium text-primary
                         group-hover:text-chart-1"
								>
									+{area.services.length - 3} more
								</span>
							{/if}
						</div>
					</div>

					<!-- Hover accent -->
					<div
						class="absolute bottom-0 left-0 h-0.75 w-0
                   bg-primary transition-all duration-500
                   group-hover:w-full"
					></div>
				</a>
			{/each}
		</div>
	</div>
</section>
