<script lang="ts">
	import { onMount } from "svelte";

	type Language = "en" | "hu";
	type TimelinePhase = {
		key: string;
		title: Record<Language, string>;
		description: Record<Language, string>;
		isCurrent?: boolean;
	};

	const LANGUAGE_STORAGE_KEY = "heartfelt-scholarship2026-language";
	const NAVBAR_OFFSET = "7rem";

	const facebookUrl = "https://www.facebook.com/profile.php?id=100089924056817";
	const facebookPageUrl = "https://www.facebook.com/heartfelt.english";
	const instagramUrl = "https://www.instagram.com/heartfelt.english";
	const facebookEmbedUrl =
		"https://www.facebook.com/plugins/page.php?href=" +
		encodeURIComponent(facebookPageUrl) +
		"&tabs=timeline&width=500&height=640&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true";
	const instagramEmbedUrl = "https://www.instagram.com/heartfelt.english/embed/";

	const participant = {
		name: {
			en: "Student to be announced on: 31 May 2026",
			hu: "Lorem ipsum dolor sit amet.",
		},
		role: {
			en: "Scholarship participant (TBD)",
			hu: "Lorem ipsum dolor sit amet.",
		},
		location: {
			en: "Hungary",
			hu: "Lorem ipsum",
		},
		bio: {
			en: "The final scholarship student has not been selected yet. This profile section will be updated once the participant is confirmed, including photo, short bio, and programme goals.",
			hu: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		},
		image: "/assets/scholarshipHeart.png",
	};

	const programmeDates = {
		en: "Summer 2026 (exact dates to be confirmed)",
		hu: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	};

	const copy = {
		en: {
			title: "Scholarship Programme 2026",
			subtitle:
				"A focused page for this year's journey: student, timeline, programme details, and live updates.",
			studentSectionTitle: "Meet the student",
			languageLabel: "Language",
			programmeTitle: "Programme Overview",
			programmeBody:
				"Heartfelt English is a Hungarian-registered charity founded by Agota Szekely. Since 2021, our volunteers have provided free online English lessons for children in care homes, along with summer camps and scholarship opportunities in the UK.",
			programmeBody2:
				"This scholarship programme ran in previous years and continues in 2026 as part of our mission to create equal opportunities through education, mentorship, and meaningful international experiences.",
			dateLabel: "Programme dates",
			timelineTitle: "2026 Timeline",
			timelineSummaryTitle: "FOLLOW",
			timelineSummaryBody: "Track each stage of this journey here.",
			socialTitle: "Follow This Year's Daily Updates",
			socialBody:
				"Use the programme links and embedded feeds below. For now, they point to the main Heartfelt English Facebook and Instagram accounts.",
			facebookButton: "Facebook Programme Page",
			instagramButton: "Instagram Programme Page",
		},
		hu: {
			title: "Lorem ipsum dolor sit amet",
			subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			studentSectionTitle: "Lorem ipsum",
			languageLabel: "Lorem ipsum",
			programmeTitle: "Lorem ipsum",
			programmeBody:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			programmeBody2:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			dateLabel: "Lorem ipsum",
			timelineTitle: "Lorem ipsum",
			timelineSummaryTitle: "Lorem ipsum",
			timelineSummaryBody: "Lorem ipsum dolor sit amet.",
			socialTitle: "Lorem ipsum dolor sit amet",
			socialBody:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			facebookButton: "Lorem ipsum",
			instagramButton: "Lorem ipsum",
		},
	} satisfies Record<Language, Record<string, string>>;

	const timeline: TimelinePhase[] = [
		{
			key: "selection",
			title: {
				en: "Student selection in progress",
				hu: "Lorem ipsum dolor sit amet",
			},
			description: {
				en: "The final scholarship participant is being selected with the mentoring team.",
				hu: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			},
			isCurrent: true,
		},
		{
			key: "prep",
			title: {
				en: "Preparation period",
				hu: "Lorem ipsum dolor sit amet",
			},
			description: {
				en: "Orientation is offered by the Heartfelt Team and former scholarship winners (Iulia - 2024 and Viola - 2025). Travel logistics are prepared.",
				hu: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			},
		},
		{
			key: "uk",
			title: {
				en: "UK programme",
				hu: "Lorem ipsum dolor sit amet",
			},
			description: {
				en: "The selected student attends an intensive English language programme (25 hours/week) at Concorde International in Canterbury, UK.",
				hu: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			},
		},
		{
			key: "return",
			title: {
				en: "Return and outcomes",
				hu: "Lorem ipsum dolor sit amet",
			},
			description: {
				en: "We share reflections, photos, and learning outcomes from the journey.",
				hu: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			},
		},
	];

	let lang = $state<Language>("en");
	let storageReady = $state(false);

	onMount(() => {
		const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
		if (savedLanguage === "en" || savedLanguage === "hu") {
			lang = savedLanguage;
		}
		storageReady = true;
	});

	$effect(() => {
		if (!storageReady) return;
		localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
	});
</script>

<svelte:head>
	<title>Scholarship Programme 2026 | HeartfeltEnglish</title>
	<meta
		name="description"
		content="HeartfeltEnglish Scholarship Programme 2026 with bilingual support, student profile, timeline, and social feeds."
	/>
</svelte:head>

<div class="page">
	<section class="hero">
		<div class="hero-inner">
			<div class="hero-top reveal" style="--delay: 0ms">
				<h1 class="page-title">{copy[lang].title}</h1>
				<div class="top-quick-actions">
					<a href={facebookUrl} target="_blank" rel="noopener noreferrer" class="quick-link">
						<i class="pi pi-facebook"></i>
						<span>Facebook</span>
					</a>
					<a href={instagramUrl} target="_blank" rel="noopener noreferrer" class="quick-link alt">
						<i class="pi pi-instagram"></i>
						<span>Instagram</span>
					</a>
				</div>
			</div>

			<div class="language-switch reveal" style="--delay: 70ms" role="group" aria-label={copy[lang].languageLabel}>
				<button type="button" class:active={lang === "en"} onclick={() => (lang = "en")}>EN</button>
				<button type="button" class:active={lang === "hu"} onclick={() => (lang = "hu")}>HU</button>
			</div>

			<div class="student-focus reveal" style="--delay: 130ms">
				<img src={participant.image} alt={participant.name[lang]} class="student-image" />
				<div class="student-text">
					<p class="student-kicker normal">{copy[lang].studentSectionTitle}</p>
					<h2>{participant.name[lang]}</h2>
					<p class="student-role normal">{participant.role[lang]} · {participant.location[lang]}</p>
					<p class="normal">{participant.bio[lang]}</p>
				</div>
			</div>

			<!-- <div class="programme-intro reveal" style="--delay: 180ms">
				<p class="normal">{copy[lang].subtitle}</p>
			</div> -->
		</div>
	</section>

	<section class="details reveal" style="--delay: 220ms">
		<div class="details-grid">
			<article class="programme-text">
				<h3>{copy[lang].programmeTitle}</h3>
				<p class="normal">{copy[lang].programmeBody}</p>
				<p class="normal">{copy[lang].programmeBody2}</p>
			</article>
			<aside class="dates">
				<h3>{copy[lang].dateLabel}</h3>
				<p>{lang === "en" ? programmeDates.en : programmeDates.hu}</p>
			</aside>
		</div>
	</section>

	<section class="timeline-section reveal" style="--delay: 250ms">
		<div class="timeline-grid">
			<div class="timeline-list">
				<h3>{copy[lang].timelineTitle}</h3>
				{#each timeline as item}
					<div class="timeline-item" class:current={item.isCurrent}>
						<span class="dot" aria-hidden="true"></span>
						<div>
							<h4>{item.title[lang]}</h4>
							<p class="normal">{item.description[lang]}</p>
						</div>
					</div>
				{/each}
			</div>

			<div class="timeline-summary" style={`--sticky-top: ${NAVBAR_OFFSET}`}>
				<h4>{copy[lang].timelineSummaryTitle}</h4>
				<p class="normal">{copy[lang].timelineSummaryBody}</p>
				<img src="/assets/scholarshipHeart.png" alt="Heartfelt scholarship heart" class="summary-heart" />
			</div>
		</div>
	</section>

	<section class="social reveal" style="--delay: 280ms">
		<div class="social-head social-highlight">
			<h3>{copy[lang].socialTitle}</h3>
			<p class="normal">{copy[lang].socialBody}</p>
			<!-- <img src="/assets/scholarshipHeart.png" alt="Heartfelt scholarship heart" class="social-heart" /> -->
			<div class="social-buttons">
				<a href={facebookUrl} target="_blank" rel="noopener noreferrer" class="social-btn">
					<i class="pi pi-facebook"></i>
					<span>{copy[lang].facebookButton}</span>
				</a>
				<a href={instagramUrl} target="_blank" rel="noopener noreferrer" class="social-btn alt">
					<i class="pi pi-instagram"></i>
					<span>{copy[lang].instagramButton}</span>
				</a>
			</div>
		</div>

		<div class="feeds">
			<iframe
				title="HeartfeltEnglish Facebook feed"
				src={facebookEmbedUrl}
				class="feed"
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"></iframe>
			<iframe
				title="HeartfeltEnglish Instagram feed"
				src={instagramEmbedUrl}
				class="feed"
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"></iframe>
		</div>
	</section>
</div>

<style>
	.page {
		background:
			radial-gradient(circle at 12% 10%, rgba(245, 189, 13, 0.18), transparent 45%),
			radial-gradient(circle at 88% 22%, rgba(28, 160, 181, 0.14), transparent 42%),
			radial-gradient(circle at 72% 88%, rgba(66, 201, 221, 0.16), transparent 40%),
			#fff;
		color: var(--color-text);
	}

	.hero,
	.details,
	.timeline-section,
	.social {
		max-width: 1120px;
		margin: 0 auto;
		padding: 2.25rem 1.25rem;
	}

	.hero {
		padding-top: 2.75rem;
	}

	.hero-inner {
		display: grid;
		gap: 1.15rem;
	}

	.reveal {
		opacity: 0;
		animation: fadeInUp 420ms ease forwards;
		animation-delay: var(--delay, 0ms);
	}

	.hero-top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		padding-bottom: 0.25rem;
		border-bottom: 1px solid rgba(15, 23, 42, 0.12);
	}

	.page-title {
		margin: 0;
		font-size: clamp(1.7rem, 3.4vw, 2.5rem);
		letter-spacing: -0.02em;
		color: #111827;
	}

	.top-quick-actions {
		display: flex;
		gap: 0.55rem;
		flex-wrap: wrap;
	}

	.quick-link {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		text-decoration: none;
		font-weight: 600;
		font-size: 0.88rem;
		padding: 0.5rem 0.7rem;
		border-radius: 999px;
		background: rgba(38, 153, 220, 0.1);
		color: #1b4799;
	}

	.quick-link.alt {
		background: rgba(234, 179, 8, 0.2);
		color: #92400e;
	}

	.language-switch {
		display: inline-flex;
		padding: 0.25rem;
		background: rgba(255, 255, 255, 0.9);
		border: 1px solid rgba(15, 23, 42, 0.1);
		border-radius: 999px;
		width: fit-content;
	}

	.language-switch button {
		border: 0;
		background: transparent;
		padding: 0.5rem 0.9rem;
		border-radius: 999px;
		font: inherit;
		font-weight: 600;
		color: var(--color-text-light);
		cursor: pointer;
	}

	.language-switch button.active {
		background: var(--color-primary);
		color: #fff;
	}

	.student-focus {
		display: grid;
		grid-template-columns: 140px minmax(0, 1fr);
		gap: 1.1rem;
		align-items: start;
	}

	.student-image {
		width: 136px;
		height: 136px;
		border-radius: 1rem;
		object-fit: cover;
		border: 3px solid #fff;
		box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
	}

	.student-kicker {
		margin: 0;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		font-size: 0.78rem;
		font-weight: 700;
		color: var(--color-primary);
	}

	.student-text h2 {
		margin: 0;
		font-size: clamp(1.7rem, 3.8vw, 2.35rem);
		letter-spacing: -0.02em;
	}

	.student-role {
		margin: 0.35rem 0 0.5rem;
		color: var(--color-primary);
		font-weight: 600;
	}

	.student-text p:last-child {
		margin: 0;
		color: var(--color-text-light);
		line-height: 1.65;
	}

	.details-grid {
		display: grid;
		grid-template-columns: 1.35fr 0.9fr;
		gap: 1.2rem;
		padding-top: 0.4rem;
		border-top: 1px solid rgba(15, 23, 42, 0.12);
	}

	.programme-text h3,
	.dates h3,
	.timeline-list h3,
	.social-head h3 {
		margin: 0 0 0.75rem;
		font-size: 1.2rem;
	}

	.programme-text p,
	.dates p,
	.timeline-item p,
	.timeline-summary p,
	.social-head p {
		margin: 0;
		line-height: 1.65;
		color: var(--color-text-light);
	}

	.programme-text p + p,
	.dates p {
		margin-top: 0.7rem;
	}

	.timeline-grid {
		display: grid;
		grid-template-columns: 1.25fr 0.85fr;
		gap: 1.25rem;
		align-items: start;
	}

	.timeline-list {
		padding-top: 0.3rem;
	}

	.timeline-item {
		display: grid;
		grid-template-columns: 0.95rem minmax(0, 1fr);
		gap: 0.75rem;
		padding: 0.7rem 0;
		border-top: 1px solid rgba(15, 23, 42, 0.08);
	}

	.timeline-item.current h4 {
		color: var(--color-primary);
	}

	.timeline-item h4 {
		margin: 0 0 0.3rem;
		font-size: 1rem;
	}

	.dot {
		width: 0.72rem;
		height: 0.72rem;
		border-radius: 50%;
		margin-top: 0.35rem;
		background: var(--color-secondary);
	}

	.timeline-item.current .dot {
		background: var(--color-primary);
	}

	.timeline-summary {
		position: sticky;
		top: var(--sticky-top);
		padding: 0.95rem;
		border-left: 3px solid var(--color-primary);
		background: rgba(248, 250, 252, 0.8);
	}

	.timeline-summary h4 {
		margin: 0 0 0.45rem;
		font-size: 1.35rem;
		letter-spacing: 0.03em;
	}

	.summary-heart {
		width: 140px;
		height: auto;
		margin-top: 0.8rem;
		display: block;
	}

	.social {
		padding-bottom: 3.5rem;
	}

	.social-head {
		padding-top: 0.3rem;
		border-top: 1px solid rgba(15, 23, 42, 0.12);
	}

	.social-highlight {
		background: rgba(245, 189, 13, 0.2);
		border-radius: 14px;
		padding: 1rem;
	}

	.social-heart {
		width: 92px;
		height: auto;
		margin-top: 0.8rem;
	}

	.social-buttons {
		display: flex;
		gap: 0.75rem;
		flex-wrap: wrap;
		margin-top: 0.9rem;
	}

	.social-btn {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.8rem 1rem;
		border-radius: 8px;
		text-decoration: none;
		font-weight: 600;
		background: var(--color-primary);
		color: #fff;
	}

	.social-btn.alt {
		background: #111827;
	}

	.feeds {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 0.85rem;
		margin-top: 1rem;
	}

	.feed {
		width: 100%;
		min-height: 620px;
		border: 1px solid rgba(15, 23, 42, 0.12);
		border-radius: 10px;
		background: #fff;
	}

	@media (max-width: 980px) {
		.details-grid,
		.timeline-grid,
		.feeds {
			grid-template-columns: 1fr;
		}

		.timeline-summary {
			position: static;
		}
	}

	@media (max-width: 640px) {
		.hero,
		.details,
		.timeline-section,
		.social {
			padding: 1.5rem 1rem;
		}

		.hero-top {
			flex-direction: column;
			align-items: flex-start;
		}

		.page-title {
			font-size: clamp(1.45rem, 7vw, 2rem);
		}

		.student-focus {
			grid-template-columns: 1fr;
		}

		.student-image {
			width: 112px;
			height: 112px;
		}

		.feed {
			min-height: 500px;
		}
	}

	@keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translateY(10px);
		}

		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.reveal {
			animation: none;
			opacity: 1;
		}
	}
</style>
