"use strict";var $e=Object.create;var T=Object.defineProperty;var he=Object.getOwnPropertyDescriptor;var be=Object.getOwnPropertyNames;var xe=Object.getPrototypeOf,ve=Object.prototype.hasOwnProperty;var _e=(t,e)=>{for(var r in e)T(t,r,{get:e[r],enumerable:!0})},K=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of be(e))!ve.call(t,s)&&s!==r&&T(t,s,{get:()=>e[s],enumerable:!(n=he(e,s))||n.enumerable});return t};var P=(t,e,r)=>(r=t!=null?$e(xe(t)):{},K(e||!t||!t.__esModule?T(r,"default",{value:t,enumerable:!0}):r,t)),Pe=t=>K(T({},"__esModule",{value:!0}),t);var We={};_e(We,{parseDlightFile:()=>ge});module.exports=Pe(We);var c=P(require("@babel/types"));var B=P(require("@babel/core")),H=P(require("@babel/generator")),d={traverse:B.traverse,generate:t=>(0,H.default)(t).code,parse:t=>B.parse(t,{plugins:[["@babel/plugin-syntax-typescript",{isTSX:!0}],"@babel/plugin-syntax-jsx","@babel/plugin-syntax-do-expressions",["@babel/plugin-syntax-decorators",{legacy:!0}]]})};function q(t,e,r,n){n.body.includes(r)||n.body.unshift(r),r.value.properties.push(c.objectProperty(c.identifier(t),c.arrayExpression(e.map(s=>c.stringLiteral(s)))))}function F(t,e,r){r.body.includes(e)||r.body.unshift(e),!e.value.properties.map(n=>n.key.name).includes(t)&&e.value.properties.push(c.objectProperty(c.identifier(t),c.newExpression(c.identifier("Map"),[])))}function W(t,e){let r=!1,n=t.parentPath;for(;n&&n.node!==e;){if(c.isArrowFunctionExpression(n.node)){r=!0;break}n=n.parentPath}return r}function Se(t){let e=t.parentPath.node;return c.isAssignmentExpression(e)&&e.left===t.node}function Ee(t,e){let r=t.node,n=!1,s=t.parentPath;for(;s&&s.node!==e;){if(c.isAssignmentExpression(s.node)){let i=s.node.left,o=r.type===i.type,a=r.property.name===i.property.name;n=o&&a}s=s.parentPath}return n}function J(t,e){return!W(t,e)&&!Se(t)&&!Ee(t,e)}function E(t){return d.parse(t).program.body[0].body}function R(t,e,r){return[c.classMethod("get",c.identifier(t),[],e),c.classMethod("set",c.identifier(t),[c.identifier("value")],r)]}function U(t){let e=t.value;t.value={type:"ArrowFunctionExpression",params:[],body:e}}function Z(t){return d.generate(t.expression)}function X(t,e){return c.isMemberExpression(t)&&!t.computed&&t.property===e}function M(t,e){return c.isObjectProperty(t)&&t.key===e}var l=P(require("@babel/types"));function Q(t){let e=/html\((.+)\)/;return e.test(t.tag)?(t.tag=t.tag.replace(e,"$1"),!0):/^[a-z][a-z0-9]*$/.test(t.tag)?(t.tag=`"${t.tag}"`,!0):!1}function Y(t){let e=/tag\((.+)\)/;e.test(t.tag)&&(t.tag=t.tag.replace(e,"$1"))}function G(t){return`${t}
`}function ee(t){return"["+t.map((e,r)=>e.attr.isSubView?`..._$node${r}`:`_$node${r}`).join(", ")+"]"}var $=class{value="";add(e){this.value+=G(e)}shift(e){this.value=G(e)+this.value}addBody(e){this.value+=e.value}};var h=P(require("@babel/types"));function b(t){return"["+t.map(e=>e.startsWith("...")?e:'"'+e+'"').join(", ")+"]"}function k(){return Math.random().toString(20).slice(2,8)}function te(t,e,r=[]){let n=d.parse(`(${t})`),s=[];return d.traverse(n,{MemberExpression(i){e.includes(i.node.property.name)&&J(i)&&s.push(i.node.property.name)}}),s=[...new Set([...s,...r])],s}function ne(t,e,r=[]){let n=d.parse(`(${t})`),s=[];return d.traverse(n,{Identifier(i){for(let{ids:o,propNames:a}of e)o.includes(i.node.name)&&(W(i)||s.push(...a))}}),s=[...new Set([...s,...r])],s}function re(t){return t.match(/[_$a-zA-Z][_$a-zA-Z0-9]*/g)??[]}function j(t){let e=d.parse(`(${t})`);return h.isMemberExpression(e.program.body[0].expression)}function se(t,e,r){let n=[],s=d.parse(e);d.traverse(s,{Identifier(o){n.push(o.node.name)}});let i=d.parse(`function tempFunc() {${t}}`);return d.traverse(i,{Identifier(o){if(n.includes(o.node.name)&&!X(o.parentPath.node,o.node)&&!M(o.parentPath.node,o.node)){let a=h.memberExpression(h.identifier(r),h.identifier(o.node.name));o.replaceWith(a),o.skip()}}}),d.generate(i.program.body[0].body).trim().replace(/(^\{)|(\}$)/g,"")}function oe(t){let e=d.parse(`let _ = ${t}`).program.body[0].declarations[0].init;return!!(h.isArrowFunctionExpression(e)||h.isFunctionExpression(e))}var C=class{depChain;subViews;idDepsArr=[];constructor(e,r,n=[]){this.depChain=e,this.subViews=r,this.idDepsArr=n}generate(e){let r=new $;for(let[n,s]of e.entries())r.addBody(this.resolveParserNode(s,n));return r.add(`return ${ee(e)}`),r.value}geneDeps(e){return[...new Set([...te(e,this.depChain),...ne(e,this.idDepsArr)])]}resolveParserNode(e,r){return this.subViews.includes(e.tag)?this.resolveSubView(e,r):e.tag==="env"?this.resolveEnv(e,r):e.tag==="_"?this.resolveExpression(e,r):e.tag==="if"?this.resolveIf(e,r):e.tag==="for"?this.resolveFor(e,r):e.tag==="_$text"?this.resolveText(e,r):Q(e)?this.resolveHTML(e,r):(Y(e),this.resolveCustom(e,r))}resolveIf(e,r){let n=new $,s=`_$node${r}`;n.add(`const ${s} = new _$.IfNode()`);for(let i of e.attr.conditions){n.add(`${s}._$addCond(() => ${i.condition}, () => {`),n.add(this.generate(i.parserNodes));let o=this.geneDeps(i.condition);if(o.length>0){n.add(`}, this, ${b(o)})`);continue}n.add("})")}return n}resolveFor(e,r){let n=new $,s=e.attr.key,i=e.attr.item,o=e.attr.array,a=`_$node${r}`;n.add(`const ${a} = new _$.ForNode()`);let p=this.geneDeps(o);if(p.length>0){n.add(`${a}._$addNodeFunc((_$key, _$idx, node_for) => {`);let y=i.match(/[_$a-zA-Z][_$a-zA-Z0-9]*/g)??[];n.add(`const ${i} = node_for._$getItem(_$key, _$idx)`);let u=`_$valuedItem${k()}`;n.add(`const ${u} = {}`);for(let _ of y)n.add(`${u}.${_} = ${_}`);n.add(`node_for._$listen(this, ()=>node_for._$getItem(_$key, _$idx),             ${b(p)}, (_$item) => {`),n.add(`const ${i} = _$item`);for(let _ of y)n.add(`${u}.${_} = ${_}`);n.add("})");let N=new C(this.depChain,this.subViews,[...this.idDepsArr,{ids:re(i),propNames:p}]).generate(e.children);N=se(N,i,u),n.add(N),n.add("})"),s&&(n.add(`${a}._$addKeyFunc(() => {`),n.add("const keys = []"),n.add(`for (let ${i} of ${o}) {`),n.add(`keys.push(${s})`),n.add("}"),n.add("return keys"),n.add("})")),n.add(`${a}._$addArrayFunc(this, () => (${o}), ${b(p)})`)}else n.add(`${a}._$addNodess(() => Array.from(${o}).map((${i}) => (() => {`),n.add(this.generate(e.children)),n.add("})()))");return n}resolveText(e,r){let n=new $,s=e.attr._$content,i=this.geneDeps(`${s}`),o=`_$node${r}`;return i.length>0?n.add(`const ${o} = new _$.TextNode(() => ${s}, this, ${b(i)})`):n.add(`const ${o} = new _$.TextNode(${s}, )`),n}resolveHTML(e,r){let n=new $,s=`_$node${r}`;n.add(`const ${s} = new _$.HtmlNode(${e.tag}, )`);for(let{key:i,value:o,nodes:a}of e.attr.props){if(o=this.parsePropNodes(o,a),i==="element"){n.add(`${o} = ${s}._$el`);continue}if(["willAppear","didAppear","willDisappear","didDisappear"].includes(i)){n.add(`${s}._$addLifeCycle(${o}, "${i}")`);continue}i==="_$content"&&(i="innerText");let p=this.geneDeps(o);if(p.length>0){n.add(`${s}._$addProp("${i}", () => (${o}), this, ${b(p)})`);continue}n.add(`${s}._$addProp("${i}", ${o})`)}return e.children.length>0&&(n.add(`${s}._$addNodes((() => {`),n.add(this.generate(e.children)),n.add("})())")),n}resolveCustom(e,r){let n=new $,s=`_$node${r}`;n.add(`const ${s} = new (${e.tag})()`);for(let{key:i,value:o,nodes:a}of e.attr.props){if(o=this.parsePropNodes(o,a),i==="element"){oe(o)?n.add(`${s}._$addAfterset(() => (${o})(${s}._$el))`):n.add(`${s}._$addAfterset(() => ${o} = ${s}._$el)`);continue}if(["willMount","didMount","willUnmount","didUnmount"].includes(i)){n.add(`${s}._$addLifeCycle(${o}, "${i}")`);continue}let p=this.geneDeps(o);if(p.length>0){n.add(`${s}._$addProp("${i}", () => (${o}), this, ${b(p)}, ${j(o)})`);continue}n.add(`${s}._$addProp("${i}", ${o})`)}return e.children.length>0&&(n.add(`${s}._$addChildren((() => {`),n.add(this.generate(e.children)),n.add("})())")),n}resolveSubView(e,r){e.attr.isSubView=!0;let n=new $,s=e.attr.props.map(({key:a,value:p,nodes:y})=>({key:a,value:this.parsePropNodes(p,y)})),i=k(),o=[];for(let{key:a,value:p}of s){let y=`${a}_${i}`,g=b(this.geneDeps(p));n.add(`const ${y} = {value: ${p}, deps: ${g}}`),o.push({key:a,keyWithId:y,depsStr:g,value:p})}n.add(`const _$node${r} = ${e.tag}({${o.map(({key:a,keyWithId:p})=>`${a}: ${p}`).join(", ")}})`),n.add(`if (_$node${r}.length > 0) {`);for(let{keyWithId:a,depsStr:p,value:y}of o)n.add("const depId = {}"),n.add(`this._$addDeps(${p}, depId, () => {console.log("called, ${y}");${a}.value = ${y}})`),n.add(`_$node${r}[0]._$depObjectIds.push(depId)`);return n.add("}"),n}resolveEnv(e,r){let n=new $,s=`_$node${r}`;n.add(`const ${s} = new _$.EnvNode()`),e.children.length>0&&(n.add(`${s}._$addNodes((() => {`),n.add(this.generate(e.children)),n.add("})())"));for(let{key:i,value:o,nodes:a}of e.attr.props){o=this.parsePropNodes(o,a);let p=this.geneDeps(o);if(p.length>0){n.add(`${s}._$addProp("${i}", () => (${o}), this, ${b(p)}, ${j(o)})`);continue}n.add(`${s}._$addProp("${i}", ${o})`)}return n}resolveExpression(e,r){let n=new $,s=`_$node${r}`;for(let{key:i,value:o,nodes:a}of e.attr.props){if(o=this.parsePropNodes(o,a),i==="_$content"){let y=this.geneDeps(o);y.length>0?n.add(`const ${s} = new _$.ExpressionNode(() => ${o}, this, ${b(y)})`):n.add(`const ${s} = new _$.ExpressionNode(${o}, )`);continue}if(i==="onUpdateNodes"){n.add(`${s}._$onUpdateNodes(${o})`);continue}let p=this.geneDeps(o);if(p.length>0){n.add(`${s}._$addProp("${i}", () => (${o}), this, ${b(p)}, ${j(o)})`);continue}n.add(`${s}._$addProp("${i}", ${o})`)}return n}parsePropNodes(e,r){for(let[n,s]of Object.entries(r)){let i=new $;i.add("((()=>{"),i.add(this.generate(s)),i.add("})())"),e=e.replace('"'+n+'"',i.value)}return e}};function I(t,e,r,n=[]){return new C(e,r,n).generate(t)}var f=P(require("@babel/types"));function Ne(){return Math.random().toString(32).slice(2)}function ie(t,e){if(!e)return{key:t,value:!0,nodes:{}};let r=d.parse(`let _ = ${d.generate(e)}`),n={};return d.traverse(r,{DoExpression(s){let i=s.node,o=Ne();n[o]=pe(i.body.body),s.replaceWith(f.stringLiteral(o))}}),{key:t,value:d.generate(r.program.body[0].declarations[0].init),nodes:n}}function we(t){let e={tag:"",attr:{props:[]},children:[]},r=t;for(;r&&r.callee?.object&&!f.isThisExpression(r.callee?.object);){let n=r.arguments[0],s=r.callee.property.name;e.attr.props.unshift(ie(s,n)),r=r.callee.object}return r.arguments.length>0&&e.attr.props.unshift(ie("_$content",r.arguments[0])),e.tag=d.generate(r.callee),e}function ke(t){return{tag:"_$text",attr:{_$content:d.generate(t)},children:[]}}function Ce(t){let e=ae(t.tag);Array.isArray(e)||(e=[e]);let r={tag:"_$text",attr:{_$content:d.generate(t.quasi)},children:[]};return[...e,r]}function ae(t){return f.isCallExpression(t)?we(t):f.isStringLiteral(t)||f.isTemplateLiteral(t)?ke(t):f.isTaggedTemplateExpression(t)?Ce(t):{}}function Ie(t){let e=d.generate(t.left.declarations[0]),r=d.generate(t.right),n={tag:"for",attr:{item:e,array:r},children:[]},s=t.body.body;return f.isArrayExpression(s[0].expression)&&(n.attr.key=d.generate(s[0].expression.elements[0]),s=s.slice(1)),n.children=D(s),n}function De(t){return{tag:"if",attr:{conditions:de(t)},children:[]}}function de(t){let e=[],r=d.generate(t.test),n=D(t.consequent.body);return e.push({condition:r,parserNodes:n}),f.isIfStatement(t.alternate)?e.push(...de(t.alternate)):t.alternate&&e.push({condition:!0,parserNodes:D(t.alternate.body)}),e}function D(t){let e=[];for(let r of t)if(f.isExpressionStatement(r)){let n=ae(r.expression);Array.isArray(n)||(n=[n]),e.push(...n)}else f.isBlockStatement(r)?e[e.length-1].children=D(r.body):f.isForOfStatement(r)?e.push(Ie(r)):f.isIfStatement(r)&&e.push(De(r));return e}function pe(t){return D(t)}var L=pe;var x=P(require("@babel/types"));function le(t,e){if(!e)return{key:t,value:!0,nodes:{}};let r=d.parse(d.generate(e)),n={};d.traverse(r,{JSXElement(i){let o=k();n[o]=S([i.node]),i.replaceWith(x.stringLiteral(o))}});let s=d.generate(e);return x.isJSXExpressionContainer(e)&&(s=s.replace(/^\{(.+)\}$/,"$1")),s.trim()===""&&(s='""'),{key:t,value:s,nodes:n}}function Ae(t){let e=t.openingElement.name.name,r=[];for(let n of t.openingElement.attributes)n=n,r.push(le(n.name.name,n.value));return{tag:e,attr:{props:r},children:S(t.children)}}function Te(t){let e=t.value.trim();return e===""?void 0:{tag:"_$text",attr:{_$content:`"${e}"`},children:[]}}function A(t,e){let r=t.openingElement.attributes.find(i=>i.name.name===e);if(!r)return r;let n="",s=r.value;return n=x.isJSXExpressionContainer(s)?d.generate(s.expression):d.generate(s),n}function Be(t){return{tag:"if",attr:{conditions:[{condition:A(t,"cond"),parserNodes:S(t.children)}]},children:[]}}function Fe(t,e){e.attr.conditions.push({condition:A(t,"cond"),parserNodes:S(t.children)})}function Je(t,e){e.attr.conditions.push({condition:"true",parserNodes:S(t.children)})}function Xe(t){return{tag:"for",attr:{item:A(t,"let"),array:A(t,"of"),key:A(t,"key")},children:S(t.children)}}function Me(t){return{tag:"_",attr:{props:[le("_$content",t)]},children:[]}}function S(t){let e=[];for(let r of t){if(x.isJSXText(r)){let s=Te(r);s&&e.push(s);continue}if(x.isJSXExpressionContainer(r)){e.push(Me(r));continue}if(x.isJSXFragment(r)){e.push(...S(r.children));continue}let n=r.openingElement.name.name;if(n==="if"){e.push(Be(r));continue}if(n==="else-if"){Fe(r,e[e.length-1]);continue}if(n==="else"){Je(r,e[e.length-1]);continue}if(n==="for"){e.push(Xe(r));continue}e.push(Ae(r))}return e}function je(t){return S([t])}var ce=je;var v=P(require("@babel/types"));function ue(t,e,r){let n=t.key.name;t.key.name=`_$$${n}`;let s=e.body.indexOf(t),i=r.map(g=>`if (${g}.preset) value = ${g}.preset(value, d=>this.${n}=d)`).join(`
`),o=E(`
    function ${n}() {
        return this._$$${n}
    }`),a=E(`
    function ${n}(value) {
        ${i}
        if (this._$$${n} === value) return
        this._$$${n} = value
        this._$runDeps("${n}")
    }`),[p,y]=R(n,o,a);e.body.splice(s+1,0,p,y)}function fe(t,e,r){let n=t.key.name,s=e.body.indexOf(t),i=r.toLowerCase(),o=v.classProperty(v.identifier(`_$$${n}`),v.stringLiteral(`_$${i}`));e.body.splice(s,0,o)}function ye(t,e,r){let n=t.key.name,s=d.generate(t.value??v.identifier("undefined"));if(!/^[0-9a-zA-z$_]+$/.test(e)){let i=r.body.indexOf(t),o=e.match(/^[0-9a-zA-z$_]+/)[0];r.body.splice(i,0,v.classProperty(v.identifier(`_$$${n}_${o}`),d.parse(e).program.body[0].expression)),e=`this._$$${n}_${o}`}return t.value=d.parse(`(${e}.func??(typeof ${e} === "function" ? ${e} : (_=>_)))(${s}, (_)=>this.${t.key.name}=_)`).program.body[0].expression,e}function Le(t,e,r,n=!1){let s;if(n){let i=t.params[0];if(!i||!l.isObjectPattern(i))s=I(L(t.body.body),e,r);else{let a=i.properties.map(p=>p.key.name).map(p=>({ids:[p],propNames:[`...${p}.deps`]}));s=I(L(t.body.body),e,r,a)}}else s=I(L(t.body.body),e,r);t.body=E(`function tmp() { ${s} }`)}function Oe(t,e,r){let n=I(ce(t.value),e,r);t.value=l.arrowFunctionExpression([],E(`function tmp() { ${n} }`))}function Ve(t){let e=t.params[0];if(!e||!l.isObjectPattern(e))return;let r=[];for(let s of e.properties){let i=s.key.name;r.push(i),l.isAssignmentPattern(s.value)&&(s.value.right=l.objectExpression([l.objectProperty(l.identifier("value"),s.value.right),l.objectProperty(l.identifier("deps"),l.arrayExpression())]))}let n=d.parse(`function tmp() ${d.generate(t.body)}`);d.traverse(n,{Identifier(s){r.includes(s.node.name)&&!X(s.parentPath.node,s.node)&&!M(s.parentPath.node,s.node)&&(s.replaceWith(l.memberExpression(l.identifier(s.node.name),l.identifier("value"))),s.skip())}}),t.body=n.program.body[0].body}function z(t,e,r){let n=r==="jsd"?Le:Oe,s,i=[];for(let a of t.body)a.decorators?.find(p=>l.isIdentifier(p.expression)&&p.expression.name==="View")?(a.decorators=void 0,i.push(a)):a.key.name==="Body"&&(s=a);let o=i.map(a=>"this."+a.key.name);for(let a of i)Ve(a),n(a,e,o,!0);n(s,e,o)}function ge(t,e){let r=d.parse(t),n=null,s=null,i=null,o=null,a=[];return d.traverse(r,{ClassDeclaration(g){let u=g.node;if(l.isIdentifier(u.superClass,{name:"View"})){n=u,s=n.body,s.body.unshift(l.classProperty(l.identifier("_$tag"),l.stringLiteral(n.id.name))),o=l.classProperty(l.identifier("_$derivedPairs"),l.objectExpression([])),i=l.classProperty(l.identifier("_$deps"),l.objectExpression([])),a=[];return}},ClassMethod(g){n&&s.body.indexOf(g.node)===s.body.length-1&&z(s,a,e)},ClassProperty(g){if(!n)return;let u=g.node,O=s.body.indexOf(g.node)===s.body.length-1;if(u.decorators?.find(m=>l.isIdentifier(m.expression)&&m.expression.name==="View")||u.key.name==="Body"){O&&z(s,a,e);return}let N=["EnvState","PropState","State","Prop","Env"],_=[],me=(u.decorators??[]).map(m=>{let V=Z(m);if(N.includes(V))return V;_.push(ye(u,V,s))}).filter(m=>m),w=[];g.scope.traverse(u,{MemberExpression(m){a.includes(m.node.property.name)&&J(m,n)&&w.push(m.node.property.name)}}),w=[...new Set(w)],w.length>0&&(q(u.key.name,w,o,s),F(u.key.name,i,s),U(u),a.push(u.key.name));for(let m of me){if(["EnvState","PropState","State"].includes(m)){a.push(u.key.name),F(u.key.name,i,s),ue(u,s,_);break}if(["Prop","Env"].includes(m)){a.push(u.key.name),F(u.key.name,i,s),fe(u,s,m);break}}u.decorators=null,O&&z(s,a,e)}}),`import * as _$ from '@dlightjs/dlight';
`+d.generate(r)}0&&(module.exports={parseDlightFile});
