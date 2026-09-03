<script lang="ts">
	import logoIcon from '$lib/assets/logo.svg';
	import { Menu } from '@lucide/svelte';
	// import { browser } from '$app/environment';
	import { appState } from '$lib/states/global_state.svelte';
	import { Button } from './ui/button';
	import { resolve } from '$app/paths';
	import { goto } from '$app/navigation';

	// const platform = browser && window.navigator.platform;
</script>

<nav
	class="absolute left-0 top-0 z-30 flex h-fit w-full items-center justify-center overflow-auto rounded-sm px-4"
>
	<div class="flex h-full w-full min-w-full max-w-400 flex-row items-center justify-between">
		<a href={resolve('/')} class="flex flex-row items-center space-x-2">
			<img src={logoIcon} alt="Singh & Rongphar" class="size-18" />

			<div class="flex-col md:flex hidden">
				<p class="font-seasons-bold text-xl md:text-2xl">Singh & Rongphar</p>
				<p class="text-right text-[0.65rem] text-foreground/80">Associates in law</p>
			</div>
			<!-- <img src={logoText} alt="" class="h-14 w-32" /> -->
		</a>

		<!-- <div class="flex items-center justify-center"></div> -->

		<div class="hidden items-center justify-center gap-x-4 md:flex text-nowrap text-sm">
			<a href={resolve('/practice-areas')}>Services</a>
			<a href={resolve('/resources')}>Resources</a>
			<a href={resolve('/#about')}>About Us</a>
			<Button
				class=""
				variant="default"
				onclick={async () => {
					await goto(resolve('/contact'));
				}}>Contact us</Button
			>
		</div>

		<div class="flex flex-row items-center space-x-2 md:hidden">
			<Button
				class=""
				size="icon"
				variant="ghost"
				onclick={() => {
					appState.drawer = !appState.drawer;
				}}
			>
				<Menu />
			</Button>
		</div>
	</div>
</nav>
