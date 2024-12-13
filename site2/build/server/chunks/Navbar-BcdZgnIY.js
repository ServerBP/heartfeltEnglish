import { c as create_ssr_component, b as subscribe, e as escape } from './ssr-D4-DOkNz.js';
import { p as page } from './stores-DfbWv0Pl.js';

const css = {
  code: ".navbar.svelte-tpix41{position:fixed;top:0;left:0;width:100%;background-color:rgba(0, 0, 0, 0.7);color:white;z-index:1000}.navbar-container.svelte-tpix41{display:flex;justify-content:space-between;align-items:center;padding:1rem 2rem;max-width:1200px;margin:0 auto}.logo-container.svelte-tpix41{display:flex;align-items:center}.logo.svelte-tpix41{height:50px;width:auto}.nav-links.svelte-tpix41{display:flex;align-items:center;gap:1.5rem}.nav-link.svelte-tpix41{color:white;text-decoration:none;position:relative;transition:color 0.3s ease}.nav-link.svelte-tpix41:hover{color:#ff6b6b}.nav-link.active.svelte-tpix41::after{content:'';position:absolute;bottom:-5px;left:0;width:100%;height:2px;background-color:#ff6b6b}.events-dropdown.svelte-tpix41{position:relative;cursor:pointer}.dropdown-icon.svelte-tpix41{vertical-align:middle;margin-left:0.25rem;font-size:1rem}.dropdown-content.svelte-tpix41{position:absolute;top:100%;left:0;background-color:white;min-width:250px;box-shadow:0 8px 16px rgba(0,0,0,0.2);z-index:1;border-radius:4px;overflow:hidden;margin-top:0.5rem}.dropdown-item.svelte-tpix41{display:block;padding:0.75rem 1rem;color:#333;text-decoration:none;transition:background-color 0.3s ease}.dropdown-item.svelte-tpix41:hover{background-color:#f4f4f4}.event-name.svelte-tpix41{font-weight:bold}.event-description.svelte-tpix41{font-size:0.8rem;color:#666;margin-top:0.25rem}.donate-btn.svelte-tpix41{background-color:#ff6b6b;padding:0.5rem 1rem;border-radius:4px;transition:background-color 0.3s ease}.donate-btn.svelte-tpix41:hover{background-color:#ff5252}",
  map: `{"version":3,"file":"Navbar.svelte","sources":["Navbar.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { page } from \\"$app/stores\\";\\nimport { onMount } from \\"svelte\\";\\nlet isEventsDropdownOpen = false;\\nlet dropdownIcon = \\"expand_more\\";\\nconst events = [\\n  {\\n    id: \\"summer-teaching-2023\\",\\n    name: \\"Summer Teaching Program 2023\\",\\n    link: \\"/events/summer-teaching-2023\\",\\n    description: \\"Successful summer program supporting 50 students\\"\\n  },\\n  {\\n    id: \\"winter-language-workshop\\",\\n    name: \\"Winter Language Workshop\\",\\n    link: \\"/events/winter-language-workshop\\",\\n    description: \\"Intensive English learning retreat\\"\\n  },\\n  {\\n    id: \\"community-outreach-2023\\",\\n    name: \\"Community Outreach Day\\",\\n    link: \\"/events/community-outreach-2023\\",\\n    description: \\"Connecting with local communities\\"\\n  }\\n];\\nfunction toggleEventsDropdown() {\\n  isEventsDropdownOpen = !isEventsDropdownOpen;\\n  dropdownIcon = isEventsDropdownOpen ? \\"expand_less\\" : \\"expand_more\\";\\n}\\nfunction handleMouseEnter() {\\n  isEventsDropdownOpen = true;\\n  dropdownIcon = \\"expand_less\\";\\n}\\nfunction handleMouseLeave(event) {\\n  const relatedTarget = event.relatedTarget;\\n  if (relatedTarget && (relatedTarget.closest(\\".dropdown-content\\") || relatedTarget.classList.contains(\\"events-dropdown\\"))) {\\n    return;\\n  }\\n  isEventsDropdownOpen = false;\\n  dropdownIcon = \\"expand_more\\";\\n}\\nfunction handleDropdownContentMouseLeave(event) {\\n  const relatedTarget = event.relatedTarget;\\n  if (relatedTarget && (relatedTarget.classList.contains(\\"events-dropdown\\") || relatedTarget.closest(\\".events-dropdown\\"))) {\\n    return;\\n  }\\n  isEventsDropdownOpen = false;\\n  dropdownIcon = \\"expand_more\\";\\n}\\n<\/script>\\n\\n<nav class=\\"navbar\\">\\n    <div class=\\"navbar-container\\">\\n        <!-- Logo on the left -->\\n        <a href=\\"/\\" class=\\"logo-container\\">\\n            <img src=\\"/logos/whiteLogo.png\\" alt=\\"Heartfelt English Logo\\" class=\\"logo\\" />\\n        </a>\\n\\n        <!-- Navigation Links on the right -->\\n        <div class=\\"nav-links\\">\\n            <a href=\\"/\\" class=\\"nav-link\\" class:active={$page.url.pathname === '/'}>\\n                Home\\n            </a>\\n\\n            <a href=\\"/about\\" class=\\"nav-link\\" class:active={$page.url.pathname === '/about'}>\\n                About\\n            </a>\\n\\n            <!-- Events Dropdown -->\\n            <!-- svelte-ignore a11y-no-static-element-interactions -->\\n            <div \\n                class=\\"nav-link events-dropdown\\" \\n                on:mouseenter={handleMouseEnter}\\n                on:mouseleave={handleMouseLeave}\\n            >\\n                <span>\\n                    Events \\n                    <span class=\\"material-icons dropdown-icon\\">{dropdownIcon}</span>\\n                </span>\\n                \\n                {#if isEventsDropdownOpen}\\n                <!-- svelte-ignore a11y-no-static-element-interactions -->\\n                <div \\n                    class=\\"dropdown-content\\"\\n                    on:mouseleave={handleDropdownContentMouseLeave}\\n                >\\n                    {#each events as event}\\n                    <a \\n                        href={event.link} \\n                        class=\\"dropdown-item\\"\\n                        data-event-id={event.id}\\n                    >\\n                        <div class=\\"event-name\\">{event.name}</div>\\n                        <div class=\\"event-description\\">{event.description}</div>\\n                    </a>\\n                    {/each}\\n                </div>\\n                {/if}\\n            </div>\\n\\n            <a href=\\"/contact\\" class=\\"nav-link\\" class:active={$page.url.pathname === '/contact'}>\\n                Contact\\n            </a>\\n\\n            <a href=\\"/donate\\" class=\\"nav-link donate-btn\\">\\n                Donate\\n            </a>\\n        </div>\\n    </div>\\n</nav>\\n\\n<style lang=\\"css\\">\\n    /* Navbar Container */\\n    .navbar {\\n        position: fixed;\\n        top: 0;\\n        left: 0;\\n        width: 100%;\\n        background-color: rgba(0, 0, 0, 0.7);\\n        color: white;\\n        z-index: 1000;\\n    }\\n\\n    .navbar-container {\\n        display: flex;\\n        justify-content: space-between;\\n        align-items: center;\\n        padding: 1rem 2rem;\\n        max-width: 1200px;\\n        margin: 0 auto;\\n    }\\n\\n    /* Logo */\\n    .logo-container {\\n        display: flex;\\n        align-items: center;\\n    }\\n\\n    .logo {\\n        height: 50px;\\n        width: auto;\\n    }\\n\\n    /* Navigation Links */\\n    .nav-links {\\n        display: flex;\\n        align-items: center;\\n        gap: 1.5rem;\\n    }\\n\\n    .nav-link {\\n        color: white;\\n        text-decoration: none;\\n        position: relative;\\n        transition: color 0.3s ease;\\n    }\\n\\n    .nav-link:hover {\\n        color: #ff6b6b;\\n    }\\n\\n    .nav-link.active::after {\\n        content: '';\\n        position: absolute;\\n        bottom: -5px;\\n        left: 0;\\n        width: 100%;\\n        height: 2px;\\n        background-color: #ff6b6b;\\n    }\\n\\n    /* Events Dropdown */\\n    .events-dropdown {\\n        position: relative;\\n        cursor: pointer;\\n    }\\n\\n    .dropdown-icon {\\n        vertical-align: middle;\\n        margin-left: 0.25rem;\\n        font-size: 1rem;\\n    }\\n\\n    .dropdown-content {\\n        position: absolute;\\n        top: 100%;\\n        left: 0;\\n        background-color: white;\\n        min-width: 250px;\\n        box-shadow: 0 8px 16px rgba(0,0,0,0.2);\\n        z-index: 1;\\n        border-radius: 4px;\\n        overflow: hidden;\\n        margin-top: 0.5rem;\\n    }\\n\\n    .dropdown-item {\\n        display: block;\\n        padding: 0.75rem 1rem;\\n        color: #333;\\n        text-decoration: none;\\n        transition: background-color 0.3s ease;\\n    }\\n\\n    .dropdown-item:hover {\\n        background-color: #f4f4f4;\\n    }\\n\\n    .event-name {\\n        font-weight: bold;\\n    }\\n\\n    .event-description {\\n        font-size: 0.8rem;\\n        color: #666;\\n        margin-top: 0.25rem;\\n    }\\n\\n    /* Donate Button */\\n    .donate-btn {\\n        background-color: #ff6b6b;\\n        padding: 0.5rem 1rem;\\n        border-radius: 4px;\\n        transition: background-color 0.3s ease;\\n    }\\n\\n    .donate-btn:hover {\\n        background-color: #ff5252;\\n    }\\n</style>"],"names":[],"mappings":"AAgHI,qBAAQ,CACJ,QAAQ,CAAE,KAAK,CACf,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,IAAI,CACX,gBAAgB,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CACpC,KAAK,CAAE,KAAK,CACZ,OAAO,CAAE,IACb,CAEA,+BAAkB,CACd,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aAAa,CAC9B,WAAW,CAAE,MAAM,CACnB,OAAO,CAAE,IAAI,CAAC,IAAI,CAClB,SAAS,CAAE,MAAM,CACjB,MAAM,CAAE,CAAC,CAAC,IACd,CAGA,6BAAgB,CACZ,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MACjB,CAEA,mBAAM,CACF,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IACX,CAGA,wBAAW,CACP,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,MACT,CAEA,uBAAU,CACN,KAAK,CAAE,KAAK,CACZ,eAAe,CAAE,IAAI,CACrB,QAAQ,CAAE,QAAQ,CAClB,UAAU,CAAE,KAAK,CAAC,IAAI,CAAC,IAC3B,CAEA,uBAAS,MAAO,CACZ,KAAK,CAAE,OACX,CAEA,SAAS,qBAAO,OAAQ,CACpB,OAAO,CAAE,EAAE,CACX,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,IAAI,CACZ,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,GAAG,CACX,gBAAgB,CAAE,OACtB,CAGA,8BAAiB,CACb,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,OACZ,CAEA,4BAAe,CACX,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,OAAO,CACpB,SAAS,CAAE,IACf,CAEA,+BAAkB,CACd,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,IAAI,CACT,IAAI,CAAE,CAAC,CACP,gBAAgB,CAAE,KAAK,CACvB,SAAS,CAAE,KAAK,CAChB,UAAU,CAAE,CAAC,CAAC,GAAG,CAAC,IAAI,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CACtC,OAAO,CAAE,CAAC,CACV,aAAa,CAAE,GAAG,CAClB,QAAQ,CAAE,MAAM,CAChB,UAAU,CAAE,MAChB,CAEA,4BAAe,CACX,OAAO,CAAE,KAAK,CACd,OAAO,CAAE,OAAO,CAAC,IAAI,CACrB,KAAK,CAAE,IAAI,CACX,eAAe,CAAE,IAAI,CACrB,UAAU,CAAE,gBAAgB,CAAC,IAAI,CAAC,IACtC,CAEA,4BAAc,MAAO,CACjB,gBAAgB,CAAE,OACtB,CAEA,yBAAY,CACR,WAAW,CAAE,IACjB,CAEA,gCAAmB,CACf,SAAS,CAAE,MAAM,CACjB,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,OAChB,CAGA,yBAAY,CACR,gBAAgB,CAAE,OAAO,CACzB,OAAO,CAAE,MAAM,CAAC,IAAI,CACpB,aAAa,CAAE,GAAG,CAClB,UAAU,CAAE,gBAAgB,CAAC,IAAI,CAAC,IACtC,CAEA,yBAAW,MAAO,CACd,gBAAgB,CAAE,OACtB"}`
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let dropdownIcon = "expand_more";
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<nav class="navbar svelte-tpix41"><div class="navbar-container svelte-tpix41"> <a href="/" class="logo-container svelte-tpix41" data-svelte-h="svelte-124v897"><img src="/logos/whiteLogo.png" alt="Heartfelt English Logo" class="logo svelte-tpix41"></a>  <div class="nav-links svelte-tpix41"><a href="/" class="${["nav-link svelte-tpix41", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}" data-svelte-h="svelte-1evzwhe">Home</a> <a href="/about" class="${["nav-link svelte-tpix41", $page.url.pathname === "/about" ? "active" : ""].join(" ").trim()}" data-svelte-h="svelte-bdjme2">About</a>   <div class="nav-link events-dropdown svelte-tpix41"><span>Events 
                    <span class="material-icons dropdown-icon svelte-tpix41">${escape(dropdownIcon)}</span></span> ${``}</div> <a href="/contact" class="${["nav-link svelte-tpix41", $page.url.pathname === "/contact" ? "active" : ""].join(" ").trim()}" data-svelte-h="svelte-b6nmqb">Contact</a> <a href="/donate" class="nav-link donate-btn svelte-tpix41" data-svelte-h="svelte-9eo52g">Donate</a></div></div> </nav>`;
});

export { Navbar as N };
//# sourceMappingURL=Navbar-BcdZgnIY.js.map
