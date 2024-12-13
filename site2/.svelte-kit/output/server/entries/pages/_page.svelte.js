import { c as create_ssr_component, o as onDestroy, d as each, f as add_attribute, e as escape, v as validate_component } from "../../chunks/ssr.js";
import { N as Navbar } from "../../chunks/Navbar.js";
const css$3 = {
  code: ".background-slideshow.svelte-11hvnu8{position:fixed;top:0;left:0;width:100%;height:100%;z-index:-1;overflow:hidden}.background-image.svelte-11hvnu8{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;opacity:0;transition:opacity 1s ease-in-out;filter:blur(3px)}.background-image.active.svelte-11hvnu8{opacity:1}",
  map: '{"version":3,"file":"BackgroundSlideshow.svelte","sources":["BackgroundSlideshow.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { onMount, onDestroy } from \\"svelte\\";\\nlet currentImageIndex = 0;\\nlet backgroundImages = [];\\nlet intervalId;\\nonMount(async () => {\\n  const backgroundImports = import.meta.glob(\\"/static/backgroundAssets/*.{png,jpg,jpeg,webp}\\");\\n  backgroundImages = Object.keys(backgroundImports).map(\\n    (path) => path.replace(\\"/static\\", \\"\\")\\n  );\\n  intervalId = setInterval(changeImage, 5e3);\\n});\\nfunction changeImage() {\\n  currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;\\n}\\nonDestroy(() => {\\n  if (intervalId) {\\n    clearInterval(intervalId);\\n  }\\n});\\n<\/script>\\n\\n<div class=\\"background-slideshow\\">\\n\\t{#each backgroundImages as image, index}\\n\\t\\t<img \\n\\t\\t\\tsrc={image} \\n\\t\\t\\talt={`Background ${index + 1}`}\\n\\t\\t\\tclass:active={index === currentImageIndex}\\n\\t\\t\\tclass=\\"background-image\\"\\n\\t\\t/>\\n\\t{/each}\\n</div>\\n\\n<style>\\n\\t.background-slideshow {\\n\\t\\tposition: fixed;\\n\\t\\ttop: 0;\\n\\t\\tleft: 0;\\n\\t\\twidth: 100%;\\n\\t\\theight: 100%;\\n\\t\\tz-index: -1;\\n\\t\\toverflow: hidden;\\n\\t}\\n\\n\\t.background-image {\\n\\t\\tposition: absolute;\\n\\t\\ttop: 0;\\n\\t\\tleft: 0;\\n\\t\\twidth: 100%;\\n\\t\\theight: 100%;\\n\\t\\tobject-fit: cover;\\n\\t\\topacity: 0;\\n\\t\\ttransition: opacity 1s ease-in-out;\\n\\t\\tfilter: blur(3px);\\n\\t}\\n\\n\\t.background-image.active {\\n\\t\\topacity: 1;\\n\\t}\\n</style>"],"names":[],"mappings":"AAiCC,oCAAsB,CACrB,QAAQ,CAAE,KAAK,CACf,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,EAAE,CACX,QAAQ,CAAE,MACX,CAEA,gCAAkB,CACjB,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,KAAK,CACjB,OAAO,CAAE,CAAC,CACV,UAAU,CAAE,OAAO,CAAC,EAAE,CAAC,WAAW,CAClC,MAAM,CAAE,KAAK,GAAG,CACjB,CAEA,iBAAiB,sBAAQ,CACxB,OAAO,CAAE,CACV"}'
};
const BackgroundSlideshow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentImageIndex = 0;
  let backgroundImages = [];
  onDestroy(() => {
  });
  $$result.css.add(css$3);
  return `<div class="background-slideshow svelte-11hvnu8">${each(backgroundImages, (image, index) => {
    return `<img${add_attribute("src", image, 0)}${add_attribute("alt", `Background ${index + 1}`, 0)} class="${[
      "background-image svelte-11hvnu8",
      index === currentImageIndex ? "active" : ""
    ].join(" ").trim()}">`;
  })} </div>`;
});
const css$2 = {
  code: ".facebook-feed.svelte-1l3rl5r{background-color:transparent;padding:3rem 2rem}.posts-container.svelte-1l3rl5r{display:flex;justify-content:center;gap:2rem;flex-wrap:wrap}.post.svelte-1l3rl5r{max-width:350px;background-color:white;border-radius:10px;box-shadow:0 4px 6px rgba(0,0,0,0.1);overflow:hidden;transition:transform 0.3s ease}.post.svelte-1l3rl5r:hover{transform:translateY(-10px)}.post-image.svelte-1l3rl5r{width:100%;height:250px;object-fit:cover}.post-content.svelte-1l3rl5r{padding:1rem}.post-text.svelte-1l3rl5r{margin-bottom:1rem;color:#333}.post-meta.svelte-1l3rl5r{display:flex;justify-content:space-between;color:#666;font-size:0.9rem}",
  map: '{"version":3,"file":"FacebookFeed.svelte","sources":["FacebookFeed.svelte"],"sourcesContent":["<script lang=\\"ts\\">const mockPosts = [\\n  {\\n    id: 1,\\n    date: \\"December 10, 2024\\",\\n    content: \\"We just completed our latest summer scholarship program! Check out the amazing stories of our students.\\",\\n    image: \\"/posts/summer-program.jpg\\"\\n  },\\n  {\\n    id: 2,\\n    date: \\"November 25, 2024\\",\\n    content: \\"Heartfelt English is proud to announce our expansion to three new cities in Hungary!\\",\\n    image: \\"/posts/expansion.jpg\\"\\n  },\\n  {\\n    id: 3,\\n    date: \\"November 5, 2024\\",\\n    content: \\"Thank you to all our amazing volunteers who make our mission possible!\\",\\n    image: \\"/posts/volunteers.jpg\\"\\n  }\\n];\\n<\/script>\\n\\n<section class=\\"facebook-feed\\">\\n\\t<div class=\\"posts-container\\">\\n\\t\\t{#each mockPosts as post}\\n\\t\\t\\t<div class=\\"post\\">\\n\\t\\t\\t\\t<!-- svelte-ignore a11y-img-redundant-alt -->\\n\\t\\t\\t\\t<img src={post.image} alt=\\"Post image\\" class=\\"post-image\\"/>\\n\\t\\t\\t\\t<div class=\\"post-content\\">\\n\\t\\t\\t\\t\\t<p class=\\"post-text\\">{post.content}</p>\\n\\t\\t\\t\\t\\t<div class=\\"post-meta\\">\\n\\t\\t\\t\\t\\t\\t<span class=\\"post-date\\">{post.date}</span>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t{/each}\\n\\t</div>\\n</section>\\n\\n<style>\\n\\t.facebook-feed {\\n\\t\\tbackground-color: transparent;\\n\\t\\tpadding: 3rem 2rem;\\n\\t}\\n\\n\\t.posts-container {\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: center;\\n\\t\\tgap: 2rem;\\n\\t\\tflex-wrap: wrap;\\n\\t}\\n\\n\\t.post {\\n\\t\\tmax-width: 350px;\\n\\t\\tbackground-color: white;\\n\\t\\tborder-radius: 10px;\\n\\t\\tbox-shadow: 0 4px 6px rgba(0,0,0,0.1);\\n\\t\\toverflow: hidden;\\n\\t\\ttransition: transform 0.3s ease;\\n\\t}\\n\\n\\t.post:hover {\\n\\t\\ttransform: translateY(-10px);\\n\\t}\\n\\n\\t.post-image {\\n\\t\\twidth: 100%;\\n\\t\\theight: 250px;\\n\\t\\tobject-fit: cover;\\n\\t}\\n\\n\\t.post-content {\\n\\t\\tpadding: 1rem;\\n\\t}\\n\\n\\t.post-text {\\n\\t\\tmargin-bottom: 1rem;\\n\\t\\tcolor: #333;\\n\\t}\\n\\n\\t.post-meta {\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: space-between;\\n\\t\\tcolor: #666;\\n\\t\\tfont-size: 0.9rem;\\n\\t}\\n\\n\\t.post-interactions {\\n\\t\\tdisplay: flex;\\n\\t\\tgap: 1rem;\\n\\t}\\n</style>"],"names":[],"mappings":"AAwCC,6BAAe,CACd,gBAAgB,CAAE,WAAW,CAC7B,OAAO,CAAE,IAAI,CAAC,IACf,CAEA,+BAAiB,CAChB,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,GAAG,CAAE,IAAI,CACT,SAAS,CAAE,IACZ,CAEA,oBAAM,CACL,SAAS,CAAE,KAAK,CAChB,gBAAgB,CAAE,KAAK,CACvB,aAAa,CAAE,IAAI,CACnB,UAAU,CAAE,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CACrC,QAAQ,CAAE,MAAM,CAChB,UAAU,CAAE,SAAS,CAAC,IAAI,CAAC,IAC5B,CAEA,oBAAK,MAAO,CACX,SAAS,CAAE,WAAW,KAAK,CAC5B,CAEA,0BAAY,CACX,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,KAAK,CACb,UAAU,CAAE,KACb,CAEA,4BAAc,CACb,OAAO,CAAE,IACV,CAEA,yBAAW,CACV,aAAa,CAAE,IAAI,CACnB,KAAK,CAAE,IACR,CAEA,yBAAW,CACV,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aAAa,CAC9B,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,MACZ"}'
};
const FacebookFeed = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const mockPosts = [
    {
      id: 1,
      date: "December 10, 2024",
      content: "We just completed our latest summer scholarship program! Check out the amazing stories of our students.",
      image: "/posts/summer-program.jpg"
    },
    {
      id: 2,
      date: "November 25, 2024",
      content: "Heartfelt English is proud to announce our expansion to three new cities in Hungary!",
      image: "/posts/expansion.jpg"
    },
    {
      id: 3,
      date: "November 5, 2024",
      content: "Thank you to all our amazing volunteers who make our mission possible!",
      image: "/posts/volunteers.jpg"
    }
  ];
  $$result.css.add(css$2);
  return `<section class="facebook-feed svelte-1l3rl5r"><div class="posts-container svelte-1l3rl5r">${each(mockPosts, (post) => {
    return `<div class="post svelte-1l3rl5r"> <img${add_attribute("src", post.image, 0)} alt="Post image" class="post-image svelte-1l3rl5r"> <div class="post-content svelte-1l3rl5r"><p class="post-text svelte-1l3rl5r">${escape(post.content)}</p> <div class="post-meta svelte-1l3rl5r"><span class="post-date">${escape(post.date)}</span> </div></div> </div>`;
  })}</div> </section>`;
});
const css$1 = {
  code: ".testimonial-slider.svelte-utryo6{position:relative;max-width:800px;margin:0 auto;background-color:transparent;border-radius:15px;overflow:hidden}.testimonial.svelte-utryo6{display:none;opacity:0;transition:opacity 0.5s ease-in-out;flex-direction:column;align-items:center;padding:2rem;text-align:center}.testimonial.active.svelte-utryo6{display:flex;opacity:1}.testimonial-image.svelte-utryo6{width:200px;height:200px;border-radius:50%;object-fit:cover;margin-bottom:1.5rem;border:4px solid #ff6b6b}.testimonial-content.svelte-utryo6{max-width:600px}blockquote.svelte-utryo6{font-size:1.2rem;font-style:italic;margin-bottom:1rem;color:#333}cite.svelte-utryo6{font-weight:bold;color:#666}.slider-controls.svelte-utryo6{position:absolute;top:50%;width:100%;display:flex;justify-content:space-between;transform:translateY(-50%)}.nav-button.svelte-utryo6{background-color:rgba(0,0,0,0.5);color:white;border:none;padding:10px 15px;cursor:pointer;font-size:1.5rem;transition:background-color 0.3s ease}.nav-button.svelte-utryo6:hover{background-color:rgba(0,0,0,0.7)}.testimonial-indicators.svelte-utryo6{position:absolute;bottom:20px;left:50%;transform:translateX(-50%);display:flex;gap:10px}.indicator.svelte-utryo6{width:10px;height:10px;background-color:rgba(255,255,255,0.5);border-radius:50%;cursor:pointer;transition:background-color 0.3s ease}.indicator.active.svelte-utryo6{background-color:#ff6b6b}",
  map: '{"version":3,"file":"TestimonialSlider.svelte","sources":["TestimonialSlider.svelte"],"sourcesContent":["<script lang=\\"ts\\">export let testimonials;\\nlet currentTestimonialIndex = 0;\\nfunction nextTestimonial() {\\n  currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;\\n}\\nfunction prevTestimonial() {\\n  currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;\\n}\\n<\/script>\\n\\n<div class=\\"testimonial-slider\\">\\n\\t{#each testimonials as testimonial, index}\\n\\t\\t<div \\n\\t\\t\\tclass=\\"testimonial\\" \\n\\t\\t\\tclass:active={index === currentTestimonialIndex}\\n\\t\\t>\\n\\t\\t\\t<img \\n\\t\\t\\t\\tsrc={testimonial.image} \\n\\t\\t\\t\\talt={testimonial.name} \\n\\t\\t\\t\\tclass=\\"testimonial-image\\"\\n\\t\\t\\t/>\\n\\t\\t\\t<div class=\\"testimonial-content\\">\\n\\t\\t\\t\\t<blockquote>\\"{testimonial.quote}\\"</blockquote>\\n\\t\\t\\t\\t<cite>- {testimonial.name}</cite>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t{/each}\\n\\n\\t<div class=\\"slider-controls\\">\\n\\t\\t<button \\n\\t\\t\\tclass=\\"nav-button prev\\" \\n\\t\\t\\ton:click={prevTestimonial}\\n\\t\\t\\taria-label=\\"Previous Testimonial\\"\\n\\t\\t>\\n\\t\\t\\t&#10094;\\n\\t\\t</button>\\n\\t\\t<button \\n\\t\\t\\tclass=\\"nav-button next\\" \\n\\t\\t\\ton:click={nextTestimonial}\\n\\t\\t\\taria-label=\\"Next Testimonial\\"\\n\\t\\t>\\n\\t\\t\\t&#10095;\\n\\t\\t</button>\\n\\t</div>\\n\\n\\t<div class=\\"testimonial-indicators\\">\\n\\t\\t<!-- svelte-ignore a11y-click-events-have-key-events -->\\n\\t\\t{#each testimonials as _, index}\\n\\t\\t\\t<!-- svelte-ignore a11y-click-events-have-key-events -->\\n\\t\\t\\t<!-- svelte-ignore a11y-no-static-element-interactions -->\\n\\t\\t\\t<span \\n\\t\\t\\t\\tclass=\\"indicator\\" \\n\\t\\t\\t\\tclass:active={index === currentTestimonialIndex}\\n\\t\\t\\t\\ton:click={() => currentTestimonialIndex = index}\\n\\t\\t\\t></span>\\n\\t\\t{/each}\\n\\t</div>\\n</div>\\n\\n<style>\\n\\t.testimonial-slider {\\n\\t\\tposition: relative;\\n\\t\\tmax-width: 800px;\\n\\t\\tmargin: 0 auto;\\n\\t\\tbackground-color: transparent;\\n\\t\\tborder-radius: 15px;\\n\\t\\toverflow: hidden;\\n\\t}\\n\\n\\t.testimonial {\\n\\t\\tdisplay: none;\\n\\t\\topacity: 0;\\n\\t\\ttransition: opacity 0.5s ease-in-out;\\n\\t\\tflex-direction: column;\\n\\t\\talign-items: center;\\n\\t\\tpadding: 2rem;\\n\\t\\ttext-align: center;\\n\\t}\\n\\n\\t.testimonial.active {\\n\\t\\tdisplay: flex;\\n\\t\\topacity: 1;\\n\\t}\\n\\n\\t.testimonial-image {\\n\\t\\twidth: 200px;\\n\\t\\theight: 200px;\\n\\t\\tborder-radius: 50%;\\n\\t\\tobject-fit: cover;\\n\\t\\tmargin-bottom: 1.5rem;\\n\\t\\tborder: 4px solid #ff6b6b;\\n\\t}\\n\\n\\t.testimonial-content {\\n\\t\\tmax-width: 600px;\\n\\t}\\n\\n\\tblockquote {\\n\\t\\tfont-size: 1.2rem;\\n\\t\\tfont-style: italic;\\n\\t\\tmargin-bottom: 1rem;\\n\\t\\tcolor: #333;\\n\\t}\\n\\n\\tcite {\\n\\t\\tfont-weight: bold;\\n\\t\\tcolor: #666;\\n\\t}\\n\\n\\t.slider-controls {\\n\\t\\tposition: absolute;\\n\\t\\ttop: 50%;\\n\\t\\twidth: 100%;\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: space-between;\\n\\t\\ttransform: translateY(-50%);\\n\\t}\\n\\n\\t.nav-button {\\n\\t\\tbackground-color: rgba(0,0,0,0.5);\\n\\t\\tcolor: white;\\n\\t\\tborder: none;\\n\\t\\tpadding: 10px 15px;\\n\\t\\tcursor: pointer;\\n\\t\\tfont-size: 1.5rem;\\n\\t\\ttransition: background-color 0.3s ease;\\n\\t}\\n\\n\\t.nav-button:hover {\\n\\t\\tbackground-color: rgba(0,0,0,0.7);\\n\\t}\\n\\n\\t.testimonial-indicators {\\n\\t\\tposition: absolute;\\n\\t\\tbottom: 20px;\\n\\t\\tleft: 50%;\\n\\t\\ttransform: translateX(-50%);\\n\\t\\tdisplay: flex;\\n\\t\\tgap: 10px;\\n\\t}\\n\\n\\t.indicator {\\n\\t\\twidth: 10px;\\n\\t\\theight: 10px;\\n\\t\\tbackground-color: rgba(255,255,255,0.5);\\n\\t\\tborder-radius: 50%;\\n\\t\\tcursor: pointer;\\n\\t\\ttransition: background-color 0.3s ease;\\n\\t}\\n\\n\\t.indicator.active {\\n\\t\\tbackground-color: #ff6b6b;\\n\\t}\\n</style>"],"names":[],"mappings":"AA4DC,iCAAoB,CACnB,QAAQ,CAAE,QAAQ,CAClB,SAAS,CAAE,KAAK,CAChB,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,gBAAgB,CAAE,WAAW,CAC7B,aAAa,CAAE,IAAI,CACnB,QAAQ,CAAE,MACX,CAEA,0BAAa,CACZ,OAAO,CAAE,IAAI,CACb,OAAO,CAAE,CAAC,CACV,UAAU,CAAE,OAAO,CAAC,IAAI,CAAC,WAAW,CACpC,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MAAM,CACnB,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,MACb,CAEA,YAAY,qBAAQ,CACnB,OAAO,CAAE,IAAI,CACb,OAAO,CAAE,CACV,CAEA,gCAAmB,CAClB,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CACb,aAAa,CAAE,GAAG,CAClB,UAAU,CAAE,KAAK,CACjB,aAAa,CAAE,MAAM,CACrB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,OACnB,CAEA,kCAAqB,CACpB,SAAS,CAAE,KACZ,CAEA,wBAAW,CACV,SAAS,CAAE,MAAM,CACjB,UAAU,CAAE,MAAM,CAClB,aAAa,CAAE,IAAI,CACnB,KAAK,CAAE,IACR,CAEA,kBAAK,CACJ,WAAW,CAAE,IAAI,CACjB,KAAK,CAAE,IACR,CAEA,8BAAiB,CAChB,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,GAAG,CACR,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aAAa,CAC9B,SAAS,CAAE,WAAW,IAAI,CAC3B,CAEA,yBAAY,CACX,gBAAgB,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CACjC,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CAAC,IAAI,CAClB,MAAM,CAAE,OAAO,CACf,SAAS,CAAE,MAAM,CACjB,UAAU,CAAE,gBAAgB,CAAC,IAAI,CAAC,IACnC,CAEA,yBAAW,MAAO,CACjB,gBAAgB,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CACjC,CAEA,qCAAwB,CACvB,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,IAAI,CACZ,IAAI,CAAE,GAAG,CACT,SAAS,CAAE,WAAW,IAAI,CAAC,CAC3B,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,IACN,CAEA,wBAAW,CACV,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,gBAAgB,CAAE,KAAK,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,CACvC,aAAa,CAAE,GAAG,CAClB,MAAM,CAAE,OAAO,CACf,UAAU,CAAE,gBAAgB,CAAC,IAAI,CAAC,IACnC,CAEA,UAAU,qBAAQ,CACjB,gBAAgB,CAAE,OACnB"}'
};
const TestimonialSlider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { testimonials } = $$props;
  let currentTestimonialIndex = 0;
  if ($$props.testimonials === void 0 && $$bindings.testimonials && testimonials !== void 0) $$bindings.testimonials(testimonials);
  $$result.css.add(css$1);
  return `<div class="testimonial-slider svelte-utryo6">${each(testimonials, (testimonial, index) => {
    return `<div class="${[
      "testimonial svelte-utryo6",
      index === currentTestimonialIndex ? "active" : ""
    ].join(" ").trim()}"><img${add_attribute("src", testimonial.image, 0)}${add_attribute("alt", testimonial.name, 0)} class="testimonial-image svelte-utryo6"> <div class="testimonial-content svelte-utryo6"><blockquote class="svelte-utryo6">&quot;${escape(testimonial.quote)}&quot;</blockquote> <cite class="svelte-utryo6">- ${escape(testimonial.name)}</cite></div> </div>`;
  })} <div class="slider-controls svelte-utryo6"><button class="nav-button prev svelte-utryo6" aria-label="Previous Testimonial" data-svelte-h="svelte-1phwm7z">❮</button> <button class="nav-button next svelte-utryo6" aria-label="Next Testimonial" data-svelte-h="svelte-1hz7itc">❯</button></div> <div class="testimonial-indicators svelte-utryo6"> ${each(testimonials, (_, index) => {
    return `  <span class="${["indicator svelte-utryo6", index === currentTestimonialIndex ? "active" : ""].join(" ").trim()}"></span>`;
  })}</div> </div>`;
});
const css = {
  code: ":root{--bg-transparent:rgba(255, 255, 255, 0.486);--primary-color:#4CAF50;--text-dark:#000000b6;--text-light:#000000}.page-container.svelte-1t70j6s.svelte-1t70j6s{max-width:1200px;margin:0 auto;padding:2rem;position:relative;overflow:hidden}.logo.svelte-1t70j6s.svelte-1t70j6s{width:20rem}.content-box.svelte-1t70j6s.svelte-1t70j6s{background:var(--bg-transparent);backdrop-filter:blur(10px);border-radius:15px;padding:2rem;margin-bottom:2rem;box-shadow:0 10px 25px rgba(0,0,0,0.1),\n            0 0 20px rgba(75, 175, 80, 0.1);transition:all 0.3s ease}.content-box.svelte-1t70j6s.svelte-1t70j6s:hover{box-shadow:0 15px 30px rgba(0,0,0,0.15),\n            0 0 30px rgba(75, 175, 80, 0.2)}.initial-content.svelte-1t70j6s.svelte-1t70j6s{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;text-align:center;margin-bottom:4rem;gap:2rem}.mission-section.svelte-1t70j6s.svelte-1t70j6s{max-width:800px}.section-title.svelte-1t70j6s.svelte-1t70j6s{color:var(--text-dark);margin-bottom:1.5rem;font-size:2.5rem;text-shadow:0 2px 4px rgba(0,0,0,0.1)}.mission-text.svelte-1t70j6s.svelte-1t70j6s{line-height:1.8;color:var(--text-light);font-size:1.2rem}.support-section.svelte-1t70j6s.svelte-1t70j6s{z-index:10}.support-button.svelte-1t70j6s.svelte-1t70j6s{background-color:var(--primary-color);color:white;border:none;padding:15px 45px;font-size:1.2rem;border-radius:50px;cursor:pointer;transition:all 0.3s ease;box-shadow:0 4px 6px rgba(0,0,0,0.1),\n            0 0 15px rgba(75, 175, 80, 0.3)}.support-button.svelte-1t70j6s.svelte-1t70j6s:hover{background-color:#45a049;transform:translateY(-3px);box-shadow:0 6px 8px rgba(0,0,0,0.15),\n            0 0 25px rgba(75, 175, 80, 0.4)}.scrollable-content.svelte-1t70j6s.svelte-1t70j6s{display:flex;flex-direction:column;gap:4rem}.timeline.svelte-1t70j6s.svelte-1t70j6s{display:flex;justify-content:space-between;align-items:center;position:relative;height:100px;margin-top:2rem}.timeline.svelte-1t70j6s.svelte-1t70j6s::before{content:'';position:absolute;left:0;right:0;top:50%;height:2px;background-color:#ddd;transform:translateY(-50%);z-index:1}.timeline-item.svelte-1t70j6s.svelte-1t70j6s{position:relative;z-index:2;cursor:pointer}.timeline-marker.svelte-1t70j6s.svelte-1t70j6s{width:20px;height:20px;background-color:var(--primary-color);border-radius:50%;position:relative;z-index:3;transition:transform 0.3s ease}.timeline-item.svelte-1t70j6s:hover .timeline-marker.svelte-1t70j6s{transform:scale(1.2)}.timeline-year.svelte-1t70j6s.svelte-1t70j6s{text-align:center;margin-top:0.5rem;font-weight:bold;color:var(--text-dark)}.timeline-popup.svelte-1t70j6s.svelte-1t70j6s{position:fixed;z-index:1000;pointer-events:none}.timeline-popup-content.svelte-1t70j6s.svelte-1t70j6s{background:var(--bg-transparent);backdrop-filter:blur(10px);border-radius:15px;box-shadow:0 10px 25px rgba(0,0,0,0.2),\n            0 0 30px rgba(75, 175, 80, 0.1);display:flex;max-width:500px;overflow:hidden}.timeline-image.svelte-1t70j6s.svelte-1t70j6s{width:200px;height:200px;object-fit:cover}.timeline-details.svelte-1t70j6s.svelte-1t70j6s{padding:1rem}.timeline-details.svelte-1t70j6s h3.svelte-1t70j6s{margin-bottom:0.5rem;color:var(--text-dark)}.timeline-details.svelte-1t70j6s p.svelte-1t70j6s{color:var(--text-light)}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { onMount } from \\"svelte\\";\\nimport Navbar from \\"$lib/components/Navbar.svelte\\";\\nimport BackgroundSlideshow from \\"$lib/components/BackgroundSlideshow.svelte\\";\\nimport FacebookFeed from \\"$lib/components/FacebookFeed.svelte\\";\\nimport TestimonialSlider from \\"$lib/components/TestimonialSlider.svelte\\";\\nconst timelineEvents = [\\n  {\\n    year: 2018,\\n    title: \\"Heartfelt English Founding\\",\\n    description: \\"Emma Thompson and M\\\\xE1rton Nagy establish Heartfelt English with a mission to provide free English education.\\",\\n    image: \\"/timeline/founding.jpg\\"\\n  },\\n  {\\n    year: 2019,\\n    title: \\"First Scholarship Program\\",\\n    description: \\"Launched our inaugural scholarship program, supporting 10 students from underserved communities.\\",\\n    image: \\"/timeline/first-scholarship.jpg\\"\\n  },\\n  {\\n    year: 2020,\\n    title: \\"Online Learning Platform\\",\\n    description: \\"Developed a comprehensive online learning platform to reach students during the global pandemic.\\",\\n    image: \\"/timeline/online-platform.jpg\\"\\n  },\\n  {\\n    year: 2021,\\n    title: \\"International Expansion\\",\\n    description: \\"Expanded our reach to multiple countries, supporting students across different regions.\\",\\n    image: \\"/timeline/international.jpg\\"\\n  },\\n  {\\n    year: 2022,\\n    title: \\"Community Growth\\",\\n    description: \\"Grew our volunteer base to over 50 dedicated teachers and mentors.\\",\\n    image: \\"/timeline/community.jpg\\"\\n  }\\n];\\nconst founders = [\\n  {\\n    name: \\"Emma Thompson\\",\\n    role: \\"Founder & CEO\\",\\n    image: \\"/founders/emma.jpg\\",\\n    quote: \\"Every student deserves a chance to learn English and unlock their potential.\\"\\n  },\\n  {\\n    name: \\"M\\\\xE1rton Nagy\\",\\n    role: \\"Co-Founder\\",\\n    image: \\"/founders/marton.jpg\\",\\n    quote: \\"Education is the most powerful weapon we can use to change the world.\\"\\n  }\\n];\\nconst studentTestimonials = [\\n  {\\n    name: \\"Anna Kov\\\\xE1cs\\",\\n    quote: \\"Heartfelt English gave me the confidence to pursue my dreams internationally.\\",\\n    image: \\"/students/anna.jpg\\"\\n  },\\n  {\\n    name: \\"P\\\\xE9ter Nagy\\",\\n    quote: \\"The scholarship changed my life completely.\\",\\n    image: \\"/students/peter.jpg\\"\\n  }\\n];\\nlet activeEvent = null;\\n<\/script>\\n\\n<Navbar />\\n<BackgroundSlideshow />\\n\\n<div class=\\"page-container\\">\\n    <div class=\\"initial-content\\">\\n        <img \\n            src=\\"/logos/whiteLogo.png\\"\\n            alt=\\"Heartfelt Logo\\"\\n            class=\\"logo\\"\\n        />\\n        <div class=\\"content-box mission-section\\">\\n            <h2 class=\\"section-title\\">Our Mission</h2>\\n            <p class=\\"mission-text\\">\\n                We empower every child to unlock their potential through English learning, mentorship, and connection. Committed to equal opportunities, we help children discover their talents, embrace their strengths, and break the cycle of poverty—fostering brighter futures for themselves and their communities.\\n            </p>\\n        </div>\\n\\n        <div class=\\"support-section\\">\\n            <button class=\\"support-button\\">\\n                Support Our Mission\\n            </button>\\n        </div>\\n    </div>\\n\\n    <div class=\\"scrollable-content\\">\\n        <div class=\\"content-box updates-section\\">\\n            <h2 class=\\"section-title\\">Latest Updates</h2>\\n            <FacebookFeed />\\n        </div>\\n\\n        <div class=\\"content-box testimonials-section\\">\\n            <h2 class=\\"section-title\\">Student Voices</h2>\\n            <TestimonialSlider testimonials={studentTestimonials} />\\n        </div>\\n\\n        <div class=\\"timeline-section\\">\\n            <h2 class=\\"section-title\\">Our Journey</h2>\\n            <div class=\\"timeline\\">\\n                {#each timelineEvents as event}\\n                    <div \\n                        class=\\"timeline-item\\" \\n                        on:mouseenter={() => activeEvent = event}\\n                        on:mouseleave={() => activeEvent = null}\\n                    >\\n                        <div class=\\"timeline-marker\\"></div>\\n                        <div class=\\"timeline-year\\">{event.year}</div>\\n                    </div>\\n                {/each}\\n            </div>\\n\\n            {#if activeEvent}\\n                <div class=\\"timeline-popup\\" \\n                     style=\\"top: {Math.random() * 50}%; left: {Math.random() * 50}%;\\"\\n                >\\n                    <div class=\\"timeline-popup-content\\">\\n                        <img src={activeEvent.image} alt={activeEvent.title} class=\\"timeline-image\\"/>\\n                        <div class=\\"timeline-details\\">\\n                            <h3>{activeEvent.title}</h3>\\n                            <p>{activeEvent.description}</p>\\n                        </div>\\n                    </div>\\n                </div>\\n            {/if}\\n        </div>\\n    </div>\\n</div>\\n\\n<style lang=\\"css\\">\\n    /* Global Styles */\\n    :root {\\n        --bg-transparent: rgba(255, 255, 255, 0.486);\\n        --primary-color: #4CAF50;\\n        --text-dark: #000000b6;\\n        --text-light: #000000;\\n    }\\n\\n    .page-container {\\n        max-width: 1200px;\\n        margin: 0 auto;\\n        padding: 2rem;\\n        position: relative;\\n        overflow: hidden;\\n    }\\n\\n    .logo {\\n        width: 20rem;\\n    }\\n\\n    /* Content Box Styling */\\n    .content-box {\\n        background: var(--bg-transparent);\\n        backdrop-filter: blur(10px);\\n        border-radius: 15px;\\n        padding: 2rem;\\n        margin-bottom: 2rem;\\n        box-shadow: \\n            0 10px 25px rgba(0,0,0,0.1),\\n            0 0 20px rgba(75, 175, 80, 0.1);\\n        transition: all 0.3s ease;\\n    }\\n\\n    .content-box:hover {\\n        box-shadow: \\n            0 15px 30px rgba(0,0,0,0.15),\\n            0 0 30px rgba(75, 175, 80, 0.2);\\n    }\\n\\n    /* Initial Content */\\n    .initial-content {\\n        display: flex;\\n        flex-direction: column;\\n        align-items: center;\\n        justify-content: center;\\n        height: 100vh;\\n        text-align: center;\\n        margin-bottom: 4rem;\\n        gap: 2rem;\\n    }\\n\\n    .mission-section {\\n        max-width: 800px;\\n    }\\n\\n    .section-title {\\n        color: var(--text-dark);\\n        margin-bottom: 1.5rem;\\n        font-size: 2.5rem;\\n        text-shadow: 0 2px 4px rgba(0,0,0,0.1);\\n    }\\n\\n    .mission-text {\\n        line-height: 1.8;\\n        color: var(--text-light);\\n        font-size: 1.2rem;\\n    }\\n\\n    /* Support Button */\\n    .support-section {\\n        z-index: 10;\\n    }\\n\\n    .support-button {\\n        background-color: var(--primary-color);\\n        color: white;\\n        border: none;\\n        padding: 15px 45px;\\n        font-size: 1.2rem;\\n        border-radius: 50px;\\n        cursor: pointer;\\n        transition: all 0.3s ease;\\n        box-shadow: \\n            0 4px 6px rgba(0,0,0,0.1),\\n            0 0 15px rgba(75, 175, 80, 0.3);\\n    }\\n\\n    .support-button:hover {\\n        background-color: #45a049;\\n        transform: translateY(-3px);\\n        box-shadow: \\n            0 6px 8px rgba(0,0,0,0.15),\\n            0 0 25px rgba(75, 175, 80, 0.4);\\n    }\\n\\n    /* Scrollable Content */\\n    .scrollable-content {\\n        display: flex;\\n        flex-direction: column;\\n        gap: 4rem;\\n    }\\n\\n    /* Timeline Styles */\\n    .timeline {\\n        display: flex;\\n        justify-content: space-between;\\n        align-items: center;\\n        position: relative;\\n        height: 100px;\\n        margin-top: 2rem;\\n    }\\n\\n    .timeline::before {\\n        content: '';\\n        position: absolute;\\n        left: 0;\\n        right: 0;\\n        top: 50%;\\n        height: 2px;\\n        background-color: #ddd;\\n        transform: translateY(-50%);\\n        z-index: 1;\\n    }\\n\\n    .timeline-item {\\n        position: relative;\\n        z-index: 2;\\n        cursor: pointer;\\n    }\\n\\n    .timeline-marker {\\n        width: 20px;\\n        height: 20px;\\n        background-color: var(--primary-color);\\n        border-radius: 50%;\\n        position: relative;\\n        z-index: 3;\\n        transition: transform 0.3s ease;\\n    }\\n\\n    .timeline-item:hover .timeline-marker {\\n        transform: scale(1.2);\\n    }\\n\\n    .timeline-year {\\n        text-align: center;\\n        margin-top: 0.5rem;\\n        font-weight: bold;\\n        color: var(--text-dark);\\n    }\\n\\n    /* Timeline Popup */\\n    .timeline-popup {\\n        position: fixed;\\n        z-index: 1000;\\n        pointer-events: none;\\n    }\\n\\n    .timeline-popup-content {\\n        background: var(--bg-transparent);\\n        backdrop-filter: blur(10px);\\n        border-radius: 15px;\\n        box-shadow: \\n            0 10px 25px rgba(0,0,0,0.2),\\n            0 0 30px rgba(75, 175, 80, 0.1);\\n        display: flex;\\n        max-width: 500px;\\n        overflow: hidden;\\n    }\\n\\n    .timeline-image {\\n        width: 200px;\\n        height: 200px;\\n        object-fit: cover;\\n    }\\n\\n    .timeline-details {\\n        padding: 1rem;\\n    }\\n\\n    .timeline-details h3 {\\n        margin-bottom: 0.5rem;\\n        color: var(--text-dark);\\n    }\\n\\n    .timeline-details p {\\n        color: var(--text-light);\\n    }\\n</style>"],"names":[],"mappings":"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"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const timelineEvents = [
    {
      year: 2018,
      title: "Heartfelt English Founding",
      description: "Emma Thompson and Márton Nagy establish Heartfelt English with a mission to provide free English education.",
      image: "/timeline/founding.jpg"
    },
    {
      year: 2019,
      title: "First Scholarship Program",
      description: "Launched our inaugural scholarship program, supporting 10 students from underserved communities.",
      image: "/timeline/first-scholarship.jpg"
    },
    {
      year: 2020,
      title: "Online Learning Platform",
      description: "Developed a comprehensive online learning platform to reach students during the global pandemic.",
      image: "/timeline/online-platform.jpg"
    },
    {
      year: 2021,
      title: "International Expansion",
      description: "Expanded our reach to multiple countries, supporting students across different regions.",
      image: "/timeline/international.jpg"
    },
    {
      year: 2022,
      title: "Community Growth",
      description: "Grew our volunteer base to over 50 dedicated teachers and mentors.",
      image: "/timeline/community.jpg"
    }
  ];
  const studentTestimonials = [
    {
      name: "Anna Kovács",
      quote: "Heartfelt English gave me the confidence to pursue my dreams internationally.",
      image: "/students/anna.jpg"
    },
    {
      name: "Péter Nagy",
      quote: "The scholarship changed my life completely.",
      image: "/students/peter.jpg"
    }
  ];
  $$result.css.add(css);
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} ${validate_component(BackgroundSlideshow, "BackgroundSlideshow").$$render($$result, {}, {}, {})} <div class="page-container svelte-1t70j6s"><div class="initial-content svelte-1t70j6s" data-svelte-h="svelte-5c9mtr"><img src="/logos/whiteLogo.png" alt="Heartfelt Logo" class="logo svelte-1t70j6s"> <div class="content-box mission-section svelte-1t70j6s"><h2 class="section-title svelte-1t70j6s">Our Mission</h2> <p class="mission-text svelte-1t70j6s">We empower every child to unlock their potential through English learning, mentorship, and connection. Committed to equal opportunities, we help children discover their talents, embrace their strengths, and break the cycle of poverty—fostering brighter futures for themselves and their communities.</p></div> <div class="support-section svelte-1t70j6s"><button class="support-button svelte-1t70j6s">Support Our Mission</button></div></div> <div class="scrollable-content svelte-1t70j6s"><div class="content-box updates-section svelte-1t70j6s"><h2 class="section-title svelte-1t70j6s" data-svelte-h="svelte-1e4qnww">Latest Updates</h2> ${validate_component(FacebookFeed, "FacebookFeed").$$render($$result, {}, {}, {})}</div> <div class="content-box testimonials-section svelte-1t70j6s"><h2 class="section-title svelte-1t70j6s" data-svelte-h="svelte-11uvv0f">Student Voices</h2> ${validate_component(TestimonialSlider, "TestimonialSlider").$$render($$result, { testimonials: studentTestimonials }, {}, {})}</div> <div class="timeline-section"><h2 class="section-title svelte-1t70j6s" data-svelte-h="svelte-1wcxsuv">Our Journey</h2> <div class="timeline svelte-1t70j6s">${each(timelineEvents, (event) => {
    return `<div class="timeline-item svelte-1t70j6s"><div class="timeline-marker svelte-1t70j6s"></div> <div class="timeline-year svelte-1t70j6s">${escape(event.year)}</div> </div>`;
  })}</div> ${``}</div></div> </div>`;
});
export {
  Page as default
};