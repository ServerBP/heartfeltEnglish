<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	let currentImageIndex = 0;
	let backgroundImages: string[] = [];
	let intervalId: number;

	onMount(async () => {
		// Dynamically import images from the static folder
		const backgroundImports = import.meta.glob('/static/backgroundAssets/*.{png,jpg,jpeg,webp}');
		
		backgroundImages = Object.keys(backgroundImports).map(path => 
			path.replace('/static', '')
		);

		// Start slideshow
		intervalId = setInterval(changeImage, 5000) as unknown as number;
	});

	function changeImage() {
		currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
	}

	onDestroy(() => {
		if (intervalId) {
			clearInterval(intervalId);
		}
	});
</script>

<div class="background-slideshow">
	{#each backgroundImages as image, index}
		<img 
			src={image} 
			alt={`Background ${index + 1}`}
			class:active={index === currentImageIndex}
			class="background-image"
		/>
	{/each}
</div>

<style>
	.background-slideshow {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
		overflow: hidden;
	}

	.background-image {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0;
		transition: opacity 1s ease-in-out;
		filter: blur(3px);
	}

	.background-image.active {
		opacity: 1;
	}
</style>