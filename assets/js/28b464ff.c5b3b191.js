(self.webpackChunk=self.webpackChunk||[]).push([[87738],{3905:(e,n,r)=>{"use strict";r.r(n),r.d(n,{MDXContext:()=>d,MDXProvider:()=>m,mdx:()=>h,useMDXComponents:()=>c,withMDXComponents:()=>s});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},i.apply(this,arguments)}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=t.createContext({}),s=function(e){return function(n){var r=c(n.components);return t.createElement(e,i({},n,{components:r}))}},c=function(e){var n=t.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},m=function(e){var n=c(e.components);return t.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),s=c(r),m=a,f=s["".concat(l,".").concat(m)]||s[m]||p[m]||i;return r?t.createElement(f,o(o({ref:n},d),{},{components:r})):t.createElement(f,o({ref:n},d))}));function h(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=f;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=r[d];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},36742:(e,n,r)=>{"use strict";r.r(n),r.d(n,{default:()=>p});var t=r(79973),a=r(67294),i=r(73727),l=r(52263),o=r(13919),u=r(10412),d=(0,a.createContext)({collectLink:function(){}}),s=r(44996),c=r(18780),m=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];const p=function(e){var n,r,p=e.isNavLink,f=e.to,h=e.href,y=e.activeClassName,v=e.isActive,w=e["data-noBrokenLinkCheck"],x=e.autoAddBaseUrl,b=void 0===x||x,g=(0,t.Z)(e,m),N=(0,l.default)().siteConfig,k=N.trailingSlash,q=N.baseUrl,C=(0,s.useBaseUrlUtils)().withBaseUrl,O=(0,a.useContext)(d),Q=f||h,E=(0,o.Z)(Q),P=null==Q?void 0:Q.replace("pathname://",""),R=void 0!==P?(r=P,b&&function(e){return e.startsWith("/")}(r)?C(r):r):void 0;R&&E&&(R=(0,c.applyTrailingSlash)(R,{trailingSlash:k,baseUrl:q}));var j=(0,a.useRef)(!1),T=p?i.OL:i.rU,A=u.default.canUseIntersectionObserver,D=(0,a.useRef)();(0,a.useEffect)((function(){return!A&&E&&null!=R&&window.docusaurus.prefetch(R),function(){A&&D.current&&D.current.disconnect()}}),[D,R,A,E]);var L=null!==(n=null==R?void 0:R.startsWith("#"))&&void 0!==n&&n,U=!R||!E||L;return R&&E&&!L&&!w&&O.collectLink(R),U?a.createElement("a",Object.assign({href:R},Q&&!E&&{target:"_blank",rel:"noopener noreferrer"},g)):a.createElement(T,Object.assign({},g,{onMouseEnter:function(){j.current||null==R||(window.docusaurus.preload(R),j.current=!0)},innerRef:function(e){var n,r;A&&e&&E&&(n=e,r=function(){null!=R&&window.docusaurus.prefetch(R)},D.current=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(D.current.unobserve(n),D.current.disconnect(),r())}))})),D.current.observe(n))},to:R||""},p&&{isActive:v,activeClassName:y}))}},13919:(e,n,r)=>{"use strict";function t(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!t(e)}r.d(n,{b:()=>t,Z:()=>a})},44996:(e,n,r)=>{"use strict";r.r(n),r.d(n,{useBaseUrlUtils:()=>i,default:()=>l});var t=r(52263),a=r(13919);function i(){var e=(0,t.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,r=void 0===n?"/":n,i=e.url;return{withBaseUrl:function(e,n){return function(e,n,r,t){var i=void 0===t?{}:t,l=i.forcePrependBaseUrl,o=void 0!==l&&l,u=i.absolute,d=void 0!==u&&u;if(!r)return r;if(r.startsWith("#"))return r;if((0,a.b)(r))return r;if(o)return n+r;var s=r.startsWith(n)?r:n+r.replace(/^\//,"");return d?e+s:s}(i,r,e,n)}}}function l(e,n){return void 0===n&&(n={}),(0,i().withBaseUrl)(e,n)}},8802:(e,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,n){var r=n.trailingSlash,t=n.baseUrl;if(e.startsWith("#"))return e;if(void 0===r)return e;var a,i=e.split(/[#?]/)[0],l="/"===i||i===t?i:(a=i,r?function(e){return e.endsWith("/")?e:e+"/"}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));return e.replace(i,l)}},18780:function(e,n,r){"use strict";var t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.uniq=n.applyTrailingSlash=void 0;var a=r(8802);Object.defineProperty(n,"applyTrailingSlash",{enumerable:!0,get:function(){return t(a).default}});var i=r(29964);Object.defineProperty(n,"uniq",{enumerable:!0,get:function(){return t(i).default}})},29964:(e,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return Array.from(new Set(e))}},68629:(e,n,r)=>{"use strict";r.d(n,{Z:()=>p});var t=r(36742),a=r(44256),i=r(67294);function l(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function o(e){var n=e.children;return i.createElement("div",{className:"docsRating",id:"docsRating"},i.createElement("hr",null),n)}var u=function(){var e=i.useState(!1),n=e[0],r=e[1],t=function(e){r(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return n?"Thank you for letting us know!":i.createElement(i.Fragment,null,"Is this page useful?",i.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return t(1)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),i.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return t(0)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},d=function(){return i.createElement("p",null,"Let us know how these docs can be improved by",i.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:l},"Filing a task"))},s=function(){return i.createElement("p",null,"Help us make the site even better by"," ",i.createElement(t.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},c=function(){return i.createElement(o,null,i.createElement(d,null),i.createElement(u,null),i.createElement(s,null))},m=function(){return i.createElement(o,null,i.createElement(u,null),i.createElement(s,null))};const p=function(){return(0,a.fbContent)({internal:i.createElement(c,null),external:i.createElement(m,null)})}},56163:(e,n,r)=>{"use strict";r.r(n),r.d(n,{frontMatter:()=>u,contentTitle:()=>d,metadata:()=>s,toc:()=>c,default:()=>p});var t=r(74034),a=r(79973),i=(r(67294),r(3905)),l=r(68629),o=["components"],u={id:"use-query-loader",title:"useQueryLoader",slug:"/api-reference/use-query-loader/"},d=void 0,s={unversionedId:"api-reference/hooks/use-query-loader",id:"version-v11.0.0/api-reference/hooks/use-query-loader",isDocsHomePage:!1,title:"useQueryLoader",description:"useQueryLoader",source:"@site/versioned_docs/version-v11.0.0/api-reference/hooks/use-query-loader.md",sourceDirName:"api-reference/hooks",slug:"/api-reference/use-query-loader/",permalink:"/docs/v11.0.0/api-reference/use-query-loader/",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v11.0.0/api-reference/hooks/use-query-loader.md",tags:[],version:"v11.0.0",lastUpdatedBy:"Jan Kassens",lastUpdatedAt:1649091430,formattedLastUpdatedAt:"4/4/2022",frontMatter:{id:"use-query-loader",title:"useQueryLoader",slug:"/api-reference/use-query-loader/"},sidebar:"version-v11.0.0/docs",previous:{title:"usePreloadedQuery",permalink:"/docs/v11.0.0/api-reference/use-preloaded-query/"},next:{title:"loadQuery",permalink:"/docs/v11.0.0/api-reference/load-query/"}},c=[{value:"<code>useQueryLoader</code>",id:"usequeryloader",children:[{value:"Arguments",id:"arguments",children:[],level:3},{value:"Flow Type Parameters",id:"flow-type-parameters",children:[],level:3},{value:"Return value",id:"return-value",children:[],level:3},{value:"Behavior",id:"behavior",children:[],level:3}],level:2}],m={toc:c};function p(e){var n=e.components,r=(0,a.Z)(e,o);return(0,i.mdx)("wrapper",(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h2",{id:"usequeryloader"},(0,i.mdx)("inlineCode",{parentName:"h2"},"useQueryLoader")),(0,i.mdx)("p",null,"Hook used to make it easy to safely load and retain queries. It will keep a query reference stored in state, and dispose of it when the component is disposed or it is no longer accessible via state."),(0,i.mdx)("p",null,"This hook is designed to be used with ",(0,i.mdx)("a",{parentName:"p",href:"../use-preloaded-query"},(0,i.mdx)("inlineCode",{parentName:"a"},"usePreloadedQuery")),' to implement the "render-as-you-fetch" pattern. For more information, see the ',(0,i.mdx)("a",{parentName:"p",href:"../../guided-tour/rendering/queries/"},"Fetching Queries for Render")," guide."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"import type {AppQuery as AppQueryType} from 'AppQuery.graphql';\nimport type {PreloadedQuery} from 'react-relay';\n\nconst {useQueryLoader, usePreloadedQuery} = require('react-relay');\n\nconst AppQuery = graphql`\n  query AppQuery($id: ID!) {\n    user(id: $id) {\n      name\n    }\n  }\n`;\n\ntype Props = {\n  initialQueryRef: PreloadedQuery<AppQueryType>,\n};\n\nfunction QueryFetcherExample(props: Props) {\n  const [\n    queryReference,\n    loadQuery,\n    disposeQuery,\n  ] = useQueryLoader(\n    AppQuery,\n    props.initialQueryRef, /* e.g. provided by router */\n  );\n\n  if (queryReference == null) {\n    return (\n      <Button onClick={() => loadQuery({})}> Click to reveal the name </Button>\n    );\n  }\n\n  return (\n    <>\n      <Button onClick={disposeQuery}>\n        Click to hide the name and dispose the query.\n      </Button>\n      <React.Suspense fallback=\"Loading\">\n        <NameDisplay queryReference={queryReference} />\n      </React.Suspense>\n    </>\n  );\n}\n\nfunction NameDisplay({ queryReference }) {\n  const data = usePreloadedQuery<AppQueryType>(AppQuery, queryReference);\n\n  return <h1>{data.user?.name}</h1>;\n}\n")),(0,i.mdx)("h3",{id:"arguments"},"Arguments"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"query"),": GraphQL query specified using a ",(0,i.mdx)("inlineCode",{parentName:"li"},"graphql")," template literal."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"initialQueryRef"),": ",(0,i.mdx)("em",{parentName:"li"},(0,i.mdx)("em",{parentName:"em"},"[Optional]"))," An initial ",(0,i.mdx)("inlineCode",{parentName:"li"},"PreloadedQuery")," to be used as the initial value of the ",(0,i.mdx)("inlineCode",{parentName:"li"},"queryReference")," stored in state and returned by ",(0,i.mdx)("inlineCode",{parentName:"li"},"useQueryLoader"),".")),(0,i.mdx)("h3",{id:"flow-type-parameters"},"Flow Type Parameters"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"TQuery"),": the type of the query")),(0,i.mdx)("h3",{id:"return-value"},"Return value"),(0,i.mdx)("p",null,"A tuple containing the following values:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"queryReference"),": the query reference, or ",(0,i.mdx)("inlineCode",{parentName:"li"},"null"),"."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"loadQuery"),": a callback that, when executed, will load a query, which will be accessible as ",(0,i.mdx)("inlineCode",{parentName:"li"},"queryReference"),". If a previous query was loaded, it will dispose of it. It will throw an error if called during React's render phase.",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"Parameters",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"variables"),": the variables with which the query is loaded."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"options"),": ",(0,i.mdx)("inlineCode",{parentName:"li"},"LoadQueryOptions"),". An optional options object, containing the following keys:",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"fetchPolicy"),": ",(0,i.mdx)("em",{parentName:"li"},(0,i.mdx)("em",{parentName:"em"},"[Optional]"))," Determines if cached data should be used, and when to send a network request based on the cached data that is currently available in the Relay store (for more details, see our ",(0,i.mdx)("a",{parentName:"li",href:"https://www.internalfb.com/intern/wiki/Relay/guided-tour-of-relay/reusing-cached-data-for-rendering/#fetch-policies"},"Fetch Policies")," and ",(0,i.mdx)("a",{parentName:"li",href:"https://www.internalfb.com/intern/wiki/Relay/guided-tour-of-relay/reusing-cached-data-for-rendering/#garbage-collection-in-re"},"Garbage Collection")," guides):",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},'"store-or-network": ',(0,i.mdx)("em",{parentName:"li"},(0,i.mdx)("em",{parentName:"em"},"(default)"))," ",(0,i.mdx)("em",{parentName:"li"},"will")," reuse locally cached data and will ",(0,i.mdx)("em",{parentName:"li"},"only")," send a network request if any data for the query is missing. If the query is fully cached, a network request will ",(0,i.mdx)("em",{parentName:"li"},"not")," be made."),(0,i.mdx)("li",{parentName:"ul"},'"store-and-network": ',(0,i.mdx)("em",{parentName:"li"},"will")," reuse locally cached data and will ",(0,i.mdx)("em",{parentName:"li"},"always")," send a network request, regardless of whether any data was missing from the local cache or not."),(0,i.mdx)("li",{parentName:"ul"},'"network-only": ',(0,i.mdx)("em",{parentName:"li"},"will")," ",(0,i.mdx)("em",{parentName:"li"},"not")," reuse locally cached data, and will ",(0,i.mdx)("em",{parentName:"li"},"always")," send a network request to fetch the query, ignoring any data that might be locally cached in Relay."))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"networkCacheConfig"),": ",(0,i.mdx)("em",{parentName:"li"},(0,i.mdx)("em",{parentName:"em"},"[Optional]"))," Default value: ",(0,i.mdx)("inlineCode",{parentName:"li"},"{force: true}"),". Object containing cache config options for the ",(0,i.mdx)("em",{parentName:"li"},"network layer"),". Note that the network layer may contain an ",(0,i.mdx)("em",{parentName:"li"},"additional")," query response cache which will reuse network responses for identical queries. If you want to bypass this cache completely (which is the default behavior), pass ",(0,i.mdx)("inlineCode",{parentName:"li"},"{force: true}")," as the value for this option."))))))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"disposeQuery"),": a callback that, when executed, will set ",(0,i.mdx)("inlineCode",{parentName:"li"},"queryReference")," to ",(0,i.mdx)("inlineCode",{parentName:"li"},"null")," and call ",(0,i.mdx)("inlineCode",{parentName:"li"},".dispose()")," on it. It has type ",(0,i.mdx)("inlineCode",{parentName:"li"},"() => void"),". It should not be called during React's render phase.")),(0,i.mdx)("h3",{id:"behavior"},"Behavior"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"The ",(0,i.mdx)("inlineCode",{parentName:"li"},"loadQuery")," callback will fetch data if passed a query, or data and the query if passed a preloadable concrete request. Once both the query and data are available, the data from the query will be written to the store. This differs from the behavior of ",(0,i.mdx)("inlineCode",{parentName:"li"},"preloadQuery_DEPRECATED"),", which would only write data to the store if the query was passed to ",(0,i.mdx)("inlineCode",{parentName:"li"},"usePreloadedQuery"),"."),(0,i.mdx)("li",{parentName:"ul"},"This query reference will be retained by the Relay store, preventing the data from being garbage collected. Once ",(0,i.mdx)("inlineCode",{parentName:"li"},".dispose()")," is called on the query reference, the data is liable to be garbage collected."),(0,i.mdx)("li",{parentName:"ul"},"The ",(0,i.mdx)("inlineCode",{parentName:"li"},"loadQuery")," callback will throw an error if it is called during React's render phase.")),(0,i.mdx)(l.Z,{mdxType:"DocsRating"}))}p.isMDXComponent=!0}}]);