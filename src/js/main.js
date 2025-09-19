import {createConsole} from "ext:runjs/js/console.js";
import {createFetch} from "ext:runjs/js/fetch.js";
import {createFs} from "ext:runjs/js/fs.js";

const { core } = Deno;
const { ops } = core;


globalThis.console = createConsole(core)

globalThis.runjs = {
    ...createFs(ops),
    fetch: createFetch(ops),
}
