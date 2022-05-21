(self.webpackChunk=self.webpackChunk||[]).push([[38496],{3905:(e,n,t)=>{"use strict";t.r(n),t.d(n,{MDXContext:()=>l,MDXProvider:()=>f,mdx:()=>p,useMDXComponents:()=>d,withMDXComponents:()=>u});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){return function(n){var t=d(n.components);return r.createElement(e,o({},n,{components:t}))}},d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},f=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},v=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(t),f=a,v=u["".concat(i,".").concat(f)]||u[f]||m[f]||o;return t?r.createElement(v,c(c({ref:n},l),{},{components:t})):r.createElement(v,c({ref:n},l))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=v;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}v.displayName="MDXCreateElement"},36742:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>m});var r=t(79973),a=t(67294),o=t(73727),i=t(52263),c=t(13919),s=t(10412),l=(0,a.createContext)({collectLink:function(){}}),u=t(44996),d=t(18780),f=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];const m=function(e){var n,t,m=e.isNavLink,v=e.to,p=e.href,h=e.activeClassName,y=e.isActive,b=e["data-noBrokenLinkCheck"],w=e.autoAddBaseUrl,g=void 0===w||w,k=(0,r.Z)(e,f),E=(0,i.default)().siteConfig,O=E.trailingSlash,x=E.baseUrl,C=(0,u.useBaseUrlUtils)().withBaseUrl,P=(0,a.useContext)(l),R=v||p,j=(0,c.Z)(R),U=null==R?void 0:R.replace("pathname://",""),M=void 0!==U?(t=U,g&&function(e){return e.startsWith("/")}(t)?C(t):t):void 0;M&&j&&(M=(0,d.applyTrailingSlash)(M,{trailingSlash:O,baseUrl:x}));var N=(0,a.useRef)(!1),_=m?o.OL:o.rU,D=s.default.canUseIntersectionObserver,T=(0,a.useRef)();(0,a.useEffect)((function(){return!D&&j&&null!=M&&window.docusaurus.prefetch(M),function(){D&&T.current&&T.current.disconnect()}}),[T,M,D,j]);var B=null!==(n=null==M?void 0:M.startsWith("#"))&&void 0!==n&&n,S=!M||!j||B;return M&&j&&!B&&!b&&P.collectLink(M),S?a.createElement("a",Object.assign({href:M},R&&!j&&{target:"_blank",rel:"noopener noreferrer"},k)):a.createElement(_,Object.assign({},k,{onMouseEnter:function(){N.current||null==M||(window.docusaurus.preload(M),N.current=!0)},innerRef:function(e){var n,t;D&&e&&j&&(n=e,t=function(){null!=M&&window.docusaurus.prefetch(M)},T.current=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(T.current.unobserve(n),T.current.disconnect(),t())}))})),T.current.observe(n))},to:M||""},m&&{isActive:y,activeClassName:h}))}},13919:(e,n,t)=>{"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}t.d(n,{b:()=>r,Z:()=>a})},44996:(e,n,t)=>{"use strict";t.r(n),t.d(n,{useBaseUrlUtils:()=>o,default:()=>i});var r=t(52263),a=t(13919);function o(){var e=(0,r.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,o=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,r){var o=void 0===r?{}:r,i=o.forcePrependBaseUrl,c=void 0!==i&&i,s=o.absolute,l=void 0!==s&&s;if(!t)return t;if(t.startsWith("#"))return t;if((0,a.b)(t))return t;if(c)return n+t;var u=t.startsWith(n)?t:n+t.replace(/^\//,"");return l?e+u:u}(o,t,e,n)}}}function i(e,n){return void 0===n&&(n={}),(0,o().withBaseUrl)(e,n)}},8802:(e,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,n){var t=n.trailingSlash,r=n.baseUrl;if(e.startsWith("#"))return e;if(void 0===t)return e;var a,o=e.split(/[#?]/)[0],i="/"===o||o===r?o:(a=o,t?function(e){return e.endsWith("/")?e:e+"/"}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));return e.replace(o,i)}},18780:function(e,n,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.uniq=n.applyTrailingSlash=void 0;var a=t(8802);Object.defineProperty(n,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var o=t(29964);Object.defineProperty(n,"uniq",{enumerable:!0,get:function(){return r(o).default}})},29964:(e,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return Array.from(new Set(e))}},68629:(e,n,t)=>{"use strict";t.d(n,{Z:()=>m});var r=t(36742),a=t(44256),o=t(67294);function i(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function c(e){var n=e.children;return o.createElement("div",{className:"docsRating",id:"docsRating"},o.createElement("hr",null),n)}var s=function(){var e=o.useState(!1),n=e[0],t=e[1],r=function(e){t(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return n?"Thank you for letting us know!":o.createElement(o.Fragment,null,"Is this page useful?",o.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(1)}},o.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),o.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(0)}},o.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},l=function(){return o.createElement("p",null,"Let us know how these docs can be improved by",o.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:i},"Filing a task"))},u=function(){return o.createElement("p",null,"Help us make the site even better by"," ",o.createElement(r.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},d=function(){return o.createElement(c,null,o.createElement(l,null),o.createElement(s,null),o.createElement(u,null))},f=function(){return o.createElement(c,null,o.createElement(s,null),o.createElement(u,null))};const m=function(){return(0,a.fbContent)({internal:o.createElement(d,null),external:o.createElement(f,null)})}},91154:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>u,toc:()=>d,default:()=>m});var r=t(74034),a=t(79973),o=(t(67294),t(3905)),i=t(68629),c=["components"],s={id:"use-relay-environment",title:"useRelayEnvironment",slug:"/api-reference/use-relay-environment/"},l=void 0,u={unversionedId:"api-reference/hooks/use-relay-environment",id:"version-v11.0.0/api-reference/hooks/use-relay-environment",isDocsHomePage:!1,title:"useRelayEnvironment",description:"useRelayEnvironment",source:"@site/versioned_docs/version-v11.0.0/api-reference/hooks/use-relay-environment.md",sourceDirName:"api-reference/hooks",slug:"/api-reference/use-relay-environment/",permalink:"/docs/v11.0.0/api-reference/use-relay-environment/",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v11.0.0/api-reference/hooks/use-relay-environment.md",tags:[],version:"v11.0.0",lastUpdatedBy:"Robert Balicki",lastUpdatedAt:1653138960,formattedLastUpdatedAt:"5/21/2022",frontMatter:{id:"use-relay-environment",title:"useRelayEnvironment",slug:"/api-reference/use-relay-environment/"},sidebar:"version-v11.0.0/docs",previous:{title:"RelayEnvironmentProvider",permalink:"/docs/v11.0.0/api-reference/relay-environment-provider/"},next:{title:"usePreloadedQuery",permalink:"/docs/v11.0.0/api-reference/use-preloaded-query/"}},d=[{value:"<code>useRelayEnvironment</code>",id:"userelayenvironment",children:[],level:2}],f={toc:d};function m(e){var n=e.components,t=(0,a.Z)(e,c);return(0,o.mdx)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h2",{id:"userelayenvironment"},(0,o.mdx)("inlineCode",{parentName:"h2"},"useRelayEnvironment")),(0,o.mdx)("p",null,"Hook used to access a Relay environment that was set by a ",(0,o.mdx)("a",{parentName:"p",href:"../relay-environment-provider"},(0,o.mdx)("inlineCode",{parentName:"a"},"RelayEnvironmentProvider")),":"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"const React = require('React');\n\nconst {useRelayEnvironment} = require('react-relay');\n\nfunction MyComponent() {\n  const environment = useRelayEnvironment();\n\n  const handler = useCallback(() => {\n    // For example, can be used to pass the environment to functions\n    // that require a Relay environment.\n    commitMutation(environment, ...);\n  }, [environment])\n\n  return (...);\n}\n\nmodule.exports = MyComponent;\n")),(0,o.mdx)(i.Z,{mdxType:"DocsRating"}))}m.isMDXComponent=!0}}]);