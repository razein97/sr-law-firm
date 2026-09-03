<script lang="ts">
	import Footer from '$lib/components/footer.svelte';
	import type { PageProps } from './$types';
	import MapMarker1Icon from '~icons/glyphs-poly/map-marker-1';
	import { Button } from '$lib/components/ui/button';

	let { data }: PageProps = $props();
</script>

<div class="h-full w-full flex flex-col pt-16 gap-10">
	<div class="flex-1 flex flex-col items-center gap-10 p-4">
		<h1
			class="font-bold text-2xl underline underline-offset-4 decoration-4 decoration-wavy decoration-primary font-heading md:text-4xl"
		>
			Contact Us
		</h1>

		<div
			class="border rounded-xl border-muted-foreground/20 max-w-full md:w-96 max-h-96 h-full p-4 flex flex-col gap-4"
		>
			<p class="font-semibold text-xl text-center">Guwahati Office</p>

			<p class="text-pretty text-sm text-left">
				House No. 5, Opp. Housing Colony, Chandrapur Road, Narengi Tiniali, Narengi, Guwahati,
				Kamrup (Metro), Assam 781026.
			</p>

			<p class="text-sm">
				<b>Contact No:</b> <a href="tel:+919707972529">+91 97079 92529</a>,
				<a href="tel:+9193653577608">+91 93653 577608</a>
			</p>

			<div class="h-full"></div>

			<Button
				variant="outline"
				class="flex flex-row"
				onclick={() => {
					window.open('https://maps.app.goo.gl/Wf1qsG17ZDZFTu3K6');
				}}
			>
				<MapMarker1Icon />

				<p>Get Directions</p>
			</Button>
		</div>
	</div>

	<Footer />
</div>
