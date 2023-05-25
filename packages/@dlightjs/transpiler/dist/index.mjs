import*as u from"@babel/types";import*as T from"@babel/core";import ue from"@babel/generator";var d={traverse:T.traverse,generate:n=>ue(n).code,parse:n=>T.parse(n,{plugins:[["@babel/plugin-syntax-typescript",{isTSX:!0}],"@babel/plugin-syntax-jsx","@babel/plugin-syntax-do-expressions",["@babel/plugin-syntax-decorators",{legacy:!0}]]})};function W(n,e,s,t){t.body.includes(s)||t.body.unshift(s),s.value.properties.push(u.objectProperty(u.identifier(n),u.arrayExpression(e.map(r=>u.stringLiteral(r)))))}function B(n,e,s){s.body.includes(e)||s.body.unshift(e),!e.value.properties.map(t=>t.key.name).includes(n)&&e.value.properties.push(u.objectProperty(u.identifier(n),u.newExpression(u.identifier("Map"),[])))}function O(n,e){let s=!1,t=n.parentPath;for(;t&&t.node!==e;){if(u.isArrowFunctionExpression(t.node)){s=!0;break}t=t.parentPath}return s}function fe(n){let e=n.parentPath.node;return u.isAssignmentExpression(e)&&e.left===n.node}function $e(n,e){let s=n.node,t=!1,r=n.parentPath;for(;r&&r.node!==e;){if(u.isAssignmentExpression(r.node)){let o=r.node.left,i=s.type===o.type,a=s.property.name===o.property.name;t=i&&a}r=r.parentPath}return t}function F(n,e){return!O(n,e)&&!fe(n)&&!$e(n,e)}function S(n){return d.parse(n).program.body[0].body}function z(n,e,s){return[u.classMethod("get",u.identifier(n),[],e),u.classMethod("set",u.identifier(n),[u.identifier("value")],s)]}function R(n){let e=n.value;n.value={type:"ArrowFunctionExpression",params:[],body:e}}function K(n){return d.generate(n.expression)}function J(n,e){return u.isMemberExpression(n)&&!n.computed&&n.property===e}function X(n,e){return u.isObjectProperty(n)&&n.key===e}import*as c from"@babel/types";function q(n){let e=/htmlTag\((.+)\)/;return e.test(n.tag)?(n.tag=n.tag.replace(e,"$1"),!0):/^[a-z][a-z0-9]*$/.test(n.tag)?(n.tag=`"${n.tag}"`,!0):!1}function U(n){let e=/tag\((.+)\)/;e.test(n.tag)&&(n.tag=n.tag.replace(e,"$1"))}function H(n){return`${n}
`}function Z(n){return"["+n.map((e,s)=>e.attr.isSubView?`..._$node${s}`:`_$node${s}`).join(", ")+"]"}var g=class{value="";add(e){this.value+=H(e)}shift(e){this.value=H(e)+this.value}addBody(e){this.value+=e.value}};import*as x from"@babel/types";function h(n){return"["+n.map(e=>e.startsWith("...")?e:'"'+e+'"').join(", ")+"]"}function C(){return Math.random().toString(20).slice(2,8)}function G(n,e,s=[]){let t=d.parse(`(${n})`),r=[];return d.traverse(t,{MemberExpression(o){e.includes(o.node.property.name)&&F(o)&&r.push(o.node.property.name)}}),r=[...new Set([...r,...s])],r}function Q(n,e,s=[]){let t=d.parse(`(${n})`),r=[];return d.traverse(t,{Identifier(o){for(let{ids:i,propNames:a}of e)i.includes(o.node.name)&&(O(o)||r.push(...a))}}),r=[...new Set([...r,...s])],r}function Y(n){return n.match(/[_$a-zA-Z][_$a-zA-Z0-9]*/g)??[]}function M(n){let e=d.parse(`(${n})`);return x.isMemberExpression(e.program.body[0].expression)}function ee(n,e,s){let t=[],r=d.parse(e);d.traverse(r,{Identifier(i){t.push(i.node.name)}});let o=d.parse(`function tempFunc() {${n}}`);return d.traverse(o,{Identifier(i){if(t.includes(i.node.name)&&!J(i.parentPath.node,i.node)&&!X(i.parentPath.node,i.node)){let a=x.memberExpression(x.identifier(s),x.identifier(i.node.name));i.replaceWith(a),i.skip()}}}),d.generate(o.program.body[0].body).trim().replace(/(^\{)|(\}$)/g,"")}function te(n){let e=d.parse(`let _ = ${n}`).program.body[0].declarations[0].init;return!!(x.isArrowFunctionExpression(e)||x.isFunctionExpression(e))}var k=class{depChain;subViews;idDepsArr=[];constructor(e,s,t=[]){this.depChain=e,this.subViews=s,this.idDepsArr=t}generate(e){let s=new g;for(let[t,r]of e.entries())s.addBody(this.resolveParserNode(r,t));return s.add(`return ${Z(e)};`),s.value}geneDeps(e){return[...new Set([...G(e,this.depChain),...Q(e,this.idDepsArr)])]}resolveParserNode(e,s){return this.subViews.includes(e.tag)?this.resolveSubView(e,s):e.tag==="env"?this.resolveEnv(e,s):e.tag==="_"?this.resolveExpression(e,s):e.tag==="if"?this.resolveIf(e,s):e.tag==="for"?this.resolveFor(e,s):e.tag==="_$text"?this.resolveText(e,s):q(e)?this.resolveHTML(e,s):(U(e),this.resolveCustom(e,s))}resolveIf(e,s){let t=new g,r=`_$node${s}`;t.add(`const ${r} = new _$.IfNode();`);for(let o of e.attr.conditions){t.add(`${r}._$addCond(() => ${o.condition}, () => {`),t.add(this.generate(o.parserNodes));let i=this.geneDeps(o.condition);if(i.length>0){t.add(`}, this, ${h(i)});`);continue}t.add("});")}return t}resolveFor(e,s){let t=new g,r=e.attr.key,o=e.attr.item,i=e.attr.array,a=`_$node${s}`;t.add(`const ${a} = new _$.ForNode();`);let p=this.geneDeps(i);if(p.length>0){t.add(`${a}._$addNodeFunc((_$key, _$idx, node_for) => {`);let $=o.match(/[_$a-zA-Z][_$a-zA-Z0-9]*/g)??[];t.add(`const ${o} = node_for._$getItem(_$key, _$idx);`);let l=`_$valuedItem${C()}`;t.add(`const ${l} = {};`);for(let P of $)t.add(`${l}.${P} = ${P};`);t.add(`node_for._$listen(this, ()=>node_for._$getItem(_$key, _$idx),             ${h(p)}, (_$item) => {`),t.add(`const ${o} = _$item;`);for(let P of $)t.add(`${l}.${P} = ${P};`);t.add("});");let w=new k(this.depChain,this.subViews,[...this.idDepsArr,{ids:Y(o),propNames:p}]).generate(e.children);w=ee(w,o,l),t.add(w),t.add("});"),r&&(t.add(`${a}._$addKeyFunc(() => {`),t.add("const keys = [];"),t.add(`for (let ${o} of ${i}) {`),t.add(`keys.push(${r});`),t.add("}"),t.add("return keys;"),t.add("});")),t.add(`${a}._$addArrayFunc(this, () => (${i}), ${h(p)});`)}else t.add(`${a}._$addNodess(() => Array.from(${i}).map((${o}) => (() => {`),t.add(this.generate(e.children)),t.add("})()));");return t}resolveText(e,s){let t=new g,r=e.attr._$content,o=this.geneDeps(`${r}`),i=`_$node${s}`;return o.length>0?t.add(`const ${i} = new _$.TextNode(() => ${r}, this, ${h(o)});`):t.add(`const ${i} = new _$.TextNode(${r}, );`),t}resolveHTML(e,s){let t=new g,r=`_$node${s}`;t.add(`const ${r} = new _$.HtmlNode(${e.tag}, );`);for(let{key:o,value:i,nodes:a}of e.attr.props){if(i=this.parsePropNodes(i,a),o==="do"){t.add(`(${i})(${r});`);continue}if(o==="forwardProps"){t.add(`this.forwardProps(${r});`);continue}if(["willAppear","didAppear","willDisappear","didDisappear"].includes(o)){t.add(`${r}._$addLifeCycle(${i}, "${o}");`);continue}o==="_$content"&&(o="innerText");let p=this.geneDeps(i);if(o==="element"){t.add(`const ${r}Element = () => ${i} = ${r}._$el;`),t.add(`${r}Element()`),t.add(`this._$addDeps(${h(p)}, {}, ${r}Element)`);continue}if(p.length>0){t.add(`${r}._$addProp("${o}", () => (${i}), this, ${h(p)});`);continue}t.add(`${r}._$addProp("${o}", ${i});`)}return e.children.length>0&&(t.add(`${r}._$addNodes((() => {`),t.add(this.generate(e.children)),t.add("})())")),t}resolveCustom(e,s){let t=new g,r=`_$node${s}`;t.add(`const ${r} = new (${e.tag})();`);for(let{key:o,value:i,nodes:a}of e.attr.props){if(i=this.parsePropNodes(i,a),o==="do"){t.add(`(${i})(${r});`);continue}if(o==="forwardProps"){t.add(`this.forwardProps(${r});`);continue}if(["willMount","didMount","willUnmount","didUnmount"].includes(o)){t.add(`${r}._$addLifeCycle(${i}, "${o}");`);continue}let p=this.geneDeps(i);if(o==="element"){te(i)?t.add(`const ${r}Element = () => (${i})(${r}._$el);`):t.add(`const ${r}Element = () => ${i} = ${r}._$el;`),t.add(`${r}._$addAfterset(${r}Element);`),t.add(`this._$addDeps(${h(p)}, {}, ${r}Element);`);continue}if(p.length>0){t.add(`${r}._$addProp("${o}", () => (${i}), this, ${h(p)}, ${M(i)});`);continue}t.add(`${r}._$addProp("${o}", ${i});`)}return e.children.length>0&&(t.add(`${r}._$addChildren((() => {`),t.add(this.generate(e.children)),t.add("})())")),t}resolveSubView(e,s){e.attr.isSubView=!0;let t=new g,r=e.attr.props.map(({key:a,value:p,nodes:$})=>({key:a,value:this.parsePropNodes(p,$)})),o=C(),i=[];for(let[a,{key:p,value:$}]of r.entries()){let m=`${p}_${o}`,l=h(this.geneDeps($));t.add(`const ${m} = {value: ${$}, deps: ${l}};`),i.push({key:p,keyWithId:m}),t.add(`const depId${s}_${a} = {};`),t.add(`this._$addDeps(${l}, depId${s}_${a}, () => {${m}.value = ${$}});`)}return t.add(`const _$node${s} = ${e.tag}({${i.map(({key:a,keyWithId:p})=>`${a}: ${p}`).join(", ")}});`),t.add(`_$node${s}[0]._$depObjectIds.push(...[${Object.keys(r).map(a=>`depId${s}_${a}`).join(",")}]);`),t}resolveEnv(e,s){let t=new g,r=`_$node${s}`;t.add(`const ${r} = new _$.EnvNode();`),e.children.length>0&&(t.add(`${r}._$addNodes((() => {`),t.add(this.generate(e.children)),t.add("})())"));for(let{key:o,value:i,nodes:a}of e.attr.props){i=this.parsePropNodes(i,a);let p=this.geneDeps(i);if(p.length>0){t.add(`${r}._$addProp("${o}", () => (${i}), this, ${h(p)}, ${M(i)});`);continue}t.add(`${r}._$addProp("${o}", ${i});`)}return t}resolveExpression(e,s){let t=new g,r=`_$node${s}`;for(let{key:o,value:i,nodes:a}of e.attr.props){if(i=this.parsePropNodes(i,a),o==="_$content"){let $=this.geneDeps(i);$.length>0?t.add(`const ${r} = new _$.ExpressionNode(() => ${i}, this, ${h($)});`):t.add(`const ${r} = new _$.ExpressionNode(${i});`);continue}if(o==="onUpdateNodes"){t.add(`${r}._$onUpdateNodes(${i});`);continue}let p=this.geneDeps(i);if(p.length>0){t.add(`${r}._$addProp("${o}", () => (${i}), this, ${h(p)}, ${M(i)});`);continue}t.add(`${r}._$addProp("${o}", ${i});`)}return t}parsePropNodes(e,s){for(let[t,r]of Object.entries(s)){let o=new g;o.add("((()=>{"),o.add(this.generate(r)),o.add("})())"),e=e.replace('"'+t+'"',o.value)}return e}};function D(n,e,s,t=[]){return new k(e,s,t).generate(n)}import*as f from"@babel/types";function ye(){return Math.random().toString(32).slice(2)}function ne(n,e){if(!e)return{key:n,value:!0,nodes:{}};let s=d.parse(`let _ = ${d.generate(e)}`),t={};return d.traverse(s,{DoExpression(r){let o=r.node,i=ye();t[i]=oe(o.body.body),r.replaceWith(f.stringLiteral(i))}}),{key:n,value:d.generate(s.program.body[0].declarations[0].init),nodes:t}}function me(n){for(;n;)if(n=n.callee?.object,f.isCallExpression(n))return!1;return!0}function ge(n){let e={tag:"",attr:{props:[]},children:[]},s=n;for(;s&&s.callee?.object&&!me(s);){let t=s.arguments[0],r=s.callee.property.name;e.attr.props.unshift(ne(r,t)),s=s.callee.object}return s.arguments.length>0&&e.attr.props.unshift(ne("_$content",s.arguments[0])),e.tag=d.generate(s.callee),e}function he(n){return{tag:"_$text",attr:{_$content:d.generate(n)},children:[]}}function be(n){let e=re(n.tag);Array.isArray(e)||(e=[e]);let s={tag:"_$text",attr:{_$content:d.generate(n.quasi)},children:[]};return[...e,s]}function re(n){return f.isCallExpression(n)?ge(n):f.isStringLiteral(n)||f.isTemplateLiteral(n)?he(n):f.isTaggedTemplateExpression(n)?be(n):{}}function xe(n){let e=d.generate(n.left.declarations[0]),s=d.generate(n.right),t={tag:"for",attr:{item:e,array:s},children:[]},r=n.body.body;return f.isArrayExpression(r[0].expression)&&(t.attr.key=d.generate(r[0].expression.elements[0]),r=r.slice(1)),t.children=I(r),t}function _e(n){return{tag:"if",attr:{conditions:se(n)},children:[]}}function se(n){let e=[],s=d.generate(n.test),t=I(n.consequent.body);return e.push({condition:s,parserNodes:t}),f.isIfStatement(n.alternate)?e.push(...se(n.alternate)):n.alternate&&e.push({condition:!0,parserNodes:I(n.alternate.body)}),e}function I(n){let e=[];for(let s of n)if(f.isExpressionStatement(s)){let t=re(s.expression);Array.isArray(t)||(t=[t]),e.push(...t)}else f.isBlockStatement(s)?e[e.length-1].children=I(s.body):f.isForOfStatement(s)?e.push(xe(s)):f.isIfStatement(s)&&e.push(_e(s));return e}function oe(n){return I(n)}var j=oe;import*as _ from"@babel/types";function ie(n,e){if(!e)return{key:n,value:!0,nodes:{}};let s=d.parse(d.generate(e)),t={};d.traverse(s,{JSXElement(o){let i=C();t[i]=E([o.node]),o.replaceWith(_.stringLiteral(i))}});let r=d.generate(e);return _.isJSXExpressionContainer(e)&&(r=r.replace(/^\{(.+)\}$/,"$1")),r.trim()===""&&(r='""'),{key:n,value:r,nodes:t}}function ve(n){let e=n.openingElement.name.name,s=[];for(let t of n.openingElement.attributes)t=t,s.push(ie(t.name.name,t.value));return{tag:e,attr:{props:s},children:E(n.children)}}function Pe(n){let e=n.value.trim();return e===""?void 0:{tag:"_$text",attr:{_$content:`"${e}"`},children:[]}}function A(n,e){let s=n.openingElement.attributes.find(o=>o.name.name===e);if(!s)return s;let t="",r=s.value;return t=_.isJSXExpressionContainer(r)?d.generate(r.expression):d.generate(r),t}function Ee(n){return{tag:"if",attr:{conditions:[{condition:A(n,"cond"),parserNodes:E(n.children)}]},children:[]}}function Se(n,e){e.attr.conditions.push({condition:A(n,"cond"),parserNodes:E(n.children)})}function we(n,e){e.attr.conditions.push({condition:"true",parserNodes:E(n.children)})}function Ne(n){return{tag:"for",attr:{item:A(n,"let"),array:A(n,"of"),key:A(n,"key")},children:E(n.children)}}function Ce(n){return{tag:"_",attr:{props:[ie("_$content",n)]},children:[]}}function E(n){let e=[];for(let s of n){if(_.isJSXText(s)){let r=Pe(s);r&&e.push(r);continue}if(_.isJSXExpressionContainer(s)){e.push(Ce(s));continue}if(_.isJSXFragment(s)){e.push(...E(s.children));continue}let t=s.openingElement.name.name;if(t==="if"){e.push(Ee(s));continue}if(t==="else-if"){Se(s,e[e.length-1]);continue}if(t==="else"){we(s,e[e.length-1]);continue}if(t==="for"){e.push(Ne(s));continue}e.push(ve(s))}return e}function ke(n){return E([n])}var ae=ke;import*as b from"@babel/types";function de(n,e,s,t){let r=n.key.name;n.key.name=`_$$${r}`;let o=e.body.indexOf(n),i=s.map(v=>`if (${v}.preset) value = ${v}.preset(value, this, "${r}")`).join(`
`),a=S(`
    function ${r}() {
        return this._$$${r}
    }`),p=S(`
    function ${r}(value) {
        ${i}
        if (this._$$${r} === value) return
        this._$$${r} = value
        this._$runDeps("${r}")
    }`),[$,m]=z(r,a,p),l=[$,m];if(t!=="State"){let v=b.classProperty(b.identifier(`_$$$${r}`),b.stringLiteral(`_$${t.toLowerCase().replace("state","")}`));l.unshift(v)}e.body.splice(o+1,0,...l)}function pe(n,e,s){let t=n.key.name,r=e.body.indexOf(n),o=s.toLowerCase(),i=b.classProperty(b.identifier(`_$$${t}`),b.stringLiteral(`_$${o}`));e.body.splice(r,0,i)}function ce(n,e,s){let t=n.key.name,r=d.generate(n.value??b.identifier("undefined"));if(!/^[0-9a-zA-z$_]+$/.test(e)){let o=s.body.indexOf(n),i=e.match(/^[0-9a-zA-z$_]+/)[0];s.body.splice(o,0,b.classProperty(b.identifier(`_$$${t}_${i}`),d.parse(e).program.body[0].expression)),e=`this._$$${t}_${i}`}return n.value=d.parse(`(${e}.func??(typeof ${e} === "function" ? ${e} : (_=>_)))(${r}, this, "${t}")`).program.body[0].expression,e}function De(n,e,s,t=!1){let r;if(t){let o=n.params[0];if(!o||!c.isObjectPattern(o))r=D(j(n.body.body),e,s);else{let a=o.properties.map(p=>p.key.name).map(p=>({ids:[p],propNames:[`...${p}.deps`]}));r=D(j(n.body.body),e,s,a)}}else r=D(j(n.body.body),e,s);n.body=S(`function tmp() { ${r} }`)}function Ie(n,e,s){let t=D(ae(n.value),e,s);n.value=c.arrowFunctionExpression([],S(`function tmp() { ${t} }`))}function Ae(n){let e=n.params[0];if(!e||!c.isObjectPattern(e))return;let s=[];for(let r of e.properties){let o=r.key.name;s.push(o),c.isAssignmentPattern(r.value)&&(r.value.right=c.objectExpression([c.objectProperty(c.identifier("value"),r.value.right),c.objectProperty(c.identifier("deps"),c.arrayExpression())]))}let t=d.parse(`function tmp() ${d.generate(n.body)}`);d.traverse(t,{Identifier(r){s.includes(r.node.name)&&!J(r.parentPath.node,r.node)&&!X(r.parentPath.node,r.node)&&(r.replaceWith(c.memberExpression(c.identifier(r.node.name),c.identifier("value"))),r.skip())}}),n.body=t.program.body[0].body}function V(n,e,s){let t=s==="jsd"?De:Ie,r,o=[];for(let a of n.body)a.decorators?.find(p=>c.isIdentifier(p.expression)&&p.expression.name==="View")?(a.decorators=void 0,o.push(a)):a.key.name==="Body"&&(r=a);let i=o.map(a=>"this."+a.key.name);for(let a of o)Ae(a),t(a,e,i,!0);t(r,e,i)}function Te(n,e){let s=d.parse(n),t=null,r=null,o=null,i=null,a=[];return d.traverse(s,{enter(m){let l=m.node;(c.isClassDeclaration(l)||c.isClassExpression(l))&&c.isIdentifier(l.superClass,{name:"View"})&&(t=l,r=t.body,i=c.classProperty(c.identifier("_$derivedPairs"),c.objectExpression([])),o=c.classProperty(c.identifier("_$deps"),c.objectExpression([])),a=[])},ClassMethod(m){t&&r.body.indexOf(m.node)===r.body.length-1&&V(r,a,e)},ClassProperty(m){if(!t)return;let l=m.node,v=r.body.indexOf(m.node)===r.body.length-1;if(l.decorators?.find(y=>c.isIdentifier(y.expression)&&y.expression.name==="View")??l.key.name==="Body"){v&&V(r,a,e);return}let w=["EnvState","PropState","State","Prop","Env"],P=[],le=(l.decorators??[]).map(y=>{let L=K(y);return w.includes(L)?L:(P.push(ce(l,L,r)),null)}).filter(y=>y),N=[];m.scope.traverse(l,{MemberExpression(y){a.includes(y.node.property.name)&&F(y,t)&&N.push(y.node.property.name)}}),N=[...new Set(N)],N.length>0&&(W(l.key.name,N,i,r),B(l.key.name,o,r),R(l),a.push(l.key.name));for(let y of le){if(["EnvState","PropState","State"].includes(y)){a.push(l.key.name),B(l.key.name,o,r),de(l,r,P,y);break}if(["Prop","Env"].includes(y)){a.push(l.key.name),B(l.key.name,o,r),pe(l,r,y);break}}l.decorators=null,v&&V(r,a,e)}}),`import * as _$ from '@dlightjs/dlight';
`+d.generate(s)}export{Te as parseDlightFile};
