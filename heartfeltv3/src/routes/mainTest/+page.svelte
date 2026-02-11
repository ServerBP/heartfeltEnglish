<script lang="ts">
	interface TimelineEvent {
		date: string;
		title: string;
		image: string;
		description: string;
	}

	let timelineEvents: TimelineEvent[] = [
		{
			date: "2021",
			title: "Foundation Established",
			image: "/placeholder.svg?height=300&width=400",
			description:
				"HeartfeltEnglish was founded by Ágota Székely to provide free English lessons to children from care homes.",
		},
		{
			date: "2022",
			title: "Team Expansion",
			image: "/placeholder.svg?height=300&width=400",
			description:
				"Orsolya Szűcs joined the team, along with dedicated volunteers expanding our reach.",
		},
		{
			date: "2023",
			title: "Summer Camps Launch",
			image: "/placeholder.svg?height=300&width=400",
			description:
				"First summer camps held in Romania, creating unforgettable learning experiences.",
		},
		{
			date: "2024",
			title: "UK Scholarships",
			image: "/placeholder.svg?height=300&width=400",
			description:
				"Launched scholarship program for UK summer schools, opening new opportunities.",
		},
	];

	let hoveredIndex: number | null = null;

	function handleHover(index: number | null) {
		hoveredIndex = index;
	}
</script>

<!-- Full screen hero with clean design -->
<div class="hero">
	<div class="hero-overlay"></div>
	<div class="hero-content">
		<img src="/logos/whiteLogo.png" alt="HeartfeltEnglish Logo" class="hero-logo" />
		<h1 class="hero-title">
			Making a Difference Through <span class="cursive-accent"
				>Education</span>
		</h1>
		<p class="hero-subtitle normal">
			Empowering children from care homes through free English lessons and
			life-changing opportunities
		</p>
		<div class="hero-buttons">
			<a
				href="/donate"
				class="hero-btn primary"
				onclick={() => {
					/* Handle click event */
				}}>Give Now</a>
			<a
				href="/about"
				class="hero-btn secondary"
				onclick={() => {
					/* Handle click event */
				}}>Our Mission</a>
		</div>
	</div>
</div>

<!-- Our Story section with individual background -->
<section class="section-with-bg our-story-section">
	<div class="section-container">
		<div class="section-content">
			<h2 class="section-heading">Our Story</h2>
			<p class="section-text normal">
				Since 2021, HeartfeltEnglish has been making a difference by
				providing free English lessons and opportunities for children
				from care homes. Founded by Ágota Székely and later joined by
				Orsolya Szűcs and a team of dedicated volunteers.
			</p>
			<p class="section-text normal">
				We empower young lives through online classes, summer camps in
				Romania, and scholarships for UK summer schools. Together, we
				bring support and education to those who need it most.
			</p>
		</div>
	</div>
</section>

<!-- Impact statistics section with yellow accents -->
<section class="impact-section">
	<div class="section-container">
		<h2 class="section-heading cursive large">
			Transforming Lives <span class="cursive-accent">Together</span>
		</h2>
		<div class="impact-grid">
			<div class="impact-card">
				<div class="impact-number">50+</div>
				<p class="impact-label normal">Children Supported</p>
			</div>
			<div class="impact-card">
				<div class="impact-number">25+</div>
				<p class="impact-label normal">Dedicated Volunteers</p>
			</div>
			<div class="impact-card">
				<div class="impact-number">500+</div>
				<p class="impact-label normal">Hours of Teaching</p>
			</div>
		</div>
	</div>
</section>

<!-- Mission section with individual background -->
<section class="section-with-bg mission-section">
	<div class="section-container">
		<div class="section-content centered">
			<h2 class="section-heading white">Our Mission</h2>
			<p class="section-text white large normal">
				At HeartfeltEnglish, we believe in the limitless potential of
				every child. Through English language learning, mentorship, and
				meaningful connections, we empower our students to discover
				their talents and embrace their unique abilities—regardless of
				their family background.
			</p>
			<p class="section-text white normal">
				We are committed to creating equal opportunities for children to
				access quality education, unlock their inner strengths, and
				break the cycle of poverty.
			</p>
		</div>
	</div>
</section>

<!-- Values section with individual background -->
<section class="section-with-bg values-section">
	<div class="section-container">
		<h2 class="section-heading centered">What Drives Us</h2>
		<div class="values-grid">
			<div class="value-card">
				<i class="pi pi-heart-fill value-icon"></i>
				<h3 class="value-title">Compassion</h3>
				<p class="value-text normal">
					We lead with empathy and care for every child we serve.
				</p>
			</div>
			<div class="value-card">
				<i class="pi pi-users value-icon"></i>
				<h3 class="value-title">Community</h3>
				<p class="value-text normal">
					Building connections that create lasting impact.
				</p>
			</div>
			<div class="value-card">
				<i class="pi pi-star-fill value-icon"></i>
				<h3 class="value-title">Excellence</h3>
				<p class="value-text normal">
					Providing quality education and meaningful opportunities.
				</p>
			</div>
			<div class="value-card">
				<i class="pi pi-shield value-icon"></i>
				<h3 class="value-title">Empowerment</h3>
				<p class="value-text normal">
					Unlocking potential and fostering self-discovery.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Timeline section with individual background -->
<section class="section-with-bg timeline-section">
	<div class="section-container">
		<h2 class="section-heading centered cursive large">
			Our <span class="cursive-accent">Journey</span>
		</h2>
		<div class="timeline">
			{#each timelineEvents as event, index}
				<div
					class="timeline-item"
					role="button"
					tabindex="0"
					onmouseover={() => handleHover(index)}
					onmouseout={() => handleHover(null)}
					onfocus={() => handleHover(index)}
					onblur={() => handleHover(null)}>
					<div class="timeline-marker"></div>
					<div class="timeline-content">
						<div class="timeline-date bold">{event.date}</div>
						<h3 class="timeline-title">{event.title}</h3>
						<div class="timeline-image-container">
							<!-- <img
								src={event.image || "/placeholder.svg"}
								alt={event.title}
								class="timeline-image" /> -->
							<p class="timeline-description normal">
								{event.description}
							</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- CTA section with yellow accent -->
<section class="cta-section">
	<div class="section-container">
		<h2 class="cta-heading">Make a Difference Today</h2>
		<p class="cta-text normal">
			Your support helps us provide education and opportunities to
			children who need it most.
		</p>
		<a
			href="/donate"
			class="cta-button"
			onclick={() => {
				/* Handle click event */
			}}>Donate Now</a>
	</div>
</section>

<style>
	/* Full screen hero with clean overlay */
	.hero {
		position: relative;
		height: 100vh;
		min-height: 650px;
		background-image: url("/backgroundAssets/19.jpg");
		background-size: cover;
		background-position: center;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
	}

	.hero-overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(
			135deg,
			rgba(255, 255, 255, 0.8) 0%,
			rgba(255, 255, 255, 0.5) 50%,
			rgba(255, 255, 255, 0.8) 100%
		);
	}

	.hero-content {
		position: relative;
		z-index: 10;
		max-width: 900px;
		padding: 0 2rem;
	}

	.hero-logo {
		width: 250px;
		height: 250px;
		border-radius: 50%;
		margin-bottom: 2rem;
		border: 4px solid #ffffff;
		box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
		object-fit: cover;
	}

	.hero-title {
		font-size: 3.5rem;
		margin: 0 0 1.5rem 0;
		color: var(--color-text);
		font-weight: 700;
		line-height: 1.1;
		letter-spacing: -0.02em;
	}

	.cursive-accent {
		font-family: "Brush Script MT", cursive;
		color: #dc2626;
		font-weight: 400;
	}

	.hero-subtitle {
		font-size: 1.35rem;
		margin: 0 0 2.5rem 0;
		color: var(--color-text);
		line-height: 1.6;
		max-width: 700px;
		margin-left: auto;
		margin-right: auto;
		text-shadow: 1px 1px 2px pink;
	}

	.hero-buttons {
		display: flex;
		gap: 1.2rem;
		justify-content: center;
		flex-wrap: wrap;
	}

	/* Updated button styles to match Amazima's clean aesthetic */
	.hero-btn {
		display: inline-block;
		padding: 1rem 2.5rem;
		border-radius: 4px;
		text-decoration: none;
		font-weight: 600;
		font-size: 1rem;
		transition: all 0.2s ease;
		letter-spacing: 0.01em;
	}

	.hero-btn.primary {
		background-color: #eab308;
		color: #ffffff;
	}

	.hero-btn.primary:hover {
		background-color: #ca8a04;
		transform: translateY(-2px);
	}

	.hero-btn.secondary {
		background-color: #dc2626;
		color: #ffffff;
	}

	.hero-btn.secondary:hover {
		background-color: #b91c1c;
		transform: translateY(-2px);
	}

	/* Section with background image and white overlay */
	.section-with-bg {
		position: relative;
		background-size: cover;
		background-position: center;
		background-attachment: scroll;
	}

	.our-story-section {
		background-image: url("/backgroundAssets/1.jpg");
		padding: 5rem 0;
	}

	.our-story-section::before {
		content: "";
		position: absolute;
		inset: 0;
		background: linear-gradient(
			180deg,
			rgba(255, 255, 255, 0.6) 0%,
			rgba(255, 255, 255, 0.6) 50%,
			rgba(255, 255, 255, 0.7) 100%
		);
	}

	.mission-section {
		background-image: url("/backgroundAssets/16.jpg");
		padding: 5rem 0;
	}

	.mission-section::before {
		content: "";
		position: absolute;
		inset: 0;
		background: linear-gradient(
			135deg,
			rgba(220, 38, 38, 0.8) 0%,
			rgba(185, 28, 28, 0.5) 100%
		);
	}

	.values-section {
		background-image: url("/backgroundAssets/3.jpg");
		padding: 5rem 0;
	}

	.values-section::before {
		content: "";
		position: absolute;
		inset: 0;
		background: linear-gradient(
			180deg,
			rgba(255, 255, 255, 0.8) 0%,
			rgba(255, 255, 255, 0.5) 50%,
			rgba(255, 255, 255, 0.8) 100%
		);
	}

	.timeline-section {
		background-image: url("/backgroundAssets/2.jpg");
		padding: 5rem 0;
	}

	.timeline-section::before {
		content: "";
		position: absolute;
		inset: 0;
		background: linear-gradient(
			180deg,
			rgba(255, 255, 255, 0.8) 0%,
			rgba(255, 255, 255, 0.5) 50%,
			rgba(255, 255, 255, 0.5) 100%
		);
	}

	.section-container {
		max-width: 1400px;
		margin: 0 auto;
		padding: 0 2rem;
		position: relative;
		z-index: 1;
	}

	.section-content {
		max-width: 900px;
		margin: 0 auto;
	}

	.section-content.centered {
		text-align: center;
	}

	.section-heading {
		font-size: 2.8rem;
		margin: 0 0 2rem 0;
		color: var(--color-text);
		font-weight: 700;
		letter-spacing: -0.02em;
	}

	.section-heading.centered {
		text-align: center;
	}

	.section-heading.white {
		color: #ffffff;
	}

	.section-heading.cursive {
		font-family: "Brush Script MT", cursive;
		font-weight: 400;
	}

	.section-heading.large {
		font-size: 3.2rem;
	}

	.section-text {
		font-size: 1.15rem;
		line-height: 1.8;
		color: var(--color-text-light);
		margin-bottom: 1.5rem;
		text-shadow: 1px 1px 1px pink;
	}

	.section-text.white {
		color: #ffffff;
	}

	.section-text.large {
		font-size: 1.3rem;
	}

	/* Impact section with yellow accents */
	.impact-section {
		background-color: #dc2626;
		padding: 5rem 0;
		color: #ffffff;
	}

	.impact-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 3rem;
		margin-top: 3rem;
	}

	.impact-card {
		text-align: center;
	}

	.impact-number {
		font-size: 4rem;
		font-weight: 700;
		color: #eab308;
		margin-bottom: 0.5rem;
		line-height: 1;
	}

	.impact-label {
		font-size: 1.2rem;
		color: #ffffff;
		margin: 0;
	}

	/* Values grid */
	.values-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
		gap: 2rem;
		margin-top: 3rem;
	}

	.value-card {
		background: #ffffff;
		padding: 2.5rem 2rem;
		border-radius: 8px;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
		text-align: center;
		transition:
			transform 0.2s ease,
			box-shadow 0.2s ease;
	}

	.value-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
	}

	.value-icon {
		font-size: 2.8rem;
		color: #dc2626;
		margin-bottom: 1.2rem;
	}

	.value-title {
		color: var(--color-text);
		margin: 0 0 0.8rem 0;
		font-size: 1.3rem;
		font-weight: 600;
	}

	.value-text {
		color: var(--color-text-light);
		line-height: 1.7;
		margin: 0;
		font-size: 1rem;
	}

	/* Timeline */
	.timeline {
		position: relative;
		max-width: 900px;
		margin: 3rem auto 0;
		padding: 2rem 0;
	}

	.timeline::before {
		content: "";
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		width: 3px;
		height: 100%;
		background: #dc2626;
	}

	.timeline-item {
		position: relative;
		margin-bottom: 3rem;
	}

	.timeline-marker {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		width: 18px;
		height: 18px;
		background: #ffffff;
		border: 4px solid #eab308;
		border-radius: 50%;
		z-index: 10;
		transition:
			transform 0.2s ease,
			border-color 0.2s ease;
	}

	.timeline-content {
		width: 42%;
		padding: 1.8rem;
		background: #ffffff;
		border-radius: 8px;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
		transition:
			transform 0.2s ease,
			box-shadow 0.2s ease;
	}

	.timeline-item:nth-child(odd) .timeline-content {
		margin-left: 58%;
	}

	.timeline-item:nth-child(even) .timeline-content {
		margin-right: 58%;
	}

	.timeline-date {
		font-size: 1.6rem;
		color: #dc2626;
		margin-bottom: 0.5rem;
	}

	.timeline-title {
		color: var(--color-text);
		margin: 0 0 1rem 0;
		font-size: 1.2rem;
		font-weight: 600;
	}

	.timeline-image-container {
		margin-top: 1.2rem;
	}

	.timeline-image {
		width: 100%;
		border-radius: 6px;
		margin-bottom: 0.8rem;
	}

	.timeline-description {
		color: var(--color-text-light);
		font-size: 0.95rem;
		line-height: 1.6;
		margin: 0;
	}

	/* CTA Section */
	.cta-section {
		background-color: #eab308;
		padding: 5rem 0;
		text-align: center;
	}

	.cta-heading {
		font-size: 2.8rem;
		margin: 0 0 1rem 0;
		color: #ffffff;
		font-weight: 700;
	}

	.cta-text {
		font-size: 1.2rem;
		margin: 0 0 2.5rem 0;
		color: #ffffff;
		max-width: 700px;
		margin-left: auto;
		margin-right: auto;
	}

	.cta-button {
		display: inline-block;
		background: #dc2626;
		color: #ffffff;
		padding: 1.1rem 3rem;
		border-radius: 4px;
		text-decoration: none;
		font-weight: 600;
		font-size: 1.1rem;
		transition: all 0.2s ease;
		letter-spacing: 0.01em;
	}

	.cta-button:hover {
		background: #b91c1c;
		transform: translateY(-2px);
	}

	/* Mobile responsive */
	@media (max-width: 768px) {
		.hero {
			min-height: 550px;
		}

		.hero-title {
			font-size: 2.2rem;
		}

		.hero-subtitle {
			font-size: 1.1rem;
		}

		.hero-logo {
			width: 100px;
			height: 100px;
		}

		.hero-buttons {
			flex-direction: column;
			align-items: stretch;
			max-width: 300px;
			margin: 0 auto;
		}

		.section-heading {
			font-size: 2.2rem;
		}

		.section-heading.large {
			font-size: 2.5rem;
		}

		.section-text {
			font-size: 1.05rem;
		}

		.impact-number {
			font-size: 3rem;
		}

		.timeline::before {
			left: 20px;
		}

		.timeline-marker {
			left: 20px;
		}

		.timeline-content {
			width: calc(100% - 70px);
			margin-left: 50px !important;
		}

		.timeline-item:nth-child(even) .timeline-content {
			margin-left: 50px !important;
			margin-right: 0;
		}
	}

	@media (max-width: 360px) {
		.hero-title {
			font-size: 1.9rem;
		}

		.hero-subtitle {
			font-size: 1rem;
		}

		.hero-logo {
			width: 85px;
			height: 85px;
		}

		.section-heading {
			font-size: 1.9rem;
		}
	}
</style>
