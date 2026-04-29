<script lang="ts">
    import { onMount } from "svelte";

    type Language = "en" | "hu";
    type TimelinePhase = {
        key: string;
        title: Record<Language, string>;
        description: Record<Language, string>;
        isCurrent?: boolean;
        isEvent?: boolean;
        banner?: string;
        bannerAlt?: Record<Language, string>;
        bannerCaption?: Record<Language, string>;
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
            hu: "Az ösztöndíjat elnyert diák bejelentésének időpontja: 2026. május 31.",
        },
        role: {
            en: "Scholarship participant (TBD)",
            hu: "Ösztöndíjban részt vevő (később kerül kiválasztásra)",
        },
        location: {
            en: "Hungary",
            hu: "Magyarország",
        },
        bio: {
            en: "The final scholarship student has not been selected yet. This profile section will be updated once the participant is confirmed, including photo, short bio, and programme goals.",
            hu: "A végleges ösztöndíjas kiválasztása még folyamatban van. Ez a profilrész frissítésre kerül, miután a résztvevő kiválasztása megerősítést nyer. Felkerül egy fénykép, rövid bemutatkozás és a programhoz kapcsolódó célok.",
        },
        image: "/assets/scholarshipHeart.png",
    };

    const programmeDates = {
        en: "Summer 2026 (exact dates to be confirmed)",
        hu: "2026 nyara (a pontos időintervallum később kerül meghatározásra)",
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
                "Heartfelt English is a Hungarian-registered charity founded by Ágota Székely and Orsolya Szűcs. Since 2021, our volunteers have provided free online English lessons for children in care homes, along with summer camps and scholarship opportunities in the UK.",
            programmeBody2:
                "This scholarship programme ran in previous years and continues in 2026 as part of our mission to create equal opportunities through education, mentorship, and meaningful international experiences.",
            dateLabel: "Programme dates",
            timelineTitle: "2026 Timeline",
            fundraisingLabel: "Fundraising events",
            timelineSummaryTitle: "FOLLOW",
            timelineSummaryBody: "Track each stage of this journey here.",
            socialTitle: "Follow This Year's {Daily} Updates",
            socialBody:
                "Use the programme links and embedded feeds below. For now, they point to the main Heartfelt English Facebook and Instagram accounts.",
            facebookButton: "Facebook Programme Page",
            instagramButton: "Instagram Programme Page",
        },
        hu: {
            title: "Ösztöndíjprogram 2026",
            subtitle: "Kövesd a szív útját – diák, ütemterv, programrészletek és élő frissítések.",
            studentSectionTitle: "Ismerd meg az ösztöndíjas diákot",
            languageLabel: "Nyelv",
            programmeTitle: "A program áttekintése",
            programmeBody:
                "A Heartfelt English egy Magyarországon bejegyzett jótékonysági szervezet, amelyet Ágota Székely és Orsolya Szűcs alapított. 2021 óta önkénteseink ingyenes online angol nyelvórákat biztosítanak gyermekotthonokban élő gyermekek számára, emellett nyári táborokat és egyesült királyságbeli ösztöndíj-lehetőségeket biztosítanak.",
            programmeBody2:
                "Az ösztöndíjprogram már megvalósult korábban és 2026-ban is folytatódik. Küldetésünk: oktatás, mentorálás és egyenlő esélyek megteremtése – tartalmas nemzetközi tapasztalatok révén.",
            dateLabel: "A program időpontja",
            timelineTitle: "2026-os ütemterv",
            fundraisingLabel: "Adománygyűjtő események",
            timelineSummaryTitle: "KÖVESD",
            timelineSummaryBody: "A folyamat minden lépését itt követheted nyomon.",
            socialTitle: "Kövesd az aktuális {Napi} frissítéseket",
            socialBody:
                "Használd az alábbi programlinkeket és beágyazott felületeket. Jelenleg ezek a Heartfelt English hivatalos Facebook- és Instagram-oldalára mutatnak.",
            facebookButton: "Facebook programoldal",
            instagramButton: "Instagram programoldal",
        },
    } satisfies Record<Language, Record<string, string>>;

    const fundraisingEvents: TimelinePhase[] = [
        {
            key: "musictrain",
            title: {
                en: "Music Train 2026",
                hu: "Zene Vonat 2026",
            },
            description: {
                en: "A fundraising event held in April 2026 in support of the scholarship programme.",
                hu: "Egy 2026 áprilisában megrendezett adománygyűjtő esemény az ösztöndíjprogram támogatására.",
            },
            isEvent: true,
        },
        {
            key: "mfth",
            title: {
                en: "Miles for the Heart's Journey",
                hu: "Miles for the Heart's Journey",
            },
            description: {
                en: "A fundraising event in June 2026 in support of this year's scholarship student.",
                hu: "Egy 2026 júniusában megrendezett adománygyűjtő esemény az idei ösztöndíjas diák támogatására.",
            },
            isEvent: true,
            banner: "/assets/mfth.jpeg",
            bannerAlt: {
                en: "Miles for the Heart's Journey event banner",
                hu: "Miles for the Heart's Journey rendezvény banner",
            },
        },
    ];

    const timeline: TimelinePhase[] = [
        {
            key: "selection",
            title: {
                en: "Student selection in progress",
                hu: "A diák kiválasztásának folyamata",
            },
            description: {
                en: "The final scholarship participant is being selected with the mentoring team.",
                hu: "A végleges ösztöndíjas kiválasztása a mentori csapattal együttműködésben történik és már folyamatban van.",
            },
            isCurrent: true,
        },
        {
            key: "prep",
            title: {
                en: "Preparation period",
                hu: "Felkészülési időszak",
            },
            description: {
                en: "Orientation is offered by the Heartfelt Team and former scholarship winners (Iulia - 2024 and Viola - 2025). Travel logistics are prepared.",
                hu: "A Heartfelt csapata tájékoztató és felkészítő alkalmakat biztosít, valamint korábbi ösztöndíjasok (Iulia – 2024 és Viola – 2025) beszámolóit. Az utazással kapcsolatos szervezési feladatok is ekkor történnek.",
            },
        },
        {
            key: "uk",
            title: {
                en: "UK programme",
                hu: "Program az Egyesült Királyságban",
            },
            description: {
                en: "The selected student attends an intensive English language programme (25 hours/week) at Concorde International in Canterbury, UK.",
                hu: "A kiválasztott hallgató egy intenzív angol nyelvi képzésen vesz részt (heti 25 órában) a Concorde International intézményében, Canterburyben, az Egyesült Királyságban.",
            },
        },
        {
            key: "return",
            title: {
                en: "Return and outcomes",
                hu: "Hazatérés és eredmények",
            },
            description: {
                en: "We share reflections, photos, and learning outcomes from the journey.",
                hu: "A program lezárását követően megosztjuk az út során szerzett élményeket, fényképeket és a tanulási eredményeket.",
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

    function renderSocialTitle(rawTitle: string): { before: string; highlight: string; after: string } {
        const match = rawTitle.match(/^(.*?)\{(.+?)\}(.*)$/);
        if (!match) return { before: rawTitle, highlight: "", after: "" };
        return { before: match[1], highlight: match[2], after: match[3] };
    }
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
            <div class="timeline-left">
                <!-- Fundraising Events -->
                <div class="fundraising-block">
                    <h3>{copy[lang].timelineTitle}</h3>
                    <p class="fundraising-label normal">{copy[lang].fundraisingLabel}</p>
                    {#each fundraisingEvents as item}
                        <div class="timeline-item event-item">
                            <span class="dot event-dot" aria-hidden="true"></span>
                            <div>
                                <h4>{item.title[lang]}</h4>
                                <p class="normal">{item.description[lang]}</p>
                            </div>
                        </div>
                    {/each}
                </div>

                <!-- Main Timeline -->
                <div class="main-timeline-block">
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
            </div>

            <div class="timeline-right" style={`--sticky-top: ${NAVBAR_OFFSET}`}>
                <!-- MFTH Banner -->
                <div class="mfth-banner-card">
                    <img
                        src="/assets/mfth.jpeg"
                        alt={fundraisingEvents[1].bannerAlt?.[lang] ?? "Miles for the Heart's Journey"}
                        class="mfth-banner-img"
                    />
                    <div class="mfth-banner-caption">
                        <p class="mfth-event-label normal">{copy[lang].fundraisingLabel}</p>
                        <p class="mfth-event-name">{fundraisingEvents[1].title[lang]}</p>
                        <p class="normal mfth-event-desc">{fundraisingEvents[1].description[lang]}</p>
                    </div>
                </div>

                <!-- Follow card -->
                <div class="timeline-summary">
                    <h4>{copy[lang].timelineSummaryTitle}</h4>
                    <p class="normal">{copy[lang].timelineSummaryBody}</p>
                    <img src="/assets/scholarshipHeart.png" alt="Heartfelt scholarship heart" class="summary-heart" />
                </div>
            </div>
        </div>
    </section>

    <section class="social reveal" style="--delay: 280ms">
        <div class="social-head social-highlight">
            <h3>
                {#if renderSocialTitle(copy[lang].socialTitle).highlight}
                    {renderSocialTitle(copy[lang].socialTitle).before}<span class="daily-red">{renderSocialTitle(copy[lang].socialTitle).highlight}</span>{renderSocialTitle(copy[lang].socialTitle).after}
                {:else}
                    {copy[lang].socialTitle}
                {/if}
            </h3>
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
        object-fit: contain;
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

    /* ── Timeline layout ── */

    .timeline-grid {
        display: grid;
        grid-template-columns: 1fr 1.1fr;
        gap: 1.5rem;
        align-items: start;
        padding-top: 0.3rem;
        border-top: 1px solid rgba(15, 23, 42, 0.12);
    }

    .timeline-left {
        display: flex;
        flex-direction: column;
        gap: 0;
    }

    .fundraising-block {
        margin-bottom: 0.5rem;
    }

    .fundraising-block h3 {
        margin: 0 0 0.4rem;
        font-size: 1.2rem;
    }

    .fundraising-label {
        font-size: 0.78rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: var(--color-secondary);
        margin: 0 0 0.4rem;
    }

    .main-timeline-block {
        padding-top: 0.5rem;
        border-top: 1px dashed rgba(15, 23, 42, 0.14);
        margin-top: 0.25rem;
    }

    .timeline-item {
        display: grid;
        grid-template-columns: 0.95rem minmax(0, 1fr);
        gap: 0.75rem;
        padding: 0.7rem 0;
        border-top: 1px solid rgba(15, 23, 42, 0.08);
    }

    .timeline-item:first-child {
        border-top: none;
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
        flex-shrink: 0;
    }

    .timeline-item.current .dot {
        background: var(--color-primary);
    }

    .event-dot {
        background: rgb(42, 68, 195);
        box-shadow: 0 0 0 3px rgba(27, 57, 208, 0.26);
    }

    /* ── Right column ── */

    .timeline-right {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        position: sticky;
        top: var(--sticky-top);
    }

    /* MFTH banner card */
    .mfth-banner-card {
        border-radius: 12px;
        overflow: hidden;
        border: 1px solid rgba(15, 23, 42, 0.1);
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.07);
        background: #fff;
    }

    .mfth-banner-img {
        width: 100%;
        /* 1536×1024 = 3:2 aspect ratio */
        aspect-ratio: 3 / 2;
        object-fit: cover;
        display: block;
    }

    .mfth-banner-caption {
        padding: 0.75rem 0.9rem 0.9rem;
    }

    .mfth-event-label {
        font-size: 0.72rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: var(--color-secondary);
        margin: 0 0 0.2rem;
    }

    .mfth-event-name {
        font-size: 1rem;
        font-weight: 700;
        margin: 0 0 0.3rem;
        color: #111827;
    }

    .mfth-event-desc {
        font-size: 0.88rem;
        color: var(--color-text-light);
        line-height: 1.55;
        margin: 0;
    }

    /* Follow card */
    .timeline-summary {
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
        width: 120px;
        height: auto;
        margin-top: 0.8rem;
        display: block;
    }

    /* ── Social ── */

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

    .daily-red {
        color: var(--color-primary);
        font-weight: 700;
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

    /* ── Responsive ── */

    @media (max-width: 980px) {
        .details-grid,
        .feeds {
            grid-template-columns: 1fr;
        }

        .timeline-grid {
            grid-template-columns: 1fr;
        }

        .timeline-right {
            position: static;
            /* Show banner before the follow card but after timeline on mobile */
        }

        .mfth-banner-img {
            aspect-ratio: 3 / 2;
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