<script lang="ts">
	export let testimonials: Array<{
		name: string;
		quote: string;
		image: string;
	}>;

	let currentTestimonialIndex = 0;

	function nextTestimonial() {
		currentTestimonialIndex = 
			(currentTestimonialIndex + 1) % testimonials.length;
	}

	function prevTestimonial() {
		currentTestimonialIndex = 
			(currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
	}
</script>

<div class="testimonial-slider">
	{#each testimonials as testimonial, index}
		<div 
			class="testimonial" 
			class:active={index === currentTestimonialIndex}
		>
			<img 
				src={testimonial.image} 
				alt={testimonial.name} 
				class="testimonial-image"
			/>
			<div class="testimonial-content">
				<blockquote>"{testimonial.quote}"</blockquote>
				<cite>- {testimonial.name}</cite>
			</div>
		</div>
	{/each}

	<div class="slider-controls">
		<button 
			class="nav-button prev" 
			on:click={prevTestimonial}
			aria-label="Previous Testimonial"
		>
			&#10094;
		</button>
		<button 
			class="nav-button next" 
			on:click={nextTestimonial}
			aria-label="Next Testimonial"
		>
			&#10095;
		</button>
	</div>

	<div class="testimonial-indicators">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		{#each testimonials as _, index}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<span 
				class="indicator" 
				class:active={index === currentTestimonialIndex}
				on:click={() => currentTestimonialIndex = index}
			></span>
		{/each}
	</div>
</div>

<style>
	.testimonial-slider {
		position: relative;
		max-width: 800px;
		margin: 0 auto;
		background-color: transparent;
		border-radius: 15px;
		overflow: hidden;
	}

	.testimonial {
		display: none;
		opacity: 0;
		transition: opacity 0.5s ease-in-out;
		flex-direction: column;
		align-items: center;
		padding: 2rem;
		text-align: center;
	}

	.testimonial.active {
		display: flex;
		opacity: 1;
	}

	.testimonial-image {
		width: 200px;
		height: 200px;
		border-radius: 50%;
		object-fit: cover;
		margin-bottom: 1.5rem;
		border: 4px solid #ff6b6b;
	}

	.testimonial-content {
		max-width: 600px;
	}

	blockquote {
		font-size: 1.2rem;
		font-style: italic;
		margin-bottom: 1rem;
		color: #333;
	}

	cite {
		font-weight: bold;
		color: #666;
	}

	.slider-controls {
		position: absolute;
		top: 50%;
		width: 100%;
		display: flex;
		justify-content: space-between;
		transform: translateY(-50%);
	}

	.nav-button {
		background-color: rgba(0,0,0,0.5);
		color: white;
		border: none;
		padding: 10px 15px;
		cursor: pointer;
		font-size: 1.5rem;
		transition: background-color 0.3s ease;
	}

	.nav-button:hover {
		background-color: rgba(0,0,0,0.7);
	}

	.testimonial-indicators {
		position: absolute;
		bottom: 20px;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		gap: 10px;
	}

	.indicator {
		width: 10px;
		height: 10px;
		background-color: rgba(255,255,255,0.5);
		border-radius: 50%;
		cursor: pointer;
		transition: background-color 0.3s ease;
	}

	.indicator.active {
		background-color: #ff6b6b;
	}
</style>