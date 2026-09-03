<script lang="ts">
	import ScalesIcon from '~icons/game-icons/scales';
	import RealEstateAgentOutlineSharpIcon from '~icons/material-symbols-light/real-estate-agent-outline-sharp';
	import HandcuffsIcon from '~icons/game-icons/handcuffs';
	import DocumentBulletList20RegularIcon from '~icons/fluent/document-bullet-list-20-regular';
	import { Button } from '$lib/components/ui/button';
	import { CircleArrowRight } from '@lucide/svelte';
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';

	const services = [
		{
			icon: ScalesIcon,
			title: 'Litigation & Dispute Resolution',
			description:
				'Representing individuals and businesses in civil, commercial, contractual, property, recovery, and other disputes before courts, tribunals, and appropriate judicial or quasi-judicial authorities.'
		},
		{
			icon: HandcuffsIcon,
			title: 'Criminal Law & White-Collar Crime',
			description:
				'Providing representation and advisory services in criminal proceedings, economic offences, fraud, cheating, breach of trust, financial crime, corporate investigations, bail proceedings, and white-collar criminal matters.'
		},
		{
			icon: RealEstateAgentOutlineSharpIcon,
			title: 'Real Estate & Property Law',
			description:
				'Handling property transactions, title verification, legal due diligence, sale and purchase documentation, lease agreements, development arrangements, property disputes, land-related matters, and regulatory issues concerning real estate projects.'
		},
		{
			icon: DocumentBulletList20RegularIcon,
			title: 'Legal Notices & Recovery',
			description:
				'Drafting and responding to legal notices, demand notices, breach notices, termination notices, and recovery communications, as well as assisting businesses with debt and outstanding-payment recovery.'
		}
	];
</script>

<div
	class="grid gap-4 md:grid-cols-[1fr_4fr] grid-flow-row md:grid-flow-col md:p-20 bg-red-200/10 p-4"
>
	<div class="uppercase font-mono text-sm min-w-0">Our Services</div>
	<div class="w-full flex flex-col gap-6 justify-start min-w-0">
		<div class="flex flex-row w-full justify-between">
			<p class="text-xl md:text-3xl font-medium font-inter tracking-tight">
				We Offer <br /> Expertise In
			</p>

			<Button
				variant="outline"
				class="flex flex-row"
				onclick={async () => {
					await goto(resolve('/practice-areas'));
				}}
			>
				<p class="text-sm">Explore more</p>
				<CircleArrowRight />
			</Button>
		</div>

		<div class="flex flex-row md:overflow-x-auto gap-4 flex-wrap">
			{#each services as service, id (id)}
				<div class="border p-4 rounded-md flex flex-col gap-4 md:w-64 hover:border-primary w-full">
					<service.icon class="size-12 md:size-16 opacity-75" />
					<h2 class="text-base font-semibold md:text-xl">{service.title}</h2>
					<p class="text-sm font-light">{service.description}</p>
				</div>
			{/each}
		</div>
	</div>
</div>

<!-- 
<div class="flex flex-row p-20">
	<div class="w-64 uppercase font-mono text-sm bg-amber-500 flex-1">Our Services</div>

	<div class="w-full flex flex-col gap-6 justify-start bg-red-700 p-4 flex-1">
		<p class="text-3xl font-medium font-inter tracking-tight">We Offer <br /> Expertise In</p>

		<div class="flex flex-row overflow-x-auto gap-4">
			{#each services as service, id (id)}
				<div class="border p-4 rounded-md flex flex-col gap-4 w-64">
					<service.icon class="size-16 opacity-75" />
					<h2 class="text-xl">{service.title}</h2>
					<p class="text-sm font-light">{service.description}</p>
				</div>
			{/each}
		</div>
	</div>
</div> -->
