<script lang="ts">
    import { page } from '$app/stores';
    import { onMount } from 'svelte';

    let isEventsDropdownOpen = false;
    let dropdownIcon = 'expand_more';

    const events = [
        { 
            id: 'summer-teaching-2023',
            name: 'Summer Teaching Program 2023', 
            link: '/events/summer-teaching-2023',
            description: 'Successful summer program supporting 50 students'
        },
        { 
            id: 'winter-language-workshop',
            name: 'Winter Language Workshop', 
            link: '/events/winter-language-workshop',
            description: 'Intensive English learning retreat'
        },
        { 
            id: 'community-outreach-2023',
            name: 'Community Outreach Day', 
            link: '/events/community-outreach-2023',
            description: 'Connecting with local communities'
        }
    ];

    function toggleEventsDropdown() {
        isEventsDropdownOpen = !isEventsDropdownOpen;
        dropdownIcon = isEventsDropdownOpen ? 'expand_less' : 'expand_more';
    }

    function handleMouseEnter() {
        isEventsDropdownOpen = true;
        dropdownIcon = 'expand_less';
    }

    function handleMouseLeave(event: MouseEvent) {
        const relatedTarget = event.relatedTarget as HTMLElement;
        
        // Check if the mouse is moving to an element within the dropdown
        if (relatedTarget && 
            (relatedTarget.closest('.dropdown-content') || 
             relatedTarget.classList.contains('events-dropdown'))) {
            return;
        }
        
        isEventsDropdownOpen = false;
        dropdownIcon = 'expand_more';
    }

    function handleDropdownContentMouseLeave(event: MouseEvent) {
        const relatedTarget = event.relatedTarget as HTMLElement;
        
        // Check if the mouse is moving back to the events dropdown
        if (relatedTarget && 
            (relatedTarget.classList.contains('events-dropdown') || 
             relatedTarget.closest('.events-dropdown'))) {
            return;
        }
        
        isEventsDropdownOpen = false;
        dropdownIcon = 'expand_more';
    }
</script>

<nav class="navbar">
    <div class="navbar-container">
        <!-- Logo on the left -->
        <a href="/" class="logo-container">
            <img src="/logos/whiteLogo.png" alt="Heartfelt English Logo" class="logo" />
        </a>

        <!-- Navigation Links on the right -->
        <div class="nav-links">
            <a href="/" class="nav-link" class:active={$page.url.pathname === '/'}>
                Home
            </a>

            <a href="/about" class="nav-link" class:active={$page.url.pathname === '/about'}>
                About
            </a>

            <!-- Events Dropdown -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div 
                class="nav-link events-dropdown" 
                on:mouseenter={handleMouseEnter}
                on:mouseleave={handleMouseLeave}
            >
                <span>
                    Events 
                    <span class="material-icons dropdown-icon">{dropdownIcon}</span>
                </span>
                
                {#if isEventsDropdownOpen}
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <div 
                    class="dropdown-content"
                    on:mouseleave={handleDropdownContentMouseLeave}
                >
                    {#each events as event}
                    <a 
                        href={event.link} 
                        class="dropdown-item"
                        data-event-id={event.id}
                    >
                        <div class="event-name">{event.name}</div>
                        <div class="event-description">{event.description}</div>
                    </a>
                    {/each}
                </div>
                {/if}
            </div>

            <a href="/contact" class="nav-link" class:active={$page.url.pathname === '/contact'}>
                Contact
            </a>

            <a href="/donate" class="nav-link donate-btn">
                Donate
            </a>
        </div>
    </div>
</nav>

<style lang="css">
    /* Navbar Container */
    .navbar {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        color: white;
        z-index: 1000;
    }

    .navbar-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 2rem;
        max-width: 1200px;
        margin: 0 auto;
    }

    /* Logo */
    .logo-container {
        display: flex;
        align-items: center;
    }

    .logo {
        height: 50px;
        width: auto;
    }

    /* Navigation Links */
    .nav-links {
        display: flex;
        align-items: center;
        gap: 1.5rem;
    }

    .nav-link {
        color: white;
        text-decoration: none;
        position: relative;
        transition: color 0.3s ease;
    }

    .nav-link:hover {
        color: #ff6b6b;
    }

    .nav-link.active::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #ff6b6b;
    }

    /* Events Dropdown */
    .events-dropdown {
        position: relative;
        cursor: pointer;
    }

    .dropdown-icon {
        vertical-align: middle;
        margin-left: 0.25rem;
        font-size: 1rem;
    }

    .dropdown-content {
        position: absolute;
        top: 100%;
        left: 0;
        background-color: white;
        min-width: 250px;
        box-shadow: 0 8px 16px rgba(0,0,0,0.2);
        z-index: 1;
        border-radius: 4px;
        overflow: hidden;
        margin-top: 0.5rem;
    }

    .dropdown-item {
        display: block;
        padding: 0.75rem 1rem;
        color: #333;
        text-decoration: none;
        transition: background-color 0.3s ease;
    }

    .dropdown-item:hover {
        background-color: #f4f4f4;
    }

    .event-name {
        font-weight: bold;
    }

    .event-description {
        font-size: 0.8rem;
        color: #666;
        margin-top: 0.25rem;
    }

    /* Donate Button */
    .donate-btn {
        background-color: #ff6b6b;
        padding: 0.5rem 1rem;
        border-radius: 4px;
        transition: background-color 0.3s ease;
    }

    .donate-btn:hover {
        background-color: #ff5252;
    }
</style>