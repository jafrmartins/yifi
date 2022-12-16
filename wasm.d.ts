declare namespace wasm_bindgen {
	/* tslint:disable */
	/* eslint-disable */
	/**
	* @param {any} args
	* @returns {Promise<boolean>}
	*/
	export function crawl(args: any): Promise<boolean>;
	/**
	*/
	export class Torrent {
	  free(): void;
	}
	/**
	* YTS Crawling API
	*/
	export class YTSCrawlArgs {
	  free(): void;
	}
	/**
	* YTS Crawling API
	*/
	export class YTSMovieEntry {
	  free(): void;
	}
	
}

declare type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

declare interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_ytscrawlargs_free: (a: number) => void;
  readonly __wbg_torrent_free: (a: number) => void;
  readonly __wbg_ytsmovieentry_free: (a: number) => void;
  readonly crawl: (a: number) => number;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
  readonly __wbindgen_export_2: WebAssembly.Table;
  readonly _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h314b5d1244b45793: (a: number, b: number, c: number) => void;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly wasm_bindgen__convert__closures__invoke2_mut__h6b7705be73ed7368: (a: number, b: number, c: number, d: number) => void;
  readonly __wbindgen_free: (a: number, b: number) => void;
}

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
declare function wasm_bindgen (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
