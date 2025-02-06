/*! For license information please see lib-router.895048b1.js.LICENSE.txt */
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["118"],{9021:function(e,t,n){var a,r,i,o;function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,{J0:()=>c,RQ:()=>x,X3:()=>_,Zn:()=>w,aU:()=>a,cP:()=>v,cm:()=>S,fp:()=>m,lX:()=>u,pC:()=>P}),(i=a||(a={})).Pop="POP",i.Push="PUSH",i.Replace="REPLACE";let s="popstate";function u(e){return void 0===e&&(e={}),function(e,t,n,r){void 0===r&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,u=i.history,h=a.Pop,v=null,m=g();function g(){return(u.state||{idx:null}).idx}function y(){h=a.Pop;let e=g(),t=null==e?null:e-m;m=e,v&&v({action:h,location:w.location,delta:t})}function b(e){let t="null"!==i.location.origin?i.location.origin:i.location.href,n="string"==typeof e?e:f(e);return c(t,"No window.location.(origin|href) available to create URL for href: "+(n=n.replace(/ $/,"%20"))),new URL(n,t)}null==m&&(m=0,u.replaceState(l({},u.state,{idx:m}),""));let w={get action(){return h},get location(){return e(i,u)},listen(e){if(v)throw Error("A history only accepts one active listener");return i.addEventListener(s,y),v=e,()=>{i.removeEventListener(s,y),v=null}},createHref:e=>t(i,e),createURL:b,encodeLocation(e){let t=b(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){h=a.Push;let n=d(w.location,e,t),r=p(n,m=g()+1),l=w.createHref(n);try{u.pushState(r,"",l)}catch(e){if(e instanceof DOMException&&"DataCloneError"===e.name)throw e;i.location.assign(l)}o&&v&&v({action:h,location:w.location,delta:1})},replace:function(e,t){h=a.Replace;let r=d(w.location,e,t);n&&n(r,e);let i=p(r,m=g()),l=w.createHref(r);u.replaceState(i,"",l),o&&v&&v({action:h,location:w.location,delta:0})},go:e=>u.go(e)};return w}(function(e,t){let{pathname:n,search:a,hash:r}=e.location;return d("",{pathname:n,search:a,hash:r},t.state&&t.state.usr||null,t.state&&t.state.key||"default")},function(e,t){return"string"==typeof t?t:f(t)},null,e)}function c(e,t){if(!1===e||null==e)throw Error(t)}function h(e,t){if(!e){"undefined"!=typeof console&&console.warn(t);try{throw Error(t)}catch(e){}}}function p(e,t){return{usr:e.state,key:e.key,idx:t}}function d(e,t,n,a){return void 0===n&&(n=null),l({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?v(t):t,{state:n,key:t&&t.key||a||Math.random().toString(36).substr(2,8)})}function f(e){let{pathname:t="/",search:n="",hash:a=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),a&&"#"!==a&&(t+="#"===a.charAt(0)?a:"#"+a),t}function v(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let a=e.indexOf("?");a>=0&&(t.search=e.substr(a),e=e.substr(0,a)),e&&(t.pathname=e)}return t}function m(e,t,n){return void 0===n&&(n="/"),function(e,t,n,a){let r=w(("string"==typeof t?v(t):t).pathname||"/",n);if(null==r)return null;let i=function e(t,n,a,r){void 0===n&&(n=[]),void 0===a&&(a=[]),void 0===r&&(r="");let i=(t,i,o)=>{let l={relativePath:void 0===o?t.path||"":o,caseSensitive:!0===t.caseSensitive,childrenIndex:i,route:t};l.relativePath.startsWith("/")&&(c(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),l.relativePath=l.relativePath.slice(r.length));let s=x([r,l.relativePath]),u=a.concat(l);if(t.children&&t.children.length>0&&(c(!0!==t.index,'Index routes must not have child routes. Please remove all child routes from route path "'+s+'".'),e(t.children,n,u,s)),null!=t.path||t.index){var h,p;let e,a;n.push({path:s,score:(h=s,p=t.index,a=(e=h.split("/")).length,e.some(y)&&(a+=-2),p&&(a+=2),e.filter(e=>!y(e)).reduce((e,t)=>e+(g.test(t)?3:""===t?1:10),a)),routesMeta:u})}};return t.forEach((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let n of function e(t){let n=t.split("/");if(0===n.length)return[];let[a,...r]=n,i=a.endsWith("?"),o=a.replace(/\?$/,"");if(0===r.length)return i?[o,""]:[o];let l=e(r.join("/")),s=[];return s.push(...l.map(e=>""===e?o:[o,e].join("/"))),i&&s.push(...l),s.map(e=>t.startsWith("/")&&""===e?"/":e)}(e.path))i(e,t,n);else i(e,t)}),n}(e);(function(e){e.sort((e,t)=>{var n,a;return e.score!==t.score?t.score-e.score:(n=e.routesMeta.map(e=>e.childrenIndex),a=t.routesMeta.map(e=>e.childrenIndex),n.length===a.length&&n.slice(0,-1).every((e,t)=>e===a[t])?n[n.length-1]-a[a.length-1]:0)})})(i);let o=null;for(let e=0;null==o&&e<i.length;++e){let t=function(e){try{return e.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(t){return h(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}(r);o=function(e,t,n){void 0===n&&(n=!1);let{routesMeta:a}=e,r={},i="/",o=[];for(let e=0;e<a.length;++e){let l=a[e],s=e===a.length-1,u="/"===i?t:t.slice(i.length)||"/",c=b({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},u),h=l.route;if(!c&&s&&n&&!a[a.length-1].route.index&&(c=b({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},u)),!c)return null;Object.assign(r,c.params),o.push({params:r,pathname:x([i,c.pathname]),pathnameBase:C(x([i,c.pathnameBase])),route:h}),"/"!==c.pathnameBase&&(i=x([i,c.pathnameBase]))}return o}(i[e],t,a)}return o}(e,t,n,!1)}(o=r||(r={})).data="data",o.deferred="deferred",o.redirect="redirect",o.error="error";let g=/^:[\w-]+$/,y=e=>"*"===e;function b(e,t){var n,a,r;let i,o;"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[l,s]=(n=e.path,a=e.caseSensitive,r=e.end,void 0===a&&(a=!1),void 0===r&&(r=!0),h("*"===n||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were "'+n.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+n.replace(/\*$/,"/*")+'".'),i=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(e,t,n)=>(i.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")),n.endsWith("*")?(i.push({paramName:"*"}),o+="*"===n||"/*"===n?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?o+="\\/*$":""!==n&&"/"!==n&&(o+="(?:(?=\\/|$))"),[new RegExp(o,a?void 0:"i"),i]),u=t.match(l);if(!u)return null;let c=u[0],p=c.replace(/(.)\/+$/,"$1"),d=u.slice(1);return{params:s.reduce((e,t,n)=>{let{paramName:a,isOptional:r}=t;if("*"===a){let e=d[n]||"";p=c.slice(0,c.length-e.length).replace(/(.)\/+$/,"$1")}let i=d[n];return r&&!i?e[a]=void 0:e[a]=(i||"").replace(/%2F/g,"/"),e},{}),pathname:c,pathnameBase:p,pattern:e}}function w(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,a=e.charAt(n);return a&&"/"!==a?null:e.slice(n)||"/"}function R(e,t,n,a){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field [")+JSON.stringify(a)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function S(e,t){let n=e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0);return t?n.map((e,t)=>t===n.length-1?e.pathname:e.pathnameBase):n.map(e=>e.pathnameBase)}function P(e,t,n,a){let r,i;void 0===a&&(a=!1),"string"==typeof e?r=v(e):(c(!(r=l({},e)).pathname||!r.pathname.includes("?"),R("?","pathname","search",r)),c(!r.pathname||!r.pathname.includes("#"),R("#","pathname","hash",r)),c(!r.search||!r.search.includes("#"),R("#","search","hash",r)));let o=""===e||""===r.pathname,s=o?"/":r.pathname;if(null==s)i=n;else{let e=t.length-1;if(!a&&s.startsWith("..")){let t=s.split("/");for(;".."===t[0];)t.shift(),e-=1;r.pathname=t.join("/")}i=e>=0?t[e]:"/"}let u=function(e,t){var n;let a;void 0===t&&(t="/");let{pathname:r,search:i="",hash:o=""}="string"==typeof e?v(e):e;return{pathname:r?r.startsWith("/")?r:(n=r,a=t.replace(/\/+$/,"").split("/"),n.split("/").forEach(e=>{".."===e?a.length>1&&a.pop():"."!==e&&a.push(e)}),a.length>1?a.join("/"):"/"):t,search:U(i),hash:E(o)}}(r,i),h=s&&"/"!==s&&s.endsWith("/"),p=(o||"."===s)&&n.endsWith("/");return!u.pathname.endsWith("/")&&(h||p)&&(u.pathname+="/"),u}let x=e=>e.join("/").replace(/\/\/+/g,"/"),C=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),U=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",E=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";class _ extends Error{}Symbol("deferred")},3985:function(e,t,n){n.d(t,{VK:()=>f});var a,r,i,o,l,s,u=n(4194),c=n(6321),h=n(7272),p=n(9021);try{window.__reactRouterVersion="6"}catch(e){}let d=(i||(i=n.t(u,2))).startTransition;function f(e){let{basename:t,children:n,future:a,window:r}=e,i=u.useRef();null==i.current&&(i.current=(0,p.lX)({window:r,v5Compat:!0}));let o=i.current,[l,s]=u.useState({action:o.action,location:o.location}),{v7_startTransition:c}=a||{},f=u.useCallback(e=>{c&&d?d(()=>s(e)):s(e)},[s,c]);return u.useLayoutEffect(()=>o.listen(f),[o,f]),u.useEffect(()=>(0,h.$A)(a),[a]),u.createElement(h.F0,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:o,future:a})}(o||(o=n.t(c,2))).flushSync,(i||(i=n.t(u,2))).useId,"undefined"!=typeof window&&void 0!==window.document&&window.document.createElement,(a=l||(l={})).UseScrollRestoration="useScrollRestoration",a.UseSubmit="useSubmit",a.UseSubmitFetcher="useSubmitFetcher",a.UseFetcher="useFetcher",a.useViewTransitionState="useViewTransitionState",(r=s||(s={})).UseFetcher="useFetcher",r.UseFetchers="useFetchers",r.UseScrollRestoration="useScrollRestoration"},7272:function(e,t,n){n.d(t,{$A:()=>R,F0:()=>S,TH:()=>v,s0:()=>g});var a,r,i,o,l=n(4194),s=n(9021);function u(){return(u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}let c=l.createContext(null),h=l.createContext(null),p=l.createContext(null),d=l.createContext({outlet:null,matches:[],isDataRoute:!1});function f(){return null!=l.useContext(p)}function v(){return f()||(0,s.J0)(!1),l.useContext(p).location}function m(e){l.useContext(h).static||l.useLayoutEffect(e)}function g(){let{isDataRoute:e}=l.useContext(d);return e?function(){var e,t;let n,a,r,i;let{router:o}=(y.UseNavigateStable,(n=l.useContext(c))||(0,s.J0)(!1),n),h=(b.UseNavigateStable,(i=((a=l.useContext(d))||(0,s.J0)(!1),r=a).matches[r.matches.length-1]).route.id||(0,s.J0)(!1),i.route.id),p=l.useRef(!1);return m(()=>{p.current=!0}),l.useCallback(function(e,t){void 0===t&&(t={}),p.current&&("number"==typeof e?o.navigate(e):o.navigate(e,u({fromRouteId:h},t)))},[o,h])}():function(){f()||(0,s.J0)(!1);let e=l.useContext(c),{basename:t,future:n,navigator:a}=l.useContext(h),{matches:r}=l.useContext(d),{pathname:i}=v(),o=JSON.stringify((0,s.cm)(r,n.v7_relativeSplatPath)),u=l.useRef(!1);return m(()=>{u.current=!0}),l.useCallback(function(n,r){if(void 0===r&&(r={}),!u.current)return;if("number"==typeof n){a.go(n);return}let l=(0,s.pC)(n,JSON.parse(o),i,"path"===r.relative);null==e&&"/"!==t&&(l.pathname="/"===l.pathname?t:(0,s.RQ)([t,l.pathname])),(r.replace?a.replace:a.push)(l,r.state,r)},[t,a,o,i,e])}()}l.Component;var y=((a=y||{}).UseBlocker="useBlocker",a.UseRevalidator="useRevalidator",a.UseNavigateStable="useNavigate",a),b=((r=b||{}).UseBlocker="useBlocker",r.UseLoaderData="useLoaderData",r.UseActionData="useActionData",r.UseRouteError="useRouteError",r.UseNavigation="useNavigation",r.UseRouteLoaderData="useRouteLoaderData",r.UseMatches="useMatches",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r.UseRouteId="useRouteId",r);let w=(e,t,n)=>{};function R(e,t){(null==e?void 0:e.v7_startTransition)===void 0&&w("v7_startTransition","React Router will begin wrapping state updates in `React.startTransition` in v7","https://reactrouter.com/v6/upgrading/future#v7_starttransition"),(null==e?void 0:e.v7_relativeSplatPath)!==void 0||t&&t.v7_relativeSplatPath||w("v7_relativeSplatPath","Relative route resolution within Splat routes is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath"),t&&(void 0===t.v7_fetcherPersist&&w("v7_fetcherPersist","The persistence behavior of fetchers is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_fetcherpersist"),void 0===t.v7_normalizeFormMethod&&w("v7_normalizeFormMethod","Casing of `formMethod` fields is being normalized to uppercase in v7","https://reactrouter.com/v6/upgrading/future#v7_normalizeformmethod"),void 0===t.v7_partialHydration&&w("v7_partialHydration","`RouterProvider` hydration behavior is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_partialhydration"),void 0===t.v7_skipActionErrorRevalidation&&w("v7_skipActionErrorRevalidation","The revalidation behavior after 4xx/5xx `action` responses is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_skipactionerrorrevalidation"))}function S(e){let{basename:t="/",children:n=null,location:a,navigationType:r=s.aU.Pop,navigator:i,static:o=!1,future:c}=e;f()&&(0,s.J0)(!1);let d=t.replace(/^\/*/,"/"),v=l.useMemo(()=>({basename:d,navigator:i,static:o,future:u({v7_relativeSplatPath:!1},c)}),[d,c,i,o]);"string"==typeof a&&(a=(0,s.cP)(a));let{pathname:m="/",search:g="",hash:y="",state:b=null,key:w="default"}=a,R=l.useMemo(()=>{let e=(0,s.Zn)(m,d);return null==e?null:{location:{pathname:e,search:g,hash:y,state:b,key:w},navigationType:r}},[d,m,g,y,b,w,r]);return null==R?null:l.createElement(h.Provider,{value:v},l.createElement(p.Provider,{children:n,value:R}))}(o||(o=n.t(l,2))).startTransition;var P=((i=P||{})[i.pending=0]="pending",i[i.success=1]="success",i[i.error=2]="error",i);new Promise(()=>{}),l.Component}}]);