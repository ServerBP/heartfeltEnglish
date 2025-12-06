<script lang="ts">
	// About Us page content
</script>

<div class="about-page">
	<!-- Hero Section -->
	<section class="about-hero">
		<div class="hero-overlay"></div>
		<div class="hero-content">
			<h1 class="cursive hero-title">Our Story</h1>
			<p class="hero-subtitle normal">
				Empowering Lives Through Language and Creativity
			</p>
		</div>
	</section>

	<!-- Main Content -->
	<section class="content-section">
		<div class="content-container">
			<div class="story-block">
				<h2 class="section-title">Who We Are</h2>
				<p class="normal text-content">
					HeartfeltEnglish is a Hungarian-registered charity founded
					by two passionate English teachers,
					<span class="bold">Ágota Székely</span> and
					<span class="bold">Orsolya Szűcs</span>. What began three
					years ago as a heartfelt mission to give back has grown into
					a vibrant organization dedicated to supporting children in
					need.
				</p>
				<p class="normal text-content">
					Our team of committed volunteers provides free online
					English lessons to children living in care homes, offering
					them hope and opportunities they might not otherwise have.
					These children, removed from their original homes due to
					unsafe conditions, find a safe space to learn, grow, and
					explore their potential through HeartfeltEnglish.
				</p>
			</div>

			<div class="mission-block">
				<h2 class="section-title">Our Mission</h2>
				<p class="normal text-content">
					At HeartfeltEnglish, we believe in the limitless potential
					of every child. Through English language learning,
					mentorship, and meaningful connections, we empower our
					students to discover their talents and embrace their unique
					abilities—regardless of their family background.
				</p>
				<p class="normal text-content">
					We are committed to creating equal opportunities for
					children to access quality education, unlock their inner
					strengths, and break the cycle of poverty. Our mission is to
					guide them on a journey of self-discovery and growth,
					fostering a brighter future for themselves and their
					communities.
				</p>
			</div>

			<div class="initiatives-block">
				<h2 class="section-title">What We Do</h2>
				<div class="initiatives-grid">
					<div class="initiative-card">
						<i class="pi pi-book initiative-icon"></i>
						<h3 class="semi-bold">Free Online Lessons</h3>
						<p class="normal">
							Weekly English classes delivered by our dedicated
							volunteer teachers, bringing education directly to
							children in care homes across Hungary.
						</p>
					</div>
					<div class="initiative-card">
						<i class="pi pi-sun initiative-icon"></i>
						<h3 class="semi-bold">Summer Camps</h3>
						<p class="normal">
							Annual summer camps in Romania blending English
							lessons with hands-on creative workshops, creating
							unforgettable experiences and lasting memories.
						</p>
					</div>
					<div class="initiative-card">
						<i class="pi pi-palette initiative-icon"></i>
						<h3 class="semi-bold">Creative Workshops</h3>
						<p class="normal">
							Art and craft activities that allow children to
							express themselves, including felted paintings that
							are celebrated in our annual calendars.
						</p>
					</div>
					<div class="initiative-card">
						<i class="pi pi-heart initiative-icon"></i>
						<h3 class="semi-bold">Fundraising Events</h3>
						<p class="normal">
							Fashion shows, art auctions, and student artwork
							calendar sales that sustain our programs and
							showcase our students' incredible talents.
						</p>
					</div>
				</div>
			</div>

			<div class="impact-block">
				<h2 class="section-title">The Power of Community</h2>
				<p class="normal text-content">
					Beyond teaching, we bring creativity and community to life
					through impactful initiatives. Our fundraising events—like
					fashion shows, art auctions, and student artwork calendar
					sales—allow us to sustain our programs and shine a spotlight
					on our students' talents.
				</p>
				<p class="normal text-content">
					Each year, we host summer camps in Romania, blending English
					lessons with hands-on creative workshops. These workshops
					have led to beautiful felted paintings, crafted by the
					children, which are celebrated in our annual calendars.
				</p>
				<p class="normal text-content bold highlight-text">
					At HeartfeltEnglish, we believe in the transformative power
					of education and creativity to change lives.
				</p>
			</div>

			<div class="help-section">
				<h2 class="section-title cursive">How Can You Help?</h2>
				<div class="help-ways">
					<div class="help-card">
						<i class="pi pi-share-alt help-icon"></i>
						<h3 class="semi-bold">Spread Awareness</h3>
						<p class="normal">
							Share our social media pages with your network and
							help us reach more supporters.
						</p>
						<div class="help-links">
							<a
								href="https://www.facebook.com/HeartfeltEnglish"
								target="_blank"
								rel="noopener noreferrer"
								class="social-link">
								<i class="pi pi-facebook"></i> Facebook
							</a>
							<a
								href="https://www.instagram.com/heartfelt.english"
								target="_blank"
								rel="noopener noreferrer"
								class="social-link">
								<i class="pi pi-instagram"></i> Instagram
							</a>
						</div>
					</div>
					<div class="help-card">
						<i class="pi pi-users help-icon"></i>
						<h3 class="semi-bold">Become a Youth Ambassador</h3>
						<p class="normal">
							Lead fundraising projects and make a meaningful
							impact as a HeartfeltEnglish Youth Ambassador.
						</p>
						<a
							href="https://www.youtube.com/watch?v=hF_WglQl-K0"
							target="_blank"
							rel="noopener noreferrer"
							class="video-link">
							<i class="pi pi-youtube"></i> Watch Our Video
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>

<style>
	.about-page {
		width: 100%;
	}

	.about-hero {
		height: 60vh;
		background:
			linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)),
			url("/backgroundAssets/15.jpg") center/cover;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		text-align: center;
	}

	.hero-overlay {
		position: absolute;
		inset: 0;
		background: radial-gradient(
			ellipse at center,
			rgba(255, 255, 255, 0.4) 0%,
			rgba(255, 255, 255, 0) 100%
		);
	}

	.hero-content {
		position: relative;
		z-index: 1;
		max-width: 800px;
		padding: 2rem;
	}

	.hero-title {
		font-size: 4rem;
		margin-bottom: 1rem;
		color: var(--color-text);
		font-weight: 300;
	}

	.hero-subtitle {
		font-size: 1.5rem;
		color: var(--color-text-light);
	}

	.content-section {
		background-color: var(--color-background);
		padding: 4rem 2rem;
	}

	.content-container {
		max-width: 1200px;
		margin: 0 auto;
	}

	.story-block,
	.mission-block,
	.impact-block,
	.initiatives-block,
	.help-section {
		margin-bottom: 4rem;
	}

	.section-title {
		font-size: 2.5rem;
		color: var(--color-text);
		margin-bottom: 1.5rem;
		text-align: center;
	}

	.text-content {
		font-size: 1.1rem;
		line-height: 1.8;
		color: var(--color-text-light);
		margin-bottom: 1.5rem;
		max-width: 900px;
		margin-left: auto;
		margin-right: auto;
	}

	.highlight-text {
		color: var(--color-primary);
		font-size: 1.2rem;
		text-align: center;
		margin-top: 2rem;
	}

	.initiatives-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
		gap: 2rem;
		margin-top: 3rem;
	}

	.initiative-card {
		background: var(--color-background-light);
		padding: 2rem;
		border-radius: 8px;
		text-align: center;
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
	}

	.initiative-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
	}

	.initiative-icon {
		font-size: 3rem;
		color: var(--color-secondary);
		margin-bottom: 1rem;
	}

	.initiative-card h3 {
		font-size: 1.3rem;
		margin-bottom: 0.75rem;
		color: var(--color-text);
	}

	.initiative-card p {
		font-size: 1rem;
		line-height: 1.6;
		color: var(--color-text-light);
	}

	.help-section {
		background: linear-gradient(
			135deg,
			rgba(234, 179, 8, 0.1) 0%,
			rgba(202, 138, 4, 0.1) 100%
		);
		padding: 3rem;
		border-radius: 12px;
		margin-top: 4rem;
	}

	.help-ways {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2.5rem;
		margin-top: 2.5rem;
	}

	.help-card {
		background: white;
		padding: 2.5rem;
		border-radius: 8px;
		text-align: center;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
	}

	.help-icon {
		font-size: 3.5rem;
		color: var(--color-primary);
		margin-bottom: 1.5rem;
	}

	.help-card h3 {
		font-size: 1.4rem;
		margin-bottom: 1rem;
		color: var(--color-text);
	}

	.help-card p {
		font-size: 1rem;
		line-height: 1.7;
		color: var(--color-text-light);
		margin-bottom: 1.5rem;
	}

	.help-links {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		align-items: center;
	}

	.social-link,
	.video-link {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.75rem 1.5rem;
		background-color: var(--color-secondary);
		color: white;
		text-decoration: none;
		border-radius: 6px;
		font-weight: 600;
		transition:
			background-color 0.3s ease,
			transform 0.2s ease;
	}

	.social-link:hover,
	.video-link:hover {
		background-color: var(--color-accent);
		transform: translateY(-2px);
	}

	@media (max-width: 768px) {
		.hero-title {
			font-size: 2.5rem;
		}

		.hero-subtitle {
			font-size: 1.2rem;
		}

		.section-title {
			font-size: 2rem;
		}

		.text-content {
			font-size: 1rem;
		}

		.initiatives-grid {
			grid-template-columns: 1fr;
		}

		.help-ways {
			grid-template-columns: 1fr;
		}

		.help-section {
			padding: 2rem 1.5rem;
		}
	}
</style>
