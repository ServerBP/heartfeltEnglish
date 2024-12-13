<script lang="ts">
	export let founders: Array<{
		name: string;
		role: string;
		image: string;
		quote: string;
	}>;

	export let volunteers: Array<{
		name: string;
		role: string;
		image: string;
		quote: string;
	}>;
</script>

<section class="team-section">
	<div class="founders">
		<h2 class="section-title">Our Founders</h2>
		<div class="team-grid">
			{#each founders as founder}
				<div class="team-member">
					<img src={founder.image} alt={founder.name} class="team-image" />
					<h3>{founder.name}</h3>
					<p class="role">{founder.role}</p>
					<blockquote>"{founder.quote}"</blockquote>
				</div>
			{/each}
		</div>
	</div>

	<div class="volunteers">
		<h2 class="section-title">Our Volunteers</h2>
		<div class="team-grid">
			{#each volunteers as volunteer}
				<div class="team-member">
					<img src={volunteer.image} alt={volunteer.name} class="team-image" />
					<h3>{volunteer.name}</h3>
					<p class="role">{volunteer.role}</p>
					<blockquote>"{volunteer.quote}"</blockquote>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.team-section {
		background-color: rgba(255, 255, 255, 0.9);
		padding: 4rem 2rem;
	}

	.section-title {
		text-align: center;
		margin-bottom: 3rem;
		color: #333;
	}

	.team-grid {
		display: flex;
		justify-content: center;
		gap: 2rem;
	}

	.team-member {
		text-align: center;
		max-width: 300px;
		background-color: white;
		padding: 2rem;
		border-radius: 10px;
		box-shadow: 0 4px 6px rgba(0,0,0,0.1);
		transition: transform 0.3s ease;
	}

	.team-member:hover {
		transform: translateY(-10px);
	}

	.team-image {
		width: 200px;
		height: 200px;
		border-radius: 50%;
		object-fit: cover;
		margin-bottom: 1rem;
	}

	.role {
		color: #777;
		margin-bottom: 1rem;
	}

	blockquote {
		font-style: italic;
		color: #555;
	}
</style>