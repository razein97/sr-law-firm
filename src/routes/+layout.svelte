<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/logo.svg';
	import { ModeWatcher } from 'mode-watcher';
	import { ProgressBar } from '@prgm/sveltekit-progress-bar';
	import { onMount } from 'svelte';
	import { navigating } from '$app/state';
	import Navbar from '$lib/components/navbar.svelte';
	import Drawer from '$lib/components/drawer.svelte';
	import { appState } from '$lib/states/global_state.svelte';

	let progressBar: ProgressBar | null = $state(null);

	onMount(() => {
		appState.drawer = false;
	});

	$effect(() => {
		if (navigating) {
			progressBar?.start();
		} else {
			progressBar?.complete();
		}
	});

	let { children } = $props();
</script>

<ModeWatcher track={false} defaultMode="light" />
<ProgressBar zIndex={31} bind:this={progressBar} class="text-primary" />

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<main class="bg-background min-h-dvh w-full scroll-smooth! max-h-screen flex">
	<Navbar />
	<Drawer />
	<div class="flex-1">
		{@render children?.()}
	</div>
</main>
