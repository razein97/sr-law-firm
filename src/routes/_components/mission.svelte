<script lang="ts">
	import Mountains from '$lib/assets/images/vecteezy_landscape-hills-abstract-art-watercolor-painting-background_34863677.jpg?enhanced';
</script>

<div
	class="grid gap-4 md:grid-cols-[1fr_4fr] grid-flow-row md:grid-flow-col md:p-20 p-4 relative md:min-h-96 min-h-72"
>
	<div class="z-10 uppercase font-mono text-sm min-w-0">Our Mission</div>

	<div class="flex flex-col gap-6 justify-start min-w-0">
		<p class="z-10 text-3xl font-medium font-inter tracking-tight">Mission</p>
		<p class="z-10 text-pretty">
			To serve as a trusted legal advisors to all walks of life, who protects your rights and
			strives to achieve the best possible outcome for your case.
		</p>
	</div>

	<enhanced:img
		src={Mountains}
		alt="mission"
		class="absolute inset-0 w-full h-full object-cover z-0 opacity-40"
	/>
</div>
