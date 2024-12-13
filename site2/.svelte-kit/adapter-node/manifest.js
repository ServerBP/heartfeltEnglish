export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["backgroundAssets/1.jpg","backgroundAssets/12.jpg","backgroundAssets/13.jpg","backgroundAssets/14.jpg","backgroundAssets/15.jpg","backgroundAssets/16.jpg","backgroundAssets/18.jpg","backgroundAssets/19.jpg","backgroundAssets/2.jpg","backgroundAssets/3.jpg","backgroundAssets/WhatsApp Image 2024-07-04 at 16.04.12_710d6565.jpg","backgroundAssets/WhatsApp Image 2024-07-04 at 16.04.12_7f47fb47.jpg","events/test/1.jpg","events/test/12.jpg","events/test/13.jpg","events/test/14.jpg","events/test/15.jpg","events/test/16.jpg","events/test/18.jpg","events/test/19.jpg","events/test/2.jpg","events/test/3.jpg","events/test/WhatsApp Image 2024-07-04 at 16.04.12_710d6565.jpg","events/test/WhatsApp Image 2024-07-04 at 16.04.12_7f47fb47.jpg","events/test/banner.png","events/test/event.txt","logos/blackLogo.png","logos/whiteLogo.png"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.DtaM6xFm.js","app":"_app/immutable/entry/app.BqmgVL6Q.js","imports":["_app/immutable/entry/start.DtaM6xFm.js","_app/immutable/chunks/entry.D98mNLMS.js","_app/immutable/chunks/scheduler.DrMgE1OL.js","_app/immutable/entry/app.BqmgVL6Q.js","_app/immutable/chunks/preload-helper.C1FmrZbK.js","_app/immutable/chunks/scheduler.DrMgE1OL.js","_app/immutable/chunks/index.DVA8xnAr.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/events/[eventid]",
				pattern: /^\/events\/([^/]+?)\/?$/,
				params: [{"name":"eventid","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

export const prerendered = new Set([]);

export const base = "";