<script lang="ts">
	import { onMount } from 'svelte';

	let progressWidth = 0;
	let scrollProgress: HTMLDivElement;

	function updateProgressBar() {
		const scrollTop = window.scrollY;
		const docHeight = document.documentElement.scrollHeight - window.innerHeight;
		const scrollPercent = scrollTop / docHeight * 100;
		progressWidth = scrollPercent;
	}

	onMount(() => {
		window.addEventListener('scroll', updateProgressBar);
		return () => {
			window.removeEventListener('scroll', updateProgressBar);
		};
	});
</script>

<div class="progress-container" bind:this={scrollProgress}>
	<div 
		class="progress-bar" 
		style="width: {progressWidth}%"
	></div>
</div>

<style>
	.progress-container {
		position: fixed;
		top: 0;
		z-index: 1000;
		width: 100%;
		background-color: transparent;
		height: 8px;
	}

	.progress-bar {
		height: 100%;
		background: linear-gradient(to right, #ff6b6b, #4ecdc4);
		width: 0;
		transition: width 0.2s ease;
	}
</style>