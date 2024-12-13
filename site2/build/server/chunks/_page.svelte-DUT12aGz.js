import { c as create_ssr_component, o as onDestroy, v as validate_component, e as escape, f as add_attribute, d as each } from './ssr-D4-DOkNz.js';
import { marked } from 'marked';
import { N as Navbar } from './Navbar-BcdZgnIY.js';
import './stores-DfbWv0Pl.js';
import './exports-CTha0ECg.js';

const _1 = "/_app/immutable/assets/1.5_k37vG8.jpg";
const __vite_glob_1_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _1
}, Symbol.toStringTag, { value: "Module" }));
const _12 = "/_app/immutable/assets/1.5_k37vG8.jpg";
const __vite_glob_1_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _12
}, Symbol.toStringTag, { value: "Module" }));
const _13 = "/_app/immutable/assets/13.BWMH3uSG.jpg";
const __vite_glob_1_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _13
}, Symbol.toStringTag, { value: "Module" }));
const _14 = "/_app/immutable/assets/14.DH4jEhqI.jpg";
const __vite_glob_1_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _14
}, Symbol.toStringTag, { value: "Module" }));
const _15 = "/_app/immutable/assets/15.VTRTsp18.jpg";
const __vite_glob_1_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _15
}, Symbol.toStringTag, { value: "Module" }));
const _16 = "/_app/immutable/assets/16.C2wsf9O2.jpg";
const __vite_glob_1_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _16
}, Symbol.toStringTag, { value: "Module" }));
const _18 = "/_app/immutable/assets/18.rCzbzzor.jpg";
const __vite_glob_1_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _18
}, Symbol.toStringTag, { value: "Module" }));
const _19 = "/_app/immutable/assets/19.D8LjnyOB.jpg";
const __vite_glob_1_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _19
}, Symbol.toStringTag, { value: "Module" }));
const _2 = "/_app/immutable/assets/2.BjjptTqG.jpg";
const __vite_glob_1_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _2
}, Symbol.toStringTag, { value: "Module" }));
const _3 = "/_app/immutable/assets/3.Cg5C-Hdd.jpg";
const __vite_glob_1_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _3
}, Symbol.toStringTag, { value: "Module" }));
const WhatsApp_Image_20240704_at_16_04_12_710d6565 = "/_app/immutable/assets/WhatsApp%20Image%202024-07-04%20at%2016.04.12_710d6565.Dta4k68K.jpg";
const __vite_glob_1_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: WhatsApp_Image_20240704_at_16_04_12_710d6565
}, Symbol.toStringTag, { value: "Module" }));
const WhatsApp_Image_20240704_at_16_04_12_7f47fb47 = "/_app/immutable/assets/WhatsApp%20Image%202024-07-04%20at%2016.04.12_7f47fb47.xljAkgzc.jpg";
const __vite_glob_1_11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: WhatsApp_Image_20240704_at_16_04_12_7f47fb47
}, Symbol.toStringTag, { value: "Module" }));
const banner = "/_app/immutable/assets/banner.BPcTboa5.png";
const __vite_glob_1_12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: banner
}, Symbol.toStringTag, { value: "Module" }));
const __variableDynamicImportRuntimeHelper = (glob, path, segs) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(
      reject.bind(
        null,
        new Error(
          "Unknown variable dynamic import: " + path + (path.split("/").length !== segs ? ". Note that variables only represent file names one level deep." : "")
        )
      )
    );
  });
};
const css = {
  code: ".event-page.svelte-1uit5lv.svelte-1uit5lv{display:flex;flex-direction:column;align-items:center;width:100%}.event-banner.svelte-1uit5lv.svelte-1uit5lv{width:100%;height:70vh;background-size:cover;background-position:center;filter:blur(3px);margin-bottom:2rem}.event-content.svelte-1uit5lv.svelte-1uit5lv{max-width:800px;width:90%;padding:2rem;background-color:white;line-height:1.6;box-shadow:0 4px 6px rgba(0,0,0,0.1);border-radius:8px}.gallery-container.svelte-1uit5lv.svelte-1uit5lv{position:relative;width:100%;display:flex;align-items:center;justify-content:center;padding:2rem 0;background-color:#f4f4f4}.image-gallery.svelte-1uit5lv.svelte-1uit5lv{display:flex;overflow-x:scroll;gap:1rem;scroll-behavior:smooth;scrollbar-width:none;-ms-overflow-style:none;max-width:1200px;width:90%;padding:1rem}.image-gallery.svelte-1uit5lv.svelte-1uit5lv::-webkit-scrollbar{display:none}.gallery-item.svelte-1uit5lv.svelte-1uit5lv{flex:0 0 auto;width:300px;height:200px;overflow:hidden;border-radius:8px;box-shadow:0 4px 6px rgba(0,0,0,0.1);transition:transform 0.3s ease}.gallery-item.svelte-1uit5lv.svelte-1uit5lv:hover{transform:scale(1.05)}.gallery-item.svelte-1uit5lv img.svelte-1uit5lv{width:100%;height:100%;object-fit:cover}.gallery-nav-btn.svelte-1uit5lv.svelte-1uit5lv{position:absolute;top:50%;transform:translateY(-50%);background-color:rgba(255,255,255,0.8);border:none;border-radius:50%;width:50px;height:50px;display:flex;align-items:center;justify-content:center;cursor:pointer;z-index:10;transition:background-color 0.3s ease}.gallery-nav-btn.svelte-1uit5lv.svelte-1uit5lv:hover{background-color:rgba(255,255,255,1)}.gallery-nav-left.svelte-1uit5lv.svelte-1uit5lv{left:2%}.gallery-nav-right.svelte-1uit5lv.svelte-1uit5lv{right:2%}.material-icons.svelte-1uit5lv.svelte-1uit5lv{color:#333;font-size:2rem}.event-content.svelte-1uit5lv h1{font-size:2.5rem;margin-bottom:1rem;color:#2c3e50}.event-content.svelte-1uit5lv h2{font-size:2rem;margin-bottom:0.8rem;color:#34495e}.event-content.svelte-1uit5lv h3{font-size:1.5rem;margin-bottom:0.6rem;color:#2980b9}.event-content.svelte-1uit5lv p{margin-bottom:1rem;color:#333}.event-content.svelte-1uit5lv ul,.event-content.svelte-1uit5lv ol{margin-left:2rem;margin-bottom:1rem}.event-content.svelte-1uit5lv a{color:#3498db;text-decoration:none;transition:color 0.3s ease}.event-content.svelte-1uit5lv a:hover{text-decoration:underline;color:#2980b9}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { marked } from \\"marked\\";\\nimport { onMount, onDestroy } from \\"svelte\\";\\nimport Navbar from \\"$lib/components/Navbar.svelte\\";\\nexport let data;\\nasync function loadEventText() {\\n  try {\\n    const textResponse = await fetch(`/events/${data.eventid}/event.txt`);\\n    if (textResponse.ok) {\\n      return await textResponse.text();\\n    }\\n    const jsonModule = await import(`$lib/texts/${data.eventid}.json`);\\n    return jsonModule.default?.text || \\"\\";\\n  } catch (error) {\\n    console.error(\\"Error loading event text:\\", error);\\n    return \\"\\";\\n  }\\n}\\nasync function loadEventImages() {\\n  try {\\n    const imageFiles = import.meta.glob(\\"/static/events/*/*.{png,jpg,jpeg,webp}\\", { eager: true });\\n    const filteredImages = Object.keys(imageFiles).filter(\\n      (key) => key.includes(`/events/${data.eventid}/`)\\n    ).map(\\n      (key) => key.replace(\\"/static\\", \\"\\")\\n    );\\n    return filteredImages;\\n  } catch (error) {\\n    console.error(\\"Error loading event images:\\", error);\\n    return [];\\n  }\\n}\\nconst eventTextPromise = loadEventText();\\nconst eventImagesPromise = loadEventImages();\\nlet htmlContent = \\"\\";\\nlet imageUrls = [];\\nlet galleryContainer;\\nlet scrollInterval;\\n$: {\\n  Promise.all([eventTextPromise, eventImagesPromise]).then(([text, images]) => {\\n    htmlContent = marked.parse(text || \\"\\");\\n    imageUrls = images;\\n  }).catch((error) => {\\n    console.error(\\"Error processing event content:\\", error);\\n    htmlContent = \\"\\";\\n    imageUrls = [];\\n  });\\n}\\n$: bannerImagePath = `/events/${data.eventid}/banner.png`;\\nfunction startAutoScroll() {\\n  if (galleryContainer && imageUrls.length > 1) {\\n    scrollInterval = window.setInterval(() => {\\n      const scrollAmount = 300;\\n      const maxScroll = galleryContainer.scrollWidth - galleryContainer.clientWidth;\\n      if (galleryContainer.scrollLeft >= maxScroll) {\\n        galleryContainer.scrollLeft = 0;\\n      } else {\\n        galleryContainer.scrollLeft += scrollAmount;\\n      }\\n    }, 3e3);\\n  }\\n}\\nfunction scrollGallery(direction) {\\n  if (galleryContainer) {\\n    const scrollAmount = 300;\\n    galleryContainer.scrollLeft += direction === \\"right\\" ? scrollAmount : -scrollAmount;\\n  }\\n}\\nonMount(() => {\\n  startAutoScroll();\\n});\\nonDestroy(() => {\\n  if (scrollInterval) {\\n    window.clearInterval(scrollInterval);\\n  }\\n});\\n<\/script>\\n\\n<!-- Head link for Google Fonts Icons -->\\n<svelte:head>\\n    <link href=\\"https://fonts.googleapis.com/icon?family=Material+Icons\\" rel=\\"stylesheet\\">\\n</svelte:head>\\n\\n<Navbar />\\n\\n<div class=\\"event-page\\">\\n    <!-- Banner Image -->\\n    <div \\n        class=\\"event-banner\\" \\n        style=\\"background-image: url(\'{bannerImagePath}\')\\"\\n    >\\n    </div>\\n\\n    <!-- Markdown Content -->\\n    <div class=\\"event-content\\">\\n        {@html htmlContent}\\n    </div>\\n\\n    <!-- Image Gallery -->\\n    <div class=\\"gallery-container\\">\\n        <button \\n            class=\\"gallery-nav-btn gallery-nav-left\\" \\n            on:click={() => scrollGallery(\'left\')}\\n        >\\n            <span class=\\"material-icons\\">chevron_left</span>\\n        </button>\\n        \\n        <div \\n            class=\\"image-gallery\\" \\n            bind:this={galleryContainer}\\n        >\\n            {#each imageUrls as imageUrl}\\n                <div class=\\"gallery-item\\">\\n                    <!-- svelte-ignore a11y-img-redundant-alt -->\\n                    <img src={imageUrl} alt=\\"Event Gallery Image\\" />\\n                </div>\\n            {/each}\\n        </div>\\n        \\n        <button \\n            class=\\"gallery-nav-btn gallery-nav-right\\" \\n            on:click={() => scrollGallery(\'right\')}\\n        >\\n            <span class=\\"material-icons\\">chevron_right</span>\\n        </button>\\n    </div>\\n</div>\\n\\n<style lang=\\"css\\">\\n    .event-page {\\n        display: flex;\\n        flex-direction: column;\\n        align-items: center;\\n        width: 100%;\\n    }\\n\\n    .event-banner {\\n        width: 100%;\\n        height: 70vh;\\n        background-size: cover;\\n        background-position: center;\\n        filter: blur(3px);\\n        margin-bottom: 2rem;\\n    }\\n\\n    .event-content {\\n        max-width: 800px;\\n        width: 90%;\\n        padding: 2rem;\\n        background-color: white;\\n        line-height: 1.6;\\n        box-shadow: 0 4px 6px rgba(0,0,0,0.1);\\n        border-radius: 8px;\\n    }\\n\\n    .gallery-container {\\n        position: relative;\\n        width: 100%;\\n        display: flex;\\n        align-items: center;\\n        justify-content: center;\\n        padding: 2rem 0;\\n        background-color: #f4f4f4;\\n    }\\n\\n    .image-gallery {\\n        display: flex;\\n        overflow-x: scroll;\\n        gap: 1rem;\\n        scroll-behavior: smooth;\\n        scrollbar-width: none; /* Firefox */\\n        -ms-overflow-style: none;  /* Internet Explorer 10+ */\\n        max-width: 1200px;\\n        width: 90%;\\n        padding: 1rem;\\n    }\\n\\n    .image-gallery::-webkit-scrollbar {\\n        display: none; /* WebKit */\\n    }\\n\\n    .gallery-item {\\n        flex: 0 0 auto;\\n        width: 300px;\\n        height: 200px;\\n        overflow: hidden;\\n        border-radius: 8px;\\n        box-shadow: 0 4px 6px rgba(0,0,0,0.1);\\n        transition: transform 0.3s ease;\\n    }\\n\\n    .gallery-item:hover {\\n        transform: scale(1.05);\\n    }\\n\\n    .gallery-item img {\\n        width: 100%;\\n        height: 100%;\\n        object-fit: cover;\\n    }\\n\\n    .gallery-nav-btn {\\n        position: absolute;\\n        top: 50%;\\n        transform: translateY(-50%);\\n        background-color: rgba(255,255,255,0.8);\\n        border: none;\\n        border-radius: 50%;\\n        width: 50px;\\n        height: 50px;\\n        display: flex;\\n        align-items: center;\\n        justify-content: center;\\n        cursor: pointer;\\n        z-index: 10;\\n        transition: background-color 0.3s ease;\\n    }\\n\\n    .gallery-nav-btn:hover {\\n        background-color: rgba(255,255,255,1);\\n    }\\n\\n    .gallery-nav-left {\\n        left: 2%;\\n    }\\n\\n    .gallery-nav-right {\\n        right: 2%;\\n    }\\n\\n    .material-icons {\\n        color: #333;\\n        font-size: 2rem;\\n    }\\n\\n    /* Markdown Styling */\\n    .event-content :global(h1) { \\n        font-size: 2.5rem; \\n        margin-bottom: 1rem; \\n        color: #2c3e50;\\n    }\\n    .event-content :global(h2) { \\n        font-size: 2rem; \\n        margin-bottom: 0.8rem; \\n        color: #34495e;\\n    }\\n    .event-content :global(h3) { \\n        font-size: 1.5rem; \\n        margin-bottom: 0.6rem; \\n        color: #2980b9;\\n    }\\n    .event-content :global(p) { \\n        margin-bottom: 1rem; \\n        color: #333;\\n    }\\n    .event-content :global(ul), .event-content :global(ol) { \\n        margin-left: 2rem; \\n        margin-bottom: 1rem; \\n    }\\n    .event-content :global(a) {\\n        color: #3498db;\\n        text-decoration: none;\\n        transition: color 0.3s ease;\\n    }\\n    .event-content :global(a):hover {\\n        text-decoration: underline;\\n        color: #2980b9;\\n    }\\n</style>"],"names":[],"mappings":"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"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let bannerImagePath;
  let { data } = $$props;
  async function loadEventText() {
    try {
      const textResponse = await fetch(`/events/${data.eventid}/event.txt`);
      if (textResponse.ok) {
        return await textResponse.text();
      }
      const jsonModule = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../../lib/texts/test.json": () => import('./test-DgNgl1I6.js') }), `../../../lib/texts/${data.eventid}.json`, 6);
      return jsonModule.default?.text || "";
    } catch (error) {
      console.error("Error loading event text:", error);
      return "";
    }
  }
  async function loadEventImages() {
    try {
      const imageFiles = /* @__PURE__ */ Object.assign({ "/static/events/test/1.jpg": __vite_glob_1_0, "/static/events/test/12.jpg": __vite_glob_1_1, "/static/events/test/13.jpg": __vite_glob_1_2, "/static/events/test/14.jpg": __vite_glob_1_3, "/static/events/test/15.jpg": __vite_glob_1_4, "/static/events/test/16.jpg": __vite_glob_1_5, "/static/events/test/18.jpg": __vite_glob_1_6, "/static/events/test/19.jpg": __vite_glob_1_7, "/static/events/test/2.jpg": __vite_glob_1_8, "/static/events/test/3.jpg": __vite_glob_1_9, "/static/events/test/WhatsApp Image 2024-07-04 at 16.04.12_710d6565.jpg": __vite_glob_1_10, "/static/events/test/WhatsApp Image 2024-07-04 at 16.04.12_7f47fb47.jpg": __vite_glob_1_11, "/static/events/test/banner.png": __vite_glob_1_12 });
      const filteredImages = Object.keys(imageFiles).filter((key) => key.includes(`/events/${data.eventid}/`)).map((key) => key.replace("/static", ""));
      return filteredImages;
    } catch (error) {
      console.error("Error loading event images:", error);
      return [];
    }
  }
  const eventTextPromise = loadEventText();
  const eventImagesPromise = loadEventImages();
  let htmlContent = "";
  let imageUrls = [];
  let galleryContainer;
  onDestroy(() => {
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$result.css.add(css);
  {
    {
      Promise.all([eventTextPromise, eventImagesPromise]).then(([text, images]) => {
        htmlContent = marked.parse(text || "");
        imageUrls = images;
      }).catch((error) => {
        console.error("Error processing event content:", error);
        htmlContent = "";
        imageUrls = [];
      });
    }
  }
  bannerImagePath = `/events/${data.eventid}/banner.png`;
  return ` ${$$result.head += `<!-- HEAD_svelte-1wd28qy_START --><link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"><!-- HEAD_svelte-1wd28qy_END -->`, ""} ${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <div class="event-page svelte-1uit5lv"> <div class="event-banner svelte-1uit5lv" style="${"background-image: url('" + escape(bannerImagePath, true) + "')"}"></div>  <div class="event-content svelte-1uit5lv"><!-- HTML_TAG_START -->${htmlContent}<!-- HTML_TAG_END --></div>  <div class="gallery-container svelte-1uit5lv"><button class="gallery-nav-btn gallery-nav-left svelte-1uit5lv" data-svelte-h="svelte-4a20bi"><span class="material-icons svelte-1uit5lv">chevron_left</span></button> <div class="image-gallery svelte-1uit5lv"${add_attribute("this", galleryContainer, 0)}>${each(imageUrls, (imageUrl) => {
    return `<div class="gallery-item svelte-1uit5lv"> <img${add_attribute("src", imageUrl, 0)} alt="Event Gallery Image" class="svelte-1uit5lv"> </div>`;
  })}</div> <button class="gallery-nav-btn gallery-nav-right svelte-1uit5lv" data-svelte-h="svelte-1htug23"><span class="material-icons svelte-1uit5lv">chevron_right</span></button></div> </div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-DUT12aGz.js.map
