<script lang="ts">
    import { onMount } from 'svelte';
    import Navbar from '$lib/components/Navbar.svelte';
    import BackgroundSlideshow from '$lib/components/BackgroundSlideshow.svelte';
    import FacebookFeed from '$lib/components/FacebookFeed.svelte';
    import TestimonialSlider from '$lib/components/TestimonialSlider.svelte';

    // Timeline data
    const timelineEvents = [
        {
            year: 2018,
            title: 'Heartfelt English Founding',
            description: 'Emma Thompson and Márton Nagy establish Heartfelt English with a mission to provide free English education.',
            image: '/timeline/founding.jpg'
        },
        {
            year: 2019,
            title: 'First Scholarship Program',
            description: 'Launched our inaugural scholarship program, supporting 10 students from underserved communities.',
            image: '/timeline/first-scholarship.jpg'
        },
        {
            year: 2020,
            title: 'Online Learning Platform',
            description: 'Developed a comprehensive online learning platform to reach students during the global pandemic.',
            image: '/timeline/online-platform.jpg'
        },
        {
            year: 2021,
            title: 'International Expansion',
            description: 'Expanded our reach to multiple countries, supporting students across different regions.',
            image: '/timeline/international.jpg'
        },
        {
            year: 2022,
            title: 'Community Growth',
            description: 'Grew our volunteer base to over 50 dedicated teachers and mentors.',
            image: '/timeline/community.jpg'
        }
    ];

    // Founders and volunteers data
    const founders = [
        {
            name: 'Emma Thompson',
            role: 'Founder & CEO',
            image: '/founders/emma.jpg',
            quote: 'Every student deserves a chance to learn English and unlock their potential.'
        },
        {
            name: 'Márton Nagy',
            role: 'Co-Founder',
            image: '/founders/marton.jpg',
            quote: 'Education is the most powerful weapon we can use to change the world.'
        }
    ];

    // Student testimonials
    const studentTestimonials = [
        {
            name: 'Anna Kovács',
            quote: 'Heartfelt English gave me the confidence to pursue my dreams internationally.',
            image: '/students/anna.jpg'
        },
        {
            name: 'Péter Nagy',
            quote: 'The scholarship changed my life completely.',
            image: '/students/peter.jpg'
        }
    ];

    // Active timeline event state
    let activeEvent: any = null;
</script>

<Navbar />
<BackgroundSlideshow />

<div class="page-container">
    <div class="initial-content">
        <img 
            src="/logos/whiteLogo.png"
            alt="Heartfelt Logo"
            class="logo"
        />
        <div class="content-box mission-section">
            <h2 class="section-title">Our Mission</h2>
            <p class="mission-text">
                We empower every child to unlock their potential through English learning, mentorship, and connection. Committed to equal opportunities, we help children discover their talents, embrace their strengths, and break the cycle of poverty—fostering brighter futures for themselves and their communities.
            </p>
        </div>

        <div class="support-section">
            <button class="support-button">
                Support Our Mission
            </button>
        </div>
    </div>

    <div class="scrollable-content">
        <div class="content-box updates-section">
            <h2 class="section-title">Latest Updates</h2>
            <FacebookFeed />
        </div>

        <div class="content-box testimonials-section">
            <h2 class="section-title">Student Voices</h2>
            <TestimonialSlider testimonials={studentTestimonials} />
        </div>

        <div class="timeline-section">
            <h2 class="section-title">Our Journey</h2>
            <div class="timeline">
                {#each timelineEvents as event}
                    <div 
                        class="timeline-item" 
                        on:mouseenter={() => activeEvent = event}
                        on:mouseleave={() => activeEvent = null}
                    >
                        <div class="timeline-marker"></div>
                        <div class="timeline-year">{event.year}</div>
                    </div>
                {/each}
            </div>

            {#if activeEvent}
                <div class="timeline-popup" 
                     style="top: {Math.random() * 50}%; left: {Math.random() * 50}%;"
                >
                    <div class="timeline-popup-content">
                        <img src={activeEvent.image} alt={activeEvent.title} class="timeline-image"/>
                        <div class="timeline-details">
                            <h3>{activeEvent.title}</h3>
                            <p>{activeEvent.description}</p>
                        </div>
                    </div>
                </div>
            {/if}
        </div>
    </div>
</div>

<style lang="css">
    /* Global Styles */
    :root {
        --bg-transparent: rgba(255, 255, 255, 0.486);
        --primary-color: #4CAF50;
        --text-dark: #000000b6;
        --text-light: #000000;
    }

    .page-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem;
        position: relative;
        overflow: hidden;
    }

    .logo {
        width: 20rem;
    }

    /* Content Box Styling */
    .content-box {
        background: var(--bg-transparent);
        backdrop-filter: blur(10px);
        border-radius: 15px;
        padding: 2rem;
        margin-bottom: 2rem;
        box-shadow: 
            0 10px 25px rgba(0,0,0,0.1),
            0 0 20px rgba(75, 175, 80, 0.1);
        transition: all 0.3s ease;
    }

    .content-box:hover {
        box-shadow: 
            0 15px 30px rgba(0,0,0,0.15),
            0 0 30px rgba(75, 175, 80, 0.2);
    }

    /* Initial Content */
    .initial-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        text-align: center;
        margin-bottom: 4rem;
        gap: 2rem;
    }

    .mission-section {
        max-width: 800px;
    }

    .section-title {
        color: var(--text-dark);
        margin-bottom: 1.5rem;
        font-size: 2.5rem;
        text-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .mission-text {
        line-height: 1.8;
        color: var(--text-light);
        font-size: 1.2rem;
    }

    /* Support Button */
    .support-section {
        z-index: 10;
    }

    .support-button {
        background-color: var(--primary-color);
        color: white;
        border: none;
        padding: 15px 45px;
        font-size: 1.2rem;
        border-radius: 50px;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 
            0 4px 6px rgba(0,0,0,0.1),
            0 0 15px rgba(75, 175, 80, 0.3);
    }

    .support-button:hover {
        background-color: #45a049;
        transform: translateY(-3px);
        box-shadow: 
            0 6px 8px rgba(0,0,0,0.15),
            0 0 25px rgba(75, 175, 80, 0.4);
    }

    /* Scrollable Content */
    .scrollable-content {
        display: flex;
        flex-direction: column;
        gap: 4rem;
    }

    /* Timeline Styles */
    .timeline {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        height: 100px;
        margin-top: 2rem;
    }

    .timeline::before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: 50%;
        height: 2px;
        background-color: #ddd;
        transform: translateY(-50%);
        z-index: 1;
    }

    .timeline-item {
        position: relative;
        z-index: 2;
        cursor: pointer;
    }

    .timeline-marker {
        width: 20px;
        height: 20px;
        background-color: var(--primary-color);
        border-radius: 50%;
        position: relative;
        z-index: 3;
        transition: transform 0.3s ease;
    }

    .timeline-item:hover .timeline-marker {
        transform: scale(1.2);
    }

    .timeline-year {
        text-align: center;
        margin-top: 0.5rem;
        font-weight: bold;
        color: var(--text-dark);
    }

    /* Timeline Popup */
    .timeline-popup {
        position: fixed;
        z-index: 1000;
        pointer-events: none;
    }

    .timeline-popup-content {
        background: var(--bg-transparent);
        backdrop-filter: blur(10px);
        border-radius: 15px;
        box-shadow: 
            0 10px 25px rgba(0,0,0,0.2),
            0 0 30px rgba(75, 175, 80, 0.1);
        display: flex;
        max-width: 500px;
        overflow: hidden;
    }

    .timeline-image {
        width: 200px;
        height: 200px;
        object-fit: cover;
    }

    .timeline-details {
        padding: 1rem;
    }

    .timeline-details h3 {
        margin-bottom: 0.5rem;
        color: var(--text-dark);
    }

    .timeline-details p {
        color: var(--text-light);
    }
</style>