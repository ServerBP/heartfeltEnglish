<script lang="ts">
	type Language = "en" | "hu";
	type SubscribeState = "idle" | "submitting" | "success" | "error";

	const FORM_ID = "9076088";
	// https://app.kit.com/forms/9076088/subscriptions

	let lang: Language = $state("en");
	let email: string = $state("");
	let subscribeState: SubscribeState = $state("idle");
	let message: string | null = $state(null);

	const copy = {
		en: {
			title: "We’re almost ready!",
			body: "Thanks for stopping by! ❤️ Our website is getting its final touches. Leave your email below — we’d love to let you know the moment we go live!",
			formTitle:
				"Want to be notified when the site goes live? Enter your email address below",
			emailLabel: "Email address",
			emailPlaceholder: "you@example.com",
			buttonIdle: "Notify me",
			buttonSubmitting: "Sending…",
			success: "Thank you! You’re on the list — we’ll email you when we go live.",
			error:
				"Sorry — something went wrong. Please try again in a moment, or refresh the page.",
			invalidEmail: "Please enter a valid email address.",
		},
		hu: {
			title: "Hamarosan indulunk!",
			body: "❤️ Köszönjük, hogy ellátogattál a weboldalunkra! Már csak az utolsó simítások vannak hátra. Add meg az e-mail címed, és örömmel értesítünk, amint elindulunk!",
			formTitle:
				"Szeretnél értesítést kapni, amikor elindul az oldal? Add meg az e-mail címed lent",
			emailLabel: "E-mail cím",
			emailPlaceholder: "te@pelda.hu",
			buttonIdle: "Kérem az értesítést",
			buttonSubmitting: "Küldés…",
			success: "Köszönjük! Felírtunk — emailben szólunk, amint elindulunk.",
			error:
				"Sajnáljuk — hiba történt. Kérjük, próbáld meg újra egy perc múlva, vagy frissítsd az oldalt.",
			invalidEmail: "Kérjük, adj meg egy érvényes e-mail címet.",
		},
	} satisfies Record<Language, Record<string, string>>;

	function isValidEmail(value: string) {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
	}

	function setLang(next: Language) {
		lang = next;
		message = null;
		subscribeState = "idle";
	}

	function onSubmit(e: SubmitEvent) {
		e.preventDefault();
		void subscribe();
	}

	async function subscribe() {
		message = null;

		const trimmed = email.trim();
		if (!isValidEmail(trimmed)) {
			subscribeState = "error";
			message = copy[lang].invalidEmail;
			return;
		}

		subscribeState = "submitting";

		try {
			const res = await fetch(
				`https://app.kit.com/forms/${FORM_ID}/subscriptions`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/x-www-form-urlencoded",
					},
					body: new URLSearchParams({
						email_address: trimmed,
					}),
				},
			);

			if (!res.ok) {
				subscribeState = "error";
				message = copy[lang].error;
				return;
			}

			subscribeState = "success";
			message = copy[lang].success;
			email = "";
		} catch {
			subscribeState = "error";
			message = copy[lang].error;
		}
	}
</script>

<div class="hero">
	<div class="hero-overlay"></div>

	<div class="hero-content">
		<div class="lang-toggle" role="group" aria-label="Language selector">
			<button
				type="button"
				class="flag-btn"
				class:active={lang === "en"}
				aria-pressed={lang === "en"}
				onclick={() => setLang("en")}>
				<img
					class="flag"
					src="https://flagcdn.com/gb.svg"
					alt="GB flag"
					width="22"
					height="16"
					loading="lazy" />
				<span class="flag-label">English</span>
			</button>

			<button
				type="button"
				class="flag-btn"
				class:active={lang === "hu"}
				aria-pressed={lang === "hu"}
				onclick={() => setLang("hu")}>
				<img
					class="flag"
					src="https://flagcdn.com/hu.svg"
					alt="HU flag"
					width="22"
					height="16"
					loading="lazy" />
				<span class="flag-label">Magyar</span>
			</button>
		</div>

		<img src="/logos/whiteLogo.png" alt="HeartfeltEnglish Logo" class="hero-logo" />

		<h1 class="hero-title">
			{copy[lang].title}
		</h1>
		<p class="hero-subtitle normal">{copy[lang].body}</p>

		<div class="card" aria-live="polite">
			<h2 class="card-title">
				<i class="pi pi-envelope"></i>
				<span>{copy[lang].formTitle}</span>
			</h2>

			<form class="form" onsubmit={onSubmit}>
				<label class="label normal" for="email">{copy[lang].emailLabel}</label>
				<div class="input-row">
					<input
						id="email"
						class="input"
						type="email"
						inputmode="email"
						autocomplete="email"
						placeholder={copy[lang].emailPlaceholder}
						bind:value={email}
						disabled={subscribeState === "submitting"} />
					<button
						class="btn"
						type="submit"
						disabled={subscribeState === "submitting" || email.trim().length === 0}>
						{subscribeState === "submitting"
							? copy[lang].buttonSubmitting
							: copy[lang].buttonIdle}
					</button>
				</div>

				{#if message}
					<p
						class="message normal"
						class:success={subscribeState === "success"}
						class:error={subscribeState === "error"}>
						{message}
					</p>
				{/if}
			</form>
		</div>
	</div>
</div>

<style>
	.hero {
		position: relative;
		min-height: 100vh;
		background-image: url("/backgroundAssets/19.jpg");
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 5rem 0;
	}

	.hero-overlay {
		position: absolute;
		inset: 0;
		background: rgba(255, 255, 255, 0.72);
	}

	.hero-content {
		position: relative;
		z-index: 10;
		max-width: 980px;
		padding: 0 2rem;
	}

	.lang-toggle {
		display: inline-flex;
		gap: 0.5rem;
		align-items: center;
		justify-content: center;
		background: rgba(255, 255, 255, 0.9);
		border: 1px solid rgba(0, 0, 0, 0.08);
		border-radius: 10px;
		padding: 0.35rem;
		margin: 0 auto 1.6rem auto;
	}

	.flag-btn {
		display: inline-flex;
		gap: 0.55rem;
		align-items: center;
		justify-content: center;
		padding: 0.5rem 0.75rem;
		border-radius: 8px;
		border: 1px solid transparent;
		background: transparent;
		cursor: pointer;
		transition:
			background-color 0.2s ease,
			border-color 0.2s ease;
		color: var(--color-text);
		font-weight: 700;
	}

	.flag-btn:hover {
		background: rgba(220, 38, 38, 0.06);
	}

	.flag-btn.active {
		background: rgba(220, 38, 38, 0.08);
		border-color: rgba(220, 38, 38, 0.28);
	}

	.flag {
		display: block;
		border-radius: 3px;
		border: 1px solid rgba(0, 0, 0, 0.1);
	}

	.flag-label {
		font-size: 0.95rem;
	}

	.hero-logo {
		width: 210px;
		height: 210px;
		border-radius: 50%;
		margin: 0 auto 1.75rem auto;
		border: 4px solid #ffffff;
		object-fit: cover;
		display: block;
	}

	.hero-title {
		font-size: 3rem;
		margin: 0 0 1.2rem 0;
		color: var(--color-text);
		font-weight: 700;
		line-height: 1.1;
		letter-spacing: -0.02em;
	}

	.hero-subtitle {
		font-size: 1.25rem;
		margin: 0 auto 2.2rem auto;
		color: var(--color-text);
		line-height: 1.65;
		max-width: 820px;
	}

	.card {
		max-width: 840px;
		margin: 0 auto;
		background: #ffffff;
		border: 1px solid rgba(0, 0, 0, 0.08);
		border-radius: 12px;
		padding: 1.6rem 1.6rem 1.4rem 1.6rem;
		text-align: left;
	}

	.card-title {
		margin: 0 0 1rem 0;
		font-size: 1.1rem;
		font-weight: 700;
		color: var(--color-text);
		display: flex;
		gap: 0.65rem;
		align-items: center;
	}

	.card-title :global(.pi) {
		color: #dc2626;
		font-size: 1.25rem;
	}

	.label {
		display: inline-block;
		margin-bottom: 0.5rem;
		color: var(--color-text);
		font-weight: 700;
	}

	.input-row {
		display: grid;
		grid-template-columns: 1fr auto;
		gap: 0.8rem;
		align-items: center;
	}

	.input {
		width: 100%;
		padding: 0.95rem 1rem;
		border-radius: 8px;
		border: 1px solid rgba(0, 0, 0, 0.12);
		font-size: 1rem;
		outline: none;
		transition:
			border-color 0.2s ease,
			box-shadow 0.2s ease;
		background: #ffffff;
		color: var(--color-text);
	}

	.input:focus {
		border-color: rgba(220, 38, 38, 0.7);
		box-shadow: 0 0 0 4px rgba(220, 38, 38, 0.12);
	}

	.btn {
		background-color: #eab308;
		color: #ffffff;
		border: none;
		border-radius: 8px;
		padding: 0.95rem 1.4rem;
		font-weight: 800;
		font-size: 1rem;
		cursor: pointer;
		transition:
			background-color 0.2s ease,
			transform 0.2s ease;
		white-space: nowrap;
	}

	.btn:hover:enabled {
		background-color: #ca8a04;
		transform: translateY(-2px);
	}

	.btn:disabled {
		opacity: 0.7;
		cursor: not-allowed;
		transform: none;
	}

	.message {
		margin: 0.9rem 0 0 0;
		padding: 0.85rem 1rem;
		border-radius: 10px;
		line-height: 1.5;
	}

	.message.success {
		background: rgba(234, 179, 8, 0.18);
		border: 1px solid rgba(234, 179, 8, 0.35);
		color: #92400e;
	}

	.message.error {
		background: rgba(220, 38, 38, 0.08);
		border: 1px solid rgba(220, 38, 38, 0.22);
		color: #7f1d1d;
	}

	@media (max-width: 768px) {
		.hero {
			padding: 4rem 0;
		}

		.hero-logo {
			width: 120px;
			height: 120px;
		}

		.hero-title {
			font-size: 2.2rem;
		}

		.hero-subtitle {
			font-size: 1.08rem;
		}

		.card {
			padding: 1.25rem;
		}

		.input-row {
			grid-template-columns: 1fr;
		}

		.btn {
			width: 100%;
		}
	}

	@media (max-width: 480px) {
		.flag-label {
			font-size: 0.9rem;
		}
	}
</style>
