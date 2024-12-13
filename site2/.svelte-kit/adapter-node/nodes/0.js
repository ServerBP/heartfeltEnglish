import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.CMn9AIpB.js","_app/immutable/chunks/scheduler.DrMgE1OL.js","_app/immutable/chunks/index.DVA8xnAr.js"];
export const stylesheets = [];
export const fonts = [];
