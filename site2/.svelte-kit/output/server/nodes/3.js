import * as universal from '../entries/pages/events/_eventid_/_page.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/events/_eventid_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/events/[eventid]/+page.ts";
export const imports = ["_app/immutable/nodes/3.DKewN5w0.js","_app/immutable/chunks/preload-helper.C1FmrZbK.js","_app/immutable/chunks/scheduler.DrMgE1OL.js","_app/immutable/chunks/index.DVA8xnAr.js","_app/immutable/chunks/Navbar.CRrXDgVW.js","_app/immutable/chunks/stores.fiFax017.js","_app/immutable/chunks/entry.D98mNLMS.js"];
export const stylesheets = ["_app/immutable/assets/3.DHdDP--J.css","_app/immutable/assets/Navbar.KpCzoXIL.css"];
export const fonts = [];
