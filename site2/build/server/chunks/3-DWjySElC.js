const load = async ({ params }) => {
  try {
    return {
      eventid: params.eventid
    };
  } catch (e) {
    console.error("Error loading event:", e);
  }
};

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 3;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DUT12aGz.js')).default;
const universal_id = "src/routes/events/[eventid]/+page.ts";
const imports = ["_app/immutable/nodes/3.DKewN5w0.js","_app/immutable/chunks/preload-helper.C1FmrZbK.js","_app/immutable/chunks/scheduler.DrMgE1OL.js","_app/immutable/chunks/index.DVA8xnAr.js","_app/immutable/chunks/Navbar.CRrXDgVW.js","_app/immutable/chunks/stores.fiFax017.js","_app/immutable/chunks/entry.D98mNLMS.js"];
const stylesheets = ["_app/immutable/assets/3.DHdDP--J.css","_app/immutable/assets/Navbar.KpCzoXIL.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=3-DWjySElC.js.map
