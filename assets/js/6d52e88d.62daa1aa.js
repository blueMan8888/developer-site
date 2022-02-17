"use strict";(self.webpackChunkdeveloper=self.webpackChunkdeveloper||[]).push([[898],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=i,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},41481:function(e,t){var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.subscriptions={},window.addEventListener("message",this.handleMsg.bind(this),!1)}return n(e,[{key:"on",value:function(e,t){this.subscriptions[e]=this.subscriptions[e]||[],this.subscriptions[e].push(t)}},{key:"off",value:function(e,t){if(this.subscriptions[e]){var n=this.subscriptions[e].findIndex((function(e){return e===t}));this.subscriptions[e].splice(n,1)}}},{key:"handleMsg",value:function(e){e.data&&e.data.type&&(this.subscriptions[e.data.type]||[]).forEach((function(t){t(e.data,e.origin,e.source)}))}},{key:"destroy",value:function(){window.removeEventListener("message",this.handleMsg),this.subscriptions={}}}]),e}(),i=r;t.Z=i;"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"Receiver","src/recevier.js"),__REACT_HOT_LOADER__.register(i,"default","src/recevier.js"))},72181:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(75068),i=n(67294),a=n(45697),o=n.n(a),c=n(41481),s=function(e){function t(t){var n;return(n=e.call(this,t)||this).createRecevier=function(){n.destroyRecevier(),n.recevier=new c.Z,n.recevier.on("updateHeight",(function(e,t,r){n.iframe&&r===n.iframe.contentWindow&&(n.container.style.height=(e.msg||0)+"px",n.props.onUpdateHeight(e.msg||"#"))}))},n.destroyRecevier=function(){n.recevier&&(n.recevier.destroy(),n.recevier=null)},n.container=null,n.iframe=null,n}(0,r.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.props.disableHeightSync||this.createRecevier()},n.componentDidUpdate=function(e){var t=e.url,n=e.disableHeightSync;e.style;t.replace(/#.*$/,"")!==this.props.url.replace(/#.*$/,"")&&this.container&&(this.container.style.height=this.props.style&&this.props.style.height||"800px"),n!==this.props.disableHeightSync&&(this.props.disableHeightSync?this.destroyRecevier():this.createRecevier())},n.componentWillUnmount=function(){this.destroyRecevier()},n.render=function(){var e=this,t=this.props,n=t.className,r=t.id,a=t.style,o=t.url;return o?i.createElement("div",{className:"bg-iframe "+n,id:r,style:Object.assign({height:800,width:"100%"},a),ref:function(t){e.container=t}},i.createElement("iframe",{src:o,style:{border:"none",width:"100%",height:"100%"},ref:function(t){e.iframe=t}})):i.createElement("div",{className:"bg-iframe empty"},"Iframe")},t}(i.PureComponent);s.displayName="bg-iframe",s.propTypes={className:o().string,disableHeightSync:o().bool,id:o().string,onUpdateHeight:o().func,style:o().object,url:o().string.isRequired},s.defaultProps={className:"",disableHeightSync:!1,id:"",onUpdateHeight:function(){},style:{},syncParam:!0,url:""}},37608:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return f}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=n(72181),c=["components"],s={title:"\u56fe\u6807",order:1},l="\u56fe\u6807",p={unversionedId:"components/basic/icon",id:"components/basic/icon",title:"\u56fe\u6807",description:"\u4f55\u65f6\u4f7f\u7528",source:"@site/docs/components/basic/icon.mdx",sourceDirName:"components/basic",slug:"/components/basic/icon",permalink:"/docs/components/basic/icon",editUrl:"https://github.com/dingtalk-yida/developer-site/edit/feat/init/docs/components/basic/icon.mdx",tags:[],version:"current",frontMatter:{title:"\u56fe\u6807",order:1},sidebar:"components",previous:{title:"\u5e03\u5c40\u5bb9\u5668",permalink:"/docs/components/layout/regionalContainer"},next:{title:"\u6309\u94ae",permalink:"/docs/components/basic/button"}},u=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",children:[],level:2},{value:"\u7ec4\u4ef6\u793a\u4f8b",id:"\u7ec4\u4ef6\u793a\u4f8b",children:[],level:2},{value:"\u7ec4\u4ef6\u5c5e\u6027",id:"\u7ec4\u4ef6\u5c5e\u6027",children:[],level:2}],d={toc:u};function f(e){var t=e.components,n=(0,i.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u56fe\u6807"},"\u56fe\u6807"),(0,a.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,a.kt)("h2",{id:"\u7ec4\u4ef6\u793a\u4f8b"},"\u7ec4\u4ef6\u793a\u4f8b"),(0,a.kt)(o.Z,{url:"https://pre-yida-performance3.alibaba-inc.com/developer/icon-v2?isRenderNav=false",mdxType:"Iframe"}),(0,a.kt)("h2",{id:"\u7ec4\u4ef6\u5c5e\u6027"},"\u7ec4\u4ef6\u5c5e\u6027"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u5c5e\u6027\u540d"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u5c5e\u6027code"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u6570\u636e\u793a\u4f8b"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u52a8\u6001\u5c5e\u6027"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"\u56fe\u6807"),(0,a.kt)("td",{parentName:"tr",align:"left"},"src"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"'smile'"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"\u5927\u5c0f"),(0,a.kt)("td",{parentName:"tr",align:"left"},"size"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"'medium'"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u4ece\u5c0f\u5230\u5927\u4f9d\u6b21\u4e3a: ",(0,a.kt)("inlineCode",{parentName:"td"},"xxs"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"xs"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"small"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"medium"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"large"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"xl"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"xxl"))))),(0,a.kt)("p",null,"\u586b\u5145\u8272\u8bf7\u76f4\u63a5\u4fee\u6539\u6837\u5f0f\u4e2d\u7684\u989c\u8272\u5c5e\u6027\u3002"))}f.isMDXComponent=!0}}]);