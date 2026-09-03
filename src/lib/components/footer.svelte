<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<div class="h-fit p-2 bg-stone-950">
	<div class="mx-auto p-4 flex w-full max-w-400 flex-col justify-between gap-1 px-8 md:flex-row">
		<div class="flex h-full w-full flex-col items-center gap-4">
			<a href={resolve('/')} class="flex flex-col items-center space-x-2">
				<!-- <img src={logoIcon} alt="" class="size-22 invert object-contain" /> -->
				<div>
					<p class="font-seasons-bold text-2xl text-white">Singh & Rongphar</p>
					<p class="text-center text-[0.65rem] text-white/80">Associates in law</p>
				</div>
			</a>

			<div class="text-bold text-xs flex flex-row flex-wrap gap-4 justify-center text-white/70">
				<a href={resolve('/practice-areas')}>Services</a>
				<a href={resolve('/resources')}>Resources</a>
				<a href={resolve('/#attorneys')}>Attorneys</a>
				<a href={resolve('/contact')}>Contact us</a>
				<a href={resolve('/#about')}>About us</a>
			</div>

			<span class="h-px w-full bg-muted-foreground"></span>
			<p class="text-xs font-normal opacity-50 text-center text-white">
				© {new Date().getFullYear()} Singh & Rongphar. All rights reserved
			</p>

			<!-- <div class="flex h-10 flex-row space-x-2">
				<a
					target="_blank"
					href="https://www.instagram.com/peakgazers"
					class="h-6 opacity-90 hover:opacity-100"
				>
					<InstagramIcon class="h-6 w-6" />
				</a>

				<a
					target="_blank"
					href="https://youtube.com/peakgazers"
					class="h-6 opacity-90 hover:opacity-100"
				>
					<YoutubeIcon class="h-6 w-6" />
				</a>
			</div> -->
		</div>
	</div>
	<!-- <div class="h-4 w-full"></div> -->
</div>
