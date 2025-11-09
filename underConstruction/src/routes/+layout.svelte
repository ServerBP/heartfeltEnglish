<!-- <script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()} -->

<script lang="ts">
    import { writable } from 'svelte/store';
    
    let headingFont = $state('Playfair Display');
    let bodyFont = $state('Open Sans');
    let isPreviewMode = $state(false);

    const fonts: string[] = [
        'Playfair Display',
        'Merriweather',
        'Lora',
        'Open Sans',
        'Roboto',
        'Montserrat',
        'Raleway',
        'Poppins',
        'Source Sans Pro',
        'Nunito',
        'Libre Baskerville',
        'Crimson Text'
    ];

    function togglePreview(): void {
        isPreviewMode = !isPreviewMode;
    }
</script>

<svelte:head>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Merriweather:wght@400;700&family=Lora:wght@400;600&family=Open+Sans:wght@400;600&family=Roboto:wght@400;500&family=Montserrat:wght@400;600&family=Raleway:wght@400;600&family=Poppins:wght@400;600&family=Source+Sans+Pro:wght@400;600&family=Nunito:wght@400;600&family=Libre+Baskerville:wght@400;700&family=Crimson+Text:wght@400;600&display=swap" rel="stylesheet">
</svelte:head>

<div class="app">
    <div class="controls-bar" class:hidden={isPreviewMode}>
        <div class="font-selector">
            <label for="heading-font">Heading Font:</label>
            <select id="heading-font" bind:value={headingFont}>
                {#each fonts as font}
                    <option value={font}>{font}</option>
                {/each}
            </select>
        </div>

        <div class="font-selector">
            <label for="body-font">Body Font:</label>
            <select id="body-font" bind:value={bodyFont}>
                {#each fonts as font}
                    <option value={font}>{font}</option>
                {/each}
            </select>
        </div>

        <button class="preview-btn" onclick={togglePreview}>
            <i class="pi pi-eye"></i>
            {isPreviewMode ? 'Exit Preview' : 'Full Preview'}
        </button>
    </div>

    <main class="main-content" class:preview-mode={isPreviewMode}>
        <div class="construction-container">
            <div class="logo-wrapper">
                <div class="logo-placeholder">
                    <img src="/logos/logoW.png" alt="Heartfelt Logo White">
                </div>
            </div>

            <h1 class="heading" style="font-family: '{headingFont}', serif;">
                Under Construction
            </h1>

            <div class="divider"></div>

            <p class="motto" style="font-family: '{bodyFont}', sans-serif;">
                The motto / sample text would come here. We are working hard to deliver the best quality for you. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <div class="icon-row">
                <i class="pi pi-envelope"></i>
                <!-- svelte-ignore a11y_consider_explicit_label -->
                <a href="https://www.facebook.com/HeartfeltEnglish" target="_blank"><i class="pi pi-facebook"></i></a>
            </div>

            <p class="coming-soon" style="font-family: '{bodyFont}', sans-serif;">
                Coming Soon
            </p>
        </div>
    </main>
</div>

<style>
    :global(body) {
        margin: 0;
        padding: 0;
        font-family: 'Open Sans', sans-serif;
        overflow-x: hidden;
    }

    .app {
        min-height: 100vh;
        background: linear-gradient(135deg, #4a5568 0%, #2d3748 50%, #1a202c 100%);
        position: relative;
    }

    .controls-bar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background: rgba(255, 255, 255, 0.98);
        backdrop-filter: blur(10px);
        padding: 1.25rem 2rem;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 1000;
        display: flex;
        gap: 2rem;
        align-items: center;
        flex-wrap: wrap;
        transition: transform 0.3s ease;
        border-bottom: 2px solid #e2e8f0;
    }

    .controls-bar.hidden {
        transform: translateY(-100%);
    }

    .font-selector {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .font-selector label {
        font-size: 0.875rem;
        font-weight: 600;
        color: #2d3748;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .font-selector select {
        padding: 0.625rem 1rem;
        border: 2px solid #cbd5e0;
        border-radius: 8px;
        background: white;
        font-size: 1rem;
        cursor: pointer;
        transition: all 0.2s ease;
        min-width: 200px;
    }

    .font-selector select:hover {
        border-color: #667eea;
    }

    .font-selector select:focus {
        outline: none;
        border-color: #667eea;
        box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }

    .preview-btn {
        padding: 0.75rem 1.5rem;
        background: #764ba2;
        color: white;
        border: none;
        border-radius: 8px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        transition: all 0.2s ease;
        box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
    }

    .preview-btn:hover {
        box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
    }

    .preview-btn:active {
        transform: translateY(0);
    }

    .main-content {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem;
        padding-top: 8rem;
        transition: padding-top 0.3s ease;
    }

    .main-content.preview-mode {
        padding-top: 2rem;
    }

    .construction-container {
        text-align: center;
        max-width: 800px;
        width: 100%;
        animation: fadeInUp 1s ease-out;
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .logo-wrapper {
        margin-bottom: 2.5rem;
        animation: fadeIn 1.5s ease-out;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    .logo-placeholder {
        width: 180px;
        height: 180px;
        margin: 0 auto;
        background: rgba(255, 255, 255, 0.95);
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        border: 4px solid rgba(255, 255, 255, 0.3);
        transition: transform 0.3s ease;
    }

    .logo-placeholder:hover {
        transform: scale(1.05);
    }

    .logo-placeholder i {
        font-size: 4rem;
        color: #667eea;
        margin-bottom: 0.5rem;
    }

    .logo-placeholder span {
        font-size: 0.875rem;
        color: #4a5568;
        font-weight: 600;
    }

    .loading-animation {
        position: relative;
        height: 120px;
        margin-bottom: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .loading-animation i {
        font-size: 3rem;
        color: rgba(255, 255, 255, 0.9);
    }

    .loading-animation .pi-cog {
        animation: spin 3s linear infinite;
    }

    .loading-animation .cog-2 {
        position: absolute;
        left: 50%;
        margin-left: 40px;
        animation: spinReverse 2.5s linear infinite;
        font-size: 2.5rem;
    }

    .loading-animation .tool-icon {
        position: absolute;
        right: 50%;
        margin-right: 40px;
        animation: bounce 2s ease-in-out infinite;
        font-size: 2.5rem;
    }

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    @keyframes spinReverse {
        from {
            transform: rotate(360deg);
        }
        to {
            transform: rotate(0deg);
        }
    }

    @keyframes bounce {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-15px);
        }
    }

    .heading {
        font-size: 4rem;
        font-weight: 700;
        color: #ffffff;
        margin-bottom: 1.5rem;
        text-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
        letter-spacing: 1px;
        animation: fadeInUp 1.2s ease-out 0.3s both;
    }

    .divider {
        width: 120px;
        height: 4px;
        background: linear-gradient(90deg, transparent, #ffffff, transparent);
        margin: 2rem auto;
        border-radius: 2px;
        animation: fadeInUp 1.4s ease-out 0.5s both;
    }

    .motto {
        font-size: 1.25rem;
        line-height: 1.8;
        color: rgba(255, 255, 255, 0.95);
        margin-bottom: 2.5rem;
        max-width: 650px;
        margin-left: auto;
        margin-right: auto;
        text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.2);
        animation: fadeInUp 1.6s ease-out 0.7s both;
    }

    .icon-row {
        display: flex;
        gap: 2.5rem;
        justify-content: center;
        margin-bottom: 2rem;
        animation: fadeInUp 1.8s ease-out 0.9s both;
    }

    .icon-row i {
        font-size: 2.5rem;
        color: rgba(255, 255, 255, 0.9);
        transition: all 0.3s ease;
    }

    .icon-row i:hover {
        transform: scale(1.2);
        color: #ffffff;
        filter: drop-shadow(0 4px 8px rgba(255, 255, 255, 0.3));
    }

    .coming-soon {
        font-size: 1.5rem;
        font-weight: 600;
        color: rgba(255, 255, 255, 0.85);
        text-transform: uppercase;
        letter-spacing: 3px;
        animation: fadeInUp 2s ease-out 1.1s both, pulse 2s ease-in-out 2s infinite;
    }

    @keyframes pulse {
        0%, 100% {
            opacity: 0.85;
        }
        50% {
            opacity: 1;
        }
    }

    @media (max-width: 768px) {
        .controls-bar {
            padding: 1rem;
            gap: 1rem;
        }

        .font-selector select {
            min-width: 150px;
            font-size: 0.875rem;
        }

        .heading {
            font-size: 2.5rem;
        }

        .motto {
            font-size: 1rem;
            padding: 0 1rem;
        }

        .icon-row {
            gap: 1.5rem;
        }

        .icon-row i {
            font-size: 2rem;
        }

        .coming-soon {
            font-size: 1.125rem;
        }

        .logo-placeholder {
            width: 140px;
            height: 140px;
        }

        .logo-placeholder i {
            font-size: 3rem;
        }
    }
</style>