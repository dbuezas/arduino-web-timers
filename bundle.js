"use strict";(()=>{var PA=Object.create;var am=Object.defineProperty;var EA=Object.getOwnPropertyDescriptor;var IA=Object.getOwnPropertyNames;var wA=Object.getPrototypeOf,RA=Object.prototype.hasOwnProperty;var aa=(e,t)=>()=>(e&&(t=e(e=0)),t);var v=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var SA=(e,t,r,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of IA(t))!RA.call(e,n)&&n!==r&&am(e,n,{get:()=>t[n],enumerable:!(o=EA(t,n))||o.enumerable});return e};var N=(e,t,r)=>(r=e!=null?PA(wA(e)):{},SA(t||!e||!e.__esModule?am(r,"default",{value:e,enumerable:!0}):r,e));function Gt(e,t){for(var r in t)e[r]=t[r];return e}function hm(e){var t=e.parentNode;t&&t.removeChild(e)}function l(e,t,r){var o,n,a,s={};for(a in t)a=="key"?o=t[a]:a=="ref"?n=t[a]:s[a]=t[a];if(arguments.length>2&&(s.children=arguments.length>3?No.call(arguments,2):r),typeof e=="function"&&e.defaultProps!=null)for(a in e.defaultProps)s[a]===void 0&&(s[a]=e.defaultProps[a]);return Ao(e,s,o,n,null)}function Ao(e,t,r,o,n){var a={type:e,props:t,key:r,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:n??++fm};return n==null&&j.vnode!=null&&j.vnode(a),a}function Ue(){return{current:null}}function c(e){return e.children}function q(e,t){this.props=e,this.context=t}function Do(e,t){if(t==null)return e.__?Do(e.__,e.__.__k.indexOf(e)+1):null;for(var r;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null)return r.__e;return typeof e.type=="function"?Do(e):null}function gm(e){var t,r;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null){e.__e=e.__c.base=r.__e;break}return gm(e)}}function gl(e){(!e.__d&&(e.__d=!0)&&kr.push(e)&&!ua.__r++||sm!==j.debounceRendering)&&((sm=j.debounceRendering)||pm)(ua)}function ua(){var e,t,r,o,n,a,s,u;for(kr.sort(hl);e=kr.shift();)e.__d&&(t=kr.length,o=void 0,n=void 0,s=(a=(r=e).__v).__e,(u=r.__P)&&(o=[],(n=Gt({},a)).__v=a.__v+1,Cl(u,a,n,r.__n,u.ownerSVGElement!==void 0,a.__h!=null?[s]:null,o,s??Do(a),a.__h),ym(o,a),a.__e!=s&&gm(a)),kr.length>t&&kr.sort(hl));ua.__r=0}function Cm(e,t,r,o,n,a,s,u,f,p){var d,h,m,g,C,x,y,O=o&&o.__k||mm,_=O.length;for(r.__k=[],d=0;d<t.length;d++)if((g=r.__k[d]=(g=t[d])==null||typeof g=="boolean"||typeof g=="function"?null:typeof g=="string"||typeof g=="number"||typeof g=="bigint"?Ao(null,g,null,null,g):Array.isArray(g)?Ao(c,{children:g},null,null,null):g.__b>0?Ao(g.type,g.props,g.key,g.ref?g.ref:null,g.__v):g)!=null){if(g.__=r,g.__b=r.__b+1,(m=O[d])===null||m&&g.key==m.key&&g.type===m.type)O[d]=void 0;else for(h=0;h<_;h++){if((m=O[h])&&g.key==m.key&&g.type===m.type){O[h]=void 0;break}m=null}Cl(e,g,m=m||sa,n,a,s,u,f,p),C=g.__e,(h=g.ref)&&m.ref!=h&&(y||(y=[]),m.ref&&y.push(m.ref,null,g),y.push(h,g.__c||C,g)),C!=null?(x==null&&(x=C),typeof g.type=="function"&&g.__k===m.__k?g.__d=f=vm(g,f,e):f=xm(e,g,m,O,C,f),typeof r.type=="function"&&(r.__d=f)):f&&m.__e==f&&f.parentNode!=e&&(f=Do(m))}for(r.__e=x,d=_;d--;)O[d]!=null&&(typeof r.type=="function"&&O[d].__e!=null&&O[d].__e==r.__d&&(r.__d=_m(o).nextSibling),Tm(O[d],O[d]));if(y)for(d=0;d<y.length;d++)Om(y[d],y[++d],y[++d])}function vm(e,t,r){for(var o,n=e.__k,a=0;n&&a<n.length;a++)(o=n[a])&&(o.__=e,t=typeof o.type=="function"?vm(o,t,r):xm(r,o,o,n,o.__e,t));return t}function St(e,t){return t=t||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(r){St(r,t)}):t.push(e)),t}function xm(e,t,r,o,n,a){var s,u,f;if(t.__d!==void 0)s=t.__d,t.__d=void 0;else if(r==null||n!=a||n.parentNode==null)e:if(a==null||a.parentNode!==e)e.appendChild(n),s=null;else{for(u=a,f=0;(u=u.nextSibling)&&f<o.length;f+=1)if(u==n)break e;e.insertBefore(n,a),s=a}return s!==void 0?s:n.nextSibling}function _m(e){var t,r,o;if(e.type==null||typeof e.type=="string")return e.__e;if(e.__k){for(t=e.__k.length-1;t>=0;t--)if((r=e.__k[t])&&(o=_m(r)))return o}return null}function NA(e,t,r,o,n){var a;for(a in r)a==="children"||a==="key"||a in t||la(e,a,null,r[a],o);for(a in t)n&&typeof t[a]!="function"||a==="children"||a==="key"||a==="value"||a==="checked"||r[a]===t[a]||la(e,a,t[a],r[a],o)}function um(e,t,r){t[0]==="-"?e.setProperty(t,r??""):e[t]=r==null?"":typeof r!="number"||DA.test(t)?r:r+"px"}function la(e,t,r,o,n){var a;e:if(t==="style")if(typeof r=="string")e.style.cssText=r;else{if(typeof o=="string"&&(e.style.cssText=o=""),o)for(t in o)r&&t in r||um(e.style,t,"");if(r)for(t in r)o&&r[t]===o[t]||um(e.style,t,r[t])}else if(t[0]==="o"&&t[1]==="n")a=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+a]=r,r?o||e.addEventListener(t,a?cm:lm,a):e.removeEventListener(t,a?cm:lm,a);else if(t!=="dangerouslySetInnerHTML"){if(n)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="width"&&t!=="height"&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=r??"";break e}catch{}typeof r=="function"||(r==null||r===!1&&t.indexOf("-")==-1?e.removeAttribute(t):e.setAttribute(t,r))}}function lm(e){return this.l[e.type+!1](j.event?j.event(e):e)}function cm(e){return this.l[e.type+!0](j.event?j.event(e):e)}function Cl(e,t,r,o,n,a,s,u,f){var p,d,h,m,g,C,x,y,O,_,S,M,R,b,I,T=t.type;if(t.constructor!==void 0)return null;r.__h!=null&&(f=r.__h,u=t.__e=r.__e,t.__h=null,a=[u]),(p=j.__b)&&p(t);try{e:if(typeof T=="function"){if(y=t.props,O=(p=T.contextType)&&o[p.__c],_=p?O?O.props.value:p.__:o,r.__c?x=(d=t.__c=r.__c).__=d.__E:("prototype"in T&&T.prototype.render?t.__c=d=new T(y,_):(t.__c=d=new q(y,_),d.constructor=T,d.render=BA),O&&O.sub(d),d.props=y,d.state||(d.state={}),d.context=_,d.__n=o,h=d.__d=!0,d.__h=[],d._sb=[]),d.__s==null&&(d.__s=d.state),T.getDerivedStateFromProps!=null&&(d.__s==d.state&&(d.__s=Gt({},d.__s)),Gt(d.__s,T.getDerivedStateFromProps(y,d.__s))),m=d.props,g=d.state,d.__v=t,h)T.getDerivedStateFromProps==null&&d.componentWillMount!=null&&d.componentWillMount(),d.componentDidMount!=null&&d.__h.push(d.componentDidMount);else{if(T.getDerivedStateFromProps==null&&y!==m&&d.componentWillReceiveProps!=null&&d.componentWillReceiveProps(y,_),!d.__e&&d.shouldComponentUpdate!=null&&d.shouldComponentUpdate(y,d.__s,_)===!1||t.__v===r.__v){for(t.__v!==r.__v&&(d.props=y,d.state=d.__s,d.__d=!1),d.__e=!1,t.__e=r.__e,t.__k=r.__k,t.__k.forEach(function(E){E&&(E.__=t)}),S=0;S<d._sb.length;S++)d.__h.push(d._sb[S]);d._sb=[],d.__h.length&&s.push(d);break e}d.componentWillUpdate!=null&&d.componentWillUpdate(y,d.__s,_),d.componentDidUpdate!=null&&d.__h.push(function(){d.componentDidUpdate(m,g,C)})}if(d.context=_,d.props=y,d.__P=e,M=j.__r,R=0,"prototype"in T&&T.prototype.render){for(d.state=d.__s,d.__d=!1,M&&M(t),p=d.render(d.props,d.state,d.context),b=0;b<d._sb.length;b++)d.__h.push(d._sb[b]);d._sb=[]}else do d.__d=!1,M&&M(t),p=d.render(d.props,d.state,d.context),d.state=d.__s;while(d.__d&&++R<25);d.state=d.__s,d.getChildContext!=null&&(o=Gt(Gt({},o),d.getChildContext())),h||d.getSnapshotBeforeUpdate==null||(C=d.getSnapshotBeforeUpdate(m,g)),I=p!=null&&p.type===c&&p.key==null?p.props.children:p,Cm(e,Array.isArray(I)?I:[I],t,r,o,n,a,s,u,f),d.base=t.__e,t.__h=null,d.__h.length&&s.push(d),x&&(d.__E=d.__=null),d.__e=!1}else a==null&&t.__v===r.__v?(t.__k=r.__k,t.__e=r.__e):t.__e=FA(r.__e,t,r,o,n,a,s,f);(p=j.diffed)&&p(t)}catch(E){t.__v=null,(f||a!=null)&&(t.__e=u,t.__h=!!f,a[a.indexOf(u)]=null),j.__e(E,t,r)}}function ym(e,t){j.__c&&j.__c(t,e),e.some(function(r){try{e=r.__h,r.__h=[],e.some(function(o){o.call(r)})}catch(o){j.__e(o,r.__v)}})}function FA(e,t,r,o,n,a,s,u){var f,p,d,h=r.props,m=t.props,g=t.type,C=0;if(g==="svg"&&(n=!0),a!=null){for(;C<a.length;C++)if((f=a[C])&&"setAttribute"in f==!!g&&(g?f.localName===g:f.nodeType===3)){e=f,a[C]=null;break}}if(e==null){if(g===null)return document.createTextNode(m);e=n?document.createElementNS("http://www.w3.org/2000/svg",g):document.createElement(g,m.is&&m),a=null,u=!1}if(g===null)h===m||u&&e.data===m||(e.data=m);else{if(a=a&&No.call(e.childNodes),p=(h=r.props||sa).dangerouslySetInnerHTML,d=m.dangerouslySetInnerHTML,!u){if(a!=null)for(h={},C=0;C<e.attributes.length;C++)h[e.attributes[C].name]=e.attributes[C].value;(d||p)&&(d&&(p&&d.__html==p.__html||d.__html===e.innerHTML)||(e.innerHTML=d&&d.__html||""))}if(NA(e,m,h,n,u),d)t.__k=[];else if(C=t.props.children,Cm(e,Array.isArray(C)?C:[C],t,r,o,n&&g!=="foreignObject",a,s,a?a[0]:r.__k&&Do(r,0),u),a!=null)for(C=a.length;C--;)a[C]!=null&&hm(a[C]);u||("value"in m&&(C=m.value)!==void 0&&(C!==e.value||g==="progress"&&!C||g==="option"&&C!==h.value)&&la(e,"value",C,h.value,!1),"checked"in m&&(C=m.checked)!==void 0&&C!==e.checked&&la(e,"checked",C,h.checked,!1))}return e}function Om(e,t,r){try{typeof e=="function"?e(t):e.current=t}catch(o){j.__e(o,r)}}function Tm(e,t,r){var o,n;if(j.unmount&&j.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||Om(o,null,t)),(o=e.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(a){j.__e(a,t)}o.base=o.__P=null,e.__c=void 0}if(o=e.__k)for(n=0;n<o.length;n++)o[n]&&Tm(o[n],t,r||typeof e.type!="function");r||e.__e==null||hm(e.__e),e.__=e.__e=e.__d=void 0}function BA(e,t,r){return this.constructor(e,r)}function Tn(e,t,r){var o,n,a;j.__&&j.__(e,t),n=(o=typeof r=="function")?null:r&&r.__k||t.__k,a=[],Cl(t,e=(!o&&r||t).__k=l(c,null,[e]),n||sa,sa,t.ownerSVGElement!==void 0,!o&&r?[r]:n?null:t.firstChild?No.call(t.childNodes):null,a,!o&&r?r:n?n.__e:t.firstChild,o),ym(a,e)}function vl(e,t){Tn(e,t,vl)}function bm(e,t,r){var o,n,a,s=Gt({},e.props);for(a in t)a=="key"?o=t[a]:a=="ref"?n=t[a]:s[a]=t[a];return arguments.length>2&&(s.children=arguments.length>3?No.call(arguments,2):r),Ao(e.type,s,o||e.key,n||e.ref,null)}function ir(e,t){var r={__c:t="__cC"+dm++,__:e,Consumer:function(o,n){return o.children(n)},Provider:function(o){var n,a;return this.getChildContext||(n=[],(a={})[t]=this,this.getChildContext=function(){return a},this.shouldComponentUpdate=function(s){this.props.value!==s.value&&n.some(function(u){u.__e=!0,gl(u)})},this.sub=function(s){n.push(s);var u=s.componentWillUnmount;s.componentWillUnmount=function(){n.splice(n.indexOf(s),1),u&&u.call(s)}}),o.children}};return r.Provider.__=r.Consumer.contextType=r}var No,j,fm,AA,kr,sm,pm,hl,dm,sa,mm,DA,ar=aa(()=>{i();sa={},mm=[],DA=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;No=mm.slice,j={__e:function(e,t,r,o){for(var n,a,s;t=t.__;)if((n=t.__c)&&!n.__)try{if((a=n.constructor)&&a.getDerivedStateFromError!=null&&(n.setState(a.getDerivedStateFromError(e)),s=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(e,o||{}),s=n.__d),s)return n.__E=n}catch(u){e=u}throw e}},fm=0,AA=function(e){return e!=null&&e.constructor===void 0},q.prototype.setState=function(e,t){var r;r=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=Gt({},this.state),typeof e=="function"&&(e=e(Gt({},r),this.props)),e&&Gt(r,e),e!=null&&this.__v&&(t&&this._sb.push(t),gl(this))},q.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),gl(this))},q.prototype.render=c,kr=[],pm=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,hl=function(e,t){return e.__v.__b-t.__v.__b},ua.__r=0,dm=0});var i=aa(()=>{"use strict";ar()});function Mn(e,t){j.__h&&j.__h(ge,e,bn||t),bn=0;var r=ge.__H||(ge.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({__V:ca}),r.__[e]}function Ze(e){return bn=1,Fo(Nm,e)}function Fo(e,t,r){var o=Mn(Lr++,2);if(o.t=e,!o.__c&&(o.__=[r?r(t):Nm(void 0,t),function(u){var f=o.__N?o.__N[0]:o.__[0],p=o.t(f,u);f!==p&&(o.__N=[p,o.__[1]],o.__c.setState({}))}],o.__c=ge,!ge.u)){var n=function(u,f,p){if(!o.__c.__H)return!0;var d=o.__c.__H.__.filter(function(m){return m.__c});if(d.every(function(m){return!m.__N}))return!a||a.call(this,u,f,p);var h=!1;return d.forEach(function(m){if(m.__N){var g=m.__[0];m.__=m.__N,m.__N=void 0,g!==m.__[0]&&(h=!0)}}),!(!h&&o.__c.props===u)&&(!a||a.call(this,u,f,p))};ge.u=!0;var a=ge.shouldComponentUpdate,s=ge.componentWillUpdate;ge.componentWillUpdate=function(u,f,p){if(this.__e){var d=a;a=void 0,n(u,f,p),a=d}s&&s.call(this,u,f,p)},ge.shouldComponentUpdate=n}return o.__N||o.__}function ke(e,t){var r=Mn(Lr++,3);!j.__s&&yl(r.__H,t)&&(r.__=e,r.i=t,ge.__H.__h.push(r))}function jt(e,t){var r=Mn(Lr++,4);!j.__s&&yl(r.__H,t)&&(r.__=e,r.i=t,ge.__h.push(r))}function ut(e){return bn=5,Wr(function(){return{current:e}},[])}function pa(e,t,r){bn=6,jt(function(){return typeof e=="function"?(e(t()),function(){return e(null)}):e?(e.current=t(),function(){return e.current=null}):void 0},r==null?r:r.concat(e))}function Wr(e,t){var r=Mn(Lr++,7);return yl(r.__H,t)?(r.__V=e(),r.i=t,r.__h=e,r.__V):r.__}function Pn(e,t){return bn=8,Wr(function(){return e},t)}function da(e){var t=ge.context[e.__c],r=Mn(Lr++,9);return r.c=e,t?(r.__==null&&(r.__=!0,t.sub(ge)),t.props.value):e.__}function ma(e,t){j.useDebugValue&&j.useDebugValue(t?t(e):e)}function Dm(){var e=Mn(Lr++,11);if(!e.__){for(var t=ge.__v;t!==null&&!t.__m&&t.__!==null;)t=t.__;var r=t.__m||(t.__m=[0,0]);e.__="P"+r[0]+"-"+r[1]++}return e.__}function kA(){for(var e;e=Am.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(fa),e.__H.__h.forEach(_l),e.__H.__h=[]}catch(t){e.__H.__h=[],j.__e(t,e.__v)}}function LA(e){var t,r=function(){clearTimeout(o),Sm&&cancelAnimationFrame(t),setTimeout(e)},o=setTimeout(r,100);Sm&&(t=requestAnimationFrame(r))}function fa(e){var t=ge,r=e.__c;typeof r=="function"&&(e.__c=void 0,r()),ge=t}function _l(e){var t=ge;e.__c=e.__(),ge=t}function yl(e,t){return!e||e.length!==t.length||t.some(function(r,o){return r!==e[o]})}function Nm(e,t){return typeof t=="function"?t(e):t}var Lr,ge,xl,Mm,bn,Am,ca,Pm,Em,Im,wm,Rm,Sm,ha=aa(()=>{i();ar();bn=0,Am=[],ca=[],Pm=j.__b,Em=j.__r,Im=j.diffed,wm=j.__c,Rm=j.unmount;j.__b=function(e){ge=null,Pm&&Pm(e)},j.__r=function(e){Em&&Em(e),Lr=0;var t=(ge=e.__c).__H;t&&(xl===ge?(t.__h=[],ge.__h=[],t.__.forEach(function(r){r.__N&&(r.__=r.__N),r.__V=ca,r.__N=r.i=void 0})):(t.__h.forEach(fa),t.__h.forEach(_l),t.__h=[])),xl=ge},j.diffed=function(e){Im&&Im(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Am.push(t)!==1&&Mm===j.requestAnimationFrame||((Mm=j.requestAnimationFrame)||LA)(kA)),t.__H.__.forEach(function(r){r.i&&(r.__H=r.i),r.__V!==ca&&(r.__=r.__V),r.i=void 0,r.__V=ca})),xl=ge=null},j.__c=function(e,t){t.some(function(r){try{r.__h.forEach(fa),r.__h=r.__h.filter(function(o){return!o.__||_l(o)})}catch(o){t.some(function(n){n.__h&&(n.__h=[])}),t=[],j.__e(o,r.__v)}}),wm&&wm(e,t)},j.unmount=function(e){Rm&&Rm(e);var t,r=e.__c;r&&r.__H&&(r.__H.__.forEach(function(o){try{fa(o)}catch(n){t=n}}),r.__H=void 0,t&&j.__e(t,r.__v))};Sm=typeof requestAnimationFrame=="function"});function Gm(e,t){for(var r in t)e[r]=t[r];return e}function Tl(e,t){for(var r in e)if(r!=="__source"&&!(r in t))return!0;for(var o in t)if(o!=="__source"&&e[o]!==t[o])return!0;return!1}function Ol(e,t){return e===t&&(e!==0||1/e==1/t)||e!=e&&t!=t}function bl(e){this.props=e}function Ca(e,t){function r(n){var a=this.props.ref,s=a==n.ref;return!s&&a&&(a.call?a(null):a.current=null),t?!t(this.props,n)||!s:Tl(this.props,n)}function o(n){return this.shouldComponentUpdate=r,l(e,n)}return o.displayName="Memo("+(e.displayName||e.name)+")",o.prototype.isReactComponent=!0,o.__f=!0,o}function $e(e){function t(r){var o=Gm({},r);return delete o.ref,e(o,r.ref||null)}return t.$$typeof=WA,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}function jm(e,t,r){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(o){typeof o.__c=="function"&&o.__c()}),e.__c.__H=null),(e=Gm({},e)).__c!=null&&(e.__c.__P===r&&(e.__c.__P=t),e.__c=null),e.__k=e.__k&&e.__k.map(function(o){return jm(o,t,r)})),e}function Um(e,t,r){return e&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(o){return Um(o,t,r)}),e.__c&&e.__c.__P===t&&(e.__e&&r.insertBefore(e.__e,e.__d),e.__c.__e=!0,e.__c.__P=r)),e}function ga(){this.__u=0,this.t=null,this.__b=null}function $m(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function HA(e){var t,r,o;function n(a){if(t||(t=e()).then(function(s){r=s.default||s},function(s){o=s}),o)throw o;if(!r)throw t;return l(r,a)}return n.displayName="Lazy",n.__f=!0,n}function Bo(){this.u=null,this.o=null}function VA(e){return this.getChildContext=function(){return e.context},e.children}function zA(e){var t=this,r=e.i;t.componentWillUnmount=function(){Tn(null,t.l),t.l=null,t.i=null},t.i&&t.i!==r&&t.componentWillUnmount(),e.__v?(t.l||(t.i=r,t.l={nodeType:1,parentNode:r,childNodes:[],appendChild:function(o){this.childNodes.push(o),t.i.appendChild(o)},insertBefore:function(o,n){this.childNodes.push(o),t.i.appendChild(o)},removeChild:function(o){this.childNodes.splice(this.childNodes.indexOf(o)>>>1,1),t.i.removeChild(o)}}),Tn(l(VA,{context:t.context},e.__v),t.l)):t.l&&t.componentWillUnmount()}function GA(e,t){var r=l(zA,{__v:e,i:t});return r.containerInfo=t,r}function KA(e,t,r){return t.__k==null&&(t.textContent=""),Tn(e,t),typeof r=="function"&&r(),e?e.__c:null}function QA(e,t,r){return vl(e,t),typeof r=="function"&&r(),e?e.__c:null}function ZA(){}function JA(){return this.cancelBubble}function eD(){return this.defaultPrevented}function rD(e){return l.bind(null,e)}function qr(e){return!!e&&e.$$typeof===Ym}function Ae(e){return qr(e)?bm.apply(null,arguments):e}function nD(e){return!!e.__k&&(Tn(null,e),!0)}function Pl(e){return e&&(e.base||e.nodeType===1&&e)||null}function Xm(e){e()}function sD(e){return e}function uD(){return[!1,Xm]}function cD(e,t){var r=t(),o=Ze({h:{__:r,v:t}}),n=o[0].h,a=o[1];return jt(function(){n.__=r,n.v=t,Ol(n.__,t())||a({h:n})},[e,r,t]),ke(function(){return Ol(n.__,n.v())||a({h:n}),e(function(){Ol(n.__,n.v())||a({h:n})})},[e]),r}var Fm,WA,Bm,Le,qA,km,Lm,Ym,jA,UA,$A,YA,XA,Wm,Ml,qm,Hm,Vm,zm,tD,oD,iD,aD,lD,Me,U=aa(()=>{i();ar();ar();ha();ha();(bl.prototype=new q).isPureReactComponent=!0,bl.prototype.shouldComponentUpdate=function(e,t){return Tl(this.props,e)||Tl(this.state,t)};Fm=j.__b;j.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),Fm&&Fm(e)};WA=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;Bm=function(e,t){return e==null?null:St(St(e).map(t))},Le={map:Bm,forEach:Bm,count:function(e){return e?St(e).length:0},only:function(e){var t=St(e);if(t.length!==1)throw"Children.only";return t[0]},toArray:St},qA=j.__e;j.__e=function(e,t,r,o){if(e.then){for(var n,a=t;a=a.__;)if((n=a.__c)&&n.__c)return t.__e==null&&(t.__e=r.__e,t.__k=r.__k),n.__c(e,t)}qA(e,t,r,o)};km=j.unmount;j.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&e.__h===!0&&(e.type=null),km&&km(e)},(ga.prototype=new q).__c=function(e,t){var r=t.__c,o=this;o.t==null&&(o.t=[]),o.t.push(r);var n=$m(o.__v),a=!1,s=function(){a||(a=!0,r.__R=null,n?n(u):u())};r.__R=s;var u=function(){if(!--o.__u){if(o.state.__a){var p=o.state.__a;o.__v.__k[0]=Um(p,p.__c.__P,p.__c.__O)}var d;for(o.setState({__a:o.__b=null});d=o.t.pop();)d.forceUpdate()}},f=t.__h===!0;o.__u++||f||o.setState({__a:o.__b=o.__v.__k[0]}),e.then(s,s)},ga.prototype.componentWillUnmount=function(){this.t=[]},ga.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var r=document.createElement("div"),o=this.__v.__k[0].__c;this.__v.__k[0]=jm(this.__b,r,o.__O=o.__P)}this.__b=null}var n=t.__a&&l(c,null,e.fallback);return n&&(n.__h=null),[l(c,null,t.__a?null:e.children),n]};Lm=function(e,t,r){if(++r[1]===r[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(r=e.u;r;){for(;r.length>3;)r.pop()();if(r[1]<r[0])break;e.u=r=r[2]}};(Bo.prototype=new q).__a=function(e){var t=this,r=$m(t.__v),o=t.o.get(e);return o[0]++,function(n){var a=function(){t.props.revealOrder?(o.push(n),Lm(t,e,o)):n()};r?r(a):a()}},Bo.prototype.render=function(e){this.u=null,this.o=new Map;var t=St(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var r=t.length;r--;)this.o.set(t[r],this.u=[1,0,this.u]);return e.children},Bo.prototype.componentDidUpdate=Bo.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,r){Lm(e,r,t)})};Ym=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,jA=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,UA=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,$A=/[A-Z0-9]/g,YA=typeof document<"u",XA=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};q.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(q.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});Wm=j.event;j.event=function(e){return Wm&&(e=Wm(e)),e.persist=ZA,e.isPropagationStopped=JA,e.isDefaultPrevented=eD,e.nativeEvent=e};qm={configurable:!0,get:function(){return this.class}},Hm=j.vnode;j.vnode=function(e){var t=e.type,r=e.props,o=r;if(typeof t=="string"){for(var n in o={},r){var a=r[n];if(!(n==="value"&&"defaultValue"in r&&a==null||YA&&n==="children"&&t==="noscript")){var s=n.toLowerCase();n==="defaultValue"&&"value"in r&&r.value==null?n="value":n==="download"&&a===!0?a="":s==="ondoubleclick"?n="ondblclick":s!=="onchange"||t!=="input"&&t!=="textarea"||XA(r.type)?s==="onfocus"?n="onfocusin":s==="onblur"?n="onfocusout":UA.test(n)?n=s:t.indexOf("-")===-1&&jA.test(n)?n=n.replace($A,"-$&").toLowerCase():a===null&&(a=void 0):s=n="oninput",s==="oninput"&&o[n=s]&&(n="oninputCapture"),o[n]=a}}t=="select"&&o.multiple&&Array.isArray(o.value)&&(o.value=St(r.children).forEach(function(u){u.props.selected=o.value.indexOf(u.props.value)!=-1})),t=="select"&&o.defaultValue!=null&&(o.value=St(r.children).forEach(function(u){u.props.selected=o.multiple?o.defaultValue.indexOf(u.props.value)!=-1:o.defaultValue==u.props.value})),e.props=o,r.class!=r.className&&(qm.enumerable="className"in r,r.className!=null&&(o.class=r.className),Object.defineProperty(o,"className",qm))}e.$$typeof=Ym,Hm&&Hm(e)};Vm=j.__r;j.__r=function(e){Vm&&Vm(e),Ml=e.__c};zm=j.diffed;j.diffed=function(e){zm&&zm(e);var t=e.props,r=e.__e;r!=null&&e.type==="textarea"&&"value"in t&&t.value!==r.value&&(r.value=t.value==null?"":t.value),Ml=null};tD={ReactCurrentDispatcher:{current:{readContext:function(e){return Ml.__n[e.__c].props.value}}}};oD=function(e,t){return e(t)},iD=function(e,t){return e(t)},aD=c;lD=jt;Me={useState:Ze,useId:Dm,useReducer:Fo,useEffect:ke,useLayoutEffect:jt,useInsertionEffect:lD,useTransition:uD,useDeferredValue:sD,useSyncExternalStore:cD,startTransition:Xm,useRef:ut,useImperativeHandle:pa,useMemo:Wr,useCallback:Pn,useContext:da,useDebugValue:ma,version:"17.0.2",Children:Le,render:KA,hydrate:QA,unmountComponentAtNode:nD,createPortal:GA,createElement:l,createContext:ir,createFactory:rD,cloneElement:Ae,createRef:Ue,Fragment:c,isValidElement:qr,findDOMNode:Pl,Component:q,PureComponent:bl,memo:Ca,forwardRef:$e,flushSync:iD,unstable_batchedUpdates:oD,StrictMode:aD,Suspense:ga,SuspenseList:Bo,lazy:HA,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:tD}});var lg=v((jfe,ug)=>{"use strict";i();var gB="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";ug.exports=gB});var dg=v(($fe,pg)=>{"use strict";i();var CB=lg();function cg(){}function fg(){}fg.resetWarningCache=cg;pg.exports=function(){function e(o,n,a,s,u,f){if(f!==CB){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}}e.isRequired=e;function t(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:fg,resetWarningCache:cg};return r.PropTypes=r,r}});var ae=v((Qfe,mg)=>{i();mg.exports=dg()();var Xfe,Kfe});var se=v((Jfe,ja)=>{i();(function(){"use strict";var e={}.hasOwnProperty,t="[native code]";function r(){for(var o=[],n=0;n<arguments.length;n++){var a=arguments[n];if(a){var s=typeof a;if(s==="string"||s==="number")o.push(a);else if(Array.isArray(a)){if(a.length){var u=r.apply(null,a);u&&o.push(u)}}else if(s==="object"){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){o.push(a.toString());continue}for(var f in a)e.call(a,f)&&a[f]&&o.push(f)}}}return o.join(" ")}typeof ja<"u"&&ja.exports?(r.default=r,ja.exports=r):typeof define=="function"&&typeof define.amd=="object"&&define.amd?define("classnames",[],function(){return r}):window.classNames=r})()});var Hg=v((x0e,qg)=>{i();function LB(e,t,r,o){for(var n=e.length,a=r+(o?1:-1);o?a--:++a<n;)if(t(e[a],a,e))return a;return-1}qg.exports=LB});var zg=v((y0e,Vg)=>{i();function WB(e){return e!==e}Vg.exports=WB});var jg=v((T0e,Gg)=>{i();function qB(e,t,r){for(var o=r-1,n=e.length;++o<n;)if(e[o]===t)return o;return-1}Gg.exports=qB});var mc=v((M0e,Ug)=>{i();var HB=Hg(),VB=zg(),zB=jg();function GB(e,t,r){return t===t?zB(e,t,r):HB(e,VB,r)}Ug.exports=GB});var hc=v((E0e,$g)=>{i();var jB=typeof global=="object"&&global&&global.Object===Object&&global;$g.exports=jB});var Xe=v((w0e,Yg)=>{i();var UB=hc(),$B=typeof self=="object"&&self&&self.Object===Object&&self,YB=UB||$B||Function("return this")();Yg.exports=YB});var Qr=v((S0e,Xg)=>{i();var XB=Xe(),KB=XB.Symbol;Xg.exports=KB});var Jg=v((D0e,Zg)=>{i();var Kg=Qr(),Qg=Object.prototype,QB=Qg.hasOwnProperty,ZB=Qg.toString,jo=Kg?Kg.toStringTag:void 0;function JB(e){var t=QB.call(e,jo),r=e[jo];try{e[jo]=void 0;var o=!0}catch{}var n=ZB.call(e);return o&&(t?e[jo]=r:delete e[jo]),n}Zg.exports=JB});var tC=v((F0e,eC)=>{i();var ek=Object.prototype,tk=ek.toString;function rk(e){return tk.call(e)}eC.exports=rk});var xr=v((k0e,oC)=>{i();var rC=Qr(),nk=Jg(),ok=tC(),ik="[object Null]",ak="[object Undefined]",nC=rC?rC.toStringTag:void 0;function sk(e){return e==null?e===void 0?ak:ik:nC&&nC in Object(e)?nk(e):ok(e)}oC.exports=sk});var Bt=v((W0e,iC)=>{i();function uk(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}iC.exports=uk});var gc=v((H0e,aC)=>{i();var lk=xr(),ck=Bt(),fk="[object AsyncFunction]",pk="[object Function]",dk="[object GeneratorFunction]",mk="[object Proxy]";function hk(e){if(!ck(e))return!1;var t=lk(e);return t==pk||t==dk||t==fk||t==mk}aC.exports=hk});var os=v((z0e,sC)=>{i();var gk=9007199254740991;function Ck(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=gk}sC.exports=Ck});var Uo=v((j0e,uC)=>{i();var vk=gc(),xk=os();function _k(e){return e!=null&&xk(e.length)&&!vk(e)}uC.exports=_k});var ot=v(($0e,lC)=>{i();var yk=Array.isArray;lC.exports=yk});var bt=v((X0e,cC)=>{i();function Ok(e){return e!=null&&typeof e=="object"}cC.exports=Ok});var pC=v((Q0e,fC)=>{i();var Tk=xr(),bk=ot(),Mk=bt(),Pk="[object String]";function Ek(e){return typeof e=="string"||!bk(e)&&Mk(e)&&Tk(e)==Pk}fC.exports=Ek});var mC=v((J0e,dC)=>{i();var Ik=/\s/;function wk(e){for(var t=e.length;t--&&Ik.test(e.charAt(t)););return t}dC.exports=wk});var gC=v((tge,hC)=>{i();var Rk=mC(),Sk=/^\s+/;function Ak(e){return e&&e.slice(0,Rk(e)+1).replace(Sk,"")}hC.exports=Ak});var Gn=v((nge,CC)=>{i();var Dk=xr(),Nk=bt(),Fk="[object Symbol]";function Bk(e){return typeof e=="symbol"||Nk(e)&&Dk(e)==Fk}CC.exports=Bk});var yC=v((ige,_C)=>{i();var kk=gC(),vC=Bt(),Lk=Gn(),xC=0/0,Wk=/^[-+]0x[0-9a-f]+$/i,qk=/^0b[01]+$/i,Hk=/^0o[0-7]+$/i,Vk=parseInt;function zk(e){if(typeof e=="number")return e;if(Lk(e))return xC;if(vC(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=vC(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=kk(e);var r=qk.test(e);return r||Hk.test(e)?Vk(e.slice(2),r?2:8):Wk.test(e)?xC:+e}_C.exports=zk});var bC=v((sge,TC)=>{i();var Gk=yC(),OC=1/0,jk=17976931348623157e292;function Uk(e){if(!e)return e===0?e:0;if(e=Gk(e),e===OC||e===-OC){var t=e<0?-1:1;return t*jk}return e===e?e:0}TC.exports=Uk});var Cc=v((lge,MC)=>{i();var $k=bC();function Yk(e){var t=$k(e),r=t%1;return t===t?r?t-r:t:0}MC.exports=Yk});var is=v((fge,PC)=>{i();function Xk(e,t){for(var r=-1,o=e==null?0:e.length,n=Array(o);++r<o;)n[r]=t(e[r],r,e);return n}PC.exports=Xk});var IC=v((dge,EC)=>{i();var Kk=is();function Qk(e,t){return Kk(t,function(r){return e[r]})}EC.exports=Qk});var RC=v((hge,wC)=>{i();function Zk(e,t){for(var r=-1,o=Array(e);++r<e;)o[r]=t(r);return o}wC.exports=Zk});var AC=v((Cge,SC)=>{i();var Jk=xr(),eL=bt(),tL="[object Arguments]";function rL(e){return eL(e)&&Jk(e)==tL}SC.exports=rL});var as=v((xge,FC)=>{i();var DC=AC(),nL=bt(),NC=Object.prototype,oL=NC.hasOwnProperty,iL=NC.propertyIsEnumerable,aL=DC(function(){return arguments}())?DC:function(e){return nL(e)&&oL.call(e,"callee")&&!iL.call(e,"callee")};FC.exports=aL});var kC=v((yge,BC)=>{i();function sL(){return!1}BC.exports=sL});var ss=v(($o,jn)=>{i();var uL=Xe(),lL=kC(),qC=typeof $o=="object"&&$o&&!$o.nodeType&&$o,LC=qC&&typeof jn=="object"&&jn&&!jn.nodeType&&jn,cL=LC&&LC.exports===qC,WC=cL?uL.Buffer:void 0,fL=WC?WC.isBuffer:void 0,pL=fL||lL;jn.exports=pL});var Un=v((bge,HC)=>{i();var dL=9007199254740991,mL=/^(?:0|[1-9]\d*)$/;function hL(e,t){var r=typeof e;return t=t??dL,!!t&&(r=="number"||r!="symbol"&&mL.test(e))&&e>-1&&e%1==0&&e<t}HC.exports=hL});var zC=v((Pge,VC)=>{i();var gL=xr(),CL=os(),vL=bt(),xL="[object Arguments]",_L="[object Array]",yL="[object Boolean]",OL="[object Date]",TL="[object Error]",bL="[object Function]",ML="[object Map]",PL="[object Number]",EL="[object Object]",IL="[object RegExp]",wL="[object Set]",RL="[object String]",SL="[object WeakMap]",AL="[object ArrayBuffer]",DL="[object DataView]",NL="[object Float32Array]",FL="[object Float64Array]",BL="[object Int8Array]",kL="[object Int16Array]",LL="[object Int32Array]",WL="[object Uint8Array]",qL="[object Uint8ClampedArray]",HL="[object Uint16Array]",VL="[object Uint32Array]",xe={};xe[NL]=xe[FL]=xe[BL]=xe[kL]=xe[LL]=xe[WL]=xe[qL]=xe[HL]=xe[VL]=!0;xe[xL]=xe[_L]=xe[AL]=xe[yL]=xe[DL]=xe[OL]=xe[TL]=xe[bL]=xe[ML]=xe[PL]=xe[EL]=xe[IL]=xe[wL]=xe[RL]=xe[SL]=!1;function zL(e){return vL(e)&&CL(e.length)&&!!xe[gL(e)]}VC.exports=zL});var us=v((Ige,GC)=>{i();function GL(e){return function(t){return e(t)}}GC.exports=GL});var ls=v((Yo,$n)=>{i();var jL=hc(),jC=typeof Yo=="object"&&Yo&&!Yo.nodeType&&Yo,Xo=jC&&typeof $n=="object"&&$n&&!$n.nodeType&&$n,UL=Xo&&Xo.exports===jC,vc=UL&&jL.process,$L=function(){try{var e=Xo&&Xo.require&&Xo.require("util").types;return e||vc&&vc.binding&&vc.binding("util")}catch{}}();$n.exports=$L});var xc=v((Sge,YC)=>{i();var YL=zC(),XL=us(),UC=ls(),$C=UC&&UC.isTypedArray,KL=$C?XL($C):YL;YC.exports=KL});var _c=v((Dge,XC)=>{i();var QL=RC(),ZL=as(),JL=ot(),eW=ss(),tW=Un(),rW=xc(),nW=Object.prototype,oW=nW.hasOwnProperty;function iW(e,t){var r=JL(e),o=!r&&ZL(e),n=!r&&!o&&eW(e),a=!r&&!o&&!n&&rW(e),s=r||o||n||a,u=s?QL(e.length,String):[],f=u.length;for(var p in e)(t||oW.call(e,p))&&!(s&&(p=="length"||n&&(p=="offset"||p=="parent")||a&&(p=="buffer"||p=="byteLength"||p=="byteOffset")||tW(p,f)))&&u.push(p);return u}XC.exports=iW});var cs=v((Fge,KC)=>{i();var aW=Object.prototype;function sW(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||aW;return e===r}KC.exports=sW});var yc=v((kge,QC)=>{i();function uW(e,t){return function(r){return e(t(r))}}QC.exports=uW});var JC=v((Wge,ZC)=>{i();var lW=yc(),cW=lW(Object.keys,Object);ZC.exports=cW});var tv=v((Hge,ev)=>{i();var fW=cs(),pW=JC(),dW=Object.prototype,mW=dW.hasOwnProperty;function hW(e){if(!fW(e))return pW(e);var t=[];for(var r in Object(e))mW.call(e,r)&&r!="constructor"&&t.push(r);return t}ev.exports=hW});var Zr=v((zge,rv)=>{i();var gW=_c(),CW=tv(),vW=Uo();function xW(e){return vW(e)?gW(e):CW(e)}rv.exports=xW});var ov=v((jge,nv)=>{i();var _W=IC(),yW=Zr();function OW(e){return e==null?[]:_W(e,yW(e))}nv.exports=OW});var av=v(($ge,iv)=>{i();var TW=mc(),bW=Uo(),MW=pC(),PW=Cc(),EW=ov(),IW=Math.max;function wW(e,t,r,o){e=bW(e)?e:EW(e),r=r&&!o?PW(r):0;var n=e.length;return r<0&&(r=IW(n+r,0)),MW(e)?r<=n&&e.indexOf(t,r)>-1:!!n&&TW(e,t,r)>-1}iv.exports=wW});var fs=v((Xge,sv)=>{i();function RW(e,t){for(var r=-1,o=e==null?0:e.length;++r<o&&t(e[r],r,e)!==!1;);return e}sv.exports=RW});var lv=v((Qge,uv)=>{i();function SW(e){return function(t,r,o){for(var n=-1,a=Object(t),s=o(t),u=s.length;u--;){var f=s[e?u:++n];if(r(a[f],f,a)===!1)break}return t}}uv.exports=SW});var fv=v((Jge,cv)=>{i();var AW=lv(),DW=AW();cv.exports=DW});var dv=v((tCe,pv)=>{i();var NW=fv(),FW=Zr();function BW(e,t){return e&&NW(e,t,FW)}pv.exports=BW});var hv=v((nCe,mv)=>{i();var kW=Uo();function LW(e,t){return function(r,o){if(r==null)return r;if(!kW(r))return e(r,o);for(var n=r.length,a=t?n:-1,s=Object(r);(t?a--:++a<n)&&o(s[a],a,s)!==!1;);return r}}mv.exports=LW});var Cv=v((iCe,gv)=>{i();var WW=dv(),qW=hv(),HW=qW(WW);gv.exports=HW});var Ko=v((sCe,vv)=>{i();function VW(e){return e}vv.exports=VW});var _v=v((lCe,xv)=>{i();var zW=Ko();function GW(e){return typeof e=="function"?e:zW}xv.exports=GW});var Ov=v((fCe,yv)=>{i();var jW=fs(),UW=Cv(),$W=_v(),YW=ot();function XW(e,t){var r=YW(e)?jW:UW;return r(e,$W(t))}yv.exports=XW});var wv=v((CCe,Iv)=>{i();var e4=Xe(),t4=e4["__core-js_shared__"];Iv.exports=t4});var Av=v((xCe,Sv)=>{i();var Oc=wv(),Rv=function(){var e=/[^.]+$/.exec(Oc&&Oc.keys&&Oc.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function r4(e){return!!Rv&&Rv in e}Sv.exports=r4});var Tc=v((yCe,Dv)=>{i();var n4=Function.prototype,o4=n4.toString;function i4(e){if(e!=null){try{return o4.call(e)}catch{}try{return e+""}catch{}}return""}Dv.exports=i4});var Fv=v((TCe,Nv)=>{i();var a4=gc(),s4=Av(),u4=Bt(),l4=Tc(),c4=/[\\^$.*+?()[\]{}|]/g,f4=/^\[object .+?Constructor\]$/,p4=Function.prototype,d4=Object.prototype,m4=p4.toString,h4=d4.hasOwnProperty,g4=RegExp("^"+m4.call(h4).replace(c4,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function C4(e){if(!u4(e)||s4(e))return!1;var t=a4(e)?g4:f4;return t.test(l4(e))}Nv.exports=C4});var kv=v((MCe,Bv)=>{i();function v4(e,t){return e?.[t]}Bv.exports=v4});var _r=v((ECe,Lv)=>{i();var x4=Fv(),_4=kv();function y4(e,t){var r=_4(e,t);return x4(r)?r:void 0}Lv.exports=y4});var bc=v((wCe,Wv)=>{i();var O4=_r(),T4=Xe(),b4=O4(T4,"WeakMap");Wv.exports=b4});var Mc=v((SCe,Hv)=>{i();var qv=bc(),M4=qv&&new qv;Hv.exports=M4});var Pc=v((DCe,zv)=>{i();var P4=Ko(),Vv=Mc(),E4=Vv?function(e,t){return Vv.set(e,t),e}:P4;zv.exports=E4});var Qo=v((FCe,jv)=>{i();var I4=Bt(),Gv=Object.create,w4=function(){function e(){}return function(t){if(!I4(t))return{};if(Gv)return Gv(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}();jv.exports=w4});var Zo=v((kCe,Uv)=>{i();var R4=Qo(),S4=Bt();function A4(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=R4(e.prototype),o=e.apply(r,t);return S4(o)?o:r}}Uv.exports=A4});var Yv=v((WCe,$v)=>{i();var D4=Zo(),N4=Xe(),F4=1;function B4(e,t,r){var o=t&F4,n=D4(e);function a(){var s=this&&this!==N4&&this instanceof a?n:e;return s.apply(o?r:this,arguments)}return a}$v.exports=B4});var ps=v((HCe,Xv)=>{i();function k4(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}Xv.exports=k4});var Ec=v((zCe,Kv)=>{i();var L4=Math.max;function W4(e,t,r,o){for(var n=-1,a=e.length,s=r.length,u=-1,f=t.length,p=L4(a-s,0),d=Array(f+p),h=!o;++u<f;)d[u]=t[u];for(;++n<s;)(h||n<a)&&(d[r[n]]=e[n]);for(;p--;)d[u++]=e[n++];return d}Kv.exports=W4});var Ic=v((jCe,Qv)=>{i();var q4=Math.max;function H4(e,t,r,o){for(var n=-1,a=e.length,s=-1,u=r.length,f=-1,p=t.length,d=q4(a-u,0),h=Array(d+p),m=!o;++n<d;)h[n]=e[n];for(var g=n;++f<p;)h[g+f]=t[f];for(;++s<u;)(m||n<a)&&(h[g+r[s]]=e[n++]);return h}Qv.exports=H4});var Jv=v(($Ce,Zv)=>{i();function V4(e,t){for(var r=e.length,o=0;r--;)e[r]===t&&++o;return o}Zv.exports=V4});var ds=v((XCe,e1)=>{i();function z4(){}e1.exports=z4});var hs=v((QCe,t1)=>{i();var G4=Qo(),j4=ds(),U4=4294967295;function ms(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=U4,this.__views__=[]}ms.prototype=G4(j4.prototype);ms.prototype.constructor=ms;t1.exports=ms});var n1=v((JCe,r1)=>{i();function $4(){}r1.exports=$4});var wc=v((tve,i1)=>{i();var o1=Mc(),Y4=n1(),X4=o1?function(e){return o1.get(e)}:Y4;i1.exports=X4});var s1=v((nve,a1)=>{i();var K4={};a1.exports=K4});var c1=v((ive,l1)=>{i();var u1=s1(),Q4=Object.prototype,Z4=Q4.hasOwnProperty;function J4(e){for(var t=e.name+"",r=u1[t],o=Z4.call(u1,t)?r.length:0;o--;){var n=r[o],a=n.func;if(a==null||a==e)return n.name}return t}l1.exports=J4});var Rc=v((sve,f1)=>{i();var eq=Qo(),tq=ds();function gs(e,t){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=void 0}gs.prototype=eq(tq.prototype);gs.prototype.constructor=gs;f1.exports=gs});var Cs=v((lve,p1)=>{i();function rq(e,t){var r=-1,o=e.length;for(t||(t=Array(o));++r<o;)t[r]=e[r];return t}p1.exports=rq});var m1=v((fve,d1)=>{i();var nq=hs(),oq=Rc(),iq=Cs();function aq(e){if(e instanceof nq)return e.clone();var t=new oq(e.__wrapped__,e.__chain__);return t.__actions__=iq(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}d1.exports=aq});var C1=v((dve,g1)=>{i();var sq=hs(),h1=Rc(),uq=ds(),lq=ot(),cq=bt(),fq=m1(),pq=Object.prototype,dq=pq.hasOwnProperty;function vs(e){if(cq(e)&&!lq(e)&&!(e instanceof sq)){if(e instanceof h1)return e;if(dq.call(e,"__wrapped__"))return fq(e)}return new h1(e)}vs.prototype=uq.prototype;vs.prototype.constructor=vs;g1.exports=vs});var x1=v((hve,v1)=>{i();var mq=hs(),hq=wc(),gq=c1(),Cq=C1();function vq(e){var t=gq(e),r=Cq[t];if(typeof r!="function"||!(t in mq.prototype))return!1;if(e===r)return!0;var o=hq(r);return!!o&&e===o[0]}v1.exports=vq});var Sc=v((Cve,_1)=>{i();var xq=800,_q=16,yq=Date.now;function Oq(e){var t=0,r=0;return function(){var o=yq(),n=_q-(o-r);if(r=o,n>0){if(++t>=xq)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}_1.exports=Oq});var Ac=v((xve,y1)=>{i();var Tq=Pc(),bq=Sc(),Mq=bq(Tq);y1.exports=Mq});var T1=v((yve,O1)=>{i();var Pq=/\{\n\/\* \[wrapped with (.+)\] \*/,Eq=/,? & /;function Iq(e){var t=e.match(Pq);return t?t[1].split(Eq):[]}O1.exports=Iq});var M1=v((Tve,b1)=>{i();var wq=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;function Rq(e,t){var r=t.length;if(!r)return e;var o=r-1;return t[o]=(r>1?"& ":"")+t[o],t=t.join(r>2?", ":" "),e.replace(wq,`{
/* [wrapped with `+t+`] */
`)}b1.exports=Rq});var E1=v((Mve,P1)=>{i();function Sq(e){return function(){return e}}P1.exports=Sq});var Dc=v((Eve,I1)=>{i();var Aq=_r(),Dq=function(){try{var e=Aq(Object,"defineProperty");return e({},"",{}),e}catch{}}();I1.exports=Dq});var S1=v((wve,R1)=>{i();var Nq=E1(),w1=Dc(),Fq=Ko(),Bq=w1?function(e,t){return w1(e,"toString",{configurable:!0,enumerable:!1,value:Nq(t),writable:!0})}:Fq;R1.exports=Bq});var Nc=v((Sve,A1)=>{i();var kq=S1(),Lq=Sc(),Wq=Lq(kq);A1.exports=Wq});var N1=v((Dve,D1)=>{i();var qq=mc();function Hq(e,t){var r=e==null?0:e.length;return!!r&&qq(e,t,0)>-1}D1.exports=Hq});var B1=v((Fve,F1)=>{i();var Vq=fs(),zq=N1(),Gq=1,jq=2,Uq=8,$q=16,Yq=32,Xq=64,Kq=128,Qq=256,Zq=512,Jq=[["ary",Kq],["bind",Gq],["bindKey",jq],["curry",Uq],["curryRight",$q],["flip",Zq],["partial",Yq],["partialRight",Xq],["rearg",Qq]];function eH(e,t){return Vq(Jq,function(r){var o="_."+r[0];t&r[1]&&!zq(e,o)&&e.push(o)}),e.sort()}F1.exports=eH});var Fc=v((kve,k1)=>{i();var tH=T1(),rH=M1(),nH=Nc(),oH=B1();function iH(e,t,r){var o=t+"";return nH(e,rH(o,oH(tH(o),r)))}k1.exports=iH});var Bc=v((Wve,q1)=>{i();var aH=x1(),sH=Ac(),uH=Fc(),lH=1,cH=2,fH=4,pH=8,L1=32,W1=64;function dH(e,t,r,o,n,a,s,u,f,p){var d=t&pH,h=d?s:void 0,m=d?void 0:s,g=d?a:void 0,C=d?void 0:a;t|=d?L1:W1,t&=~(d?W1:L1),t&fH||(t&=~(lH|cH));var x=[e,t,n,g,h,C,m,u,f,p],y=r.apply(void 0,x);return aH(e)&&sH(y,x),y.placeholder=o,uH(y,e,t)}q1.exports=dH});var kc=v((Hve,H1)=>{i();function mH(e){var t=e;return t.placeholder}H1.exports=mH});var z1=v((zve,V1)=>{i();var hH=Cs(),gH=Un(),CH=Math.min;function vH(e,t){for(var r=e.length,o=CH(t.length,r),n=hH(e);o--;){var a=t[o];e[o]=gH(a,r)?n[a]:void 0}return e}V1.exports=vH});var xs=v((jve,j1)=>{i();var G1="__lodash_placeholder__";function xH(e,t){for(var r=-1,o=e.length,n=0,a=[];++r<o;){var s=e[r];(s===t||s===G1)&&(e[r]=G1,a[n++]=r)}return a}j1.exports=xH});var Lc=v(($ve,Y1)=>{i();var _H=Ec(),yH=Ic(),OH=Jv(),U1=Zo(),TH=Bc(),bH=kc(),MH=z1(),PH=xs(),EH=Xe(),IH=1,wH=2,RH=8,SH=16,AH=128,DH=512;function $1(e,t,r,o,n,a,s,u,f,p){var d=t&AH,h=t&IH,m=t&wH,g=t&(RH|SH),C=t&DH,x=m?void 0:U1(e);function y(){for(var O=arguments.length,_=Array(O),S=O;S--;)_[S]=arguments[S];if(g)var M=bH(y),R=OH(_,M);if(o&&(_=_H(_,o,n,g)),a&&(_=yH(_,a,s,g)),O-=R,g&&O<p){var b=PH(_,M);return TH(e,t,$1,y.placeholder,r,_,b,u,f,p-O)}var I=h?r:this,T=m?I[e]:e;return O=_.length,u?_=MH(_,u):C&&O>1&&_.reverse(),d&&f<O&&(_.length=f),this&&this!==EH&&this instanceof y&&(T=x||U1(T)),T.apply(I,_)}return y}Y1.exports=$1});var K1=v((Xve,X1)=>{i();var NH=ps(),FH=Zo(),BH=Lc(),kH=Bc(),LH=kc(),WH=xs(),qH=Xe();function HH(e,t,r){var o=FH(e);function n(){for(var a=arguments.length,s=Array(a),u=a,f=LH(n);u--;)s[u]=arguments[u];var p=a<3&&s[0]!==f&&s[a-1]!==f?[]:WH(s,f);if(a-=p.length,a<r)return kH(e,t,BH,n.placeholder,void 0,s,p,void 0,void 0,r-a);var d=this&&this!==qH&&this instanceof n?o:e;return NH(d,this,s)}return n}X1.exports=HH});var Z1=v((Qve,Q1)=>{i();var VH=ps(),zH=Zo(),GH=Xe(),jH=1;function UH(e,t,r,o){var n=t&jH,a=zH(e);function s(){for(var u=-1,f=arguments.length,p=-1,d=o.length,h=Array(d+f),m=this&&this!==GH&&this instanceof s?a:e;++p<d;)h[p]=o[p];for(;f--;)h[p++]=arguments[++u];return VH(m,n?r:this,h)}return s}Q1.exports=UH});var ox=v((Jve,nx)=>{i();var $H=Ec(),YH=Ic(),J1=xs(),ex="__lodash_placeholder__",Wc=1,XH=2,KH=4,tx=8,Jo=128,rx=256,QH=Math.min;function ZH(e,t){var r=e[1],o=t[1],n=r|o,a=n<(Wc|XH|Jo),s=o==Jo&&r==tx||o==Jo&&r==rx&&e[7].length<=t[8]||o==(Jo|rx)&&t[7].length<=t[8]&&r==tx;if(!(a||s))return e;o&Wc&&(e[2]=t[2],n|=r&Wc?0:KH);var u=t[3];if(u){var f=e[3];e[3]=f?$H(f,u,t[4]):u,e[4]=f?J1(e[3],ex):t[4]}return u=t[5],u&&(f=e[5],e[5]=f?YH(f,u,t[6]):u,e[6]=f?J1(e[5],ex):t[6]),u=t[7],u&&(e[7]=u),o&Jo&&(e[8]=e[8]==null?t[8]:QH(e[8],t[8])),e[9]==null&&(e[9]=t[9]),e[0]=t[0],e[1]=n,e}nx.exports=ZH});var cx=v((t1e,lx)=>{i();var JH=Pc(),e6=Yv(),t6=K1(),r6=Lc(),n6=Z1(),o6=wc(),i6=ox(),a6=Ac(),s6=Fc(),ix=Cc(),u6="Expected a function",ax=1,l6=2,qc=8,Hc=16,Vc=32,sx=64,ux=Math.max;function c6(e,t,r,o,n,a,s,u){var f=t&l6;if(!f&&typeof e!="function")throw new TypeError(u6);var p=o?o.length:0;if(p||(t&=~(Vc|sx),o=n=void 0),s=s===void 0?s:ux(ix(s),0),u=u===void 0?u:ix(u),p-=n?n.length:0,t&sx){var d=o,h=n;o=n=void 0}var m=f?void 0:o6(e),g=[e,t,r,o,n,d,h,a,s,u];if(m&&i6(g,m),e=g[0],t=g[1],r=g[2],o=g[3],n=g[4],u=g[9]=g[9]===void 0?f?0:e.length:ux(g[9]-p,0),!u&&t&(qc|Hc)&&(t&=~(qc|Hc)),!t||t==ax)var C=e6(e,t,r);else t==qc||t==Hc?C=t6(e,t,u):(t==Vc||t==(ax|Vc))&&!n.length?C=n6(e,t,r,o):C=r6.apply(void 0,g);var x=m?JH:a6;return s6(x(C,g),e,t)}lx.exports=c6});var px=v((n1e,fx)=>{i();var f6=cx(),p6=8;function zc(e,t,r){t=r?void 0:t;var o=f6(e,p6,void 0,void 0,void 0,void 0,void 0,t);return o.placeholder=zc.placeholder,o}zc.placeholder={};fx.exports=zc});var Ex=v((k1e,Px)=>{i();function M6(){this.__data__=[],this.size=0}Px.exports=M6});var Os=v((W1e,Ix)=>{i();function P6(e,t){return e===t||e!==e&&t!==t}Ix.exports=P6});var ri=v((H1e,wx)=>{i();var E6=Os();function I6(e,t){for(var r=e.length;r--;)if(E6(e[r][0],t))return r;return-1}wx.exports=I6});var Sx=v((z1e,Rx)=>{i();var w6=ri(),R6=Array.prototype,S6=R6.splice;function A6(e){var t=this.__data__,r=w6(t,e);if(r<0)return!1;var o=t.length-1;return r==o?t.pop():S6.call(t,r,1),--this.size,!0}Rx.exports=A6});var Dx=v((j1e,Ax)=>{i();var D6=ri();function N6(e){var t=this.__data__,r=D6(t,e);return r<0?void 0:t[r][1]}Ax.exports=N6});var Fx=v(($1e,Nx)=>{i();var F6=ri();function B6(e){return F6(this.__data__,e)>-1}Nx.exports=B6});var kx=v((X1e,Bx)=>{i();var k6=ri();function L6(e,t){var r=this.__data__,o=k6(r,e);return o<0?(++this.size,r.push([e,t])):r[o][1]=t,this}Bx.exports=L6});var ni=v((Q1e,Lx)=>{i();var W6=Ex(),q6=Sx(),H6=Dx(),V6=Fx(),z6=kx();function Qn(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var o=e[t];this.set(o[0],o[1])}}Qn.prototype.clear=W6;Qn.prototype.delete=q6;Qn.prototype.get=H6;Qn.prototype.has=V6;Qn.prototype.set=z6;Lx.exports=Qn});var qx=v((J1e,Wx)=>{i();var G6=ni();function j6(){this.__data__=new G6,this.size=0}Wx.exports=j6});var Vx=v((txe,Hx)=>{i();function U6(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}Hx.exports=U6});var Gx=v((nxe,zx)=>{i();function $6(e){return this.__data__.get(e)}zx.exports=$6});var Ux=v((ixe,jx)=>{i();function Y6(e){return this.__data__.has(e)}jx.exports=Y6});var Ts=v((sxe,$x)=>{i();var X6=_r(),K6=Xe(),Q6=X6(K6,"Map");$x.exports=Q6});var oi=v((lxe,Yx)=>{i();var Z6=_r(),J6=Z6(Object,"create");Yx.exports=J6});var Qx=v((fxe,Kx)=>{i();var Xx=oi();function e5(){this.__data__=Xx?Xx(null):{},this.size=0}Kx.exports=e5});var Jx=v((dxe,Zx)=>{i();function t5(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}Zx.exports=t5});var t_=v((hxe,e_)=>{i();var r5=oi(),n5="__lodash_hash_undefined__",o5=Object.prototype,i5=o5.hasOwnProperty;function a5(e){var t=this.__data__;if(r5){var r=t[e];return r===n5?void 0:r}return i5.call(t,e)?t[e]:void 0}e_.exports=a5});var n_=v((Cxe,r_)=>{i();var s5=oi(),u5=Object.prototype,l5=u5.hasOwnProperty;function c5(e){var t=this.__data__;return s5?t[e]!==void 0:l5.call(t,e)}r_.exports=c5});var i_=v((xxe,o_)=>{i();var f5=oi(),p5="__lodash_hash_undefined__";function d5(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=f5&&t===void 0?p5:t,this}o_.exports=d5});var s_=v((yxe,a_)=>{i();var m5=Qx(),h5=Jx(),g5=t_(),C5=n_(),v5=i_();function Zn(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var o=e[t];this.set(o[0],o[1])}}Zn.prototype.clear=m5;Zn.prototype.delete=h5;Zn.prototype.get=g5;Zn.prototype.has=C5;Zn.prototype.set=v5;a_.exports=Zn});var c_=v((Txe,l_)=>{i();var u_=s_(),x5=ni(),_5=Ts();function y5(){this.size=0,this.__data__={hash:new u_,map:new(_5||x5),string:new u_}}l_.exports=y5});var p_=v((Mxe,f_)=>{i();function O5(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}f_.exports=O5});var ii=v((Exe,d_)=>{i();var T5=p_();function b5(e,t){var r=e.__data__;return T5(t)?r[typeof t=="string"?"string":"hash"]:r.map}d_.exports=b5});var h_=v((wxe,m_)=>{i();var M5=ii();function P5(e){var t=M5(this,e).delete(e);return this.size-=t?1:0,t}m_.exports=P5});var C_=v((Sxe,g_)=>{i();var E5=ii();function I5(e){return E5(this,e).get(e)}g_.exports=I5});var x_=v((Dxe,v_)=>{i();var w5=ii();function R5(e){return w5(this,e).has(e)}v_.exports=R5});var y_=v((Fxe,__)=>{i();var S5=ii();function A5(e,t){var r=S5(this,e),o=r.size;return r.set(e,t),this.size+=r.size==o?0:1,this}__.exports=A5});var bs=v((kxe,O_)=>{i();var D5=c_(),N5=h_(),F5=C_(),B5=x_(),k5=y_();function Jn(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var o=e[t];this.set(o[0],o[1])}}Jn.prototype.clear=D5;Jn.prototype.delete=N5;Jn.prototype.get=F5;Jn.prototype.has=B5;Jn.prototype.set=k5;O_.exports=Jn});var b_=v((Wxe,T_)=>{i();var L5=ni(),W5=Ts(),q5=bs(),H5=200;function V5(e,t){var r=this.__data__;if(r instanceof L5){var o=r.__data__;if(!W5||o.length<H5-1)return o.push([e,t]),this.size=++r.size,this;r=this.__data__=new q5(o)}return r.set(e,t),this.size=r.size,this}T_.exports=V5});var Ms=v((Hxe,M_)=>{i();var z5=ni(),G5=qx(),j5=Vx(),U5=Gx(),$5=Ux(),Y5=b_();function eo(e){var t=this.__data__=new z5(e);this.size=t.size}eo.prototype.clear=G5;eo.prototype.delete=j5;eo.prototype.get=U5;eo.prototype.has=$5;eo.prototype.set=Y5;M_.exports=eo});var Uc=v((zxe,E_)=>{i();var P_=Dc();function X5(e,t,r){t=="__proto__"&&P_?P_(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}E_.exports=X5});var Ps=v((jxe,I_)=>{i();var K5=Uc(),Q5=Os(),Z5=Object.prototype,J5=Z5.hasOwnProperty;function eV(e,t,r){var o=e[t];(!(J5.call(e,t)&&Q5(o,r))||r===void 0&&!(t in e))&&K5(e,t,r)}I_.exports=eV});var to=v(($xe,w_)=>{i();var tV=Ps(),rV=Uc();function nV(e,t,r,o){var n=!r;r||(r={});for(var a=-1,s=t.length;++a<s;){var u=t[a],f=o?o(r[u],e[u],u,r,e):void 0;f===void 0&&(f=e[u]),n?rV(r,u,f):tV(r,u,f)}return r}w_.exports=nV});var S_=v((Xxe,R_)=>{i();var oV=to(),iV=Zr();function aV(e,t){return e&&oV(t,iV(t),e)}R_.exports=aV});var D_=v((Qxe,A_)=>{i();function sV(e){var t=[];if(e!=null)for(var r in Object(e))t.push(r);return t}A_.exports=sV});var F_=v((Jxe,N_)=>{i();var uV=Bt(),lV=cs(),cV=D_(),fV=Object.prototype,pV=fV.hasOwnProperty;function dV(e){if(!uV(e))return cV(e);var t=lV(e),r=[];for(var o in e)o=="constructor"&&(t||!pV.call(e,o))||r.push(o);return r}N_.exports=dV});var Es=v((t_e,B_)=>{i();var mV=_c(),hV=F_(),gV=Uo();function CV(e){return gV(e)?mV(e,!0):hV(e)}B_.exports=CV});var L_=v((n_e,k_)=>{i();var vV=to(),xV=Es();function _V(e,t){return e&&vV(t,xV(t),e)}k_.exports=_V});var z_=v((ai,ro)=>{i();var yV=Xe(),V_=typeof ai=="object"&&ai&&!ai.nodeType&&ai,W_=V_&&typeof ro=="object"&&ro&&!ro.nodeType&&ro,OV=W_&&W_.exports===V_,q_=OV?yV.Buffer:void 0,H_=q_?q_.allocUnsafe:void 0;function TV(e,t){if(t)return e.slice();var r=e.length,o=H_?H_(r):new e.constructor(r);return e.copy(o),o}ro.exports=TV});var j_=v((a_e,G_)=>{i();function bV(e,t){for(var r=-1,o=e==null?0:e.length,n=0,a=[];++r<o;){var s=e[r];t(s,r,e)&&(a[n++]=s)}return a}G_.exports=bV});var $c=v((u_e,U_)=>{i();function MV(){return[]}U_.exports=MV});var Is=v((c_e,Y_)=>{i();var PV=j_(),EV=$c(),IV=Object.prototype,wV=IV.propertyIsEnumerable,$_=Object.getOwnPropertySymbols,RV=$_?function(e){return e==null?[]:(e=Object(e),PV($_(e),function(t){return wV.call(e,t)}))}:EV;Y_.exports=RV});var K_=v((p_e,X_)=>{i();var SV=to(),AV=Is();function DV(e,t){return SV(e,AV(e),t)}X_.exports=DV});var ws=v((m_e,Q_)=>{i();function NV(e,t){for(var r=-1,o=t.length,n=e.length;++r<o;)e[n+r]=t[r];return e}Q_.exports=NV});var Rs=v((g_e,Z_)=>{i();var FV=yc(),BV=FV(Object.getPrototypeOf,Object);Z_.exports=BV});var Yc=v((v_e,J_)=>{i();var kV=ws(),LV=Rs(),WV=Is(),qV=$c(),HV=Object.getOwnPropertySymbols,VV=HV?function(e){for(var t=[];e;)kV(t,WV(e)),e=LV(e);return t}:qV;J_.exports=VV});var ty=v((__e,ey)=>{i();var zV=to(),GV=Yc();function jV(e,t){return zV(e,GV(e),t)}ey.exports=jV});var Xc=v((O_e,ry)=>{i();var UV=ws(),$V=ot();function YV(e,t,r){var o=t(e);return $V(e)?o:UV(o,r(e))}ry.exports=YV});var Kc=v((b_e,ny)=>{i();var XV=Xc(),KV=Is(),QV=Zr();function ZV(e){return XV(e,QV,KV)}ny.exports=ZV});var Qc=v((P_e,oy)=>{i();var JV=Xc(),ez=Yc(),tz=Es();function rz(e){return JV(e,tz,ez)}oy.exports=rz});var ay=v((I_e,iy)=>{i();var nz=_r(),oz=Xe(),iz=nz(oz,"DataView");iy.exports=iz});var uy=v((R_e,sy)=>{i();var az=_r(),sz=Xe(),uz=az(sz,"Promise");sy.exports=uz});var cy=v((A_e,ly)=>{i();var lz=_r(),cz=Xe(),fz=lz(cz,"Set");ly.exports=fz});var si=v((N_e,Cy)=>{i();var Zc=ay(),Jc=Ts(),ef=uy(),tf=cy(),rf=bc(),gy=xr(),no=Tc(),fy="[object Map]",pz="[object Object]",py="[object Promise]",dy="[object Set]",my="[object WeakMap]",hy="[object DataView]",dz=no(Zc),mz=no(Jc),hz=no(ef),gz=no(tf),Cz=no(rf),Jr=gy;(Zc&&Jr(new Zc(new ArrayBuffer(1)))!=hy||Jc&&Jr(new Jc)!=fy||ef&&Jr(ef.resolve())!=py||tf&&Jr(new tf)!=dy||rf&&Jr(new rf)!=my)&&(Jr=function(e){var t=gy(e),r=t==pz?e.constructor:void 0,o=r?no(r):"";if(o)switch(o){case dz:return hy;case mz:return fy;case hz:return py;case gz:return dy;case Cz:return my}return t});Cy.exports=Jr});var xy=v((B_e,vy)=>{i();var vz=Object.prototype,xz=vz.hasOwnProperty;function _z(e){var t=e.length,r=new e.constructor(t);return t&&typeof e[0]=="string"&&xz.call(e,"index")&&(r.index=e.index,r.input=e.input),r}vy.exports=_z});var nf=v((L_e,_y)=>{i();var yz=Xe(),Oz=yz.Uint8Array;_y.exports=Oz});var Ss=v((q_e,Oy)=>{i();var yy=nf();function Tz(e){var t=new e.constructor(e.byteLength);return new yy(t).set(new yy(e)),t}Oy.exports=Tz});var by=v((V_e,Ty)=>{i();var bz=Ss();function Mz(e,t){var r=t?bz(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}Ty.exports=Mz});var Py=v((G_e,My)=>{i();var Pz=/\w*$/;function Ez(e){var t=new e.constructor(e.source,Pz.exec(e));return t.lastIndex=e.lastIndex,t}My.exports=Ez});var Sy=v((U_e,Ry)=>{i();var Ey=Qr(),Iy=Ey?Ey.prototype:void 0,wy=Iy?Iy.valueOf:void 0;function Iz(e){return wy?Object(wy.call(e)):{}}Ry.exports=Iz});var Dy=v((Y_e,Ay)=>{i();var wz=Ss();function Rz(e,t){var r=t?wz(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}Ay.exports=Rz});var Fy=v((K_e,Ny)=>{i();var Sz=Ss(),Az=by(),Dz=Py(),Nz=Sy(),Fz=Dy(),Bz="[object Boolean]",kz="[object Date]",Lz="[object Map]",Wz="[object Number]",qz="[object RegExp]",Hz="[object Set]",Vz="[object String]",zz="[object Symbol]",Gz="[object ArrayBuffer]",jz="[object DataView]",Uz="[object Float32Array]",$z="[object Float64Array]",Yz="[object Int8Array]",Xz="[object Int16Array]",Kz="[object Int32Array]",Qz="[object Uint8Array]",Zz="[object Uint8ClampedArray]",Jz="[object Uint16Array]",eG="[object Uint32Array]";function tG(e,t,r){var o=e.constructor;switch(t){case Gz:return Sz(e);case Bz:case kz:return new o(+e);case jz:return Az(e,r);case Uz:case $z:case Yz:case Xz:case Kz:case Qz:case Zz:case Jz:case eG:return Fz(e,r);case Lz:return new o;case Wz:case Vz:return new o(e);case qz:return Dz(e);case Hz:return new o;case zz:return Nz(e)}}Ny.exports=tG});var ky=v((Z_e,By)=>{i();var rG=Qo(),nG=Rs(),oG=cs();function iG(e){return typeof e.constructor=="function"&&!oG(e)?rG(nG(e)):{}}By.exports=iG});var Wy=v((eye,Ly)=>{i();var aG=si(),sG=bt(),uG="[object Map]";function lG(e){return sG(e)&&aG(e)==uG}Ly.exports=lG});var zy=v((rye,Vy)=>{i();var cG=Wy(),fG=us(),qy=ls(),Hy=qy&&qy.isMap,pG=Hy?fG(Hy):cG;Vy.exports=pG});var jy=v((oye,Gy)=>{i();var dG=si(),mG=bt(),hG="[object Set]";function gG(e){return mG(e)&&dG(e)==hG}Gy.exports=gG});var Xy=v((aye,Yy)=>{i();var CG=jy(),vG=us(),Uy=ls(),$y=Uy&&Uy.isSet,xG=$y?vG($y):CG;Yy.exports=xG});var Ds=v((uye,Jy)=>{i();var _G=Ms(),yG=fs(),OG=Ps(),TG=S_(),bG=L_(),MG=z_(),PG=Cs(),EG=K_(),IG=ty(),wG=Kc(),RG=Qc(),SG=si(),AG=xy(),DG=Fy(),NG=ky(),FG=ot(),BG=ss(),kG=zy(),LG=Bt(),WG=Xy(),qG=Zr(),HG=Es(),VG=1,zG=2,GG=4,Ky="[object Arguments]",jG="[object Array]",UG="[object Boolean]",$G="[object Date]",YG="[object Error]",Qy="[object Function]",XG="[object GeneratorFunction]",KG="[object Map]",QG="[object Number]",Zy="[object Object]",ZG="[object RegExp]",JG="[object Set]",e8="[object String]",t8="[object Symbol]",r8="[object WeakMap]",n8="[object ArrayBuffer]",o8="[object DataView]",i8="[object Float32Array]",a8="[object Float64Array]",s8="[object Int8Array]",u8="[object Int16Array]",l8="[object Int32Array]",c8="[object Uint8Array]",f8="[object Uint8ClampedArray]",p8="[object Uint16Array]",d8="[object Uint32Array]",he={};he[Ky]=he[jG]=he[n8]=he[o8]=he[UG]=he[$G]=he[i8]=he[a8]=he[s8]=he[u8]=he[l8]=he[KG]=he[QG]=he[Zy]=he[ZG]=he[JG]=he[e8]=he[t8]=he[c8]=he[f8]=he[p8]=he[d8]=!0;he[YG]=he[Qy]=he[r8]=!1;function As(e,t,r,o,n,a){var s,u=t&VG,f=t&zG,p=t&GG;if(r&&(s=n?r(e,o,n,a):r(e)),s!==void 0)return s;if(!LG(e))return e;var d=FG(e);if(d){if(s=AG(e),!u)return PG(e,s)}else{var h=SG(e),m=h==Qy||h==XG;if(BG(e))return MG(e,u);if(h==Zy||h==Ky||m&&!n){if(s=f||m?{}:NG(e),!u)return f?IG(e,bG(s,e)):EG(e,TG(s,e))}else{if(!he[h])return n?e:{};s=DG(e,h,u)}}a||(a=new _G);var g=a.get(e);if(g)return g;a.set(e,s),WG(e)?e.forEach(function(y){s.add(As(y,t,r,y,e,a))}):kG(e)&&e.forEach(function(y,O){s.set(O,As(y,t,r,O,e,a))});var C=p?f?RG:wG:f?HG:qG,x=d?void 0:C(e);return yG(x||e,function(y,O){x&&(O=y,y=e[O]),OG(s,O,As(y,t,r,O,e,a))}),s}Jy.exports=As});var tO=v((cye,eO)=>{i();var m8=Ds(),h8=4;function g8(e){return m8(e,h8)}eO.exports=g8});var nO=v((pye,rO)=>{i();function C8(e){return e==null}rO.exports=C8});var yr=v((mye,oO)=>{i();function v8(e){return e===void 0}oO.exports=v8});var Fs=v((OOe,mO)=>{i();var O8=ot(),T8=Gn(),b8=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,M8=/^\w*$/;function P8(e,t){if(O8(e))return!1;var r=typeof e;return r=="number"||r=="symbol"||r=="boolean"||e==null||T8(e)?!0:M8.test(e)||!b8.test(e)||t!=null&&e in Object(t)}mO.exports=P8});var CO=v((bOe,gO)=>{i();var hO=bs(),E8="Expected a function";function uf(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(E8);var r=function(){var o=arguments,n=t?t.apply(this,o):o[0],a=r.cache;if(a.has(n))return a.get(n);var s=e.apply(this,o);return r.cache=a.set(n,s)||a,s};return r.cache=new(uf.Cache||hO),r}uf.Cache=hO;gO.exports=uf});var xO=v((POe,vO)=>{i();var I8=CO(),w8=500;function R8(e){var t=I8(e,function(o){return r.size===w8&&r.clear(),o}),r=t.cache;return t}vO.exports=R8});var yO=v((IOe,_O)=>{i();var S8=xO(),A8=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,D8=/\\(\\)?/g,N8=S8(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(A8,function(r,o,n,a){t.push(n?a.replace(D8,"$1"):o||r)}),t});_O.exports=N8});var EO=v((ROe,PO)=>{i();var OO=Qr(),F8=is(),B8=ot(),k8=Gn(),L8=1/0,TO=OO?OO.prototype:void 0,bO=TO?TO.toString:void 0;function MO(e){if(typeof e=="string")return e;if(B8(e))return F8(e,MO)+"";if(k8(e))return bO?bO.call(e):"";var t=e+"";return t=="0"&&1/e==-L8?"-0":t}PO.exports=MO});var io=v((AOe,IO)=>{i();var W8=EO();function q8(e){return e==null?"":W8(e)}IO.exports=q8});var tn=v((NOe,wO)=>{i();var H8=ot(),V8=Fs(),z8=yO(),G8=io();function j8(e,t){return H8(e)?e:V8(e,t)?[e]:z8(G8(e))}wO.exports=j8});var rn=v((BOe,RO)=>{i();var U8=Gn(),$8=1/0;function Y8(e){if(typeof e=="string"||U8(e))return e;var t=e+"";return t=="0"&&1/e==-$8?"-0":t}RO.exports=Y8});var fi=v((LOe,SO)=>{i();var X8=tn(),K8=rn();function Q8(e,t){t=X8(t,e);for(var r=0,o=t.length;e!=null&&r<o;)e=e[K8(t[r++])];return r&&r==o?e:void 0}SO.exports=Q8});var nn=v((qOe,AO)=>{i();var Z8=fi();function J8(e,t,r){var o=e==null?void 0:Z8(e,t);return o===void 0?r:o}AO.exports=J8});var FO=v((VOe,NO)=>{i();var ej=Ps(),tj=tn(),rj=Un(),DO=Bt(),nj=rn();function oj(e,t,r,o){if(!DO(e))return e;t=tj(t,e);for(var n=-1,a=t.length,s=a-1,u=e;u!=null&&++n<a;){var f=nj(t[n]),p=r;if(f==="__proto__"||f==="constructor"||f==="prototype")return e;if(n!=s){var d=u[f];p=o?o(d,f,u):void 0,p===void 0&&(p=DO(d)?d:rj(t[n+1])?[]:{})}ej(u,f,p),u=u[f]}return e}NO.exports=oj});var kO=v((GOe,BO)=>{i();var ij=fi(),aj=FO(),sj=tn();function uj(e,t,r){for(var o=-1,n=t.length,a={};++o<n;){var s=t[o],u=ij(e,s);r(u,s)&&aj(a,sj(s,e),u)}return a}BO.exports=uj});var WO=v((UOe,LO)=>{i();function lj(e,t){return e!=null&&t in Object(e)}LO.exports=lj});var HO=v((YOe,qO)=>{i();var cj=tn(),fj=as(),pj=ot(),dj=Un(),mj=os(),hj=rn();function gj(e,t,r){t=cj(t,e);for(var o=-1,n=t.length,a=!1;++o<n;){var s=hj(t[o]);if(!(a=e!=null&&r(e,s)))break;e=e[s]}return a||++o!=n?a:(n=e==null?0:e.length,!!n&&mj(n)&&dj(s,n)&&(pj(e)||fj(e)))}qO.exports=gj});var lf=v((KOe,VO)=>{i();var Cj=WO(),vj=HO();function xj(e,t){return e!=null&&vj(e,t,Cj)}VO.exports=xj});var GO=v((ZOe,zO)=>{i();var _j=kO(),yj=lf();function Oj(e,t){return _j(e,t,function(r,o){return yj(e,o)})}zO.exports=Oj});var YO=v((eTe,$O)=>{i();var jO=Qr(),Tj=as(),bj=ot(),UO=jO?jO.isConcatSpreadable:void 0;function Mj(e){return bj(e)||Tj(e)||!!(UO&&e&&e[UO])}$O.exports=Mj});var QO=v((rTe,KO)=>{i();var Pj=ws(),Ej=YO();function XO(e,t,r,o,n){var a=-1,s=e.length;for(r||(r=Ej),n||(n=[]);++a<s;){var u=e[a];t>0&&r(u)?t>1?XO(u,t-1,r,o,n):Pj(n,u):o||(n[n.length]=u)}return n}KO.exports=XO});var JO=v((oTe,ZO)=>{i();var Ij=QO();function wj(e){var t=e==null?0:e.length;return t?Ij(e,1):[]}ZO.exports=wj});var rT=v((aTe,tT)=>{i();var Rj=ps(),eT=Math.max;function Sj(e,t,r){return t=eT(t===void 0?e.length-1:t,0),function(){for(var o=arguments,n=-1,a=eT(o.length-t,0),s=Array(a);++n<a;)s[n]=o[t+n];n=-1;for(var u=Array(t+1);++n<t;)u[n]=o[n];return u[t]=r(s),Rj(e,this,u)}}tT.exports=Sj});var cf=v((uTe,nT)=>{i();var Aj=JO(),Dj=rT(),Nj=Nc();function Fj(e){return Nj(Dj(e,void 0,Aj),e+"")}nT.exports=Fj});var Bs=v((cTe,oT)=>{i();var Bj=GO(),kj=cf(),Lj=kj(function(e,t){return e==null?{}:Bj(e,t)});oT.exports=Lj});var uT=v((yTe,sT)=>{i();function Wj(e){var t=e==null?0:e.length;return t?e[t-1]:void 0}sT.exports=Wj});var ff=v((TTe,lT)=>{i();function qj(e,t,r){var o=-1,n=e.length;t<0&&(t=-t>n?0:n+t),r=r>n?n:r,r<0&&(r+=n),n=t>r?0:r-t>>>0,t>>>=0;for(var a=Array(n);++o<n;)a[o]=e[o+t];return a}lT.exports=qj});var fT=v((MTe,cT)=>{i();var Hj=fi(),Vj=ff();function zj(e,t){return t.length<2?e:Hj(e,Vj(t,0,-1))}cT.exports=zj});var pf=v((ETe,pT)=>{i();var Gj=tn(),jj=uT(),Uj=fT(),$j=rn();function Yj(e,t){return t=Gj(t,e),e=Uj(e,t),e==null||delete e[$j(jj(t))]}pT.exports=Yj});var hT=v((wTe,mT)=>{i();var Xj=xr(),Kj=Rs(),Qj=bt(),Zj="[object Object]",Jj=Function.prototype,eU=Object.prototype,dT=Jj.toString,tU=eU.hasOwnProperty,rU=dT.call(Object);function nU(e){if(!Qj(e)||Xj(e)!=Zj)return!1;var t=Kj(e);if(t===null)return!0;var r=tU.call(t,"constructor")&&t.constructor;return typeof r=="function"&&r instanceof r&&dT.call(r)==rU}mT.exports=nU});var CT=v((STe,gT)=>{i();var oU=hT();function iU(e){return oU(e)?void 0:e}gT.exports=iU});var df=v((DTe,vT)=>{i();var aU=is(),sU=Ds(),uU=pf(),lU=tn(),cU=to(),fU=CT(),pU=cf(),dU=Qc(),mU=1,hU=2,gU=4,CU=pU(function(e,t){var r={};if(e==null)return r;var o=!1;t=aU(t,function(a){return a=lU(a,e),o||(o=a.length>1),a}),cU(e,dU(e),r),o&&(r=sU(r,mU|hU|gU,fU));for(var n=t.length;n--;)uU(r,t[n]);return r});vT.exports=CU});var mf=v((FTe,xT)=>{i();var vU=Gn();function xU(e,t,r){for(var o=-1,n=e.length;++o<n;){var a=e[o],s=t(a);if(s!=null&&(u===void 0?s===s&&!vU(s):r(s,u)))var u=s,f=a}return f}xT.exports=xU});var yT=v((kTe,_T)=>{i();function _U(e,t){return e>t}_T.exports=_U});var TT=v((WTe,OT)=>{i();var yU="__lodash_hash_undefined__";function OU(e){return this.__data__.set(e,yU),this}OT.exports=OU});var MT=v((HTe,bT)=>{i();function TU(e){return this.__data__.has(e)}bT.exports=TU});var ET=v((zTe,PT)=>{i();var bU=bs(),MU=TT(),PU=MT();function Ls(e){var t=-1,r=e==null?0:e.length;for(this.__data__=new bU;++t<r;)this.add(e[t])}Ls.prototype.add=Ls.prototype.push=MU;Ls.prototype.has=PU;PT.exports=Ls});var wT=v((jTe,IT)=>{i();function EU(e,t){for(var r=-1,o=e==null?0:e.length;++r<o;)if(t(e[r],r,e))return!0;return!1}IT.exports=EU});var ST=v(($Te,RT)=>{i();function IU(e,t){return e.has(t)}RT.exports=IU});var hf=v((XTe,AT)=>{i();var wU=ET(),RU=wT(),SU=ST(),AU=1,DU=2;function NU(e,t,r,o,n,a){var s=r&AU,u=e.length,f=t.length;if(u!=f&&!(s&&f>u))return!1;var p=a.get(e),d=a.get(t);if(p&&d)return p==t&&d==e;var h=-1,m=!0,g=r&DU?new wU:void 0;for(a.set(e,t),a.set(t,e);++h<u;){var C=e[h],x=t[h];if(o)var y=s?o(x,C,h,t,e,a):o(C,x,h,e,t,a);if(y!==void 0){if(y)continue;m=!1;break}if(g){if(!RU(t,function(O,_){if(!SU(g,_)&&(C===O||n(C,O,r,o,a)))return g.push(_)})){m=!1;break}}else if(!(C===x||n(C,x,r,o,a))){m=!1;break}}return a.delete(e),a.delete(t),m}AT.exports=NU});var NT=v((QTe,DT)=>{i();function FU(e){var t=-1,r=Array(e.size);return e.forEach(function(o,n){r[++t]=[n,o]}),r}DT.exports=FU});var BT=v((JTe,FT)=>{i();function BU(e){var t=-1,r=Array(e.size);return e.forEach(function(o){r[++t]=o}),r}FT.exports=BU});var HT=v((tbe,qT)=>{i();var kT=Qr(),LT=nf(),kU=Os(),LU=hf(),WU=NT(),qU=BT(),HU=1,VU=2,zU="[object Boolean]",GU="[object Date]",jU="[object Error]",UU="[object Map]",$U="[object Number]",YU="[object RegExp]",XU="[object Set]",KU="[object String]",QU="[object Symbol]",ZU="[object ArrayBuffer]",JU="[object DataView]",WT=kT?kT.prototype:void 0,gf=WT?WT.valueOf:void 0;function e7(e,t,r,o,n,a,s){switch(r){case JU:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case ZU:return!(e.byteLength!=t.byteLength||!a(new LT(e),new LT(t)));case zU:case GU:case $U:return kU(+e,+t);case jU:return e.name==t.name&&e.message==t.message;case YU:case KU:return e==t+"";case UU:var u=WU;case XU:var f=o&HU;if(u||(u=qU),e.size!=t.size&&!f)return!1;var p=s.get(e);if(p)return p==t;o|=VU,s.set(e,t);var d=LU(u(e),u(t),o,n,a,s);return s.delete(e),d;case QU:if(gf)return gf.call(e)==gf.call(t)}return!1}qT.exports=e7});var GT=v((nbe,zT)=>{i();var VT=Kc(),t7=1,r7=Object.prototype,n7=r7.hasOwnProperty;function o7(e,t,r,o,n,a){var s=r&t7,u=VT(e),f=u.length,p=VT(t),d=p.length;if(f!=d&&!s)return!1;for(var h=f;h--;){var m=u[h];if(!(s?m in t:n7.call(t,m)))return!1}var g=a.get(e),C=a.get(t);if(g&&C)return g==t&&C==e;var x=!0;a.set(e,t),a.set(t,e);for(var y=s;++h<f;){m=u[h];var O=e[m],_=t[m];if(o)var S=s?o(_,O,m,t,e,a):o(O,_,m,e,t,a);if(!(S===void 0?O===_||n(O,_,r,o,a):S)){x=!1;break}y||(y=m=="constructor")}if(x&&!y){var M=e.constructor,R=t.constructor;M!=R&&"constructor"in e&&"constructor"in t&&!(typeof M=="function"&&M instanceof M&&typeof R=="function"&&R instanceof R)&&(x=!1)}return a.delete(e),a.delete(t),x}zT.exports=o7});var ZT=v((ibe,QT)=>{i();var Cf=Ms(),i7=hf(),a7=HT(),s7=GT(),jT=si(),UT=ot(),$T=ss(),u7=xc(),l7=1,YT="[object Arguments]",XT="[object Array]",Ws="[object Object]",c7=Object.prototype,KT=c7.hasOwnProperty;function f7(e,t,r,o,n,a){var s=UT(e),u=UT(t),f=s?XT:jT(e),p=u?XT:jT(t);f=f==YT?Ws:f,p=p==YT?Ws:p;var d=f==Ws,h=p==Ws,m=f==p;if(m&&$T(e)){if(!$T(t))return!1;s=!0,d=!1}if(m&&!d)return a||(a=new Cf),s||u7(e)?i7(e,t,r,o,n,a):a7(e,t,f,r,o,n,a);if(!(r&l7)){var g=d&&KT.call(e,"__wrapped__"),C=h&&KT.call(t,"__wrapped__");if(g||C){var x=g?e.value():e,y=C?t.value():t;return a||(a=new Cf),n(x,y,r,o,a)}}return m?(a||(a=new Cf),s7(e,t,r,o,n,a)):!1}QT.exports=f7});var vf=v((sbe,tb)=>{i();var p7=ZT(),JT=bt();function eb(e,t,r,o,n){return e===t?!0:e==null||t==null||!JT(e)&&!JT(t)?e!==e&&t!==t:p7(e,t,r,o,eb,n)}tb.exports=eb});var nb=v((lbe,rb)=>{i();var d7=Ms(),m7=vf(),h7=1,g7=2;function C7(e,t,r,o){var n=r.length,a=n,s=!o;if(e==null)return!a;for(e=Object(e);n--;){var u=r[n];if(s&&u[2]?u[1]!==e[u[0]]:!(u[0]in e))return!1}for(;++n<a;){u=r[n];var f=u[0],p=e[f],d=u[1];if(s&&u[2]){if(p===void 0&&!(f in e))return!1}else{var h=new d7;if(o)var m=o(p,d,f,e,t,h);if(!(m===void 0?m7(d,p,h7|g7,o,h):m))return!1}}return!0}rb.exports=C7});var xf=v((fbe,ob)=>{i();var v7=Bt();function x7(e){return e===e&&!v7(e)}ob.exports=x7});var ab=v((dbe,ib)=>{i();var _7=xf(),y7=Zr();function O7(e){for(var t=y7(e),r=t.length;r--;){var o=t[r],n=e[o];t[r]=[o,n,_7(n)]}return t}ib.exports=O7});var _f=v((hbe,sb)=>{i();function T7(e,t){return function(r){return r==null?!1:r[e]===t&&(t!==void 0||e in Object(r))}}sb.exports=T7});var lb=v((Cbe,ub)=>{i();var b7=nb(),M7=ab(),P7=_f();function E7(e){var t=M7(e);return t.length==1&&t[0][2]?P7(t[0][0],t[0][1]):function(r){return r===e||b7(r,e,t)}}ub.exports=E7});var fb=v((xbe,cb)=>{i();var I7=vf(),w7=nn(),R7=lf(),S7=Fs(),A7=xf(),D7=_f(),N7=rn(),F7=1,B7=2;function k7(e,t){return S7(e)&&A7(t)?D7(N7(e),t):function(r){var o=w7(r,e);return o===void 0&&o===t?R7(r,e):I7(t,o,F7|B7)}}cb.exports=k7});var db=v((ybe,pb)=>{i();function L7(e){return function(t){return t?.[e]}}pb.exports=L7});var hb=v((Tbe,mb)=>{i();var W7=fi();function q7(e){return function(t){return W7(t,e)}}mb.exports=q7});var Cb=v((Mbe,gb)=>{i();var H7=db(),V7=hb(),z7=Fs(),G7=rn();function j7(e){return z7(e)?H7(G7(e)):V7(e)}gb.exports=j7});var qs=v((Ebe,vb)=>{i();var U7=lb(),$7=fb(),Y7=Ko(),X7=ot(),K7=Cb();function Q7(e){return typeof e=="function"?e:e==null?Y7:typeof e=="object"?X7(e)?$7(e[0],e[1]):U7(e):K7(e)}vb.exports=Q7});var _b=v((wbe,xb)=>{i();var Z7=mf(),J7=yT(),e$=qs();function t$(e,t){return e&&e.length?Z7(e,e$(t,2),J7):void 0}xb.exports=t$});var Ob=v((Sbe,yb)=>{i();function r$(e,t){return e<t}yb.exports=r$});var bb=v((Dbe,Tb)=>{i();var n$=mf(),o$=qs(),i$=Ob();function a$(e,t){return e&&e.length?n$(e,o$(t,2),i$):void 0}Tb.exports=a$});var Pb=v((Fbe,Mb)=>{i();function s$(e,t,r,o){var n=-1,a=e==null?0:e.length;for(o&&a&&(r=e[++n]);++n<a;)r=t(r,e[n],n,e);return r}Mb.exports=s$});var Ib=v((kbe,Eb)=>{i();function u$(e){return function(t){return e?.[t]}}Eb.exports=u$});var Rb=v((Wbe,wb)=>{i();var l$=Ib(),c$={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},f$=l$(c$);wb.exports=f$});var Ab=v((Hbe,Sb)=>{i();var p$=Rb(),d$=io(),m$=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,h$="\\u0300-\\u036f",g$="\\ufe20-\\ufe2f",C$="\\u20d0-\\u20ff",v$=h$+g$+C$,x$="["+v$+"]",_$=RegExp(x$,"g");function y$(e){return e=d$(e),e&&e.replace(m$,p$).replace(_$,"")}Sb.exports=y$});var Nb=v((zbe,Db)=>{i();var O$=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function T$(e){return e.match(O$)||[]}Db.exports=T$});var Bb=v((jbe,Fb)=>{i();var b$=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function M$(e){return b$.test(e)}Fb.exports=M$});var tM=v(($be,eM)=>{i();var Hb="\\ud800-\\udfff",P$="\\u0300-\\u036f",E$="\\ufe20-\\ufe2f",I$="\\u20d0-\\u20ff",w$=P$+E$+I$,Vb="\\u2700-\\u27bf",zb="a-z\\xdf-\\xf6\\xf8-\\xff",R$="\\xac\\xb1\\xd7\\xf7",S$="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",A$="\\u2000-\\u206f",D$=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Gb="A-Z\\xc0-\\xd6\\xd8-\\xde",N$="\\ufe0e\\ufe0f",jb=R$+S$+A$+D$,Ub="['\u2019]",kb="["+jb+"]",F$="["+w$+"]",$b="\\d+",B$="["+Vb+"]",Yb="["+zb+"]",Xb="[^"+Hb+jb+$b+Vb+zb+Gb+"]",k$="\\ud83c[\\udffb-\\udfff]",L$="(?:"+F$+"|"+k$+")",W$="[^"+Hb+"]",Kb="(?:\\ud83c[\\udde6-\\uddff]){2}",Qb="[\\ud800-\\udbff][\\udc00-\\udfff]",ao="["+Gb+"]",q$="\\u200d",Lb="(?:"+Yb+"|"+Xb+")",H$="(?:"+ao+"|"+Xb+")",Wb="(?:"+Ub+"(?:d|ll|m|re|s|t|ve))?",qb="(?:"+Ub+"(?:D|LL|M|RE|S|T|VE))?",Zb=L$+"?",Jb="["+N$+"]?",V$="(?:"+q$+"(?:"+[W$,Kb,Qb].join("|")+")"+Jb+Zb+")*",z$="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",G$="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",j$=Jb+Zb+V$,U$="(?:"+[B$,Kb,Qb].join("|")+")"+j$,$$=RegExp([ao+"?"+Yb+"+"+Wb+"(?="+[kb,ao,"$"].join("|")+")",H$+"+"+qb+"(?="+[kb,ao+Lb,"$"].join("|")+")",ao+"?"+Lb+"+"+Wb,ao+"+"+qb,G$,z$,$b,U$].join("|"),"g");function Y$(e){return e.match($$)||[]}eM.exports=Y$});var nM=v((Xbe,rM)=>{i();var X$=Nb(),K$=Bb(),Q$=io(),Z$=tM();function J$(e,t,r){return e=Q$(e),t=r?void 0:t,t===void 0?K$(e)?Z$(e):X$(e):e.match(t)||[]}rM.exports=J$});var iM=v((Qbe,oM)=>{i();var e9=Pb(),t9=Ab(),r9=nM(),n9="['\u2019]",o9=RegExp(n9,"g");function i9(e){return function(t){return e9(r9(t9(t).replace(o9,"")),e,"")}}oM.exports=i9});var yf=v((Jbe,aM)=>{i();var a9=iM(),s9=a9(function(e,t,r){return e+(r?"-":"")+t.toLowerCase()});aM.exports=s9});var PM=v((sPe,MM)=>{i();var bM=6e4;MM.exports=function(t){var r=new Date(t.getTime()),o=r.getTimezoneOffset();r.setSeconds(0,0);var n=r.getTime()%bM;return o*bM+n}});var Ef=v((lPe,EM)=>{i();function d9(e){return e instanceof Date}EM.exports=d9});var br=v((fPe,wM)=>{i();var If=PM(),m9=Ef(),wf=36e5,Rf=6e4,h9=2,g9=/[T ]/,C9=/:/,v9=/^(\d{2})$/,x9=[/^([+-]\d{2})$/,/^([+-]\d{3})$/,/^([+-]\d{4})$/],_9=/^(\d{4})/,y9=[/^([+-]\d{4})/,/^([+-]\d{5})/,/^([+-]\d{6})/],O9=/^-(\d{2})$/,T9=/^-?(\d{3})$/,b9=/^-?(\d{2})-?(\d{2})$/,M9=/^-?W(\d{2})$/,P9=/^-?W(\d{2})-?(\d{1})$/,E9=/^(\d{2}([.,]\d*)?)$/,I9=/^(\d{2}):?(\d{2}([.,]\d*)?)$/,w9=/^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,R9=/([Z+-].*)$/,S9=/^(Z)$/,A9=/^([+-])(\d{2})$/,D9=/^([+-])(\d{2}):?(\d{2})$/;function N9(e,t){if(m9(e))return new Date(e.getTime());if(typeof e!="string")return new Date(e);var r=t||{},o=r.additionalDigits;o==null?o=h9:o=Number(o);var n=F9(e),a=B9(n.date,o),s=a.year,u=a.restDateString,f=k9(u,s);if(f){var p=f.getTime(),d=0,h;if(n.time&&(d=L9(n.time)),n.timezone)h=W9(n.timezone)*Rf;else{var m=p+d,g=new Date(m);h=If(g);var C=new Date(m);C.setDate(g.getDate()+1);var x=If(C)-If(g);x>0&&(h+=x)}return new Date(p+d+h)}else return new Date(e)}function F9(e){var t={},r=e.split(g9),o;if(C9.test(r[0])?(t.date=null,o=r[0]):(t.date=r[0],o=r[1]),o){var n=R9.exec(o);n?(t.time=o.replace(n[1],""),t.timezone=n[1]):t.time=o}return t}function B9(e,t){var r=x9[t],o=y9[t],n;if(n=_9.exec(e)||o.exec(e),n){var a=n[1];return{year:parseInt(a,10),restDateString:e.slice(a.length)}}if(n=v9.exec(e)||r.exec(e),n){var s=n[1];return{year:parseInt(s,10)*100,restDateString:e.slice(s.length)}}return{year:null}}function k9(e,t){if(t===null)return null;var r,o,n,a;if(e.length===0)return o=new Date(0),o.setUTCFullYear(t),o;if(r=O9.exec(e),r)return o=new Date(0),n=parseInt(r[1],10)-1,o.setUTCFullYear(t,n),o;if(r=T9.exec(e),r){o=new Date(0);var s=parseInt(r[1],10);return o.setUTCFullYear(t,0,s),o}if(r=b9.exec(e),r){o=new Date(0),n=parseInt(r[1],10)-1;var u=parseInt(r[2],10);return o.setUTCFullYear(t,n,u),o}if(r=M9.exec(e),r)return a=parseInt(r[1],10)-1,IM(t,a);if(r=P9.exec(e),r){a=parseInt(r[1],10)-1;var f=parseInt(r[2],10)-1;return IM(t,a,f)}return null}function L9(e){var t,r,o;if(t=E9.exec(e),t)return r=parseFloat(t[1].replace(",",".")),r%24*wf;if(t=I9.exec(e),t)return r=parseInt(t[1],10),o=parseFloat(t[2].replace(",",".")),r%24*wf+o*Rf;if(t=w9.exec(e),t){r=parseInt(t[1],10),o=parseInt(t[2],10);var n=parseFloat(t[3].replace(",","."));return r%24*wf+o*Rf+n*1e3}return null}function W9(e){var t,r;return t=S9.exec(e),t?0:(t=A9.exec(e),t?(r=parseInt(t[2],10)*60,t[1]==="+"?-r:r):(t=D9.exec(e),t?(r=parseInt(t[2],10)*60+parseInt(t[3],10),t[1]==="+"?-r:r):0))}function IM(e,t,r){t=t||0,r=r||0;var o=new Date(0);o.setUTCFullYear(e,0,4);var n=o.getUTCDay()||7,a=t*7+r+1-n;return o.setUTCDate(o.getUTCDate()+a),o}wM.exports=N9});var SM=v((dPe,RM)=>{i();var q9=br();function H9(e){var t=q9(e),r=new Date(0);return r.setFullYear(t.getFullYear(),0,1),r.setHours(0,0,0,0),r}RM.exports=H9});var DM=v((hPe,AM)=>{i();var V9=br();function z9(e){var t=V9(e);return t.setHours(0,0,0,0),t}AM.exports=z9});var kM=v((CPe,BM)=>{i();var NM=DM(),FM=6e4,G9=864e5;function j9(e,t){var r=NM(e),o=NM(t),n=r.getTime()-r.getTimezoneOffset()*FM,a=o.getTime()-o.getTimezoneOffset()*FM;return Math.round((n-a)/G9)}BM.exports=j9});var WM=v((xPe,LM)=>{i();var U9=br(),$9=SM(),Y9=kM();function X9(e){var t=U9(e),r=Y9(t,$9(t)),o=r+1;return o}LM.exports=X9});var HM=v((yPe,qM)=>{i();var K9=br();function Q9(e,t){var r=t&&Number(t.weekStartsOn)||0,o=K9(e),n=o.getDay(),a=(n<r?7:0)+n-r;return o.setDate(o.getDate()-a),o.setHours(0,0,0,0),o}qM.exports=Q9});var Gs=v((TPe,VM)=>{i();var Z9=HM();function J9(e){return Z9(e,{weekStartsOn:1})}VM.exports=J9});var Sf=v((MPe,GM)=>{i();var eY=br(),zM=Gs();function tY(e){var t=eY(e),r=t.getFullYear(),o=new Date(0);o.setFullYear(r+1,0,4),o.setHours(0,0,0,0);var n=zM(o),a=new Date(0);a.setFullYear(r,0,4),a.setHours(0,0,0,0);var s=zM(a);return t.getTime()>=n.getTime()?r+1:t.getTime()>=s.getTime()?r:r-1}GM.exports=tY});var UM=v((EPe,jM)=>{i();var rY=Sf(),nY=Gs();function oY(e){var t=rY(e),r=new Date(0);r.setFullYear(t,0,4),r.setHours(0,0,0,0);var o=nY(r);return o}jM.exports=oY});var YM=v((wPe,$M)=>{i();var iY=br(),aY=Gs(),sY=UM(),uY=6048e5;function lY(e){var t=iY(e),r=aY(t).getTime()-sY(t).getTime();return Math.round(r/uY)+1}$M.exports=lY});var KM=v((SPe,XM)=>{i();var cY=Ef();function fY(e){if(cY(e))return!isNaN(e);throw new TypeError(toString.call(e)+" is not an instance of Date")}XM.exports=fY});var ZM=v((DPe,QM)=>{i();function pY(){var e={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function t(r,o,n){n=n||{};var a;return typeof e[r]=="string"?a=e[r]:o===1?a=e[r].one:a=e[r].other.replace("{{count}}",o),n.addSuffix?n.comparison>0?"in "+a:a+" ago":a}return{localize:t}}QM.exports=pY});var eP=v((FPe,JM)=>{i();var dY=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"];function mY(e){var t=[];for(var r in e)e.hasOwnProperty(r)&&t.push(r);var o=dY.concat(t).sort().reverse(),n=new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+o.join("|")+"|.)","g");return n}JM.exports=mY});var rP=v((kPe,tP)=>{i();var hY=eP();function gY(){var e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],t=["January","February","March","April","May","June","July","August","September","October","November","December"],r=["Su","Mo","Tu","We","Th","Fr","Sa"],o=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],n=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],a=["AM","PM"],s=["am","pm"],u=["a.m.","p.m."],f={MMM:function(d){return e[d.getMonth()]},MMMM:function(d){return t[d.getMonth()]},dd:function(d){return r[d.getDay()]},ddd:function(d){return o[d.getDay()]},dddd:function(d){return n[d.getDay()]},A:function(d){return d.getHours()/12>=1?a[1]:a[0]},a:function(d){return d.getHours()/12>=1?s[1]:s[0]},aa:function(d){return d.getHours()/12>=1?u[1]:u[0]}},p=["M","D","DDD","d","Q","W"];return p.forEach(function(d){f[d+"o"]=function(h,m){return CY(m[d](h))}}),{formatters:f,formattingTokensRegExp:hY(f)}}function CY(e){var t=e%100;if(t>20||t<10)switch(t%10){case 1:return e+"st";case 2:return e+"nd";case 3:return e+"rd"}return e+"th"}tP.exports=gY});var oP=v((WPe,nP)=>{i();var vY=ZM(),xY=rP();nP.exports={distanceInWords:vY(),format:xY()}});var fP=v((HPe,cP)=>{i();var iP=WM(),aP=YM(),sP=Sf(),_Y=br(),yY=KM(),uP=oP();function OY(e,t,r){var o=t?String(t):"YYYY-MM-DDTHH:mm:ss.SSSZ",n=r||{},a=n.locale,s=uP.format.formatters,u=uP.format.formattingTokensRegExp;a&&a.format&&a.format.formatters&&(s=a.format.formatters,a.format.formattingTokensRegExp&&(u=a.format.formattingTokensRegExp));var f=_Y(e);if(!yY(f))return"Invalid Date";var p=TY(o,s,u);return p(f)}var Af={M:function(e){return e.getMonth()+1},MM:function(e){return st(e.getMonth()+1,2)},Q:function(e){return Math.ceil((e.getMonth()+1)/3)},D:function(e){return e.getDate()},DD:function(e){return st(e.getDate(),2)},DDD:function(e){return iP(e)},DDDD:function(e){return st(iP(e),3)},d:function(e){return e.getDay()},E:function(e){return e.getDay()||7},W:function(e){return aP(e)},WW:function(e){return st(aP(e),2)},YY:function(e){return st(e.getFullYear(),4).substr(2)},YYYY:function(e){return st(e.getFullYear(),4)},GG:function(e){return String(sP(e)).substr(2)},GGGG:function(e){return sP(e)},H:function(e){return e.getHours()},HH:function(e){return st(e.getHours(),2)},h:function(e){var t=e.getHours();return t===0?12:t>12?t%12:t},hh:function(e){return st(Af.h(e),2)},m:function(e){return e.getMinutes()},mm:function(e){return st(e.getMinutes(),2)},s:function(e){return e.getSeconds()},ss:function(e){return st(e.getSeconds(),2)},S:function(e){return Math.floor(e.getMilliseconds()/100)},SS:function(e){return st(Math.floor(e.getMilliseconds()/10),2)},SSS:function(e){return st(e.getMilliseconds(),3)},Z:function(e){return lP(e.getTimezoneOffset(),":")},ZZ:function(e){return lP(e.getTimezoneOffset())},X:function(e){return Math.floor(e.getTime()/1e3)},x:function(e){return e.getTime()}};function TY(e,t,r){var o=e.match(r),n=o.length,a,s;for(a=0;a<n;a++)s=t[o[a]]||Af[o[a]],s?o[a]=s:o[a]=bY(o[a]);return function(u){for(var f="",p=0;p<n;p++)o[p]instanceof Function?f+=o[p](u,Af):f+=o[p];return f}}function bY(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|]$/g,""):e.replace(/\\/g,"")}function lP(e,t){t=t||"";var r=e>0?"-":"+",o=Math.abs(e),n=Math.floor(o/60),a=o%60;return r+st(n,2)+t+st(a,2)}function st(e,t){for(var r=Math.abs(e).toString();r.length<t;)r="0"+r;return r}cP.exports=OY});var EP=v((NEe,PP)=>{i();var EY=ff();function IY(e,t,r){var o=e.length;return r=r===void 0?o:r,!t&&r>=o?e:EY(e,t,r)}PP.exports=IY});var Ff=v((BEe,IP)=>{i();var wY="\\ud800-\\udfff",RY="\\u0300-\\u036f",SY="\\ufe20-\\ufe2f",AY="\\u20d0-\\u20ff",DY=RY+SY+AY,NY="\\ufe0e\\ufe0f",FY="\\u200d",BY=RegExp("["+FY+wY+DY+NY+"]");function kY(e){return BY.test(e)}IP.exports=kY});var RP=v((LEe,wP)=>{i();function LY(e){return e.split("")}wP.exports=LY});var LP=v((qEe,kP)=>{i();var SP="\\ud800-\\udfff",WY="\\u0300-\\u036f",qY="\\ufe20-\\ufe2f",HY="\\u20d0-\\u20ff",VY=WY+qY+HY,zY="\\ufe0e\\ufe0f",GY="["+SP+"]",Bf="["+VY+"]",kf="\\ud83c[\\udffb-\\udfff]",jY="(?:"+Bf+"|"+kf+")",AP="[^"+SP+"]",DP="(?:\\ud83c[\\udde6-\\uddff]){2}",NP="[\\ud800-\\udbff][\\udc00-\\udfff]",UY="\\u200d",FP=jY+"?",BP="["+zY+"]?",$Y="(?:"+UY+"(?:"+[AP,DP,NP].join("|")+")"+BP+FP+")*",YY=BP+FP+$Y,XY="(?:"+[AP+Bf+"?",Bf,DP,NP,GY].join("|")+")",KY=RegExp(kf+"(?="+kf+")|"+XY+YY,"g");function QY(e){return e.match(KY)||[]}kP.exports=QY});var qP=v((VEe,WP)=>{i();var ZY=RP(),JY=Ff(),eX=LP();function tX(e){return JY(e)?eX(e):ZY(e)}WP.exports=tX});var VP=v((GEe,HP)=>{i();var rX=EP(),nX=Ff(),oX=qP(),iX=io();function aX(e){return function(t){t=iX(t);var r=nX(t)?oX(t):void 0,o=r?r[0]:t.charAt(0),n=r?rX(r,1).join(""):t.slice(1);return o[e]()+n}}HP.exports=aX});var GP=v((UEe,zP)=>{i();var sX=VP(),uX=sX("toUpperCase");zP.exports=uX});var UP=v((YEe,jP)=>{i();var lX=io(),cX=GP();function fX(e){return cX(lX(e).toLowerCase())}jP.exports=fX});var KP=v((nIe,XP)=>{i();var gX=pf(),CX=Un(),vX=Array.prototype,xX=vX.splice;function _X(e,t){for(var r=e?t.length:0,o=r-1;r--;){var n=t[r];if(r==o||n!==a){var a=n;CX(n)?xX.call(e,n,1):gX(e,n)}}return e}XP.exports=_X});var Wf=v((iIe,QP)=>{i();var yX=qs(),OX=KP();function TX(e,t){var r=[];if(!(e&&e.length))return r;var o=-1,n=[],a=e.length;for(t=yX(t,3);++o<a;){var s=e[o];t(s,o,e)&&(r.push(s),n.push(o))}return OX(e,n),r}QP.exports=TX});var PE=v((xRe,ME)=>{i();var bX=Ds(),MX=1,PX=4;function EX(e){return bX(e,MX|PX)}ME.exports=EX});var cS=v((Rd,lS)=>{i();(function(e){"use strict";var t=2e3,r={s:1,n:0,d:1};function o(m,g){if(isNaN(m=parseInt(m,10)))throw h.InvalidParameter;return m*g}function n(m,g){if(g===0)throw h.DivisionByZero;var C=Object.create(h.prototype);C.s=m<0?-1:1,m=m<0?-m:m;var x=d(m,g);return C.n=m/x,C.d=g/x,C}function a(m){for(var g={},C=m,x=2,y=4;y<=C;){for(;C%x===0;)C/=x,g[x]=(g[x]||0)+1;y+=1+2*x++}return C!==m?C>1&&(g[C]=(g[C]||0)+1):g[m]=(g[m]||0)+1,g}var s=function(m,g){var C=0,x=1,y=1,O=0,_=0,S=0,M=1,R=1,b=0,I=1,T=1,E=1,F=1e7,w;if(m!=null)if(g!==void 0){if(C=m,x=g,y=C*x,C%1!==0||x%1!==0)throw h.NonIntegerParameter}else switch(typeof m){case"object":{if("d"in m&&"n"in m)C=m.n,x=m.d,"s"in m&&(C*=m.s);else if(0 in m)C=m[0],1 in m&&(x=m[1]);else throw h.InvalidParameter;y=C*x;break}case"number":{if(m<0&&(y=m,m=-m),m%1===0)C=m;else if(m>0){for(m>=1&&(R=Math.pow(10,Math.floor(1+Math.log(m)/Math.LN10)),m/=R);I<=F&&E<=F;)if(w=(b+T)/(I+E),m===w){I+E<=F?(C=b+T,x=I+E):E>I?(C=T,x=E):(C=b,x=I);break}else m>w?(b+=T,I+=E):(T+=b,E+=I),I>F?(C=T,x=E):(C=b,x=I);C*=R}else(isNaN(m)||isNaN(g))&&(x=C=NaN);break}case"string":{if(I=m.match(/\d+|./g),I===null)throw h.InvalidParameter;if(I[b]==="-"?(y=-1,b++):I[b]==="+"&&b++,I.length===b+1?_=o(I[b++],y):I[b+1]==="."||I[b]==="."?(I[b]!=="."&&(O=o(I[b++],y)),b++,(b+1===I.length||I[b+1]==="("&&I[b+3]===")"||I[b+1]==="'"&&I[b+3]==="'")&&(_=o(I[b],y),M=Math.pow(10,I[b].length),b++),(I[b]==="("&&I[b+2]===")"||I[b]==="'"&&I[b+2]==="'")&&(S=o(I[b+1],y),R=Math.pow(10,I[b+1].length)-1,b+=3)):I[b+1]==="/"||I[b+1]===":"?(_=o(I[b],y),M=o(I[b+2],1),b+=3):I[b+3]==="/"&&I[b+1]===" "&&(O=o(I[b],y),_=o(I[b+2],y),M=o(I[b+4],1),b+=5),I.length<=b){x=M*R,y=C=S+x*O+R*_;break}}default:throw h.InvalidParameter}if(x===0)throw h.DivisionByZero;r.s=y<0?-1:1,r.n=Math.abs(C),r.d=Math.abs(x)};function u(m,g,C){for(var x=1;g>0;m=m*m%C,g>>=1)g&1&&(x=x*m%C);return x}function f(m,g){for(;g%2===0;g/=2);for(;g%5===0;g/=5);if(g===1)return 0;for(var C=10%g,x=1;C!==1;x++)if(C=C*10%g,x>t)return 0;return x}function p(m,g,C){for(var x=1,y=u(10,C,g),O=0;O<300;O++){if(x===y)return O;x=x*10%g,y=y*10%g}return 0}function d(m,g){if(!m)return g;if(!g)return m;for(;;){if(m%=g,!m)return g;if(g%=m,!g)return m}}function h(m,g){if(s(m,g),this instanceof h)m=d(r.d,r.n),this.s=r.s,this.n=r.n/m,this.d=r.d/m;else return n(r.s*r.n,r.d)}h.DivisionByZero=new Error("Division by Zero"),h.InvalidParameter=new Error("Invalid argument"),h.NonIntegerParameter=new Error("Parameters must be integer"),h.prototype={s:1,n:0,d:1,abs:function(){return n(this.n,this.d)},neg:function(){return n(-this.s*this.n,this.d)},add:function(m,g){return s(m,g),n(this.s*this.n*r.d+r.s*this.d*r.n,this.d*r.d)},sub:function(m,g){return s(m,g),n(this.s*this.n*r.d-r.s*this.d*r.n,this.d*r.d)},mul:function(m,g){return s(m,g),n(this.s*r.s*this.n*r.n,this.d*r.d)},div:function(m,g){return s(m,g),n(this.s*r.s*this.n*r.d,this.d*r.n)},clone:function(){return n(this.s*this.n,this.d)},mod:function(m,g){if(isNaN(this.n)||isNaN(this.d))return new h(NaN);if(m===void 0)return n(this.s*this.n%this.d,1);if(s(m,g),r.n===0&&this.d===0)throw h.DivisionByZero;return n(this.s*(r.d*this.n)%(r.n*this.d),r.d*this.d)},gcd:function(m,g){return s(m,g),n(d(r.n,this.n)*d(r.d,this.d),r.d*this.d)},lcm:function(m,g){return s(m,g),r.n===0&&this.n===0?n(0,1):n(r.n*this.n,d(r.n,this.n)*d(r.d,this.d))},ceil:function(m){return m=Math.pow(10,m||0),isNaN(this.n)||isNaN(this.d)?new h(NaN):n(Math.ceil(m*this.s*this.n/this.d),m)},floor:function(m){return m=Math.pow(10,m||0),isNaN(this.n)||isNaN(this.d)?new h(NaN):n(Math.floor(m*this.s*this.n/this.d),m)},round:function(m){return m=Math.pow(10,m||0),isNaN(this.n)||isNaN(this.d)?new h(NaN):n(Math.round(m*this.s*this.n/this.d),m)},inverse:function(){return n(this.s*this.d,this.n)},pow:function(m,g){if(s(m,g),r.d===1)return r.s<0?n(Math.pow(this.s*this.d,r.n),Math.pow(this.n,r.n)):n(Math.pow(this.s*this.n,r.n),Math.pow(this.d,r.n));if(this.s<0)return null;var C=a(this.n),x=a(this.d),y=1,O=1;for(var _ in C)if(_!=="1"){if(_==="0"){y=0;break}if(C[_]*=r.n,C[_]%r.d===0)C[_]/=r.d;else return null;y*=Math.pow(_,C[_])}for(var _ in x)if(_!=="1"){if(x[_]*=r.n,x[_]%r.d===0)x[_]/=r.d;else return null;O*=Math.pow(_,x[_])}return r.s<0?n(O,y):n(y,O)},equals:function(m,g){return s(m,g),this.s*this.n*r.d===r.s*r.n*this.d},compare:function(m,g){s(m,g);var C=this.s*this.n*r.d-r.s*r.n*this.d;return(0<C)-(C<0)},simplify:function(m){if(isNaN(this.n)||isNaN(this.d))return this;m=m||.001;for(var g=this.abs(),C=g.toContinued(),x=1;x<C.length;x++){for(var y=n(C[x-1],1),O=x-2;O>=0;O--)y=y.inverse().add(C[O]);if(y.sub(g).abs().valueOf()<m)return y.mul(this.s)}return this},divisible:function(m,g){return s(m,g),!(!(r.n*this.d)||this.n*r.d%(r.n*this.d))},valueOf:function(){return this.s*this.n/this.d},toFraction:function(m){var g,C="",x=this.n,y=this.d;return this.s<0&&(C+="-"),y===1?C+=x:(m&&(g=Math.floor(x/y))>0&&(C+=g,C+=" ",x%=y),C+=x,C+="/",C+=y),C},toLatex:function(m){var g,C="",x=this.n,y=this.d;return this.s<0&&(C+="-"),y===1?C+=x:(m&&(g=Math.floor(x/y))>0&&(C+=g,x%=y),C+="\\frac{",C+=x,C+="}{",C+=y,C+="}"),C},toContinued:function(){var m,g=this.n,C=this.d,x=[];if(isNaN(g)||isNaN(C))return x;do x.push(Math.floor(g/C)),m=g%C,g=C,C=m;while(g!==1);return x},toString:function(m){var g=this.n,C=this.d;if(isNaN(g)||isNaN(C))return"NaN";m=m||15;var x=f(g,C),y=p(g,C,x),O=this.s<0?"-":"";if(O+=g/C|0,g%=C,g*=10,g&&(O+="."),x){for(var _=y;_--;)O+=g/C|0,g%=C,g*=10;O+="(";for(var _=x;_--;)O+=g/C|0,g%=C,g*=10;O+=")"}else for(var _=m;g&&_--;)O+=g/C|0,g%=C,g*=10;return O}},typeof define=="function"&&define.amd?define([],function(){return h}):typeof Rd=="object"?(Object.defineProperty(h,"__esModule",{value:!0}),h.default=h,h.Fraction=h,lS.exports=h):e.Fraction=h})(Rd)});var CS=v((nGe,gS)=>{i();gS.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,r=[],o=0;o<e.rangeCount;o++)r.push(e.getRangeAt(o));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null;break}return e.removeAllRanges(),function(){e.type==="Caret"&&e.removeAllRanges(),e.rangeCount||r.forEach(function(n){e.addRange(n)}),t&&t.focus()}}});var _S=v((iGe,xS)=>{"use strict";i();var jZ=CS(),vS={"text/plain":"Text","text/html":"Url",default:"Text"},UZ="Copy to clipboard: #{key}, Enter";function $Z(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}function YZ(e,t){var r,o,n,a,s,u,f=!1;t||(t={}),r=t.debug||!1;try{n=jZ(),a=document.createRange(),s=document.getSelection(),u=document.createElement("span"),u.textContent=e,u.ariaHidden="true",u.style.all="unset",u.style.position="fixed",u.style.top=0,u.style.clip="rect(0, 0, 0, 0)",u.style.whiteSpace="pre",u.style.webkitUserSelect="text",u.style.MozUserSelect="text",u.style.msUserSelect="text",u.style.userSelect="text",u.addEventListener("copy",function(d){if(d.stopPropagation(),t.format)if(d.preventDefault(),typeof d.clipboardData>"u"){r&&console.warn("unable to use e.clipboardData"),r&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var h=vS[t.format]||vS.default;window.clipboardData.setData(h,e)}else d.clipboardData.clearData(),d.clipboardData.setData(t.format,e);t.onCopy&&(d.preventDefault(),t.onCopy(d.clipboardData))}),document.body.appendChild(u),a.selectNodeContents(u),s.addRange(a);var p=document.execCommand("copy");if(!p)throw new Error("copy command was unsuccessful");f=!0}catch(d){r&&console.error("unable to copy using execCommand: ",d),r&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),f=!0}catch(h){r&&console.error("unable to copy using clipboardData: ",h),r&&console.error("falling back to prompt"),o=$Z("message"in t?t.message:UZ),window.prompt(o,e)}}finally{s&&(typeof s.removeRange=="function"?s.removeRange(a):s.removeAllRanges()),u&&document.body.removeChild(u),n()}return f}xS.exports=YZ});var GS=v((QGe,zS)=>{i();function Kd(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(function(t){var r=e[t];typeof r=="object"&&!Object.isFrozen(r)&&Kd(r)}),e}var BS=Kd,uJ=Kd;BS.default=uJ;var il=class{constructor(t){t.data===void 0&&(t.data={}),this.data=t.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}};function Ro(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function Nr(e,...t){let r=Object.create(null);for(let o in e)r[o]=e[o];return t.forEach(function(o){for(let n in o)r[n]=o[n]}),r}var lJ="</span>",RS=e=>!!e.kind,$d=class{constructor(t,r){this.buffer="",this.classPrefix=r.classPrefix,t.walk(this)}addText(t){this.buffer+=Ro(t)}openNode(t){if(!RS(t))return;let r=t.kind;t.sublanguage||(r=`${this.classPrefix}${r}`),this.span(r)}closeNode(t){RS(t)&&(this.buffer+=lJ)}value(){return this.buffer}span(t){this.buffer+=`<span class="${t}">`}},Ji=class{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(t){this.top.children.push(t)}openNode(t){let r={kind:t,children:[]};this.add(r),this.stack.push(r)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(t){return this.constructor._walk(t,this.rootNode)}static _walk(t,r){return typeof r=="string"?t.addText(r):r.children&&(t.openNode(r),r.children.forEach(o=>this._walk(t,o)),t.closeNode(r)),t}static _collapse(t){typeof t!="string"&&t.children&&(t.children.every(r=>typeof r=="string")?t.children=[t.children.join("")]:t.children.forEach(r=>{Ji._collapse(r)}))}},Yd=class extends Ji{constructor(t){super(),this.options=t}addKeyword(t,r){t!==""&&(this.openNode(r),this.addText(t),this.closeNode())}addText(t){t!==""&&this.add(t)}addSublanguage(t,r){let o=t.root;o.kind=r,o.sublanguage=!0,this.add(o)}toHTML(){return new $d(this,this.options).value()}finalize(){return!0}};function cJ(e){return new RegExp(e.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")}function ea(e){return e?typeof e=="string"?e:e.source:null}function fJ(...e){return e.map(r=>ea(r)).join("")}function pJ(...e){return"("+e.map(r=>ea(r)).join("|")+")"}function dJ(e){return new RegExp(e.toString()+"|").exec("").length-1}function mJ(e,t){let r=e&&e.exec(t);return r&&r.index===0}var hJ=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function gJ(e,t="|"){let r=0;return e.map(o=>{r+=1;let n=r,a=ea(o),s="";for(;a.length>0;){let u=hJ.exec(a);if(!u){s+=a;break}s+=a.substring(0,u.index),a=a.substring(u.index+u[0].length),u[0][0]==="\\"&&u[1]?s+="\\"+String(Number(u[1])+n):(s+=u[0],u[0]==="("&&r++)}return s}).map(o=>`(${o})`).join(t)}var CJ=/\b\B/,kS="[a-zA-Z]\\w*",Qd="[a-zA-Z_]\\w*",Zd="\\b\\d+(\\.\\d+)?",LS="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",WS="\\b(0b[01]+)",vJ="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",xJ=(e={})=>{let t=/^#![ ]*\//;return e.binary&&(e.begin=fJ(t,/.*\b/,e.binary,/\b.*/)),Nr({className:"meta",begin:t,end:/$/,relevance:0,"on:begin":(r,o)=>{r.index!==0&&o.ignoreMatch()}},e)},ta={begin:"\\\\[\\s\\S]",relevance:0},_J={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[ta]},yJ={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[ta]},qS={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},al=function(e,t,r={}){let o=Nr({className:"comment",begin:e,end:t,contains:[]},r);return o.contains.push(qS),o.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",relevance:0}),o},OJ=al("//","$"),TJ=al("/\\*","\\*/"),bJ=al("#","$"),MJ={className:"number",begin:Zd,relevance:0},PJ={className:"number",begin:LS,relevance:0},EJ={className:"number",begin:WS,relevance:0},IJ={className:"number",begin:Zd+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},wJ={begin:/(?=\/[^/\n]*\/)/,contains:[{className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[ta,{begin:/\[/,end:/\]/,relevance:0,contains:[ta]}]}]},RJ={className:"title",begin:kS,relevance:0},SJ={className:"title",begin:Qd,relevance:0},AJ={begin:"\\.\\s*"+Qd,relevance:0},DJ=function(e){return Object.assign(e,{"on:begin":(t,r)=>{r.data._beginMatch=t[1]},"on:end":(t,r)=>{r.data._beginMatch!==t[1]&&r.ignoreMatch()}})},ol=Object.freeze({__proto__:null,MATCH_NOTHING_RE:CJ,IDENT_RE:kS,UNDERSCORE_IDENT_RE:Qd,NUMBER_RE:Zd,C_NUMBER_RE:LS,BINARY_NUMBER_RE:WS,RE_STARTERS_RE:vJ,SHEBANG:xJ,BACKSLASH_ESCAPE:ta,APOS_STRING_MODE:_J,QUOTE_STRING_MODE:yJ,PHRASAL_WORDS_MODE:qS,COMMENT:al,C_LINE_COMMENT_MODE:OJ,C_BLOCK_COMMENT_MODE:TJ,HASH_COMMENT_MODE:bJ,NUMBER_MODE:MJ,C_NUMBER_MODE:PJ,BINARY_NUMBER_MODE:EJ,CSS_NUMBER_MODE:IJ,REGEXP_MODE:wJ,TITLE_MODE:RJ,UNDERSCORE_TITLE_MODE:SJ,METHOD_GUARD:AJ,END_SAME_AS_BEGIN:DJ});function NJ(e,t){e.input[e.index-1]==="."&&t.ignoreMatch()}function FJ(e,t){t&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=NJ,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,e.relevance===void 0&&(e.relevance=0))}function BJ(e,t){Array.isArray(e.illegal)&&(e.illegal=pJ(...e.illegal))}function kJ(e,t){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function LJ(e,t){e.relevance===void 0&&(e.relevance=1)}var WJ=["of","and","for","in","not","or","if","then","parent","list","value"],qJ="keyword";function HS(e,t,r=qJ){let o={};return typeof e=="string"?n(r,e.split(" ")):Array.isArray(e)?n(r,e):Object.keys(e).forEach(function(a){Object.assign(o,HS(e[a],t,a))}),o;function n(a,s){t&&(s=s.map(u=>u.toLowerCase())),s.forEach(function(u){let f=u.split("|");o[f[0]]=[a,HJ(f[0],f[1])]})}}function HJ(e,t){return t?Number(t):VJ(e)?0:1}function VJ(e){return WJ.includes(e.toLowerCase())}function zJ(e,{plugins:t}){function r(u,f){return new RegExp(ea(u),"m"+(e.case_insensitive?"i":"")+(f?"g":""))}class o{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(f,p){p.position=this.position++,this.matchIndexes[this.matchAt]=p,this.regexes.push([p,f]),this.matchAt+=dJ(f)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);let f=this.regexes.map(p=>p[1]);this.matcherRe=r(gJ(f),!0),this.lastIndex=0}exec(f){this.matcherRe.lastIndex=this.lastIndex;let p=this.matcherRe.exec(f);if(!p)return null;let d=p.findIndex((m,g)=>g>0&&m!==void 0),h=this.matchIndexes[d];return p.splice(0,d),Object.assign(p,h)}}class n{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(f){if(this.multiRegexes[f])return this.multiRegexes[f];let p=new o;return this.rules.slice(f).forEach(([d,h])=>p.addRule(d,h)),p.compile(),this.multiRegexes[f]=p,p}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(f,p){this.rules.push([f,p]),p.type==="begin"&&this.count++}exec(f){let p=this.getMatcher(this.regexIndex);p.lastIndex=this.lastIndex;let d=p.exec(f);if(this.resumingScanAtSamePosition()&&!(d&&d.index===this.lastIndex)){let h=this.getMatcher(0);h.lastIndex=this.lastIndex+1,d=h.exec(f)}return d&&(this.regexIndex+=d.position+1,this.regexIndex===this.count&&this.considerAll()),d}}function a(u){let f=new n;return u.contains.forEach(p=>f.addRule(p.begin,{rule:p,type:"begin"})),u.terminatorEnd&&f.addRule(u.terminatorEnd,{type:"end"}),u.illegal&&f.addRule(u.illegal,{type:"illegal"}),f}function s(u,f){let p=u;if(u.isCompiled)return p;[kJ].forEach(h=>h(u,f)),e.compilerExtensions.forEach(h=>h(u,f)),u.__beforeBegin=null,[FJ,BJ,LJ].forEach(h=>h(u,f)),u.isCompiled=!0;let d=null;if(typeof u.keywords=="object"&&(d=u.keywords.$pattern,delete u.keywords.$pattern),u.keywords&&(u.keywords=HS(u.keywords,e.case_insensitive)),u.lexemes&&d)throw new Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");return d=d||u.lexemes||/\w+/,p.keywordPatternRe=r(d,!0),f&&(u.begin||(u.begin=/\B|\b/),p.beginRe=r(u.begin),u.endSameAsBegin&&(u.end=u.begin),!u.end&&!u.endsWithParent&&(u.end=/\B|\b/),u.end&&(p.endRe=r(u.end)),p.terminatorEnd=ea(u.end)||"",u.endsWithParent&&f.terminatorEnd&&(p.terminatorEnd+=(u.end?"|":"")+f.terminatorEnd)),u.illegal&&(p.illegalRe=r(u.illegal)),u.contains||(u.contains=[]),u.contains=[].concat(...u.contains.map(function(h){return GJ(h==="self"?u:h)})),u.contains.forEach(function(h){s(h,p)}),u.starts&&s(u.starts,f),p.matcher=a(p),p}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=Nr(e.classNameAliases||{}),s(e)}function VS(e){return e?e.endsWithParent||VS(e.starts):!1}function GJ(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(t){return Nr(e,{variants:null},t)})),e.cachedVariants?e.cachedVariants:VS(e)?Nr(e,{starts:e.starts?Nr(e.starts):null}):Object.isFrozen(e)?Nr(e):e}var jJ="10.7.3";function UJ(e){return!!(e||e==="")}function $J(e){let t={props:["language","code","autodetect"],data:function(){return{detectedLanguage:"",unknownLanguage:!1}},computed:{className(){return this.unknownLanguage?"":"hljs "+this.detectedLanguage},highlighted(){if(!this.autoDetect&&!e.getLanguage(this.language))return console.warn(`The language "${this.language}" you specified could not be found.`),this.unknownLanguage=!0,Ro(this.code);let o={};return this.autoDetect?(o=e.highlightAuto(this.code),this.detectedLanguage=o.language):(o=e.highlight(this.language,this.code,this.ignoreIllegals),this.detectedLanguage=this.language),o.value},autoDetect(){return!this.language||UJ(this.autodetect)},ignoreIllegals(){return!0}},render(o){return o("pre",{},[o("code",{class:this.className,domProps:{innerHTML:this.highlighted}})])}};return{Component:t,VuePlugin:{install(o){o.component("highlightjs",t)}}}}var YJ={"after:highlightElement":({el:e,result:t,text:r})=>{let o=SS(e);if(!o.length)return;let n=document.createElement("div");n.innerHTML=t.value,t.value=XJ(o,SS(n),r)}};function Xd(e){return e.nodeName.toLowerCase()}function SS(e){let t=[];return function r(o,n){for(let a=o.firstChild;a;a=a.nextSibling)a.nodeType===3?n+=a.nodeValue.length:a.nodeType===1&&(t.push({event:"start",offset:n,node:a}),n=r(a,n),Xd(a).match(/br|hr|img|input/)||t.push({event:"stop",offset:n,node:a}));return n}(e,0),t}function XJ(e,t,r){let o=0,n="",a=[];function s(){return!e.length||!t.length?e.length?e:t:e[0].offset!==t[0].offset?e[0].offset<t[0].offset?e:t:t[0].event==="start"?e:t}function u(d){function h(m){return" "+m.nodeName+'="'+Ro(m.value)+'"'}n+="<"+Xd(d)+[].map.call(d.attributes,h).join("")+">"}function f(d){n+="</"+Xd(d)+">"}function p(d){(d.event==="start"?u:f)(d.node)}for(;e.length||t.length;){let d=s();if(n+=Ro(r.substring(o,d[0].offset)),o=d[0].offset,d===e){a.reverse().forEach(f);do p(d.splice(0,1)[0]),d=s();while(d===e&&d.length&&d[0].offset===o);a.reverse().forEach(u)}else d[0].event==="start"?a.push(d[0].node):a.pop(),p(d.splice(0,1)[0])}return n+Ro(r.substr(o))}var AS={},jd=e=>{console.error(e)},DS=(e,...t)=>{console.log(`WARN: ${e}`,...t)},xt=(e,t)=>{AS[`${e}/${t}`]||(console.log(`Deprecated as of ${e}. ${t}`),AS[`${e}/${t}`]=!0)},Ud=Ro,NS=Nr,FS=Symbol("nomatch"),KJ=function(e){let t=Object.create(null),r=Object.create(null),o=[],n=!0,a=/(^(<[^>]+>|\t|)+|\n)/gm,s="Could not find the language '{}', did you forget to load/include a language module?",u={disableAutodetect:!0,name:"Plain text",contains:[]},f={noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:null,__emitter:Yd};function p(D){return f.noHighlightRe.test(D)}function d(D){let V=D.className+" ";V+=D.parentNode?D.parentNode.className:"";let J=f.languageDetectRe.exec(V);if(J){let ie=ue(J[1]);return ie||(DS(s.replace("{}",J[1])),DS("Falling back to no-highlight mode for this block.",D)),ie?J[1]:"no-highlight"}return V.split(/\s+/).find(ie=>p(ie)||ue(ie))}function h(D,V,J,ie){let de="",_t="";typeof V=="object"?(de=D,J=V.ignoreIllegals,_t=V.language,ie=void 0):(xt("10.7.0","highlight(lang, code, ...args) has been deprecated."),xt("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),_t=D,de=V);let ft={code:de,language:_t};K("before:highlight",ft);let Ke=ft.result?ft.result:m(ft.language,ft.code,J,ie);return Ke.code=ft.code,K("after:highlight",Ke),Ke}function m(D,V,J,ie){function de(Y,Q){let ne=yn.case_insensitive?Q[0].toLowerCase():Q[0];return Object.prototype.hasOwnProperty.call(Y.keywords,ne)&&Y.keywords[ne]}function _t(){if(!re.keywords){je.addText(we);return}let Y=0;re.keywordPatternRe.lastIndex=0;let Q=re.keywordPatternRe.exec(we),ne="";for(;Q;){ne+=we.substring(Y,Q.index);let fe=de(re,Q);if(fe){let[Qe,ia]=fe;if(je.addText(ne),ne="",oa+=ia,Qe.startsWith("_"))ne+=Q[0];else{let MA=yn.classNameAliases[Qe]||Qe;je.addKeyword(Q[0],MA)}}else ne+=Q[0];Y=re.keywordPatternRe.lastIndex,Q=re.keywordPatternRe.exec(we)}ne+=we.substr(Y),je.addText(ne)}function ft(){if(we==="")return;let Y=null;if(typeof re.subLanguage=="string"){if(!t[re.subLanguage]){je.addText(we);return}Y=m(re.subLanguage,we,!0,im[re.subLanguage]),im[re.subLanguage]=Y.top}else Y=C(we,re.subLanguage.length?re.subLanguage:null);re.relevance>0&&(oa+=Y.relevance),je.addSublanguage(Y.emitter,Y.language)}function Ke(){re.subLanguage!=null?ft():_t(),we=""}function pt(Y){return Y.className&&je.openNode(yn.classNameAliases[Y.className]||Y.className),re=Object.create(Y,{parent:{value:re}}),re}function or(Y,Q,ne){let fe=mJ(Y.endRe,ne);if(fe){if(Y["on:end"]){let Qe=new il(Y);Y["on:end"](Q,Qe),Qe.isMatchIgnored&&(fe=!1)}if(fe){for(;Y.endsParent&&Y.parent;)Y=Y.parent;return Y}}if(Y.endsWithParent)return or(Y.parent,Q,ne)}function _A(Y){return re.matcher.regexIndex===0?(we+=Y[0],1):(ml=!0,0)}function yA(Y){let Q=Y[0],ne=Y.rule,fe=new il(ne),Qe=[ne.__beforeBegin,ne["on:begin"]];for(let ia of Qe)if(ia&&(ia(Y,fe),fe.isMatchIgnored))return _A(Q);return ne&&ne.endSameAsBegin&&(ne.endRe=cJ(Q)),ne.skip?we+=Q:(ne.excludeBegin&&(we+=Q),Ke(),!ne.returnBegin&&!ne.excludeBegin&&(we=Q)),pt(ne),ne.returnBegin?0:Q.length}function OA(Y){let Q=Y[0],ne=V.substr(Y.index),fe=or(re,Y,ne);if(!fe)return FS;let Qe=re;Qe.skip?we+=Q:(Qe.returnEnd||Qe.excludeEnd||(we+=Q),Ke(),Qe.excludeEnd&&(we=Q));do re.className&&je.closeNode(),!re.skip&&!re.subLanguage&&(oa+=re.relevance),re=re.parent;while(re!==fe.parent);return fe.starts&&(fe.endSameAsBegin&&(fe.starts.endRe=fe.endRe),pt(fe.starts)),Qe.returnEnd?0:Q.length}function TA(){let Y=[];for(let Q=re;Q!==yn;Q=Q.parent)Q.className&&Y.unshift(Q.className);Y.forEach(Q=>je.openNode(Q))}let na={};function om(Y,Q){let ne=Q&&Q[0];if(we+=Y,ne==null)return Ke(),0;if(na.type==="begin"&&Q.type==="end"&&na.index===Q.index&&ne===""){if(we+=V.slice(Q.index,Q.index+1),!n){let fe=new Error("0 width match regex");throw fe.languageName=D,fe.badRule=na.rule,fe}return 1}if(na=Q,Q.type==="begin")return yA(Q);if(Q.type==="illegal"&&!J){let fe=new Error('Illegal lexeme "'+ne+'" for mode "'+(re.className||"<unnamed>")+'"');throw fe.mode=re,fe}else if(Q.type==="end"){let fe=OA(Q);if(fe!==FS)return fe}if(Q.type==="illegal"&&ne==="")return 1;if(dl>1e5&&dl>Q.index*3)throw new Error("potential infinite loop, way more iterations than matches");return we+=ne,ne.length}let yn=ue(D);if(!yn)throw jd(s.replace("{}",D)),new Error('Unknown language: "'+D+'"');let bA=zJ(yn,{plugins:o}),pl="",re=ie||bA,im={},je=new f.__emitter(f);TA();let we="",oa=0,On=0,dl=0,ml=!1;try{for(re.matcher.considerAll();;){dl++,ml?ml=!1:re.matcher.considerAll(),re.matcher.lastIndex=On;let Y=re.matcher.exec(V);if(!Y)break;let Q=V.substring(On,Y.index),ne=om(Q,Y);On=Y.index+ne}return om(V.substr(On)),je.closeAllNodes(),je.finalize(),pl=je.toHTML(),{relevance:Math.floor(oa),value:pl,language:D,illegal:!1,emitter:je,top:re}}catch(Y){if(Y.message&&Y.message.includes("Illegal"))return{illegal:!0,illegalBy:{msg:Y.message,context:V.slice(On-100,On+100),mode:Y.mode},sofar:pl,relevance:0,value:Ud(V),emitter:je};if(n)return{illegal:!1,relevance:0,value:Ud(V),emitter:je,language:D,top:re,errorRaised:Y};throw Y}}function g(D){let V={relevance:0,emitter:new f.__emitter(f),value:Ud(D),illegal:!1,top:u};return V.emitter.addText(D),V}function C(D,V){V=V||f.languages||Object.keys(t);let J=g(D),ie=V.filter(ue).filter(z).map(pt=>m(pt,D,!1));ie.unshift(J);let de=ie.sort((pt,or)=>{if(pt.relevance!==or.relevance)return or.relevance-pt.relevance;if(pt.language&&or.language){if(ue(pt.language).supersetOf===or.language)return 1;if(ue(or.language).supersetOf===pt.language)return-1}return 0}),[_t,ft]=de,Ke=_t;return Ke.second_best=ft,Ke}function x(D){return f.tabReplace||f.useBR?D.replace(a,V=>V===`
`?f.useBR?"<br>":V:f.tabReplace?V.replace(/\t/g,f.tabReplace):V):D}function y(D,V,J){let ie=V?r[V]:J;D.classList.add("hljs"),ie&&D.classList.add(ie)}let O={"before:highlightElement":({el:D})=>{f.useBR&&(D.innerHTML=D.innerHTML.replace(/\n/g,"").replace(/<br[ /]*>/g,`
`))},"after:highlightElement":({result:D})=>{f.useBR&&(D.value=D.value.replace(/\n/g,"<br>"))}},_=/^(<[^>]+>|\t)+/gm,S={"after:highlightElement":({result:D})=>{f.tabReplace&&(D.value=D.value.replace(_,V=>V.replace(/\t/g,f.tabReplace)))}};function M(D){let V=null,J=d(D);if(p(J))return;K("before:highlightElement",{el:D,language:J}),V=D;let ie=V.textContent,de=J?h(ie,{language:J,ignoreIllegals:!0}):C(ie);K("after:highlightElement",{el:D,result:de,text:ie}),D.innerHTML=de.value,y(D,J,de.language),D.result={language:de.language,re:de.relevance,relavance:de.relevance},de.second_best&&(D.second_best={language:de.second_best.language,re:de.second_best.relevance,relavance:de.second_best.relevance})}function R(D){D.useBR&&(xt("10.3.0","'useBR' will be removed entirely in v11.0"),xt("10.3.0","Please see https://github.com/highlightjs/highlight.js/issues/2559")),f=NS(f,D)}let b=()=>{if(b.called)return;b.called=!0,xt("10.6.0","initHighlighting() is deprecated.  Use highlightAll() instead."),document.querySelectorAll("pre code").forEach(M)};function I(){xt("10.6.0","initHighlightingOnLoad() is deprecated.  Use highlightAll() instead."),T=!0}let T=!1;function E(){if(document.readyState==="loading"){T=!0;return}document.querySelectorAll("pre code").forEach(M)}function F(){T&&E()}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",F,!1);function w(D,V){let J=null;try{J=V(e)}catch(ie){if(jd("Language definition for '{}' could not be registered.".replace("{}",D)),n)jd(ie);else throw ie;J=u}J.name||(J.name=D),t[D]=J,J.rawDefinition=V.bind(null,e),J.aliases&&Z(J.aliases,{languageName:D})}function B(D){delete t[D];for(let V of Object.keys(r))r[V]===D&&delete r[V]}function k(){return Object.keys(t)}function $(D){xt("10.4.0","requireLanguage will be removed entirely in v11."),xt("10.4.0","Please see https://github.com/highlightjs/highlight.js/pull/2844");let V=ue(D);if(V)return V;throw new Error("The '{}' language is required, but not loaded.".replace("{}",D))}function ue(D){return D=(D||"").toLowerCase(),t[D]||t[r[D]]}function Z(D,{languageName:V}){typeof D=="string"&&(D=[D]),D.forEach(J=>{r[J.toLowerCase()]=V})}function z(D){let V=ue(D);return V&&!V.disableAutodetect}function H(D){D["before:highlightBlock"]&&!D["before:highlightElement"]&&(D["before:highlightElement"]=V=>{D["before:highlightBlock"](Object.assign({block:V.el},V))}),D["after:highlightBlock"]&&!D["after:highlightElement"]&&(D["after:highlightElement"]=V=>{D["after:highlightBlock"](Object.assign({block:V.el},V))})}function L(D){H(D),o.push(D)}function K(D,V){let J=D;o.forEach(function(ie){ie[J]&&ie[J](V)})}function Pe(D){return xt("10.2.0","fixMarkup will be removed entirely in v11.0"),xt("10.2.0","Please see https://github.com/highlightjs/highlight.js/issues/2534"),x(D)}function le(D){return xt("10.7.0","highlightBlock will be removed entirely in v12.0"),xt("10.7.0","Please use highlightElement now."),M(D)}Object.assign(e,{highlight:h,highlightAuto:C,highlightAll:E,fixMarkup:Pe,highlightElement:M,highlightBlock:le,configure:R,initHighlighting:b,initHighlightingOnLoad:I,registerLanguage:w,unregisterLanguage:B,listLanguages:k,getLanguage:ue,registerAliases:Z,requireLanguage:$,autoDetection:z,inherit:NS,addPlugin:L,vuePlugin:$J(e).VuePlugin}),e.debugMode=function(){n=!1},e.safeMode=function(){n=!0},e.versionString=jJ;for(let D in ol)typeof ol[D]=="object"&&BS(ol[D]);return Object.assign(e,ol),e.addPlugin(O),e.addPlugin(YJ),e.addPlugin(S),e},QJ=KJ({});zS.exports=QJ});var jS=v((JGe,Jd)=>{i();(function(){var e;typeof Jd<"u"?e=Jd.exports=o:e=function(){return this||(0,eval)("this")}(),e.format=o,e.vsprintf=r,typeof console<"u"&&typeof console.log=="function"&&(e.printf=t);function t(){console.log(o.apply(null,arguments))}function r(n,a){return o.apply(null,[n].concat(a))}function o(n){for(var a=1,s=[].slice.call(arguments),u=0,f=n.length,p="",d,h=!1,m,g,C=!1,x,y=function(){return s[a++]},O=function(){for(var _="";/\d/.test(n[u]);)_+=n[u++],d=n[u];return _.length>0?parseInt(_):null};u<f;++u)if(d=n[u],h)switch(h=!1,d=="."?(C=!1,d=n[++u]):d=="0"&&n[u+1]=="."?(C=!0,u+=2,d=n[u]):C=!0,x=O(),d){case"b":p+=parseInt(y(),10).toString(2);break;case"c":m=y(),typeof m=="string"||m instanceof String?p+=m:p+=String.fromCharCode(parseInt(m,10));break;case"d":p+=parseInt(y(),10);break;case"f":g=String(parseFloat(y()).toFixed(x||6)),p+=C?g:g.replace(/^0/,"");break;case"j":p+=JSON.stringify(y());break;case"o":p+="0"+parseInt(y(),10).toString(8);break;case"s":p+=y();break;case"x":p+="0x"+parseInt(y(),10).toString(16);break;case"X":p+="0x"+parseInt(y(),10).toString(16).toUpperCase();break;default:p+=d;break}else d==="%"?h=!0:p+=d;return p}})()});var $S=v((t8e,US)=>{"use strict";i();var ZJ=jS(),Fr=Br(Error);US.exports=Fr;Fr.eval=Br(EvalError);Fr.range=Br(RangeError);Fr.reference=Br(ReferenceError);Fr.syntax=Br(SyntaxError);Fr.type=Br(TypeError);Fr.uri=Br(URIError);Fr.create=Br;function Br(e){return t.displayName=e.displayName||e.name,t;function t(r){return r&&(r=ZJ.apply(null,arguments)),new e(r)}}});var QS=v(So=>{"use strict";i();var zt=GS(),sl=$S();So.highlight=XS;So.highlightAuto=JJ;So.registerLanguage=eee;So.listLanguages=tee;So.registerAlias=ree;nr.prototype.addText=iee;nr.prototype.addKeyword=nee;nr.prototype.addSublanguage=oee;nr.prototype.openNode=aee;nr.prototype.closeNode=see;nr.prototype.closeAllNodes=KS;nr.prototype.finalize=KS;nr.prototype.toHTML=uee;var YS="hljs-";function XS(e,t,r){var o=zt.configure({}),n=r||{},a=n.prefix,s;if(typeof e!="string")throw sl("Expected `string` for name, got `%s`",e);if(!zt.getLanguage(e))throw sl("Unknown language: `%s` is not registered",e);if(typeof t!="string")throw sl("Expected `string` for value, got `%s`",t);if(a==null&&(a=YS),zt.configure({__emitter:nr,classPrefix:a}),s=zt.highlight(t,{language:e,ignoreIllegals:!0}),zt.configure(o||{}),s.errorRaised)throw s.errorRaised;return{relevance:s.relevance,language:s.language,value:s.emitter.rootNode.children}}function JJ(e,t){var r=t||{},o=r.subset||zt.listLanguages(),n=r.prefix,a=o.length,s=-1,u,f,p,d;if(n==null&&(n=YS),typeof e!="string")throw sl("Expected `string` for value, got `%s`",e);for(f={relevance:0,language:null,value:[]},u={relevance:0,language:null,value:[]};++s<a;)d=o[s],zt.getLanguage(d)&&(p=XS(d,e,t),p.language=d,p.relevance>f.relevance&&(f=p),p.relevance>u.relevance&&(f=u,u=p));return f.language&&(u.secondBest=f),u}function eee(e,t){zt.registerLanguage(e,t)}function tee(){return zt.listLanguages()}function ree(e,t){var r=e,o;t&&(r={},r[e]=t);for(o in r)zt.registerAliases(r[o],{languageName:o})}function nr(e){this.options=e,this.rootNode={children:[]},this.stack=[this.rootNode]}function nee(e,t){this.openNode(t),this.addText(e),this.closeNode()}function oee(e,t){var r=this.stack,o=r[r.length-1],n=e.rootNode.children,a=t?{type:"element",tagName:"span",properties:{className:[t]},children:n}:n;o.children=o.children.concat(a)}function iee(e){var t=this.stack,r,o;e!==""&&(r=t[t.length-1],o=r.children[r.children.length-1],o&&o.type==="text"?o.value+=e:r.children.push({type:"text",value:e}))}function aee(e){var t=this.stack,r=this.options.classPrefix+e,o=t[t.length-1],n={type:"element",tagName:"span",properties:{className:[r]},children:[]};o.children.push(n),t.push(n)}function see(){this.stack.pop()}function uee(){return""}function KS(){}});var eA=v((f8e,JS)=>{i();function lee(e){return e?typeof e=="string"?e:e.source:null}function cee(e){return tm("(?=",e,")")}function ll(e){return tm("(",e,")?")}function tm(...e){return e.map(r=>lee(r)).join("")}function fee(e){let t=e.COMMENT("//","$",{contains:[{begin:/\\\n/}]}),r="decltype\\(auto\\)",o="[a-zA-Z_]\\w*::",n="<[^<>]+>",a="("+r+"|"+ll(o)+"[a-zA-Z_]\\w*"+ll(n)+")",s={className:"keyword",begin:"\\b[a-z\\d_]*_t\\b"},u="\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)",f={className:"string",variants:[{begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},{begin:"(u8?|U|L)?'("+u+"|.)",end:"'",illegal:"."},e.END_SAME_AS_BEGIN({begin:/(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,end:/\)([^()\\ ]{0,16})"/})]},p={className:"number",variants:[{begin:"\\b(0b[01']+)"},{begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"},{begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"}],relevance:0},d={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{"meta-keyword":"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"},contains:[{begin:/\\\n/,relevance:0},e.inherit(f,{className:"meta-string"}),{className:"meta-string",begin:/<.*?>/},t,e.C_BLOCK_COMMENT_MODE]},h={className:"title",begin:ll(o)+e.IDENT_RE,relevance:0},m=ll(o)+e.IDENT_RE+"\\s*\\(",C={keyword:"int float while private char char8_t char16_t char32_t catch import module export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using asm case typeid wchar_t short reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignas alignof constexpr consteval constinit decltype concept co_await co_return co_yield requires noexcept static_assert thread_local restrict final override atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong new throw return and and_eq bitand bitor compl not not_eq or or_eq xor xor_eq",built_in:"_Bool _Complex _Imaginary",_relevance_hints:["asin","atan2","atan","calloc","ceil","cosh","cos","exit","exp","fabs","floor","fmod","fprintf","fputs","free","frexp","auto_ptr","deque","list","queue","stack","vector","map","set","pair","bitset","multiset","multimap","unordered_set","fscanf","future","isalnum","isalpha","iscntrl","isdigit","isgraph","islower","isprint","ispunct","isspace","isupper","isxdigit","tolower","toupper","labs","ldexp","log10","log","malloc","realloc","memchr","memcmp","memcpy","memset","modf","pow","printf","putchar","puts","scanf","sinh","sin","snprintf","sprintf","sqrt","sscanf","strcat","strchr","strcmp","strcpy","strcspn","strlen","strncat","strncmp","strncpy","strpbrk","strrchr","strspn","strstr","tanh","tan","unordered_map","unordered_multiset","unordered_multimap","priority_queue","make_pair","array","shared_ptr","abort","terminate","abs","acos","vfprintf","vprintf","vsprintf","endl","initializer_list","unique_ptr","complex","imaginary","std","string","wstring","cin","cout","cerr","clog","stdin","stdout","stderr","stringstream","istringstream","ostringstream"],literal:"true false nullptr NULL"},x={className:"function.dispatch",relevance:0,keywords:C,begin:tm(/\b/,/(?!decltype)/,/(?!if)/,/(?!for)/,/(?!while)/,e.IDENT_RE,cee(/\s*\(/))},y=[x,d,s,t,e.C_BLOCK_COMMENT_MODE,p,f],O={variants:[{begin:/=/,end:/;/},{begin:/\(/,end:/\)/},{beginKeywords:"new throw return else",end:/;/}],keywords:C,contains:y.concat([{begin:/\(/,end:/\)/,keywords:C,contains:y.concat(["self"]),relevance:0}]),relevance:0},_={className:"function",begin:"("+a+"[\\*&\\s]+)+"+m,returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:C,illegal:/[^\w\s\*&:<>.]/,contains:[{begin:r,keywords:C,relevance:0},{begin:m,returnBegin:!0,contains:[h],relevance:0},{begin:/::/,relevance:0},{begin:/:/,endsWithParent:!0,contains:[f,p]},{className:"params",begin:/\(/,end:/\)/,keywords:C,relevance:0,contains:[t,e.C_BLOCK_COMMENT_MODE,f,p,s,{begin:/\(/,end:/\)/,keywords:C,relevance:0,contains:["self",t,e.C_BLOCK_COMMENT_MODE,f,p,s]}]},s,t,e.C_BLOCK_COMMENT_MODE,d]};return{name:"C++",aliases:["cc","c++","h++","hpp","hh","hxx","cxx"],keywords:C,illegal:"</",classNameAliases:{"function.dispatch":"built_in"},contains:[].concat(O,_,x,y,[d,{begin:"\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",end:">",keywords:C,contains:["self",s]},{begin:e.IDENT_RE+"::",keywords:C},{className:"class",beginKeywords:"enum class struct union",end:/[{;:<>=]/,contains:[{beginKeywords:"final class struct"},e.TITLE_MODE]}]),exports:{preprocessor:d,strings:f,keywords:C}}}JS.exports=fee});i();U();U();i();i();i();i();i();i();i();var fD=typeof global=="object"&&global&&global.Object===Object&&global,va=fD;var pD=typeof self=="object"&&self&&self.Object===Object&&self,dD=va||pD||Function("return this")(),Re=dD;var mD=Re.Symbol,Ye=mD;i();var Km=Object.prototype,hD=Km.hasOwnProperty,gD=Km.toString,ko=Ye?Ye.toStringTag:void 0;function CD(e){var t=hD.call(e,ko),r=e[ko];try{e[ko]=void 0;var o=!0}catch{}var n=gD.call(e);return o&&(t?e[ko]=r:delete e[ko]),n}var Qm=CD;i();var vD=Object.prototype,xD=vD.toString;function _D(e){return xD.call(e)}var Zm=_D;var yD="[object Null]",OD="[object Undefined]",Jm=Ye?Ye.toStringTag:void 0;function TD(e){return e==null?e===void 0?OD:yD:Jm&&Jm in Object(e)?Qm(e):Zm(e)}var yt=TD;i();function bD(e){return e!=null&&typeof e=="object"}var lt=bD;var MD="[object Symbol]";function PD(e){return typeof e=="symbol"||lt(e)&&yt(e)==MD}var sr=PD;i();i();function ED(e,t){for(var r=-1,o=e==null?0:e.length,n=Array(o);++r<o;)n[r]=t(e[r],r,e);return n}var At=ED;i();var ID=Array.isArray,Ee=ID;var wD=1/0,eh=Ye?Ye.prototype:void 0,th=eh?eh.toString:void 0;function rh(e){if(typeof e=="string")return e;if(Ee(e))return At(e,rh)+"";if(sr(e))return th?th.call(e):"";var t=e+"";return t=="0"&&1/e==-wD?"-0":t}var nh=rh;i();i();i();var RD=/\s/;function SD(e){for(var t=e.length;t--&&RD.test(e.charAt(t)););return t}var oh=SD;var AD=/^\s+/;function DD(e){return e&&e.slice(0,oh(e)+1).replace(AD,"")}var ih=DD;i();function ND(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var Ot=ND;var ah=0/0,FD=/^[-+]0x[0-9a-f]+$/i,BD=/^0b[01]+$/i,kD=/^0o[0-7]+$/i,LD=parseInt;function WD(e){if(typeof e=="number")return e;if(sr(e))return ah;if(Ot(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=Ot(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=ih(e);var r=BD.test(e);return r||kD.test(e)?LD(e.slice(2),r?2:8):FD.test(e)?ah:+e}var El=WD;i();function qD(e){return e}var En=qD;i();i();i();i();var HD="[object AsyncFunction]",VD="[object Function]",zD="[object GeneratorFunction]",GD="[object Proxy]";function jD(e){if(!Ot(e))return!1;var t=yt(e);return t==VD||t==zD||t==HD||t==GD}var xa=jD;i();i();var UD=Re["__core-js_shared__"],_a=UD;var sh=function(){var e=/[^.]+$/.exec(_a&&_a.keys&&_a.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function $D(e){return!!sh&&sh in e}var uh=$D;i();var YD=Function.prototype,XD=YD.toString;function KD(e){if(e!=null){try{return XD.call(e)}catch{}try{return e+""}catch{}}return""}var Ut=KD;var QD=/[\\^$.*+?()[\]{}|]/g,ZD=/^\[object .+?Constructor\]$/,JD=Function.prototype,e2=Object.prototype,t2=JD.toString,r2=e2.hasOwnProperty,n2=RegExp("^"+t2.call(r2).replace(QD,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function o2(e){if(!Ot(e)||uh(e))return!1;var t=xa(e)?n2:ZD;return t.test(Ut(e))}var lh=o2;i();function i2(e,t){return e?.[t]}var ch=i2;function a2(e,t){var r=ch(e,t);return lh(r)?r:void 0}var Je=a2;var s2=Je(Re,"WeakMap"),ya=s2;i();function u2(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}var fh=u2;i();function l2(){}var ph=l2;i();var c2=800,f2=16,p2=Date.now;function d2(e){var t=0,r=0;return function(){var o=p2(),n=f2-(o-r);if(r=o,n>0){if(++t>=c2)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}var dh=d2;i();i();i();function m2(e){return function(){return e}}var mh=m2;i();var h2=function(){try{var e=Je(Object,"defineProperty");return e({},"",{}),e}catch{}}(),In=h2;var g2=In?function(e,t){return In(e,"toString",{configurable:!0,enumerable:!1,value:mh(t),writable:!0})}:En,hh=g2;var C2=dh(hh),gh=C2;i();i();i();function v2(e,t,r,o){for(var n=e.length,a=r+(o?1:-1);o?a--:++a<n;)if(t(e[a],a,e))return a;return-1}var Ch=v2;i();function x2(e){return e!==e}var vh=x2;i();function _2(e,t,r){for(var o=r-1,n=e.length;++o<n;)if(e[o]===t)return o;return-1}var xh=_2;function y2(e,t,r){return t===t?xh(e,t,r):Ch(e,vh,r)}var _h=y2;function O2(e,t){var r=e==null?0:e.length;return!!r&&_h(e,t,0)>-1}var wn=O2;i();var T2=9007199254740991,b2=/^(?:0|[1-9]\d*)$/;function M2(e,t){var r=typeof e;return t=t??T2,!!t&&(r=="number"||r!="symbol"&&b2.test(e))&&e>-1&&e%1==0&&e<t}var Oa=M2;i();function P2(e,t,r){t=="__proto__"&&In?In(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}var yh=P2;i();function E2(e,t){return e===t||e!==e&&t!==t}var Ta=E2;i();i();var Oh=Math.max;function I2(e,t,r){return t=Oh(t===void 0?e.length-1:t,0),function(){for(var o=arguments,n=-1,a=Oh(o.length-t,0),s=Array(a);++n<a;)s[n]=o[t+n];n=-1;for(var u=Array(t+1);++n<t;)u[n]=o[n];return u[t]=r(s),fh(e,this,u)}}var Th=I2;function w2(e,t){return gh(Th(e,t,En),e+"")}var Rn=w2;i();i();var R2=9007199254740991;function S2(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=R2}var Sn=S2;function A2(e){return e!=null&&Sn(e.length)&&!xa(e)}var ur=A2;i();var D2=Object.prototype;function N2(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||D2;return e===r}var bh=N2;i();i();i();function F2(e,t){for(var r=-1,o=Array(e);++r<e;)o[r]=t(r);return o}var Mh=F2;i();i();var B2="[object Arguments]";function k2(e){return lt(e)&&yt(e)==B2}var Il=k2;var Ph=Object.prototype,L2=Ph.hasOwnProperty,W2=Ph.propertyIsEnumerable,q2=Il(function(){return arguments}())?Il:function(e){return lt(e)&&L2.call(e,"callee")&&!W2.call(e,"callee")},An=q2;i();i();function H2(){return!1}var Eh=H2;var Rh=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Ih=Rh&&typeof module=="object"&&module&&!module.nodeType&&module,V2=Ih&&Ih.exports===Rh,wh=V2?Re.Buffer:void 0,z2=wh?wh.isBuffer:void 0,G2=z2||Eh,Lo=G2;i();i();var j2="[object Arguments]",U2="[object Array]",$2="[object Boolean]",Y2="[object Date]",X2="[object Error]",K2="[object Function]",Q2="[object Map]",Z2="[object Number]",J2="[object Object]",eN="[object RegExp]",tN="[object Set]",rN="[object String]",nN="[object WeakMap]",oN="[object ArrayBuffer]",iN="[object DataView]",aN="[object Float32Array]",sN="[object Float64Array]",uN="[object Int8Array]",lN="[object Int16Array]",cN="[object Int32Array]",fN="[object Uint8Array]",pN="[object Uint8ClampedArray]",dN="[object Uint16Array]",mN="[object Uint32Array]",Ce={};Ce[aN]=Ce[sN]=Ce[uN]=Ce[lN]=Ce[cN]=Ce[fN]=Ce[pN]=Ce[dN]=Ce[mN]=!0;Ce[j2]=Ce[U2]=Ce[oN]=Ce[$2]=Ce[iN]=Ce[Y2]=Ce[X2]=Ce[K2]=Ce[Q2]=Ce[Z2]=Ce[J2]=Ce[eN]=Ce[tN]=Ce[rN]=Ce[nN]=!1;function hN(e){return lt(e)&&Sn(e.length)&&!!Ce[yt(e)]}var Sh=hN;i();function gN(e){return function(t){return e(t)}}var Dn=gN;i();var Ah=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Wo=Ah&&typeof module=="object"&&module&&!module.nodeType&&module,CN=Wo&&Wo.exports===Ah,wl=CN&&va.process,vN=function(){try{var e=Wo&&Wo.require&&Wo.require("util").types;return e||wl&&wl.binding&&wl.binding("util")}catch{}}(),Rl=vN;var Dh=Rl&&Rl.isTypedArray,xN=Dh?Dn(Dh):Sh,ba=xN;var _N=Object.prototype,yN=_N.hasOwnProperty;function ON(e,t){var r=Ee(e),o=!r&&An(e),n=!r&&!o&&Lo(e),a=!r&&!o&&!n&&ba(e),s=r||o||n||a,u=s?Mh(e.length,String):[],f=u.length;for(var p in e)(t||yN.call(e,p))&&!(s&&(p=="length"||n&&(p=="offset"||p=="parent")||a&&(p=="buffer"||p=="byteLength"||p=="byteOffset")||Oa(p,f)))&&u.push(p);return u}var Nh=ON;i();i();i();function TN(e,t){return function(r){return e(t(r))}}var Fh=TN;var bN=Fh(Object.keys,Object),Bh=bN;var MN=Object.prototype,PN=MN.hasOwnProperty;function EN(e){if(!bh(e))return Bh(e);var t=[];for(var r in Object(e))PN.call(e,r)&&r!="constructor"&&t.push(r);return t}var kh=EN;function IN(e){return ur(e)?Nh(e):kh(e)}var Nn=IN;i();i();i();i();var wN=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,RN=/^\w*$/;function SN(e,t){if(Ee(e))return!1;var r=typeof e;return r=="number"||r=="symbol"||r=="boolean"||e==null||sr(e)?!0:RN.test(e)||!wN.test(e)||t!=null&&e in Object(t)}var Fn=SN;i();i();i();i();i();i();i();i();var AN=Je(Object,"create"),$t=AN;function DN(){this.__data__=$t?$t(null):{},this.size=0}var Lh=DN;i();function NN(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var Wh=NN;i();var FN="__lodash_hash_undefined__",BN=Object.prototype,kN=BN.hasOwnProperty;function LN(e){var t=this.__data__;if($t){var r=t[e];return r===FN?void 0:r}return kN.call(t,e)?t[e]:void 0}var qh=LN;i();var WN=Object.prototype,qN=WN.hasOwnProperty;function HN(e){var t=this.__data__;return $t?t[e]!==void 0:qN.call(t,e)}var Hh=HN;i();var VN="__lodash_hash_undefined__";function zN(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=$t&&t===void 0?VN:t,this}var Vh=zN;function Bn(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var o=e[t];this.set(o[0],o[1])}}Bn.prototype.clear=Lh;Bn.prototype.delete=Wh;Bn.prototype.get=qh;Bn.prototype.has=Hh;Bn.prototype.set=Vh;var Sl=Bn;i();i();function GN(){this.__data__=[],this.size=0}var zh=GN;i();i();function jN(e,t){for(var r=e.length;r--;)if(Ta(e[r][0],t))return r;return-1}var lr=jN;var UN=Array.prototype,$N=UN.splice;function YN(e){var t=this.__data__,r=lr(t,e);if(r<0)return!1;var o=t.length-1;return r==o?t.pop():$N.call(t,r,1),--this.size,!0}var Gh=YN;i();function XN(e){var t=this.__data__,r=lr(t,e);return r<0?void 0:t[r][1]}var jh=XN;i();function KN(e){return lr(this.__data__,e)>-1}var Uh=KN;i();function QN(e,t){var r=this.__data__,o=lr(r,e);return o<0?(++this.size,r.push([e,t])):r[o][1]=t,this}var $h=QN;function kn(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var o=e[t];this.set(o[0],o[1])}}kn.prototype.clear=zh;kn.prototype.delete=Gh;kn.prototype.get=jh;kn.prototype.has=Uh;kn.prototype.set=$h;var cr=kn;i();var ZN=Je(Re,"Map"),fr=ZN;function JN(){this.size=0,this.__data__={hash:new Sl,map:new(fr||cr),string:new Sl}}var Yh=JN;i();i();i();function e3(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}var Xh=e3;function t3(e,t){var r=e.__data__;return Xh(t)?r[typeof t=="string"?"string":"hash"]:r.map}var pr=t3;function r3(e){var t=pr(this,e).delete(e);return this.size-=t?1:0,t}var Kh=r3;i();function n3(e){return pr(this,e).get(e)}var Qh=n3;i();function o3(e){return pr(this,e).has(e)}var Zh=o3;i();function i3(e,t){var r=pr(this,e),o=r.size;return r.set(e,t),this.size+=r.size==o?0:1,this}var Jh=i3;function Ln(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var o=e[t];this.set(o[0],o[1])}}Ln.prototype.clear=Yh;Ln.prototype.delete=Kh;Ln.prototype.get=Qh;Ln.prototype.has=Zh;Ln.prototype.set=Jh;var Hr=Ln;var a3="Expected a function";function Al(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(a3);var r=function(){var o=arguments,n=t?t.apply(this,o):o[0],a=r.cache;if(a.has(n))return a.get(n);var s=e.apply(this,o);return r.cache=a.set(n,s)||a,s};return r.cache=new(Al.Cache||Hr),r}Al.Cache=Hr;var e0=Al;var s3=500;function u3(e){var t=e0(e,function(o){return r.size===s3&&r.clear(),o}),r=t.cache;return t}var t0=u3;var l3=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,c3=/\\(\\)?/g,f3=t0(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(l3,function(r,o,n,a){t.push(n?a.replace(c3,"$1"):o||r)}),t}),r0=f3;i();function p3(e){return e==null?"":nh(e)}var n0=p3;function d3(e,t){return Ee(e)?e:Fn(e,t)?[e]:r0(n0(e))}var Ma=d3;i();var m3=1/0;function h3(e){if(typeof e=="string"||sr(e))return e;var t=e+"";return t=="0"&&1/e==-m3?"-0":t}var dr=h3;function g3(e,t){t=Ma(t,e);for(var r=0,o=t.length;e!=null&&r<o;)e=e[dr(t[r++])];return r&&r==o?e:void 0}var Pa=g3;function C3(e,t,r){var o=e==null?void 0:Pa(e,t);return o===void 0?r:o}var o0=C3;i();i();function v3(e,t){for(var r=-1,o=t.length,n=e.length;++r<o;)e[n+r]=t[r];return e}var Ea=v3;i();var i0=Ye?Ye.isConcatSpreadable:void 0;function x3(e){return Ee(e)||An(e)||!!(i0&&e&&e[i0])}var a0=x3;function s0(e,t,r,o,n){var a=-1,s=e.length;for(r||(r=a0),n||(n=[]);++a<s;){var u=e[a];t>0&&r(u)?t>1?s0(u,t-1,r,o,n):Ea(n,u):o||(n[n.length]=u)}return n}var u0=s0;i();i();function _3(){this.__data__=new cr,this.size=0}var l0=_3;i();function y3(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}var c0=y3;i();function O3(e){return this.__data__.get(e)}var f0=O3;i();function T3(e){return this.__data__.has(e)}var p0=T3;i();var b3=200;function M3(e,t){var r=this.__data__;if(r instanceof cr){var o=r.__data__;if(!fr||o.length<b3-1)return o.push([e,t]),this.size=++r.size,this;r=this.__data__=new Hr(o)}return r.set(e,t),this.size=r.size,this}var d0=M3;function Wn(e){var t=this.__data__=new cr(e);this.size=t.size}Wn.prototype.clear=l0;Wn.prototype.delete=c0;Wn.prototype.get=f0;Wn.prototype.has=p0;Wn.prototype.set=d0;var qn=Wn;i();i();function P3(e,t){for(var r=-1,o=e==null?0:e.length,n=0,a=[];++r<o;){var s=e[r];t(s,r,e)&&(a[n++]=s)}return a}var m0=P3;i();function E3(){return[]}var h0=E3;var I3=Object.prototype,w3=I3.propertyIsEnumerable,g0=Object.getOwnPropertySymbols,R3=g0?function(e){return e==null?[]:(e=Object(e),m0(g0(e),function(t){return w3.call(e,t)}))}:h0,C0=R3;i();i();function S3(e,t,r){var o=t(e);return Ee(e)?o:Ea(o,r(e))}var v0=S3;function A3(e){return v0(e,Nn,C0)}var Dl=A3;i();i();var D3=Je(Re,"DataView"),Ia=D3;i();var N3=Je(Re,"Promise"),wa=N3;i();var F3=Je(Re,"Set"),mr=F3;var x0="[object Map]",B3="[object Object]",_0="[object Promise]",y0="[object Set]",O0="[object WeakMap]",T0="[object DataView]",k3=Ut(Ia),L3=Ut(fr),W3=Ut(wa),q3=Ut(mr),H3=Ut(ya),Vr=yt;(Ia&&Vr(new Ia(new ArrayBuffer(1)))!=T0||fr&&Vr(new fr)!=x0||wa&&Vr(wa.resolve())!=_0||mr&&Vr(new mr)!=y0||ya&&Vr(new ya)!=O0)&&(Vr=function(e){var t=yt(e),r=t==B3?e.constructor:void 0,o=r?Ut(r):"";if(o)switch(o){case k3:return T0;case L3:return x0;case W3:return _0;case q3:return y0;case H3:return O0}return t});var Nl=Vr;i();var V3=Re.Uint8Array,Fl=V3;i();i();i();i();i();i();i();i();var z3="__lodash_hash_undefined__";function G3(e){return this.__data__.set(e,z3),this}var b0=G3;i();function j3(e){return this.__data__.has(e)}var M0=j3;function Ra(e){var t=-1,r=e==null?0:e.length;for(this.__data__=new Hr;++t<r;)this.add(e[t])}Ra.prototype.add=Ra.prototype.push=b0;Ra.prototype.has=M0;var hr=Ra;i();function U3(e,t){for(var r=-1,o=e==null?0:e.length;++r<o;)if(t(e[r],r,e))return!0;return!1}var P0=U3;i();function $3(e,t){return e.has(t)}var Yt=$3;var Y3=1,X3=2;function K3(e,t,r,o,n,a){var s=r&Y3,u=e.length,f=t.length;if(u!=f&&!(s&&f>u))return!1;var p=a.get(e),d=a.get(t);if(p&&d)return p==t&&d==e;var h=-1,m=!0,g=r&X3?new hr:void 0;for(a.set(e,t),a.set(t,e);++h<u;){var C=e[h],x=t[h];if(o)var y=s?o(x,C,h,t,e,a):o(C,x,h,e,t,a);if(y!==void 0){if(y)continue;m=!1;break}if(g){if(!P0(t,function(O,_){if(!Yt(g,_)&&(C===O||n(C,O,r,o,a)))return g.push(_)})){m=!1;break}}else if(!(C===x||n(C,x,r,o,a))){m=!1;break}}return a.delete(e),a.delete(t),m}var Sa=K3;i();i();function Q3(e){var t=-1,r=Array(e.size);return e.forEach(function(o,n){r[++t]=[n,o]}),r}var E0=Q3;i();function Z3(e){var t=-1,r=Array(e.size);return e.forEach(function(o){r[++t]=o}),r}var Hn=Z3;var J3=1,eF=2,tF="[object Boolean]",rF="[object Date]",nF="[object Error]",oF="[object Map]",iF="[object Number]",aF="[object RegExp]",sF="[object Set]",uF="[object String]",lF="[object Symbol]",cF="[object ArrayBuffer]",fF="[object DataView]",I0=Ye?Ye.prototype:void 0,Bl=I0?I0.valueOf:void 0;function pF(e,t,r,o,n,a,s){switch(r){case fF:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case cF:return!(e.byteLength!=t.byteLength||!a(new Fl(e),new Fl(t)));case tF:case rF:case iF:return Ta(+e,+t);case nF:return e.name==t.name&&e.message==t.message;case aF:case uF:return e==t+"";case oF:var u=E0;case sF:var f=o&J3;if(u||(u=Hn),e.size!=t.size&&!f)return!1;var p=s.get(e);if(p)return p==t;o|=eF,s.set(e,t);var d=Sa(u(e),u(t),o,n,a,s);return s.delete(e),d;case lF:if(Bl)return Bl.call(e)==Bl.call(t)}return!1}var w0=pF;i();var dF=1,mF=Object.prototype,hF=mF.hasOwnProperty;function gF(e,t,r,o,n,a){var s=r&dF,u=Dl(e),f=u.length,p=Dl(t),d=p.length;if(f!=d&&!s)return!1;for(var h=f;h--;){var m=u[h];if(!(s?m in t:hF.call(t,m)))return!1}var g=a.get(e),C=a.get(t);if(g&&C)return g==t&&C==e;var x=!0;a.set(e,t),a.set(t,e);for(var y=s;++h<f;){m=u[h];var O=e[m],_=t[m];if(o)var S=s?o(_,O,m,t,e,a):o(O,_,m,e,t,a);if(!(S===void 0?O===_||n(O,_,r,o,a):S)){x=!1;break}y||(y=m=="constructor")}if(x&&!y){var M=e.constructor,R=t.constructor;M!=R&&"constructor"in e&&"constructor"in t&&!(typeof M=="function"&&M instanceof M&&typeof R=="function"&&R instanceof R)&&(x=!1)}return a.delete(e),a.delete(t),x}var R0=gF;var CF=1,S0="[object Arguments]",A0="[object Array]",Aa="[object Object]",vF=Object.prototype,D0=vF.hasOwnProperty;function xF(e,t,r,o,n,a){var s=Ee(e),u=Ee(t),f=s?A0:Nl(e),p=u?A0:Nl(t);f=f==S0?Aa:f,p=p==S0?Aa:p;var d=f==Aa,h=p==Aa,m=f==p;if(m&&Lo(e)){if(!Lo(t))return!1;s=!0,d=!1}if(m&&!d)return a||(a=new qn),s||ba(e)?Sa(e,t,r,o,n,a):w0(e,t,f,r,o,n,a);if(!(r&CF)){var g=d&&D0.call(e,"__wrapped__"),C=h&&D0.call(t,"__wrapped__");if(g||C){var x=g?e.value():e,y=C?t.value():t;return a||(a=new qn),n(x,y,r,o,a)}}return m?(a||(a=new qn),R0(e,t,r,o,n,a)):!1}var N0=xF;function F0(e,t,r,o,n){return e===t?!0:e==null||t==null||!lt(e)&&!lt(t)?e!==e&&t!==t:N0(e,t,r,o,F0,n)}var Da=F0;var _F=1,yF=2;function OF(e,t,r,o){var n=r.length,a=n,s=!o;if(e==null)return!a;for(e=Object(e);n--;){var u=r[n];if(s&&u[2]?u[1]!==e[u[0]]:!(u[0]in e))return!1}for(;++n<a;){u=r[n];var f=u[0],p=e[f],d=u[1];if(s&&u[2]){if(p===void 0&&!(f in e))return!1}else{var h=new qn;if(o)var m=o(p,d,f,e,t,h);if(!(m===void 0?Da(d,p,_F|yF,o,h):m))return!1}}return!0}var B0=OF;i();i();function TF(e){return e===e&&!Ot(e)}var Na=TF;function bF(e){for(var t=Nn(e),r=t.length;r--;){var o=t[r],n=e[o];t[r]=[o,n,Na(n)]}return t}var k0=bF;i();function MF(e,t){return function(r){return r==null?!1:r[e]===t&&(t!==void 0||e in Object(r))}}var Fa=MF;function PF(e){var t=k0(e);return t.length==1&&t[0][2]?Fa(t[0][0],t[0][1]):function(r){return r===e||B0(r,e,t)}}var L0=PF;i();i();i();function EF(e,t){return e!=null&&t in Object(e)}var W0=EF;i();function IF(e,t,r){t=Ma(t,e);for(var o=-1,n=t.length,a=!1;++o<n;){var s=dr(t[o]);if(!(a=e!=null&&r(e,s)))break;e=e[s]}return a||++o!=n?a:(n=e==null?0:e.length,!!n&&Sn(n)&&Oa(s,n)&&(Ee(e)||An(e)))}var q0=IF;function wF(e,t){return e!=null&&q0(e,t,W0)}var H0=wF;var RF=1,SF=2;function AF(e,t){return Fn(e)&&Na(t)?Fa(dr(e),t):function(r){var o=o0(r,e);return o===void 0&&o===t?H0(r,e):Da(t,o,RF|SF)}}var V0=AF;i();i();function DF(e){return function(t){return t?.[e]}}var z0=DF;i();function NF(e){return function(t){return Pa(t,e)}}var G0=NF;function FF(e){return Fn(e)?z0(dr(e)):G0(e)}var j0=FF;function BF(e){return typeof e=="function"?e:e==null?En:typeof e=="object"?Ee(e)?V0(e[0],e[1]):L0(e):j0(e)}var Ba=BF;i();i();i();i();function kF(e){return function(t,r,o){for(var n=-1,a=Object(t),s=o(t),u=s.length;u--;){var f=s[e?u:++n];if(r(a[f],f,a)===!1)break}return t}}var U0=kF;var LF=U0(),$0=LF;function WF(e,t){return e&&$0(e,t,Nn)}var ka=WF;i();function qF(e,t){return function(r,o){if(r==null)return r;if(!ur(r))return e(r,o);for(var n=r.length,a=t?n:-1,s=Object(r);(t?a--:++a<n)&&o(s[a],a,s)!==!1;);return r}}var Y0=qF;var HF=Y0(ka),X0=HF;i();i();var VF=function(){return Re.Date.now()},La=VF;var zF="Expected a function",GF=Math.max,jF=Math.min;function UF(e,t,r){var o,n,a,s,u,f,p=0,d=!1,h=!1,m=!0;if(typeof e!="function")throw new TypeError(zF);t=El(t)||0,Ot(r)&&(d=!!r.leading,h="maxWait"in r,a=h?GF(El(r.maxWait)||0,t):a,m="trailing"in r?!!r.trailing:m);function g(b){var I=o,T=n;return o=n=void 0,p=b,s=e.apply(T,I),s}function C(b){return p=b,u=setTimeout(O,t),d?g(b):s}function x(b){var I=b-f,T=b-p,E=t-I;return h?jF(E,a-T):E}function y(b){var I=b-f,T=b-p;return f===void 0||I>=t||I<0||h&&T>=a}function O(){var b=La();if(y(b))return _(b);u=setTimeout(O,x(b))}function _(b){return u=void 0,m&&o?g(b):(o=n=void 0,s)}function S(){u!==void 0&&clearTimeout(u),p=0,o=f=n=u=void 0}function M(){return u===void 0?s:_(La())}function R(){var b=La(),I=y(b);if(o=arguments,n=this,f=b,I){if(u===void 0)return C(f);if(h)return clearTimeout(u),u=setTimeout(O,t),g(f)}return u===void 0&&(u=setTimeout(O,t)),s}return R.cancel=S,R.flush=M,R}var kl=UF;i();function $F(e){return lt(e)&&ur(e)}var zr=$F;i();i();i();function YF(e,t,r){for(var o=-1,n=e==null?0:e.length;++o<n;)if(r(t,e[o]))return!0;return!1}var Vn=YF;var XF=200;function KF(e,t,r,o){var n=-1,a=wn,s=!0,u=e.length,f=[],p=t.length;if(!u)return f;r&&(t=At(t,Dn(r))),o?(a=Vn,s=!1):t.length>=XF&&(a=Yt,s=!1,t=new hr(t));e:for(;++n<u;){var d=e[n],h=r==null?d:r(d);if(d=o||d!==0?d:0,s&&h===h){for(var m=p;m--;)if(t[m]===h)continue e;f.push(d)}else a(t,h,o)||f.push(d)}return f}var Wa=KF;var QF=Rn(function(e,t){return zr(e)?Wa(e,u0(t,1,zr,!0)):[]}),Ll=QF;i();i();function ZF(e,t){var r=-1,o=ur(e)?Array(e.length):[];return X0(e,function(n,a,s){o[++r]=t(n,a,s)}),o}var K0=ZF;function JF(e,t){var r=Ee(e)?At:K0;return r(e,Ba(t,3))}var Xt=JF;i();i();var eB=Math.min;function tB(e,t,r){for(var o=r?Vn:wn,n=e[0].length,a=e.length,s=a,u=Array(a),f=1/0,p=[];s--;){var d=e[s];s&&t&&(d=At(d,Dn(t))),f=eB(d.length,f),u[s]=!r&&(t||n>=120&&d.length>=120)?new hr(s&&d):void 0}d=e[0];var h=-1,m=u[0];e:for(;++h<n&&p.length<f;){var g=d[h],C=t?t(g):g;if(g=r||g!==0?g:0,!(m?Yt(m,C):o(p,C,r))){for(s=a;--s;){var x=u[s];if(!(x?Yt(x,C):o(e[s],C,r)))continue e}m&&m.push(C),p.push(g)}}return p}var Q0=tB;i();function rB(e){return zr(e)?e:[]}var Z0=rB;var nB=Rn(function(e){var t=At(e,Z0);return t.length&&t[0]===e[0]?Q0(t):[]}),Wl=nB;i();function oB(e,t){var r={};return t=Ba(t,3),ka(e,function(o,n,a){yh(r,n,t(o,n,a))}),r}var ql=oB;i();i();var iB=1/0,aB=mr&&1/Hn(new mr([,-0]))[1]==iB?function(e){return new mr(e)}:ph,J0=aB;var sB=200;function uB(e,t,r){var o=-1,n=wn,a=e.length,s=!0,u=[],f=u;if(r)s=!1,n=Vn;else if(a>=sB){var p=t?null:J0(e);if(p)return Hn(p);s=!1,n=Yt,f=new hr}else f=t?[]:u;e:for(;++o<a;){var d=e[o],h=t?t(d):d;if(d=r||d!==0?d:0,s&&h===h){for(var m=f.length;m--;)if(f[m]===h)continue e;t&&f.push(h),u.push(d)}else n(f,h,r)||(f!==u&&f.push(h),u.push(d))}return u}var eg=uB;i();function lB(e){return e&&e.length?eg(e):[]}var Kt=lB;i();var cB=Rn(function(e,t){return zr(e)?Wa(e,t):[]}),Hl=cB;i();var me={},fB=0;function pe(e,t){let r=`atom${++fB}`,o={toString:()=>r};return typeof e=="function"?o.read=e:(o.init=e,o.read=n=>n(o),o.write=(n,a,s)=>a(o,typeof s=="function"?s(n(o)):s)),t&&(o.write=t),o}var Vl=e=>"init"in e,zl=e=>!!e.write,Va=new WeakMap,pB=(e,t)=>{Va.set(e,t),e.catch(()=>{}).finally(()=>Va.delete(e))},tg=(e,t)=>{let r=Va.get(e);r&&(Va.delete(e),r(t))},rg=(e,t)=>{e.status="fulfilled",e.value=t},ng=(e,t)=>{e.status="rejected",e.reason=t},qa=(e,t)=>"v"in e&&"v"in t&&Object.is(e.v,t.v),og=(e,t)=>"e"in e&&"e"in t&&Object.is(e.e,t.e),Gl=e=>"v"in e&&e.v instanceof Promise,Ha=e=>{if("e"in e)throw e.e;return e.v},ig=()=>{let e=new WeakMap,t=new WeakMap,r=new Map,o,n,a;(me.env&&me.env.MODE)!=="production"&&(o=new Set,n=new Set,a=new Set);let s=T=>e.get(T),u=(T,E)=>{(me.env&&me.env.MODE)!=="production"&&Object.freeze(E);let F=e.get(T);if(e.set(T,E),r.has(T)||r.set(T,F),F&&Gl(F)){let w="v"in E?E.v instanceof Promise?E.v:Promise.resolve(E.v):Promise.reject(E.e);tg(F.v,w)}},f=(T,E,F)=>{let w=new Map,B=!1;F.forEach(k=>{let $=k===T?E:s(k);$?(w.set(k,$),E.d.get(k)!==$&&(B=!0)):(me.env&&me.env.MODE)!=="production"&&console.warn("[Bug] atom state not found")}),(B||E.d.size!==w.size)&&(E.d=w)},p=(T,E,F)=>{let w=s(T),B={d:w?.d||new Map,v:E};return F&&f(T,B,F),w&&qa(w,B)&&w.d===B.d?w:(u(T,B),B)},d=(T,E,F)=>{let w=s(T),B={d:w?.d||new Map,e:E};return F&&f(T,B,F),w&&og(w,B)&&w.d===B.d?w:(u(T,B),B)},h=T=>{let E=s(T);if(E&&(E.d.forEach((Z,z)=>{z!==T&&!t.has(z)&&h(z)}),Array.from(E.d).every(([Z,z])=>Z===T||s(Z)===z)))return E;let F=new Set,w=!0,B=Z=>{if(F.add(Z),Z===T){let H=s(Z);if(H)return Ha(H);if(Vl(Z))return Z.init;throw new Error("no atom init")}let z=h(Z);return Ha(z)},k,$,ue={get signal(){return k||(k=new AbortController),k.signal},get setSelf(){return(me.env&&me.env.MODE)!=="production"&&!zl(T)&&console.warn("setSelf function cannot be used with read-only atom"),!$&&zl(T)&&($=(...Z)=>{if((me.env&&me.env.MODE)!=="production"&&w&&console.warn("setSelf function cannot be called in sync"),!w)return _(T,...Z)}),$}};try{let Z=T.read(B,ue);if(Z instanceof Promise){let z,H=new Promise((L,K)=>{let Pe=!1;Z.then(le=>{Pe||(Pe=!0,p(T,H,F),rg(H,le),L(le))},le=>{Pe||(Pe=!0,p(T,H,F),ng(H,le),K(le))}),z=le=>{Pe||(Pe=!0,le.then(D=>rg(H,D),D=>ng(H,D)),L(le))}});return H.status="pending",pB(H,L=>{L&&z(L),k?.abort()}),p(T,H,F)}return p(T,Z,F)}catch(Z){return d(T,Z,F)}finally{w=!1}},m=T=>Ha(h(T)),g=T=>{let E=t.get(T);return E||(E=S(T)),E},C=(T,E)=>!E.l.size&&(!E.t.size||E.t.size===1&&E.t.has(T)),x=T=>{let E=t.get(T);E&&C(T,E)&&M(T)},y=T=>{let E=t.get(T);E?.t.forEach(F=>{if(F!==T){let w=s(F),B=h(F);(!w||!qa(w,B))&&y(F)}})},O=(T,...E)=>{let F=!0,w=$=>Ha(h($)),B=($,...ue)=>{let Z;if($===T){if(!Vl($))throw new Error("atom not writable");let z=s($),H=p($,ue[0]);(!z||!qa(z,H))&&y($)}else Z=O($,...ue);return F||b(),Z},k=T.write(w,B,...E);return F=!1,k},_=(T,...E)=>{let F=O(T,...E);return b(),F},S=(T,E)=>{let F={t:new Set(E&&[E]),l:new Set};if(t.set(T,F),(me.env&&me.env.MODE)!=="production"&&a.add(T),h(T).d.forEach((w,B)=>{let k=t.get(B);k?k.t.add(T):B!==T&&S(B,T)}),h(T),zl(T)&&T.onMount){let w=T.onMount((...B)=>_(T,...B));w&&(F.u=w)}return F},M=T=>{var E;let F=(E=t.get(T))==null?void 0:E.u;F&&F(),t.delete(T),(me.env&&me.env.MODE)!=="production"&&a.delete(T);let w=s(T);w?(Gl(w)&&tg(w.v),w.d.forEach((B,k)=>{if(k!==T){let $=t.get(k);$&&($.t.delete(T),C(k,$)&&M(k))}})):(me.env&&me.env.MODE)!=="production"&&console.warn("[Bug] could not find atom state to unmount",T)},R=(T,E,F)=>{let w=new Set(E.d.keys());F?.forEach((B,k)=>{if(w.has(k)){w.delete(k);return}let $=t.get(k);$&&($.t.delete(T),C(k,$)&&M(k))}),w.forEach(B=>{let k=t.get(B);k?k.t.add(T):t.has(T)&&S(B,T)})},b=()=>{for(;r.size;){let T=Array.from(r);r.clear(),T.forEach(([E,F])=>{let w=s(E);if(w){w.d!==F?.d&&R(E,w,F?.d);let B=t.get(E);B&&!(F&&!Gl(F)&&(qa(F,w)||og(F,w)))&&B.l.forEach(k=>k())}else(me.env&&me.env.MODE)!=="production"&&console.warn("[Bug] no atom state to flush")})}(me.env&&me.env.MODE)!=="production"&&(o.forEach(T=>T()),n.forEach(T=>T("state")))},I=(T,E)=>{let F=g(T);b();let w=F.l;return w.add(E),(me.env&&me.env.MODE)!=="production"&&n.forEach(B=>B("sub")),()=>{w.delete(E),x(T),(me.env&&me.env.MODE)!=="production"&&n.forEach(B=>B("unsub"))}};return(me.env&&me.env.MODE)!=="production"?{get:m,set:_,sub:I,dev_subscribe_state:T=>(console.warn("[DEPRECATED] dev_subscribe_state is deprecated and will be removed in the next minor version. use dev_subscribe_store instead."),o.add(T),()=>{o.delete(T)}),dev_subscribe_store:T=>(n.add(T),()=>{n.delete(T)}),dev_get_mounted_atoms:()=>a.values(),dev_get_atom_state:T=>e.get(T),dev_get_mounted:T=>t.get(T),dev_restore_atoms:T=>{for(let[E,F]of T)Vl(E)&&(p(E,F),y(E));b()}}:{get:m,set:_,sub:I}},jl,za=()=>(jl||(jl=ig()),jl);i();U();var ag={},dB=ir(void 0),sg=e=>{let t=da(dB);return e?.store||t||za()};var mB=e=>e instanceof Promise,hB=Me.use||(e=>{if(e.status==="pending")throw e;if(e.status==="fulfilled")return e.value;throw e.status==="rejected"?e.reason:(e.status="pending",e.then(t=>{e.status="fulfilled",e.value=t},t=>{e.status="rejected",e.reason=t}),e)});function We(e,t){let r=sg(t),[[o,n,a],s]=Fo(p=>{let d=r.get(e);return Object.is(p[0],d)&&p[1]===r&&p[2]===e?p:[d,r,e]},void 0,()=>[r.get(e),r,e]),u=o;(n!==r||a!==e)&&(s(),u=r.get(e));let f=t?.delay;return ke(()=>{let p=r.sub(e,()=>{if(typeof f=="number"){setTimeout(s,f);return}s()});return s(),p},[r,e,f]),ma(u),mB(u)?hB(u):u}function Dt(e,t){let r=sg(t);return Pn((...n)=>{if((ag.env&&ag.env.MODE)!=="production"&&!("write"in e))throw new Error("not writable atom");return r.set(e,...n)},[r,e])}function Ga(e,t){return[We(e,t),Dt(e,t)]}i();i();i();i();function A(){return A=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},A.apply(this,arguments)}i();function W(e,t){if(e==null)return{};var r={},o=Object.keys(e),n,a;for(a=0;a<o.length;a++)n=o[a],!(t.indexOf(n)>=0)&&(r[n]=e[n]);return r}i();i();function qo(e,t){return qo=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,n){return o.__proto__=n,o},qo(e,t)}function G(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,qo(e,t)}U();var Jt=N(ae()),lO=N(se());i();i();U();var Ul=N(ae()),$l=$e(function(e,t){var r=e.componentClass,o=r===void 0?"a":r,n=e.disabled,a=W(e,["componentClass","disabled"]),s=function(f){var p;if(n){f.preventDefault(),f.stopPropagation();return}(p=a.onClick)===null||p===void 0||p.call(a,f)};return n&&(a.tabIndex=-1,a["aria-disabled"]=!0),l(o,A({ref:t},a,{onClick:s}))});$l.displayName="SafeAnchor";$l.propTypes={disabled:Ul.default.bool,componentClass:Ul.default.elementType};var hg=$l;var Gr=hg;i();i();U();var Ns=N(ae()),of=N(se());i();U();var nt=N(ae());i();i();i();i();i();i();i();i();i();i();function Ua(e){return e.replace(/\-(\w)/g,function(t){return t.slice(1).toUpperCase()})}function Cg(e){return e.replace(/([A-Z])/g,"-$1").toLowerCase()}var _B=/^ms-/,vg=function(e){return Ua(e.replace(_B,"ms-"))};i();var $a=function(e){if(!e)throw new TypeError("No Element passed to `getComputedStyle()`");var t=e.ownerDocument;return"defaultView"in t?t.defaultView.opener?e.ownerDocument.defaultView.getComputedStyle(e,null):window.getComputedStyle(e,null):null};i();var yB=/^ms-/,Ho=function(e){return Cg(e).replace(yB,"-ms-")};var dt=function(e,t){if(t){var r=e.style[vg(t)];if(r)return r;var o=$a(e);if(o)return o.getPropertyValue(Ho(t))}return e.style||$a(e)};i();function xg(e,t){"removeProperty"in e.style?e.style.removeProperty(t):typeof e.style.removeAttribute=="function"&&e.style.removeAttribute(t)}var Yl=function(e,t){typeof t=="string"?xg(e,t):Object.prototype.toString.call(t)==="[object Array]"&&t.forEach(function(r){return xg(e,r)})};i();var jr=function(e,t,r){var o="",n=t;if(typeof t=="string"){if(r===void 0)throw new Error("value is undefined");(n={})[t]=r}if(typeof n=="object")for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(!n[a]&&n[a]!==0?Yl(e,Ho(a)):o+=Ho(a)+":"+n[a]+";");e.style.cssText+=";"+o};i();i();var et=function(e){return e&&e.ownerDocument||document};i();i();var Nt=function(e){return e===e.window?e:e.nodeType===9?e.defaultView||e.parentWindow:null};i();var Vo=function(e,t){return e=typeof e=="function"?e():e,e||t};i();var OB=!!(typeof window<"u"&&window.document&&window.document.createElement),mt=OB;i();var _g=function(t,r){if(r)do if(r===t)return!0;while(r=r.parentNode);return!1},TB=function(t,r){return t.contains?t.contains(r):t.compareDocumentPosition?t===r||!!(t.compareDocumentPosition(r)&16):_g(t,r)},Ft=function(){return mt?TB:_g}();i();var Ur=function(e,t){var r=Nt(e),o=e.scrollTop,n=0;return r&&(o="pageYOffset"in r?r.pageYOffset:r.document.documentElement.scrollTop,n="pageXOffset"in r?r.pageXOffset:r.document.documentElement.scrollLeft),t!==void 0&&(r?r.scrollTo(n,t):e.scrollTop=t),o};i();var $r=function(e,t){var r=Nt(e),o=e.scrollLeft,n=0;return r&&(o="pageXOffset"in r?r.pageXOffset:r.document.documentElement.scrollLeft,n="pageYOffset"in r?r.pageYOffset:r.document.documentElement.scrollTop),t!==void 0&&(r?r.scrollTo(t,n):e.scrollLeft=t),o};i();var ht=function(e){var t=et(e),r=Nt(t),o=t&&t.documentElement,n={top:0,left:0,height:0,width:0};return t?(Ft(o,e)&&(e.getBoundingClientRect!==void 0&&(n=e.getBoundingClientRect()),(n.width||n.height)&&o&&r&&(n={top:n.top+(r.pageYOffset||o.scrollTop)-(o.clientTop||0),left:n.left+(r.pageXOffset||o.scrollLeft)-(o.clientLeft||0),width:(n.width===null?e.offsetWidth:n.width)||0,height:(n.height===null?e.offsetHeight:n.height)||0})),n):null};i();var zo=function(e){return e.nodeName&&e.nodeName.toLowerCase()};i();var Xl=function(e){for(var t=et(e),r=e&&e.offsetParent;r&&zo(e)!=="html"&&dt(r,"position")==="static";)r=r.offsetParent;return r||t.documentElement};i();function Kl(){return Kl=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},Kl.apply(this,arguments)}var Ql=function(e,t){var r={top:0,left:0},o=null;if(dt(e,"position")==="fixed")o=e.getBoundingClientRect();else{if(t=t||Xl(e),o=ht(e),zo(t)!=="html"){var n=ht(t);n&&(r.top=n.top,r.left=n.left)}r.top+=parseInt(dt(t,"borderTopWidth"),10)-Ur(t)||0,r.left+=parseInt(dt(t,"borderLeftWidth"),10)-$r(t)||0}return o?Kl({},o,{top:o.top-r.top-(parseInt(dt(e,"marginTop"),10)||0),left:o.left-r.left-(parseInt(dt(e,"marginLeft"),10)||0)}):null};i();i();i();i();i();i();i();var Tt=function(e,t,r,o){return o===void 0&&(o=!1),e.addEventListener(t,r,o),{off:function(){e.removeEventListener(t,r,o)}}};i();i();i();i();function bB(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}var gr=bB;var zn=gr(),yg=zn.cancelAnimationFrame||zn.webkitCancelAnimationFrame||zn.mozCancelAnimationFrame||zn.oCancelAnimationFrame||zn.msCancelAnimationFrame||zn.clearTimeout;i();var Go=gr(),Ya=Go.requestAnimationFrame||Go.webkitRequestAnimationFrame||Go.mozRequestAnimationFrame||Go.oRequestAnimationFrame||Go.msRequestAnimationFrame;i();i();var MB=void 0;function Xa(e){return function(){return e}}function Yr(){}Yr.thatReturns=Xa;Yr.thatReturnsFalse=Xa(!1);Yr.thatReturnsTrue=Xa(!0);Yr.thatReturnsNull=Xa(null);Yr.thatReturnsThis=function(){return MB};Yr.thatReturnsArgument=function(e){return e};var Zl=Yr;var Tg=gr(),Og=0;function PB(e){var t=Date.now(),r=Math.max(0,16-(t-Og));return Og=t+r,Tg.setTimeout(function(){e(Date.now())},r)}var EB=Ya&&Ya.bind(Tg)||PB;EB(Zl);i();function wB(){if(!mt)return{};for(var e={O:function(f){return"o"+f.toLowerCase()},Moz:function(f){return f.toLowerCase()},Webkit:function(f){return"webkit"+f},ms:function(f){return"MS"+f}},t=Object.keys(e),r=document.createElement("div").style,o,n="",a=0;a<t.length;a+=1){var s=t[a];if(s+"TransitionProperty"in r){n="-"+s.toLowerCase(),o=e[s]("TransitionEnd");break}}return!o&&"transitionProperty"in r&&(o="transitionend"),r=null,{transitionEnd:o,prefix:n}}var Jl=function(){var e=wB(),t=e.prefix,r=e.transitionEnd,o=function(a){return t+"-"+a};return{end:r,backfaceVisibility:o("backface-visibility"),transform:o("transform"),property:o("transition-property"),timing:o("transition-timing-function"),delay:o("transition-delay"),duration:o("transition-duration")}};i();i();i();var ec={},tc=["Webkit","ms","Moz","O"],RB=new RegExp("^("+tc.join("|")+")"),Mg=mt?document.createElement("div").style:{};function SB(e){for(var t=0;t<tc.length;t+=1){var r=tc[t]+e;if(r in Mg)return r}return null}function AB(e){var t=Ua(e);if(ec[t]===void 0){var r=t.charAt(0).toUpperCase()+t.slice(1);if(RB.test(r))throw new Error(`getVendorPrefixedName must only be called with unprefixed
          CSS property names. It was called with `+e);ec[t]=t in Mg?t:SB(r)}return ec[t]}var Qt=AB;var Ka={hasCSSAnimations:function(){return!!Qt("animationName")},hasCSSTransforms:function(){return!!Qt("transform")},hasCSS3DTransforms:function(){return!!Qt("perspective")},hasCSSTransitions:function(){return!!Qt("transition")}};var Pg=gr(),Eg=Qt("transform"),DB=Qt("backfaceVisibility"),NB=function(t){if(t===void 0&&(t={enable3DTransform:!0}),Ka.hasCSSTransforms()){var r=Pg.window?Pg.window.navigator.userAgent:"UNKNOWN",o=/Safari\//.test(r)&&!/Chrome\//.test(r);return!o&&Ka.hasCSS3DTransforms()&&t.enable3DTransform?function(n,a,s){return a===void 0&&(a=0),s===void 0&&(s=0),n[Eg]="translate3d("+a+"px,"+s+"px,0)",n[DB]="hidden",n}:function(n,a,s){return a===void 0&&(a=0),s===void 0&&(s=0),n[Eg]="translate("+a+"px,"+s+"px)",n}}return function(n,a,s){return a===void 0&&(a=0),s===void 0&&(s=0),n.left=a+"px",n.top=s+"px",n}},ghe=NB();i();i();i();i();var Ig=!1,Cr,rc,nc,Qa,Za,wg,Ja,oc,ic,ac,Rg,sc,uc,Sg,Ag;function tt(){if(!Ig){Ig=!0;var e=navigator.userAgent,t=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(e),r=/(Mac OS X)|(Windows)|(Linux)/.exec(e);if(sc=/\b(iPhone|iP[ao]d)/.exec(e),uc=/\b(iP[ao]d)/.exec(e),ac=/Android/i.exec(e),Sg=/FBAN\/\w+;/i.exec(e),Ag=/Mobile/i.exec(e),Rg=!!/Win64/.exec(e),t){t[1]?Cr=parseFloat(t[1]):Cr=t[5]?parseFloat(t[5]):NaN,Cr&&document&&document.documentMode&&(Cr=document.documentMode);var o=/(?:Trident\/(\d+.\d+))/.exec(e);wg=o?parseFloat(o[1])+4:Cr,rc=t[2]?parseFloat(t[2]):NaN,nc=t[3]?parseFloat(t[3]):NaN,Qa=t[4]?parseFloat(t[4]):NaN,Qa?(t=/(?:Chrome\/(\d+\.\d+))/.exec(e),Za=t&&t[1]?parseFloat(t[1]):NaN):Za=NaN}else Cr=NaN,rc=NaN,nc=NaN,Za=NaN,Qa=NaN;if(r){if(r[1]){var n=/(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(e);Ja=n?parseFloat(n[1].replace("_",".")):!0}else Ja=!1;oc=!!r[2],ic=!!r[3]}else Ja=!1,oc=!1,ic=!1}}var lc={ie:function(){return tt()||Cr},ieCompatibilityMode:function(){return tt()||wg>Cr},ie64:function(){return lc.ie()&&Rg},firefox:function(){return tt()||rc},opera:function(){return tt()||nc},webkit:function(){return tt()||Qa},safari:function(){return lc.webkit()},chrome:function(){return tt()||Za},windows:function(){return tt()||oc},osx:function(){return tt()||Ja},linux:function(){return tt()||ic},iphone:function(){return tt()||sc},mobile:function(){return tt()||sc||uc||ac||Ag},nativeApp:function(){return tt()||Sg},android:function(){return tt()||ac},ipad:function(){return tt()||uc}},Dg=lc;i();var Ng;mt&&(Ng=document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0);function FB(e,t){if(!mt||t&&!("addEventListener"in document))return!1;var r="on"+e,o=r in document;if(!o){var n=document.createElement("div");n.setAttribute(r,"return;"),o=typeof n[r]=="function"}return!o&&Ng&&e==="wheel"&&(o=document.implementation.hasFeature("Events.wheel","3.0")),o}var Fg=FB;var Bg=10,kg=40,Lg=800;function BB(e){var t=0,r=0,o=0,n=0;return"detail"in e&&(r=e.detail),"wheelDelta"in e&&(r=-e.wheelDelta/120),"wheelDeltaY"in e&&(r=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=r,r=0),o=t*Bg,n=r*Bg,"deltaY"in e&&(n=e.deltaY),"deltaX"in e&&(o=e.deltaX),(o||n)&&e.deltaMode&&(e.deltaMode===1?(o*=kg,n*=kg):(o*=Lg,n*=Lg)),o&&!t&&(t=o<1?-1:1),n&&!r&&(r=n<1?-1:1),{spinX:t,spinY:r,pixelX:o,pixelY:n}}BB.getEventType=function(){return Dg.firefox()?"DOMMouseScroll":Fg("wheel")?"wheel":"mousewheel"};var dc=N(se());i();var kB=function(t,r){var o=t.handledProps,n=o===void 0?[]:o,a=t.propTypes,s=a===void 0?{}:a,u=Object.keys(s);return Object.keys(r).reduce(function(f,p){return p==="childKey"||(n.length>0&&n.indexOf(p)===-1&&(f[p]=r[p]),u.length>0&&u.indexOf(p)===-1&&(f[p]=r[p])),f},{})},ve=kB;i();U();function rt(e){var t;if(e?.nodeType)return e;var r=e==null||(t=e.getHTMLElement)===null||t===void 0?void 0:t.call(e);return r||Pl(e)}i();function cc(){var e=document.createElement("div").style;return"webkitAnimation"in e?"webkitAnimationEnd":"animationend"}i();var Xr=N(ae()),Wg={onEnter:Xr.default.func,onEntering:Xr.default.func,onEntered:Xr.default.func,onExit:Xr.default.func,onExiting:Xr.default.func,onExited:Xr.default.func};var es=0,Kr=1,fc=2,ts=3,pc=4,rs=A({},Wg,{animation:nt.default.bool,children:nt.default.oneOfType([nt.default.node,nt.default.func]),className:nt.default.string,in:nt.default.bool,unmountOnExit:nt.default.bool,transitionAppear:nt.default.bool,timeout:nt.default.number,exitedClassName:nt.default.string,exitingClassName:nt.default.string,enteredClassName:nt.default.string,enteringClassName:nt.default.string}),ns=function(e){G(t,e);function t(o){var n;n=e.call(this,o)||this,n.animationEventListener=null,n.instanceElement=null,n.nextCallback=null,n.needsUpdate=null,n.childRef=void 0;var a;return o.in?a=o.transitionAppear?Kr:ts:a=o.unmountOnExit?es:Kr,n.state={status:a},n.nextCallback=null,n.childRef=Ue(),n}t.getDerivedStateFromProps=function(n,a){return n.in&&n.unmountOnExit&&a.status===es?{status:Kr}:null};var r=t.prototype;return r.componentDidMount=function(){this.props.transitionAppear&&this.props.in&&this.performEnter(this.props)},r.getSnapshotBeforeUpdate=function(){return(!this.props.in||!this.props.unmountOnExit)&&(this.needsUpdate=!0),null},r.componentDidUpdate=function(){var n=this.state.status,a=this.props.unmountOnExit;if(a&&n===Kr){this.props.in?this.performEnter(this.props):this.instanceElement&&this.setState({status:es});return}this.needsUpdate&&(this.needsUpdate=!1,this.props.in?(n===pc||n===Kr)&&this.performEnter(this.props):(n===fc||n===ts)&&this.performExit(this.props))},r.componentWillUnmount=function(){this.cancelNextCallback(),this.instanceElement=null},r.onTransitionEnd=function(n,a){var s;if(this.setNextCallback(a),(s=this.animationEventListener)===null||s===void 0||s.off(),n){var u=this.props,f=u.timeout,p=u.animation;this.animationEventListener=Tt(n,p?cc():Jl.end,this.nextCallback),f!==null&&setTimeout(this.nextCallback,f)}else setTimeout(this.nextCallback,0)},r.setNextCallback=function(n){var a=this,s=!0;return this.nextCallback=function(u){if(s){if(u){a.instanceElement===u.target&&(n(u),s=!1,a.nextCallback=null);return}n(u),s=!1,a.nextCallback=null}},this.nextCallback.cancel=function(){s=!1},this.nextCallback},r.getChildElement=function(){return this.childRef.current?rt(this.childRef.current):rt(this)},r.performEnter=function(n){var a=this,s=n||this.props,u=s.onEnter,f=s.onEntering,p=s.onEntered;this.cancelNextCallback();var d=this.getChildElement();this.instanceElement=d,u?.(d),this.safeSetState({status:fc},function(){f?.(d),a.onTransitionEnd(d,function(){a.safeSetState({status:ts},function(){p?.(d)})})})},r.performExit=function(n){var a=this,s=n||this.props,u=s.onExit,f=s.onExiting,p=s.onExited;this.cancelNextCallback();var d=this.getChildElement();this.instanceElement=d,u?.(d),this.safeSetState({status:pc},function(){f?.(d),a.onTransitionEnd(d,function(){a.safeSetState({status:Kr},function(){p?.(d)})})})},r.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},r.safeSetState=function(n,a){this.instanceElement&&this.setState(n,this.setNextCallback(a))},r.render=function(){var n=this.state.status;if(n===es)return null;var a=this.props,s=a.children,u=a.className,f=a.exitedClassName,p=a.enteringClassName,d=a.enteredClassName,h=a.exitingClassName,m=W(a,["children","className","exitedClassName","enteringClassName","enteredClassName","exitingClassName"]),g=ve(t,m),C;if(n===Kr?C=f:n===fc?C=p:n===ts?C=d:n===pc&&(C=h),typeof s=="function")return s(A({},g,{className:(0,dc.default)(u,C)}),this.childRef);var x=Le.only(s);return Ae(x,A({},g,{className:(0,dc.default)(x.props.className,u,C)}))},t}(q);ns.propTypes=rs;ns.displayName="Transition";ns.defaultProps={timeout:1e3};var vr=ns;i();i();var Tv=N(av()),bv=N(Ov()),KW=["selected","defaultValue","defaultChecked","autoCapitalize","autoComplete","autoCorrect","autoFocus","checked","disabled","form","id","list","max","maxLength","min","minLength","multiple","name","pattern","placeholder","readOnly","required","step","type","value"],QW=["onKeyDown","onKeyPress","onKeyUp","onFocus","onBlur","onChange","onInput","onClick","onContextMenu","onDrag","onDragEnd","onDragEnter","onDragExit","onDragLeave","onDragOver","onDragStart","onDrop","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onSelect","onTouchCancel","onTouchEnd","onTouchMove","onTouchStart"],ZW=[].concat(KW,QW),Mv=function(t,r){r===void 0&&(r={});var o=r,n=o.htmlProps,a=n===void 0?ZW:n,s=o.includeAria,u=s===void 0?!0:s,f={},p={};return(0,bv.default)(t,function(d,h){var m=u&&(/^aria-.*$/.test(h)||h==="role"),g=(0,Tv.default)(a,h)||m?f:p;g[h]=d}),[f,p]};i();U();var ys=N(ae()),bx=N(se());i();function Pv(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.reduce(function(o,n){return function(){return o(n.apply(void 0,arguments))}},function(o){return o})}function qe(e,t){return function(r){return r[e]=t,r}}function Yn(e){return qe("displayName",e)}function JW(e){if(typeof e=="string")return e;if(e)return e.displayName||e.name||"Component"}function Xn(e,t){return t+"("+JW(e)+")"}function Ev(e){return qe("propTypes",e)}i();var dx=N(se()),mx=N(px()),hx="rs-",ei=function(){return typeof __RSUITE_CLASSNAME_PREFIX__<"u"?__RSUITE_CLASSNAME_PREFIX__:hx};function d6(e,t){return!e||!t?"":Array.isArray(t)?(0,dx.default)(t.filter(function(r){return!!r}).map(function(r){return e+"-"+r})):e+"-"+t}var te=(0,mx.default)(d6);i();var gx=["childContextTypes","contextType","contextTypes","getDefaultProps","getDerivedStateFromError","getDerivedStateFromProps","defaultProps","propTypes"];function m6(e,t,r){r===void 0&&(r=[]);for(var o=0;o<gx.length;o++){var n=gx[o],a=Object.getOwnPropertyDescriptor(e,n),s=Object.getOwnPropertyDescriptor(t,n);if(!(r.includes(n)||!s||a))try{Object.defineProperty(e,n,s)}catch{}}}var Kn=m6;i();var Cx;(function(e){e.more="more",e.prev="page-previous",e.next="page-next",e.first="page-top",e.last="page-end"})(Cx||(Cx={}));var yx=["lg","md","sm","xs"],Ox=["success","warning","error","info"],Tx=["red","orange","yellow","green","cyan","blue","violet"],h6=["top","bottom","right","left"],Gc=["bottomStart","bottomEnd","topStart","topEnd","leftStart","rightStart","leftEnd","rightEnd"],g6=["auto","autoVerticalStart","autoVerticalEnd","autoHorizontalStart","autoHorizontalEnd"],l1e=[].concat(h6,Gc,g6),vx;(function(e){e[e.UNCHECK=0]="UNCHECK",e[e.CHECK=1]="CHECK",e[e.INDETERMINATE=2]="INDETERMINATE"})(vx||(vx={}));var xx;(function(e){e[e.DRAG_OVER=0]="DRAG_OVER",e[e.DRAG_OVER_TOP=1]="DRAG_OVER_TOP",e[e.DRAG_OVER_BOTTOM=2]="DRAG_OVER_BOTTOM"})(xx||(xx={}));var _x;(function(e){e.CALENDAR="CALENDAR",e.TOOLBAR_BUTTON_OK="TOOLBAR_BUTTON_OK",e.TOOLBAR_SHORTCUT="TOOLBAR_SHORTCUT"})(_x||(_x={}));i();var _s=N(ae()),C6=_s.default.oneOfType([_s.default.func,_s.default.object]),Zt=C6;function v6(e){return e===void 0&&(e={}),function(t){var r=e,o=r.hasSize,n=r.hasStatus,a=r.hasColor,s=r.defaultColor,u=$e(function(p,d){var h,m=p.classPrefix,g=p.size,C=p.color,x=p.status,y=p.className,O=W(p,["classPrefix","size","color","status","className"]),_=te(m),S=(0,bx.default)(y,(h={},h[_(g)]=o&&g,h[_(C)]=a&&C,h[_(s)]=!C,h[_(x)]=n&&x,h));return l(t,A({},O,{ref:d,classPrefix:m,className:S}))}),f={innerRef:Zt};return o&&(f.size=ys.default.oneOf(yx)),a&&(f.color=ys.default.oneOf(Tx)),n&&(f.status=ys.default.oneOf(Ox)),Kn(u,t),Ev(f)(u),Yn(Xn(t,"withStyleProps"))(u)}}var jc=v6;i();function x6(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter(function(o){return o!==null&&typeof o<"u"}).reduce(function(o,n){if(typeof n!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return o===void 0?n:function(){for(var s=arguments.length,u=new Array(s),f=0;f<s;f++)u[f]=arguments[f];o.apply(this,u),n.apply(this,u)}},void 0)}var oe=x6;i();U();function _6(e){var t=e.classPrefix,r=W(e,["classPrefix"]);return function(o){var n=$e(function(a,s){return l(o,A({ref:s},a))});return n.displayName=o.displayName,n.defaultProps=A({},o.defaultProps,{},r,{classPrefix:t?""+ei()+t:void 0}),Kn(n,o),Yn(Xn(o,"defaultProps"))(n)}}var X=_6;i();function ye(e,t){return Array.isArray(t)?t.indexOf(e)>=0:e===t}i();U();function y6(e,t,r){var o=0,n;return Le.forEach(e,function(a){n||(o+=1,t.call(r,a,o)&&(n=a))}),n}function Mx(e,t,r){var o=0;return Le.map(e,function(n){if(!qr(n))return n;var a=t.call(r,n,o);return o+=1,a})}function O6(e,t,r){return Mx(e,function(o,n){return Ae(o,A({key:n},t(o,n)))},r)}function T6(e){return Le.count(Array.isArray(e)?e.filter(function(t){return t}):e)}function b6(e,t,r){var o=0,n=!1;return Le.forEach(e,function(a){n||qr(a)&&t.call(r,a,o+=1)&&(n=!0)}),n}var ti={mapCloneElement:O6,count:T6,some:b6,map:Mx,find:y6};i();var x8=Object.prototype.hasOwnProperty;function iO(e,t){return e===t?e!==0||t!==0||1/e===1/t:e!==e&&t!==t}function _8(e,t){if(iO(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),o=Object.keys(t);if(r.length!==o.length)return!1;for(var n=0;n<r.length;n+=1)if(!x8.call(t,r[n])||!iO(e[r[n]],t[r[n]]))return!1;return!0}var it=_8;i();U();function at(e){var t={Provider:c,Consumer:c},r=ir?ir(e):t;return r}i();function y8(e,t){return t===void 0&&(t=!1),typeof e=="string"?(t&&(e=e.replace(/left|right/,function(r){return r==="left"?"right":"left"})),e.replace(/Left|Top/,"Start").replace(/Right|Bottom/,"End")):e}var ui=y8;i();var aO=function(t){return!t||typeof t=="function"?t:function(r){t.current=r}};function oo(e,t){var r=aO(e),o=aO(t);return function(n){typeof r=="function"&&r(n),typeof o=="function"&&o(n)}}var sO=function(e){G(t,e);function t(o){var n;return n=e.call(this,o)||this,n.triggerRef=void 0,n.mousedownListener=null,n.getPosition=function(a){var s=ht(n.triggerRef.current),u=(a.pageX||0)-s.left,f=(a.pageY||0)-s.top,p=Math.max(s.width-u,u),d=Math.max(s.height-f,f),h=Math.sqrt(Math.pow(p,2)+Math.pow(d,2));return{width:h*2,height:h*2,left:u-h,top:f-h}},n.handleMouseDown=function(a){var s=n.getPosition(a),u=n.props.onMouseDown;n.setState({rippling:!0,position:s}),u?.(s,a)},n.handleRippled=function(){n.setState({rippling:!1})},n.addPrefix=function(a){return te(n.props.classPrefix)(a)},n.state={rippling:!1,position:{}},n.triggerRef=Ue(),n}var r=t.prototype;return r.componentDidMount=function(){this.triggerRef.current&&(this.mousedownListener=Tt(this.triggerRef.current.parentNode,"mousedown",this.handleMouseDown))},r.componentWillUnmount=function(){this.mousedownListener&&this.mousedownListener.off()},r.render=function(){var n=this.props,a=n.className,s=n.classPrefix,u=W(n,["className","classPrefix"]),f=(0,of.default)(this.addPrefix("pond"),a),p=this.state,d=p.position,h=p.rippling,m=ve(t,u);return l("span",A({},m,{className:f,ref:this.triggerRef}),l(vr,{in:h,enteringClassName:this.addPrefix("rippling"),onEntered:this.handleRippled},function(g,C){var x=g.className,y=W(g,["className"]);return l("span",A({},y,{ref:C,className:(0,of.default)(s,x),style:d}))}))},t}(q);sO.propTypes={classPrefix:Ns.default.string,className:Ns.default.string,onMouseDown:Ns.default.func};var uO=X({classPrefix:"ripple"})(sO);var Or=uO;var af=function(e){G(t,e);function t(){return e.apply(this,arguments)||this}var r=t.prototype;return r.render=function(){var n,a=this.props,s=a.active,u=a.disabled,f=a.loading,p=a.block,d=a.className,h=a.classPrefix,m=a.appearance,g=a.children,C=a.ripple,x=a.componentClass,y=W(a,["active","disabled","loading","block","className","classPrefix","appearance","children","ripple","componentClass"]),O=ve(t,y),_=te(h),S=(0,lO.default)(h,_(m),d,(n={},n[_("active")]=s,n[_("disabled")]=u,n[_("loading")]=f,n[_("block")]=p,n)),M=C&&!ye(m,["link","ghost"])?l(Or,null):null,R=l("span",{className:_("spin")});if(x==="button"){if(O.href)return l(Gr,A({},O,{"aria-disabled":u,disabled:u,className:S}),f&&R,g,M);O.type=O.type||"button"}return l(x,A({},O,{disabled:u,className:S}),f&&R,g,M)},t}(q);af.propTypes={appearance:Jt.default.oneOf(["default","primary","link","subtle","ghost"]),active:Jt.default.bool,componentClass:Jt.default.elementType,children:Jt.default.node,block:Jt.default.bool,loading:Jt.default.bool,disabled:Jt.default.bool,ripple:Jt.default.bool};af.defaultProps={appearance:"default",ripple:!0};var cO=Pv(jc({hasSize:!0,hasColor:!0}),X({classPrefix:"btn",componentClass:"button"}))(af);var li=cO;i();i();var fO=N(yr());U();var en=N(ae()),pO=N(se());var sf=function(e){G(t,e);function t(){return e.apply(this,arguments)||this}var r=t.prototype;return r.render=function(){var n,a=this.props,s=a.icon,u=a.placement,f=a.children,p=a.circle,d=a.classPrefix,h=a.className,m=W(a,["icon","placement","children","circle","classPrefix","className"]),g=te(d),C=(0,pO.default)(d,h,g("placement-"+u),(n={},n[g("circle")]=p,n[g("with-text")]=!(0,fO.default)(f),n));return l(li,A({},m,{className:C}),s,f)},t}(q);sf.propTypes={className:en.default.string,icon:en.default.object,classPrefix:en.default.string,circle:en.default.bool,children:en.default.node,placement:en.default.oneOf(["left","right"])};sf.defaultProps={placement:"left"};var dO=X({classPrefix:"btn-icon"})(sf);var ci=dO;i();i();U();var on=N(ae());i();i();function kt(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}U();var Mf=N(nn()),vM=N(Bs()),Tr=N(nO());i();U();var Oe=N(ae()),hM=N(se());i();U();i();i();U();U();var iT=function(e){G(t,e);function t(){for(var o,n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return o=e.call.apply(e,[this].concat(a))||this,o.portalContainerNode=null,o.setContainer=function(u){u===void 0&&(u=o.props),o.portalContainerNode=Vo(u.container,et(kt(o)).body)},o.getMountNode=function(){return o.portalContainerNode},o}var r=t.prototype;return r.componentDidMount=function(){this.setContainer(),this.forceUpdate(this.props.onRendered)},r.shouldComponentUpdate=function(n){return n.container!==this.props.container&&this.setContainer(),n!=this.props},r.componentWillUnmount=function(){this.portalContainerNode=null},r.render=function(){var n=this.props.children;return n&&this.portalContainerNode?Me.createPortal(n,this.portalContainerNode):null},t}(q);iT.displayName="Portal";var aT=iT;var ks=aT;i();var lM=N(df());U();var Tf=N(se());i();var Hs=N(_b()),Of=N(bb()),sM=N(yf());var u9={left:"Start",right:"End",top:"Start",bottom:"End"};function so(e){var t,r,o,n;if(e.tagName==="BODY")t=window.innerWidth,r=window.innerHeight,n=Ur(et(e).documentElement)||Ur(e),o=$r(et(e).documentElement)||$r(e);else{var a=ht(e);t=a.width,r=a.height,n=Ur(e),o=$r(e)}return{width:t,height:r,scrollX:o,scrollY:n}}var uM=function(e){var t=e.placement,r=e.preventOverflow,o=e.padding;function n(f,p,d){if(!r)return 0;var h=so(d),m=h.height,g=h.scrollY,C=f-o-g,x=f+o+p-g;return C<0?-C:x>m?m-x:0}function a(f,p,d){if(!r)return 0;var h=so(d),m=h.scrollX,g=h.width,C=f-o-m,x=f+o+p-m;return C<0?-C:x>g?g-x:0}function s(f,p,d){if(!r)return d;var h=so(f),m=h.scrollY,g=h.height;return p+d>g+m?g-p+m:Math.max(m,d)}function u(f,p,d){if(!r)return d;var h=so(f),m=h.scrollX,g=h.width;return p+d>g+m?g-p+m:Math.max(m,d)}return{getPosition:function(p,d){var h=d.tagName==="BODY"?ht(p):Ql(p,d);return h},calcAutoPlacement:function(p,d,h){var m=so(d),g=m.width,C=m.height,x=m.scrollX,y=m.scrollY,O=p.left-x-h.width,_=p.top-y-h.height,S=g-p.left-p.width+x-h.width,M=C-p.top-p.height+y-h.height,R=[{key:"left",value:O},{key:"right",value:S}],b=[{key:"top",value:_},{key:"bottom",value:M}],I="autoVertical",T="autoHorizontal",E,F;return t.indexOf(I)!==-1?(E=(0,Hs.default)(b,function(w){return w.value}),t===I?E.key:""+E.key+t.replace(I,"")):t.indexOf(T)!==-1?(E=(0,Hs.default)(R,function(w){return w.value}),t===T?E.key:""+E.key+t.replace(T,"")):(E=(0,Hs.default)([].concat(b,R),function(w){return w.value}),E.key==="left"||E.key==="right"?F=(0,Of.default)(b,function(w){return w.value}):F=(0,Of.default)(R,function(w){return w.value}),""+E.key+u9[F.key])},calcOverlayPosition:function(p,d,h){var m=this.getPosition(d,h),g=ht(p),C=g.height,x=g.width,y=m.top,O=m.left,_=t;t&&t.indexOf("auto")>=0&&(_=this.calcAutoPlacement(m,h,{height:C,width:x}));var S,M,R,b;if(_==="left"||_==="right"){M=m.top+(m.height-C)/2;var I=n(M,C,h);M+=I,b=50*(1-2*I/C)+"%",R=void 0}else if(_==="top"||_==="bottom"){S=O+(m.width-x)/2;var T=a(S,x,h);S+=T,R=50*(1-2*T/x)+"%",b=void 0}if((_==="top"||_==="topStart"||_==="topEnd")&&(M=s(h,C,m.top-C)),(_==="bottom"||_==="bottomStart"||_==="bottomEnd")&&(M=s(h,C,m.top+m.height)),(_==="left"||_==="leftStart"||_==="leftEnd")&&(S=u(h,x,m.left-x)),(_==="right"||_==="rightStart"||_==="rightEnd")&&(S=u(h,x,m.left+m.width)),document.dir==="rtl"&&(_==="left"||_==="leftStart"||_==="leftEnd"||_==="right"||_==="rightStart"||_==="rightEnd")){var E=so(h),F=E.width;h.scrollWidth>F&&(S=F+S-h.scrollWidth)}if(_==="topStart"||_==="bottomStart")if(document.dir==="rtl"){var w=O+(m.width-x);S=w+a(w,x,h)}else S=O+a(O,x,h);if(_==="topEnd"||_==="bottomEnd")if(document.dir==="rtl")S=O+a(O,x,h);else{var B=O+(m.width-x);S=B+a(B,x,h)}if((_==="leftStart"||_==="rightStart")&&(M=y+n(y,C,h)),_==="leftEnd"||_==="rightEnd"){var k=y+(m.height-C);M=k+n(k,C,h)}return{positionLeft:S,positionTop:M,arrowOffsetLeft:R,arrowOffsetTop:b,positionClassName:"placement-"+(0,sM.default)(_)}}}};var bf=function(e){G(t,e);function t(o){var n;return n=e.call(this,o)||this,n.utils=null,n.lastTarget=!1,n.needsFlush=null,n.container=null,n.containerScrollListener=null,n.childRef=void 0,n.updatePosition=function(a){a===void 0&&(a=!0);var s=n.getTargetSafe(),u=n.props.shouldUpdatePosition;if(!(s===n.lastTarget&&!u&&!a)){if(n.lastTarget=s,!s){n.setState({positionLeft:0,positionTop:0,arrowOffsetLeft:null,arrowOffsetTop:null});return}var f=rt(kt(n)),p=Vo(n.props.container,et(kt(n)).body),d=n.utils.calcOverlayPosition(f,s,p);n.container=p,n.setState(d)}},n.state={positionLeft:0,positionTop:0,arrowOffsetLeft:null,arrowOffsetTop:null},n.utils=uM({placement:o.placement,preventOverflow:o.preventOverflow,padding:o.containerPadding}),n.childRef=Ue(),n}var r=t.prototype;return r.getHTMLElement=function(){return rt(this.childRef.current)},r.componentDidMount=function(){this.updatePosition(!1),this.container&&this.props.preventOverflow&&(this.containerScrollListener=Tt(this.container.tagName==="BODY"?window:this.container,"scroll",this.updatePosition))},r.shouldComponentUpdate=function(n,a){return it(n,this.props)?!it(a,this.state):(this.needsFlush=!0,!0)},r.componentDidUpdate=function(n){this.needsFlush&&(this.needsFlush=!1,this.updatePosition(n.placement!==this.props.placement))},r.componentWillUnmount=function(){var n;this.lastTarget=null,(n=this.containerScrollListener)===null||n===void 0||n.off()},r.getTargetSafe=function(){var n=this.props.target;if(!n)return null;var a=n(this.props);return a||null},r.render=function(){var n=this.props,a=n.children,s=n.className,u=W(n,["children","className"]),f=this.state,p=f.positionLeft,d=f.positionTop,h=f.positionClassName,m=W(f,["positionLeft","positionTop","positionClassName"]);if(typeof a=="function")return a({className:(0,Tf.default)(s,h),left:p,top:d},this.childRef);var g=Le.only(a);return Ae(g,A({},(0,lM.default)(u,["target","container","containerPadding","preventOverflow"]),{},m,{positionLeft:p,positionTop:d,className:(0,Tf.default)(s,h,g.props.className),htmlElementRef:this.childRef,style:A({},g.props.style,{left:p,top:d})}))},t}(q);bf.displayName="Position";bf.defaultProps={containerPadding:0,placement:"right",shouldUpdatePosition:!1};var cM=bf;i();U();function l9(e){return e?.button===0}function c9(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e?.shiftKey)}var f9=function(e){G(t,e);function t(o){var n;return n=e.call(this,o)||this,n.onDocumentClickListener=null,n.onDocumentKeyupListener=null,n.childRef=void 0,n.handleDocumentClick=function(a){var s,u;if(!Ft(rt(n.childRef.current||kt(n)),a.target)&&!(c9(a)||!l9(a))){var f=n.props.target;f&&Ft(f(),a.target)||(s=(u=n.props).onRootClose)===null||s===void 0||s.call(u,a)}},n.handleDocumentKeyUp=function(a){if(a.keyCode===27){var s,u;(s=(u=n.props).onRootClose)===null||s===void 0||s.call(u,a)}},n.childRef=Ue(),n}var r=t.prototype;return r.componentDidMount=function(){var n=window.document;this.onDocumentClickListener=Tt(n,"click",this.handleDocumentClick,!0),this.onDocumentKeyupListener=Tt(n,"keyup",this.handleDocumentKeyUp)},r.componentWillUnmount=function(){var n,a;(n=this.onDocumentClickListener)===null||n===void 0||n.off(),(a=this.onDocumentKeyupListener)===null||a===void 0||a.off()},r.render=function(){var n=this.props.children;return typeof n=="function"?n({},this.childRef):n},t}(q),Vs=f9;var p9=function(e){G(t,e);function t(o){var n;return n=e.call(this,o)||this,n.handleHidden=function(a){var s,u;n.setState({exited:!0}),(s=(u=n.props).onExited)===null||s===void 0||s.call(u,a)},n.state={exited:!o.show},n}t.getDerivedStateFromProps=function(n){return n.show?{exited:!1}:n.transition?null:{exited:!0}};var r=t.prototype;return r.render=function(){var n=this.props,a=n.container,s=n.containerPadding,u=n.target,f=n.placement,p=n.shouldUpdatePosition,d=n.rootClose,h=n.children,m=n.transition,g=n.show,C=n.onHide,x=n.positionRef,y=n.preventOverflow,O=W(n,["container","containerPadding","target","placement","shouldUpdatePosition","rootClose","children","transition","show","onHide","positionRef","preventOverflow"]),_=g||m&&!this.state.exited;if(!_)return null;var S=h,M={container:a,containerPadding:s,target:u,placement:f,shouldUpdatePosition:p,preventOverflow:y};if(S=l(cM,A({},M,{ref:x}),S),m){var R=O.onExit,b=O.onExiting,I=O.onEnter,T=O.onEntering,E=O.onEntered;S=l(m,{in:g,transitionAppear:!0,onExit:R,onExiting:b,onExited:this.handleHidden,onEnter:I,onEntering:T,onEntered:E},S)}return d&&(S=l(Vs,{target:u,onRootClose:C},S)),l(ks,{container:a},S)},t}(q),fM=p9;i();U();var pM=N(se());var dM=$e(function(e,t){var r=e.timeout,o=r===void 0?300:r,n=e.className,a=W(e,["timeout","className"]);return l(vr,A({},a,{ref:t,timeout:o,className:(0,pM.default)(n,"fade"),enteredClassName:"in",enteringClassName:"in"}))});dM.displayName="Fade";var mM=dM;var gM=function(t){var r=t.animation,o=r===void 0?!0:r,n=t.children,a=t.transition,s=a===void 0?mM:a,u=W(t,["animation","children","transition"]),f=n;return o||(s=void 0),s||(f=Le.only(f),f=Ae(f,{className:(0,hM.default)("in",f.props.className)})),l(fM,A({},u,{transition:s}),f)};gM.propTypes={animation:Oe.default.bool,container:Oe.default.any,children:Oe.default.oneOfType([Oe.default.node,Oe.default.func]),onRendered:Oe.default.func,className:Oe.default.string,containerPadding:Oe.default.number,placement:Oe.default.string,shouldUpdatePosition:Oe.default.bool,preventOverflow:Oe.default.bool,show:Oe.default.bool,rootClose:Oe.default.bool,transition:Oe.default.elementType,positionRef:Zt,target:Oe.default.func,onHide:Oe.default.func,onEnter:Oe.default.func,onEntering:Oe.default.func,onEntered:Oe.default.func,onExit:Oe.default.func,onExiting:Oe.default.func,onExited:Oe.default.func};var zs=gM;function CM(e,t){var r=t.currentTarget,o=t.relatedTarget||(0,Mf.default)(t,["nativeEvent","toElement"]);(!o||o!==r)&&!Ft(r,o)&&e(t)}var xM=function(e){G(t,e);function t(o){var n;return n=e.call(this,o)||this,n.onMouseOverListener=void 0,n.onMouseOutListener=void 0,n.delayShowTimer=void 0,n.delayHideTimer=void 0,n.mouseEnteredToSpeaker=!1,n.mouseEnteredToTrigger=!1,n.getOverlayTarget=function(){return rt(kt(n))},n.handleSpeakerMouseEnter=function(){n.mouseEnteredToSpeaker=!0},n.handleSpeakerMouseLeave=function(){var a=n.props.trigger;n.mouseEnteredToSpeaker=!1,!ye("click",a)&&!ye("active",a)&&!ye("contextMenu",a)&&n.hideWithCheck()},n.open=function(a){n.show(a)},n.close=function(a){n.hide(a)},n.show=function(a){if(a)return n.delayShowTimer=setTimeout(function(){n.delayShowTimer=null,n.setState({isOverlayShown:!0})},a);n.setState({isOverlayShown:!0})},n.hide=function(a){if(a)return n.delayHideTimer=setTimeout(function(){n.delayHideTimer=null,n.setState({isOverlayShown:!1})},a);n.setState({isOverlayShown:!1})},n.hideWithCheck=function(a){!n.mouseEnteredToSpeaker&&!n.mouseEnteredToTrigger&&n.hide(a)},n.toggleHideAndShow=function(){var a=n.props,s=a.delayShow,u=a.delay,f=a.delayHide;n.state.isOverlayShown?n.hideWithCheck((0,Tr.default)(f)?u:f):n.show((0,Tr.default)(s)?u:s)},n.preventDefault=function(a){a.preventDefault()},n.handleDelayedShow=function(){var a=n.props,s=a.delayShow,u=a.enterable,f=(0,Tr.default)(s)?n.props.delay:s;if(!u)return n.show(f);if(n.mouseEnteredToTrigger=!0,!(0,Tr.default)(n.delayHideTimer))return clearTimeout(n.delayHideTimer),n.delayHideTimer=null,n.show(f);n.state.isOverlayShown||n.show(f)},n.handleDelayedHide=function(){var a=n.props,s=a.delayHide,u=a.enterable,f=(0,Tr.default)(s)?n.props.delay:s;if(u||n.hide(f),n.mouseEnteredToTrigger=!1,!(0,Tr.default)(n.delayShowTimer)){clearTimeout(n.delayShowTimer),n.delayShowTimer=null;return}if(!(!n.state.isOverlayShown||!(0,Tr.default)(n.delayHideTimer))){if(!f)return n.hideWithCheck();n.delayHideTimer=setTimeout(function(){n.state.isOnSpeaker||(clearTimeout(n.delayHideTimer),n.delayHideTimer=null,n.hideWithCheck())},f)}},o.trigger!=="none"&&(n.onMouseOverListener=function(a){return CM(n.handleDelayedShow,a)},n.onMouseOutListener=function(a){return CM(n.handleDelayedHide,a)}),n.state={isOverlayShown:o.defaultOpen},n}var r=t.prototype;return r.componentWillUnmount=function(){clearTimeout(this.delayShowTimer),clearTimeout(this.delayHideTimer)},r.renderOverlay=function(){var n=this,a=this.props,s=a.open,u=a.speaker,f=a.trigger,p=a.onHide,d=this.state.isOverlayShown,h=A({},(0,vM.default)(this.props,Object.keys(zs.propTypes)),{show:typeof s>"u"?d:s,target:this.getOverlayTarget});ye("click",f)?h.onHide=oe(this.hide,p):ye("contextMenu",f)?h.onHide=oe(this.hide,p):ye("active",f)&&(h.onHide=oe(this.hide,p));var m={placement:h.placement};return f!=="none"&&(m.onMouseEnter=this.handleSpeakerMouseEnter,m.onMouseLeave=this.handleSpeakerMouseLeave),typeof u=="function"?l(zs,h,function(g,C){return u(A({},g,{onClose:n.hide}),C)}):l(zs,h,Ae(u,m))},r.render=function(){var n=this.props,a=n.children,s=n.speaker,u=n.onClick,f=n.onContextMenu,p=n.trigger,d=n.onMouseOver,h=n.onMouseOut,m=n.onFocus,g=n.onBlur,C=n.disabled,x=Le.only(a),y=x.props,O={key:"triggerComponent",onClick:oe(y.onClick,u),"aria-describedby":(0,Mf.default)(s,["props","id"])};return C||(ye("click",p)&&(O.onClick=oe(this.toggleHideAndShow,O.onClick)),ye("contextMenu",p)&&(O.onContextMenu=oe(this.preventDefault,this.toggleHideAndShow,y.onContextMenu,f)),ye("active",p)&&(O.onClick=oe(this.handleDelayedShow,O.onClick)),ye("hover",p)&&(O.onMouseOver=oe(this.onMouseOverListener,y.onMouseOver,d),O.onMouseOut=oe(this.onMouseOutListener,y.onMouseOut,h)),ye("focus",p)&&(O.onFocus=oe(this.handleDelayedShow,y.onFocus,m),O.onBlur=oe(this.handleDelayedHide,y.onBlur,g))),[Ae(x,O),l(ks,{key:"portal"},this.renderOverlay())]},t}(q);xM.defaultProps={trigger:["hover","focus"],delayHide:200,placement:"bottomStart",rootClose:!0};var _M=xM;i();var yM=at(null);var OM=["placement","shouldUpdatePosition","arrowOffsetLeft","arrowOffsetTop","positionLeft","positionTop"],Pf=$e(function(e,t){var r=e.triggerRef,o=e.onOpen,n=e.onClose,a=e.onEntered,s=e.onExited,u=e.placement,f=u===void 0?"right":u,p=e.preventOverflow,d=W(e,["triggerRef","onOpen","onClose","onEntered","onExited","placement","preventOverflow"]);return l(yM.Consumer,null,function(h){return l(_M,A({preventOverflow:p,placement:ui(f,h?.rtl),onEntered:oe(o,a),onExited:oe(n,s),ref:oo(t,r)},d))})});Pf.displayName="Whisper";Pf.propTypes={triggerRef:Zt,onOpen:on.default.func,onClose:on.default.func,onEntered:on.default.func,onExited:on.default.func,placement:on.default.string,preventOverflow:on.default.bool};var TM=Pf;i();var mP=N(nn());U();var hP=N(fP());i();var Df={sunday:"Su",monday:"Mo",tuesday:"Tu",wednesday:"We",thursday:"Th",friday:"Fr",saturday:"Sa",ok:"OK",today:"Today",yesterday:"Yesterday",hours:"Hours",minutes:"Minutes",seconds:"Seconds",formattedMonthPattern:"MMM YYYY",formattedDayPattern:"DD MMM YYYY"},pP={Pagination:{more:"More",prev:"Previous",next:"Next",first:"First",last:"Last"},Table:{emptyMessage:"No data found",loading:"Loading..."},TablePagination:{lengthMenuInfo:"{0} / page",totalInfo:"Total: {0}"},Calendar:Df,DatePicker:A({},Df),DateRangePicker:A({},Df,{last7Days:"Last 7 Days"}),Picker:{noResultsText:"No results found",placeholder:"Select",searchPlaceholder:"Search",checkAll:"All"},InputPicker:{newItem:"New item",createOption:'Create option "{0}"'},Uploader:{inited:"Initial",progress:"Uploading",error:"Error",complete:"Finished",emptyFile:"Empty",upload:"Upload"}};i();U();var dP=at(null);var MY=function(t){return t.reduce(function(r,o){return r=A({},r,{},o),r},{})};function PY(e){return e===void 0&&(e=[]),function(t){var r=$e(function(o,n){return l(dP.Consumer,null,function(a){var s=MY(e.map(function(u){return(0,mP.default)(a||pP,""+u)}));return a&&typeof a.rtl!==void 0?s.rtl=a.rtl:typeof window<"u"&&(document.body.getAttribute("dir")||document.dir)==="rtl"&&(s.rtl=!0),s.formatDate=a?.formatDate||hP.default,l(t,A({ref:n,locale:s},o))})});return r.displayName=t.displayName,Kn(r,t,["defaultProps"]),Yn(Xn(t,"withLocale"))(r)}}var gP=PY;var uo=gP([])(TM);i();i();var CP=N(df());U();var lo=N(ae()),vP=N(se());var xP=function(e){G(t,e);function t(){return e.apply(this,arguments)||this}var r=t.prototype;return r.render=function(){var n=this.props,a=n.className,s=n.classPrefix,u=n.children,f=n.style,p=n.visible,d=n.htmlElementRef,h=W(n,["className","classPrefix","children","style","visible","htmlElementRef"]),m=te(s),g=(0,vP.default)(s,a),C=A({opacity:p?1:void 0},f);return l("div",A({},(0,CP.default)(h,OM),{role:"tooltip",className:g,style:C,ref:d}),l("div",{className:m("arrow")}),l("div",{className:m("inner")},u))},t}(q);xP.propTypes={visible:lo.default.bool,classPrefix:lo.default.string,className:lo.default.string,style:lo.default.object,children:lo.default.node};var _P=X({classPrefix:"tooltip"})(xP);var co=_P;i();i();U();var He=N(ae()),yP=N(se());var OP=function(e){G(t,e);function t(){return e.apply(this,arguments)||this}var r=t.prototype;return r.render=function(){var n,a=this.props,s=a.className,u=a.classPrefix,f=a.icon,p=a.size,d=a.fixedWidth,h=a.spin,m=a.pulse,g=a.rotate,C=a.flip,x=a.stack,y=a.inverse,O=a.style,_=a.svgStyle,S=a.componentClass,M=W(a,["className","classPrefix","icon","size","fixedWidth","spin","pulse","rotate","flip","stack","inverse","style","svgStyle","componentClass"]),R=te(u),b=typeof f=="object"&&f.id&&f.viewBox,I=(0,yP.default)(s,u,(n={},n[R(typeof f=="string"?f:"")]=!b,n[R("fw")]=d,n[R("spin")]=h,n[R("pulse")]=m,n[R("size-"+(p||""))]=p,n[R("flip-"+(C||""))]=C,n[R("stack-"+(x||""))]=x,n[R("inverse")]=y,n)),T=g?A({transform:"rotate("+g+"deg)"},O):O;if(b){var E=f;return l(S,A({},M,{className:I,style:T}),l("svg",{style:_,viewBox:E.viewBox},l("use",{xlinkHref:"#"+E.id})))}return l(S,A({},M,{className:I,style:T}))},t}(q);OP.propTypes={icon:He.default.oneOfType([He.default.string,He.default.object]),className:He.default.string,classPrefix:He.default.string,componentClass:He.default.elementType,size:He.default.oneOf(["lg","2x","3x","4x","5x"]),flip:He.default.oneOf(["horizontal","vertical"]),stack:He.default.oneOf(["1x","2x"]),rotate:He.default.number,fixedWidth:He.default.bool,svgStyle:He.default.object,spin:He.default.bool,pulse:He.default.bool,inverse:He.default.bool};var TP=X({componentClass:"i",classPrefix:"icon"})(OP);var js=TP;i();i();var cE=N(yf()),Yf=N(yr());U();var ce=N(ae()),fE=N(se());i();U();var Mr=N(ae()),Nf=N(se());var bP=function(e){G(t,e);function t(){return e.apply(this,arguments)||this}var r=t.prototype;return r.render=function(){var n=this.props,a=n.className,s=n.classPrefix,u=n.renderTitle,f=n.children,p=n.icon,d=n.noCaret,h=n.componentClass,m=W(n,["className","classPrefix","renderTitle","children","icon","noCaret","componentClass"]),g=te(s);if(u)return l("span",A({},m,{className:(0,Nf.default)(s,g("custom-title"),a)}),u(f),l(Or,null));var C={};return h===li&&(C={componentClass:"a",appearance:"subtle"}),l(h,A({},C,m,{className:(0,Nf.default)(s,a)}),p,f,d?null:l("span",{className:g("caret")}))},t}(q);bP.propTypes={className:Mr.default.string,children:Mr.default.node,icon:Mr.default.node,classPrefix:Mr.default.string,noCaret:Mr.default.bool,componentClass:Mr.default.elementType,renderTitle:Mr.default.func};var MP=X({componentClass:li,classPrefix:"dropdown-toggle"})(bP);i();U();var De=N(ae()),hi=N(se());i();var $P=N(Bs()),Lf=N(UP()),Us=N(nn());U();var fo=N(ae()),YP=N(se());var pX=function(t){return(0,Us.default)(t,"offsetHeight")},dX={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function mX(e,t){var r=(0,Us.default)(t,"offset"+(0,Lf.default)(e)),o=dX[e];return r+parseInt(dt(t,o[0]),10)+parseInt(dt(t,o[1]),10)}function hX(e,t){var r=(0,Us.default)(e,"scroll"+(0,Lf.default)(t));return r+"px"}var $s=function(e){G(t,e);function t(o){var n;return n=e.call(this,o)||this,n.transitionRef=void 0,n.handleEnter=function(a){var s=n.dimension();jr(a,s,0)},n.handleEntering=function(a){var s=n.dimension();jr(a,s,hX(a,s))},n.handleEntered=function(a){var s=n.dimension();jr(a,s,"auto")},n.handleExit=function(a){var s=n.dimension(),u=n.props.getDimensionValue,f=u?u(s,a):0;jr(a,s,f+"px")},n.handleExiting=function(a){var s=n.dimension();pX(a),jr(a,s,0)},n.transitionRef=Ue(),n}var r=t.prototype;return r.getTransitionInstance=function(){return this.transitionRef.current},r.dimension=function(){var n=this.props.dimension;return typeof n=="function"?n():n},r.render=function(){var n=this.props,a=n.role,s=n.className,u=n.onExited,f=n.onEnter,p=n.onEntering,d=n.onEntered,h=n.onExit,m=n.onExiting,g=oe(this.handleEnter,f),C=oe(this.handleEntering,p),x=oe(this.handleEntered,d),y=oe(this.handleExit,h),O=oe(this.handleExiting,m);return l(vr,A({},(0,$P.default)(this.props,Object.keys(rs)),{ref:this.transitionRef,"aria-expanded":a?this.props.in:null,className:(0,YP.default)(s,{width:this.dimension()==="width"}),onEnter:g,onEntering:C,onEntered:x,onExit:y,onExiting:O,onExited:u}))},t}(q);$s.propTypes=A({},rs,{dimension:fo.default.oneOfType([fo.default.string,fo.default.func]),getDimensionValue:fo.default.func,role:fo.default.string});$s.displayName="Collapse";$s.defaultProps={timeout:300,dimension:"height",exitedClassName:"collapse",exitingClassName:"collapsing",enteredClassName:"collapse in",enteringClassName:"collapsing",getDimensionValue:mX};var pi=$s;i();var jf=N(nn()),Uf=N(yr());U();var Te=N(ae()),Ys=N(se());i();var sE=N(Wf()),uE=N(tO()),lE=N(yr());U();var Mt=N(ae()),Vf=N(se());i();U();var qf=N(ae()),ZP=N(se());var JP=function(e){G(t,e);function t(){return e.apply(this,arguments)||this}var r=t.prototype;return r.render=function(){var n=this.props,a=n.classPrefix,s=n.className,u=W(n,["classPrefix","className"]),f=(0,ZP.default)(a,s);return l("div",A({},u,{className:f}))},t}(q);JP.propTypes={classPrefix:qf.default.string,className:qf.default.string};var eE=X({classPrefix:"sidenav-body"})(JP);i();U();var Hf=N(ae()),tE=N(se());var rE=function(e){G(t,e);function t(){return e.apply(this,arguments)||this}var r=t.prototype;return r.render=function(){var n=this.props,a=n.className,s=n.classPrefix,u=W(n,["className","classPrefix"]),f=(0,tE.default)(s,a);return l("div",A({},u,{className:f}))},t}(q);rE.propTypes={classPrefix:Hf.default.string,className:Hf.default.string};var nE=X({classPrefix:"sidenav-header"})(rE);i();U();var di=N(ae()),oE=N(se());var iE=function(e){G(t,e);function t(){for(var o,n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return o=e.call.apply(e,[this].concat(a))||this,o.handleToggle=function(u){var f=o.props,p=f.onToggle,d=f.expanded;p?.(!d,u)},o}var r=t.prototype;return r.render=function(){var n=this.props,a=n.expanded,s=n.className,u=n.classPrefix,f=W(n,["expanded","className","classPrefix"]),p=(0,oE.default)(u,s,{collapsed:!a});return l("div",A({},f,{className:p}),l(ci,{appearance:"default",icon:l(js,{icon:a?"angle-right":"angle-left"}),onClick:this.handleToggle}))},t}(q);iE.propTypes={classPrefix:di.default.string,className:di.default.string,expanded:di.default.bool,onToggle:di.default.func};var aE=X({classPrefix:"sidenav-toggle"})(iE);var an=at(null),zf=function(e){G(t,e);function t(o){var n;return n=e.call(this,o)||this,n.getOpenKeys=function(){var a=n.props.openKeys;return(0,lE.default)(a)?n.state.openKeys:a},n.handleSelect=function(a,s){var u,f;(u=(f=n.props).onSelect)===null||u===void 0||u.call(f,a,s)},n.handleOpenChange=function(a,s){var u,f,p=function(m){return it(m,a)},d=(0,uE.default)(n.getOpenKeys())||[];d.some(p)?(0,sE.default)(d,p):d.push(a),n.setState({openKeys:d}),(u=(f=n.props).onOpenChange)===null||u===void 0||u.call(f,d,s)},n.state={openKeys:o.defaultOpenKeys||[]},n}var r=t.prototype;return r.render=function(){var n=this.props,a=n.className,s=n.classPrefix,u=n.appearance,f=n.expanded,p=n.activeKey,d=n.componentClass,h=W(n,["className","classPrefix","appearance","expanded","activeKey","componentClass"]),m=te(s),g=(0,Vf.default)(s,m(u),a),C=ve(t,h);return l(an.Provider,{value:{expanded:f,activeKey:p,sidenav:!0,openKeys:this.getOpenKeys(),onOpenChange:this.handleOpenChange,onSelect:this.handleSelect}},l(vr,{in:f,timeout:300,exitedClassName:m("collapse-out"),exitingClassName:m(["collapse-out","collapsing"]),enteredClassName:m("collapse-in"),enteringClassName:m(["collapse-in","collapsing"])},function(x,y){var O=x.className,_=W(x,["className"]);return l(d,A({},_,C,{ref:y,className:(0,Vf.default)(g,O),role:"navigation"}))}))},t}(q);zf.propTypes={classPrefix:Mt.default.string,className:Mt.default.string,expanded:Mt.default.bool,appearance:Mt.default.oneOf(["default","inverse","subtle"]),defaultOpenKeys:Mt.default.array,openKeys:Mt.default.array,onOpenChange:Mt.default.func,activeKey:Mt.default.any,onSelect:Mt.default.func,componentClass:Mt.default.elementType};zf.defaultProps={appearance:"default",expanded:!0};var Gf=X({classPrefix:"sidenav",componentClass:"div"})(zf);qe("Header",nE)(Gf);qe("Body",eE)(Gf);qe("Toggle",aE)(Gf);var mi=function(e){G(t,e);function t(o){var n;return n=e.call(this,o)||this,n.toggle=function(a,s){var u=(0,Uf.default)(s)?!n.getOpen():s;n.setState({open:u})},n.handleClick=function(a){var s=n.props,u=s.onSelect,f=s.eventKey,p=s.disabled,d=s.onClick;if(p){a.preventDefault();return}u?.(f,a),d?.(a)},n.handleMouseOver=function(a){n.toggle(a,!0)},n.handleMouseOut=function(a){n.toggle(a,!1)},n.state={open:o.open},n}var r=t.prototype;return r.getOpen=function(){var n=this.props.open;return(0,Uf.default)(n)?this.state.open:n},r.render=function(){var n,a=this.props,s=a.children,u=a.divider,f=a.panel,p=a.active,d=a.disabled,h=a.className,m=a.submenu,g=a.style,C=a.classPrefix,x=a.tabIndex,y=a.pullLeft,O=a.icon,_=a.trigger,S=a.expanded,M=a.componentClass,R=a.renderItem,b=W(a,["children","divider","panel","active","disabled","className","submenu","style","classPrefix","tabIndex","pullLeft","icon","trigger","expanded","componentClass","renderItem"]),I=ve(t,b),T=te(C),E=(0,Ys.default)(C,h,(n={},n[T(S?"expand":"collapse")]=m&&(0,jf.default)(this.context,"sidenav"),n[T("submenu")]=m,n[T("open")]=this.getOpen(),n[T("active")]=p,n[T("disabled")]=d,n[T("pull-"+(y?"left":"right"))]=y,n[T("with-icon")]=O,n)),F={},w={onClick:this.handleClick};if(ye("hover",_)&&m&&!(0,jf.default)(this.context,"expanded")&&(F.onMouseOver=this.handleMouseOver,F.onMouseOut=this.handleMouseOut),ye("click",_)&&m&&(w.onClick=oe(this.handleClick,this.toggle)),u)return l("li",{role:"separator",style:g,className:(0,Ys.default)(T("divider"),h)});if(f)return l("li",{style:g,className:(0,Ys.default)(T("panel"),h)},s);var B=l(M,A({},I,w,{className:T("content"),tabIndex:x}),O&&Ae(O,{className:T("menu-icon")}),s);return l("li",A({},F,{style:g,className:E}),R?R(B):B)},t}(q);mi.displayName="DropdownMenuItem";mi.contextType=an;mi.propTypes={divider:Te.default.bool,panel:Te.default.bool,trigger:Te.default.oneOfType([Te.default.array,Te.default.oneOf(["click","hover"])]),open:Te.default.bool,expanded:Te.default.bool,active:Te.default.bool,disabled:Te.default.bool,pullLeft:Te.default.bool,submenu:Te.default.bool,onSelect:Te.default.func,onClick:Te.default.func,icon:Te.default.node,eventKey:Te.default.any,className:Te.default.string,style:Te.default.object,children:Te.default.node,classPrefix:Te.default.string,tabIndex:Te.default.number,componentClass:Te.default.elementType,renderItem:Te.default.func};mi.defaultProps={tabIndex:-1,trigger:"hover"};var Xs=X({classPrefix:"dropdown-item",componentClass:Gr})(mi);var $f=function(e){G(t,e);function t(){for(var o,n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return o=e.call.apply(e,[this].concat(a))||this,o.handleToggleChange=function(u,f){var p,d;(p=(d=o.props).onToggle)===null||p===void 0||p.call(d,u,f)},o.addPrefix=function(u){return te(o.props.classPrefix)(u)},o}var r=t.prototype;return r.getMenuItemsAndStatus=function(n){var a=this,s,u=this.props,f=u.activeKey,p=u.onSelect,d=u.classPrefix,h=u.openKeys,m=h===void 0?[]:h,g=Le.map(n,function(C,x){var y;if(!C)return null;var O=C==null||(y=C.type)===null||y===void 0?void 0:y.displayName,_;if((~O?.indexOf("(DropdownMenuItem)")||~O?.indexOf("(DropdownMenu)"))&&(_=a.isActive(C.props,f),_&&(s=!0)),~O?.indexOf("(DropdownMenuItem)")){var S=C.props.onSelect;return Ae(C,{key:x,active:_,onSelect:oe(p,S)})}else if(~O?.indexOf("(DropdownMenu)")){var M,R=a.getMenuItemsAndStatus(C.props.children),b=C.props,I=b.icon,T=b.open,E=b.trigger,F=b.pullLeft,w=b.eventKey,B=b.title,k=b.className,$=m.some(function(Z){return it(Z,w)}),ue=(0,hi.default)(k,a.addPrefix("pull-"+(F?"left":"right")),(M={},M[a.addPrefix("item-focus")]=a.isActive(C.props,f),M));return l(Xs,{icon:I,open:T,trigger:E,expanded:$,className:ue,pullLeft:F,componentClass:"div",submenu:!0},l("div",{className:a.addPrefix("toggle"),onClick:a.handleToggleChange.bind(a,w),role:"menu",tabIndex:-1},l("span",null,B),l(js,{className:a.addPrefix("toggle-icon"),icon:F?"angle-left":"angle-right"}),l(Or,null)),a.renderCollapse(function(Z,z){var H=Z||{},L=H.className,K=W(H,["className"]);return l("ul",A({},K,{ref:z,role:"menu",className:(0,hi.default)(d,L)}),R.items)},$))}return C});return{items:g,active:s}},r.isActive=function(n,a){var s=this;return n.active||typeof a<"u"&&it(n.eventKey,a)||ti.some(n.children,function(u){return s.isActive(u.props,a)})?!0:n.active},r.renderCollapse=function(n,a){return this.props.collapsible?l(pi,{in:a,exitedClassName:this.addPrefix("collapse-out"),exitingClassName:this.addPrefix("collapsing"),enteredClassName:this.addPrefix("collapse-in"),enteringClassName:this.addPrefix("collapsing")},n):n()},r.render=function(){var n,a=this.props,s=a.children,u=a.className,f=a.classPrefix,p=a.expanded,d=a.htmlElementRef,h=W(a,["children","className","classPrefix","expanded","htmlElementRef"]),m=this.getMenuItemsAndStatus(s),g=m.items,C=m.active,x=ve(t,h),y=(0,hi.default)(f,u,(n={},n[this.addPrefix("active")]=C,n));return this.renderCollapse(function(O,_){var S=O||{},M=S.className,R=W(S,["className"]);return l("ul",A({},x,R,{className:(0,hi.default)(y,M),role:"menu",ref:oo(d,_)}),g)},p)},t}(q);$f.displayName="DropdownMenu";$f.propTypes={activeKey:De.default.any,className:De.default.string,children:De.default.node,icon:De.default.node,classPrefix:De.default.string,pullLeft:De.default.bool,onSelect:De.default.func,title:De.default.node,open:De.default.bool,trigger:De.default.oneOfType([De.default.array,De.default.oneOf(["click","hover"])]),eventKey:De.default.any,openKeys:De.default.array,expanded:De.default.bool,collapsible:De.default.bool,onToggle:De.default.func};var Ks=X({classPrefix:"dropdown-menu"})($f);var gi=function(e){G(t,e);function t(o){var n;return n=e.call(this,o)||this,n.rootRef=void 0,n.toggle=function(a){var s=n.props,u=s.onOpen,f=s.onClose,p=s.onToggle,d=(0,Yf.default)(a)?!n.getOpen():a,h=d?u:f;n.setState({open:d}),h?.(),p?.(d)},n.handleRootClose=function(a){var s,u,f,p;Ft(rt(n.rootRef.current),a.target)&&(a.preventDefault(),a.stopPropagation()),n.setState({open:!1}),(s=(u=n.props).onToggle)===null||s===void 0||s.call(u,!1),(f=(p=n.props).onClose)===null||f===void 0||f.call(p)},n.handleClick=function(a){a.preventDefault(),!n.props.disabled&&n.toggle()},n.handleOpenChange=function(a){var s,u,f=n.props.eventKey;(s=n.context)===null||s===void 0||(u=s.onOpenChange)===null||u===void 0||u.call(s,f,a)},n.handleToggleChange=function(a,s){var u,f;(u=n.context)===null||u===void 0||(f=u.onOpenChange)===null||f===void 0||f.call(u,a,s)},n.handleMouseEnter=function(){n.props.disabled||n.toggle(!0)},n.handleMouseLeave=function(){n.props.disabled||n.toggle(!1)},n.handleSelect=function(a,s){var u,f;(u=(f=n.props).onSelect)===null||u===void 0||u.call(f,a,s),n.toggle(!1)},n.state={open:o.open},n.rootRef=Ue(),n}var r=t.prototype;return r.getOpen=function(){var n=this.props.open;return(0,Yf.default)(n)?this.state.open:n},r.render=function(){var n,a=this.props,s=a.title,u=a.children,f=a.className,p=a.menuStyle,d=a.disabled,h=a.renderTitle,m=a.classPrefix,g=a.placement,C=a.activeKey,x=a.tabIndex,y=a.toggleClassName,O=a.trigger,_=a.icon,S=a.onClick,M=a.onMouseEnter,R=a.onMouseLeave,b=a.onContextMenu,I=a.eventKey,T=a.componentClass,E=a.toggleComponentClass,F=a.noCaret,w=a.style,B=a.showHeader,k=W(a,["title","children","className","menuStyle","disabled","renderTitle","classPrefix","placement","activeKey","tabIndex","toggleClassName","trigger","icon","onClick","onMouseEnter","onMouseLeave","onContextMenu","eventKey","componentClass","toggleComponentClass","noCaret","style","showHeader"]),$=this.context||{},ue=$.openKeys,Z=ue===void 0?[]:ue,z=$.sidenav,H=$.expanded,L=Z.some(function(Ke){return it(Ke,I)}),K=te(m),Pe=this.getOpen(),le=z&&H,D=ve(t,k),V=A({},D,{onClick:oe(this.handleOpenChange,S),onContextMenu:b}),J={onMouseEnter:M,onMouseLeave:R};le||(ye("click",O)&&(V.onClick=oe(this.handleClick,V.onClick)),ye("contextMenu",O)&&(V.onContextMenu=oe(this.handleClick,b)),ye("hover",O)&&(J.onMouseEnter=oe(this.handleMouseEnter,M),J.onMouseLeave=oe(this.handleMouseLeave,R)));var ie={collapsible:le,activeKey:C,openKeys:Z,expanded:L,style:p,onSelect:this.handleSelect,onToggle:this.handleToggleChange},de=l(Ks,ie,u);Pe&&(de=l(Vs,{onRootClose:this.handleRootClose},function(Ke,pt){return l(Ks,A({},Ke,ie,{htmlElementRef:pt}),B&&l("li",{className:K("header")},s),u)}));var _t=l(MP,A({},V,{noCaret:F,tabIndex:x,className:y,renderTitle:h,icon:_,componentClass:E}),s),ft=(0,fE.default)(m,f,(n={},n[K("placement-"+(0,cE.default)(ui(g)))]=g,n[K("disabled")]=d,n[K("no-caret")]=F,n[K("open")]=Pe,n[K(L?"expand":"collapse")]=z,n));return l(T,A({ref:this.rootRef},J,{style:w,className:ft,role:"menu"}),de,_t)},t}(q);gi.displayName="Dropdown";gi.contextType=an;gi.propTypes={activeKey:ce.default.any,classPrefix:ce.default.string,trigger:ce.default.oneOfType([ce.default.array,ce.default.oneOf(["click","hover","contextMenu"])]),placement:ce.default.oneOf(Gc),title:ce.default.node,disabled:ce.default.bool,icon:ce.default.node,menuStyle:ce.default.object,className:ce.default.string,toggleClassName:ce.default.string,children:ce.default.node,tabIndex:ce.default.number,open:ce.default.bool,eventKey:ce.default.any,componentClass:ce.default.elementType,toggleComponentClass:ce.default.elementType,noCaret:ce.default.bool,showHeader:ce.default.bool,style:ce.default.object,onClose:ce.default.func,onOpen:ce.default.func,onToggle:ce.default.func,onSelect:ce.default.func,onMouseEnter:ce.default.func,onMouseLeave:ce.default.func,onContextMenu:ce.default.func,onClick:ce.default.func,renderTitle:ce.default.func};gi.defaultProps={placement:"bottomStart",trigger:"click",tabIndex:0};var Xf=X({componentClass:"div",classPrefix:"dropdown"})(gi);qe("Item",Xs)(Xf);qe("Menu",Ks)(Xf);var pE=Xf;var Pt=pE;i();i();U();var Et=N(ae()),OE=N(se());i();U();var Ne=N(ae()),Qs=N(se());i();U();function Kf(e){var t=e.message,r=W(e,["message"]);return l(uo,A({speaker:l(co,null,t)},r))}var Zs=function(e){G(t,e);function t(){for(var o,n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return o=e.call.apply(e,[this].concat(a))||this,o.handleClick=function(u){var f=o.props,p=f.onSelect,d=f.disabled,h=f.eventKey;p&&!d&&p(h,u)},o}var r=t.prototype;return r.render=function(){var n,a=this.props,s=a.active,u=a.disabled,f=a.onClick,p=a.className,d=a.classPrefix,h=a.style,m=a.children,g=a.icon,C=a.tabIndex,x=a.hasTooltip,y=a.divider,O=a.panel,_=a.componentClass,S=a.renderItem,M=W(a,["active","disabled","onClick","className","classPrefix","style","children","icon","tabIndex","hasTooltip","divider","panel","componentClass","renderItem"]),R=te(d),b=ve(t,M),I=(0,Qs.default)(d,p,(n={},n[R("active")]=s,n[R("disabled")]=u,n));if(y)return l("li",{role:"separator",style:h,className:(0,Qs.default)(R("divider"),p)});if(O)return l("li",{style:h,className:(0,Qs.default)(R("panel"),p)},m);_===Gr&&(b.disabled=u);var T=l(_,A({},b,{role:"button",tabIndex:C,className:R("content"),onClick:oe(f,this.handleClick)}),g,m,l(Or,null));return S&&(T=S(T)),l("li",{className:I,style:h},x?Kf({children:T,message:m,placement:"right"}):T)},t}(q);Zs.displayName="NavItem";Zs.propTypes={active:Ne.default.bool,disabled:Ne.default.bool,className:Ne.default.string,classPrefix:Ne.default.string,divider:Ne.default.bool,panel:Ne.default.bool,onClick:Ne.default.func,style:Ne.default.object,icon:Ne.default.node,onSelect:Ne.default.func,children:Ne.default.node,eventKey:Ne.default.any,tabIndex:Ne.default.number,hasTooltip:Ne.default.bool,componentClass:Ne.default.elementType,renderItem:Ne.default.func};Zs.defaultProps={tabIndex:0};var dE=X({classPrefix:"nav-item",componentClass:Gr})(Zs);i();U();var po=N(ae()),_E=N(se());i();U();var Js=N(ae()),mE=N(se());var hE=function(e){G(t,e);function t(){return e.apply(this,arguments)||this}var r=t.prototype;return r.render=function(){var n=this.props,a=n.children,s=n.classPrefix,u=n.className,f=W(n,["children","classPrefix","className"]),p=(0,mE.default)(s,u);return l("div",A({},f,{className:p}),a)},t}(q);hE.propTypes={classPrefix:Js.default.string,className:Js.default.string,children:Js.default.node};var gE=X({classPrefix:"navbar-body"})(hE);i();U();var Qf=N(ae()),CE=N(se());var vE=function(e){G(t,e);function t(){return e.apply(this,arguments)||this}var r=t.prototype;return r.render=function(){var n=this.props,a=n.className,s=n.classPrefix,u=W(n,["className","classPrefix"]),f=(0,CE.default)(s,a);return l("div",A({},u,{className:f}))},t}(q);vE.propTypes={classPrefix:Qf.default.string,className:Qf.default.string};var xE=X({classPrefix:"navbar-header"})(vE);var Zf=at(null),Jf=function(e){G(t,e);function t(){return e.apply(this,arguments)||this}var r=t.prototype;return r.render=function(){var n=this.props,a=n.className,s=n.componentClass,u=n.hasChildContext,f=n.classPrefix,p=n.appearance,d=W(n,["className","componentClass","hasChildContext","classPrefix","appearance"]),h=te(f),m=(0,_E.default)(f,h(p),a);return l(Zf.Provider,{value:u},l(s,A({},d,{className:m,role:"navigation"})))},t}(q);Jf.propTypes={classPrefix:po.default.string,className:po.default.string,appearance:po.default.oneOf(["default","inverse","subtle"]),componentClass:po.default.elementType,hasChildContext:po.default.bool};Jf.defaultProps={hasChildContext:!0,appearance:"default"};var ep=X({componentClass:"div",classPrefix:"navbar"})(Jf);qe("Header",xE)(ep);qe("Body",gE)(ep);var yE=ep;var eu=function(e){G(t,e);function t(){return e.apply(this,arguments)||this}var r=t.prototype;return r.render=function(){var n=this.props,a=n.classPrefix,s=n.appearance,u=n.vertical,f=n.justified,p=n.reversed,d=n.pullRight,h=n.className,m=n.children,g=W(n,["classPrefix","appearance","vertical","justified","reversed","pullRight","className","children"]),C=this.context||{},x=C.sidenav,y=x===void 0?!1:x,O=C.expanded,_=O===void 0?!1:O,S=C.activeKey,M=S===void 0?g.activeKey:S,R=C.onSelect,b=R===void 0?g.onSelect:R,I=te(a),T=ei(),E=s!=="default",F=ti.mapCloneElement(m,function(B){var k,$=B.props,ue=$.eventKey,Z=$.active,z=$.onSelect,H=W($,["eventKey","active","onSelect"]),L=B==null||(k=B.type)===null||k===void 0?void 0:k.displayName,K=y&&!_;return~L?.indexOf("(NavItem)")?A({},H,{onSelect:oe(b,z),hasTooltip:K,active:typeof M>"u"?Z:it(M,ue)}):~L?.indexOf("(Dropdown)")?A({},H,{onSelect:oe(b,z),activeKey:M,showHeader:K,componentClass:"li"}):null}),w=ve(t,g);return l(Zf.Consumer,null,function(B){var k,$=(0,OE.default)(a,I(s),h,(k={},k[T+"navbar-nav"]=B,k[T+"navbar-right"]=d,k[T+"sidenav-nav"]=y,k[I("horizontal")]=B||!u&&!y,k[I("vertical")]=u||y,k[I("justified")]=f,k[I("reversed")]=p,k));return l("div",A({},w,{className:$}),l("ul",null,F),E&&l("div",{className:I("waterline")}))})},t}(q);eu.contextType=an;eu.propTypes={classPrefix:Et.default.string,className:Et.default.string,children:Et.default.node,appearance:Et.default.oneOf(["default","subtle","tabs"]),reversed:Et.default.bool,justified:Et.default.bool,vertical:Et.default.bool,pullRight:Et.default.bool,activeKey:Et.default.any,onSelect:Et.default.func};eu.defaultProps={appearance:"default"};var TE=X({classPrefix:"nav"})(eu);qe("Item",dE)(TE);var bE=TE;var mo=bE;i();var Ci=yE;i();i();var vi=N(yr());U();var Ve=N(ae()),AE=N(se());i();var EE=N(Wf()),IE=N(PE()),tp=N(yr());U();var er=N(ae()),wE=N(se());var rp=at({}),RE=function(e){G(t,e);function t(o){var n;return n=e.call(this,o)||this,n.getContextProps=function(){var a=n.props,s=a.inline,u=a.name,f=a.value;return{inline:s,name:u,value:n.getValue(),controlled:!(0,tp.default)(f),onChange:n.handleChange}},n.handleChange=function(a,s,u){var f,p,d=(0,IE.default)(n.getValue())||[];s?d.push(a):(0,EE.default)(d,function(h){return it(h,a)}),n.setState({value:d}),(f=(p=n.props).onChange)===null||f===void 0||f.call(p,d,u)},n.state={value:o.defaultValue||[]},n}var r=t.prototype;return r.getValue=function(){var n=this.props.value;return(0,tp.default)(n)?this.state.value:n},r.render=function(){var n,a=this.props,s=a.className,u=a.inline,f=a.children,p=a.classPrefix,d=W(a,["className","inline","children","classPrefix"]),h=te(p),m=(0,wE.default)(p,s,(n={},n[h("inline")]=u,n)),g=ve(t,d);return l(rp.Provider,{value:this.getContextProps()},l("div",A({},g,{role:"group",className:m}),f))},t}(q);RE.propTypes={name:er.default.string,className:er.default.string,inline:er.default.bool,value:er.default.array,defaultValue:er.default.array,onChange:er.default.func,children:er.default.array,classPrefix:er.default.string};var SE=X({classPrefix:"checkbox-group"})(RE);var tu=function(e){G(t,e);function t(o){var n;return n=e.call(this,o)||this,n.context={},n.handleChange=function(a){var s,u,f=n.props,p=f.onChange,d=f.disabled,h=f.value,m=!n.isChecked();d||(n.setState({checked:m}),p?.(h,m,a),(s=(u=n.context).onChange)===null||s===void 0||s.call(u,h,m,a))},n.state={checked:o.defaultChecked},n}var r=t.prototype;return r.getCheckedByValue=function(){var n=this,a=this.context.value;return!(0,vi.default)(a)&&!(0,vi.default)(this.props.value)?a.some(function(s){return s===n.props.value}):this.props.checked},r.isChecked=function(){var n=this.getCheckedByValue();return(0,vi.default)(n)?this.state.checked:n},r.render=function(){var n,a=this.props,s=a.disabled,u=a.className,f=a.children,p=a.title,d=a.inputRef,h=a.indeterminate,m=a.tabIndex,g=a.classPrefix,C=a.onClick,x=a.onCheckboxClick,y=a.checkable,O=W(a,["disabled","className","children","title","inputRef","indeterminate","tabIndex","classPrefix","onClick","onCheckboxClick","checkable"]),_=this.isChecked(),S=this.context,M=S.inline,R=M===void 0?this.props.inline:M,b=S.name,I=b===void 0?this.props.name:b,T=S.controlled,E=te(g),F=(0,AE.default)(g,u,(n={},n[E("inline")]=R,n[E("indeterminate")]=h,n[E("disabled")]=s,n[E("checked")]=_,n)),w=ve(t,O),B=Mv(w),k=B[0],$=B[1];(0,vi.default)(T)||(k[T?"checked":"defaultChecked"]=_);var ue=l("span",{className:E("wrapper"),onClick:x,"aria-disabled":s},l("input",A({},k,{name:I,type:"checkbox",ref:d,tabIndex:m,onClick:function(z){return z.stopPropagation()},disabled:s,onChange:this.handleChange})),l("span",{className:E("inner"),"aria-hidden":!0,role:"presentation"}));return l("div",A({},$,{onClick:C,className:F}),l("div",{className:E("checker")},l("label",{title:p},y?ue:null,f)))},t}(q);tu.contextType=rp;tu.propTypes={title:Ve.default.string,className:Ve.default.string,inline:Ve.default.bool,disabled:Ve.default.bool,checked:Ve.default.bool,defaultChecked:Ve.default.bool,indeterminate:Ve.default.bool,onChange:Ve.default.func,onClick:Ve.default.func,inputRef:Zt,value:Ve.default.any,children:Ve.default.node,classPrefix:Ve.default.string,tabIndex:Ve.default.number,checkable:Ve.default.bool,onCheckboxClick:Ve.default.func};tu.defaultProps={checkable:!0,tabIndex:0};var DE=X({classPrefix:"checkbox"})(tu);var np=DE;i();var op=SE;i();i();var NE=N(nn()),FE=N(Bs()),BE=N(yr());U();var Ie=N(ae()),xi=N(se());var kE=function(e){G(t,e);function t(o){var n;return n=e.call(this,o)||this,n.handleSelect=function(a){a.persist();var s=n.props,u=s.onSelect,f=s.eventKey;u&&u(f,a),n.handleToggle()},n.handleToggle=function(){n.setState({expanded:!n.state.expanded})},n.addPrefix=function(a){return te(n.props.classPrefix)(a)},n.state={expanded:o.defaultExpanded},n}var r=t.prototype;return r.isExpanded=function(){return(0,BE.default)(this.props.expanded)?this.state.expanded:this.props.expanded},r.renderCollapsibleTitle=function(n,a){return l("span",{className:this.addPrefix("title"),role:"presentation"},this.renderAnchor(n,a))},r.renderCollapsibleBody=function(n){var a=this,s=this.props.id,u=A({},(0,FE.default)(this.props,Object.keys(pi.propTypes)),{in:this.isExpanded()}),f={id:s?""+s:null,"aria-hidden":!this.isExpanded()};return n&&(f.role=n),l(pi,u,function(p,d){var h=p.className,m=W(p,["className"]);return l("div",A({},f,m,{className:(0,xi.default)(a.addPrefix("collapse"),h),ref:d}),a.renderBody())})},r.renderBody=function(){var n,a=this.props,s=a.children,u=a.bodyFill,f=(0,xi.default)(this.addPrefix("body"),(n={},n[this.addPrefix("body-fill")]=u,n));return l("div",{className:f},s)},r.renderHeading=function(n){var a=this.props.header;if(!a)return null;if(!qr(a)||Array.isArray(a))a=this.props.collapsible?this.renderCollapsibleTitle(a,n):a;else{var s=(0,xi.default)(this.addPrefix("title"),(0,NE.default)(a,"props.className"));a=Ae(a,{className:s})}return l("div",{role:"rowheader",className:this.addPrefix("heading"),onClick:this.handleSelect,tabIndex:-1},a)},r.renderAnchor=function(n,a){var s=this.props,u=s.id,f=s.collapsible;return l("span",{"aria-controls":f?""+u:null,className:this.isExpanded()?null:"collapsed","aria-expanded":this.isExpanded(),"aria-selected":this.isExpanded(),role:a},n)},r.render=function(){var n,a=this.props,s=a.headerRole,u=a.panelRole,f=a.className,p=a.collapsible,d=a.bordered,h=a.shaded,m=a.classPrefix,g=a.id,C=W(a,["headerRole","panelRole","className","collapsible","bordered","shaded","classPrefix","id"]),x=(0,xi.default)(f,m,this.addPrefix("default"),(n={},n[this.addPrefix("in")]=this.isExpanded(),n[this.addPrefix("collapsible")]=p,n[this.addPrefix("bordered")]=d,n[this.addPrefix("shaded")]=h,n)),y=ve(t,C);return l("div",A({},y,{className:x,id:p?null:g}),this.renderHeading(s),p?this.renderCollapsibleBody(u):this.renderBody())},t}(q);kE.propTypes={collapsible:Ie.default.bool,bordered:Ie.default.bool,shaded:Ie.default.bool,bodyFill:Ie.default.bool,header:Ie.default.any,defaultExpanded:Ie.default.bool,expanded:Ie.default.bool,eventKey:Ie.default.any,headerRole:Ie.default.string,panelRole:Ie.default.string,classPrefix:Ie.default.string,children:Ie.default.node,onSelect:Ie.default.func,onEnter:Ie.default.func,onEntering:Ie.default.func,onEntered:Ie.default.func,onExit:Ie.default.func,onExiting:Ie.default.func,onExited:Ie.default.func,className:Ie.default.string};var LE=X({classPrefix:"panel"})(kE);var ru=LE;i();i();function Pr(e){return Pr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Pr(e)}i();function ip(e,t){if(Pr(e)!=="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var o=r.call(e,t||"default");if(Pr(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ap(e){var t=ip(e,"string");return Pr(t)==="symbol"?t:String(t)}i();i();U();var _i=N(ae()),HE=N(se());i();U();var ho=N(ae()),WE=N(se());var sp=function(e){G(t,e);function t(){return e.apply(this,arguments)||this}var r=t.prototype;return r.render=function(){var n,a=this.props,s=a.className,u=a.classPrefix,f=a.colspan,p=a.order,d=a.componentClass,h=W(a,["className","classPrefix","colspan","order","componentClass"]),m=te(u),g=(0,WE.default)(s,u,(n={},n[m(""+f)]=f>=0,n[m("order-"+p)]=p,n));return l(d,A({},h,{className:g}))},t}(q);sp.propTypes={className:ho.default.string,colspan:ho.default.number,order:ho.default.number,classPrefix:ho.default.string,componentClass:ho.default.elementType};sp.defaultProps={componentClass:"div",colspan:0,order:0};var qE=X({classPrefix:"flex-box-grid-item"})(sp);var up=function(e){G(t,e);function t(){return e.apply(this,arguments)||this}var r=t.prototype;return r.render=function(){var n=this.props,a=n.className,s=n.classPrefix,u=n.align,f=n.justify,p=W(n,["className","classPrefix","align","justify"]),d=te(s),h=(0,HE.default)(s,a,d(u),d(f));return l("div",A({},p,{className:h}))},t}(q);up.propTypes={className:_i.default.string,classPrefix:_i.default.string,align:_i.default.oneOf(["top","middle","bottom"]),justify:_i.default.oneOf(["start","end","center","space-around","space-between"])};up.defaultProps={align:"top",justify:"start"};var VE=X({classPrefix:"flex-box-grid"})(up);qe("Item",qE)(VE);var zE=VE;var yi=zE;i();i();U();var nu=N(ae()),GE=N(se());var IX=at({}),jE=function(e){G(t,e);function t(o){var n;return n=e.call(this,o)||this,n.setContextState=function(a){n.setState(a)},n.state={hasSidebar:!1},n}var r=t.prototype;return r.render=function(){var n,a=this.props,s=a.className,u=a.children,f=u===void 0?[]:u,p=a.classPrefix,d=W(a,["className","children","classPrefix"]),h=te(p),m=(0,GE.default)(p,s,(n={},n[h("has-sidebar")]=this.state.hasSidebar,n));return l(IX.Provider,{value:{setContextState:this.setContextState}},l("div",A({},d,{className:m}),f))},t}(q);jE.propTypes={className:nu.default.string,children:nu.default.node,classPrefix:nu.default.string};var UE=X({classPrefix:"container"})(jE);var lp=UE;i();i();U();var cp=N(ae()),$E=N(se());var YE=function(e){G(t,e);function t(){return e.apply(this,arguments)||this}var r=t.prototype;return r.render=function(){var n=this.props,a=n.className,s=n.classPrefix,u=W(n,["className","classPrefix"]),f=(0,$E.default)(s,a);return l("div",A({},u,{className:f}))},t}(q);YE.propTypes={className:cp.default.string,classPrefix:cp.default.string};var XE=X({classPrefix:"content"})(YE);var fp=XE;i();i();U();var pp=N(ae()),KE=N(se());var QE=function(e){G(t,e);function t(){return e.apply(this,arguments)||this}var r=t.prototype;return r.render=function(){var n=this.props,a=n.className,s=n.classPrefix,u=W(n,["className","classPrefix"]),f=(0,KE.default)(s,a);return l("div",A({},u,{className:f}))},t}(q);QE.propTypes={className:pp.default.string,classPrefix:pp.default.string};var ZE=X({classPrefix:"header"})(QE);var dp=ZE;i();i();var ze=e=>{e=e.trim().split(`
`).map(o=>o.trim()).join(`
`);let[t,...r]=e.trim().split(`

`);return{registers:wX(t),configs:r.map(Ir)}},Er=(e,...t)=>{let r=["FCPU	FCPU_UI",...e.map(([o,n])=>`${o}	${n}`)].join(`
`);return t.map(o=>{let n=ze(o);return n.configs.push(Ir(r)),n})},Ir=e=>{let t=e.trim().split(`
`).filter(n=>n.trim()&&!n.startsWith("//")).map(n=>n.trim().split("	")),[r,...o]=t;return o.map(n=>Object.fromEntries(r.map((a,s)=>[a,n[s].trim().replace(/\\n/g,`
`).replace(/\\t/g,"	")]).filter(([a,s])=>a!=""&&s!=""))).filter(n=>!Object.values(n).includes("-"))},wX=e=>{let t=e.trim().split(`
`).filter(n=>!n.startsWith("//")).map(n=>n.trim().split("	")),[r,...o]=t;return Object.fromEntries(r.map((n,a)=>[n,o.map(s=>s[a])]))},gp={Timer:{timerMode:"Timer mode",topValue:"Top value of timer",clockPrescalerOrSource:"Clock prescaler or external source",clockDoubler:"Double timer clock speed",ExternalClockInput:"External clock input port",TIM1remap:"Channel pin remap",TIM2remap:"Channel pin remap",FCPU_UI:"CPU Clock"},"Output A":{CompareOutputModeA:"Behaviour",interruptA:"Interrupt on match",OCnA_OutputPort:"Output port",OCnA_OutputCurrent:"Output current",OutputPolarityA:"Output polarity",ComplementaryA:"Complementary output",OCnA_NOutputPort:"Complementary port",ComplementaryPolarityA:"Complementary polarity"},"Output B":{CompareOutputModeB:"Behaviour",interruptB:"Interrupt on match",OCnB_OutputPort:"Output port",OCnB_OutputCurrent:"Output current",OutputPolarityB:"Output polarity",ComplementaryB:"Complementary output",OCnB_NOutputPort:"Complementary port",ComplementaryPolarityB:"Complementary polarity"},"Output C":{CompareOutputModeC:"Behaviour",interruptC:"Interrupt on match",OCnC_OutputPort:"Output port",OCnC_OutputCurrent:"Output current",OutputPolarityC:"Output polarity",ComplementaryC:"Complementary output",OCnC_NOutputPort:"Complementary port",ComplementaryPolarityC:"Complementary polarity"},"Output D":{CompareOutputModeD:"Behaviour",interruptD:"Interrupt on match",OCnD_OutputPort:"Output port",OCnD_OutputCurrent:"Output current",OutputPolarityD:"Output polarity"},Extras:{updateOcrMoment:"When are the OCRs updated",setTovMoment:"When overflow interrupt is triggered",InterruptOnTimerOverflow:"Interrupt on Timer Overflow",InputCaptureNoiseSupression:"Input capture noise supression",InterruptOnInputCapture:"Interrupt on Input Capture",InputCaptureEdgeSelect:"Input Capture Edge Select",DeadTime:"Insert dead time",OnePulse:"One-pulse mode",BreakInput:"Break input",BreakPolarity:"Break polarity"}},ou={"PWM mode 1":"Output active while CNT < CCR. Duty = CCR/(ARR+1); can reach 0% (CCR=0) and 100% (CCR>ARR).","PWM mode 2":"Inverse of mode 1: output active while CNT \u2265 CCR. Duty = (ARR+1\u2212CCR)/(ARR+1)."},iu={title:"Polarity of the channel output pin.","active high":"Idles low; goes high while the channel is active (default).","active low":"Inverts the pin: idles high; goes low while active."},mp={title:"Also drive the complementary CHxN pin with the inverse of the main output \u2014 for the low side of a half-bridge (advanced timer only).",off:"Only the main output is driven.",on:"Drive the complementary (CHxN) output too."},hp={title:"Polarity of the complementary CHxN output.","active high":"CHxN idles low; high while active.","active low":"CHxN idles high; low while active."},JE={timerMode:{Normal:"Counts always up, overflowing to zero. Duty is always 50%.",PCPWM:"Phase correct PWM: Counts up to TOP then down to 0. Output compare registers updated at TOP, maintaining the phase of the PWM. Output is set in one direction and cleared on the other one. Duty goes from full 0% to full 100% but maximum frequency is half that of FPWM.",CTC:"Clear timer on compare: Counts up to TOP and resets to zero. Duty is always 50%.",FPWM:"Fast PWM: Counts up to TOP and resets to zero. Duty cycle cannot go to 0% (on clear-on-compare-match), or to 100% (on set-on-compare-match).",PFCPWM:"Phase frequency correct PWM: idem to PCPWM, but output compare registers are updated at zero, resulting in a constant frequency even when the output compare registers are changed during operation.","edge-aligned up":"Counter counts 0 \u2192 ARR then resets to 0 (sawtooth up). Standard edge-aligned PWM; period = ARR+1 ticks.","edge-aligned down":"Counter counts ARR \u2192 0 then reloads to ARR (sawtooth down). Same duty and frequency as up-counting, but the pulse is mirrored in phase.","center-aligned":"Counter counts up to ARR then back down to 0 (triangle). PWM pulses are centered in the period and the frequency is halved \u2014 common for motor control and lower EMI."},topValue:{ATRLR:"ATRLR is the auto-reload register: it sets the timer TOP (period). The counter wraps at ARR, so the period is ARR+1 timer ticks.",ICR1:`If ICR1 is not used as top, the input capture pin (ICP1) is PB0.
If ICR1 is used as top, ICP1 is disconnected. The input compare register is not double-buffered so it will be updated immediatly (and not on TOP or BOTTOM like OCRs). This may make the timer lose a match if changed near it.`,ICR3:`If ICR3 is not used as top, the input capture pin (ICP3) is PF4.
If ICR3 is used as top, ICP3 is disconnected. The input compare register is not double-buffered so it will be updated immediatly (and not on TOP or BOTTOM like OCRs). This may make the timer lose a match if changed near it.`,ICR4:`If ICR4 is not used as top, the input capture pin (ICP4) is PE0.
If ICR4 is used as top, ICP4 is disconnected. The input compare register is not double-buffered so it will be updated immediatly (and not on TOP or BOTTOM like OCRs). This may make the timer lose a match if changed near it.`},OCnA_OutputPort:{"E4+C0":"Both at the same time","AC0P(D6)":`Package	Silk	IC
\u2500\u2500\u2500\u2500\u2500\u2500\u2500	\u2500\u2500\u2500\u2500	\u2500\u2500
QFP48:	D?	15 
QFP32:	D6	10 
SSOP20:	D6	9`,B1:`Package	Silk	IC
\u2500\u2500\u2500\u2500\u2500\u2500\u2500	\u2500\u2500\u2500\u2500	\u2500\u2500
QFP48:	D?	19 
QFP32:	D9	13 
SSOP20:	D9	11`,B3:`Package	Silk	IC
\u2500\u2500\u2500\u2500\u2500\u2500\u2500	\u2500\u2500\u2500\u2500	\u2500\u2500
QFP48:	D?	23 
QFP32:	D11	15 
SSOP20:	D11	12`,C0:`Package	Silk	IC
\u2500\u2500\u2500\u2500\u2500\u2500\u2500	\u2500\u2500\u2500\u2500	\u2500\u2500
QFP48:	D?	35 
QFP32:	A0	25 
SSOP20:	A0	17`,D3:`Package	Silk	IC
\u2500\u2500\u2500\u2500\u2500\u2500\u2500	\u2500\u2500\u2500\u2500	\u2500\u2500
QFP48:	D?	1 
QFP32:	D3	1 
SSOP20:	D3	3`,D6:`Package	Silk	IC
\u2500\u2500\u2500\u2500\u2500\u2500\u2500	\u2500\u2500\u2500\u2500	\u2500\u2500
QFP48:	D?	14 
QFP32:	D6	10 
SSOP20:	D6	9`,E4:`Package	Silk	IC
\u2500\u2500\u2500\u2500\u2500\u2500\u2500	\u2500\u2500\u2500\u2500	\u2500\u2500
QFP48:	D?	3 
QFP32:	-	3 
SSOP20:	-	-`,F1:`Package	Silk	IC
\u2500\u2500\u2500\u2500\u2500\u2500\u2500	\u2500\u2500\u2500\u2500	\u2500\u2500
QFP48:	D?	46 
QFP32:	D1	31 
SSOP20:	D1	1`,F5:`Package	Silk	IC
\u2500\u2500\u2500\u2500\u2500\u2500\u2500	\u2500\u2500\u2500\u2500	\u2500\u2500
QFP48:	D?	9 
QFP32:	-	6 
SSOP20:	D?	6`,F6:`Package	Silk	IC
\u2500\u2500\u2500\u2500\u2500\u2500\u2500	\u2500\u2500\u2500\u2500	\u2500\u2500
QFP48:	D?	10 
QFP32:	-	- 
SSOP20:	-	-`,F7:`Package	Silk	IC
\u2500\u2500\u2500\u2500\u2500\u2500\u2500	\u2500\u2500\u2500\u2500	\u2500\u2500
QFP48:	D?	17 
QFP32:	-	- 
SSOP20:	D7	10`},OCnB_OutputPort:{F2:`Package	Silk	IC
\u2500\u2500\u2500\u2500\u2500\u2500\u2500	\u2500\u2500\u2500\u2500	\u2500\u2500
QFP48:	D?	48 
QFP32:	D2	32 
SSOP20:	D2	2`,F7:`Package	Silk	IC
\u2500\u2500\u2500\u2500\u2500\u2500\u2500	\u2500\u2500\u2500\u2500	\u2500\u2500
QFP48:	D?	17 
QFP32:	-	- 
SSOP20:	D7	10`,D3:`Package	Silk	IC
\u2500\u2500\u2500\u2500\u2500\u2500\u2500	\u2500\u2500\u2500\u2500	\u2500\u2500
QFP48:	D?	1 
QFP32:	D3	1 
SSOP20:	D3	3`,F4:`Package	Silk	IC
\u2500\u2500\u2500\u2500\u2500\u2500\u2500	\u2500\u2500\u2500\u2500	\u2500\u2500
QFP48:	D?	5 
QFP32:	-	5 
SSOP20:	D3	3`,B2:`Package	Silk	IC
\u2500\u2500\u2500\u2500\u2500\u2500\u2500	\u2500\u2500\u2500\u2500	\u2500\u2500
QFP48:	D?	20 
QFP32:	D10	14 
SSOP20:	D10	12`,F3:`Package	Silk	IC
\u2500\u2500\u2500\u2500\u2500\u2500\u2500	\u2500\u2500\u2500\u2500	\u2500\u2500
QFP48:	D?	4 
QFP32:	-	- 
SSOP20:	-	-`,D5:`Package	Silk	IC
\u2500\u2500\u2500\u2500\u2500\u2500\u2500	\u2500\u2500\u2500\u2500	\u2500\u2500
QFP48:	D?	13 
QFP32:	D5	9 
SSOP20:	D5	8`},OCnC_OutputPort:{F3:`Package	Silk	IC
\u2500\u2500\u2500\u2500\u2500\u2500\u2500	\u2500\u2500\u2500\u2500	\u2500\u2500
QFP48:	D?	4 
QFP32:	-	- 
SSOP20:	-	-`},updateOcrMoment:{TOP:"OCR registers are updated whenever the timer reaches its top. Can be a fixed number or the value of some register",BOTTOM:"OCR registers are updated when the timer resets to zero",immediate:"OCR registers are updated as soon as they are changed, without a buffer."},InterruptOnInputCapture:{title:`When ICRn not used as TOP and a capture is triggered (PB0 in Timer1, PF4 in Timer3), the counter value is copied into the input capture register (ICRn). The event will also set the input capture flag (ICFn), and this can be used to cause an input capture interrupt, if this interrupt is enabled. 
It can also be used to trigger an interrupt on compare match against the counter.`},InputCaptureNoiseSupression:{on:`The noise canceler improves noise immunity by using a simple digital filtering scheme. The noise canceler input is monitored over four samples, and all four must be equal for changing the output that in turn is used by the edge detector.
    When enabled, the noise canceler introduces additional four system clock cycles of delay from a change applied
    to the input, to the update of the ICRn register. The noise canceler uses the system clock and is therefore not affected by the
    prescaler.`},InputCaptureEdgeSelect:{title:"When the ICRn is used as TOP value, the ICPn is disconnected and consequently the input capture function is disabled."},DeadTime:{title:"Inserts a short delay so the main and complementary outputs are never active at the same time (prevents half-bridge shoot-through). On CH32 the value (in timer ticks) is written to BDTR.DTG.",on:`dead time enable control
    Setting DTENn to logic one, inserting dead time is enable. Base on waveform generated in B channel compare output, both OCnA and OCnB can insert dead time, whose interval is decided by corresponding counter time of DTRn register. Waveform polarity output by OCnA is decided by relationship between CnMn and COMnB, for details referring to list for waveform polarity after inserting dead time.`},CompareOutputModeA:ou,CompareOutputModeB:ou,CompareOutputModeC:ou,CompareOutputModeD:ou,OutputPolarityA:iu,OutputPolarityB:iu,OutputPolarityC:iu,OutputPolarityD:iu,ComplementaryA:mp,ComplementaryB:mp,ComplementaryC:mp,ComplementaryPolarityA:hp,ComplementaryPolarityB:hp,ComplementaryPolarityC:hp,OnePulse:{title:"One-pulse mode: the timer runs a single cycle then stops automatically, instead of running continuously.",off:"Free-running (continuous).",on:"Generate one pulse, then stop."},BreakInput:{title:"Break input: an external fault signal immediately forces all outputs to their inactive state (emergency shutdown for motor drives). Outputs only re-enable when MOE is set again.",off:"Break input disabled.",on:"A fault on the break pin disables the outputs."},BreakPolarity:{title:"Active level of the break input pin.","active low":"Break triggers when the pin is low.","active high":"Break triggers when the pin is high."},TIM2remap:{title:'AFIO pin remap: selects which physical pins this timer\u2019s channels use. The resulting pins are shown in each channel\u2019s "Output port".'},TIM1remap:{title:"AFIO pin remap: selects which pins the channels (and complementary CHxN) use. The resulting pins are shown in each channel\u2019s port fields."}};i();U();i();U();i();i();i();i();i();i();i();i();var gt=[];var eI=function(){return gt.some(function(e){return e.activeTargets.length>0})};i();var tI=function(){return gt.some(function(e){return e.skippedTargets.length>0})};i();var rI="ResizeObserver loop completed with undelivered notifications.",nI=function(){var e;typeof ErrorEvent=="function"?e=new ErrorEvent("error",{message:rI}):(e=document.createEvent("Event"),e.initEvent("error",!1,!1),e.message=rI),window.dispatchEvent(e)};i();i();i();i();var sn;(function(e){e.BORDER_BOX="border-box",e.CONTENT_BOX="content-box",e.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"})(sn||(sn={}));i();i();var It=function(e){return Object.freeze(e)};var Cp=function(){function e(t,r){this.inlineSize=t,this.blockSize=r,It(this)}return e}();i();var vp=function(){function e(t,r,o,n){return this.x=t,this.y=r,this.width=o,this.height=n,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,It(this)}return e.prototype.toJSON=function(){var t=this,r=t.x,o=t.y,n=t.top,a=t.right,s=t.bottom,u=t.left,f=t.width,p=t.height;return{x:r,y:o,top:n,right:a,bottom:s,left:u,width:f,height:p}},e.fromRect=function(t){return new e(t.x,t.y,t.width,t.height)},e}();i();var Oi=function(e){return e instanceof SVGElement&&"getBBox"in e},au=function(e){if(Oi(e)){var t=e.getBBox(),r=t.width,o=t.height;return!r&&!o}var n=e,a=n.offsetWidth,s=n.offsetHeight;return!(a||s||e.getClientRects().length)},xp=function(e){var t;if(e instanceof Element)return!0;var r=(t=e?.ownerDocument)===null||t===void 0?void 0:t.defaultView;return!!(r&&e instanceof r.Element)},oI=function(e){switch(e.tagName){case"INPUT":if(e.type!=="image")break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1};i();var un=typeof window<"u"?window:{};var su=new WeakMap,iI=/auto|scroll/,RX=/^tb|vertical/,SX=/msie|trident/i.test(un.navigator&&un.navigator.userAgent),Lt=function(e){return parseFloat(e||"0")},go=function(e,t,r){return e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=!1),new Cp((r?t:e)||0,(r?e:t)||0)},aI=It({devicePixelContentBoxSize:go(),borderBoxSize:go(),contentBoxSize:go(),contentRect:new vp(0,0,0,0)}),_p=function(e,t){if(t===void 0&&(t=!1),su.has(e)&&!t)return su.get(e);if(au(e))return su.set(e,aI),aI;var r=getComputedStyle(e),o=Oi(e)&&e.ownerSVGElement&&e.getBBox(),n=!SX&&r.boxSizing==="border-box",a=RX.test(r.writingMode||""),s=!o&&iI.test(r.overflowY||""),u=!o&&iI.test(r.overflowX||""),f=o?0:Lt(r.paddingTop),p=o?0:Lt(r.paddingRight),d=o?0:Lt(r.paddingBottom),h=o?0:Lt(r.paddingLeft),m=o?0:Lt(r.borderTopWidth),g=o?0:Lt(r.borderRightWidth),C=o?0:Lt(r.borderBottomWidth),x=o?0:Lt(r.borderLeftWidth),y=h+p,O=f+d,_=x+g,S=m+C,M=u?e.offsetHeight-S-e.clientHeight:0,R=s?e.offsetWidth-_-e.clientWidth:0,b=n?y+_:0,I=n?O+S:0,T=o?o.width:Lt(r.width)-b-R,E=o?o.height:Lt(r.height)-I-M,F=T+y+R+_,w=E+O+M+S,B=It({devicePixelContentBoxSize:go(Math.round(T*devicePixelRatio),Math.round(E*devicePixelRatio),a),borderBoxSize:go(F,w,a),contentBoxSize:go(T,E,a),contentRect:new vp(h,f,T,E)});return su.set(e,B),B},uu=function(e,t,r){var o=_p(e,r),n=o.borderBoxSize,a=o.contentBoxSize,s=o.devicePixelContentBoxSize;switch(t){case sn.DEVICE_PIXEL_CONTENT_BOX:return s;case sn.BORDER_BOX:return n;default:return a}};var yp=function(){function e(t){var r=_p(t);this.target=t,this.contentRect=r.contentRect,this.borderBoxSize=It([r.borderBoxSize]),this.contentBoxSize=It([r.contentBoxSize]),this.devicePixelContentBoxSize=It([r.devicePixelContentBoxSize])}return e}();i();var lu=function(e){if(au(e))return 1/0;for(var t=0,r=e.parentNode;r;)t+=1,r=r.parentNode;return t};var sI=function(){var e=1/0,t=[];gt.forEach(function(s){if(s.activeTargets.length!==0){var u=[];s.activeTargets.forEach(function(p){var d=new yp(p.target),h=lu(p.target);u.push(d),p.lastReportedSize=uu(p.target,p.observedBox),h<e&&(e=h)}),t.push(function(){s.callback.call(s.observer,u,s.observer)}),s.activeTargets.splice(0,s.activeTargets.length)}});for(var r=0,o=t;r<o.length;r++){var n=o[r];n()}return e};i();var Op=function(e){gt.forEach(function(r){r.activeTargets.splice(0,r.activeTargets.length),r.skippedTargets.splice(0,r.skippedTargets.length),r.observationTargets.forEach(function(n){n.isActive()&&(lu(n.target)>e?r.activeTargets.push(n):r.skippedTargets.push(n))})})};var uI=function(){var e=0;for(Op(e);eI();)e=sI(),Op(e);return tI()&&nI(),e>0};i();i();var Tp,lI=[],AX=function(){return lI.splice(0).forEach(function(e){return e()})},cI=function(e){if(!Tp){var t=0,r=document.createTextNode(""),o={characterData:!0};new MutationObserver(function(){return AX()}).observe(r,o),Tp=function(){r.textContent="".concat(t?t--:t++)}}lI.push(e),Tp()};var fI=function(e){cI(function(){requestAnimationFrame(e)})};var cu=0,DX=function(){return!!cu},NX=250,FX={attributes:!0,characterData:!0,childList:!0,subtree:!0},pI=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],dI=function(e){return e===void 0&&(e=0),Date.now()+e},bp=!1,BX=function(){function e(){var t=this;this.stopped=!0,this.listener=function(){return t.schedule()}}return e.prototype.run=function(t){var r=this;if(t===void 0&&(t=NX),!bp){bp=!0;var o=dI(t);fI(function(){var n=!1;try{n=uI()}finally{if(bp=!1,t=o-dI(),!DX())return;n?r.run(1e3):t>0?r.run(t):r.start()}})}},e.prototype.schedule=function(){this.stop(),this.run()},e.prototype.observe=function(){var t=this,r=function(){return t.observer&&t.observer.observe(document.body,FX)};document.body?r():un.addEventListener("DOMContentLoaded",r)},e.prototype.start=function(){var t=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),pI.forEach(function(r){return un.addEventListener(r,t.listener,!0)}))},e.prototype.stop=function(){var t=this;this.stopped||(this.observer&&this.observer.disconnect(),pI.forEach(function(r){return un.removeEventListener(r,t.listener,!0)}),this.stopped=!0)},e}(),fu=new BX,Mp=function(e){!cu&&e>0&&fu.start(),cu+=e,!cu&&fu.stop()};i();var kX=function(e){return!Oi(e)&&!oI(e)&&getComputedStyle(e).display==="inline"},mI=function(){function e(t,r){this.target=t,this.observedBox=r||sn.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var t=uu(this.target,this.observedBox,!0);return kX(this.target)&&(this.lastReportedSize=t),this.lastReportedSize.inlineSize!==t.inlineSize||this.lastReportedSize.blockSize!==t.blockSize},e}();i();var hI=function(){function e(t,r){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=t,this.callback=r}return e}();var pu=new WeakMap,gI=function(e,t){for(var r=0;r<e.length;r+=1)if(e[r].target===t)return r;return-1},Ti=function(){function e(){}return e.connect=function(t,r){var o=new hI(t,r);pu.set(t,o)},e.observe=function(t,r,o){var n=pu.get(t),a=n.observationTargets.length===0;gI(n.observationTargets,r)<0&&(a&&gt.push(n),n.observationTargets.push(new mI(r,o&&o.box)),Mp(1),fu.schedule())},e.unobserve=function(t,r){var o=pu.get(t),n=gI(o.observationTargets,r),a=o.observationTargets.length===1;n>=0&&(a&&gt.splice(gt.indexOf(o),1),o.observationTargets.splice(n,1),Mp(-1))},e.disconnect=function(t){var r=this,o=pu.get(t);o.observationTargets.slice().forEach(function(n){return r.unobserve(t,n.target)}),o.activeTargets.splice(0,o.activeTargets.length)},e}();var Pp=function(){function e(t){if(arguments.length===0)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if(typeof t!="function")throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");Ti.connect(this,t)}return e.prototype.observe=function(t,r){if(arguments.length===0)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!xp(t))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");Ti.observe(this,t,r)},e.prototype.unobserve=function(t){if(arguments.length===0)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!xp(t))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");Ti.unobserve(this,t)},e.prototype.disconnect=function(){Ti.disconnect(this)},e.toString=function(){return"function ResizeObserver () { [polyfill code] }"},e}();i();U();var LX=Me[typeof document<"u"&&document.createElement!==void 0?"useLayoutEffect":"useEffect"],du=LX;i();U();var WX=e=>{let t=ut(e);return ke(()=>{t.current=e}),t},CI=WX;var qX=typeof window<"u"&&"ResizeObserver"in window?window.ResizeObserver:Pp;function HX(){}function VX(e,t){let r=GX(),o=CI(t);return du(()=>{let n=!1,a=e&&"current"in e?e.current:e;if(!a)return HX;function s(u,f){n||o.current(u,f)}return r.subscribe(a,s),()=>{n=!0,r.unsubscribe(a,s)}},[e,r,o]),r.observer}function zX(){let e=!1,t=[],r=new Map,o=new qX((n,a)=>{t=t.concat(n);function s(){let u=new Set;for(let f=0;f<t.length;f++){if(u.has(t[f].target))continue;u.add(t[f].target);let p=r.get(t[f].target);p?.forEach(d=>d(t[f],a))}t=[],e=!1}e||window.requestAnimationFrame(s),e=!0});return{observer:o,subscribe(n,a){var s;o.observe(n);let u=(s=r.get(n))!==null&&s!==void 0?s:[];u.push(a),r.set(n,u)},unsubscribe(n,a){var s;let u=(s=r.get(n))!==null&&s!==void 0?s:[];if(u.length===1){o.unobserve(n),r.delete(n);return}let f=u.indexOf(a);f!==-1&&u.splice(f,1),r.set(n,u)}}}var Ep,GX=()=>Ep||(Ep=zX()),vI=VX;var jX=(e,t)=>{let[r,o]=Ze(()=>{var n,a;let s=e&&"current"in e?e.current:e;return s?[s.offsetWidth,s.offsetHeight]:[(n=t?.initialWidth)!==null&&n!==void 0?n:0,(a=t?.initialHeight)!==null&&a!==void 0?a:0]});return du(()=>{let n=e&&"current"in e?e.current:e;n&&o([n.offsetWidth,n.offsetHeight])},[e]),vI(e,n=>{let a=n.target;o([a.offsetWidth,a.offsetHeight])}),r},xI=jX;i();i();i();i();i();i();function mu(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}i();function Ip(e){let t=e,r=e;e.length===1&&(t=(s,u)=>e(s)-u,r=UX(e));function o(s,u,f,p){for(f==null&&(f=0),p==null&&(p=s.length);f<p;){let d=f+p>>>1;r(s[d],u)<0?f=d+1:p=d}return f}function n(s,u,f,p){for(f==null&&(f=0),p==null&&(p=s.length);f<p;){let d=f+p>>>1;r(s[d],u)>0?p=d:f=d+1}return f}function a(s,u,f,p){f==null&&(f=0),p==null&&(p=s.length);let d=o(s,u,f,p-1);return d>f&&t(s[d-1],u)>-t(s[d],u)?d-1:d}return{left:o,center:a,right:n}}function UX(e){return(t,r)=>mu(e(t),r)}i();function _I(e){return e===null?NaN:+e}var yI=Ip(mu),OI=yI.right,$X=yI.left,YX=Ip(_I).center,wp=OI;i();function Rp(e,t){let r,o;if(t===void 0)for(let n of e)n!=null&&(r===void 0?n>=n&&(r=o=n):(r>n&&(r=n),o<n&&(o=n)));else{let n=-1;for(let a of e)(a=t(a,++n,e))!=null&&(r===void 0?a>=a&&(r=o=a):(r>a&&(r=a),o<a&&(o=a)))}return[r,o]}i();var Sp=Math.sqrt(50),Ap=Math.sqrt(10),Dp=Math.sqrt(2);function ln(e,t,r){var o,n=-1,a,s,u;if(t=+t,e=+e,r=+r,e===t&&r>0)return[e];if((o=t<e)&&(a=e,e=t,t=a),(u=hu(e,t,r))===0||!isFinite(u))return[];if(u>0){let f=Math.round(e/u),p=Math.round(t/u);for(f*u<e&&++f,p*u>t&&--p,s=new Array(a=p-f+1);++n<a;)s[n]=(f+n)*u}else{u=-u;let f=Math.round(e*u),p=Math.round(t*u);for(f/u<e&&++f,p/u>t&&--p,s=new Array(a=p-f+1);++n<a;)s[n]=(f+n)/u}return o&&s.reverse(),s}function hu(e,t,r){var o=(t-e)/Math.max(0,r),n=Math.floor(Math.log(o)/Math.LN10),a=o/Math.pow(10,n);return n>=0?(a>=Sp?10:a>=Ap?5:a>=Dp?2:1)*Math.pow(10,n):-Math.pow(10,-n)/(a>=Sp?10:a>=Ap?5:a>=Dp?2:1)}function Np(e,t,r){var o=Math.abs(t-e)/Math.max(0,r),n=Math.pow(10,Math.floor(Math.log(o)/Math.LN10)),a=o/n;return a>=Sp?n*=10:a>=Ap?n*=5:a>=Dp&&(n*=2),t<e?-n:n}i();i();i();var gu=Array.prototype.slice;i();function TI(e){return e}var Fp=1,Bp=2,kp=3,bi=4,bI=1e-6;function XX(e){return"translate("+e+",0)"}function KX(e){return"translate(0,"+e+")"}function QX(e){return t=>+e(t)}function ZX(e,t){return t=Math.max(0,e.bandwidth()-t*2)/2,e.round()&&(t=Math.round(t)),r=>+e(r)+t}function JX(){return!this.__axis}function MI(e,t){var r=[],o=null,n=null,a=6,s=6,u=3,f=typeof window<"u"&&window.devicePixelRatio>1?0:.5,p=e===Fp||e===bi?-1:1,d=e===bi||e===Bp?"x":"y",h=e===Fp||e===kp?XX:KX;function m(g){var C=o??(t.ticks?t.ticks.apply(t,r):t.domain()),x=n??(t.tickFormat?t.tickFormat.apply(t,r):TI),y=Math.max(a,0)+u,O=t.range(),_=+O[0]+f,S=+O[O.length-1]+f,M=(t.bandwidth?ZX:QX)(t.copy(),f),R=g.selection?g.selection():g,b=R.selectAll(".domain").data([null]),I=R.selectAll(".tick").data(C,t).order(),T=I.exit(),E=I.enter().append("g").attr("class","tick"),F=I.select("line"),w=I.select("text");b=b.merge(b.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),I=I.merge(E),F=F.merge(E.append("line").attr("stroke","currentColor").attr(d+"2",p*a)),w=w.merge(E.append("text").attr("fill","currentColor").attr(d,p*y).attr("dy",e===Fp?"0em":e===kp?"0.71em":"0.32em")),g!==R&&(b=b.transition(g),I=I.transition(g),F=F.transition(g),w=w.transition(g),T=T.transition(g).attr("opacity",bI).attr("transform",function(B){return isFinite(B=M(B))?h(B+f):this.getAttribute("transform")}),E.attr("opacity",bI).attr("transform",function(B){var k=this.parentNode.__axis;return h((k&&isFinite(k=k(B))?k:M(B))+f)})),T.remove(),b.attr("d",e===bi||e===Bp?s?"M"+p*s+","+_+"H"+f+"V"+S+"H"+p*s:"M"+f+","+_+"V"+S:s?"M"+_+","+p*s+"V"+f+"H"+S+"V"+p*s:"M"+_+","+f+"H"+S),I.attr("opacity",1).attr("transform",function(B){return h(M(B)+f)}),F.attr(d+"2",p*a),w.attr(d,p*y).text(x),R.filter(JX).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",e===Bp?"start":e===bi?"end":"middle"),R.each(function(){this.__axis=M})}return m.scale=function(g){return arguments.length?(t=g,m):t},m.ticks=function(){return r=gu.call(arguments),m},m.tickArguments=function(g){return arguments.length?(r=g==null?[]:gu.call(g),m):r.slice()},m.tickValues=function(g){return arguments.length?(o=g==null?null:gu.call(g),m):o&&o.slice()},m.tickFormat=function(g){return arguments.length?(n=g,m):n},m.tickSize=function(g){return arguments.length?(a=s=+g,m):a},m.tickSizeInner=function(g){return arguments.length?(a=+g,m):a},m.tickSizeOuter=function(g){return arguments.length?(s=+g,m):s},m.tickPadding=function(g){return arguments.length?(u=+g,m):u},m.offset=function(g){return arguments.length?(f=+g,m):f},m}function Lp(e){return MI(kp,e)}function Wp(e){return MI(bi,e)}i();i();i();i();var eK={value:()=>{}};function EI(){for(var e=0,t=arguments.length,r={},o;e<t;++e){if(!(o=arguments[e]+"")||o in r||/[\s.]/.test(o))throw new Error("illegal type: "+o);r[o]=[]}return new Cu(r)}function Cu(e){this._=e}function tK(e,t){return e.trim().split(/^|\s+/).map(function(r){var o="",n=r.indexOf(".");if(n>=0&&(o=r.slice(n+1),r=r.slice(0,n)),r&&!t.hasOwnProperty(r))throw new Error("unknown type: "+r);return{type:r,name:o}})}Cu.prototype=EI.prototype={constructor:Cu,on:function(e,t){var r=this._,o=tK(e+"",r),n,a=-1,s=o.length;if(arguments.length<2){for(;++a<s;)if((n=(e=o[a]).type)&&(n=rK(r[n],e.name)))return n;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++a<s;)if(n=(e=o[a]).type)r[n]=PI(r[n],e.name,t);else if(t==null)for(n in r)r[n]=PI(r[n],e.name,null);return this},copy:function(){var e={},t=this._;for(var r in t)e[r]=t[r].slice();return new Cu(e)},call:function(e,t){if((n=arguments.length-2)>0)for(var r=new Array(n),o=0,n,a;o<n;++o)r[o]=arguments[o+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(a=this._[e],o=0,n=a.length;o<n;++o)a[o].value.apply(t,r)},apply:function(e,t,r){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var o=this._[e],n=0,a=o.length;n<a;++n)o[n].value.apply(t,r)}};function rK(e,t){for(var r=0,o=e.length,n;r<o;++r)if((n=e[r]).name===t)return n.value}function PI(e,t,r){for(var o=0,n=e.length;o<n;++o)if(e[o].name===t){e[o]=eK,e=e.slice(0,o).concat(e.slice(o+1));break}return r!=null&&e.push({name:t,value:r}),e}var qp=EI;i();i();i();i();var vu="http://www.w3.org/1999/xhtml",Hp={svg:"http://www.w3.org/2000/svg",xhtml:vu,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function tr(e){var t=e+="",r=t.indexOf(":");return r>=0&&(t=e.slice(0,r))!=="xmlns"&&(e=e.slice(r+1)),Hp.hasOwnProperty(t)?{space:Hp[t],local:e}:e}function nK(e){return function(){var t=this.ownerDocument,r=this.namespaceURI;return r===vu&&t.documentElement.namespaceURI===vu?t.createElement(e):t.createElementNS(r,e)}}function oK(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function xu(e){var t=tr(e);return(t.local?oK:nK)(t)}i();i();i();i();function iK(){}function cn(e){return e==null?iK:function(){return this.querySelector(e)}}function II(e){typeof e!="function"&&(e=cn(e));for(var t=this._groups,r=t.length,o=new Array(r),n=0;n<r;++n)for(var a=t[n],s=a.length,u=o[n]=new Array(s),f,p,d=0;d<s;++d)(f=a[d])&&(p=e.call(f,f.__data__,d,a))&&("__data__"in f&&(p.__data__=f.__data__),u[d]=p);return new be(o,this._parents)}i();i();function _u(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}i();function aK(){return[]}function Mi(e){return e==null?aK:function(){return this.querySelectorAll(e)}}function sK(e){return function(){var t=e.apply(this,arguments);return t==null?[]:_u(t)}}function wI(e){typeof e=="function"?e=sK(e):e=Mi(e);for(var t=this._groups,r=t.length,o=[],n=[],a=0;a<r;++a)for(var s=t[a],u=s.length,f,p=0;p<u;++p)(f=s[p])&&(o.push(e.call(f,f.__data__,p,s)),n.push(f));return new be(o,n)}i();i();function Pi(e){return function(){return this.matches(e)}}function yu(e){return function(t){return t.matches(e)}}var uK=Array.prototype.find;function lK(e){return function(){return uK.call(this.children,e)}}function cK(){return this.firstElementChild}function RI(e){return this.select(e==null?cK:lK(typeof e=="function"?e:yu(e)))}i();var fK=Array.prototype.filter;function pK(){return this.children}function dK(e){return function(){return fK.call(this.children,e)}}function SI(e){return this.selectAll(e==null?pK:dK(typeof e=="function"?e:yu(e)))}i();function AI(e){typeof e!="function"&&(e=Pi(e));for(var t=this._groups,r=t.length,o=new Array(r),n=0;n<r;++n)for(var a=t[n],s=a.length,u=o[n]=[],f,p=0;p<s;++p)(f=a[p])&&e.call(f,f.__data__,p,a)&&u.push(f);return new be(o,this._parents)}i();i();i();function Ou(e){return new Array(e.length)}function DI(){return new be(this._enter||this._groups.map(Ou),this._parents)}function Ei(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}Ei.prototype={constructor:Ei,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};i();function NI(e){return function(){return e}}function mK(e,t,r,o,n,a){for(var s=0,u,f=t.length,p=a.length;s<p;++s)(u=t[s])?(u.__data__=a[s],o[s]=u):r[s]=new Ei(e,a[s]);for(;s<f;++s)(u=t[s])&&(n[s]=u)}function hK(e,t,r,o,n,a,s){var u,f,p=new Map,d=t.length,h=a.length,m=new Array(d),g;for(u=0;u<d;++u)(f=t[u])&&(m[u]=g=s.call(f,f.__data__,u,t)+"",p.has(g)?n[u]=f:p.set(g,f));for(u=0;u<h;++u)g=s.call(e,a[u],u,a)+"",(f=p.get(g))?(o[u]=f,f.__data__=a[u],p.delete(g)):r[u]=new Ei(e,a[u]);for(u=0;u<d;++u)(f=t[u])&&p.get(m[u])===f&&(n[u]=f)}function gK(e){return e.__data__}function FI(e,t){if(!arguments.length)return Array.from(this,gK);var r=t?hK:mK,o=this._parents,n=this._groups;typeof e!="function"&&(e=NI(e));for(var a=n.length,s=new Array(a),u=new Array(a),f=new Array(a),p=0;p<a;++p){var d=o[p],h=n[p],m=h.length,g=_u(e.call(d,d&&d.__data__,p,o)),C=g.length,x=u[p]=new Array(C),y=s[p]=new Array(C),O=f[p]=new Array(m);r(d,h,x,y,O,g,t);for(var _=0,S=0,M,R;_<C;++_)if(M=x[_]){for(_>=S&&(S=_+1);!(R=y[S])&&++S<C;);M._next=R||null}}return s=new be(s,o),s._enter=u,s._exit=f,s}i();function BI(){return new be(this._exit||this._groups.map(Ou),this._parents)}i();function kI(e,t,r){var o=this.enter(),n=this,a=this.exit();return o=typeof e=="function"?e(o):o.append(e+""),t!=null&&(n=t(n)),r==null?a.remove():r(a),o&&n?o.merge(n).order():n}i();function LI(e){if(!(e instanceof be))throw new Error("invalid merge");for(var t=this._groups,r=e._groups,o=t.length,n=r.length,a=Math.min(o,n),s=new Array(o),u=0;u<a;++u)for(var f=t[u],p=r[u],d=f.length,h=s[u]=new Array(d),m,g=0;g<d;++g)(m=f[g]||p[g])&&(h[g]=m);for(;u<o;++u)s[u]=t[u];return new be(s,this._parents)}i();function WI(){for(var e=this._groups,t=-1,r=e.length;++t<r;)for(var o=e[t],n=o.length-1,a=o[n],s;--n>=0;)(s=o[n])&&(a&&s.compareDocumentPosition(a)^4&&a.parentNode.insertBefore(s,a),a=s);return this}i();function qI(e){e||(e=CK);function t(h,m){return h&&m?e(h.__data__,m.__data__):!h-!m}for(var r=this._groups,o=r.length,n=new Array(o),a=0;a<o;++a){for(var s=r[a],u=s.length,f=n[a]=new Array(u),p,d=0;d<u;++d)(p=s[d])&&(f[d]=p);f.sort(t)}return new be(n,this._parents).order()}function CK(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}i();function HI(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}i();function VI(){return Array.from(this)}i();function zI(){for(var e=this._groups,t=0,r=e.length;t<r;++t)for(var o=e[t],n=0,a=o.length;n<a;++n){var s=o[n];if(s)return s}return null}i();function GI(){let e=0;for(let t of this)++e;return e}i();function jI(){return!this.node()}i();function UI(e){for(var t=this._groups,r=0,o=t.length;r<o;++r)for(var n=t[r],a=0,s=n.length,u;a<s;++a)(u=n[a])&&e.call(u,u.__data__,a,n);return this}i();function vK(e){return function(){this.removeAttribute(e)}}function xK(e){return function(){this.removeAttributeNS(e.space,e.local)}}function _K(e,t){return function(){this.setAttribute(e,t)}}function yK(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function OK(e,t){return function(){var r=t.apply(this,arguments);r==null?this.removeAttribute(e):this.setAttribute(e,r)}}function TK(e,t){return function(){var r=t.apply(this,arguments);r==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,r)}}function $I(e,t){var r=tr(e);if(arguments.length<2){var o=this.node();return r.local?o.getAttributeNS(r.space,r.local):o.getAttribute(r)}return this.each((t==null?r.local?xK:vK:typeof t=="function"?r.local?TK:OK:r.local?yK:_K)(r,t))}i();i();function Tu(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function bK(e){return function(){this.style.removeProperty(e)}}function MK(e,t,r){return function(){this.style.setProperty(e,t,r)}}function PK(e,t,r){return function(){var o=t.apply(this,arguments);o==null?this.style.removeProperty(e):this.style.setProperty(e,o,r)}}function YI(e,t,r){return arguments.length>1?this.each((t==null?bK:typeof t=="function"?PK:MK)(e,t,r??"")):wr(this.node(),e)}function wr(e,t){return e.style.getPropertyValue(t)||Tu(e).getComputedStyle(e,null).getPropertyValue(t)}i();function EK(e){return function(){delete this[e]}}function IK(e,t){return function(){this[e]=t}}function wK(e,t){return function(){var r=t.apply(this,arguments);r==null?delete this[e]:this[e]=r}}function XI(e,t){return arguments.length>1?this.each((t==null?EK:typeof t=="function"?wK:IK)(e,t)):this.node()[e]}i();function KI(e){return e.trim().split(/^|\s+/)}function Vp(e){return e.classList||new QI(e)}function QI(e){this._node=e,this._names=KI(e.getAttribute("class")||"")}QI.prototype={add:function(e){var t=this._names.indexOf(e);t<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function ZI(e,t){for(var r=Vp(e),o=-1,n=t.length;++o<n;)r.add(t[o])}function JI(e,t){for(var r=Vp(e),o=-1,n=t.length;++o<n;)r.remove(t[o])}function RK(e){return function(){ZI(this,e)}}function SK(e){return function(){JI(this,e)}}function AK(e,t){return function(){(t.apply(this,arguments)?ZI:JI)(this,e)}}function ew(e,t){var r=KI(e+"");if(arguments.length<2){for(var o=Vp(this.node()),n=-1,a=r.length;++n<a;)if(!o.contains(r[n]))return!1;return!0}return this.each((typeof t=="function"?AK:t?RK:SK)(r,t))}i();function DK(){this.textContent=""}function NK(e){return function(){this.textContent=e}}function FK(e){return function(){var t=e.apply(this,arguments);this.textContent=t??""}}function tw(e){return arguments.length?this.each(e==null?DK:(typeof e=="function"?FK:NK)(e)):this.node().textContent}i();function BK(){this.innerHTML=""}function kK(e){return function(){this.innerHTML=e}}function LK(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??""}}function rw(e){return arguments.length?this.each(e==null?BK:(typeof e=="function"?LK:kK)(e)):this.node().innerHTML}i();function WK(){this.nextSibling&&this.parentNode.appendChild(this)}function nw(){return this.each(WK)}i();function qK(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function ow(){return this.each(qK)}i();function iw(e){var t=typeof e=="function"?e:xu(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}i();function HK(){return null}function aw(e,t){var r=typeof e=="function"?e:xu(e),o=t==null?HK:typeof t=="function"?t:cn(t);return this.select(function(){return this.insertBefore(r.apply(this,arguments),o.apply(this,arguments)||null)})}i();function VK(){var e=this.parentNode;e&&e.removeChild(this)}function sw(){return this.each(VK)}i();function zK(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function GK(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function uw(e){return this.select(e?GK:zK)}i();function lw(e){return arguments.length?this.property("__data__",e):this.node().__data__}i();function jK(e){return function(t){e.call(this,t,this.__data__)}}function UK(e){return e.trim().split(/^|\s+/).map(function(t){var r="",o=t.indexOf(".");return o>=0&&(r=t.slice(o+1),t=t.slice(0,o)),{type:t,name:r}})}function $K(e){return function(){var t=this.__on;if(t){for(var r=0,o=-1,n=t.length,a;r<n;++r)a=t[r],(!e.type||a.type===e.type)&&a.name===e.name?this.removeEventListener(a.type,a.listener,a.options):t[++o]=a;++o?t.length=o:delete this.__on}}}function YK(e,t,r){return function(){var o=this.__on,n,a=jK(t);if(o){for(var s=0,u=o.length;s<u;++s)if((n=o[s]).type===e.type&&n.name===e.name){this.removeEventListener(n.type,n.listener,n.options),this.addEventListener(n.type,n.listener=a,n.options=r),n.value=t;return}}this.addEventListener(e.type,a,r),n={type:e.type,name:e.name,value:t,listener:a,options:r},o?o.push(n):this.__on=[n]}}function cw(e,t,r){var o=UK(e+""),n,a=o.length,s;if(arguments.length<2){var u=this.node().__on;if(u){for(var f=0,p=u.length,d;f<p;++f)for(n=0,d=u[f];n<a;++n)if((s=o[n]).type===d.type&&s.name===d.name)return d.value}return}for(u=t?YK:$K,n=0;n<a;++n)this.each(u(o[n],t,r));return this}i();function fw(e,t,r){var o=Tu(e),n=o.CustomEvent;typeof n=="function"?n=new n(t,r):(n=o.document.createEvent("Event"),r?(n.initEvent(t,r.bubbles,r.cancelable),n.detail=r.detail):n.initEvent(t,!1,!1)),e.dispatchEvent(n)}function XK(e,t){return function(){return fw(this,e,t)}}function KK(e,t){return function(){return fw(this,e,t.apply(this,arguments))}}function pw(e,t){return this.each((typeof t=="function"?KK:XK)(e,t))}i();function*dw(){for(var e=this._groups,t=0,r=e.length;t<r;++t)for(var o=e[t],n=0,a=o.length,s;n<a;++n)(s=o[n])&&(yield s)}var zp=[null];function be(e,t){this._groups=e,this._parents=t}function mw(){return new be([[document.documentElement]],zp)}function QK(){return this}be.prototype=mw.prototype={constructor:be,select:II,selectAll:wI,selectChild:RI,selectChildren:SI,filter:AI,data:FI,enter:DI,exit:BI,join:kI,merge:LI,selection:QK,order:WI,sort:qI,call:HI,nodes:VI,node:zI,size:GI,empty:jI,each:UI,attr:$I,style:YI,property:XI,classed:ew,text:tw,html:rw,raise:nw,lower:ow,append:iw,insert:aw,remove:sw,clone:uw,datum:lw,on:cw,dispatch:pw,[Symbol.iterator]:dw};var rr=mw;function Co(e){return typeof e=="string"?new be([[document.querySelector(e)]],[document.documentElement]):new be([[e]],zp)}i();i();i();i();i();function bu(e,t,r){e.prototype=t.prototype=r,r.constructor=e}function Gp(e,t){var r=Object.create(e.prototype);for(var o in t)r[o]=t[o];return r}function Ri(){}var Ii=.7,Pu=1/Ii,vo="\\s*([+-]?\\d+)\\s*",wi="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",qt="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",ZK=/^#([0-9a-f]{3,8})$/,JK=new RegExp("^rgb\\("+[vo,vo,vo]+"\\)$"),eQ=new RegExp("^rgb\\("+[qt,qt,qt]+"\\)$"),tQ=new RegExp("^rgba\\("+[vo,vo,vo,wi]+"\\)$"),rQ=new RegExp("^rgba\\("+[qt,qt,qt,wi]+"\\)$"),nQ=new RegExp("^hsl\\("+[wi,qt,qt]+"\\)$"),oQ=new RegExp("^hsla\\("+[wi,qt,qt,wi]+"\\)$"),hw={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};bu(Ri,wt,{copy:function(e){return Object.assign(new this.constructor,this,e)},displayable:function(){return this.rgb().displayable()},hex:gw,formatHex:gw,formatHsl:iQ,formatRgb:Cw,toString:Cw});function gw(){return this.rgb().formatHex()}function iQ(){return Ow(this).formatHsl()}function Cw(){return this.rgb().formatRgb()}function wt(e){var t,r;return e=(e+"").trim().toLowerCase(),(t=ZK.exec(e))?(r=t[1].length,t=parseInt(t[1],16),r===6?vw(t):r===3?new ct(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):r===8?Mu(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):r===4?Mu(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=JK.exec(e))?new ct(t[1],t[2],t[3],1):(t=eQ.exec(e))?new ct(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=tQ.exec(e))?Mu(t[1],t[2],t[3],t[4]):(t=rQ.exec(e))?Mu(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=nQ.exec(e))?yw(t[1],t[2]/100,t[3]/100,1):(t=oQ.exec(e))?yw(t[1],t[2]/100,t[3]/100,t[4]):hw.hasOwnProperty(e)?vw(hw[e]):e==="transparent"?new ct(NaN,NaN,NaN,0):null}function vw(e){return new ct(e>>16&255,e>>8&255,e&255,1)}function Mu(e,t,r,o){return o<=0&&(e=t=r=NaN),new ct(e,t,r,o)}function aQ(e){return e instanceof Ri||(e=wt(e)),e?(e=e.rgb(),new ct(e.r,e.g,e.b,e.opacity)):new ct}function xo(e,t,r,o){return arguments.length===1?aQ(e):new ct(e,t,r,o??1)}function ct(e,t,r,o){this.r=+e,this.g=+t,this.b=+r,this.opacity=+o}bu(ct,xo,Gp(Ri,{brighter:function(e){return e=e==null?Pu:Math.pow(Pu,e),new ct(this.r*e,this.g*e,this.b*e,this.opacity)},darker:function(e){return e=e==null?Ii:Math.pow(Ii,e),new ct(this.r*e,this.g*e,this.b*e,this.opacity)},rgb:function(){return this},displayable:function(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:xw,formatHex:xw,formatRgb:_w,toString:_w}));function xw(){return"#"+jp(this.r)+jp(this.g)+jp(this.b)}function _w(){var e=this.opacity;return e=isNaN(e)?1:Math.max(0,Math.min(1,e)),(e===1?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(e===1?")":", "+e+")")}function jp(e){return e=Math.max(0,Math.min(255,Math.round(e)||0)),(e<16?"0":"")+e.toString(16)}function yw(e,t,r,o){return o<=0?e=t=r=NaN:r<=0||r>=1?e=t=NaN:t<=0&&(e=NaN),new Wt(e,t,r,o)}function Ow(e){if(e instanceof Wt)return new Wt(e.h,e.s,e.l,e.opacity);if(e instanceof Ri||(e=wt(e)),!e)return new Wt;if(e instanceof Wt)return e;e=e.rgb();var t=e.r/255,r=e.g/255,o=e.b/255,n=Math.min(t,r,o),a=Math.max(t,r,o),s=NaN,u=a-n,f=(a+n)/2;return u?(t===a?s=(r-o)/u+(r<o)*6:r===a?s=(o-t)/u+2:s=(t-r)/u+4,u/=f<.5?a+n:2-a-n,s*=60):u=f>0&&f<1?0:s,new Wt(s,u,f,e.opacity)}function Tw(e,t,r,o){return arguments.length===1?Ow(e):new Wt(e,t,r,o??1)}function Wt(e,t,r,o){this.h=+e,this.s=+t,this.l=+r,this.opacity=+o}bu(Wt,Tw,Gp(Ri,{brighter:function(e){return e=e==null?Pu:Math.pow(Pu,e),new Wt(this.h,this.s,this.l*e,this.opacity)},darker:function(e){return e=e==null?Ii:Math.pow(Ii,e),new Wt(this.h,this.s,this.l*e,this.opacity)},rgb:function(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,r=this.l,o=r+(r<.5?r:1-r)*t,n=2*r-o;return new ct(Up(e>=240?e-240:e+120,n,o),Up(e,n,o),Up(e<120?e+240:e-120,n,o),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl:function(){var e=this.opacity;return e=isNaN(e)?1:Math.max(0,Math.min(1,e)),(e===1?"hsl(":"hsla(")+(this.h||0)+", "+(this.s||0)*100+"%, "+(this.l||0)*100+"%"+(e===1?")":", "+e+")")}}));function Up(e,t,r){return(e<60?t+(r-t)*e/60:e<180?r:e<240?t+(r-t)*(240-e)/60:t)*255}i();i();function $p(e,t,r,o,n){var a=e*e,s=a*e;return((1-3*e+3*a-s)*t+(4-6*a+3*s)*r+(1+3*e+3*a-3*s)*o+s*n)/6}function bw(e){var t=e.length-1;return function(r){var o=r<=0?r=0:r>=1?(r=1,t-1):Math.floor(r*t),n=e[o],a=e[o+1],s=o>0?e[o-1]:2*n-a,u=o<t-1?e[o+2]:2*a-n;return $p((r-o/t)*t,s,n,a,u)}}i();function Mw(e){var t=e.length;return function(r){var o=Math.floor(((r%=1)<0?++r:r)*t),n=e[(o+t-1)%t],a=e[o%t],s=e[(o+1)%t],u=e[(o+2)%t];return $p((r-o/t)*t,n,a,s,u)}}i();i();var Si=e=>()=>e;function sQ(e,t){return function(r){return e+r*t}}function uQ(e,t,r){return e=Math.pow(e,r),t=Math.pow(t,r)-e,r=1/r,function(o){return Math.pow(e+o*t,r)}}function Pw(e){return(e=+e)==1?Eu:function(t,r){return r-t?uQ(t,r,e):Si(isNaN(t)?r:t)}}function Eu(e,t){var r=t-e;return r?sQ(e,r):Si(isNaN(e)?t:e)}var fn=function e(t){var r=Pw(t);function o(n,a){var s=r((n=xo(n)).r,(a=xo(a)).r),u=r(n.g,a.g),f=r(n.b,a.b),p=Eu(n.opacity,a.opacity);return function(d){return n.r=s(d),n.g=u(d),n.b=f(d),n.opacity=p(d),n+""}}return o.gamma=e,o}(1);function Ew(e){return function(t){var r=t.length,o=new Array(r),n=new Array(r),a=new Array(r),s,u;for(s=0;s<r;++s)u=xo(t[s]),o[s]=u.r||0,n[s]=u.g||0,a[s]=u.b||0;return o=e(o),n=e(n),a=e(a),u.opacity=1,function(f){return u.r=o(f),u.g=n(f),u.b=a(f),u+""}}}var lQ=Ew(bw),cQ=Ew(Mw);i();i();function Iw(e,t){t||(t=[]);var r=e?Math.min(t.length,e.length):0,o=t.slice(),n;return function(a){for(n=0;n<r;++n)o[n]=e[n]*(1-a)+t[n]*a;return o}}function ww(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Rw(e,t){var r=t?t.length:0,o=e?Math.min(r,e.length):0,n=new Array(o),a=new Array(r),s;for(s=0;s<o;++s)n[s]=pn(e[s],t[s]);for(;s<r;++s)a[s]=t[s];return function(u){for(s=0;s<o;++s)a[s]=n[s](u);return a}}i();function Sw(e,t){var r=new Date;return e=+e,t=+t,function(o){return r.setTime(e*(1-o)+t*o),r}}i();function Fe(e,t){return e=+e,t=+t,function(r){return e*(1-r)+t*r}}i();function Aw(e,t){var r={},o={},n;(e===null||typeof e!="object")&&(e={}),(t===null||typeof t!="object")&&(t={});for(n in t)n in e?r[n]=pn(e[n],t[n]):o[n]=t[n];return function(a){for(n in r)o[n]=r[n](a);return o}}i();var Xp=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Yp=new RegExp(Xp.source,"g");function fQ(e){return function(){return e}}function pQ(e){return function(t){return e(t)+""}}function Ai(e,t){var r=Xp.lastIndex=Yp.lastIndex=0,o,n,a,s=-1,u=[],f=[];for(e=e+"",t=t+"";(o=Xp.exec(e))&&(n=Yp.exec(t));)(a=n.index)>r&&(a=t.slice(r,a),u[s]?u[s]+=a:u[++s]=a),(o=o[0])===(n=n[0])?u[s]?u[s]+=n:u[++s]=n:(u[++s]=null,f.push({i:s,x:Fe(o,n)})),r=Yp.lastIndex;return r<t.length&&(a=t.slice(r),u[s]?u[s]+=a:u[++s]=a),u.length<2?f[0]?pQ(f[0].x):fQ(t):(t=f.length,function(p){for(var d=0,h;d<t;++d)u[(h=f[d]).i]=h.x(p);return u.join("")})}function pn(e,t){var r=typeof t,o;return t==null||r==="boolean"?Si(t):(r==="number"?Fe:r==="string"?(o=wt(t))?(t=o,fn):Ai:t instanceof wt?fn:t instanceof Date?Sw:ww(t)?Iw:Array.isArray(t)?Rw:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?Aw:Fe)(e,t)}i();function Kp(e,t){return e=+e,t=+t,function(r){return Math.round(e*(1-r)+t*r)}}i();i();i();var Dw=180/Math.PI,Iu={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Qp(e,t,r,o,n,a){var s,u,f;return(s=Math.sqrt(e*e+t*t))&&(e/=s,t/=s),(f=e*r+t*o)&&(r-=e*f,o-=t*f),(u=Math.sqrt(r*r+o*o))&&(r/=u,o/=u,f/=u),e*o<t*r&&(e=-e,t=-t,f=-f,s=-s),{translateX:n,translateY:a,rotate:Math.atan2(t,e)*Dw,skewX:Math.atan(f)*Dw,scaleX:s,scaleY:u}}var wu;function Nw(e){let t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return t.isIdentity?Iu:Qp(t.a,t.b,t.c,t.d,t.e,t.f)}function Fw(e){return e==null?Iu:(wu||(wu=document.createElementNS("http://www.w3.org/2000/svg","g")),wu.setAttribute("transform",e),(e=wu.transform.baseVal.consolidate())?(e=e.matrix,Qp(e.a,e.b,e.c,e.d,e.e,e.f)):Iu)}function Bw(e,t,r,o){function n(p){return p.length?p.pop()+" ":""}function a(p,d,h,m,g,C){if(p!==h||d!==m){var x=g.push("translate(",null,t,null,r);C.push({i:x-4,x:Fe(p,h)},{i:x-2,x:Fe(d,m)})}else(h||m)&&g.push("translate("+h+t+m+r)}function s(p,d,h,m){p!==d?(p-d>180?d+=360:d-p>180&&(p+=360),m.push({i:h.push(n(h)+"rotate(",null,o)-2,x:Fe(p,d)})):d&&h.push(n(h)+"rotate("+d+o)}function u(p,d,h,m){p!==d?m.push({i:h.push(n(h)+"skewX(",null,o)-2,x:Fe(p,d)}):d&&h.push(n(h)+"skewX("+d+o)}function f(p,d,h,m,g,C){if(p!==h||d!==m){var x=g.push(n(g)+"scale(",null,",",null,")");C.push({i:x-4,x:Fe(p,h)},{i:x-2,x:Fe(d,m)})}else(h!==1||m!==1)&&g.push(n(g)+"scale("+h+","+m+")")}return function(p,d){var h=[],m=[];return p=e(p),d=e(d),a(p.translateX,p.translateY,d.translateX,d.translateY,h,m),s(p.rotate,d.rotate,h,m),u(p.skewX,d.skewX,h,m),f(p.scaleX,p.scaleY,d.scaleX,d.scaleY,h,m),p=d=null,function(g){for(var C=-1,x=m.length,y;++C<x;)h[(y=m[C]).i]=y.x(g);return h.join("")}}}var Zp=Bw(Nw,"px, ","px)","deg)"),Jp=Bw(Fw,", ",")",")");i();i();i();i();i();i();i();var _o=0,Ni=0,Di=0,Lw=1e3,Ru,Fi,Su=0,dn=0,Au=0,Bi=typeof performance=="object"&&performance.now?performance:Date,Ww=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function Li(){return dn||(Ww(dQ),dn=Bi.now()+Au)}function dQ(){dn=0}function ki(){this._call=this._time=this._next=null}ki.prototype=Du.prototype={constructor:ki,restart:function(e,t,r){if(typeof e!="function")throw new TypeError("callback is not a function");r=(r==null?Li():+r)+(t==null?0:+t),!this._next&&Fi!==this&&(Fi?Fi._next=this:Ru=this,Fi=this),this._call=e,this._time=r,ed()},stop:function(){this._call&&(this._call=null,this._time=1/0,ed())}};function Du(e,t,r){var o=new ki;return o.restart(e,t,r),o}function qw(){Li(),++_o;for(var e=Ru,t;e;)(t=dn-e._time)>=0&&e._call.call(null,t),e=e._next;--_o}function kw(){dn=(Su=Bi.now())+Au,_o=Ni=0;try{qw()}finally{_o=0,hQ(),dn=0}}function mQ(){var e=Bi.now(),t=e-Su;t>Lw&&(Au-=t,Su=e)}function hQ(){for(var e,t=Ru,r,o=1/0;t;)t._call?(o>t._time&&(o=t._time),e=t,t=t._next):(r=t._next,t._next=null,t=e?e._next=r:Ru=r);Fi=e,ed(o)}function ed(e){if(!_o){Ni&&(Ni=clearTimeout(Ni));var t=e-dn;t>24?(e<1/0&&(Ni=setTimeout(kw,e-Bi.now()-Au)),Di&&(Di=clearInterval(Di))):(Di||(Su=Bi.now(),Di=setInterval(mQ,Lw)),_o=1,Ww(kw))}}i();function Nu(e,t,r){var o=new ki;return t=t==null?0:+t,o.restart(n=>{o.stop(),e(n+t)},t,r),o}var gQ=qp("start","end","cancel","interrupt"),CQ=[],Vw=0,td=1,Bu=2,Fu=3,Hw=4,ku=5,Wi=6;function Rr(e,t,r,o,n,a){var s=e.__transition;if(!s)e.__transition={};else if(r in s)return;vQ(e,r,{name:t,index:o,group:n,on:gQ,tween:CQ,time:a.time,delay:a.delay,duration:a.duration,ease:a.ease,timer:null,state:Vw})}function qi(e,t){var r=Se(e,t);if(r.state>Vw)throw new Error("too late; already scheduled");return r}function Be(e,t){var r=Se(e,t);if(r.state>Fu)throw new Error("too late; already running");return r}function Se(e,t){var r=e.__transition;if(!r||!(r=r[t]))throw new Error("transition not found");return r}function vQ(e,t,r){var o=e.__transition,n;o[t]=r,r.timer=Du(a,0,r.time);function a(p){r.state=td,r.timer.restart(s,r.delay,r.time),r.delay<=p&&s(p-r.delay)}function s(p){var d,h,m,g;if(r.state!==td)return f();for(d in o)if(g=o[d],g.name===r.name){if(g.state===Fu)return Nu(s);g.state===Hw?(g.state=Wi,g.timer.stop(),g.on.call("interrupt",e,e.__data__,g.index,g.group),delete o[d]):+d<t&&(g.state=Wi,g.timer.stop(),g.on.call("cancel",e,e.__data__,g.index,g.group),delete o[d])}if(Nu(function(){r.state===Fu&&(r.state=Hw,r.timer.restart(u,r.delay,r.time),u(p))}),r.state=Bu,r.on.call("start",e,e.__data__,r.index,r.group),r.state===Bu){for(r.state=Fu,n=new Array(m=r.tween.length),d=0,h=-1;d<m;++d)(g=r.tween[d].value.call(e,e.__data__,r.index,r.group))&&(n[++h]=g);n.length=h+1}}function u(p){for(var d=p<r.duration?r.ease.call(null,p/r.duration):(r.timer.restart(f),r.state=ku,1),h=-1,m=n.length;++h<m;)n[h].call(e,d);r.state===ku&&(r.on.call("end",e,e.__data__,r.index,r.group),f())}function f(){r.state=Wi,r.timer.stop(),delete o[t];for(var p in o)return;delete e.__transition}}function Hi(e,t){var r=e.__transition,o,n,a=!0,s;if(r){t=t==null?null:t+"";for(s in r){if((o=r[s]).name!==t){a=!1;continue}n=o.state>Bu&&o.state<ku,o.state=Wi,o.timer.stop(),o.on.call(n?"interrupt":"cancel",e,e.__data__,o.index,o.group),delete r[s]}a&&delete e.__transition}}function zw(e){return this.each(function(){Hi(this,e)})}i();i();i();i();function xQ(e,t){var r,o;return function(){var n=Be(this,e),a=n.tween;if(a!==r){o=r=a;for(var s=0,u=o.length;s<u;++s)if(o[s].name===t){o=o.slice(),o.splice(s,1);break}}n.tween=o}}function _Q(e,t,r){var o,n;if(typeof r!="function")throw new Error;return function(){var a=Be(this,e),s=a.tween;if(s!==o){n=(o=s).slice();for(var u={name:t,value:r},f=0,p=n.length;f<p;++f)if(n[f].name===t){n[f]=u;break}f===p&&n.push(u)}a.tween=n}}function Gw(e,t){var r=this._id;if(e+="",arguments.length<2){for(var o=Se(this.node(),r).tween,n=0,a=o.length,s;n<a;++n)if((s=o[n]).name===e)return s.value;return null}return this.each((t==null?xQ:_Q)(r,e,t))}function yo(e,t,r){var o=e._id;return e.each(function(){var n=Be(this,o);(n.value||(n.value={}))[t]=r.apply(this,arguments)}),function(n){return Se(n,o).value[t]}}i();function Lu(e,t){var r;return(typeof t=="number"?Fe:t instanceof wt?fn:(r=wt(t))?(t=r,fn):Ai)(e,t)}function yQ(e){return function(){this.removeAttribute(e)}}function OQ(e){return function(){this.removeAttributeNS(e.space,e.local)}}function TQ(e,t,r){var o,n=r+"",a;return function(){var s=this.getAttribute(e);return s===n?null:s===o?a:a=t(o=s,r)}}function bQ(e,t,r){var o,n=r+"",a;return function(){var s=this.getAttributeNS(e.space,e.local);return s===n?null:s===o?a:a=t(o=s,r)}}function MQ(e,t,r){var o,n,a;return function(){var s,u=r(this),f;return u==null?void this.removeAttribute(e):(s=this.getAttribute(e),f=u+"",s===f?null:s===o&&f===n?a:(n=f,a=t(o=s,u)))}}function PQ(e,t,r){var o,n,a;return function(){var s,u=r(this),f;return u==null?void this.removeAttributeNS(e.space,e.local):(s=this.getAttributeNS(e.space,e.local),f=u+"",s===f?null:s===o&&f===n?a:(n=f,a=t(o=s,u)))}}function jw(e,t){var r=tr(e),o=r==="transform"?Jp:Lu;return this.attrTween(e,typeof t=="function"?(r.local?PQ:MQ)(r,o,yo(this,"attr."+e,t)):t==null?(r.local?OQ:yQ)(r):(r.local?bQ:TQ)(r,o,t))}i();function EQ(e,t){return function(r){this.setAttribute(e,t.call(this,r))}}function IQ(e,t){return function(r){this.setAttributeNS(e.space,e.local,t.call(this,r))}}function wQ(e,t){var r,o;function n(){var a=t.apply(this,arguments);return a!==o&&(r=(o=a)&&IQ(e,a)),r}return n._value=t,n}function RQ(e,t){var r,o;function n(){var a=t.apply(this,arguments);return a!==o&&(r=(o=a)&&EQ(e,a)),r}return n._value=t,n}function Uw(e,t){var r="attr."+e;if(arguments.length<2)return(r=this.tween(r))&&r._value;if(t==null)return this.tween(r,null);if(typeof t!="function")throw new Error;var o=tr(e);return this.tween(r,(o.local?wQ:RQ)(o,t))}i();function SQ(e,t){return function(){qi(this,e).delay=+t.apply(this,arguments)}}function AQ(e,t){return t=+t,function(){qi(this,e).delay=t}}function $w(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?SQ:AQ)(t,e)):Se(this.node(),t).delay}i();function DQ(e,t){return function(){Be(this,e).duration=+t.apply(this,arguments)}}function NQ(e,t){return t=+t,function(){Be(this,e).duration=t}}function Yw(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?DQ:NQ)(t,e)):Se(this.node(),t).duration}i();function FQ(e,t){if(typeof t!="function")throw new Error;return function(){Be(this,e).ease=t}}function Xw(e){var t=this._id;return arguments.length?this.each(FQ(t,e)):Se(this.node(),t).ease}i();function BQ(e,t){return function(){var r=t.apply(this,arguments);if(typeof r!="function")throw new Error;Be(this,e).ease=r}}function Kw(e){if(typeof e!="function")throw new Error;return this.each(BQ(this._id,e))}i();function Qw(e){typeof e!="function"&&(e=Pi(e));for(var t=this._groups,r=t.length,o=new Array(r),n=0;n<r;++n)for(var a=t[n],s=a.length,u=o[n]=[],f,p=0;p<s;++p)(f=a[p])&&e.call(f,f.__data__,p,a)&&u.push(f);return new Ge(o,this._parents,this._name,this._id)}i();function Zw(e){if(e._id!==this._id)throw new Error;for(var t=this._groups,r=e._groups,o=t.length,n=r.length,a=Math.min(o,n),s=new Array(o),u=0;u<a;++u)for(var f=t[u],p=r[u],d=f.length,h=s[u]=new Array(d),m,g=0;g<d;++g)(m=f[g]||p[g])&&(h[g]=m);for(;u<o;++u)s[u]=t[u];return new Ge(s,this._parents,this._name,this._id)}i();function kQ(e){return(e+"").trim().split(/^|\s+/).every(function(t){var r=t.indexOf(".");return r>=0&&(t=t.slice(0,r)),!t||t==="start"})}function LQ(e,t,r){var o,n,a=kQ(t)?qi:Be;return function(){var s=a(this,e),u=s.on;u!==o&&(n=(o=u).copy()).on(t,r),s.on=n}}function Jw(e,t){var r=this._id;return arguments.length<2?Se(this.node(),r).on.on(e):this.each(LQ(r,e,t))}i();function WQ(e){return function(){var t=this.parentNode;for(var r in this.__transition)if(+r!==e)return;t&&t.removeChild(this)}}function eR(){return this.on("end.remove",WQ(this._id))}i();function tR(e){var t=this._name,r=this._id;typeof e!="function"&&(e=cn(e));for(var o=this._groups,n=o.length,a=new Array(n),s=0;s<n;++s)for(var u=o[s],f=u.length,p=a[s]=new Array(f),d,h,m=0;m<f;++m)(d=u[m])&&(h=e.call(d,d.__data__,m,u))&&("__data__"in d&&(h.__data__=d.__data__),p[m]=h,Rr(p[m],t,r,m,p,Se(d,r)));return new Ge(a,this._parents,t,r)}i();function rR(e){var t=this._name,r=this._id;typeof e!="function"&&(e=Mi(e));for(var o=this._groups,n=o.length,a=[],s=[],u=0;u<n;++u)for(var f=o[u],p=f.length,d,h=0;h<p;++h)if(d=f[h]){for(var m=e.call(d,d.__data__,h,f),g,C=Se(d,r),x=0,y=m.length;x<y;++x)(g=m[x])&&Rr(g,t,r,x,m,C);a.push(m),s.push(d)}return new Ge(a,s,t,r)}i();var qQ=rr.prototype.constructor;function nR(){return new qQ(this._groups,this._parents)}i();function HQ(e,t){var r,o,n;return function(){var a=wr(this,e),s=(this.style.removeProperty(e),wr(this,e));return a===s?null:a===r&&s===o?n:n=t(r=a,o=s)}}function oR(e){return function(){this.style.removeProperty(e)}}function VQ(e,t,r){var o,n=r+"",a;return function(){var s=wr(this,e);return s===n?null:s===o?a:a=t(o=s,r)}}function zQ(e,t,r){var o,n,a;return function(){var s=wr(this,e),u=r(this),f=u+"";return u==null&&(f=u=(this.style.removeProperty(e),wr(this,e))),s===f?null:s===o&&f===n?a:(n=f,a=t(o=s,u))}}function GQ(e,t){var r,o,n,a="style."+t,s="end."+a,u;return function(){var f=Be(this,e),p=f.on,d=f.value[a]==null?u||(u=oR(t)):void 0;(p!==r||n!==d)&&(o=(r=p).copy()).on(s,n=d),f.on=o}}function iR(e,t,r){var o=(e+="")=="transform"?Zp:Lu;return t==null?this.styleTween(e,HQ(e,o)).on("end.style."+e,oR(e)):typeof t=="function"?this.styleTween(e,zQ(e,o,yo(this,"style."+e,t))).each(GQ(this._id,e)):this.styleTween(e,VQ(e,o,t),r).on("end.style."+e,null)}i();function jQ(e,t,r){return function(o){this.style.setProperty(e,t.call(this,o),r)}}function UQ(e,t,r){var o,n;function a(){var s=t.apply(this,arguments);return s!==n&&(o=(n=s)&&jQ(e,s,r)),o}return a._value=t,a}function aR(e,t,r){var o="style."+(e+="");if(arguments.length<2)return(o=this.tween(o))&&o._value;if(t==null)return this.tween(o,null);if(typeof t!="function")throw new Error;return this.tween(o,UQ(e,t,r??""))}i();function $Q(e){return function(){this.textContent=e}}function YQ(e){return function(){var t=e(this);this.textContent=t??""}}function sR(e){return this.tween("text",typeof e=="function"?YQ(yo(this,"text",e)):$Q(e==null?"":e+""))}i();function XQ(e){return function(t){this.textContent=e.call(this,t)}}function KQ(e){var t,r;function o(){var n=e.apply(this,arguments);return n!==r&&(t=(r=n)&&XQ(n)),t}return o._value=e,o}function uR(e){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;return this.tween(t,KQ(e))}i();function lR(){for(var e=this._name,t=this._id,r=Wu(),o=this._groups,n=o.length,a=0;a<n;++a)for(var s=o[a],u=s.length,f,p=0;p<u;++p)if(f=s[p]){var d=Se(f,t);Rr(f,e,r,p,s,{time:d.time+d.delay+d.duration,delay:0,duration:d.duration,ease:d.ease})}return new Ge(o,this._parents,e,r)}i();function cR(){var e,t,r=this,o=r._id,n=r.size();return new Promise(function(a,s){var u={value:s},f={value:function(){--n===0&&a()}};r.each(function(){var p=Be(this,o),d=p.on;d!==e&&(t=(e=d).copy(),t._.cancel.push(u),t._.interrupt.push(u),t._.end.push(f)),p.on=t}),n===0&&a()})}var QQ=0;function Ge(e,t,r,o){this._groups=e,this._parents=t,this._name=r,this._id=o}function rd(e){return rr().transition(e)}function Wu(){return++QQ}var mn=rr.prototype;Ge.prototype=rd.prototype={constructor:Ge,select:tR,selectAll:rR,filter:Qw,merge:Zw,selection:nR,transition:lR,call:mn.call,nodes:mn.nodes,node:mn.node,size:mn.size,empty:mn.empty,each:mn.each,on:Jw,attr:jw,attrTween:Uw,style:iR,styleTween:aR,text:sR,textTween:uR,remove:eR,tween:Gw,delay:$w,duration:Yw,ease:Xw,easeVarying:Kw,end:cR,[Symbol.iterator]:mn[Symbol.iterator]};i();i();function qu(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var ZQ={time:null,delay:0,duration:250,ease:qu};function JQ(e,t){for(var r;!(r=e.__transition)||!(r=r[t]);)if(!(e=e.parentNode))throw new Error(`transition ${t} not found`);return r}function fR(e){var t,r;e instanceof Ge?(t=e._id,e=e._name):(t=Wu(),(r=ZQ).time=Li(),e=e==null?null:e+"");for(var o=this._groups,n=o.length,a=0;a<n;++a)for(var s=o[a],u=s.length,f,p=0;p<u;++p)(f=s[p])&&Rr(f,e,t,p,s,r||JQ(f,t));return new Ge(o,this._parents,e,t)}rr.prototype.interrupt=zw;rr.prototype.transition=fR;i();i();i();i();var{abs:p4e,max:d4e,min:m4e}=Math;function pR(e){return[+e[0],+e[1]]}function eZ(e){return[pR(e[0]),pR(e[1])]}var h4e={name:"x",handles:["w","e"].map(nd),input:function(e,t){return e==null?null:[[+e[0],t[0][1]],[+e[1],t[1][1]]]},output:function(e){return e&&[e[0][0],e[1][0]]}},g4e={name:"y",handles:["n","s"].map(nd),input:function(e,t){return e==null?null:[[t[0][0],+e[0]],[t[1][0],+e[1]]]},output:function(e){return e&&[e[0][1],e[1][1]]}},C4e={name:"xy",handles:["n","w","e","s","nw","ne","sw","se"].map(nd),input:function(e){return e==null?null:eZ(e)},output:function(e){return e}};function nd(e){return{type:e}}i();i();var od=Math.PI,id=2*od,hn=1e-6,tZ=id-hn;function ad(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function dR(){return new ad}ad.prototype=dR.prototype={constructor:ad,moveTo:function(e,t){this._+="M"+(this._x0=this._x1=+e)+","+(this._y0=this._y1=+t)},closePath:function(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(e,t){this._+="L"+(this._x1=+e)+","+(this._y1=+t)},quadraticCurveTo:function(e,t,r,o){this._+="Q"+ +e+","+ +t+","+(this._x1=+r)+","+(this._y1=+o)},bezierCurveTo:function(e,t,r,o,n,a){this._+="C"+ +e+","+ +t+","+ +r+","+ +o+","+(this._x1=+n)+","+(this._y1=+a)},arcTo:function(e,t,r,o,n){e=+e,t=+t,r=+r,o=+o,n=+n;var a=this._x1,s=this._y1,u=r-e,f=o-t,p=a-e,d=s-t,h=p*p+d*d;if(n<0)throw new Error("negative radius: "+n);if(this._x1===null)this._+="M"+(this._x1=e)+","+(this._y1=t);else if(h>hn)if(!(Math.abs(d*u-f*p)>hn)||!n)this._+="L"+(this._x1=e)+","+(this._y1=t);else{var m=r-a,g=o-s,C=u*u+f*f,x=m*m+g*g,y=Math.sqrt(C),O=Math.sqrt(h),_=n*Math.tan((od-Math.acos((C+h-x)/(2*y*O)))/2),S=_/O,M=_/y;Math.abs(S-1)>hn&&(this._+="L"+(e+S*p)+","+(t+S*d)),this._+="A"+n+","+n+",0,0,"+ +(d*m>p*g)+","+(this._x1=e+M*u)+","+(this._y1=t+M*f)}},arc:function(e,t,r,o,n,a){e=+e,t=+t,r=+r,a=!!a;var s=r*Math.cos(o),u=r*Math.sin(o),f=e+s,p=t+u,d=1^a,h=a?o-n:n-o;if(r<0)throw new Error("negative radius: "+r);this._x1===null?this._+="M"+f+","+p:(Math.abs(this._x1-f)>hn||Math.abs(this._y1-p)>hn)&&(this._+="L"+f+","+p),r&&(h<0&&(h=h%id+id),h>tZ?this._+="A"+r+","+r+",0,1,"+d+","+(e-s)+","+(t-u)+"A"+r+","+r+",0,1,"+d+","+(this._x1=f)+","+(this._y1=p):h>hn&&(this._+="A"+r+","+r+",0,"+ +(h>=od)+","+d+","+(this._x1=e+r*Math.cos(n))+","+(this._y1=t+r*Math.sin(n))))},rect:function(e,t,r,o){this._+="M"+(this._x0=this._x1=+e)+","+(this._y0=this._y1=+t)+"h"+ +r+"v"+ +o+"h"+-r+"Z"},toString:function(){return this._}};var sd=dR;i();i();i();i();i();function mR(e){return Math.abs(e=Math.round(e))>=1e21?e.toLocaleString("en").replace(/,/g,""):e.toString(10)}function gn(e,t){if((r=(e=t?e.toExponential(t-1):e.toExponential()).indexOf("e"))<0)return null;var r,o=e.slice(0,r);return[o.length>1?o[0]+o.slice(2):o,+e.slice(r+1)]}function Ht(e){return e=gn(Math.abs(e)),e?e[1]:NaN}i();function hR(e,t){return function(r,o){for(var n=r.length,a=[],s=0,u=e[0],f=0;n>0&&u>0&&(f+u+1>o&&(u=Math.max(1,o-f)),a.push(r.substring(n-=u,n+u)),!((f+=u+1)>o));)u=e[s=(s+1)%e.length];return a.reverse().join(t)}}i();function gR(e){return function(t){return t.replace(/[0-9]/g,function(r){return e[+r]})}}i();var rZ=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function Sr(e){if(!(t=rZ.exec(e)))throw new Error("invalid format: "+e);var t;return new Hu({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}Sr.prototype=Hu.prototype;function Hu(e){this.fill=e.fill===void 0?" ":e.fill+"",this.align=e.align===void 0?">":e.align+"",this.sign=e.sign===void 0?"-":e.sign+"",this.symbol=e.symbol===void 0?"":e.symbol+"",this.zero=!!e.zero,this.width=e.width===void 0?void 0:+e.width,this.comma=!!e.comma,this.precision=e.precision===void 0?void 0:+e.precision,this.trim=!!e.trim,this.type=e.type===void 0?"":e.type+""}Hu.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};i();function CR(e){e:for(var t=e.length,r=1,o=-1,n;r<t;++r)switch(e[r]){case".":o=n=r;break;case"0":o===0&&(o=r),n=r;break;default:if(!+e[r])break e;o>0&&(o=0);break}return o>0?e.slice(0,o)+e.slice(n+1):e}i();i();var ud;function vR(e,t){var r=gn(e,t);if(!r)return e+"";var o=r[0],n=r[1],a=n-(ud=Math.max(-8,Math.min(8,Math.floor(n/3)))*3)+1,s=o.length;return a===s?o:a>s?o+new Array(a-s+1).join("0"):a>0?o.slice(0,a)+"."+o.slice(a):"0."+new Array(1-a).join("0")+gn(e,Math.max(0,t+a-1))[0]}i();function ld(e,t){var r=gn(e,t);if(!r)return e+"";var o=r[0],n=r[1];return n<0?"0."+new Array(-n).join("0")+o:o.length>n+1?o.slice(0,n+1)+"."+o.slice(n+1):o+new Array(n-o.length+2).join("0")}var cd={"%":(e,t)=>(e*100).toFixed(t),b:e=>Math.round(e).toString(2),c:e=>e+"",d:mR,e:(e,t)=>e.toExponential(t),f:(e,t)=>e.toFixed(t),g:(e,t)=>e.toPrecision(t),o:e=>Math.round(e).toString(8),p:(e,t)=>ld(e*100,t),r:ld,s:vR,X:e=>Math.round(e).toString(16).toUpperCase(),x:e=>Math.round(e).toString(16)};i();function fd(e){return e}var xR=Array.prototype.map,_R=["y","z","a","f","p","n","\xB5","m","","k","M","G","T","P","E","Z","Y"];function yR(e){var t=e.grouping===void 0||e.thousands===void 0?fd:hR(xR.call(e.grouping,Number),e.thousands+""),r=e.currency===void 0?"":e.currency[0]+"",o=e.currency===void 0?"":e.currency[1]+"",n=e.decimal===void 0?".":e.decimal+"",a=e.numerals===void 0?fd:gR(xR.call(e.numerals,String)),s=e.percent===void 0?"%":e.percent+"",u=e.minus===void 0?"\u2212":e.minus+"",f=e.nan===void 0?"NaN":e.nan+"";function p(h){h=Sr(h);var m=h.fill,g=h.align,C=h.sign,x=h.symbol,y=h.zero,O=h.width,_=h.comma,S=h.precision,M=h.trim,R=h.type;R==="n"?(_=!0,R="g"):cd[R]||(S===void 0&&(S=12),M=!0,R="g"),(y||m==="0"&&g==="=")&&(y=!0,m="0",g="=");var b=x==="$"?r:x==="#"&&/[boxX]/.test(R)?"0"+R.toLowerCase():"",I=x==="$"?o:/[%p]/.test(R)?s:"",T=cd[R],E=/[defgprs%]/.test(R);S=S===void 0?6:/[gprs]/.test(R)?Math.max(1,Math.min(21,S)):Math.max(0,Math.min(20,S));function F(w){var B=b,k=I,$,ue,Z;if(R==="c")k=T(w)+k,w="";else{w=+w;var z=w<0||1/w<0;if(w=isNaN(w)?f:T(Math.abs(w),S),M&&(w=CR(w)),z&&+w==0&&C!=="+"&&(z=!1),B=(z?C==="("?C:u:C==="-"||C==="("?"":C)+B,k=(R==="s"?_R[8+ud/3]:"")+k+(z&&C==="("?")":""),E){for($=-1,ue=w.length;++$<ue;)if(Z=w.charCodeAt($),48>Z||Z>57){k=(Z===46?n+w.slice($+1):w.slice($))+k,w=w.slice(0,$);break}}}_&&!y&&(w=t(w,1/0));var H=B.length+w.length+k.length,L=H<O?new Array(O-H+1).join(m):"";switch(_&&y&&(w=t(L+w,L.length?O-k.length:1/0),L=""),g){case"<":w=B+w+k+L;break;case"=":w=B+L+w+k;break;case"^":w=L.slice(0,H=L.length>>1)+B+w+k+L.slice(H);break;default:w=L+B+w+k;break}return a(w)}return F.toString=function(){return h+""},F}function d(h,m){var g=p((h=Sr(h),h.type="f",h)),C=Math.max(-8,Math.min(8,Math.floor(Ht(m)/3)))*3,x=Math.pow(10,-C),y=_R[8+C/3];return function(O){return g(x*O)+y}}return{format:p,formatPrefix:d}}var Vu,zu,Gu;pd({thousands:",",grouping:[3],currency:["$",""]});function pd(e){return Vu=yR(e),zu=Vu.format,Gu=Vu.formatPrefix,Vu}i();function dd(e){return Math.max(0,-Ht(Math.abs(e)))}i();function md(e,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(Ht(t)/3)))*3-Ht(Math.abs(e)))}i();function hd(e,t){return e=Math.abs(e),t=Math.abs(t)-e,Math.max(0,Ht(t)-Ht(e))+1}i();i();function OR(e,t){switch(arguments.length){case 0:break;case 1:this.range(e);break;default:this.range(t).domain(e);break}return this}i();i();i();function gd(e){return function(){return e}}i();function Cd(e){return+e}var TR=[0,1];function Oo(e){return e}function vd(e,t){return(t-=e=+e)?function(r){return(r-e)/t}:gd(isNaN(t)?NaN:.5)}function nZ(e,t){var r;return e>t&&(r=e,e=t,t=r),function(o){return Math.max(e,Math.min(t,o))}}function oZ(e,t,r){var o=e[0],n=e[1],a=t[0],s=t[1];return n<o?(o=vd(n,o),a=r(s,a)):(o=vd(o,n),a=r(a,s)),function(u){return a(o(u))}}function iZ(e,t,r){var o=Math.min(e.length,t.length)-1,n=new Array(o),a=new Array(o),s=-1;for(e[o]<e[0]&&(e=e.slice().reverse(),t=t.slice().reverse());++s<o;)n[s]=vd(e[s],e[s+1]),a[s]=r(t[s],t[s+1]);return function(u){var f=wp(e,u,1,o)-1;return a[f](n[f](u))}}function bR(e,t){return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown())}function aZ(){var e=TR,t=TR,r=pn,o,n,a,s=Oo,u,f,p;function d(){var m=Math.min(e.length,t.length);return s!==Oo&&(s=nZ(e[0],e[m-1])),u=m>2?iZ:oZ,f=p=null,h}function h(m){return m==null||isNaN(m=+m)?a:(f||(f=u(e.map(o),t,r)))(o(s(m)))}return h.invert=function(m){return s(n((p||(p=u(t,e.map(o),Fe)))(m)))},h.domain=function(m){return arguments.length?(e=Array.from(m,Cd),d()):e.slice()},h.range=function(m){return arguments.length?(t=Array.from(m),d()):t.slice()},h.rangeRound=function(m){return t=Array.from(m),r=Kp,d()},h.clamp=function(m){return arguments.length?(s=m?!0:Oo,d()):s!==Oo},h.interpolate=function(m){return arguments.length?(r=m,d()):r},h.unknown=function(m){return arguments.length?(a=m,h):a},function(m,g){return o=m,n=g,d()}}function xd(){return aZ()(Oo,Oo)}i();function _d(e,t,r,o){var n=Np(e,t,r),a;switch(o=Sr(o??",f"),o.type){case"s":{var s=Math.max(Math.abs(e),Math.abs(t));return o.precision==null&&!isNaN(a=md(n,s))&&(o.precision=a),Gu(o,s)}case"":case"e":case"g":case"p":case"r":{o.precision==null&&!isNaN(a=hd(n,Math.max(Math.abs(e),Math.abs(t))))&&(o.precision=a-(o.type==="e"));break}case"f":case"%":{o.precision==null&&!isNaN(a=dd(n))&&(o.precision=a-(o.type==="%")*2);break}}return zu(o)}function sZ(e){var t=e.domain;return e.ticks=function(r){var o=t();return ln(o[0],o[o.length-1],r??10)},e.tickFormat=function(r,o){var n=t();return _d(n[0],n[n.length-1],r??10,o)},e.nice=function(r){r==null&&(r=10);var o=t(),n=0,a=o.length-1,s=o[n],u=o[a],f,p,d=10;for(u<s&&(p=s,s=u,u=p,p=n,n=a,a=p);d-- >0;){if(p=hu(s,u,r),p===f)return o[n]=s,o[a]=u,t(o);if(p>0)s=Math.floor(s/p)*p,u=Math.ceil(u/p)*p;else if(p<0)s=Math.ceil(s*p)/p,u=Math.floor(u*p)/p;else break;f=p}return e},e}function Ar(){var e=xd();return e.copy=function(){return bR(e,Ar())},OR.apply(e,arguments),sZ(e)}i();i();function Cn(e){return function(){return e}}i();var aHe=Array.prototype.slice;function MR(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}i();function PR(e){this._context=e}PR.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;default:this._context.lineTo(e,t);break}}};function Vi(e){return new PR(e)}i();i();function ER(e){return e[0]}function IR(e){return e[1]}function zi(e,t){var r=Cn(!0),o=null,n=Vi,a=null;e=typeof e=="function"?e:e===void 0?ER:Cn(e),t=typeof t=="function"?t:t===void 0?IR:Cn(t);function s(u){var f,p=(u=MR(u)).length,d,h=!1,m;for(o==null&&(a=n(m=sd())),f=0;f<=p;++f)!(f<p&&r(d=u[f],f,u))===h&&((h=!h)?a.lineStart():a.lineEnd()),h&&a.point(+e(d,f,u),+t(d,f,u));if(m)return a=null,m+""||null}return s.x=function(u){return arguments.length?(e=typeof u=="function"?u:Cn(+u),s):e},s.y=function(u){return arguments.length?(t=typeof u=="function"?u:Cn(+u),s):t},s.defined=function(u){return arguments.length?(r=typeof u=="function"?u:Cn(!!u),s):r},s.curve=function(u){return arguments.length?(n=u,o!=null&&(a=n(o)),s):n},s.context=function(u){return arguments.length?(u==null?o=a=null:a=n(o=u),s):o},s}i();function wR(e,t){this._context=e,this._t=t}wR.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&this._point===2&&this._context.lineTo(this._x,this._y),(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;default:{if(this._t<=0)this._context.lineTo(this._x,t),this._context.lineTo(e,t);else{var r=this._x*(1-this._t)+e*this._t;this._context.lineTo(r,this._y),this._context.lineTo(r,t)}break}}this._x=e,this._y=t}};function Gi(e){return new wR(e,1)}i();i();i();i();i();function vn(e,t,r){this.k=e,this.x=t,this.y=r}vn.prototype={constructor:vn,scale:function(e){return e===1?this:new vn(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new vn(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var yd=new vn(1,0,0);Od.prototype=vn.prototype;function Od(e){for(;!e.__zoom;)if(!(e=e.parentNode))return yd;return e.__zoom}i();U();i();var _e={top:30,right:120,bottom:30,left:50};i();ar();ar();var uZ=0;function P(e,t,r,o,n,a){var s,u,f={};for(u in t)u=="ref"?s=t[u]:f[u]=t[u];var p={type:e,props:f,key:r,ref:s,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--uZ,__source:n,__self:a};if(typeof e=="function"&&(s=e.defaultProps))for(u in s)f[u]===void 0&&(f[u]=s[u]);return j.vnode&&j.vnode(p),p}var Ct=(e,t=0)=>{let r=Math.pow(10,t);return Math.round(e*r)/r};function lZ(e){if(e=Number(e),!Number.isFinite(e))return"--";if(e===0)return"0";let t=e/60,r=e/60/60,o=e*1e3,n=o*1e3,a=n*1e3;return a<10?Ct(a,1)+"ns":a<1e3?Ct(a)+"ns":n<10?Ct(n,1)+"\u03BCs":n<1e3?Ct(n)+"\u03BCs":o<10?Ct(o,1)+"ms":o<1e3?Ct(o)+"ms":e<10?Ct(e,1)+"s":r>1?Ct(r,0)+"h"+Ct(t%60,1)+"m":t>5?Ct(t,0)+"m"+Ct(e%60,1)+"s":Ct(e,0)+"s"}function Td({height:e,xScale:t}){let r=ut(null),o=r.current;return jt(()=>{if(!o)return;let n=ln(t.domain()[0],t.domain()[1],10);Co(o).call(a=>{a.attr("transform",`translate(0,${e-_e.bottom})`).call(Lp(t).tickValues(n).tickPadding(10).tickSize(-e+_e.top+_e.bottom).tickFormat(s=>lZ(s)).tickSizeOuter(0))})},[o,t,e]),P("g",{className:"x axis",ref:r})}i();U();function bd({width:e,yScale:t}){let r=ut(null),o=r.current;return jt(()=>{if(!o)return;let n=ln(t.domain()[0],t.domain()[1],10);Co(o).call(a=>a.attr("transform",`translate(${_e.left},0)`).call(Wp(t).tickValues(n).tickPadding(10).tickSize(-e+_e.right+_e.left-1).tickFormat(s=>s))).call(a=>a.select(".domain").attr("d",(s,u,f)=>Co(f[0]).attr("d")+"z"))},[o,t,e]),P("g",{className:"y axis",ref:r})}i();U();var Md=(e,t,r)=>Math.min(Math.max(e,t),r),RR=$e(({width:e,yScale:t,setCompareRegisterValue:r,compareRegisterValue:o,yExtent:n,name:a},s)=>{let[u,f]=Ze(!1);pa(s,()=>({onMouseUp(){f(!1)},onMouseMove(m,g){if(g.preventDefault(),u){let C=t.invert(m);C=Md(Math.round(C),...n),r(C)}}}));let p=t(Md(o,...n)),d=Pn(()=>{f(!0)},[f]),h=m=>{r(Md(parseFloat(m)||0,...n))};return P(c,{children:[P("line",{className:`OCR ${a}`,x1:_e.left,x2:e-_e.right,y1:p,y2:p}),P("line",{className:`OCRHandle ${a}`,onMouseDown:d,onTouchStart:d,x1:_e.left,x2:e,y1:p,y2:p}),P("g",{transform:`translate(${e-_e.right+10},${p-10})`,children:P("foreignObject",{className:`OCRText ${a}`,style:{width:100,height:30},onMouseDown:d,onTouchStart:d,children:[a,"=",P("input",{style:{width:50,border:0,background:"transparent"},contentEditable:!0,value:o,onChange:m=>h(m.target.value)})]})})]})});RR.displayName="CompareRegisterHandle";var SR=RR;i();function ji({label:e,flagValues:t,t:r,TCNT:o,xScale:n,yScale:a}){return P(c,{children:t.map((s,u)=>s&&P("g",{transform:`translate(${n(r[u])}, ${a(o[u])})`,children:[P("path",{d:zi()([[-3,-5],[0,0],[3,-5],[0,0],[0,-12],[20,-12]])}),P("text",{y:"-20",x:"0",dy:".32em",children:e},u)]},u))})}i();function Ui({xScale:e,yScale:t,data:r,idx:o,name:n,curve:a=Vi}){let u=zi().x(([f,p])=>e(f)).y(([f,p])=>t(p)).curve(a)(r);return P(c,{children:[P("path",{className:`curve-${o}`,d:u||void 0}),n&&P("text",{className:`OCText ${n}`,fill:"currentColor",y:t(0),x:e(0)-_e.left,dy:".32em",dx:"10",children:n})]})}i();var cZ=(e,t)=>t[{OutputA:"OCnA_OutputPort",OutputB:"OCnB_OutputPort",OutputC:"OCnC_OutputPort",OutputD:"OCnD_OutputPort",Input:"",DeadTimeA:"",DeadTimeB:""}[e]],fZ=(e,t)=>t[{OutputA:"CompareOutputModeA",OutputB:"CompareOutputModeB",OutputC:"CompareOutputModeC",OutputD:"CompareOutputModeD",Input:"",DeadTimeA:"",DeadTimeB:""}[e]],AR=(e,t)=>{let r=t.timerNr,o=t.family==="ch32";return{OutputA:o?"CH1CVR":`OCR${r}A`,OutputB:o?"CH2CVR":`OCR${r}B`,OutputC:o?"CH3CVR":`OCR${r}C`,OutputD:o?"CH4CVR":`OCR${r}D`,Input:o?"ATRLR":`ICR${r}`,DeadTimeA:o?"":`DTR${r}L`,DeadTimeB:o?"":`DTR${r}H`}[e]},DR=(e,t)=>t.topValue===AR(e,t),NR=(e,t)=>{let r=t.timerNr,o=t.family==="ch32";return t[{OutputA:o?"CC1IE":`OCIE${r}A`,OutputB:o?"CC2IE":`OCIE${r}B`,OutputC:o?"CC3IE":`OCIE${r}C`,OutputD:o?"CC4IE":`OCIE${r}D`,Input:o?"":`ICIE${r}`,DeadTimeA:o?"":`DTRL${r}`,DeadTimeB:o?"":`DTRH${r}`}[e]]==="1"},FR=(e,t)=>(t[{OutputA:"CompareOutputModeA",OutputB:"CompareOutputModeB",OutputC:"CompareOutputModeC",OutputD:"CompareOutputModeD",Input:"",DeadTimeA:"",DeadTimeB:""}[e]]||"disconnect")!=="disconnect",pZ=(e,t)=>t[{OutputA:"",OutputB:"",OutputC:"",OutputD:"",Input:"",DeadTimeA:"DeadTime",DeadTimeB:"DeadTime"}[e]]==="on",dZ=(e,t)=>DR(e,t)||NR(e,t)||FR(e,t)&&!(e==="OutputA"&&t.DeadTime==="on")||pZ(e,t),mZ=e=>({OutputA:!1,OutputB:!1,OutputC:!1,OutputD:!1,Input:!0,DeadTimeA:!1,DeadTimeB:!1})[e],hZ=e=>({OutputA:!0,OutputB:!0,OutputC:!0,OutputD:!0,Input:!1,DeadTimeA:!1,DeadTimeB:!1})[e],gZ=e=>({OutputA:!1,OutputB:!1,OutputC:!1,OutputD:!1,Input:!1,DeadTimeA:!0,DeadTimeB:!0})[e],CZ=["OutputA","OutputB","OutputC","OutputD","Input","DeadTimeA","DeadTimeB"],ju=(e,t)=>{let r=AR(e,t),o=parseFloat(t[r]||"");return{genericName:e,name:r,value:o,code:`${r} = ${o};`,isInput:mZ(e),isOutput:hZ(e),isDeadTime:gZ(e),isActiveOutput:FR(e,t),isTop:DR(e,t),isInterrupt:NR(e,t),isUsed:dZ(e,t),outputPin:cZ(e,t),outputMode:fZ(e,t)}},xn=e=>CZ.map(t=>ju(t,e));i();i();var P5e=Symbol();function Rt(e,t){let r=null,o=new Map,n=a=>{let s;if(t===void 0)s=o.get(a);else for(let[f,p]of o)if(t(f,a)){s=p;break}if(s!==void 0)if(r?.(s[1],a))n.remove(a);else return s[0];let u=e(a);return o.set(a,[u,Date.now()]),u};return n.remove=a=>{if(t===void 0)o.delete(a);else for(let[s]of o)if(t(s,a)){o.delete(s);break}},n.setShouldRemove=a=>{if(r=a,!!r)for(let[s,u]of o)r(u[1],s)&&o.delete(s)},n}var vZ=Symbol();function xZ(e){let t,r,o={getItem:n=>{var a,s;let u=p=>{if(p=p||"",t!==p){try{r=JSON.parse(p)}catch{return vZ}t=p}return r},f=(s=(a=e())==null?void 0:a.getItem(n))!=null?s:null;return f instanceof Promise?f.then(u):u(f)},setItem:(n,a)=>{var s;return(s=e())==null?void 0:s.setItem(n,JSON.stringify(a))},removeItem:n=>{var a;return(a=e())==null?void 0:a.removeItem(n)}};return typeof window<"u"&&typeof window.addEventListener=="function"&&(o.subscribe=(n,a)=>{let s=u=>{u.key===n&&u.newValue&&a(JSON.parse(u.newValue))};return window.addEventListener("storage",s),()=>{window.removeEventListener("storage",s)}}),o}var E5e=xZ(()=>typeof window<"u"?window.localStorage:void 0);i();U();var _Z=e=>new Promise(t=>setTimeout(t,e)),Pd=!1,kR=kl(async e=>{let t=Object.fromEntries(Object.entries(e).filter(([,o])=>o!==void 0)),r=new URLSearchParams(t).toString();Pd=!0,window.location.replace(`${window.location.pathname}#${r}`),await _Z(0),Pd=!1},50,{leading:!1,trailing:!0,maxWait:100}),BR=()=>{let e=window.location.hash.slice(1);return new URLSearchParams(e)},LR=()=>{let[e,t]=Ze(BR());return ke(()=>{let r=()=>{Pd||t(BR())};return window.addEventListener("hashchange",r),()=>window.removeEventListener("hashchange",r)},[]),Object.fromEntries(e.entries())};i();i();var WR=`//registers													
TCCR0A	TCCR0B	TCCR0C	TIMSK0	DTR0	TIFR0	TCKCSR	PMX0_0	PMX0_1	HDR	DDRC	DDRD	DDRE	DDRF
COM0A1	FOC0A	DSX07	-	DTR0L	OC0A	-	WCE	-	-	DDC0	DDD0	DDE0	DDF0
COM0A0	FOC0B	DSX06	-	-	OC0B	F2XEN	-	C1BF4	-	DDC1	DDD1	DDE1	DDF1
COM0B1	OC0AS	DSX05	-	-	-	TC2XF1	-	C1AF5	HDR5	DDC2	DDD2	DDE2	DDF2
COM0B0	DTEN0	DSX04	-	-	-	TC2XF0	-	C0BF3	HDR4	DDC3	DDD3	DDE3	DDF3
DOC0B	WGM02	-	-	DTR0H	-	-	-	C0AC0	HDR3	DDC4	DDD4	DDE4	DDF4
DOC0A	CS02	-	OCIE0B	-	OCF0B	AFCKS	-	SSB1	HDR2	DDC5	DDD5	DDE5	DDF5
WGM01	CS01	DSX01	OCIE0A	-	OCF0A	TC2XS1	-	TXD6	HDR1	DDC6	DDD6	DDE6	DDF6
WGM00	CS00	DSX00	TOIE0	-	TOV0	TC2XS0	-	RXD5	HDR0	DDC7	DDD7	DDE7	DDF7
													
//constraints													
timerNr	timerBits	counterMax											
0	8	255											
													
WGM0	WGM02	WGM01	WGM00	timerMode	topValue	updateOcrMoment	setTovMoment						
0	0	0	0	Normal	0xFF	immediate	MAX						
1	0	0	1	PCPWM	0xFF	TOP	BOTTOM						
2	0	1	0	CTC	OCR0A	immediate	MAX						
3	0	1	1	FPWM	0xFF	BOTTOM	MAX						
4	1	0	0	-	-	-	-						
5	1	0	1	PCPWM	OCR0A	TOP	BOTTOM						
6	1	1	0	-	-	-	-						
7	1	1	1	FPWM	OCR0A	BOTTOM	TOP						
													
COM0A	COM0A1	COM0A0	timerMode	CompareOutputModeA	WGM02	CompareOutputModeB							
0	0	0	Normal	disconnect	*	*							
1	0	1	Normal	toggle	*	*							
2	1	0	Normal	clear	*	*							
3	1	1	Normal	set	*	*							
0	0	0	CTC	disconnect	*	*							
1	0	1	CTC	toggle	*	*							
2	1	0	CTC	clear	*	*							
3	1	1	CTC	set	*	*							
0	0	0	FPWM	disconnect	*	*							
1	0	1	FPWM	toggle	1	disconnect							
2	1	0	FPWM	clear-on-match, set-at-max	*	*							
3	1	1	FPWM	set-on-match, clear-at-max	*	*							
0	0	0	PCPWM	disconnect	*	*							
1	0	1	PCPWM	toggle	1	disconnect							
2	1	0	PCPWM	clear-up, set-down	*	*							
3	1	1	PCPWM	set-up, clear-down	*	*							
													
COM0B	COM0B1	COM0B0	timerMode	CompareOutputModeB									
0	0	0	Normal	disconnect									
1	0	1	Normal	toggle									
2	1	0	Normal	clear									
3	1	1	Normal	set									
0	0	0	CTC	disconnect									
1	0	1	CTC	toggle									
2	1	0	CTC	clear									
3	1	1	CTC	set									
0	0	0	FPWM	disconnect									
1	0	1	FPWM	-									
2	1	0	FPWM	clear-on-match, set-at-max									
3	1	1	FPWM	set-on-match, clear-at-max									
0	0	0	PCPWM	disconnect									
1	0	1	PCPWM	-									
2	1	0	PCPWM	clear-up, set-down									
3	1	1	PCPWM	set-up, clear-down									
													
CS0	CS02	CS01	CS00	clockPrescalerOrSource	ExternalClockInput								
1	0	0	1	1	N/A								
2	0	1	0	8	N/A								
3	0	1	1	64	N/A								
4	1	0	0	256	N/A								
5	1	0	1	1024	N/A								
6	1	1	0	external clock falling edge	D4								
7	1	1	1	external clock rising edge	D4								
0	0	0	0	disconnect	N/A								
													
OCIE0A	interruptA	interruptVectorCodeA											
0	off	//nocode											
1	on	ISR(TIMER0_COMPA_vect) {\\n    /* on OCR0A match */\\n}											
													
OCIE0B	interruptB	interruptVectorCodeB											
0	off	//nocode											
1	on	ISR(TIMER0_COMPB_vect) {\\n    /* on OCR0B match */\\n}											
													
													
TOIE0	InterruptOnTimerOverflow	interruptVectorCodeOVF											
0	off	//nocode											
1	on	ISR(TIMER0_OVF_vect) {\\n    /* on overflow */\\n}											
													
F2XEN	TC2XS0	clockDoubler	ExternalClockInput										
0	0	off	*										
1	0	off	*										
1	1	on	N/A										
													
C0AC0	OC0AS	WCE	OCnA_OutputPort										
0	0	0	D6										
0	0	1	D6										
0	1	0	E4										
1	0	1	C0										
1	1	1	E4+C0										
													
C0BF3	WCE	OCnB_OutputPort											
0	0	D5											
0	1	D5											
1	1	F3											
													
HDR1	OCnA_OutputPort	OCnA_OutputCurrent											
0	*	12mA											
1	D6	80mA											
													
HDR0	OCnB_OutputPort	OCnB_OutputCurrent											
0	*	12mA											
1	D5	80mA											
													
DTEN0	DeadTime												
0	off												
1	on												
													
timerMode	DTEN0												
Normal	0												
CTC	0												
FPWM	*												
PCPWM	*												
													
DTEN0	COM0A												
0	*												
1	2												
1	3												
													
DTEN0	COM0B												
0	*												
1	2												
1	3												
													
CompareOutputModeA	OCnA_OutputPort	DDD6	DDE4	DDC0									
disconnect	*	0	0	0									
!disconnect	D6	1	*	*									
!disconnect	E4	*	1	*									
!disconnect	C0	*	*	1									
!disconnect	E4+C0	*	1	1									
													
CompareOutputModeB	OCnB_OutputPort	DDD5	DDF3										
disconnect	*	0	0										
!disconnect	D5	1	*										
!disconnect	F3	*	1										
													
DTR0L													
*													
													
DTR0H													
*													
													
OCR0A													
*													
													
OCR0B													
*													`;var qR=`TCCR1A	TCCR1B	TCCR1C	TCCR1D	TIMSK1	DTR1	TIFR1	TCKCSR	PMX0_0	PMX0_1	HDR	DDRB	DDRF
COM1A1	ICNC1	FOC1A	DSX17	-	-	-	-	WCE	-	-	DDB0	DDF0
COM1A0	ICES1	FOC1B	DSX16	-	-	-	F2XEN	-	C1BF4	-	DDB1	DDF1
COM1B1	-	DOC1B	DSX15	ICIE1	-	ICF1	TC2XF1	-	C1AF5	HDR5	DDB2	DDF2
COM1B0	WGM13	DOC1A	DSX14	-	-	-	TC2XF0	-	C0BF3	HDR4	DDB3	DDF3
-	WGM12	DTEN1	-	-	-	-	-	-	C0AC0	HDR3	DDB4	DDF4
-	CS12	-	-	OCIE1A	-	OCF1B	AFCKS	-	SSB1	HDR2	DDB5	DDF5
WGM11	CS11	-	DSX11	OCIE1B	-	OCF1A	TC2XS1	-	TXD6	HDR1	DDB6	DDF6
WGM10	CS10	-	DSX10	TOIE1	-	TOV1	TC2XS0	-	RXD5	HDR0	DDB7	DDF7
												
//CONSTRAINTS												
timerNr	timerBits	counterMax										
1	16	65535										
												
WGM1	WGM13	WGM12	WGM11	WGM10	timerMode	topValue	updateOcrMoment	setTovMoment				
0	0	0	0	0	Normal	0xFFFF	immediate	MAX				
1	0	0	0	1	PCPWM	0x00FF	TOP	BOTTOM				
2	0	0	1	0	PCPWM	0x01FF	TOP	BOTTOM				
3	0	0	1	1	PCPWM	0x03FF	TOP	BOTTOM				
4	0	1	0	0	CTC	OCR1A	immediate	MAX				
5	0	1	0	1	FPWM	0x00FF	BOTTOM	TOP				
6	0	1	1	0	FPWM	0x01FF	BOTTOM	TOP				
7	0	1	1	1	FPWM	0x03FF	BOTTOM	TOP				
8	1	0	0	0	PFCPWM	ICR1	BOTTOM	BOTTOM				
9	1	0	0	1	PFCPWM	OCR1A	BOTTOM	BOTTOM				
10	1	0	1	0	PCPWM	ICR1	TOP	BOTTOM				
11	1	0	1	1	PCPWM	OCR1A	TOP	BOTTOM				
12	1	1	0	0	CTC	ICR1	immediate	MAX				
13	1	1	0	1	reserved	-	-	-				
14	1	1	1	0	FPWM	ICR1	BOTTOM	TOP				
15	1	1	1	1	FPWM	OCR1A	BOTTOM	TOP				
												
COM1A	COM1A1	COM1A0	timerMode	CompareOutputModeA	WGM1	CompareOutputModeB						
0	0	0	Normal	disconnect	*	*						
1	0	1	Normal	toggle	*	*						
2	1	0	Normal	clear	*	*						
3	1	1	Normal	set	*	*						
0	0	0	CTC	disconnect	*	*						
1	0	1	CTC	toggle	*	*						
2	1	0	CTC	clear	*	*						
3	1	1	CTC	set	*	*						
0	0	0	FPWM	disconnect	*	*						
1	0	1	FPWM	toggle	15	disconnect						
2	1	0	FPWM	clear-on-match, set-at-max	*	*						
3	1	1	FPWM	set-on-match, clear-at-max	*	*						
0	0	0	PCPWM	disconnect	*	*						
1	0	1	PCPWM	toggle	11	disconnect						
2	1	0	PCPWM	clear-up, set-down	*	*						
3	1	1	PCPWM	set-up, clear-down	*	*						
0	0	0	PFCPWM	disconnect	*	*						
1	0	1	PFCPWM	toggle	9	disconnect						
2	1	0	PFCPWM	clear-up, set-down	*	*						
3	1	1	PFCPWM	set-up, clear-down	*	*						
												
COM1B	COM1B1	COM1B0	timerMode	CompareOutputModeB								
0	0	0	Normal	disconnect								
1	0	1	Normal	toggle								
2	1	0	Normal	clear								
3	1	1	Normal	set								
0	0	0	CTC	disconnect								
1	0	1	CTC	toggle								
2	1	0	CTC	clear								
3	1	1	CTC	set								
0	0	0	FPWM	disconnect								
1	0	1	FPWM	disconnect								
2	1	0	FPWM	clear-on-match, set-at-max								
3	1	1	FPWM	set-on-match, clear-at-max								
0	0	0	PCPWM	disconnect								
1	0	1	PCPWM	disconnect								
2	1	0	PCPWM	clear-up, set-down								
3	1	1	PCPWM	set-up, clear-down								
0	0	0	PFCPWM	disconnect								
1	0	1	PFCPWM	disconnect								
2	1	0	PFCPWM	clear-up, set-down								
3	1	1	PFCPWM	set-up, clear-down								
												
CS1	CS12	CS11	CS10	clockPrescalerOrSource	ExternalClockInput							
1	0	0	1	1	N/A							
2	0	1	0	8	N/A							
3	0	1	1	64	N/A							
4	1	0	0	256	N/A							
5	1	0	1	1024	N/A							
6	1	1	0	external clock falling edge	D5							
7	1	1	1	external clock rising edge	D5							
0	0	0	0	disconnect	N/A							
												
OCIE1A	interruptA	interruptVectorCodeA										
0	off	//nocode										
1	on	ISR(TIMER1_COMPA_vect) {\\n    /* on OCR1A match */\\n}										
												
OCIE1B	interruptB	interruptVectorCodeB										
0	off	//nocode										
1	on	ISR(TIMER1_COMPB_vect) {\\n    /* on OCR1B match */\\n}										
												
TOIE1	InterruptOnTimerOverflow	interruptVectorCodeOVF										
0	off	//nocode										
1	on	ISR(TIMER1_OVF_vect) {\\n    /* on overflow */\\n}										
												
ICIE1	InterruptOnInputCapture	interruptVectorCaptureCode										
0	off	//nocode										
1	on	ISR(TIMER1_CAPT_vect) {\\n    /* on input capture */\\n}										
												
ICNC1	InputCaptureNoiseSupression											
0	off											
1	on											
												
ICES1	InputCaptureEdgeSelect											
0	falling											
1	rising											
												
F2XEN	TC2XS1	clockDoubler	ExternalClockInput									
0	0	off	*									
1	0	off	*									
1	1	on	N/A									
												
C1BF4	WCE	OCnB_OutputPort										
0	0	B2										
0	1	B2										
1	1	F4										
												
C1AF5	WCE	OCnA_OutputPort										
0	0	B1										
0	1	B1										
1	1	F5										
												
HDR4	OCnB_OutputPort	OCnB_OutputCurrent										
0	*	12mA										
1	F4	80mA										
												
HDR5	OCnA_OutputPort	OCnA_OutputCurrent										
0	*	12mA										
1	F5	80mA										
												
DTEN1	DeadTime											
0	off											
1	on											
												
timerMode	DTEN1											
Normal	0											
CTC	0											
FPWM	*											
PCPWM	*											
PFCPWM	*											
												
DTEN1	COM1A											
0	*											
1	2											
1	3											
												
DTEN1	COM1B											
0	*											
1	2											
1	3											
												
CompareOutputModeA	OCnA_OutputPort	DDB1	DDF5									
disconnect	*	0	0									
!disconnect	B1	1	*									
!disconnect	F5	*	1									
												
CompareOutputModeB	OCnB_OutputPort	DDB2	DDF4									
disconnect	*	0	0									
!disconnect	B2	1	*									
!disconnect	F4	*	1									
												
DTR1L												
*												
												
DTR1H												
*												
												
ICR1												
*												
												
OCR1A												
*												
												
OCR1B												
*												
`;var HR=`//REGISTERS									
TCCR2A	TCCR2B	TIMSK2	TIFR2	PMX0_0	PMX1	HDR	DDRB	DDRD	DDRF
COM2A1	FOC2A	-	-	WCE	-	-	DDB0	DDD0	DDF0
COM2A0	FOC2B	-	-	-	-	-	DDB1	DDD1	DDF1
COM2B1	-	-	-	-	-	HDR5	DDB2	DDD2	DDF2
COM2B0	-	-	-	-	-	HDR4	DDB3	DDD3	DDF3
-	WGM22	-	-	-	-	HDR3	DDB4	DDD4	DDF4
-	CS22	OCIE2B	OCF2B	-	C3AC	HDR2	DDB5	DDD5	DDF5
WGM21	CS21	OCIE2A	OCF2A	-	C2BF7	HDR1	DDB6	DDD6	DDF6
WGM20	CS20	TOIE2	TOV2	-	C2AF6	HDR0	DDB7	DDD7	DDF7
									
//CONSTRAINTS									
timerNr	timerBits	counterMax							
2	8	255							
									
WGM2	WGM22	WGM21	WGM20	timerMode	topValue	updateOcrMoment	setTovMoment		
0	0	0	0	Normal	0xFF	immediate	MAX		
1	0	0	1	PCPWM	0xFF	TOP	BOTTOM		
2	0	1	0	CTC	OCR2A	immediate	MAX		
3	0	1	1	FPWM	0xFF	BOTTOM	MAX		
4	1	0	0	-	-	-	-		
5	1	0	1	PCPWM	OCR2A	TOP	BOTTOM		
6	1	1	0	-	-	-	-		
7	1	1	1	FPWM	OCR2A	BOTTOM	TOP		
									
COM2A	COM2A1	COM2A0	timerMode	CompareOutputModeA					
0	0	0	Normal	disconnect					
1	0	1	Normal	toggle					
2	1	0	Normal	clear					
3	1	1	Normal	set					
0	0	0	CTC	disconnect					
1	0	1	CTC	toggle					
2	1	0	CTC	clear					
3	1	1	CTC	set					
0	0	0	FPWM	disconnect					
1	0	1	FPWM	-					
2	1	0	FPWM	clear-on-match, set-at-max					
3	1	1	FPWM	set-on-match, clear-at-max					
0	0	0	PCPWM	disconnect					
1	0	1	PCPWM	-					
2	1	0	PCPWM	clear-up, set-down					
3	1	1	PCPWM	set-up, clear-down					
									
COM2B	COM2B1	COM2B0	timerMode	CompareOutputModeB					
0	0	0	Normal	disconnect					
1	0	1	Normal	toggle					
2	1	0	Normal	clear					
3	1	1	Normal	set					
0	0	0	CTC	disconnect					
1	0	1	CTC	toggle					
2	1	0	CTC	clear					
3	1	1	CTC	set					
0	0	0	FPWM	disconnect					
1	0	1	FPWM	-					
2	1	0	FPWM	clear-on-match, set-at-max					
3	1	1	FPWM	set-on-match, clear-at-max					
0	0	0	PCPWM	disconnect					
1	0	1	PCPWM	-					
2	1	0	PCPWM	clear-up, set-down					
3	1	1	PCPWM	set-up, clear-down					
									
CS2	CS22	CS21	CS20	clockPrescalerOrSource					
1	0	0	1	1					
2	0	1	0	8					
3	0	1	1	32					
4	1	0	0	64					
5	1	0	1	128					
6	1	1	0	256					
7	1	1	1	1024					
0	0	0	0	disconnect					
									
OCIE2A	interruptA	interruptVectorCodeA							
0	off	//nocode							
1	on	ISR(TIMER2_COMPA_vect) {\\n    /* on OCR2A match */\\n}							
									
OCIE2B	interruptB	interruptVectorCodeB							
0	off	//nocode							
1	on	ISR(TIMER2_COMPB_vect) {\\n    /* on OCR2B match */\\n}							
									
									
TOIE2	InterruptOnTimerOverflow	interruptVectorCodeOVF							
0	off	//nocode							
1	on	ISR(TIMER2_OVF_vect) {\\n    /* on overflow */\\n}							
									
C2AF6	OCnA_OutputPort	WCE							
0	B3	0							
0	B3	1							
1	F6	1							
									
C2BF7	OCnB_OutputPort	WCE							
0	D3	0							
0	D3	1							
1	F7	1							
									
CompareOutputModeA	OCnA_OutputPort	DDB3	DDF6						
disconnect	*	0	0						
!disconnect	B3	1	*						
!disconnect	F6	*	1						
									
CompareOutputModeB	OCnB_OutputPort	DDD3	DDF7						
disconnect	*	0	0						
!disconnect	D3	1	*						
!disconnect	F7	*	1						
									
OCR2A									
*									
									
OCR2B									
*									`;var VR=`// REGISTERS													
TCCR3A	TCCR3B	TCCR3C	TCCR3D	DTR3	TIMSK3	TIFR3	PMX0_0	PMX0_1	PMX1	PMX2	HDR	DDRF	
COM3A1	ICNC3	FOC3A	DSX37	-	-	-	WCE	-	-	-	-	DDF0	
COM3A0	ICES3	FOC3B	DSX36	-	-	-	-	C1BF4	-	-	-	DDF1	
COM3B1	-	DOC3B	DSX35	-	ICIE3	ICF3	-	C1AF5	-	-	HDR5	DDF2	
COM3B0	WGM33	DOC3A	DSX34	-	-	-	-	C0BF3	-	-	HDR4	DDF3	
COM3C1	WGM32	DTEN3	-	-	OCIE3C	OCF3C	-	C0AC0	-	-	HDR3	DDF4	
COM3C0	CS32	-	-	-	OCIE3B	OCF3B	-	SSB1	C3AC	-	HDR2	DDF5	
WGM31	CS31	DOC3C	DSX31	-	OCIE3A	OCF3A	-	TXD6	C2BF7	-	HDR1	DDF6	
WGM30	CS30	FOC3C	DSX30	-	TOIE3	TOV3	-	RXD5	C2AF6	-	HDR0	DDF7	
													
// CONSTRAINTS													
timerNr	timerBits	counterMax											
3	16	65535											
													
WGM3	WGM33	WGM32	WGM31	WGM30	timerMode	topValue	updateOcrMoment	setTovMoment					
0	0	0	0	0	Normal	0xFFFF	immediate	MAX					
1	0	0	0	1	PCPWM	0x00FF	TOP	BOTTOM					
2	0	0	1	0	PCPWM	0x01FF	TOP	BOTTOM					
3	0	0	1	1	PCPWM	0x03FF	TOP	BOTTOM					
4	0	1	0	0	CTC	OCR3A	immediate	MAX					
5	0	1	0	1	FPWM	0x00FF	BOTTOM	TOP					
6	0	1	1	0	FPWM	0x01FF	BOTTOM	TOP					
7	0	1	1	1	FPWM	0x03FF	BOTTOM	TOP					
8	1	0	0	0	PFCPWM	ICR3	BOTTOM	BOTTOM					
9	1	0	0	1	PFCPWM	OCR3A	BOTTOM	BOTTOM					
10	1	0	1	0	PCPWM	ICR3	TOP	BOTTOM					
11	1	0	1	1	PCPWM	OCR3A	TOP	BOTTOM					
12	1	1	0	0	CTC	ICR3	immediate	MAX					
13	1	1	0	1	-	-	-	-					
14	1	1	1	0	FPWM	ICR3	BOTTOM	TOP					
15	1	1	1	1	FPWM	OCR3A	BOTTOM	TOP					
													
COM3A	COM3A1	COM3A0	timerMode	CompareOutputModeA	WGM3	CompareOutputModeB	CompareOutputModeC						
0	0	0	Normal	disconnect	*	*	*						
1	0	1	Normal	toggle	*	*	*						
2	1	0	Normal	clear	*	*	*						
3	1	1	Normal	set	*	*	*						
0	0	0	CTC	disconnect	*	*	*						
1	0	1	CTC	toggle	*	*	*						
2	1	0	CTC	clear	*	*	*						
3	1	1	CTC	set	*	*	*						
0	0	0	FPWM	disconnect	*	*	*						
1	0	1	FPWM	toggle	15	disconnect	disconnect						
2	1	0	FPWM	clear-on-match, set-at-max	*	*	*						
3	1	1	FPWM	set-on-match, clear-at-max	*	*	*						
0	0	0	PCPWM	disconnect	*	*	*						
1	0	1	PCPWM	toggle	11	disconnect	disconnect						
2	1	0	PCPWM	clear-up, set-down	*	*	*						
3	1	1	PCPWM	set-up, clear-down	*	*	*						
0	0	0	PFCPWM	disconnect	*	*	*						
1	0	1	PFCPWM	toggle	9	disconnect	disconnect						
2	1	0	PFCPWM	clear-up, set-down	*	*	*						
3	1	1	PFCPWM	set-up, clear-down	*	*	*						
													
COM3B	COM3B1	COM3B0	timerMode	CompareOutputModeB									
0	0	0	Normal	disconnect									
1	0	1	Normal	toggle									
2	1	0	Normal	clear									
3	1	1	Normal	set									
0	0	0	CTC	disconnect									
1	0	1	CTC	toggle									
2	1	0	CTC	clear									
3	1	1	CTC	set									
0	0	0	FPWM	disconnect									
1	0	1	FPWM	disconnect									
2	1	0	FPWM	clear-on-match, set-at-max									
3	1	1	FPWM	set-on-match, clear-at-max									
0	0	0	PCPWM	disconnect									
1	0	1	PCPWM	disconnect									
2	1	0	PCPWM	clear-up, set-down									
3	1	1	PCPWM	set-up, clear-down									
0	0	0	PFCPWM	disconnect									
1	0	1	PFCPWM	disconnect									
2	1	0	PFCPWM	clear-up, set-down									
3	1	1	PFCPWM	set-up, clear-down									
													
COM3C	COM3C1	COM3C0	timerMode	CompareOutputModeC									
0	0	0	Normal	disconnect									
1	0	1	Normal	toggle									
2	1	0	Normal	clear									
3	1	1	Normal	set									
0	0	0	CTC	disconnect									
1	0	1	CTC	toggle									
2	1	0	CTC	clear									
3	1	1	CTC	set									
0	0	0	FPWM	disconnect									
1	0	1	FPWM	disconnect									
2	1	0	FPWM	clear-on-match, set-at-max									
3	1	1	FPWM	set-on-match, clear-at-max									
0	0	0	PCPWM	disconnect									
1	0	1	PCPWM	disconnect									
2	1	0	PCPWM	clear-up, set-down									
3	1	1	PCPWM	set-up, clear-down									
0	0	0	PFCPWM	disconnect									
1	0	1	PFCPWM	disconnect									
2	1	0	PFCPWM	clear-up, set-down									
3	1	1	PFCPWM	set-up, clear-down									
													
CS3	CS32	CS31	CS30	clockPrescalerOrSource	ExternalClockInput								
1	0	0	1	1	N/A								
2	0	1	0	8	N/A								
3	0	1	1	64	N/A								
4	1	0	0	256	N/A								
5	1	0	1	1024	N/A								
6	1	1	0	external clock falling edge	PF6								
7	1	1	1	external clock rising edge	PF6								
0	0	0	0	disconnect	N/A								
													
InterruptCommonSignature													
ISR(TIMER3_vect)													
													
OCIE3A	interruptA	CompareOutputModeA	interruptVectorCodeA										
0	off	*	//nocode										
1	on	!disconnect	if (TIFR3 & (1 << OCF3A)) {\\n    TIFR3 = 1 << OCF3A;\\n    /* on OCR3A match */\\n}										
													
OCIE3B	interruptB	CompareOutputModeB	interruptVectorCodeB										
0	off	*	//nocode										
1	on	!disconnect	if (TIFR3 & (1 << OCF3B)) {\\n    TIFR3 = 1 << OCF3B;\\n    /* on OCR3B match */\\n}										
													
OCIE3C	interruptC	CompareOutputModeC	interruptVectorCodeC										
0	off	*	//nocode										
1	on	!disconnect	if (TIFR3 & (1 << OCF3C)) {\\n    TIFR3 = 1 << OCF3C;\\n    /* on OCR3C match */\\n}										
													
TOIE3	InterruptOnTimerOverflow	interruptVectorCodeOVF											
0	off	//nocode											
1	on	if (TIFR3 & (1 << TOV3)) {\\n    TIFR3 = 1 << TOV3;\\n    /* on overflow */\\n}											
													
ICIE3	InterruptOnInputCapture	interruptVectorCaptureCode											
0	off	//nocode											
1	on	if (TIFR3 & (1 << ICF3)) {\\n    TIFR3 = 1 << ICF3;\\n    /* on capture */\\n}											
													
ICNC3	InputCaptureNoiseSupression												
0	off												
1	on												
													
C3AC	WCE	OCnA_OutputPort											
0	0	F1											
0	1	F1											
1	1	AC0P(D6)											
													
OCnB_OutputPort													
F2													
													
OCnC_OutputPort													
F3													
													
HDR2	OCnA_OutputPort	OCnA_OutputCurrent											
0	*	12mA											
1	F1	80mA											
													
HDR3	OCnB_OutputPort	OCnB_OutputCurrent											
0	*	12mA											
1	F2	80mA											
													
OCnC_OutputCurrent													
12mA													
													
DTEN3	DeadTime												
0	off												
1	on												
													
timerMode	DTEN3												
Normal	0												
CTC	0												
FPWM	*												
PCPWM	*												
PFCPWM	*												
													
DTEN3	COM3A												
0	*												
1	2												
1	3												
													
DTEN3	COM3B												
0	*												
1	2												
1	3												
													
CompareOutputModeA	OCnA_OutputPort	DDF1											
disconnect	*	0											
!disconnect	F1	1											
!disconnect	AC0P(D6)	*											
													
CompareOutputModeB	OCnB_OutputPort	DDF2											
disconnect	*	0											
!disconnect	F2	1											
													
CompareOutputModeC	OCnC_OutputPort	DDF3											
disconnect	*	0											
!disconnect	F3	1											
													
													
DTR3L													
*													
													
DTR3H													
*													
													
ICR3													
*													
													
OCR3A													
*													
													
OCR3B													
*													
													
OCR3C													
*													`;var zR=[ze(WR),ze(qR),ze(HR),ze(VR)];zR.forEach(e=>e.configs.push(Ir(`
FCPU	FCPU_UI
32000000	32Mhz
16000000	16Mhz
8000000	8Mhz
4000000	4Mhz
2000000	2Mhz
1000000	1Mhz
`)));var GR=zR;i();var Uu=`//REGISTERS							
TCCR0A	TCCR0B	TCCR0C	TIMSK0	TIFR0	DDRD		
COM0A1	FOC0A	DSX07	-	OC0A	DDD0		
COM0A0	FOC0B	DSX06	-	OC0B	DDD1		
COM0B1	-	DSX05	-	-	DDD2		
COM0B0	-	DSX04	-	-	DDD3		
-	WGM02	-	-	-	DDD4		
-	CS02	-	OCIE0B	OCF0B	DDD5		
WGM01	CS01	DSX01	OCIE0A	OCF0A	DDD6		
WGM00	CS00	DSX00	TOIE0	TOV0	DDD7		
							
//CONSTRAINTS							
timerNr	timerBits	counterMax					
0	8	255					
							
WGM0	WGM02	WGM01	WGM00	timerMode	topValue	updateOcrMoment	setTovMoment
0	0	0	0	Normal	0xFF	immediate	MAX
1	0	0	1	PCPWM	0xFF	TOP	BOTTOM
2	0	1	0	CTC	OCR0A	immediate	MAX
3	0	1	1	FPWM	0xFF	BOTTOM	MAX
4	1	0	0	-	-	-	-
5	1	0	1	PCPWM	OCR0A	TOP	BOTTOM
6	1	1	0	-	-	-	-
7	1	1	1	FPWM	OCR0A	BOTTOM	TOP
							
COM0A	COM0A1	COM0A0	timerMode	CompareOutputModeA	WGM02	CompareOutputModeB	
0	0	0	Normal	disconnect	*	*	
1	0	1	Normal	toggle	*	*	
2	1	0	Normal	clear	*	*	
3	1	1	Normal	set	*	*	
0	0	0	CTC	disconnect	*	*	
1	0	1	CTC	toggle	*	*	
2	1	0	CTC	clear	*	*	
3	1	1	CTC	set	*	*	
0	0	0	FPWM	disconnect	*	*	
1	0	1	FPWM	toggle	1	disconnect	
2	1	0	FPWM	clear-on-match, set-at-max	*	*	
3	1	1	FPWM	set-on-match, clear-at-max	*	*	
0	0	0	PCPWM	disconnect	*	*	
1	0	1	PCPWM	toggle	1	disconnect	
2	1	0	PCPWM	clear-up, set-down	*	*	
3	1	1	PCPWM	set-up, clear-down	*	*	
							
COM0B	COM0B1	COM0B0	timerMode	CompareOutputModeB			
0	0	0	Normal	disconnect			
1	0	1	Normal	toggle			
2	1	0	Normal	clear			
3	1	1	Normal	set			
0	0	0	CTC	disconnect			
1	0	1	CTC	toggle			
2	1	0	CTC	clear			
3	1	1	CTC	set			
0	0	0	FPWM	disconnect			
1	0	1	FPWM	-			
2	1	0	FPWM	clear-on-match, set-at-max			
3	1	1	FPWM	set-on-match, clear-at-max			
0	0	0	PCPWM	disconnect			
1	0	1	PCPWM	-			
2	1	0	PCPWM	clear-up, set-down			
3	1	1	PCPWM	set-up, clear-down			
							
CS0	CS02	CS01	CS00	clockPrescalerOrSource	ExternalClockInput		
1	0	0	1	1	N/A		
2	0	1	0	8	N/A		
3	0	1	1	64	N/A		
4	1	0	0	256	N/A		
5	1	0	1	1024	N/A		
6	1	1	0	external clock falling edge	D4		
7	1	1	1	external clock rising edge	D4		
0	0	0	0	disconnect	N/A		
							
OCIE0A	interruptA	interruptVectorCodeA					
0	off	//nocode					
1	on	ISR(TIMER0_COMPA_vect) {\\n    /* on OCR0A match */\\n}					
							
OCIE0B	interruptB	interruptVectorCodeB					
0	off	//nocode					
1	on	ISR(TIMER0_COMPB_vect) {\\n    /* on OCR0B match */\\n}					
							
							
TOIE0	InterruptOnTimerOverflow	interruptVectorCodeOVF					
0	off	//nocode					
1	on	ISR(TIMER0_OVF_vect) {\\n    /* on overflow */\\n}					
							
OCnA_OutputPort							
D6							
							
OCnB_OutputPort							
D5							
							
CompareOutputModeA	OCnA_OutputPort	DDD6					
disconnect	*	0					
!disconnect	D6	1					
							
CompareOutputModeB	OCnB_OutputPort	DDD5					
disconnect	*	0					
!disconnect	D5	1					
							
OCR0A							
*							
							
OCR0B							
*							`;var $u=`//REGISTERS								
TCCR1A	TCCR1B	TCCR1C	TIMSK1	DTR1	TIFR1	DDRB		
COM1A1	ICNC1	FOC1A	-	-	-	DDB0		
COM1A0	ICES1	FOC1B	-	-	-	DDB1		
COM1B1	-	-	ICIE1	-	ICF1	DDB2		
COM1B0	WGM13	-	-	-	-	DDB3		
-	WGM12	-	-	-	-	DDB4		
-	CS12	-	OCIE1A	-	OCF1B	DDB5		
WGM11	CS11	-	OCIE1B	-	OCF1A	DDB6		
WGM10	CS10	-	TOIE1	-	TOV1	DDB7		
								
//CONSTRAINTS								
timerNr	timerBits	counterMax						
1	16	65535						
								
WGM1	WGM13	WGM12	WGM11	WGM10	timerMode	topValue	updateOcrMoment	setTovMoment
0	0	0	0	0	Normal	0xFFFF	immediate	MAX
1	0	0	0	1	PCPWM	0x00FF	TOP	BOTTOM
2	0	0	1	0	PCPWM	0x01FF	TOP	BOTTOM
3	0	0	1	1	PCPWM	0x03FF	TOP	BOTTOM
4	0	1	0	0	CTC	OCR1A	immediate	MAX
5	0	1	0	1	FPWM	0x00FF	BOTTOM	TOP
6	0	1	1	0	FPWM	0x01FF	BOTTOM	TOP
7	0	1	1	1	FPWM	0x03FF	BOTTOM	TOP
8	1	0	0	0	PFCPWM	ICR1	BOTTOM	BOTTOM
9	1	0	0	1	PFCPWM	OCR1A	BOTTOM	BOTTOM
10	1	0	1	0	PCPWM	ICR1	TOP	BOTTOM
11	1	0	1	1	PCPWM	OCR1A	TOP	BOTTOM
12	1	1	0	0	CTC	ICR1	immediate	MAX
13	1	1	0	1	reserved	-	-	-
14	1	1	1	0	FPWM	ICR1	BOTTOM	TOP
15	1	1	1	1	FPWM	OCR1A	BOTTOM	TOP
								
COM1A	COM1A1	COM1A0	timerMode	CompareOutputModeA	WGM1	CompareOutputModeB		
0	0	0	Normal	disconnect	*	*		
1	0	1	Normal	toggle	*	*		
2	1	0	Normal	clear	*	*		
3	1	1	Normal	set	*	*		
0	0	0	CTC	disconnect	*	*		
1	0	1	CTC	toggle	*	*		
2	1	0	CTC	clear	*	*		
3	1	1	CTC	set	*	*		
0	0	0	FPWM	disconnect	*	*		
1	0	1	FPWM	toggle	15	disconnect		
2	1	0	FPWM	clear-on-match, set-at-max	*	*		
3	1	1	FPWM	set-on-match, clear-at-max	*	*		
0	0	0	PCPWM	disconnect	*	*		
1	0	1	PCPWM	toggle	11	disconnect		
2	1	0	PCPWM	clear-up, set-down	*	*		
3	1	1	PCPWM	set-up, clear-down	*	*		
0	0	0	PFCPWM	disconnect	*	*		
1	0	1	PFCPWM	toggle	9	disconnect		
2	1	0	PFCPWM	clear-up, set-down	*	*		
3	1	1	PFCPWM	set-up, clear-down	*	*		
								
COM1B	COM1B1	COM1B0	timerMode	CompareOutputModeB				
0	0	0	Normal	disconnect				
1	0	1	Normal	toggle				
2	1	0	Normal	clear				
3	1	1	Normal	set				
0	0	0	CTC	disconnect				
1	0	1	CTC	toggle				
2	1	0	CTC	clear				
3	1	1	CTC	set				
0	0	0	FPWM	disconnect				
1	0	1	FPWM	disconnect				
2	1	0	FPWM	clear-on-match, set-at-max				
3	1	1	FPWM	set-on-match, clear-at-max				
0	0	0	PCPWM	disconnect				
1	0	1	PCPWM	disconnect				
2	1	0	PCPWM	clear-up, set-down				
3	1	1	PCPWM	set-up, clear-down				
0	0	0	PFCPWM	disconnect				
1	0	1	PFCPWM	disconnect				
2	1	0	PFCPWM	clear-up, set-down				
3	1	1	PFCPWM	set-up, clear-down				
								
CS1	CS12	CS11	CS10	clockPrescalerOrSource	ExternalClockInput			
1	0	0	1	1	N/A			
2	0	1	0	8	N/A			
3	0	1	1	64	N/A			
4	1	0	0	256	N/A			
5	1	0	1	1024	N/A			
6	1	1	0	external clock falling edge	D5			
7	1	1	1	external clock rising edge	D5			
0	0	0	0	disconnect	N/A			
								
OCIE1A	interruptA	interruptVectorCodeA						
0	off	//nocode						
1	on	ISR(TIMER1_COMPA_vect) {\\n    /* on OCR1A match */\\n}						
								
OCIE1B	interruptB	interruptVectorCodeB						
0	off	//nocode						
1	on	ISR(TIMER1_COMPB_vect) {\\n    /* on OCR1B match */\\n}						
								
								
TOIE1	InterruptOnTimerOverflow	interruptVectorCodeOVF						
0	off	//nocode						
1	on	ISR(TIMER1_OVF_vect) {\\n    /* on overflow */\\n}						
								
ICIE1	InterruptOnInputCapture	interruptVectorCaptureCode						
0	off	//nocode						
1	on	ISR(TIMER1_CAPT_vect) {\\n    /* on input capture */\\n}						
								
ICNC1	InputCaptureNoiseSupression							
0	off							
1	on							
								
ICES1	InputCaptureEdgeSelect							
0	falling							
1	rising							
								
OCnB_OutputPort								
B2								
								
OCnA_OutputPort								
B1								
								
CompareOutputModeA	OCnA_OutputPort	DDB1						
disconnect	*	0						
!disconnect	B1	1						
								
CompareOutputModeB	OCnB_OutputPort	DDB2						
disconnect	*	0						
!disconnect	B2	1						
								
ICR1								
*								
								
OCR1A								
*								
								
OCR1B								
*								
`;var Yu=`//REGISTERS							
TCCR2A	TCCR2B	TIMSK2	TIFR2	DDRB	DDRD		
COM2A1	FOC2A	-	-	DDB0	DDD0		
COM2A0	FOC2B	-	-	DDB1	DDD1		
COM2B1	-	-	-	DDB2	DDD2		
COM2B0	-	-	-	DDB3	DDD3		
-	WGM22	-	-	DDB4	DDD4		
-	CS22	OCIE2B	OCF2B	DDB5	DDD5		
WGM21	CS21	OCIE2A	OCF2A	DDB6	DDD6		
WGM20	CS20	TOIE2	TOV2	DDB7	DDD7		
							
//CONSTRAINTS							
timerNr	timerBits	counterMax					
2	8	255					
							
WGM2	WGM22	WGM21	WGM20	timerMode	topValue	updateOcrMoment	setTovMoment
0	0	0	0	Normal	0xFF	immediate	MAX
1	0	0	1	PCPWM	0xFF	TOP	BOTTOM
2	0	1	0	CTC	OCR2A	immediate	MAX
3	0	1	1	FPWM	0xFF	BOTTOM	MAX
4	1	0	0	-	-	-	-
5	1	0	1	PCPWM	OCR2A	TOP	BOTTOM
6	1	1	0	-	-	-	-
7	1	1	1	FPWM	OCR2A	BOTTOM	TOP
							
COM2A	COM2A1	COM2A0	timerMode	CompareOutputModeA	WGM22	CompareOutputModeB	
0	0	0	Normal	disconnect	*	*	
1	0	1	Normal	toggle	*	*	
2	1	0	Normal	clear	*	*	
3	1	1	Normal	set	*	*	
0	0	0	CTC	disconnect	*	*	
1	0	1	CTC	toggle	*	*	
2	1	0	CTC	clear	*	*	
3	1	1	CTC	set	*	*	
0	0	0	FPWM	disconnect	*	*	
1	0	1	FPWM	toggle	1	disconnect	
2	1	0	FPWM	clear-on-match, set-at-max	*	*	
3	1	1	FPWM	set-on-match, clear-at-max	*	*	
0	0	0	PCPWM	disconnect	*	*	
1	0	1	PCPWM	toggle	1	disconnect	
2	1	0	PCPWM	clear-up, set-down	*	*	
3	1	1	PCPWM	set-up, clear-down	*	*	
							
COM2B	COM2B1	COM2B0	timerMode	CompareOutputModeB			
0	0	0	Normal	disconnect			
1	0	1	Normal	toggle			
2	1	0	Normal	clear			
3	1	1	Normal	set			
0	0	0	CTC	disconnect			
1	0	1	CTC	toggle			
2	1	0	CTC	clear			
3	1	1	CTC	set			
0	0	0	FPWM	disconnect			
1	0	1	FPWM	-			
2	1	0	FPWM	clear-on-match, set-at-max			
3	1	1	FPWM	set-on-match, clear-at-max			
0	0	0	PCPWM	disconnect			
1	0	1	PCPWM	-			
2	1	0	PCPWM	clear-up, set-down			
3	1	1	PCPWM	set-up, clear-down			
							
CS2	CS22	CS21	CS20	clockPrescalerOrSource			
1	0	0	1	1			
2	0	1	0	8			
3	0	1	1	32			
4	1	0	0	64			
5	1	0	1	128			
6	1	1	0	256			
7	1	1	1	1024			
0	0	0	0	disconnect			
							
OCIE2A	interruptA	interruptVectorCodeA					
0	off	//nocode					
1	on	ISR(TIMER2_COMPA_vect) {\\n    /* on OCR2A match */\\n}					
							
OCIE2B	interruptB	interruptVectorCodeB					
0	off	//nocode					
1	on	ISR(TIMER2_COMPB_vect) {\\n    /* on OCR2B match */\\n}					
							
							
TOIE2	InterruptOnTimerOverflow	interruptVectorCodeOVF					
0	off	//nocode					
1	on	ISR(TIMER2_OVF_vect) {\\n    /* on overflow */\\n}					
							
OCnA_OutputPort							
B3							
							
OCnB_OutputPort							
D3							
							
CompareOutputModeA	OCnA_OutputPort	DDB3					
disconnect	*	0					
!disconnect	B3	1					
							
CompareOutputModeB	OCnB_OutputPort	DDD3					
disconnect	*	0					
!disconnect	D3	1					
							
OCR2A							
*							
							
OCR2B							
*							`;var jR=[ze(Uu),ze($u),ze(Yu)];jR.forEach(e=>e.configs.push(Ir(`
FCPU	FCPU_UI
16000000	16Mhz
20000000	20Mhz
8000000	8Mhz
4000000	4Mhz
2000000	2Mhz
1000000	1Mhz
`)));var UR=jR;i();var $R=`//REGISTERS								
TCCR3A	TCCR3B	TCCR3C	TIMSK3	DTR3	TIFR3	DDRD		
COM3A1	ICNC3	FOC3A	-	-	-	DDD0		
COM3A0	ICES3	FOC3B	-	-	-	DDD1		
COM3B1	-	-	ICIE3	-	ICF3	DDD2		
COM3B0	WGM33	-	-	-	-	DDD3		
-	WGM32	-	-	-	-	DDD4		
-	CS32	-	OCIE3A	-	OCF3B	DDD5		
WGM31	CS31	-	OCIE3B	-	OCF3A	DDD6		
WGM30	CS30	-	TOIE3	-	TOV3	DDD7		
								
//CONSTRAINTS								
timerNr	timerBits	counterMax						
3	16	65535						
								
WGM3	WGM33	WGM32	WGM31	WGM30	timerMode	topValue	updateOcrMoment	setTovMoment
0	0	0	0	0	Normal	0xFFFF	immediate	MAX
1	0	0	0	1	PCPWM	0x00FF	TOP	BOTTOM
2	0	0	1	0	PCPWM	0x01FF	TOP	BOTTOM
3	0	0	1	1	PCPWM	0x03FF	TOP	BOTTOM
4	0	1	0	0	CTC	OCR3A	immediate	MAX
5	0	1	0	1	FPWM	0x00FF	BOTTOM	TOP
6	0	1	1	0	FPWM	0x01FF	BOTTOM	TOP
7	0	1	1	1	FPWM	0x03FF	BOTTOM	TOP
8	1	0	0	0	PFCPWM	ICR3	BOTTOM	BOTTOM
9	1	0	0	1	PFCPWM	OCR3A	BOTTOM	BOTTOM
10	1	0	1	0	PCPWM	ICR3	TOP	BOTTOM
11	1	0	1	1	PCPWM	OCR3A	TOP	BOTTOM
12	1	1	0	0	CTC	ICR3	immediate	MAX
13	1	1	0	1	reserved	-	-	-
14	1	1	1	0	FPWM	ICR3	BOTTOM	TOP
15	1	1	1	1	FPWM	OCR3A	BOTTOM	TOP
								
COM3A	COM3A1	COM3A0	timerMode	CompareOutputModeA	WGM3	CompareOutputModeB		
0	0	0	Normal	disconnect	*	*		
1	0	1	Normal	toggle	*	*		
2	1	0	Normal	clear	*	*		
3	1	1	Normal	set	*	*		
0	0	0	CTC	disconnect	*	*		
1	0	1	CTC	toggle	*	*		
2	1	0	CTC	clear	*	*		
3	1	1	CTC	set	*	*		
0	0	0	FPWM	disconnect	*	*		
1	0	1	FPWM	toggle	15	disconnect		
2	1	0	FPWM	clear-on-match, set-at-max	*	*		
3	1	1	FPWM	set-on-match, clear-at-max	*	*		
0	0	0	PCPWM	disconnect	*	*		
1	0	1	PCPWM	toggle	11	disconnect		
2	1	0	PCPWM	clear-up, set-down	*	*		
3	1	1	PCPWM	set-up, clear-down	*	*		
0	0	0	PFCPWM	disconnect	*	*		
1	0	1	PFCPWM	toggle	9	disconnect		
2	1	0	PFCPWM	clear-up, set-down	*	*		
3	1	1	PFCPWM	set-up, clear-down	*	*		
								
COM3B	COM3B1	COM3B0	timerMode	CompareOutputModeB				
0	0	0	Normal	disconnect				
1	0	1	Normal	toggle				
2	1	0	Normal	clear				
3	1	1	Normal	set				
0	0	0	CTC	disconnect				
1	0	1	CTC	toggle				
2	1	0	CTC	clear				
3	1	1	CTC	set				
0	0	0	FPWM	disconnect				
1	0	1	FPWM	disconnect				
2	1	0	FPWM	clear-on-match, set-at-max				
3	1	1	FPWM	set-on-match, clear-at-max				
0	0	0	PCPWM	disconnect				
1	0	1	PCPWM	disconnect				
2	1	0	PCPWM	clear-up, set-down				
3	1	1	PCPWM	set-up, clear-down				
0	0	0	PFCPWM	disconnect				
1	0	1	PFCPWM	disconnect				
2	1	0	PFCPWM	clear-up, set-down				
3	1	1	PFCPWM	set-up, clear-down				
								
CS3	CS32	CS31	CS30	clockPrescalerOrSource	ExternalClockInput			
1	0	0	1	1	N/A			
2	0	1	0	8	N/A			
3	0	1	1	64	N/A			
4	1	0	0	256	N/A			
5	1	0	1	1024	N/A			
6	1	1	0	external clock falling edge	E3			
7	1	1	1	external clock rising edge	E3			
0	0	0	0	disconnect	N/A			
								
OCIE3A	interruptA	interruptVectorCodeA						
0	off	//nocode						
1	on	ISR(TIMER3_COMPA_vect) {\\n    /* on OCR3A match */\\n}						
								
OCIE3B	interruptB	interruptVectorCodeB						
0	off	//nocode						
1	on	ISR(TIMER3_COMPB_vect) {\\n    /* on OCR3B match */\\n}						
								
								
TOIE3	InterruptOnTimerOverflow	interruptVectorCodeOVF						
0	off	//nocode						
1	on	ISR(TIMER3_OVF_vect) {\\n    /* on overflow */\\n}						
								
ICIE3	InterruptOnInputCapture	interruptVectorCaptureCode						
0	off	//nocode						
1	on	ISR(TIMER3_CAPT_vect) {\\n    /* on input capture */\\n}						
								
ICNC3	InputCaptureNoiseSupression							
0	off							
1	on							
								
ICES3	InputCaptureEdgeSelect							
0	falling							
1	rising							
								
OCnB_OutputPort								
D2								
								
OCnA_OutputPort								
D0								
								
CompareOutputModeA	OCnA_OutputPort	DDD0						
disconnect	*	0						
!disconnect	D0	1						
								
CompareOutputModeB	OCnB_OutputPort	DDD2						
disconnect	*	0						
!disconnect	D2	1						
								
ICR3								
*								

OCR3A								
*								
								
OCR3B								
*								`;var YR=`//REGISTERS								
TCCR4A	TCCR4B	TCCR4C	TIMSK4	DTR4	TIFR4	DDRD		
COM4A1	ICNC4	FOC4A	-	-	-	DDD0		
COM4A0	ICES4	FOC4B	-	-	-	DDD1		
COM4B1	-	-	ICIE4	-	ICF4	DDD2		
COM4B0	WGM43	-	-	-	-	DDD3		
-	WGM42	-	-	-	-	DDD4		
-	CS42	-	OCIE4A	-	OCF4B	DDD5		
WGM41	CS41	-	OCIE4B	-	OCF4A	DDD6		
WGM40	CS40	-	TOIE4	-	TOV4	DDD7		
								
//CONSTRAINTS								
timerNr	timerBits	counterMax						
4	16	65535						
								
WGM4	WGM43	WGM42	WGM41	WGM40	timerMode	topValue	updateOcrMoment	setTovMoment
0	0	0	0	0	Normal	0xFFFF	immediate	MAX
1	0	0	0	1	PCPWM	0x00FF	TOP	BOTTOM
2	0	0	1	0	PCPWM	0x01FF	TOP	BOTTOM
3	0	0	1	1	PCPWM	0x03FF	TOP	BOTTOM
4	0	1	0	0	CTC	OCR4A	immediate	MAX
5	0	1	0	1	FPWM	0x00FF	BOTTOM	TOP
6	0	1	1	0	FPWM	0x01FF	BOTTOM	TOP
7	0	1	1	1	FPWM	0x03FF	BOTTOM	TOP
8	1	0	0	0	PFCPWM	ICR4	BOTTOM	BOTTOM
9	1	0	0	1	PFCPWM	OCR4A	BOTTOM	BOTTOM
10	1	0	1	0	PCPWM	ICR4	TOP	BOTTOM
11	1	0	1	1	PCPWM	OCR4A	TOP	BOTTOM
12	1	1	0	0	CTC	ICR4	immediate	MAX
13	1	1	0	1	reserved	-	-	-
14	1	1	1	0	FPWM	ICR4	BOTTOM	TOP
15	1	1	1	1	FPWM	OCR4A	BOTTOM	TOP
								
COM4A	COM4A1	COM4A0	timerMode	CompareOutputModeA	WGM4	CompareOutputModeB		
0	0	0	Normal	disconnect	*	*		
1	0	1	Normal	toggle	*	*		
2	1	0	Normal	clear	*	*		
3	1	1	Normal	set	*	*		
0	0	0	CTC	disconnect	*	*		
1	0	1	CTC	toggle	*	*		
2	1	0	CTC	clear	*	*		
3	1	1	CTC	set	*	*		
0	0	0	FPWM	disconnect	*	*		
1	0	1	FPWM	toggle	15	disconnect		
2	1	0	FPWM	clear-on-match, set-at-max	*	*		
3	1	1	FPWM	set-on-match, clear-at-max	*	*		
0	0	0	PCPWM	disconnect	*	*		
1	0	1	PCPWM	toggle	11	disconnect		
2	1	0	PCPWM	clear-up, set-down	*	*		
3	1	1	PCPWM	set-up, clear-down	*	*		
0	0	0	PFCPWM	disconnect	*	*		
1	0	1	PFCPWM	toggle	9	disconnect		
2	1	0	PFCPWM	clear-up, set-down	*	*		
3	1	1	PFCPWM	set-up, clear-down	*	*		
								
COM4B	COM4B1	COM4B0	timerMode	CompareOutputModeB				
0	0	0	Normal	disconnect				
1	0	1	Normal	toggle				
2	1	0	Normal	clear				
3	1	1	Normal	set				
0	0	0	CTC	disconnect				
1	0	1	CTC	toggle				
2	1	0	CTC	clear				
3	1	1	CTC	set				
0	0	0	FPWM	disconnect				
1	0	1	FPWM	disconnect				
2	1	0	FPWM	clear-on-match, set-at-max				
3	1	1	FPWM	set-on-match, clear-at-max				
0	0	0	PCPWM	disconnect				
1	0	1	PCPWM	disconnect				
2	1	0	PCPWM	clear-up, set-down				
3	1	1	PCPWM	set-up, clear-down				
0	0	0	PFCPWM	disconnect				
1	0	1	PFCPWM	disconnect				
2	1	0	PFCPWM	clear-up, set-down				
3	1	1	PFCPWM	set-up, clear-down				
								
CS4	CS42	CS41	CS40	clockPrescalerOrSource	ExternalClockInput			
1	0	0	1	1	N/A			
2	0	1	0	8	N/A			
3	0	1	1	64	N/A			
4	1	0	0	256	N/A			
5	1	0	1	1024	N/A			
6	1	1	0	external clock falling edge	E1			
7	1	1	1	external clock rising edge	E1			
0	0	0	0	disconnect	N/A			
								
OCIE4A	interruptA	interruptVectorCodeA						
0	off	//nocode						
1	on	ISR(TIMER4_COMPA_vect) {\\n    /* on OCR4A match */\\n}						
								
OCIE4B	interruptB	interruptVectorCodeB						
0	off	//nocode						
1	on	ISR(TIMER4_COMPB_vect) {\\n    /* on OCR4B match */\\n}						
								
								
TOIE4	InterruptOnTimerOverflow	interruptVectorCodeOVF						
0	off	//nocode						
1	on	ISR(TIMER4_OVF_vect) {\\n    /* on overflow */\\n}						
								
ICIE4	InterruptOnInputCapture	interruptVectorCaptureCode						
0	off	//nocode						
1	on	ISR(TIMER4_CAPT_vect) {\\n    /* on input capture */\\n}						
								
ICNC4	InputCaptureNoiseSupression							
0	off							
1	on							
								
ICES4	InputCaptureEdgeSelect							
0	falling							
1	rising							
								
OCnB_OutputPort								
D2								
								
OCnA_OutputPort								
D1								
								
CompareOutputModeA	OCnA_OutputPort	DDD1						
disconnect	*	0						
!disconnect	D1	1						
								
CompareOutputModeB	OCnB_OutputPort	DDD2						
disconnect	*	0						
!disconnect	D2	1						
								
ICR4								
*								

OCR4A								
*								
								
OCR4B								
*								`;var XR=[ze(Uu),ze($u),ze(Yu),ze($R),ze(YR)];XR.forEach(e=>e.configs.push(Ir(`
FCPU	FCPU_UI
16000000	16Mhz
20000000	20Mhz
8000000	8Mhz
4000000	4Mhz
2000000	2Mhz
1000000	1Mhz
`)));var KR=XR;i();var QR=`//REGISTERS (CH32V003 TIM1, ADVANCED: 4 channels, complementary CH1N-3N, dead-time, break, MOE).
//Cells are FIELD:bitposition. CEN/MOE emitted last by scaffold; AFIO->PCFR1 remap by scaffold.
TIM1->CTLR1	TIM1->DMAINTENR	TIM1->CHCTLR1	TIM1->CHCTLR2	TIM1->CCER	TIM1->BDTR	TIM1->PSC	TIM1->ATRLR	TIM1->CH1CVR	TIM1->CH2CVR	TIM1->CH3CVR	TIM1->CH4CVR
ARPE=TIM_ARPE	CC1IE=TIM_CC1IE	OC1M=TIM_OC1M_	OC3M=TIM_OC3M_	CC1E=TIM_CC1E	DTG=	PSC=	ATRLR=	CH1CVR=	CH2CVR=	CH3CVR=	CH4CVR=
CMS=TIM_CMS_	CC2IE=TIM_CC2IE	OC1PE=TIM_OC1PE	OC3PE=TIM_OC3PE	CC1P=TIM_CC1P	BKE=TIM_BKE	-	-	-	-	-	-
DIR=TIM_DIR	CC3IE=TIM_CC3IE	CC1S=TIM_CC1S_	CC3S=TIM_CC3S_	CC1NE=TIM_CC1NE	BKP=TIM_BKP	-	-	-	-	-	-
OPM=TIM_OPM	CC4IE=TIM_CC4IE	OC2M=TIM_OC2M_	OC4M=TIM_OC4M_	CC1NP=TIM_CC1NP	-	-	-	-	-	-	-
-	-	OC2PE=TIM_OC2PE	OC4PE=TIM_OC4PE	CC2E=TIM_CC2E	-	-	-	-	-	-	-
-	-	CC2S=TIM_CC2S_	CC4S=TIM_CC4S_	CC2P=TIM_CC2P	-	-	-	-	-	-	-
-	-	-	-	CC2NE=TIM_CC2NE	-	-	-	-	-	-	-
-	-	-	-	CC2NP=TIM_CC2NP	-	-	-	-	-	-	-
-	-	-	-	CC3E=TIM_CC3E	-	-	-	-	-	-	-
-	-	-	-	CC3P=TIM_CC3P	-	-	-	-	-	-	-
-	-	-	-	CC3NE=TIM_CC3NE	-	-	-	-	-	-	-
-	-	-	-	CC3NP=TIM_CC3NP	-	-	-	-	-	-	-
-	-	-	-	CC4E=TIM_CC4E	-	-	-	-	-	-	-
-	-	-	-	CC4P=TIM_CC4P	-	-	-	-	-	-	-

//CONSTRAINTS
family
ch32

timerNr	timerBits	counterMax
1	16	65535

nvicIRQ
TIM1_CC_IRQn

timerMode	CMS	DIR	ARPE	topValue	updateOcrMoment	setTovMoment
edge-aligned up	0	0	1	ATRLR	TOP	TOP
edge-aligned down	0	1	1	ATRLR	TOP	BOTTOM
center-aligned	1	0	1	ATRLR	TOP	BOTTOM

TIM1remap	OCnA_OutputPort	OCnA_NOutputPort	OCnB_OutputPort	OCnB_NOutputPort	OCnC_OutputPort	OCnC_NOutputPort	OCnD_OutputPort	PCFR1
no remap	D2	D0	A1	A2	C3	D1	C4	none
partial remap 1	C6	C3	C7	C4	C0	D1	D3	AFIO_PCFR1_TIM1_REMAP_PARTIALREMAP1
full remap	C4	C3	C7	D2	C5	C6	D2	AFIO_PCFR1_TIM1_REMAP_FULLREMAP

CompareOutputModeA	OC1M	OC1PE	CC1S	CC1E
disconnect	0	0	0	0
PWM mode 1	6	1	0	1
PWM mode 2	7	1	0	1
toggle	3	0	0	1
set	5	0	0	1
clear	4	0	0	1

CompareOutputModeB	OC2M	OC2PE	CC2S	CC2E
disconnect	0	0	0	0
PWM mode 1	6	1	0	1
PWM mode 2	7	1	0	1
toggle	3	0	0	1
set	5	0	0	1
clear	4	0	0	1

CompareOutputModeC	OC3M	OC3PE	CC3S	CC3E
disconnect	0	0	0	0
PWM mode 1	6	1	0	1
PWM mode 2	7	1	0	1
toggle	3	0	0	1
set	5	0	0	1
clear	4	0	0	1

CompareOutputModeD	OC4M	OC4PE	CC4S	CC4E
disconnect	0	0	0	0
PWM mode 1	6	1	0	1
PWM mode 2	7	1	0	1
toggle	3	0	0	1
set	5	0	0	1
clear	4	0	0	1

OutputPolarityA	CC1P
active high	0
active low	1

OutputPolarityB	CC2P
active high	0
active low	1

OutputPolarityC	CC3P
active high	0
active low	1

OutputPolarityD	CC4P
active high	0
active low	1

ComplementaryA	CC1NE
off	0
on	1

ComplementaryPolarityA	CC1NP
active high	0
active low	1

ComplementaryB	CC2NE
off	0
on	1

ComplementaryPolarityB	CC2NP
active high	0
active low	1

ComplementaryC	CC3NE
off	0
on	1

ComplementaryPolarityC	CC3NP
active high	0
active low	1

OnePulse	OPM
off	0
on	1

BreakInput	BKE
off	0
on	1

BreakPolarity	BKP
active low	0
active high	1

InterruptCommonSignature
void TIM1_CC_IRQHandler(void) __attribute__((interrupt))

interruptA	CC1IE	interruptVectorCodeA
off	0	//nocode
on	1	if (TIM1->INTFR & TIM_CC1IF) {\\n  TIM1->INTFR &= ~TIM_CC1IF;\\n  /* on CH1 compare match */\\n}

interruptB	CC2IE	interruptVectorCodeB
off	0	//nocode
on	1	if (TIM1->INTFR & TIM_CC2IF) {\\n  TIM1->INTFR &= ~TIM_CC2IF;\\n  /* on CH2 compare match */\\n}

interruptC	CC3IE	interruptVectorCodeC
off	0	//nocode
on	1	if (TIM1->INTFR & TIM_CC3IF) {\\n  TIM1->INTFR &= ~TIM_CC3IF;\\n  /* on CH3 compare match */\\n}

interruptD	CC4IE	interruptVectorCodeD
off	0	//nocode
on	1	if (TIM1->INTFR & TIM_CC4IF) {\\n  TIM1->INTFR &= ~TIM_CC4IF;\\n  /* on CH4 compare match */\\n}

DeadTime	DTG
off	0
8 ticks	8
16 ticks	16
32 ticks	32
64 ticks	64
127 ticks	127

PSC
*

ATRLR
*

CH1CVR
*

CH2CVR
*

CH3CVR
*

CH4CVR
*
`;var ZR=`//REGISTERS (CH32V003 TIM2, general-purpose, 4 channels). Cells are FIELD:bitposition.
//CEN emitted last by scaffold; AFIO->PCFR1 remap emitted by scaffold.
TIM2->CTLR1	TIM2->DMAINTENR	TIM2->CHCTLR1	TIM2->CHCTLR2	TIM2->CCER	TIM2->PSC	TIM2->ATRLR	TIM2->CH1CVR	TIM2->CH2CVR	TIM2->CH3CVR	TIM2->CH4CVR
ARPE=TIM_ARPE	CC1IE=TIM_CC1IE	OC1M=TIM_OC1M_	OC3M=TIM_OC3M_	CC1E=TIM_CC1E	PSC=	ATRLR=	CH1CVR=	CH2CVR=	CH3CVR=	CH4CVR=
CMS=TIM_CMS_	CC2IE=TIM_CC2IE	OC1PE=TIM_OC1PE	OC3PE=TIM_OC3PE	CC1P=TIM_CC1P	-	-	-	-	-	-
DIR=TIM_DIR	CC3IE=TIM_CC3IE	CC1S=TIM_CC1S_	CC3S=TIM_CC3S_	CC2E=TIM_CC2E	-	-	-	-	-	-
OPM=TIM_OPM	CC4IE=TIM_CC4IE	OC2M=TIM_OC2M_	OC4M=TIM_OC4M_	CC2P=TIM_CC2P	-	-	-	-	-	-
-	-	OC2PE=TIM_OC2PE	OC4PE=TIM_OC4PE	CC3E=TIM_CC3E	-	-	-	-	-	-
-	-	CC2S=TIM_CC2S_	CC4S=TIM_CC4S_	CC3P=TIM_CC3P	-	-	-	-	-	-
-	-	-	-	CC4E=TIM_CC4E	-	-	-	-	-	-
-	-	-	-	CC4P=TIM_CC4P	-	-	-	-	-	-

//CONSTRAINTS
family
ch32

timerNr	timerBits	counterMax
2	16	65535

nvicIRQ
TIM2_IRQn

timerMode	CMS	DIR	ARPE	topValue	updateOcrMoment	setTovMoment
edge-aligned up	0	0	1	ATRLR	TOP	TOP
edge-aligned down	0	1	1	ATRLR	TOP	BOTTOM
center-aligned	1	0	1	ATRLR	TOP	BOTTOM

TIM2remap	OCnA_OutputPort	OCnB_OutputPort	OCnC_OutputPort	OCnD_OutputPort	PCFR1
no remap	D4	D3	C0	D7	none
partial remap 1	C5	C2	D2	C1	AFIO_PCFR1_TIM2_REMAP_PARTIALREMAP1
partial remap 2	C1	D3	C0	D7	AFIO_PCFR1_TIM2_REMAP_PARTIALREMAP2
full remap	C1	C7	D6	D5	AFIO_PCFR1_TIM2_REMAP_FULLREMAP

CompareOutputModeA	OC1M	OC1PE	CC1S	CC1E
disconnect	0	0	0	0
PWM mode 1	6	1	0	1
PWM mode 2	7	1	0	1
toggle	3	0	0	1
set	5	0	0	1
clear	4	0	0	1

CompareOutputModeB	OC2M	OC2PE	CC2S	CC2E
disconnect	0	0	0	0
PWM mode 1	6	1	0	1
PWM mode 2	7	1	0	1
toggle	3	0	0	1
set	5	0	0	1
clear	4	0	0	1

CompareOutputModeC	OC3M	OC3PE	CC3S	CC3E
disconnect	0	0	0	0
PWM mode 1	6	1	0	1
PWM mode 2	7	1	0	1
toggle	3	0	0	1
set	5	0	0	1
clear	4	0	0	1

CompareOutputModeD	OC4M	OC4PE	CC4S	CC4E
disconnect	0	0	0	0
PWM mode 1	6	1	0	1
PWM mode 2	7	1	0	1
toggle	3	0	0	1
set	5	0	0	1
clear	4	0	0	1

OutputPolarityA	CC1P
active high	0
active low	1

OutputPolarityB	CC2P
active high	0
active low	1

OutputPolarityC	CC3P
active high	0
active low	1

OutputPolarityD	CC4P
active high	0
active low	1

OnePulse	OPM
off	0
on	1

InterruptCommonSignature
void TIM2_IRQHandler(void) __attribute__((interrupt))

interruptA	CC1IE	interruptVectorCodeA
off	0	//nocode
on	1	if (TIM2->INTFR & TIM_CC1IF) {\\n  TIM2->INTFR &= ~TIM_CC1IF;\\n  /* on CH1 compare match */\\n}

interruptB	CC2IE	interruptVectorCodeB
off	0	//nocode
on	1	if (TIM2->INTFR & TIM_CC2IF) {\\n  TIM2->INTFR &= ~TIM_CC2IF;\\n  /* on CH2 compare match */\\n}

interruptC	CC3IE	interruptVectorCodeC
off	0	//nocode
on	1	if (TIM2->INTFR & TIM_CC3IF) {\\n  TIM2->INTFR &= ~TIM_CC3IF;\\n  /* on CH3 compare match */\\n}

interruptD	CC4IE	interruptVectorCodeD
off	0	//nocode
on	1	if (TIM2->INTFR & TIM_CC4IF) {\\n  TIM2->INTFR &= ~TIM_CC4IF;\\n  /* on CH4 compare match */\\n}

PSC
*

ATRLR
*

CH1CVR
*

CH2CVR
*

CH3CVR
*

CH4CVR
*
`;var JR=Er([[48e6,"48Mhz"],[24e6,"24Mhz"],[8e6,"8Mhz"],[1e6,"1Mhz"]],QR,ZR);i();var To=`//REGISTERS (CH32 TIM1, advanced: complementary + dead-time + break). Cells are FIELD=ch32fun-macro.
//CEN/MOE emitted last by scaffold; AFIO->PCFR1 remap by scaffold.
TIM1->CTLR1	TIM1->DMAINTENR	TIM1->CHCTLR1	TIM1->CHCTLR2	TIM1->CCER	TIM1->BDTR	TIM1->PSC	TIM1->ATRLR	TIM1->CH1CVR	TIM1->CH2CVR	TIM1->CH3CVR	TIM1->CH4CVR
ARPE=TIM_ARPE	CC1IE=TIM_CC1IE	OC1M=TIM_OC1M_	OC3M=TIM_OC3M_	CC1E=TIM_CC1E	DTG=	PSC=	ATRLR=	CH1CVR=	CH2CVR=	CH3CVR=	CH4CVR=
CMS=TIM_CMS_	CC2IE=TIM_CC2IE	OC1PE=TIM_OC1PE	OC3PE=TIM_OC3PE	CC1P=TIM_CC1P	BKE=TIM_BKE	-	-	-	-	-	-
DIR=TIM_DIR	CC3IE=TIM_CC3IE	CC1S=TIM_CC1S_	CC3S=TIM_CC3S_	CC1NE=TIM_CC1NE	BKP=TIM_BKP	-	-	-	-	-	-
OPM=TIM_OPM	CC4IE=TIM_CC4IE	OC2M=TIM_OC2M_	OC4M=TIM_OC4M_	CC1NP=TIM_CC1NP	-	-	-	-	-	-	-
-	-	OC2PE=TIM_OC2PE	OC4PE=TIM_OC4PE	CC2E=TIM_CC2E	-	-	-	-	-	-	-
-	-	CC2S=TIM_CC2S_	CC4S=TIM_CC4S_	CC2P=TIM_CC2P	-	-	-	-	-	-	-
-	-	-	-	CC2NE=TIM_CC2NE	-	-	-	-	-	-	-
-	-	-	-	CC2NP=TIM_CC2NP	-	-	-	-	-	-	-
-	-	-	-	CC3E=TIM_CC3E	-	-	-	-	-	-	-
-	-	-	-	CC3P=TIM_CC3P	-	-	-	-	-	-	-
-	-	-	-	CC3NE=TIM_CC3NE	-	-	-	-	-	-	-
-	-	-	-	CC3NP=TIM_CC3NP	-	-	-	-	-	-	-
-	-	-	-	CC4E=TIM_CC4E	-	-	-	-	-	-	-
-	-	-	-	CC4P=TIM_CC4P	-	-	-	-	-	-	-

//CONSTRAINTS
family
ch32

timerNr	timerBits	counterMax
1	16	65535

nvicIRQ
TIM1_CC_IRQn

timerMode	CMS	DIR	ARPE	topValue	updateOcrMoment	setTovMoment
edge-aligned up	0	0	1	ATRLR	TOP	TOP
edge-aligned down	0	1	1	ATRLR	TOP	BOTTOM
center-aligned	1	0	1	ATRLR	TOP	BOTTOM

TIM1remap	OCnA_OutputPort	OCnA_NOutputPort	OCnB_OutputPort	OCnB_NOutputPort	OCnC_OutputPort	OCnC_NOutputPort	OCnD_OutputPort	PCFR1
no remap	A8	B13	A9	B14	A10	B15	A11	none
partial remap 1	A8	A7	A9	B0	A10	B1	A11	AFIO_PCFR1_TIM1_REMAP_PARTIALREMAP1
partial remap 2	D2	D0	A1	A2	C3	D1	C4	AFIO_PCFR1_TIM1_REMAP_PARTIALREMAP2
full remap	E9	E8	E11	E10	E13	E12	E14	AFIO_PCFR1_TIM1_REMAP_FULLREMAP

CompareOutputModeA	OC1M	OC1PE	CC1S	CC1E
disconnect	0	0	0	0
PWM mode 1	6	1	0	1
PWM mode 2	7	1	0	1
toggle	3	0	0	1
set	5	0	0	1
clear	4	0	0	1

CompareOutputModeB	OC2M	OC2PE	CC2S	CC2E
disconnect	0	0	0	0
PWM mode 1	6	1	0	1
PWM mode 2	7	1	0	1
toggle	3	0	0	1
set	5	0	0	1
clear	4	0	0	1

CompareOutputModeC	OC3M	OC3PE	CC3S	CC3E
disconnect	0	0	0	0
PWM mode 1	6	1	0	1
PWM mode 2	7	1	0	1
toggle	3	0	0	1
set	5	0	0	1
clear	4	0	0	1

CompareOutputModeD	OC4M	OC4PE	CC4S	CC4E
disconnect	0	0	0	0
PWM mode 1	6	1	0	1
PWM mode 2	7	1	0	1
toggle	3	0	0	1
set	5	0	0	1
clear	4	0	0	1

OutputPolarityA	CC1P
active high	0
active low	1

OutputPolarityB	CC2P
active high	0
active low	1

OutputPolarityC	CC3P
active high	0
active low	1

OutputPolarityD	CC4P
active high	0
active low	1

ComplementaryA	CC1NE
off	0
on	1

ComplementaryPolarityA	CC1NP
active high	0
active low	1

ComplementaryB	CC2NE
off	0
on	1

ComplementaryPolarityB	CC2NP
active high	0
active low	1

ComplementaryC	CC3NE
off	0
on	1

ComplementaryPolarityC	CC3NP
active high	0
active low	1

OnePulse	OPM
off	0
on	1

BreakInput	BKE
off	0
on	1

BreakPolarity	BKP
active low	0
active high	1

InterruptCommonSignature
void TIM1_CC_IRQHandler(void) __attribute__((interrupt))

interruptA	CC1IE	interruptVectorCodeA
off	0	//nocode
on	1	if (TIM1->INTFR & TIM_CC1IF) {\\n  TIM1->INTFR &= ~TIM_CC1IF;\\n  /* on CH1 compare match */\\n}

interruptB	CC2IE	interruptVectorCodeB
off	0	//nocode
on	1	if (TIM1->INTFR & TIM_CC2IF) {\\n  TIM1->INTFR &= ~TIM_CC2IF;\\n  /* on CH2 compare match */\\n}

interruptC	CC3IE	interruptVectorCodeC
off	0	//nocode
on	1	if (TIM1->INTFR & TIM_CC3IF) {\\n  TIM1->INTFR &= ~TIM_CC3IF;\\n  /* on CH3 compare match */\\n}

interruptD	CC4IE	interruptVectorCodeD
off	0	//nocode
on	1	if (TIM1->INTFR & TIM_CC4IF) {\\n  TIM1->INTFR &= ~TIM_CC4IF;\\n  /* on CH4 compare match */\\n}

DTG
*

PSC
*

ATRLR
*

CH1CVR
*

CH2CVR
*

CH3CVR
*

CH4CVR
*
`;var bo=`//REGISTERS (CH32 TIM2, general-purpose). Cells are FIELD=ch32fun-macro.
//CEN emitted last by scaffold; AFIO->PCFR1 remap by scaffold.
TIM2->CTLR1	TIM2->DMAINTENR	TIM2->CHCTLR1	TIM2->CHCTLR2	TIM2->CCER	TIM2->PSC	TIM2->ATRLR	TIM2->CH1CVR	TIM2->CH2CVR	TIM2->CH3CVR	TIM2->CH4CVR
ARPE=TIM_ARPE	CC1IE=TIM_CC1IE	OC1M=TIM_OC1M_	OC3M=TIM_OC3M_	CC1E=TIM_CC1E	PSC=	ATRLR=	CH1CVR=	CH2CVR=	CH3CVR=	CH4CVR=
CMS=TIM_CMS_	CC2IE=TIM_CC2IE	OC1PE=TIM_OC1PE	OC3PE=TIM_OC3PE	CC1P=TIM_CC1P	-	-	-	-	-	-
DIR=TIM_DIR	CC3IE=TIM_CC3IE	CC1S=TIM_CC1S_	CC3S=TIM_CC3S_	CC2E=TIM_CC2E	-	-	-	-	-	-
OPM=TIM_OPM	CC4IE=TIM_CC4IE	OC2M=TIM_OC2M_	OC4M=TIM_OC4M_	CC2P=TIM_CC2P	-	-	-	-	-	-
-	-	OC2PE=TIM_OC2PE	OC4PE=TIM_OC4PE	CC3E=TIM_CC3E	-	-	-	-	-	-
-	-	CC2S=TIM_CC2S_	CC4S=TIM_CC4S_	CC3P=TIM_CC3P	-	-	-	-	-	-
-	-	-	-	CC4E=TIM_CC4E	-	-	-	-	-	-
-	-	-	-	CC4P=TIM_CC4P	-	-	-	-	-	-

//CONSTRAINTS
family
ch32

timerNr	timerBits	counterMax
2	16	65535

nvicIRQ
TIM2_IRQn

timerMode	CMS	DIR	ARPE	topValue	updateOcrMoment	setTovMoment
edge-aligned up	0	0	1	ATRLR	TOP	TOP
edge-aligned down	0	1	1	ATRLR	TOP	BOTTOM
center-aligned	1	0	1	ATRLR	TOP	BOTTOM

TIM2remap	OCnA_OutputPort	OCnB_OutputPort	OCnC_OutputPort	OCnD_OutputPort	PCFR1
no remap	A0	A1	A2	A3	none
partial remap 1	A15	B3	A2	A3	AFIO_PCFR1_TIM2_REMAP_PARTIALREMAP1
partial remap 2	A0	A1	B10	B11	AFIO_PCFR1_TIM2_REMAP_PARTIALREMAP2
full remap	A15	B3	B10	B11	AFIO_PCFR1_TIM2_REMAP_FULLREMAP

CompareOutputModeA	OC1M	OC1PE	CC1S	CC1E
disconnect	0	0	0	0
PWM mode 1	6	1	0	1
PWM mode 2	7	1	0	1
toggle	3	0	0	1
set	5	0	0	1
clear	4	0	0	1

CompareOutputModeB	OC2M	OC2PE	CC2S	CC2E
disconnect	0	0	0	0
PWM mode 1	6	1	0	1
PWM mode 2	7	1	0	1
toggle	3	0	0	1
set	5	0	0	1
clear	4	0	0	1

CompareOutputModeC	OC3M	OC3PE	CC3S	CC3E
disconnect	0	0	0	0
PWM mode 1	6	1	0	1
PWM mode 2	7	1	0	1
toggle	3	0	0	1
set	5	0	0	1
clear	4	0	0	1

CompareOutputModeD	OC4M	OC4PE	CC4S	CC4E
disconnect	0	0	0	0
PWM mode 1	6	1	0	1
PWM mode 2	7	1	0	1
toggle	3	0	0	1
set	5	0	0	1
clear	4	0	0	1

OutputPolarityA	CC1P
active high	0
active low	1

OutputPolarityB	CC2P
active high	0
active low	1

OutputPolarityC	CC3P
active high	0
active low	1

OutputPolarityD	CC4P
active high	0
active low	1

OnePulse	OPM
off	0
on	1

InterruptCommonSignature
void TIM2_IRQHandler(void) __attribute__((interrupt))

interruptA	CC1IE	interruptVectorCodeA
off	0	//nocode
on	1	if (TIM2->INTFR & TIM_CC1IF) {\\n  TIM2->INTFR &= ~TIM_CC1IF;\\n  /* on CH1 compare match */\\n}

interruptB	CC2IE	interruptVectorCodeB
off	0	//nocode
on	1	if (TIM2->INTFR & TIM_CC2IF) {\\n  TIM2->INTFR &= ~TIM_CC2IF;\\n  /* on CH2 compare match */\\n}

interruptC	CC3IE	interruptVectorCodeC
off	0	//nocode
on	1	if (TIM2->INTFR & TIM_CC3IF) {\\n  TIM2->INTFR &= ~TIM_CC3IF;\\n  /* on CH3 compare match */\\n}

interruptD	CC4IE	interruptVectorCodeD
off	0	//nocode
on	1	if (TIM2->INTFR & TIM_CC4IF) {\\n  TIM2->INTFR &= ~TIM_CC4IF;\\n  /* on CH4 compare match */\\n}

PSC
*

ATRLR
*

CH1CVR
*

CH2CVR
*

CH3CVR
*

CH4CVR
*
`;var Mo=`//REGISTERS (CH32 TIM3, general-purpose). Cells are FIELD=ch32fun-macro.
//CEN emitted last by scaffold; AFIO->PCFR1 remap by scaffold.
TIM3->CTLR1	TIM3->DMAINTENR	TIM3->CHCTLR1	TIM3->CHCTLR2	TIM3->CCER	TIM3->PSC	TIM3->ATRLR	TIM3->CH1CVR	TIM3->CH2CVR	TIM3->CH3CVR	TIM3->CH4CVR
ARPE=TIM_ARPE	CC1IE=TIM_CC1IE	OC1M=TIM_OC1M_	OC3M=TIM_OC3M_	CC1E=TIM_CC1E	PSC=	ATRLR=	CH1CVR=	CH2CVR=	CH3CVR=	CH4CVR=
CMS=TIM_CMS_	CC2IE=TIM_CC2IE	OC1PE=TIM_OC1PE	OC3PE=TIM_OC3PE	CC1P=TIM_CC1P	-	-	-	-	-	-
DIR=TIM_DIR	CC3IE=TIM_CC3IE	CC1S=TIM_CC1S_	CC3S=TIM_CC3S_	CC2E=TIM_CC2E	-	-	-	-	-	-
OPM=TIM_OPM	CC4IE=TIM_CC4IE	OC2M=TIM_OC2M_	OC4M=TIM_OC4M_	CC2P=TIM_CC2P	-	-	-	-	-	-
-	-	OC2PE=TIM_OC2PE	OC4PE=TIM_OC4PE	CC3E=TIM_CC3E	-	-	-	-	-	-
-	-	CC2S=TIM_CC2S_	CC4S=TIM_CC4S_	CC3P=TIM_CC3P	-	-	-	-	-	-
-	-	-	-	CC4E=TIM_CC4E	-	-	-	-	-	-
-	-	-	-	CC4P=TIM_CC4P	-	-	-	-	-	-

//CONSTRAINTS
family
ch32

timerNr	timerBits	counterMax
3	16	65535

nvicIRQ
TIM3_IRQn

timerMode	CMS	DIR	ARPE	topValue	updateOcrMoment	setTovMoment
edge-aligned up	0	0	1	ATRLR	TOP	TOP
edge-aligned down	0	1	1	ATRLR	TOP	BOTTOM
center-aligned	1	0	1	ATRLR	TOP	BOTTOM

TIM3remap	OCnA_OutputPort	OCnB_OutputPort	OCnC_OutputPort	OCnD_OutputPort	PCFR1
no remap	A6	A7	B0	B1	none
partial remap	B4	B5	B0	B1	AFIO_PCFR1_TIM3_REMAP_PARTIALREMAP
full remap	C6	C7	C8	C9	AFIO_PCFR1_TIM3_REMAP_FULLREMAP

CompareOutputModeA	OC1M	OC1PE	CC1S	CC1E
disconnect	0	0	0	0
PWM mode 1	6	1	0	1
PWM mode 2	7	1	0	1
toggle	3	0	0	1
set	5	0	0	1
clear	4	0	0	1

CompareOutputModeB	OC2M	OC2PE	CC2S	CC2E
disconnect	0	0	0	0
PWM mode 1	6	1	0	1
PWM mode 2	7	1	0	1
toggle	3	0	0	1
set	5	0	0	1
clear	4	0	0	1

CompareOutputModeC	OC3M	OC3PE	CC3S	CC3E
disconnect	0	0	0	0
PWM mode 1	6	1	0	1
PWM mode 2	7	1	0	1
toggle	3	0	0	1
set	5	0	0	1
clear	4	0	0	1

CompareOutputModeD	OC4M	OC4PE	CC4S	CC4E
disconnect	0	0	0	0
PWM mode 1	6	1	0	1
PWM mode 2	7	1	0	1
toggle	3	0	0	1
set	5	0	0	1
clear	4	0	0	1

OutputPolarityA	CC1P
active high	0
active low	1

OutputPolarityB	CC2P
active high	0
active low	1

OutputPolarityC	CC3P
active high	0
active low	1

OutputPolarityD	CC4P
active high	0
active low	1

OnePulse	OPM
off	0
on	1

InterruptCommonSignature
void TIM3_IRQHandler(void) __attribute__((interrupt))

interruptA	CC1IE	interruptVectorCodeA
off	0	//nocode
on	1	if (TIM3->INTFR & TIM_CC1IF) {\\n  TIM3->INTFR &= ~TIM_CC1IF;\\n  /* on CH1 compare match */\\n}

interruptB	CC2IE	interruptVectorCodeB
off	0	//nocode
on	1	if (TIM3->INTFR & TIM_CC2IF) {\\n  TIM3->INTFR &= ~TIM_CC2IF;\\n  /* on CH2 compare match */\\n}

interruptC	CC3IE	interruptVectorCodeC
off	0	//nocode
on	1	if (TIM3->INTFR & TIM_CC3IF) {\\n  TIM3->INTFR &= ~TIM_CC3IF;\\n  /* on CH3 compare match */\\n}

interruptD	CC4IE	interruptVectorCodeD
off	0	//nocode
on	1	if (TIM3->INTFR & TIM_CC4IF) {\\n  TIM3->INTFR &= ~TIM_CC4IF;\\n  /* on CH4 compare match */\\n}

PSC
*

ATRLR
*

CH1CVR
*

CH2CVR
*

CH3CVR
*

CH4CVR
*
`;var Po=`//REGISTERS (CH32 TIM4, general-purpose). Cells are FIELD=ch32fun-macro.
//CEN emitted last by scaffold; AFIO->PCFR1 remap by scaffold.
TIM4->CTLR1	TIM4->DMAINTENR	TIM4->CHCTLR1	TIM4->CHCTLR2	TIM4->CCER	TIM4->PSC	TIM4->ATRLR	TIM4->CH1CVR	TIM4->CH2CVR	TIM4->CH3CVR	TIM4->CH4CVR
ARPE=TIM_ARPE	CC1IE=TIM_CC1IE	OC1M=TIM_OC1M_	OC3M=TIM_OC3M_	CC1E=TIM_CC1E	PSC=	ATRLR=	CH1CVR=	CH2CVR=	CH3CVR=	CH4CVR=
CMS=TIM_CMS_	CC2IE=TIM_CC2IE	OC1PE=TIM_OC1PE	OC3PE=TIM_OC3PE	CC1P=TIM_CC1P	-	-	-	-	-	-
DIR=TIM_DIR	CC3IE=TIM_CC3IE	CC1S=TIM_CC1S_	CC3S=TIM_CC3S_	CC2E=TIM_CC2E	-	-	-	-	-	-
OPM=TIM_OPM	CC4IE=TIM_CC4IE	OC2M=TIM_OC2M_	OC4M=TIM_OC4M_	CC2P=TIM_CC2P	-	-	-	-	-	-
-	-	OC2PE=TIM_OC2PE	OC4PE=TIM_OC4PE	CC3E=TIM_CC3E	-	-	-	-	-	-
-	-	CC2S=TIM_CC2S_	CC4S=TIM_CC4S_	CC3P=TIM_CC3P	-	-	-	-	-	-
-	-	-	-	CC4E=TIM_CC4E	-	-	-	-	-	-
-	-	-	-	CC4P=TIM_CC4P	-	-	-	-	-	-

//CONSTRAINTS
family
ch32

timerNr	timerBits	counterMax
4	16	65535

nvicIRQ
TIM4_IRQn

timerMode	CMS	DIR	ARPE	topValue	updateOcrMoment	setTovMoment
edge-aligned up	0	0	1	ATRLR	TOP	TOP
edge-aligned down	0	1	1	ATRLR	TOP	BOTTOM
center-aligned	1	0	1	ATRLR	TOP	BOTTOM

TIM4remap	OCnA_OutputPort	OCnB_OutputPort	OCnC_OutputPort	OCnD_OutputPort	PCFR1
no remap	B6	B7	B8	B9	none
remap	D12	D13	D14	D15	AFIO_PCFR1_TIM4_REMAP

CompareOutputModeA	OC1M	OC1PE	CC1S	CC1E
disconnect	0	0	0	0
PWM mode 1	6	1	0	1
PWM mode 2	7	1	0	1
toggle	3	0	0	1
set	5	0	0	1
clear	4	0	0	1

CompareOutputModeB	OC2M	OC2PE	CC2S	CC2E
disconnect	0	0	0	0
PWM mode 1	6	1	0	1
PWM mode 2	7	1	0	1
toggle	3	0	0	1
set	5	0	0	1
clear	4	0	0	1

CompareOutputModeC	OC3M	OC3PE	CC3S	CC3E
disconnect	0	0	0	0
PWM mode 1	6	1	0	1
PWM mode 2	7	1	0	1
toggle	3	0	0	1
set	5	0	0	1
clear	4	0	0	1

CompareOutputModeD	OC4M	OC4PE	CC4S	CC4E
disconnect	0	0	0	0
PWM mode 1	6	1	0	1
PWM mode 2	7	1	0	1
toggle	3	0	0	1
set	5	0	0	1
clear	4	0	0	1

OutputPolarityA	CC1P
active high	0
active low	1

OutputPolarityB	CC2P
active high	0
active low	1

OutputPolarityC	CC3P
active high	0
active low	1

OutputPolarityD	CC4P
active high	0
active low	1

OnePulse	OPM
off	0
on	1

InterruptCommonSignature
void TIM4_IRQHandler(void) __attribute__((interrupt))

interruptA	CC1IE	interruptVectorCodeA
off	0	//nocode
on	1	if (TIM4->INTFR & TIM_CC1IF) {\\n  TIM4->INTFR &= ~TIM_CC1IF;\\n  /* on CH1 compare match */\\n}

interruptB	CC2IE	interruptVectorCodeB
off	0	//nocode
on	1	if (TIM4->INTFR & TIM_CC2IF) {\\n  TIM4->INTFR &= ~TIM_CC2IF;\\n  /* on CH2 compare match */\\n}

interruptC	CC3IE	interruptVectorCodeC
off	0	//nocode
on	1	if (TIM4->INTFR & TIM_CC3IF) {\\n  TIM4->INTFR &= ~TIM_CC3IF;\\n  /* on CH3 compare match */\\n}

interruptD	CC4IE	interruptVectorCodeD
off	0	//nocode
on	1	if (TIM4->INTFR & TIM_CC4IF) {\\n  TIM4->INTFR &= ~TIM_CC4IF;\\n  /* on CH4 compare match */\\n}

PSC
*

ATRLR
*

CH1CVR
*

CH2CVR
*

CH3CVR
*

CH4CVR
*
`;var eS=Er([[72e6,"72Mhz"],[48e6,"48Mhz"],[24e6,"24Mhz"],[8e6,"8Mhz"]],To,bo,Mo,Po);i();var tS=Er([[144e6,"144Mhz"],[96e6,"96Mhz"],[72e6,"72Mhz"],[48e6,"48Mhz"],[24e6,"24Mhz"],[8e6,"8Mhz"]],To,bo,Mo,Po);i();var rS=Er([[144e6,"144Mhz"],[96e6,"96Mhz"],[72e6,"72Mhz"],[48e6,"48Mhz"],[24e6,"24Mhz"],[8e6,"8Mhz"]],To,bo,Mo,Po);i();var $i=(o=>(o.Normal="Normal",o.Internal="With Internals",o.ByDependencies="By Dependencies",o))($i||{}),Yi=(u=>(u.LGT8F328P="LGT8F328P",u.ATMEGA328P="ATMEGA328P",u.ATMEGA328PB="ATMEGA328PB",u.CH32V003="CH32V003",u.CH32V103="CH32V103",u.CH32V203="CH32V203",u.CH32V307="CH32V307",u))(Yi||{});var BZ={["LGT8F328P"]:GR,["ATMEGA328P"]:UR,["ATMEGA328PB"]:KR,["CH32V003"]:JR,["CH32V103"]:eS,["CH32V203"]:tS,["CH32V307"]:rS},nS=BZ;U();var Xu=pe("Normal"),Ed={mcu:"ATMEGA328P",timer:"0"},kZ=Ca(()=>{let e=Dt(Dr),t=LR();return e({...Ed,...t}),P(c,{})}),LZ=Ca(()=>{let e=We(Dr);return kR({...Ed,...e}),P(c,{})}),oS=()=>P(c,{children:[P(kZ,{}),P(LZ,{})]}),Dr=pe(Ed),vt=Rt(e=>pe(t=>t(Dr)[e],(t,r,o)=>{let n=t(Dr);if(o)r(Dr,{...n,[e]:o});else{let{[e]:a,...s}=n;r(Dr,s)}})),Ku=pe(e=>{let t=e(vt("mcu"));return nS[t]}),Qu=pe(e=>e(Ku)[+(e(vt("timer"))||0)]);i();i();var Xi=pe(e=>Id(e(Qu).configs)),Ki=Rt(e=>pe(t=>t(Xi)[e])),WZ=e=>Kt(e.flatMap(t=>Object.keys(t[0]))),iS=Rt(e=>pe(t=>{let r=t(Zu(e)),o=t(Ki(e)),n=uS([[r],...o]);return n||{}})),Eo=Rt(e=>pe(t=>{let r=t(aS(e));if(r!==-1)return t(iS(r))[e]})),_n=pe(e=>{let t=e(Xi).map((r,o)=>e(iS(o))).flat();return Object.assign({},...t)}),Zu=Rt(e=>pe(t=>{let r=t(Ki(e)),o=WZ(r),n={};for(let a of o){let s=t(vt(a));s!==void 0&&(n[a]=s)}return n})),aS=Rt(e=>pe(t=>t(Xi).findIndex(n=>n.some(a=>a[0].hasOwnProperty(e))))),qZ=Rt(e=>pe(t=>{let r=t(Ki(e)),o=t(Zu(e));return wd([[o],...r])})),HZ=Rt(e=>pe(t=>{let r=t(Ki(e)),o=t(Zu(e));return Ju([...r,[o]])})),sS=Rt(e=>pe(t=>{let r=t(aS(e));if(r===-1)return{variable:e,selectedOption:"",suggestedOption:"",forcedOption:"",options:[]};let o=t(Zu(r)),n=t(HZ(r))[e]||[],a=t(Ki(r)),s=t(qZ(r))[e];if(o[e]){let{[e]:d,...h}=o;s=wd([[h],...a])[e]}let u=t(Eo(e)),f=!o[e]&&s.length===1?s[0]:void 0,p=!o[e]&&s.length>1?u:void 0;return{variable:e,selectedOption:o[e],suggestedOption:p||f||o[e],forcedOption:f,options:n.map(d=>({isSuggested:d===p,value:d,isDisabled:!s.includes(d)||!!f}))}}));i();var Sd=N(cS()),VZ=({tcnt:e,dir:t},r)=>t===-1?2*r-e:e,fS=(e,t,r,o,n)=>dS(VZ(e,r)+t,r,o,n),zZ=(e,t)=>t?e*2:e+1,dS=(e,t,r,o=!1)=>{for(;e<0&&t>0;)e+=t;if(!r){let a=e%(t+1);return o?{tcnt:t-a,dir:-1}:{tcnt:a,dir:1}}let n=e%(t*2);return n<t?{tcnt:n,dir:1}:{tcnt:t*2-n,dir:-1}},pS=(e,t)=>e.tcnt===t.tcnt&&e.dir===t.dir,el=-1;function Ad({timerMode:e,prescaler:t,cpuHz:r,top:o,counterMax:n,tovTime:a,OCRnXs:s,OCRnXs_behaviour:u,ICRn:f,deadTimeEnable:p,deadTimeA:d,deadTimeB:h,outputInvert:m=[],complementaryEnable:g=[],complementaryInvert:C=[],onePulse:x=!1}){let y=["PCPWM","PFCPWM","center-aligned"].includes(e),O=e==="edge-aligned down",_=zZ(o,y),S=_*4,M={t:[],cpu:[],TCNT:[],OCnXs:s.map(()=>[]),complementaryOut:s.map(()=>[]),OCnXsDuty:s.map(()=>0),MATCH_Xs:s.map(()=>[]),OVF:[],CAPT:[],deadTimes:[[],[]],freq:_===0?new Sd.default(0):new Sd.default(r).div(_).div(t)};if(isNaN(o))return M;let R=s.map(()=>0),b=[0,0],I=u.map((z,H)=>{let L={at:[],matchAt:s[H],behaviour:z};switch(z){case"set":L.at=[{tcnt:s[H],dir:1,to:1}];break;case"clear":L.at=[{tcnt:s[H],dir:1,to:0}];break;case"toggle":L.at=[{tcnt:s[H],dir:1,to:el}];break;case"set-on-match, clear-at-max":L.at=[{tcnt:s[H],dir:1,to:1},{tcnt:o,dir:1,to:0}];break;case"clear-on-match, set-at-max":L.at=[{tcnt:s[H],dir:1,to:0},{tcnt:o,dir:1,to:1}];break;case"PWM mode 1":L.at=y?[{tcnt:s[H],dir:1,to:0},{tcnt:s[H],dir:-1,to:1}]:[{tcnt:0,dir:1,to:1},{tcnt:s[H],dir:1,to:0}];break;case"PWM mode 2":L.at=y?[{tcnt:s[H],dir:1,to:1},{tcnt:s[H],dir:-1,to:0}]:[{tcnt:0,dir:1,to:0},{tcnt:s[H],dir:1,to:1}];break;case"set-up, clear-down":L.at=[{tcnt:s[H],dir:1,to:1},{tcnt:s[H],dir:-1,to:0}];break;case"clear-up, set-down":L.at=[{tcnt:s[H],dir:1,to:0},{tcnt:s[H],dir:-1,to:1}];break}return O&&(L.at=L.at.map(K=>({tcnt:K.tcnt,dir:-K.dir,to:K.to===el?el:1-K.to})).reverse()),R[H]=+!L.at[0]?.to||0,L}),T=[],E=[],F=y?o*2:o+1;if(p){let z=I[1].at.find(({to:L})=>L===0),H=I[1].at.find(({to:L})=>L===1);T=[{to:1,tcnt:z.tcnt,dir:z.dir}],d<F&&T.push({to:0,...fS(z,d,o,y,O)}),E=[{to:1,tcnt:H.tcnt,dir:H.dir}],h<F&&E.push({to:0,...fS(H,h,o,y,O)})}let w=[0,...s,f,...T.map(({tcnt:z})=>z),...E.map(({tcnt:z})=>z),o,n].flatMap(z=>[z-1,z,z+1]).filter(Number.isFinite),B=-1;w=Kt(w);let k={tcnt:-1,dir:1};for(;B<S;){let z=w.map(le=>(le-k.tcnt)*k.dir).filter(le=>le>0),H=Math.min(...z),L=s.map(()=>0),K=0,Pe=0;B+=H,B=Math.min(B,S),k=dS(B,o,y,O),k.tcnt===0&&a==="BOTTOM"&&(K=1),k.tcnt===o&&a==="TOP"&&(K=1),k.tcnt===n&&a==="MAX"&&(K=1),I.forEach(({at:le,matchAt:D},V)=>{le.forEach(J=>{pS(k,J)&&(R[V]=J.to===el?+!R[V]:J.to)}),[T,E].forEach((J,ie)=>{J.forEach(de=>{pS(k,de)&&(b[ie]=de.to)})}),k.tcnt===D&&(L[V]=1)}),k.tcnt===f&&(Pe=1),M.t.push(B*t/r),M.cpu.push(B*t),M.TCNT.push(k.tcnt),M.OVF.push(K),M.CAPT.push(Pe);for(let le in u)M.OCnXs[le].push(R[le]),M.MATCH_Xs[le].push(L[le]);for(let le in b)M.deadTimes[le].push(b[le])}if(p&&(M.OCnXs[0]=M.OCnXs[1].map((z,H)=>{let L=z||M.deadTimes[0][H];return u[0]===u[1]?+L:+!L}),M.OCnXs[1]=M.OCnXs[1].map((z,H)=>+(z&&!M.deadTimes[1][H]))),M.OCnXs.forEach((z,H)=>{g[H]&&(M.complementaryOut[H]=z.map(L=>{let K=L?0:1;return C[H]?K?0:1:K}))}),M.OCnXs.forEach((z,H)=>{if(m[H])for(let L=0;L<z.length;L++)z[L]=z[L]?0:1}),x){let z=(y?o*2:o+1)*t,H=M.cpu.findIndex(L=>L>=z);if(H>0)for(let L=H;L<M.cpu.length;L++)M.TCNT[L]=O?o:0,M.OVF[L]=0,M.CAPT[L]=0,M.OCnXs.forEach(K=>K[L]=K[H-1]),M.complementaryOut.forEach(K=>{K.length&&(K[L]=K[H-1])}),M.MATCH_Xs.forEach(K=>K[L]=0)}let $=(y?o*2:o+1)*t,ue=x?1:2,Z=x?[0,$]:[$,$*3];return M.OCnXs.forEach((z,H)=>{let L=Z[0];M.cpu.forEach((K,Pe)=>{K<Z[0]||K>Z[1]||(M.OCnXsDuty[H]+=z[Pe]*(K-L)/$/ue,L=K)})}),M}var Id=([e,...t])=>{if(!e)return[];let r=[e],o=[],n=Object.keys(e[0]),a;do{a=!1,o=[];for(let s of t){let u=Object.keys(s[0]);Wl(n,u).length>0?(r.push(s),n=Kt([...n,...u]),a=!0):o.push(s)}t=o}while(a);return[r,...Id(o)]};function Qi(e){return!!e}var mS="*",Ju=e=>{let t={};for(let r of e)for(let o of r)for(let[n,a]of Object.entries(o))t[n]=t[n]||[],a!==mS&&!a.startsWith("!")&&(t[n].includes(a)||t[n].push(a));return t};function hS(e,t,r){let o="!"+t,n=[];for(let a of r){let s=a;if(e in a[0]&&(s=a.filter(u=>{let f=u[e];return f===void 0?!0:f[0]==="!"?f!==o:f===mS||f===t})),s.length===0)return null;n.push(s)}return n}function Dd(e,t,r,o){if(e.length===0)return{};let[n,...a]=e,s=t[n];for(let u of s){let f=hS(n,u,r);if(!f)continue;let p=Dd(a,t,f,o);if(p)return o[n]??={},o[n][u]=!0,p[n]=u,p}return!1}function uS(e){let t=Ju(e),r=Object.keys(t);return Dd(r,t,e,{})}function wd(e){let t=Ju(e),r=Object.keys(t),o={};return ql(t,(n,a)=>{let s=Hl(r,a);return n.filter(u=>{if(o[a]?.[u])return!0;let f=hS(a,u,e);return f?!!Dd(s,t,f,o):!1})})}var tl=pe(e=>{let t=e(_n),r=parseInt(t.counterMax),o={timerNr:t.timerNr,timerMode:t.timerMode,prescaler:t.clockPrescalerOrSource==="disconnect"?NaN:parseInt(t.clockPrescalerOrSource)||parseInt(t.FCPU)/1e3,cpuHz:parseInt(t.FCPU||"1")*(t.clockDoubler==="on"?2:1),top:0,counterMax:r,tovTime:t.setTovMoment,OCRnXs:[],OCRnXs_behaviour:[t.CompareOutputModeA,t.CompareOutputModeB,t.CompareOutputModeC,t.CompareOutputModeD],ICRn:0,deadTimeEnable:t.DeadTime==="on",deadTimeA:ju("DeadTimeA",t).value,deadTimeB:ju("DeadTimeB",t).value,outputInvert:[t.OutputPolarityA,t.OutputPolarityB,t.OutputPolarityC,t.OutputPolarityD].map(s=>s==="active low"),complementaryEnable:[t.ComplementaryA,t.ComplementaryB,t.ComplementaryC,void 0].map(s=>s==="on"),complementaryInvert:[t.ComplementaryPolarityA,t.ComplementaryPolarityB,t.ComplementaryPolarityC,void 0].map(s=>s==="active low"),onePulse:t.OnePulse==="on"},n=xn(t);o.OCRnXs=n.filter(({isOutput:s})=>s).map(({value:s})=>s),o.ICRn=n.find(({isInput:s})=>s).value,o.top=n.find(({isTop:s})=>s)?.value??parseInt(t.topValue),t.family==="ch32"&&(o.prescaler=parseInt(t.PSC||"0")+1,o.top=parseInt(t.ATRLR),o.ICRn=NaN);let a=parseInt(t.topValue)||r;return{simulation:Ad(o),IOCR_states:n,ocrMax:a,param:o,counterMax:r,values:t}});i();ha();U();var Nd=pe(300);function Fd(e){let[t,r]=Ga(Nd),[o,n]=Ze(0),[a,s]=Ze(!1),u=f=>{let p=f instanceof MouseEvent?f.clientY:f.targetTouches[0].clientY;n(p),s(!0)};return ke(()=>{if(!a)return;let f=d=>{let h=d instanceof MouseEvent?d.clientY:d.targetTouches[0].clientY;r(t+(o-h)),n(h)},p=d=>{s(!1)};return document.addEventListener("mouseup",p),document.addEventListener("touchend",p),document.addEventListener("mousemove",f,{passive:!1}),document.addEventListener("touchmove",f,{passive:!1}),()=>{document.removeEventListener("mousemove",f),document.removeEventListener("touchmove",f),document.removeEventListener("mouseup",p),document.removeEventListener("touchend",p)}},[a,t,o]),P("div",{className:`ResizePanel ${a?"dragging":""}`,style:{height:t},children:[P("div",{className:"notch-container",children:P("div",{className:"notch",onMouseDown:u,onTouchStart:u,children:P("span",{className:"dots",children:"......"})})}),e.children]})}function GZ(e){let t=ut();return ke(()=>{t.current=e}),t.current}function Bd({style:e}){let t=ut(null),[r]=xI(t),o=We(Nd),n=o/10,a=o/30,{simulation:s,ocrMax:u,param:f,counterMax:p,values:d}=We(tl),h=xn(d).map((O,_)=>({...O,ref:ut(null),i:_}));{let O=GZ(h),_=h.filter(({isDeadTime:M})=>!M).length,S=0;h.forEach((M,R)=>{let b=Dt(vt(M.name)),I=f.top||Number.parseInt(d.counterMax);if(M.isDeadTime||S++,Number.isNaN(M.value)&&M.isUsed){let T=M.isDeadTime?Math.pow(p,.3):I/(_+2)*(S+1);b(""+Math.round(T))}O?.[R].isUsed&&!M.isUsed&&b(void 0)})}let m=h.filter(({isActiveOutput:O})=>O),g=o-n*(m.length+.5),C=Rp(s.t),x=Wr(()=>Ar().domain(C).range([_e.left,r-_e.right]),[r,_e,C[0],C[1]]),y=Wr(()=>Ar().domain([0,u]).rangeRound([g-_e.bottom,_e.top]),[g,_e,u]);return ke(()=>{let O=t.current,_=M=>{h.forEach(({ref:R})=>R.current?.onMouseUp(void 0))},S=M=>{if(!O)return;let R=M instanceof MouseEvent?M.clientY:M.targetTouches[0].clientY,b=O.getBoundingClientRect().y,I=R-b;h.forEach(({ref:T})=>T.current?.onMouseMove(I,M))};return document.addEventListener("mouseup",_),document.addEventListener("touchend",_),O?.addEventListener("mousemove",S,{passive:!1}),O?.addEventListener("touchmove",S,{passive:!1}),()=>{document.removeEventListener("mouseup",_),document.removeEventListener("touchend",_),O?.removeEventListener("mousemove",S),O?.removeEventListener("touchmove",S)}},[h]),P("div",{className:"plotContainer",ref:t,style:e,children:P("svg",{className:"plot",children:[P(Td,{xScale:x,height:g}),P(bd,{yScale:y,width:r}),P(Ui,{xScale:x,yScale:y,data:s.t.map((O,_)=>[O,s.TCNT[_]]),idx:"TCNT"},"TCNT"),m.flatMap(({isActiveOutput:O,i:_},S)=>{let M=Ar().domain([0,1]).rangeRound([g+n*(S+1),g+n*S+a]);return[O&&P(Ui,{idx:_,curve:Gi,name:"OC"+f.timerNr+"ABCD"[_],xScale:x,yScale:M,data:s.t.map((R,b)=>[R,s.OCnXs[_][b]])},"OC"+_),O&&s.complementaryOut[_]?.length>0&&P(Ui,{idx:"OCN"+_,curve:Gi,name:"OC"+f.timerNr+"ABCD"[_]+"N",xScale:x,yScale:M,data:s.t.map((R,b)=>[R,s.complementaryOut[_][b]])},"OCN"+_),f.deadTimeEnable&&_<2&&P(Ui,{idx:"DeadTime-"+_,curve:Gi,name:"",xScale:x,yScale:M,data:[[0,0],...s.t.map((R,b)=>[R,s.deadTimes[_][b]]),[s.t[s.t.length-1],0]]},"DeadTime-"+_)]}),s.MATCH_Xs.flatMap((O,_)=>h[_].isInterrupt&&P(ji,{flagValues:O,TCNT:s.TCNT,t:s.t,xScale:x,yScale:y,label:"OCR"+d.timerNr+"ABCD"[_]+" interrupt"},_+"interrupt")),h.find(({isInput:O})=>O).isInterrupt&&P(ji,{flagValues:s.CAPT,TCNT:s.TCNT,t:s.t,xScale:x,yScale:y,label:"Capture interrupt"},"Capture interrupt"),d.InterruptOnTimerOverflow==="on"&&P(ji,{flagValues:s.OVF,TCNT:s.TCNT,t:s.t,xScale:x,yScale:y,label:"Overflow interrupt"},"Overflow interrupt"),h.map(({isUsed:O,ref:_,value:S,name:M})=>{let R=Dt(vt(M)),b=M.startsWith("DTR")?[0,Math.sqrt(p+1)-1]:[0,u],I=Ar().domain(b).rangeRound([g-_e.bottom,_e.top]);return O&&P(SR,{ref:_,width:r,yExtent:b,yScale:I,compareRegisterValue:S,setCompareRegisterValue:T=>R(T+""),name:M},M)})]})})}i();var cA=N(_S());U();i();i();var kd={hljs:{display:"block",overflowX:"auto",padding:"0.5em",background:"#FFFFFF",color:"#434f54"},"hljs-subst":{color:"#434f54"},"hljs-keyword":{color:"#00979D"},"hljs-attribute":{color:"#00979D"},"hljs-selector-tag":{color:"#00979D"},"hljs-doctag":{color:"#00979D"},"hljs-name":{color:"#00979D"},"hljs-built_in":{color:"#D35400"},"hljs-literal":{color:"#D35400"},"hljs-bullet":{color:"#D35400"},"hljs-code":{color:"#D35400"},"hljs-addition":{color:"#D35400"},"hljs-regexp":{color:"#00979D"},"hljs-symbol":{color:"#00979D"},"hljs-variable":{color:"#00979D"},"hljs-template-variable":{color:"#00979D"},"hljs-link":{color:"#00979D"},"hljs-selector-attr":{color:"#00979D"},"hljs-selector-pseudo":{color:"#00979D"},"hljs-type":{color:"#005C5F"},"hljs-string":{color:"#005C5F"},"hljs-selector-id":{color:"#005C5F"},"hljs-selector-class":{color:"#005C5F"},"hljs-quote":{color:"#005C5F"},"hljs-template-tag":{color:"#005C5F"},"hljs-deletion":{color:"#005C5F"},"hljs-title":{color:"#880000",fontWeight:"bold"},"hljs-section":{color:"#880000",fontWeight:"bold"},"hljs-comment":{color:"rgba(149,165,166,.8)"},"hljs-meta-keyword":{color:"#728E00"},"hljs-meta":{color:"#434f54"},"hljs-emphasis":{fontStyle:"italic"},"hljs-strong":{fontWeight:"bold"},"hljs-function":{color:"#728E00"},"hljs-number":{color:"#8A7B52"}};i();i();i();function Ld(e,t){if(e==null)return{};var r=W(e,t),o,n;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}i();i();i();function Io(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}function Wd(e){if(Array.isArray(e))return Io(e)}i();function qd(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}i();function Hd(e,t){if(e){if(typeof e=="string")return Io(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Io(e,t)}}i();function Vd(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function zd(e){return Wd(e)||qd(e)||Hd(e)||Vd()}i();function Zi(e,t,r){return t=ap(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}U();i();U();function yS(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),r.push.apply(r,o)}return r}function wo(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?yS(Object(r),!0).forEach(function(o){Zi(e,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):yS(Object(r)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))})}return e}function XZ(e){var t=e.length;if(t===0||t===1)return e;if(t===2)return[e[0],e[1],"".concat(e[0],".").concat(e[1]),"".concat(e[1],".").concat(e[0])];if(t===3)return[e[0],e[1],e[2],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0])];if(t>=4)return[e[0],e[1],e[2],e[3],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[2],".").concat(e[3]),"".concat(e[3],".").concat(e[0]),"".concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[0]),"".concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[3],".").concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[2],".").concat(e[1],".").concat(e[0])]}var Gd={};function KZ(e){if(e.length===0||e.length===1)return e;var t=e.join(".");return Gd[t]||(Gd[t]=XZ(e)),Gd[t]}function QZ(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,o=e.filter(function(a){return a!=="token"}),n=KZ(o);return n.reduce(function(a,s){return wo(wo({},a),r[s])},t)}function OS(e){return e.join(" ")}function ZZ(e,t){var r=0;return function(o){return r+=1,o.map(function(n,a){return rl({node:n,stylesheet:e,useInlineStyles:t,key:"code-segment-".concat(r,"-").concat(a)})})}}function rl(e){var t=e.node,r=e.stylesheet,o=e.style,n=o===void 0?{}:o,a=e.useInlineStyles,s=e.key,u=t.properties,f=t.type,p=t.tagName,d=t.value;if(f==="text")return d;if(p){var h=ZZ(r,a),m;if(!a)m=wo(wo({},u),{},{className:OS(u.className)});else{var g=Object.keys(r).reduce(function(O,_){return _.split(".").forEach(function(S){O.includes(S)||O.push(S)}),O},[]),C=u.className&&u.className.includes("token")?["token"]:[],x=u.className&&C.concat(u.className.filter(function(O){return!g.includes(O)}));m=wo(wo({},u),{},{className:OS(x)||void 0,style:QZ(u.className,Object.assign({},u.style,n),r)})}var y=h(t.children);return Me.createElement(p,A({key:s},m),y)}}i();var TS=function(e,t){var r=e.listLanguages();return r.indexOf(t)!==-1};var JZ=["language","children","style","customStyle","codeTagProps","useInlineStyles","showLineNumbers","showInlineLineNumbers","startingLineNumber","lineNumberContainerStyle","lineNumberStyle","wrapLines","wrapLongLines","lineProps","renderer","PreTag","CodeTag","code","astGenerator"];function bS(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),r.push.apply(r,o)}return r}function Vt(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?bS(Object(r),!0).forEach(function(o){Zi(e,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):bS(Object(r)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))})}return e}var eJ=/\n/g;function tJ(e){return e.match(eJ)}function rJ(e){var t=e.lines,r=e.startingLineNumber,o=e.style;return t.map(function(n,a){var s=a+r;return Me.createElement("span",{key:"line-".concat(a),className:"react-syntax-highlighter-line-number",style:typeof o=="function"?o(s):o},"".concat(s,`
`))})}function nJ(e){var t=e.codeString,r=e.codeStyle,o=e.containerStyle,n=o===void 0?{float:"left",paddingRight:"10px"}:o,a=e.numberStyle,s=a===void 0?{}:a,u=e.startingLineNumber;return Me.createElement("code",{style:Object.assign({},r,n)},rJ({lines:t.replace(/\n$/,"").split(`
`),style:s,startingLineNumber:u}))}function oJ(e){return"".concat(e.toString().length,".25em")}function MS(e,t){return{type:"element",tagName:"span",properties:{key:"line-number--".concat(e),className:["comment","linenumber","react-syntax-highlighter-line-number"],style:t},children:[{type:"text",value:e}]}}function PS(e,t,r){var o={display:"inline-block",minWidth:oJ(r),paddingRight:"1em",textAlign:"right",userSelect:"none"},n=typeof e=="function"?e(t):e,a=Vt(Vt({},o),n);return a}function nl(e){var t=e.children,r=e.lineNumber,o=e.lineNumberStyle,n=e.largestLineNumber,a=e.showInlineLineNumbers,s=e.lineProps,u=s===void 0?{}:s,f=e.className,p=f===void 0?[]:f,d=e.showLineNumbers,h=e.wrapLongLines,m=typeof u=="function"?u(r):u;if(m.className=p,r&&a){var g=PS(o,r,n);t.unshift(MS(r,g))}return h&d&&(m.style=Vt(Vt({},m.style),{},{display:"flex"})),{type:"element",tagName:"span",properties:m,children:t}}function ES(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],o=0;o<e.length;o++){var n=e[o];if(n.type==="text")r.push(nl({children:[n],className:zd(new Set(t))}));else if(n.children){var a=t.concat(n.properties.className);ES(n.children,a).forEach(function(s){return r.push(s)})}}return r}function iJ(e,t,r,o,n,a,s,u,f){var p,d=ES(e.value),h=[],m=-1,g=0;function C(R,b){var I=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return nl({children:R,lineNumber:b,lineNumberStyle:u,largestLineNumber:s,showInlineLineNumbers:n,lineProps:r,className:I,showLineNumbers:o,wrapLongLines:f})}function x(R,b){if(o&&b&&n){var I=PS(u,b,s);R.unshift(MS(b,I))}return R}function y(R,b){var I=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return t||I.length>0?C(R,b,I):x(R,b)}for(var O=function(){var b=d[g],I=b.children[0].value,T=tJ(I);if(T){var E=I.split(`
`);E.forEach(function(F,w){var B=o&&h.length+a,k={type:"text",value:"".concat(F,`
`)};if(w===0){var $=d.slice(m+1,g).concat(nl({children:[k],className:b.properties.className})),ue=y($,B);h.push(ue)}else if(w===E.length-1){var Z=d[g+1]&&d[g+1].children&&d[g+1].children[0],z={type:"text",value:"".concat(F)};if(Z){var H=nl({children:[z],className:b.properties.className});d.splice(g+1,0,H)}else{var L=[z],K=y(L,B,b.properties.className);h.push(K)}}else{var Pe=[k],le=y(Pe,B,b.properties.className);h.push(le)}}),m=g}g++};g<d.length;)O();if(m!==d.length-1){var _=d.slice(m+1,d.length);if(_&&_.length){var S=o&&h.length+a,M=y(_,S);h.push(M)}}return t?h:(p=[]).concat.apply(p,h)}function aJ(e){var t=e.rows,r=e.stylesheet,o=e.useInlineStyles;return t.map(function(n,a){return rl({node:n,stylesheet:r,useInlineStyles:o,key:"code-segement".concat(a)})})}function IS(e){return e&&typeof e.highlightAuto<"u"}function sJ(e){var t=e.astGenerator,r=e.language,o=e.code,n=e.defaultCodeValue;if(IS(t)){var a=TS(t,r);return r==="text"?{value:n,language:"text"}:a?t.highlight(r,o):t.highlightAuto(o)}try{return r&&r!=="text"?{value:t.highlight(o,r)}:{value:n}}catch{return{value:n}}}function wS(e,t){return function(o){var n=o.language,a=o.children,s=o.style,u=s===void 0?t:s,f=o.customStyle,p=f===void 0?{}:f,d=o.codeTagProps,h=d===void 0?{className:n?"language-".concat(n):void 0,style:Vt(Vt({},u['code[class*="language-"]']),u['code[class*="language-'.concat(n,'"]')])}:d,m=o.useInlineStyles,g=m===void 0?!0:m,C=o.showLineNumbers,x=C===void 0?!1:C,y=o.showInlineLineNumbers,O=y===void 0?!0:y,_=o.startingLineNumber,S=_===void 0?1:_,M=o.lineNumberContainerStyle,R=o.lineNumberStyle,b=R===void 0?{}:R,I=o.wrapLines,T=o.wrapLongLines,E=T===void 0?!1:T,F=o.lineProps,w=F===void 0?{}:F,B=o.renderer,k=o.PreTag,$=k===void 0?"pre":k,ue=o.CodeTag,Z=ue===void 0?"code":ue,z=o.code,H=z===void 0?(Array.isArray(a)?a[0]:a)||"":z,L=o.astGenerator,K=Ld(o,JZ);L=L||e;var Pe=x?Me.createElement(nJ,{containerStyle:M,codeStyle:h.style||{},numberStyle:b,startingLineNumber:S,codeString:H}):null,le=u.hljs||u['pre[class*="language-"]']||{backgroundColor:"#fff"},D=IS(L)?"hljs":"prismjs",V=g?Object.assign({},K,{style:Object.assign({},le,p)}):Object.assign({},K,{className:K.className?"".concat(D," ").concat(K.className):D,style:Object.assign({},p)});if(E?h.style=Vt(Vt({},h.style),{},{whiteSpace:"pre-wrap"}):h.style=Vt(Vt({},h.style),{},{whiteSpace:"pre"}),!L)return Me.createElement($,V,Pe,Me.createElement(Z,h,H));(I===void 0&&B||E)&&(I=!0),B=B||aJ;var J=[{type:"text",value:H}],ie=sJ({astGenerator:L,language:n,code:H,defaultCodeValue:J});ie.language===null&&(ie.value=J);var de=ie.value.length+S,_t=iJ(ie,I,w,x,O,S,de,b,E);return Me.createElement($,V,Me.createElement(Z,h,!O&&Pe,B({rows:_t,stylesheet:u,useInlineStyles:g})))}}i();var em=N(QS()),ZS=wS(em.default,{});ZS.registerLanguage=em.default.registerLanguage;var ul=ZS;i();var tA=N(eA()),rA=tA.default;i();var cl={marginBottom:-2,marginRight:6},nA={marginBottom:-2};function oA(e){return P("svg",{viewBox:"0 0 24 24",fill:"currentColor",height:"1em",width:"1em",style:cl,...e,children:[P("path",{d:"M12 6a3.939 3.939 0 00-3.934 3.934h2C10.066 8.867 10.934 8 12 8s1.934.867 1.934 1.934c0 .598-.481 1.032-1.216 1.626a9.208 9.208 0 00-.691.599c-.998.997-1.027 2.056-1.027 2.174V15h2l-.001-.633c.001-.016.033-.386.441-.793.15-.15.339-.3.535-.458.779-.631 1.958-1.584 1.958-3.182A3.937 3.937 0 0012 6zm-1 10h2v2h-2z"}),P("path",{d:"M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"})]})}function iA(e){return P("svg",{viewBox:"0 0 24 24",fill:"currentColor",height:"1em",width:"1em",style:cl,...e,children:P("path",{d:"M10.621 19.89V8.75L2.867 19.89H0V4.11h2.758v11.112l7.754-11.113h2.867v11.14L21.16 4.11H24v15.782h-2.73V8.75l-7.755 11.14z"})})}function aA(e){return P("svg",{viewBox:"0 0 512 512",fill:"currentColor",height:"1em",width:"1em",style:cl,...e,children:[P("path",{fill:"none",stroke:"currentColor",strokeLinejoin:"round",strokeWidth:32,d:"M128 80 H384 A48 48 0 0 1 432 128 V384 A48 48 0 0 1 384 432 H128 A48 48 0 0 1 80 384 V128 A48 48 0 0 1 128 80 z"}),P("path",{fill:"none",stroke:"currentColor",strokeLinejoin:"round",strokeWidth:32,d:"M160 144 H352 A16 16 0 0 1 368 160 V352 A16 16 0 0 1 352 368 H160 A16 16 0 0 1 144 352 V160 A16 16 0 0 1 160 144 z"}),P("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:32,d:"M256 80V48M336 80V48M176 80V48M256 464v-32M336 464v-32M176 464v-32M432 256h32M432 336h32M432 176h32M48 256h32M48 336h32M48 176h32"})]})}function sA(e){return P("svg",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,viewBox:"0 0 24 24",height:"1em",width:"1em",style:cl,...e,children:[P("path",{d:"M15 12 A3 3 0 0 1 12 15 A3 3 0 0 1 9 12 A3 3 0 0 1 15 12 z"}),P("path",{d:"M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"})]})}function uA(e){return P("svg",{viewBox:"0 0 1024 1024",fill:"currentColor",height:"1em",width:"1em",style:nA,...e,children:P("path",{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"})})}function lA(e){return P("svg",{viewBox:"0 0 24 24",fill:"currentColor",height:"1em",width:"1em",style:nA,...e,children:P("path",{d:"M21 8.94a1.31 1.31 0 00-.06-.27v-.09a1.07 1.07 0 00-.19-.28l-6-6a1.07 1.07 0 00-.28-.19.32.32 0 00-.09 0 .88.88 0 00-.33-.11H10a3 3 0 00-3 3v1H6a3 3 0 00-3 3v10a3 3 0 003 3h8a3 3 0 003-3v-1h1a3 3 0 003-3V9v-.06zm-6-3.53L17.59 8H16a1 1 0 01-1-1zM15 19a1 1 0 01-1 1H6a1 1 0 01-1-1V9a1 1 0 011-1h1v7a3 3 0 003 3h5zm4-4a1 1 0 01-1 1h-8a1 1 0 01-1-1V5a1 1 0 011-1h3v3a3 3 0 003 3h3z"})})}function rm(e){return P("svg",{viewBox:"0 0 920 1000",fill:"currentColor",height:"1em",width:"1em",style:{color:"lightgrey",fontSize:12},...e,children:P("path",{d:"M454 40c126.667-1.333 235.333 42 326 130s137.333 195.333 140 322c1.333 126.667-42.333 235.667-131 327S592.667 957.333 466 960c-126.667 1.333-235.667-42.333-327-131S1.333 632.667 0 506c-2.667-126.667 40.667-235.667 130-327S327.333 41.333 454 40m52 152c-28 0-49.667 8-65 24-15.333 16-23 32.667-23 50-1.333 18.667 3.667 33.333 15 44 11.333 10.667 27.667 16 49 16 25.333 0 45.667-7.333 61-22 15.333-14.667 23-32.667 23-54 0-38.667-20-58-60-58M386 786c20 0 48-8.667 84-26s71.333-43.333 106-78l-18-24c-32 24-56 36-72 36-9.333 0-10.667-12.667-4-38l42-160c17.333-64 10-96-22-96-20 0-49.667 9.667-89 29s-77.667 44.333-115 75l16 26c34.667-22.667 59.333-34 74-34 8 0 8 11.333 0 34l-36 152c-17.333 69.333-6 104 34 104"})})}function fl(e){return P("svg",{fill:"none",viewBox:"0 0 15 15",height:"1em",width:"1em",...e,style:{fontSize:20,marginBottom:-6,marginRight:-24},children:P("path",{fill:"currentColor",fillRule:"evenodd",d:"M4.182 6.182a.45.45 0 01.636 0L7.5 8.864l2.682-2.682a.45.45 0 01.636.636l-3 3a.45.45 0 01-.636 0l-3-3a.45.45 0 010-.636z",clipRule:"evenodd"})})}ul.registerLanguage("cpp",rA);var pee=!0;function dee(e){if(e.valueOf()>=1)return`${e.round(5)} s`;let t=e.mul(1e3);if(t.valueOf()>=1)return`${t.round(5)} ms`;let r=t.mul(1e3);return r.valueOf()>=1?`${r.round(5)} us`:`${r.mul(1e3).round(5)} ns`}function mee(e){if(e.valueOf()<1e3)return`${e.round(5)} Hz`;let t=e.div(1e3);return t.valueOf()<1e3?`${t.round(5)} kHz`:`${t.div(1e3).round(5)} MHz`}function hee(e){return`${e.equals(0)?0:dee(e.inverse())}`}var fA=pe(e=>{let{freq:t,OCnXsDuty:r}=e(tl).simulation,o=mee(t),n=hee(t),a=e(_n),{timerMode:s}=a,f=xn(a).flatMap(({outputPin:p,outputMode:d,isActiveOutput:h},m)=>h&&[`${p}: ${(r[m]*100).toFixed(2)}%, ${d}`]||[]);return f.unshift(f.length?"":"none"),`/**
  * URL: ${window.location.href}
  * Mode     : ${s}
  * Period   : ${n}
  * Frequency: ${o}
  * Outputs  : ${f.join(`
  *  - `)}
  */`}),pA=pe(e=>e(_n).family==="ch32"?e(gee):`${e(fA)}
void setup(){
  noInterrupts();
${e(dA)}
${e(vee)}
  interrupts();
}
${e(mA)}`),gee=pe(e=>{let t=e(_n),r=t.timerNr,o=r==="1"?"APB2":"APB1",n=r==="1",a=new Set,s=[{mode:t.CompareOutputModeA,pin:t.OCnA_OutputPort,comp:t.ComplementaryA,npin:t.OCnA_NOutputPort},{mode:t.CompareOutputModeB,pin:t.OCnB_OutputPort,comp:t.ComplementaryB,npin:t.OCnB_NOutputPort},{mode:t.CompareOutputModeC,pin:t.OCnC_OutputPort,comp:t.ComplementaryC,npin:t.OCnC_NOutputPort},{mode:t.CompareOutputModeD,pin:t.OCnD_OutputPort}];for(let C of s)!C.pin||!C.mode||C.mode==="disconnect"||(a.add(C.pin),C.comp==="on"&&C.npin&&a.add(C.npin));let u=[...a],f=t.PCFR1&&t.PCFR1!=="none"?t.PCFR1:"",p=["interruptA","interruptB","interruptC","interruptD"].some(C=>t[C]==="on"),d=new Set;d.add(`  RCC->${o}PCENR |= RCC_${o}Periph_TIM${r};`);for(let C of u)d.add(`  RCC->APB2PCENR |= RCC_APB2Periph_GPIO${C[0]};`);f&&d.add("  RCC->APB2PCENR |= RCC_APB2Periph_AFIO;");let h=u.map(C=>{let x=C[0],y=parseInt(C.slice(1)),O=y<8?"CFGLR":"CFGHR",_=`(4 * ${y%8})`;return`  GPIO${x}->${O} &= ~(0xf << ${_});
  GPIO${x}->${O} |= GPIO_CFGLR_OUT_50Mhz_AF_PP << ${_};`}),m=[...d,f?`  AFIO->PCFR1 |= ${f};`:"",...h].filter(Qi).join(`
`),g=[`  TIM${r}->SWEVGR |= TIM_UG;`,n?`  TIM${r}->BDTR |= TIM_MOE;`:"",p?`  NVIC_EnableIRQ(${t.nvicIRQ||`TIM${r}_IRQn`});`:"",`  TIM${r}->CTLR1 |= TIM_CEN;`].filter(Qi).join(`
`);return`${e(fA)}
#include "ch32fun.h"

int main() {
  SystemInit();
${m}
${e(dA)}
${g}
  while (1);
}
${e(mA)}`}),Cee={padding:0,margin:0};function nm(){let e=We(pA);return P(c,{children:P(ul,{language:"cpp",style:kd,customStyle:Cee,children:e})})}var dA=pe(e=>{let{registers:r}=e(Qu);return Xt(r,(a,s)=>{let u=a.map(p=>{let d=p.indexOf("=");if(d!==-1){let g=p.slice(0,d),C=p.slice(d+1),x=e(Eo(g))||"0";if(x==="0")return"";if(C==="")return`${x}`;if(!C.endsWith("_"))return C;let y=parseInt(x),O=[];for(let _=0;y>>_;_++)y>>_&1&&O.push(`${C}${_}`);return O.join(" | ")}let h=p,m=e(Eo(h))||"0";return m==="0"?"":h==="DTR0L"?`${m}`:h==="DTR0H"?`${m} << 4`:`${m} << ${h}`}).filter(Qi),f=u.length?`
    ${u.join(` |
    `)}`:"0";return pee&&f==="0"?"":`  ${s.split("_")[0]} = ${f};`}).flat().filter(Qi).join(`
`)}),vee=pe(e=>{let t=e(_n);if(t.family==="ch32")return"";let o=xn(t).filter(({isUsed:n})=>n).filter(({name:n})=>!["DTR0L","DTR0H"].includes(n)).map(({code:n})=>n).join(`
  `);return o.length&&(o="  "+o),o}),mA=pe(e=>{let t=["interruptVectorCodeA","interruptVectorCodeB","interruptVectorCodeC","interruptVectorCodeD","interruptVectorCodeOVF","interruptVectorCaptureCode"],r=e(Eo("InterruptCommonSignature")),o=t.map(a=>e(Eo(a))||"//nocode").filter(a=>a!=="//nocode");o.length&&r&&(o=[r+" {",...o.map(a=>"  "+a.split(`
`).join(`
  `)),"}"]);let n=o.join(`
`);return n.length&&(n+=`
`),n}),hA=Me.memo(()=>{let[e,t]=Ze(!1),r=()=>{let o=za().get(pA);(0,cA.default)(o),t(!0),console.log(o)};return ke(()=>{setTimeout(()=>t(!1),600)},[e]),P(ci,{style:{position:"absolute",top:2,right:2},icon:e?P(uA,{}):P(lA,{}),circle:!0,size:"sm",color:e?"green":void 0,onClick:r})});var xee=({variable:e,humanName:t})=>{let r=Dt(vt(e)),{selectedOption:o,forcedOption:n,options:a}=We(sS(e)),s=JE[e],u=s?.title;return P(op,{inline:!0,value:[o||n],onChange:f=>r(f[1]),children:[P("p",{children:[t||e," ",u&&P(uo,{placement:"right",trigger:"hover",speaker:P(co,{children:u}),children:P(rm,{})})]}),a.map(({value:f,isSuggested:p,isDisabled:d},h)=>{let m=s?.[f];return P("span",{children:[P(np,{indeterminate:p,value:f,disabled:d,children:f})," ",m&&P(uo,{placement:"right",trigger:"hover",speaker:P(co,{children:m}),children:P(rm,{})})]},h)})]})},_ee=e=>e.map((t,r)=>({panelName:`Group ${r}`,namedVariables:t.map(o=>Object.keys(o[0])).flat().map(o=>({variable:o}))})),CA=e=>Kt(e.flat().map(t=>Object.keys(t[0])).flat()),gA=e=>{let t=CA(e);return Xt(gp,(r,o)=>({panelName:o,namedVariables:Xt(r,(n,a)=>({variable:a,humanName:n})).filter(({variable:n})=>t.includes(n))})).filter(({namedVariables:r})=>r.length)},yee=e=>{let t=CA(e),r=Object.values(gp).map(Object.values).flat();return{panelName:"Internals",namedVariables:Ll(t,r).map(o=>({variable:o}))}};function Oee(){let e=We(Xi),t=We(Xu),r;switch(t){case"Normal":r=gA(e);break;case"With Internals":r=[yee(e),...gA(e)];break;case"By Dependencies":r=_ee(e);break}let o={width:100/(r.length+1)+"%"};return P("div",{className:"TimerSetup",children:[P(yi,{style:{flexGrow:1,overflow:"scroll"},children:[r.map(({panelName:a,namedVariables:s},u)=>P(yi.Item,{style:o,children:P(ru,{header:a,bordered:!0,shaded:!0,defaultExpanded:!0,children:s.map(({variable:f,humanName:p},d)=>P(xee,{variable:f,humanName:p},d))})},a)),P(yi.Item,{style:o,children:P(ru,{style:{position:"relative"},header:P(c,{children:["Code \xA0",P(hA,{})]}),bordered:!0,shaded:!0,defaultExpanded:!0,children:P(nm,{})})},"code")]}),P(Fd,{children:P(Bd,{style:{minHeight:100}})})]})}var vA=Oee;var ra="https://github.com/dbuezas/arduino-web-timers",Tee=()=>{let e=We(vt("timer")),t=We(vt("mcu")),r=Dt(Dr),o=We(Ku),[n,a]=Ga(Xu);return P(c,{children:[P("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/github-fork-ribbon-css/0.2.3/gh-fork-ribbon.min.css"}),P("div",{children:!(Ku===void 0||e===void 0)&&P(lp,{className:"App",children:[P(dp,{children:P(Ci,{appearance:"inverse",children:[P(Ci.Header,{children:["\xA0",P("span",{children:[P("img",{src:"./logo.png",alt:"logo",style:{width:55.5,height:55.5,float:"left"}}),"\xA0",P("span",{style:{float:"left",marginTop:7,textAlign:"center"},children:["ARDUINO WEB",P("br",{}),"TIMERS"]})]})]}),P(Ci.Body,{children:[P(mo,{children:P(Pt,{noCaret:!0,trigger:"click",icon:P(aA,{}),title:P(c,{children:[t," ",P(fl,{})]}),placement:"bottomEnd",children:Xt(Yi,u=>P(Pt.Item,{onSelect:f=>r({mcu:f,timer:"0"}),eventKey:u,children:u},u))})}),P(mo,{activeKey:e,onSelect:u=>r({mcu:t,timer:u}),children:o.map((u,f)=>{let p=u.configs.flat().find(d=>d.timerNr)?.timerNr??f;return P(mo.Item,{eventKey:""+f,icon:P(iA,{}),children:["Timer ",p]},""+f)})}),P(mo,{pullRight:!0,children:[P(Pt,{noCaret:!0,trigger:"click",icon:P(sA,{}),title:P(c,{children:[n," ",P(fl,{})]}),placement:"bottomEnd",children:Xt($i,u=>P(Pt.Item,{onSelect:a,eventKey:u,children:u},u))}),P(Pt,{noCaret:!0,trigger:"click",icon:P(oA,{}),title:P(c,{children:["About ",P(fl,{})]}),placement:"bottomEnd",children:[P(Pt.Item,{href:ra+"/discussions/categories/show-and-tell",target:"_blank",children:"Share what you used this for!"}),P(Pt.Item,{href:ra+"/discussions/categories/q-a",target:"_blank",children:"Q&A"}),P(Pt.Item,{href:ra+"/discussions/categories/ideas",target:"_blank",children:"Propose a feature"}),P(Pt.Item,{href:ra+"/issues/new/choose",target:"_blank",children:"Report a bug"})]})]}),P("iframe",{src:"https://ghbtns.com/github-btn.html?user=dbuezas&repo=arduino-web-timers&type=star&count=true",frameBorder:"0",scrolling:"0",width:"100",height:"20",title:"GitHub",style:{marginTop:18,float:"right"}})]})]})}),P(fp,{style:{padding:10,background:"#fff",position:"relative"},children:P(vA,{},e+"-"+t)})]})}),P("a",{className:"github-fork-ribbon right-bottom fixed",href:ra,"data-ribbon":"Fork me on GitHub",title:"Fork me on GitHub",children:"Fork me on GitHub"})]})},xA=Tee;ar();j.debounceRendering=requestAnimationFrame;Me.render(P(Me.StrictMode,{children:[P(oS,{}),P(xA,{})]}),document.getElementById("root"));})();
/*! Bundled license information:

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)

fraction.js/fraction.js:
  (**
   * @license Fraction.js v4.2.0 05/03/2022
   * https://www.xarg.org/2014/03/rational-numbers-in-javascript/
   *
   * Copyright (c) 2021, Robert Eisele (robert@xarg.org)
   * Dual licensed under the MIT or GPL Version 2 licenses.
   **)

lodash-es/lodash.js:
  (**
   * @license
   * Lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="es" -o ./`
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)
*/
