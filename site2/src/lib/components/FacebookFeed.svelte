<script lang="ts">
	// In a real-world scenario, you'd use Facebook's API or a fetch method
	const mockPosts = [
		{
			id: 1,
			date: 'December 10, 2024',
			content: 'We just completed our latest summer scholarship program! Check out the amazing stories of our students.',
			image: '/posts/summer-program.jpg',
		},
		{
			id: 2,
			date: 'November 25, 2024',
			content: 'Heartfelt English is proud to announce our expansion to three new cities in Hungary!',
			image: '/posts/expansion.jpg',
		},
		{
			id: 3,
			date: 'November 5, 2024',
			content: 'Thank you to all our amazing volunteers who make our mission possible!',
			image: '/posts/volunteers.jpg',
		}
	];
</script>

<section class="facebook-feed">
	<div class="posts-container">
		{#each mockPosts as post}
			<div class="post">
				<!-- svelte-ignore a11y-img-redundant-alt -->
				<img src={post.image} alt="Post image" class="post-image"/>
				<div class="post-content">
					<p class="post-text">{post.content}</p>
					<div class="post-meta">
						<span class="post-date">{post.date}</span>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	.facebook-feed {
		background-color: transparent;
		padding: 3rem 2rem;
	}

	.posts-container {
		display: flex;
		justify-content: center;
		gap: 2rem;
		flex-wrap: wrap;
	}

	.post {
		max-width: 350px;
		background-color: white;
		border-radius: 10px;
		box-shadow: 0 4px 6px rgba(0,0,0,0.1);
		overflow: hidden;
		transition: transform 0.3s ease;
	}

	.post:hover {
		transform: translateY(-10px);
	}

	.post-image {
		width: 100%;
		height: 250px;
		object-fit: cover;
	}

	.post-content {
		padding: 1rem;
	}

	.post-text {
		margin-bottom: 1rem;
		color: #333;
	}

	.post-meta {
		display: flex;
		justify-content: space-between;
		color: #666;
		font-size: 0.9rem;
	}

	.post-interactions {
		display: flex;
		gap: 1rem;
	}
</style>