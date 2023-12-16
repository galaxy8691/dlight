import babelApi, { parseSync, type types as t } from "@babel/core"
import { type ReactivityParserConfig } from "../types"
import { parseView as pV, type ViewParserConfig } from "@dlightjs/view-parser"
import { parseReactivity as pR } from "../index"

const plugins = ["@babel/plugin-syntax-do-expressions"]
const htmlTags = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "link", "main", "map", "mark", "menu", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "slot", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "acronym", "applet", "basefont", "bgsound", "big", "blink", "center", "dir", "font", "frame", "frameset", "isindex", "keygen", "listing", "marquee", "menuitem", "multicol", "nextid", "nobr", "noembed", "noframes", "param", "plaintext", "rb", "rtc", "spacer", "strike", "tt", "xmp", "animate", "animateMotion", "animateTransform", "circle", "clipPath", "defs", "desc", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "set", "stop", "svg", "switch", "symbol", "text", "textPath", "tspan", "use", "view"]
const subviewNames = ["MySubview", "InnerButton"]

export const availableProperties = ["flag", "count", "doubleCount", "array", "state1", "state2", "state3", "state4"]
const dependencyMap = {
  count: ["flag"],
  doubleCount: ["count", "flag"],
  array: ["count", "flag"],
  state1: ["count", "flag"],
  state2: ["count", "flag", "state1"],
  state3: ["count", "flag", "state1", "state2"],
  state4: ["count", "flag", "state1", "state2", "state3"]
}

const viewConfig: ViewParserConfig = {
  babelApi,
  htmlTags,
  subviewNames
}

const reactivityConfig: ReactivityParserConfig = {
  babelApi,
  availableProperties,
  dependencyMap
}

export function parseCode(code: string) {
  return (parseSync(`function code() {${code}}`, { plugins })!.program.body[0] as t.FunctionDeclaration).body
}

function parseViewFromStatement(statement: t.BlockStatement) {
  return pV(statement, viewConfig)
}

export function parseView(code: string) {
  return parseViewFromStatement(parseCode(code))
}

export function parseReactivity(statement: t.BlockStatement) {
  return pR(parseViewFromStatement(statement), reactivityConfig)[0]
}

export function parse(code: string) {
  return pR(parseView(code), reactivityConfig)[0]
}
