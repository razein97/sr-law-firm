<script lang="ts">
	import { goto } from '$app/navigation';
	import { appState } from '$lib/states/global_state.svelte';
	import Button from './ui/button/button.svelte';
	import * as Drawer from '$lib/components/ui/drawer/index.js';
	import logoIcon from '$lib/assets/logo.svg';
	import { resolve } from '$app/paths';
	import BriefcaseIcon from '~icons/noto/briefcase';
	import Library16Icon from '~icons/fluent-color/library-16';
	import ManOfficeWorkerMediumIcon from '~icons/fluent-emoji-flat/man-office-worker-medium';
	import Mail24Icon from '~icons/fluent-color/mail-24';
	import ObjectsColumnSolidIcon from '~icons/flowbite/objects-column-solid';
	import AboutIcon from '~icons/flat-color-icons/about';
</script>

<Drawer.Root bind:open={appState.drawer} direction="right">
	<Drawer.Content class="p-4 flex flex-col h-full ">
		<Drawer.Header>
			<Drawer.Title
				onclick={async () => {
					await goto(resolve('/'));
					appState.drawer = !appState.drawer;
				}}
				class="flex items-center justify-between"
			>
				<div class="flex flex-row items-center space-x-2">
					<img src={logoIcon} alt="Singh & Rongphar" class="size-18" />

					<div class="flex-col flex">
						<p class="font-seasons-bold text-xl md:text-2xl">Singh & Rongphar</p>
						<p class="text-right text-[0.65rem] text-foreground/80">Associates in law</p>
					</div>
				</div>
			</Drawer.Title>
			<!-- <Drawer.Description>Set your daily activity goal.</Drawer.Description> -->
		</Drawer.Header>
		<hr />

		<hr />
		<div class="flex flex-col items-center justify-center gap-2 mt-2 overflow-y-auto no-scrollbar">
			<Button
				title="Services"
				class="w-full justify-start flex flex-row gap-2 p-2 h-10"
				variant="secondary"
				onclick={async () => {
					await goto(resolve('/practice-areas'));
					appState.drawer = false;
				}}
			>
				<BriefcaseIcon class="size-6" />

				<p class="">Services</p>
			</Button>

			<Button
				title="Resources"
				class="w-full justify-start flex flex-row gap-2 p-2 h-10"
				variant="secondary"
				onclick={async () => {
					await goto(resolve('/resources'));
					appState.drawer = false;
				}}
			>
				<Library16Icon class="size-6" />

				<p class="">Resources</p>
			</Button>

			<Button
				title="Attorneys"
				class="w-full justify-start flex flex-row gap-2 p-2 h-10"
				variant="secondary"
				onclick={async () => {
					await goto(resolve('/#attorneys'));
					appState.drawer = false;
				}}
			>
				<ManOfficeWorkerMediumIcon class="size-6" />

				<p class="">Attorneys</p>
			</Button>

			<Button
				title="Contact Us"
				class="w-full justify-start flex flex-row gap-2 p-2 h-10"
				variant="secondary"
				onclick={async () => {
					await goto(resolve('/contact'));
					appState.drawer = false;
				}}
			>
				<Mail24Icon class="size-6" />

				<p class="">Contact Us</p>
			</Button>

			<Button
				title="About Us"
				class="w-full justify-start flex flex-row gap-2 p-2 h-10"
				variant="secondary"
				onclick={async () => {
					appState.drawer = false;
					// @wc-ignore
					await goto(resolve('/#about'));
				}}
			>
				<AboutIcon class="size-6" />
				<p class="">About Us</p>
			</Button>
		</div>
	</Drawer.Content>
</Drawer.Root>
