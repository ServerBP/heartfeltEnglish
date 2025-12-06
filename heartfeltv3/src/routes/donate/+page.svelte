<script>
</script>

<div class="donate-page">
	<div class="construction-container">
		<div class="construction-content">
			<div class="icon-wrapper">
				<i class="pi pi-wrench construction-icon"></i>
			</div>
			<h1 class="construction-title">We're Working on It!</h1>
			<p class="construction-message normal">
				Our donation page is currently under construction. We're setting
				up a secure and easy way for you to support our mission of
				empowering children through education.
			</p>
			<div class="coming-soon">
				<i class="pi pi-clock"></i>
				<span class="semi-bold">Coming Soon</span>
			</div>

			<div class="contact-section">
				<h2 class="contact-title">Want to Reach Out?</h2>
				<p class="contact-text normal">
					In the meantime, if you'd like to support us or have any
					questions, please feel free to contact us:
				</p>
				<a href="mailto:info@heartfeltenglish.org" class="email-button">
					<i class="pi pi-envelope"></i>
					info@heartfeltenglish.org
				</a>
			</div>

			<div class="alternative-support">
				<h3 class="alt-title semi-bold">Other Ways to Support</h3>
				<div class="support-options">
					<div class="support-option">
						<i class="pi pi-share-alt"></i>
						<span class="normal"
							>Share our mission on social media</span>
					</div>
					<div class="support-option">
						<i class="pi pi-users"></i>
						<span class="normal">Become a volunteer teacher</span>
					</div>
					<div class="support-option">
						<i class="pi pi-heart"></i>
						<span class="normal"
							>Support us through your taxes: 1%</span>
					</div>
				</div>
			</div>

			<a href="/" class="back-home-btn">
				<i class="pi pi-home"></i>
				Back to Home
			</a>
		</div>
	</div>
</div>

<style>
	.donate-page {
		min-height: calc(100vh - 200px);
		background: linear-gradient(
			135deg,
			rgba(234, 179, 8, 0.05) 0%,
			rgba(202, 138, 4, 0.05) 50%,
			rgba(234, 179, 8, 0.05) 100%
		);
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 3rem 2rem;
	}

	.construction-container {
		max-width: 700px;
		width: 100%;
	}

	.construction-content {
		background: white;
		border-radius: 12px;
		padding: 3.5rem 2.5rem;
		box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
		text-align: center;
	}

	.icon-wrapper {
		margin-bottom: 1.5rem;
	}

	.construction-icon {
		font-size: 5rem;
		color: var(--color-secondary);
		animation: rotate 3s linear infinite;
	}

	@keyframes rotate {
		0% {
			transform: rotate(0deg);
		}
		25% {
			transform: rotate(15deg);
		}
		50% {
			transform: rotate(0deg);
		}
		75% {
			transform: rotate(-15deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}

	.construction-title {
		font-size: 2.5rem;
		color: var(--color-text);
		margin-bottom: 1rem;
	}

	.construction-message {
		font-size: 1.15rem;
		line-height: 1.7;
		color: var(--color-text-light);
		margin-bottom: 2rem;
	}

	.coming-soon {
		display: inline-flex;
		align-items: center;
		gap: 0.75rem;
		background: linear-gradient(
			135deg,
			var(--color-secondary),
			var(--color-accent)
		);
		color: white;
		padding: 0.75rem 2rem;
		border-radius: 50px;
		font-size: 1rem;
		margin-bottom: 3rem;
	}

	.coming-soon i {
		font-size: 1.2rem;
	}

	.contact-section {
		background: var(--color-background-light);
		padding: 2.5rem;
		border-radius: 10px;
		margin-bottom: 2.5rem;
	}

	.contact-title {
		font-size: 1.8rem;
		color: var(--color-text);
		margin-bottom: 1rem;
	}

	.contact-text {
		font-size: 1rem;
		line-height: 1.6;
		color: var(--color-text-light);
		margin-bottom: 1.5rem;
	}

	.email-button {
		display: inline-flex;
		align-items: center;
		gap: 0.75rem;
		background-color: var(--color-primary);
		color: white;
		padding: 1rem 2rem;
		border-radius: 8px;
		text-decoration: none;
		font-weight: 600;
		font-size: 1.05rem;
		transition:
			background-color 0.3s ease,
			transform 0.2s ease;
	}

	.email-button:hover {
		background-color: #b91c1c;
		transform: translateY(-2px);
	}

	.alternative-support {
		margin-bottom: 2.5rem;
	}

	.alt-title {
		font-size: 1.4rem;
		color: var(--color-text);
		margin-bottom: 1.5rem;
	}

	.support-options {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.support-option {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1rem;
		background: var(--color-background-light);
		border-radius: 8px;
		text-align: left;
	}

	.support-option i {
		font-size: 1.5rem;
		color: var(--color-secondary);
	}

	.support-option span {
		font-size: 1rem;
		color: var(--color-text-light);
	}

	.back-home-btn {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.9rem 2rem;
		background-color: var(--color-text-light);
		color: white;
		text-decoration: none;
		border-radius: 6px;
		font-weight: 600;
		transition:
			background-color 0.3s ease,
			transform 0.2s ease;
	}

	.back-home-btn:hover {
		background-color: var(--color-text);
		transform: translateY(-2px);
	}

	@media (max-width: 768px) {
		.construction-content {
			padding: 2.5rem 1.5rem;
		}

		.construction-icon {
			font-size: 4rem;
		}

		.construction-title {
			font-size: 2rem;
		}

		.construction-message {
			font-size: 1rem;
		}

		.contact-section {
			padding: 2rem 1.5rem;
		}

		.contact-title {
			font-size: 1.5rem;
		}
	}
</style>
