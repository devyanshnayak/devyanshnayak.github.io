
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	type MatcherParam<M> = M extends (param : string) => param is (infer U extends string) ? U : string;

	export interface AppTypes {
		RouteId(): "/" | "/about" | "/contact-me" | "/projects";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/about": Record<string, never>;
			"/contact-me": Record<string, never>;
			"/projects": Record<string, never>
		};
		Pathname(): "/" | "/about" | "/contact-me" | "/projects";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/about-light.svg" | "/about.svg" | "/background.png" | "/blog-light.svg" | "/blog.svg" | "/contact-light.svg" | "/contact.svg" | "/create-light.svg" | "/create.svg" | "/home-filled (Copy).svg" | "/home-filled.svg" | "/home-light.svg" | "/home.svg" | "/lottie.json" | "/projects-light.svg" | "/projects.svg" | "/robots.txt" | string & {};
	}
}