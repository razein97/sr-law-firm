<script lang="ts">
	import { MetaTags } from 'svelte-meta-tags';
	import PeopleShadow from '$lib/assets/images/people_with_shadow.png?enhanced';

	import BodyHeaderText from './_components/body_header_text.svelte';
	import About from './_components/about.svelte';
	import Services from './_components/services.svelte';
	import Mission from './_components/mission.svelte';
	import Attorneys from './_components/attorneys.svelte';
	import Footer from '$lib/components/footer.svelte';
</script>

<MetaTags
	title="Singh & Rongphar - Associates in law"
	description="A comprehensive law firm for all legal matters."
/>

<div class="w-full h-full flex flex-col bg-background">
	<br />
	<BodyHeaderText />

	<enhanced:img
		src={PeopleShadow}
		class="object-cover w-full h-fit"
		alt="People from different walks of life"
	/>

	<Services />

	<Attorneys />

	<Mission />
	<About />
	<Footer />
</div>
