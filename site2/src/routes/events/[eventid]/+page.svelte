<script lang="ts">
    import { marked } from 'marked';
    import { onMount, onDestroy } from 'svelte';
    import Navbar from '$lib/components/Navbar.svelte';
    
    export let data: { eventid: string };

    // Load event text from markdown file or JSON
    async function loadEventText() {
        try {
            // Attempt to load .txt file first
            const textResponse = await fetch(`/events/${data.eventid}/event.txt`);
            if (textResponse.ok) {
                return await textResponse.text();
            }
            
            // Fallback to JSON if txt not found
            const jsonModule = await import(`$lib/texts/${data.eventid}.json`);
            return jsonModule.default?.text || '';
        } catch (error) {
            console.error('Error loading event text:', error);
            return '';
        }
    }

    // Load event images from static folder
    async function loadEventImages() {
        try {
            // Use a broader glob pattern to include all event images
            const imageFiles = import.meta.glob('/static/events/*/*.{png,jpg,jpeg,webp}', { eager: true });

            // Filter the images to include only those for the specific event ID
            const filteredImages = Object.keys(imageFiles).filter(key => 
                key.includes(`/events/${data.eventid}/`)
            ).map(key => 
                key.replace('/static', '')
            );

            return filteredImages;
        } catch (error) {
            console.error('Error loading event images:', error);
            return [];
        }
    }

    // Reactive promises for text and images
    const eventTextPromise = loadEventText();
    const eventImagesPromise = loadEventImages();

    // Reactive variable for HTML content and image URLs
    let htmlContent: any = '';
    let imageUrls: string[] = [];
    let galleryContainer: HTMLDivElement;
    let scrollInterval: number;

    // Process text and images
    $: {
        Promise.all([eventTextPromise, eventImagesPromise]).then(([text, images]) => {
            htmlContent = marked.parse(text || '');
            imageUrls = images;
        }).catch(error => {
            console.error('Error processing event content:', error);
            htmlContent = '';
            imageUrls = [];
        });
    }

    // Derive banner image path
    $: bannerImagePath = `/events/${data.eventid}/banner.png`;

    // Auto-scroll gallery
    function startAutoScroll() {
        if (galleryContainer && imageUrls.length > 1) {
            scrollInterval = window.setInterval(() => {
                const scrollAmount = 300; // Width of gallery item + gap
                const maxScroll = galleryContainer.scrollWidth - galleryContainer.clientWidth;
                
                if (galleryContainer.scrollLeft >= maxScroll) {
                    galleryContainer.scrollLeft = 0;
                } else {
                    galleryContainer.scrollLeft += scrollAmount;
                }
            }, 3000); // Scroll every 3 seconds
        }
    }

    // Scroll gallery manually
    function scrollGallery(direction: 'left' | 'right') {
        if (galleryContainer) {
            const scrollAmount = 300; // Width of gallery item + gap
            galleryContainer.scrollLeft += direction === 'right' ? scrollAmount : -scrollAmount;
        }
    }

    // Lifecycle methods
    onMount(() => {
        startAutoScroll();
    });

    onDestroy(() => {
        if (scrollInterval) {
            window.clearInterval(scrollInterval);
        }
    });
</script>

<!-- Head link for Google Fonts Icons -->
<svelte:head>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</svelte:head>

<Navbar />

<div class="event-page">
    <!-- Banner Image -->
    <div 
        class="event-banner" 
        style="background-image: url('{bannerImagePath}')"
    >
    </div>

    <!-- Markdown Content -->
    <div class="event-content">
        {@html htmlContent}
    </div>

    <!-- Image Gallery -->
    <div class="gallery-container">
        <button 
            class="gallery-nav-btn gallery-nav-left" 
            on:click={() => scrollGallery('left')}
        >
            <span class="material-icons">chevron_left</span>
        </button>
        
        <div 
            class="image-gallery" 
            bind:this={galleryContainer}
        >
            {#each imageUrls as imageUrl}
                <div class="gallery-item">
                    <!-- svelte-ignore a11y-img-redundant-alt -->
                    <img src={imageUrl} alt="Event Gallery Image" />
                </div>
            {/each}
        </div>
        
        <button 
            class="gallery-nav-btn gallery-nav-right" 
            on:click={() => scrollGallery('right')}
        >
            <span class="material-icons">chevron_right</span>
        </button>
    </div>
</div>

<style lang="css">
    .event-page {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    .event-banner {
        width: 100%;
        height: 70vh;
        background-size: cover;
        background-position: center;
        filter: blur(3px);
        margin-bottom: 2rem;
    }

    .event-content {
        max-width: 800px;
        width: 90%;
        padding: 2rem;
        background-color: white;
        line-height: 1.6;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        border-radius: 8px;
    }

    .gallery-container {
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem 0;
        background-color: #f4f4f4;
    }

    .image-gallery {
        display: flex;
        overflow-x: scroll;
        gap: 1rem;
        scroll-behavior: smooth;
        scrollbar-width: none; /* Firefox */
        -ms-overflow-style: none;  /* Internet Explorer 10+ */
        max-width: 1200px;
        width: 90%;
        padding: 1rem;
    }

    .image-gallery::-webkit-scrollbar {
        display: none; /* WebKit */
    }

    .gallery-item {
        flex: 0 0 auto;
        width: 300px;
        height: 200px;
        overflow: hidden;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        transition: transform 0.3s ease;
    }

    .gallery-item:hover {
        transform: scale(1.05);
    }

    .gallery-item img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .gallery-nav-btn {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background-color: rgba(255,255,255,0.8);
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        z-index: 10;
        transition: background-color 0.3s ease;
    }

    .gallery-nav-btn:hover {
        background-color: rgba(255,255,255,1);
    }

    .gallery-nav-left {
        left: 2%;
    }

    .gallery-nav-right {
        right: 2%;
    }

    .material-icons {
        color: #333;
        font-size: 2rem;
    }

    /* Markdown Styling */
    .event-content :global(h1) { 
        font-size: 2.5rem; 
        margin-bottom: 1rem; 
        color: #2c3e50;
    }
    .event-content :global(h2) { 
        font-size: 2rem; 
        margin-bottom: 0.8rem; 
        color: #34495e;
    }
    .event-content :global(h3) { 
        font-size: 1.5rem; 
        margin-bottom: 0.6rem; 
        color: #2980b9;
    }
    .event-content :global(p) { 
        margin-bottom: 1rem; 
        color: #333;
    }
    .event-content :global(ul), .event-content :global(ol) { 
        margin-left: 2rem; 
        margin-bottom: 1rem; 
    }
    .event-content :global(a) {
        color: #3498db;
        text-decoration: none;
        transition: color 0.3s ease;
    }
    .event-content :global(a):hover {
        text-decoration: underline;
        color: #2980b9;
    }
</style>