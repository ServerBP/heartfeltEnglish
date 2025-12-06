<script lang="ts">
	import "../app.css";

	let { children } = $props();

	let currentYear = new Date().getFullYear();
	let mobileMenuOpen = $state(false);

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}
</script>

<div class="app">
	<nav class="navbar">
		<div class="nav-container">
			<div class="nav-logo">
				<img src="/logos/whiteLogo.png" alt="HeartfeltEnglish Logo" class="logo" />
				<span class="brand-name">HeartfeltEnglish</span>
			</div>
			<button
				class="hamburger"
				onclick={toggleMobileMenu}
				aria-label="Toggle menu">
				<span class:open={mobileMenuOpen}></span>
				<span class:open={mobileMenuOpen}></span>
				<span class:open={mobileMenuOpen}></span>
			</button>
			<ul class="nav-links" class:mobile-open={mobileMenuOpen}>
				<li>
					<a href="/" onclick={() => (mobileMenuOpen = false)}
						>Home</a>
				</li>
				<li>
					<a href="/about" onclick={() => (mobileMenuOpen = false)}
						>About Us</a>
				</li>
			</ul>
			<div class="nav-right" class:mobile-open={mobileMenuOpen}>
				<div class="social-icons">
					<a
						href="https://www.facebook.com/profile.php?id=100089924056817"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Facebook">
						<i class="pi pi-facebook"></i>
					</a>
					<a
						href="https://www.instagram.com/heartfelt.english"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Instagram">
						<i class="pi pi-instagram"></i>
					</a>
					<a
						href="https://www.youtube.com/@HeartfeltEnglish"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="YouTube">
						<i class="pi pi-youtube"></i>
					</a>
				</div>
				<a
					href="/donate"
					class="donate-nav-btn"
					onclick={() => (mobileMenuOpen = false)}>Donate</a>
			</div>
		</div>
	</nav>

	<main class="main-content">
		{@render children()}
	</main>

	<footer class="footer">
		<div class="footer-container">
			<div class="footer-content">
				<div class="footer-section">
					<h3 class="footer-heading">HeartfeltEnglish Foundation</h3>
					<p class="foundation-subtitle cursive">
						Szívbőljövő Angol Alapítvány
					</p>
					<p class="registration normal">
						Registration Number: 01-01-0013496
					</p>
				</div>

				<div class="footer-section">
					<h4 class="footer-subheading">Contact Us</h4>
					<div class="contact-item normal">
						<i class="pi pi-phone"></i>
						<a href="tel:+36705673348">+36 70 567 33 48</a>
					</div>
				</div>

				<div class="footer-section">
					<h4 class="footer-subheading">Follow Us</h4>
					<div class="social-links">
						<a
							href="https://www.facebook.com/profile.php?id=100089924056817"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Facebook">
							<i class="pi pi-facebook"></i>
						</a>
						<a
							href="https://www.instagram.com/heartfelt.english"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Instagram">
							<i class="pi pi-instagram"></i>
						</a>
						<a
							href="https://www.youtube.com/@HeartfeltEnglish"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="YouTube">
							<i class="pi pi-youtube"></i>
						</a>
					</div>
				</div>

				<div class="footer-section">
					<h4 class="footer-subheading">Support Us</h4>
					<p class="tax-support normal">
						Support us through your taxes: 1%
					</p>
				</div>
			</div>

			<div class="footer-bottom">
				<p class="normal">
					&copy; {currentYear} HeartfeltEnglish Foundation. All rights
					reserved.
				</p>
			</div>
		</div>
	</footer>
</div>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
		background-color: #ffffff;
		color: #333;
	}

	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	.navbar {
		background-color: #ffffff;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
		padding: 1rem 0;
		position: sticky;
		top: 0;
		z-index: 1000;
	}

	.nav-container {
		max-width: 1400px;
		margin: 0 auto;
		padding: 0 2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 2rem;
	}

	.nav-logo {
		display: flex;
		align-items: center;
		gap: 1rem;
		flex-shrink: 0;
	}

	.logo {
		width: 55px;
		height: 55px;
		border-radius: 50%;
		object-fit: cover;
	}

	.brand-name {
		font-size: 1.5rem;
		font-weight: 700;
		color: var(--color-text);
		letter-spacing: -0.02em;
	}

	.nav-links {
		display: flex;
		list-style: none;
		gap: 3rem;
		margin: 0;
		padding: 0;
		align-items: center;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
	}

	.nav-links a {
		text-decoration: none;
		color: var(--color-text);
		font-weight: 600;
		font-size: 1.1rem;
		transition: color 0.2s ease;
		letter-spacing: 0.01em;
	}

	.nav-links a:hover {
		color: var(--color-primary);
	}

	.nav-right {
		display: flex;
		align-items: center;
		gap: 2rem;
		flex-shrink: 0;
	}

	.social-icons {
		display: flex;
		gap: 1rem;
		align-items: center;
	}

	.social-icons a {
		color: var(--color-text);
		font-size: 1.4rem;
		transition:
			color 0.2s ease,
			transform 0.2s ease;
		line-height: 1;
	}

	.social-icons a:hover {
		color: var(--color-secondary);
		transform: translateY(-2px);
	}

	.donate-nav-btn {
		background-color: #eab308;
		color: #ffffff !important;
		padding: 0.85rem 2.2rem;
		border-radius: 6px;
		font-weight: 700;
		font-size: 1.05rem;
		text-decoration: none;
		transition:
			background-color 0.2s ease,
			transform 0.2s ease,
			box-shadow 0.2s ease;
		box-shadow: 0 2px 8px rgba(234, 179, 8, 0.3);
	}

	.donate-nav-btn:hover {
		background-color: #ca8a04;
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(234, 179, 8, 0.4);
		color: #ffffff !important;
	}

	.main-content {
		flex: 1;
	}

	.footer {
		background-color: #1e293b;
		color: #e2e8f0;
		padding: 3rem 0 1.5rem;
		margin-top: 0;
	}

	.footer-container {
		max-width: 1400px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	.footer-content {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
		gap: 2.5rem;
		margin-bottom: 2.5rem;
	}

	.footer-heading {
		margin-top: 0;
		margin-bottom: 0.75rem;
		font-size: 1.2rem;
		color: #ffffff;
		font-weight: 600;
	}

	.footer-subheading {
		margin-top: 0;
		margin-bottom: 1rem;
		font-size: 1rem;
		color: #ffffff;
		font-weight: 600;
	}

	.foundation-subtitle {
		margin-bottom: 0.5rem;
		opacity: 0.9;
		font-size: 0.95rem;
	}

	.registration {
		font-size: 0.9rem;
		opacity: 0.8;
	}

	.contact-item {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		margin-bottom: 0.5rem;
	}

	.contact-item a {
		color: #e2e8f0;
		text-decoration: none;
		transition: color 0.2s ease;
		font-size: 0.95rem;
	}

	.contact-item a:hover {
		color: #eab308;
	}

	.social-links {
		display: flex;
		gap: 1.2rem;
	}

	.social-links a {
		color: #e2e8f0;
		font-size: 1.6rem;
		transition:
			color 0.2s ease,
			transform 0.2s ease;
	}

	.social-links a:hover {
		color: #eab308;
		transform: translateY(-2px);
	}

	.tax-support {
		font-size: 0.95rem;
		margin: 0;
	}

	.footer-bottom {
		text-align: center;
		padding-top: 2rem;
		border-top: 1px solid rgba(255, 255, 255, 0.1);
		font-size: 0.9rem;
		opacity: 0.8;
	}

	.hamburger {
		display: none;
		flex-direction: column;
		background: none;
		border: none;
		cursor: pointer;
		padding: 0.5rem;
		z-index: 1001;
	}

	.hamburger span {
		width: 25px;
		height: 2px;
		background-color: var(--color-text);
		margin: 4px 0;
		transition: all 0.3s ease;
		display: block;
	}

	.hamburger span.open:nth-child(1) {
		transform: rotate(45deg) translate(7px, 7px);
	}

	.hamburger span.open:nth-child(2) {
		opacity: 0;
	}

	.hamburger span.open:nth-child(3) {
		transform: rotate(-45deg) translate(7px, -7px);
	}

	@media (max-width: 968px) {
		.hamburger {
			display: flex;
		}

		.nav-links {
			position: fixed;
			top: 85px;
			left: 0;
			right: 0;
			background-color: white;
			flex-direction: column;
			gap: 0;
			padding: 1.5rem 0;
			box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
			transform: translateY(-120%);
			opacity: 0;
			visibility: hidden;
			transition:
				transform 0.3s ease,
				opacity 0.3s ease,
				visibility 0.3s ease;
		}

		.nav-links.mobile-open {
			transform: translateY(0);
			opacity: 1;
			visibility: visible;
		}

		.nav-links li {
			width: 100%;
			text-align: center;
			padding: 0.5rem 0;
		}

		.nav-links a {
			display: block;
			padding: 0.75rem 1rem;
			font-size: 1.05rem;
		}

		.nav-right {
			position: fixed;
			top: calc(85px + 120px);
			left: 0;
			right: 0;
			background-color: white;
			flex-direction: column;
			gap: 1.5rem;
			padding: 1.5rem 2rem;
			box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
			transform: translateY(-120%);
			opacity: 0;
			visibility: hidden;
			transition:
				transform 0.3s ease,
				opacity 0.3s ease,
				visibility 0.3s ease;
			align-items: center;
		}

		.nav-right.mobile-open {
			transform: translateY(0);
			opacity: 1;
			visibility: visible;
		}

		.social-icons {
			justify-content: center;
		}

		.brand-name {
			font-size: 1.2rem;
		}

		.logo {
			width: 45px;
			height: 45px;
		}

		.footer-content {
			grid-template-columns: 1fr;
			text-align: center;
		}

		.social-links {
			justify-content: center;
		}
	}

	@media (max-width: 360px) {
		.brand-name {
			font-size: 1rem;
		}

		.logo {
			width: 40px;
			height: 40px;
		}

		.nav-container {
			padding: 0 1rem;
		}

		.footer-bottom {
			padding-top: 1.5rem;
		}
	}
</style>
