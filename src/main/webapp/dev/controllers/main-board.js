import riot from 'riot';
import * as SandboxUtils from "../sandbox/sandboxUtils";
import '../../js/tags/tags';
import '../../css/main.css';

let tagName = "main-board";

let getTag = SandboxUtils.getTag;


let opts = {};

riot.mount(".custom-tag", tagName, opts);
