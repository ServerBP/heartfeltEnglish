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
	const instagramUrl = "https://www.instagram.com/heartfelt.english";
	const facebookEmbedUrl =
		"https://www.facebook.com/plugins/page.php?href=" +
		encodeURIComponent(facebookUrl) +
		"&tabs=timeline&width=500&height=640&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true";
	const instagramEmbedUrl = "https://www.instagram.com/heartfelt.english/embed/";

	const participant = {
		name: {
			en: "Student to be announced",
			hu: "A diak neve hamarosan",
		},
		role: {
			en: "Scholarship participant (TBD)",
			hu: "Osztondij resztvevo (hamarosan)",
		},
		location: {
			en: "Hungary",
			hu: "Magyarorszag",
		},
		bio: {
			en: "The final scholarship student has not been selected yet. This profile section will be updated once the participant is confirmed, including photo, short bio, and programme goals.",
			hu: "A vegleges osztondijas diak kivalasztasa meg folyamatban van. Ez a profil szakasz frissulni fog a vegleges resztvevo fotojaval, rovid bemutatkozasaval es programceljaival.",
		},
		image: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=380&q=80",
	};

	const programmeDates = {
		start: "June 2026 (exact date to be confirmed)",
		end: "August 2026 (exact date to be confirmed)",
		startHu: "2026 junius (a pontos datum egyeztetes alatt)",
		endHu: "2026 augusztus (a pontos datum egyeztetes alatt)",
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
				"HeartfeltEnglish is a Hungarian-registered charity founded by Agota Szekely and Orsolya Szucs. Since 2021, our volunteers have provided free online English lessons for children in care homes, along with summer camps in Romania and scholarship opportunities in the UK.",
			programmeBody2:
				"This scholarship programme ran in previous years and continues in 2026 as part of our mission to create equal opportunities through education, mentorship, and meaningful international experiences.",
			dateLabel: "Programme dates",
			startLabel: "Start",
			endLabel: "End",
			timelineTitle: "2026 Timeline",
			timelineSummaryTitle: "Programme focus",
			timelineSummaryBody:
				"Selection, preparation, travel, and reflection. Each phase is tracked here so supporters can follow progress clearly.",
			socialTitle: "Follow This Year's Updates",
			socialBody:
				"Use the programme links and embedded feeds below. For now, they point to the main HeartfeltEnglish Facebook and Instagram accounts.",
			facebookButton: "Facebook Programme Page",
			instagramButton: "Instagram Programme Page",
		},
		hu: {
			title: "Osztondij Program 2026",
			subtitle:
				"Fokuszalt oldal az idei utrol: diak, idovonal, programreszletek es elo frissitesek.",
			studentSectionTitle: "Ismerd meg a diakot",
			languageLabel: "Nyelv",
			programmeTitle: "Program attekintes",
			programmeBody:
				"A HeartfeltEnglish egy magyar bejegyzesu jotekonysagi szervezet, amelyet Agota Szekely es Orsolya Szucs alapitott. 2021 ota onkenteseink ingyenes online angolorakat tartanak gyermekotthonokban elo gyerekeknek, valamint romaniai nyari taborokat es brit osztondijlehetosegeket szerveznek.",
			programmeBody2:
				"Az osztondijprogram korabbi evekben is megvalosult, es 2026-ban is folytatodik kuldetesunk reszekent: eselyteremtes oktatassal, mentoralassal es ertekes nemzetkozi tapasztalatokkal.",
			dateLabel: "Program idopontjai",
			startLabel: "Kezdes",
			endLabel: "Befejezes",
			timelineTitle: "2026-os idovonal",
			timelineSummaryTitle: "A program fokusza",
			timelineSummaryBody:
				"Kivalasztas, felkeszites, utazas es visszacsatolas. Minden szakaszt itt kovetunk, hogy a tamogatok atlathatoan lassak a haladast.",
			socialTitle: "Kovesd az idei frissiteseket",
			socialBody:
				"Hasznald az alabbi programlinkeket es beagyazott feedeket. Jelenleg a fo HeartfeltEnglish Facebook es Instagram fiokra mutatnak.",
			facebookButton: "Facebook Program Oldal",
			instagramButton: "Instagram Program Oldal",
		},
	} satisfies Record<Language, Record<string, string>>;

	const timeline: TimelinePhase[] = [
		{
			key: "selection",
			title: {
				en: "Student selection in progress",
				hu: "A diak kivalasztasa folyamatban",
			},
			description: {
				en: "The final scholarship participant is being selected with the mentoring team.",
				hu: "A vegleges osztondijas diak kivalasztasa jelenleg a mentor csapattal zajlik.",
			},
			isCurrent: true,
		},
		{
			key: "prep",
			title: {
				en: "Preparation period",
				hu: "Felkeszulesi idoszak",
			},
			description: {
				en: "English practice, orientation, and travel logistics are prepared.",
				hu: "Angol gyakorlas, felkeszites es utazasi szervezes tortenik.",
			},
		},
		{
			key: "uk",
			title: {
				en: "UK programme",
				hu: "Egyesult kiralysagbeli program",
			},
			description: {
				en: "The selected student attends the scholarship programme in the UK.",
				hu: "A kivalasztott diak reszt vesz az osztondijas programban az Egyesult Kiralysagban.",
			},
		},
		{
			key: "return",
			title: {
				en: "Return and outcomes",
				hu: "Hazateres es eredmenyek",
			},
			description: {
				en: "We share reflections, photos, and learning outcomes from the journey.",
				hu: "Megosztjuk az elmenyeket, fotokat es tanulasi eredmenyeket.",
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
				<p><strong>{copy[lang].startLabel}:</strong> {lang === "en" ? programmeDates.start : programmeDates.startHu}</p>
				<p><strong>{copy[lang].endLabel}:</strong> {lang === "en" ? programmeDates.end : programmeDates.endHu}</p>
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
			</div>
		</div>
	</section>

	<section class="social reveal" style="--delay: 280ms">
		<div class="social-head">
			<h3>{copy[lang].socialTitle}</h3>
			<p class="normal">{copy[lang].socialBody}</p>
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
			radial-gradient(circle at 0% 0%, rgba(220, 38, 38, 0.08), transparent 42%),
			radial-gradient(circle at 100% 100%, rgba(234, 179, 8, 0.08), transparent 38%),
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
		border-radius: 50%;
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

	.programme-intro p {
		margin: 0.3rem 0 0;
		color: var(--color-text-light);
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
	.dates p + p {
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
	}

	.social {
		padding-bottom: 3.5rem;
	}

	.social-head {
		padding-top: 0.3rem;
		border-top: 1px solid rgba(15, 23, 42, 0.12);
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
		timeline-grid,
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
		timeline-section,
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
