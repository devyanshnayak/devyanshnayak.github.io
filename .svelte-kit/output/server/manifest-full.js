export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["about-light.svg","about.svg","background.png","blog-light.svg","blog.svg","contact-light.svg","contact.svg","create-light.svg","create.svg","home-filled (Copy).svg","home-filled.svg","home-light.svg","home.svg","lottie.json","projects-light.svg","projects.svg","robots.txt"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png",".json":"application/json",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.Qkvho3rD.js",app:"_app/immutable/entry/app.CetZxt7R.js",imports:["_app/immutable/entry/start.Qkvho3rD.js","_app/immutable/chunks/CwMVScLF.js","_app/immutable/chunks/Cf6aaqsg.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/WfeGGIX_.js","_app/immutable/entry/app.CetZxt7R.js","_app/immutable/chunks/Cf6aaqsg.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/dlC8nfQS.js","_app/immutable/chunks/CiKc48uR.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/WfeGGIX_.js","_app/immutable/chunks/Dnl9Rmgs.js","_app/immutable/chunks/BOdD1Kq3.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/contact-me",
				pattern: /^\/contact-me\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
