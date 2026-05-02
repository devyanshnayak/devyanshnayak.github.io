import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.Cv8bm4sF.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/Cf6aaqsg.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/CiKc48uR.js","_app/immutable/chunks/Dnl9Rmgs.js","_app/immutable/chunks/69_IOA4Y.js"];
export const stylesheets = ["_app/immutable/assets/0.D4uDlX35.css"];
export const fonts = [];
