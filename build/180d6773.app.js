webpackJsonp([1],{0:function(e,t,n){e.exports=n(118)},44:function(e,t,n){function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=function(e,t,n){for(var r=!0;r;){var o=e,a=t,i=n;r=!1,null===o&&(o=Function.prototype);var u=Object.getOwnPropertyDescriptor(o,a);if(void 0!==u){if("value"in u)return u.value;var c=u.get;if(void 0===c)return;return c.call(i)}var l=Object.getPrototypeOf(o);if(null===l)return;e=l,t=a,n=i,r=!0,u=l=void 0}},l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=n(3),f=r(s),p=n(133),d=r(p),m=n(129),y=r(m),h=n(132),v=r(h),b=n(127),T=n(128),g=r(T),E="data-react-helmet",O=function(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},w=function(e,t){for(var n=[].concat(e).reverse(),r=0;r<n.length;r++){var o=n[r];if(o[t])return o[t]}return null},S=function(e){var t=w(e,"title"),n=w(e,"titleTemplate");if(n&&t)return n.replace(/\%s/g,t);var r=w(e,"defaultTitle");return t||r||""},A=function(e){return w(e,"onChangeClientState")||function(){}},j=function(e){return e.filter(function(e){return"undefined"!=typeof e[b.TAG_NAMES.HTML]}).map(function(e){return e[b.TAG_NAMES.HTML]}).reduce(function(e,t){return l({},e,t)},{})},P=function(e,t){return t.filter(function(e){return"undefined"!=typeof e[b.TAG_NAMES.BASE]}).map(function(e){return e[b.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o],i=a.toLowerCase();if(-1!==e.indexOf(i))return t.concat(n)}return t},[])},_=function(e,t,n){var r={},o=n.filter(function(t){return"undefined"!=typeof t[e]}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var o={};n.filter(function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var u=a[i],c=u.toLowerCase();-1===t.indexOf(c)||n===b.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||c===b.TAG_PROPERTIES.REL&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(u)||u!==b.TAG_PROPERTIES.INNER_HTML&&u!==b.TAG_PROPERTIES.CSS_TEXT||(n=u)}if(!n)return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),r[n][l]?!1:(o[n][l]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var a=Object.keys(o),i=0;i<a.length;i++){var u=a[i],c=(0,v["default"])({},r[u],o[u]);r[u]=c}return e},[]).reverse();return o},N=function(e){document.title=e||document.title},k=function(e){for(var t=document.getElementsByTagName("html")[0],n=t.getAttribute(E),r=n?n.split(","):[],o=[].concat(r),a=Object.keys(e),i=0;i<a.length;i++){var u=a[i],c=e[u]||"";t.setAttribute(u,c),-1===r.indexOf(u)&&r.push(u);var l=o.indexOf(u);-1!==l&&o.splice(l,1)}for(var i=o.length-1;i>=0;i--)t.removeAttribute(o[i]);r.length===o.length?t.removeAttribute(E):t.setAttribute(E,r.join(","))},M=function(e,t){var n=document.head||document.querySelector("head"),r=n.querySelectorAll(e+"["+E+"]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if("innerHTML"===r)n.innerHTML=t.innerHTML;else if("cssText"===r)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u="undefined"==typeof t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute(E,"true"),o.some(function(e,t){return i=t,n.isEqualNode(e)})?o.splice(i,1):a.push(n)}),o.forEach(function(e){return e.parentNode.removeChild(e)}),a.forEach(function(e){return n.appendChild(e)}),{oldTags:o,newTags:a}},C=function(e){for(var t=Object.keys(e),n="",r=0;r<t.length;r++){var o=t[r],a="undefined"!=typeof e[o]?o+'="'+e[o]+'"':""+o;n+=a+" "}return n.trim()},R=function(e,t){var n="<"+e+" "+E+'="true">'+O(t)+"</"+e+">";return n},x=function(e,t){var n=t.map(function(t){var n=Object.keys(t).filter(function(e){return!("innerHTML"===e||"cssText"===e)}).map(function(e){if("undefined"==typeof t[e])return e;var n=O(t[e]);return e+'="'+n+'"'}).join(" ").trim(),r=t.innerHTML||t.cssText||"";return"<"+e+" "+E+'="true" '+n+(e===b.TAG_NAMES.SCRIPT||e===b.TAG_NAMES.STYLE?">"+r+"</"+e+">":"/>")}).join("");return n},I=function(e,t){var n=[f["default"].createElement(b.TAG_NAMES.TITLE,i({key:t},E,!0),t)];return n},L=function(e,t){var n=t.map(function(t,n){var r=i({key:n},E,!0);return Object.keys(t).forEach(function(e){var n=b.REACT_TAG_MAP[e]||e;if("innerHTML"===n||"cssText"===n){var o=t.innerHTML||t.cssText;r.dangerouslySetInnerHTML={__html:o}}else r[n]=t[e]}),f["default"].createElement(e,r)});return n},G=function(e,t){switch(e){case b.TAG_NAMES.TITLE:return{toComponent:function(){return I(e,t)},toString:function(){return R(e,t)}};case b.TAG_NAMES.HTML:return{toComponent:function(){return t},toString:function(){return C(t)}};default:return{toComponent:function(){return L(e,t)},toString:function(){return x(e,t)}}}},H=function(e){var t=e.htmlAttributes,n=e.title,r=e.baseTag,o=e.metaTags,a=e.linkTags,i=e.scriptTags,u=e.styleTags;return{htmlAttributes:G(b.TAG_NAMES.HTML,t),title:G(b.TAG_NAMES.TITLE,n),base:G(b.TAG_NAMES.BASE,r),meta:G(b.TAG_NAMES.META,o),link:G(b.TAG_NAMES.LINK,a),script:G(b.TAG_NAMES.SCRIPT,i),style:G(b.TAG_NAMES.STYLE,u)}},U=function(e){var t=function(t){function n(){o(this,n),c(Object.getPrototypeOf(n.prototype),"constructor",this).apply(this,arguments)}return a(n,t),u(n,[{key:"shouldComponentUpdate",value:function(e){return!(0,y["default"])(this.props,e)}},{key:"render",value:function(){return f["default"].createElement(e,this.props)}}],[{key:"propTypes",value:{htmlAttributes:f["default"].PropTypes.object,title:f["default"].PropTypes.string,defaultTitle:f["default"].PropTypes.string,titleTemplate:f["default"].PropTypes.string,base:f["default"].PropTypes.object,meta:f["default"].PropTypes.arrayOf(f["default"].PropTypes.object),link:f["default"].PropTypes.arrayOf(f["default"].PropTypes.object),script:f["default"].PropTypes.arrayOf(f["default"].PropTypes.object),style:f["default"].PropTypes.arrayOf(f["default"].PropTypes.object),onChangeClientState:f["default"].PropTypes.func},enumerable:!0},{key:"peek",value:e.peek,enumerable:!0},{key:"rewind",value:function(){var t=e.rewind();return t||(t=H({htmlAttributes:[],title:"",baseTag:[],metaTags:[],linkTags:[],scriptTags:[],styleTags:[]})),t},enumerable:!0},{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(f["default"].Component);return t},q=function(e){return{htmlAttributes:j(e),title:S(e),baseTag:P([b.TAG_PROPERTIES.HREF],e),metaTags:_(b.TAG_NAMES.META,[b.TAG_PROPERTIES.NAME,b.TAG_PROPERTIES.CHARSET,b.TAG_PROPERTIES.HTTPEQUIV,b.TAG_PROPERTIES.PROPERTY],e),linkTags:_(b.TAG_NAMES.LINK,[b.TAG_PROPERTIES.REL,b.TAG_PROPERTIES.HREF],e),scriptTags:_(b.TAG_NAMES.SCRIPT,[b.TAG_PROPERTIES.SRC,b.TAG_PROPERTIES.INNER_HTML],e),styleTags:_(b.TAG_NAMES.STYLE,[b.TAG_PROPERTIES.CSS_TEXT],e),onChangeClientState:A(e)}},D=function(e){var t=e.htmlAttributes,n=e.title,r=e.baseTag,o=e.metaTags,a=e.linkTags,i=e.scriptTags,u=e.styleTags,c=e.onChangeClientState;k(t),N(n);var l={baseTag:M(b.TAG_NAMES.BASE,r),metaTags:M(b.TAG_NAMES.META,o),linkTags:M(b.TAG_NAMES.LINK,a),scriptTags:M(b.TAG_NAMES.SCRIPT,i),styleTags:M(b.TAG_NAMES.STYLE,u)},s={},f={};Object.keys(l).forEach(function(e){var t=l[e],n=t.newTags,r=t.oldTags;n.length&&(s[e]=n),r.length&&(f[e]=l[e].oldTags)}),c(e,s,f)},Y=(0,d["default"])(q,D,H);t["default"]=U(Y(g["default"])),e.exports=t["default"]},118:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=n(3),a=r(o),i=n(72),u=n(48),c=n(123),l=(r(c),n(120)),s=r(l),f=n(122),p=r(f),d=n(121),m=r(d);document.documentElement.style.fontSize=document.documentElement.clientWidth/7.5+"px",(0,i.render)(a["default"].createElement(u.Router,{history:u.hashHistory},a["default"].createElement(u.Route,{path:"/",component:s["default"]}),a["default"].createElement(u.Route,{path:"/record",component:p["default"]}),a["default"].createElement(u.Route,{path:"/fieldsign",component:m["default"]})),document.getElementById("app"))},119:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(71);var r={ajax:function(){var e=Array.prototype.slice.call(arguments,0);return e[0]="/mock/"+e[0]+".json",fetch.apply(null,e).then(function(e){return e.json()})},"native":function(e,t){return fetch("/mock/"+e+".json").then(function(e){return e.json()})}};t["default"]=r},120:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(3),l=r(c),s=(n(48),n(44)),f=r(s),p=n(124),m=(r(p),n(119)),y=r(m),h=n(125),v=r(h);n(71);var b=l["default"].Component,T=function(e){function t(e){o(this,t);var n=a(this,Object.getPrototypeOf(t).call(this,e));return n.state={localInfo:{},lnglatXY:null,recordList:null,showText:"正在加载数据...",corpList:[],currCorp:{},expand:!1,isShowSign:!1},n}return i(t,e),u(t,[{key:"getLngXY",value:function(){return y["default"]["native"]("getPosition")}},{key:"initMap",value:function(){var e=void 0,t=new AMap.Map("container"),n=this;this.getLngXY().then(function(r){function o(){var n=new AMap.Geocoder({radius:1e3,extensions:"all"});n.getAddress(e,function(e,t){"complete"===e&&"OK"===t.info&&a(t)});var r="<div class = 'iconfont icon-qiandaodingwei mapicon'></div>";new AMap.Marker({map:t,content:r,position:e,offset:new AMap.Pixel(-11,-22)});t.setFitView()}function a(e){var t=e.regeocode.addressComponent,r=t.township+t.street+t.streetNumber,o=t.province+t.city+t.district+r;n.setState({localInfo:{title:r,desc:o}})}t.setZoom(10),e=r.data,t.setCenter(e),o(),n.setState({lnglatXY:e})})}},{key:"initCorp",value:function(){var e=this;y["default"]["native"]("getorglist").then(function(e){return console.log(e),e.data}).then(function(t){e.setState({corpList:t});var n=v["default"].load("orgId"),r={};n?t.forEach(function(e){n==e.orgId&&(r=e)}):r=t[0],e.select(r)})}},{key:"componentDidMount",value:function(){var e=this;this.initMap(),this.initCorp(),this.updateTime(),this.timer=setInterval(function(){e.updateTime(),e.initMap()},6e4)}},{key:"componentWillUnmount",value:function(){this.timer&&clearInterval(this.timer)}},{key:"select",value:function(e){console.log(arguments),this.state.currCorp=e,this.setState({currCorp:e,expand:!1}),v["default"].save("orgId",e.orgId,{path:"/"}),this.bindSign()}},{key:"bindSign",value:function(){var e=this;y["default"].ajax("getDaySign").then(function(t){console.log(t.result),t.result=t.result.map(function(e){return 0!=e.type&&1!=e.type||0==e.status||(4!=e.status?e.className="error":1!=e.status&&2!=d[j].status&&(e.className="loc-error")),0==e.type?0==e.status||4==e.status?e.title="上班打卡":e.title="上班迟到":1==e.type?0==e.status||4==e.status?e.title="下班打卡":e.title="下班早退":2==e.type&&(e.title="外勤签到"),e}),e.setState({showText:"",recordList:t.result})})}},{key:"expandOrg",value:function(){this.setState({expand:!this.state.expand})}},{key:"updateTime",value:function(){var e=this;y["default"].ajax("getTime").then(function(t){if(console.log(t),t.redirect&&(location.href=t.redirect),0==t.code){var n=t.result[0];e.setState({time:n})}})}},{key:"showSign",value:function(){this.setState({isShowSign:!0})}},{key:"sign",value:function(e){var t={orgId:this.state.currCorp.orgId,orgName:this.state.currCorp.orgName,type:e,placeName:this.state.localInfo.desc,shortPlaceName:this.state.localInfo.title,longitude:this.state.lnglatXY[0],latitude:this.state.lnglatXY[1]};fetch("http://localhost/signin/api/sign.json",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:"Hubot",login:"hubot"})}),y["default"].ajax("sign",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify(t)})}},{key:"render",value:function(){var e=this;return l["default"].createElement("div",{className:"body"},l["default"].createElement(f["default"],{title:"签到"}),l["default"].createElement("div",{className:"orgInfo"},l["default"].createElement("div",{className:"focus",onClick:this.expandOrg.bind(this)},this.state.currCorp.orgName," ",l["default"].createElement("i",{className:this.state.expand?"triangle up":"triangle down"})),this.state.expand?l["default"].createElement("div",{className:"orgList"},(this.state.corpList||[]).map(function(t){return l["default"].createElement("div",{className:t.orgId==e.state.currCorp.orgId?"focus":"",onClick:e.select.bind(e,t)},t.orgName)})):null),this.state.expand?l["default"].createElement("div",{className:"mask"}):null,l["default"].createElement("div",{className:"timer"},this.state.time),l["default"].createElement("div",{className:"box downborder"},l["default"].createElement("div",{className:"mapContainer"},l["default"].createElement("div",{ref:"smallMap",id:"container",className:"smallMap"}),l["default"].createElement("div",{className:"mapAdress"},l["default"].createElement("h2",null,this.state.localInfo.title),l["default"].createElement("p",null,this.state.localInfo.desc)))),l["default"].createElement("div",{className:"box upborder signRecord"},l["default"].createElement("div",{className:"listSign"},(this.state.recordList||[]).map(function(e){return l["default"].createElement("div",{className:"item"},l["default"].createElement("div",{className:"time"},e.formatTime),l["default"].createElement("div",{className:"desc"},l["default"].createElement("div",{className:"title"},e.title),l["default"].createElement("div",{className:"position"},l["default"].createElement("i",{className:"iconfont icon-qiandaodingwei"}),e.shortPlaceName),function(){return 2==e.type?l["default"].createElement("div",{className:"remark"},e.remark):void 0}()))})),l["default"].createElement("div",{className:"nodata"},this.state.showText)),l["default"].createElement("div",{className:"bottomButton"},l["default"].createElement("div",{className:"button lbutton",onClick:this.showSign.bind(this)},l["default"].createElement("a",{className:"iconfont icon-qiandaokaoqindaqia"}),l["default"].createElement("p",null,"签到")),l["default"].createElement("div",{className:"button rbutton"},l["default"].createElement("a",{className:"iconfont icon-qiandaowaiqinqiandao"}),l["default"].createElement("p",null,"外勤签到"))),this.state.isShowSign?l["default"].createElement("div",{className:"mask z-4"},l["default"].createElement("div",{className:"bottomButton smbutton"},l["default"].createElement("div",{className:"button lbutton",onClick:this.sign.bind(this,0)},l["default"].createElement("a",null,"上班")),l["default"].createElement("div",{className:"button rbutton",onClick:this.sign.bind(this,1)},l["default"].createElement("a",null,"下班")))):null)}}]),t}(b);t["default"]=T},121:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(3),l=r(c),s=n(44),f=(r(s),l["default"].Component),p=function(e){function t(){return o(this,t),a(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),u(t,[{key:"render",value:function(){return l["default"].createElement("div",null,"外勤签到")}}]),t}(f);t["default"]=p},122:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(3),l=r(c),s=n(44),f=r(s),p=l["default"].Component,d=function(e){function t(){return o(this,t),a(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),u(t,[{key:"render",value:function(){return l["default"].createElement("div",null,l["default"].createElement(f["default"],{title:"记录"}),"RECORD",l["default"].createElement("a",{href:"#/"},"index"))}}]),t}(p);t["default"]=d},123:function(e,t){"use strict"},124:function(e,t){"use strict"},125:function(e,t,n){function r(e,t){var n="undefined"==typeof document?l:c.parse(document.cookie),r=n&&n[e];if(!t)try{r=JSON.parse(r)}catch(o){}return r}function o(e,t,n){l[e]=t,"object"==typeof t&&(l[e]=JSON.stringify(t)),"undefined"!=typeof document&&(document.cookie=c.serialize(e,l[e],n)),s&&s.cookie&&s.cookie(e,t,n)}function a(e,t){delete l[e],"undefined"==typeof t?t={}:"string"==typeof t&&(t={path:t}),"undefined"!=typeof document&&(t.expires=new Date(1970,1,1,0,0,1),document.cookie=c.serialize(e,"",t)),s&&s.clearCookie&&s.clearCookie(e,t)}function i(e){l=e?c.parse(e):{}}function u(e,t){e.cookie?l=e.cookie:e.cookies?l=e.cookies:e.headers&&e.headers.cookie?i(e.headers.cookie):l={},s=t}var c=n(126),l={},s=void 0,f={load:r,save:o,remove:a,setRawCookie:i,plugToRequest:u};"undefined"!=typeof window&&(window.reactCookie=f),e.exports=f},126:function(e,t){function n(e,t){if("string"!=typeof e)throw new TypeError("argument str must be a string");var n={},r=t||{},i=e.split(/; */),u=r.decode||a;return i.forEach(function(e){var t=e.indexOf("=");if(!(0>t)){var r=e.substr(0,t).trim(),a=e.substr(++t,e.length).trim();'"'==a[0]&&(a=a.slice(1,-1)),void 0==n[r]&&(n[r]=o(a,u))}}),n}function r(e,t,n){var r=n||{},o=r.encode||i;if(!u.test(e))throw new TypeError("argument name is invalid");var a=o(t);if(a&&!u.test(a))throw new TypeError("argument val is invalid");var c=[e+"="+a];if(null!=r.maxAge){var l=r.maxAge-0;if(isNaN(l))throw new Error("maxAge should be a Number");c.push("Max-Age="+l)}if(r.domain){if(!u.test(r.domain))throw new TypeError("option domain is invalid");c.push("Domain="+r.domain)}if(r.path){if(!u.test(r.path))throw new TypeError("option path is invalid");c.push("Path="+r.path)}return r.expires&&c.push("Expires="+r.expires.toUTCString()),r.httpOnly&&c.push("HttpOnly"),r.secure&&c.push("Secure"),c.join("; ")}function o(e,t){try{return t(e)}catch(n){return e}}/*!
	 * cookie
	 * Copyright(c) 2012-2014 Roman Shtylman
	 * Copyright(c) 2015 Douglas Christopher Wilson
	 * MIT Licensed
	 */
t.parse=n,t.serialize=r;var a=decodeURIComponent,i=encodeURIComponent,u=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/},127:function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n={HTML:"htmlAttributes",TITLE:"title",BASE:"base",META:"meta",LINK:"link",SCRIPT:"script",STYLE:"style"};t.TAG_NAMES=n;var r={NAME:"name",CHARSET:"charset",HTTPEQUIV:"http-equiv",REL:"rel",HREF:"href",PROPERTY:"property",SRC:"src",INNER_HTML:"innerHTML",CSS_TEXT:"cssText"};t.TAG_PROPERTIES=r;var o={charset:"charSet","http-equiv":"httpEquiv"};t.REACT_TAG_MAP=o},128:function(e,t,n){function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function(e,t,n){for(var r=!0;r;){var o=e,a=t,i=n;r=!1,null===o&&(o=Function.prototype);var u=Object.getOwnPropertyDescriptor(o,a);if(void 0!==u){if("value"in u)return u.value;var c=u.get;if(void 0===c)return;return c.call(i)}var l=Object.getPrototypeOf(o);if(null===l)return;e=l,t=a,n=i,r=!0,u=l=void 0}},c=n(3),l=r(c),s=function(e){function t(){o(this,t),u(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return a(t,e),i(t,[{key:"render",value:function(){return null}}]),t}(l["default"].Component);t["default"]=s,e.exports=t["default"]},129:function(e,t,n){function r(e){return null===e||void 0===e}function o(e){return e&&"object"==typeof e&&"number"==typeof e.length?"function"!=typeof e.copy||"function"!=typeof e.slice?!1:!(e.length>0&&"number"!=typeof e[0]):!1}function a(e,t,n){var a,s;if(r(e)||r(t))return!1;if(e.prototype!==t.prototype)return!1;if(c(e))return c(t)?(e=i.call(e),t=i.call(t),l(e,t,n)):!1;if(o(e)){if(!o(t))return!1;if(e.length!==t.length)return!1;for(a=0;a<e.length;a++)if(e[a]!==t[a])return!1;return!0}try{var f=u(e),p=u(t)}catch(d){return!1}if(f.length!=p.length)return!1;for(f.sort(),p.sort(),a=f.length-1;a>=0;a--)if(f[a]!=p[a])return!1;for(a=f.length-1;a>=0;a--)if(s=f[a],!l(e[s],t[s],n))return!1;return typeof e==typeof t}var i=Array.prototype.slice,u=n(131),c=n(130),l=e.exports=function(e,t,n){return n||(n={}),e===t?!0:e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:a(e,t,n)}},130:function(e,t){function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=o?n:r,t.supported=n,t.unsupported=r},131:function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}t=e.exports="function"==typeof Object.keys?Object.keys:n,t.shim=n},132:function(e,t){"use strict";function n(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function r(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;10>n;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==r.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(a){return!1}}var o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;e.exports=r()?Object.assign:function(e,t){for(var r,i,u=n(e),c=1;c<arguments.length;c++){r=Object(arguments[c]);for(var l in r)o.call(r,l)&&(u[l]=r[l]);if(Object.getOwnPropertySymbols){i=Object.getOwnPropertySymbols(r);for(var s=0;s<i.length;s++)a.call(r,i[s])&&(u[i[s]]=r[i[s]])}}return u}},133:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(3),c=r(u),l=n(134),s=r(l),f=n(135),p=r(f);e.exports=function(e,t,n){function r(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(l){function f(){m=e(d.map(function(e){return e.props})),y.canUseDOM?t(m):n&&(m=n(m))}if("function"!=typeof l)throw new Error("Expected WrappedComponent to be a React component.");var d=[],m=void 0,y=function(e){function t(){o(this,t),e.apply(this,arguments)}return a(t,e),t.peek=function(){return m},t.rewind=function(){if(t.canUseDOM)throw new Error("You may ony call rewind() on the server. Call peek() to read the current state.");var e=m;return m=void 0,d=[],e},t.prototype.shouldComponentUpdate=function(e){return!p["default"](e,this.props)},t.prototype.componentWillMount=function(){d.push(this),f()},t.prototype.componentDidUpdate=function(){f()},t.prototype.componentWillUnmount=function(){var e=d.indexOf(this);d.splice(e,1),f()},t.prototype.render=function(){return c["default"].createElement(l,this.props)},i(t,null,[{key:"displayName",value:"SideEffect("+r(l)+")",enumerable:!0},{key:"canUseDOM",value:s["default"].canUseDOM,enumerable:!0}]),t}(u.Component);return y}}},134:function(e,t){"use strict";var n=!("undefined"==typeof window||!window.document||!window.document.createElement),r={canUseDOM:n,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:n&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:n&&!!window.screen,isInWorker:!n};e.exports=r},135:function(e,t){"use strict";function n(e,t){if(e===t)return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(var a=r.bind(t),i=0;i<n.length;i++)if(!a(n[i])||e[n[i]]!==t[n[i]])return!1;return!0}var r=Object.prototype.hasOwnProperty;e.exports=n}});