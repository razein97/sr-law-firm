<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { Button } from '$lib/components/ui/button';
</script>

<div class="flex flex-col gap-10 items-center">
	<br />

	<div class="text-pretty">
		<p class="text-5xl text-center font-bold text-foreground/60">Trusted Legal Solutions for</p>
		<p class="text-5xl text-center font-bold">Your Peace of Mind</p>
	</div>

	<div class="font-light">
		<p class="text-center text-sm">
			At <b class="font-bold">Singh & Rongphar</b>, we are committed to provide exceptional
		</p>
		<p class="text-center text-sm">legal services tailored to your unique needs</p>
	</div>

	<Button
		class="w-32 "
		variant="default"
		onclick={async () => {
			await goto(resolve('/contact'));
		}}>Contact us</Button
	>
	<br />
</div>
