(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{157:function(e,t,n){"use strict";var r=n(8);t.__esModule=!0,t.default=void 0;var o,i=r(n(7)),a=r(n(33)),s=r(n(73)),u=r(n(55)),c=r(n(0)),l=r(n(4)),f=function(e){var t=(0,u.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},p={},d=function(e){var t=f(e),n=t.fluid?t.fluid.src:t.fixed.src;return p[n]||!1},h=[];var m=function(e,t){(void 0===o&&"undefined"!=typeof window&&window.IntersectionObserver&&(o=new window.IntersectionObserver(function(e){e.forEach(function(e){h.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),o).observe(e),h.push([e,t])},y=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',n=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+n+"/>":"",o=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",a=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",u=e.height?'height="'+e.height+'" ':"",c=e.opacity?e.opacity:"1";return"<picture>"+r+"<img "+s+u+n+o+t+a+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},v=c.default.forwardRef(function(e,t){var n=e.sizes,r=e.srcSet,o=e.src,i=e.style,a=e.onLoad,l=e.onError,f=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return c.default.createElement("img",(0,u.default)({sizes:n,srcSet:r,src:o},f,{onLoad:a,onError:l,ref:t,style:(0,u.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});v.propTypes={style:l.default.object,onError:l.default.func,onLoad:l.default.func};var b=function(e){function t(t){var n;n=e.call(this,t)||this;var r=!0,o=!1,i=t.fadeIn,s=d(t);!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,o=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,o=!1);var u=!(n.props.critical&&!n.props.fadeIn);return n.state={isVisible:r,imgLoaded:!1,IOSupported:o,fadeIn:i,hasNoScript:u,seenBefore:s},n.imageRef=c.default.createRef(),n.handleImageLoaded=n.handleImageLoaded.bind((0,a.default)((0,a.default)(n))),n.handleRef=n.handleRef.bind((0,a.default)((0,a.default)(n))),n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:d(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},n.handleRef=function(e){var t=this;this.state.IOSupported&&e&&m(e,function(){var e=d(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})})},n.handleImageLoaded=function(){var e,t,n;e=this.props,t=f(e),n=t.fluid?t.fluid.src:t.fixed.src,p[n]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},n.render=function(){var e=f(this.props),t=e.title,n=e.alt,r=e.className,o=e.style,i=void 0===o?{}:o,a=e.imgStyle,s=void 0===a?{}:a,l=e.placeholderStyle,p=void 0===l?{}:l,d=e.placeholderClassName,h=e.fluid,m=e.fixed,b=e.backgroundColor,g=e.Tag,w=e.itemProp,E="boolean"==typeof b?"lightgray":b,S=(0,u.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},s,p),_=(0,u.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},s),P={title:t,alt:this.state.isVisible?"":n,style:S,className:d};if(h){var I=h;return c.default.createElement(g,{className:(r||"")+" gatsby-image-wrapper",style:(0,u.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(I.srcSet)},c.default.createElement(g,{style:{width:"100%",paddingBottom:100/I.aspectRatio+"%"}}),I.base64&&c.default.createElement(v,(0,u.default)({src:I.base64},P)),I.tracedSVG&&c.default.createElement(v,(0,u.default)({src:I.tracedSVG},P)),E&&c.default.createElement(g,{title:t,style:{backgroundColor:E,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&c.default.createElement("picture",null,I.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:I.srcSetWebp,sizes:I.sizes}),c.default.createElement(v,{alt:n,title:t,sizes:I.sizes,src:I.src,srcSet:I.srcSet,style:_,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:y((0,u.default)({alt:n,title:t},I))}}))}if(m){var x=m,C=(0,u.default)({position:"relative",overflow:"hidden",display:"inline-block",width:x.width,height:x.height},i);return"inherit"===i.display&&delete C.display,c.default.createElement(g,{className:(r||"")+" gatsby-image-wrapper",style:C,ref:this.handleRef,key:"fixed-"+JSON.stringify(x.srcSet)},x.base64&&c.default.createElement(v,(0,u.default)({src:x.base64},P)),x.tracedSVG&&c.default.createElement(v,(0,u.default)({src:x.tracedSVG},P)),E&&c.default.createElement(g,{title:t,style:{backgroundColor:E,width:x.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:x.height}}),this.state.isVisible&&c.default.createElement("picture",null,x.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:x.srcSetWebp,sizes:x.sizes}),c.default.createElement(v,{alt:n,title:t,width:x.width,height:x.height,sizes:x.sizes,src:x.src,srcSet:x.srcSet,style:_,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:y((0,u.default)({alt:n,title:t,width:x.width,height:x.height},x))}}))}return null},t}(c.default.Component);b.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var g=l.default.shape({width:l.default.number.isRequired,height:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string}),w=l.default.shape({aspectRatio:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,sizes:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string});b.propTypes={resolutions:g,sizes:w,fixed:g,fluid:w,fadeIn:l.default.bool,title:l.default.string,alt:l.default.string,className:l.default.oneOfType([l.default.string,l.default.object]),critical:l.default.bool,style:l.default.object,imgStyle:l.default.object,placeholderStyle:l.default.object,placeholderClassName:l.default.string,backgroundColor:l.default.oneOfType([l.default.string,l.default.bool]),onLoad:l.default.func,onError:l.default.func,onStartLoad:l.default.func,Tag:l.default.string,itemProp:l.default.string};var E=b;t.default=E},159:function(e,t,n){var r=n(25).f,o=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in o||n(17)&&r(o,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},160:function(e,t,n){"use strict";var r=n(54),o=n(176),i=(n(167),n(174),Object.prototype.hasOwnProperty),a=n(177),s={key:!0,ref:!0,__self:!0,__source:!0};function u(e){return void 0!==e.ref}function c(e){return void 0!==e.key}var l=function(e,t,n,r,o,i,s){return{$$typeof:a,type:e,key:t,ref:n,props:s,_owner:i}};l.createElement=function(e,t,n){var r,a={},f=null,p=null;if(null!=t)for(r in u(t)&&(p=t.ref),c(t)&&(f=""+t.key),void 0===t.__self?null:t.__self,void 0===t.__source?null:t.__source,t)i.call(t,r)&&!s.hasOwnProperty(r)&&(a[r]=t[r]);var d=arguments.length-2;if(1===d)a.children=n;else if(d>1){for(var h=Array(d),m=0;m<d;m++)h[m]=arguments[m+2];0,a.children=h}if(e&&e.defaultProps){var y=e.defaultProps;for(r in y)void 0===a[r]&&(a[r]=y[r])}return l(e,f,p,0,0,o.current,a)},l.createFactory=function(e){var t=l.createElement.bind(null,e);return t.type=e,t},l.cloneAndReplaceKey=function(e,t){return l(e.type,t,e.ref,e._self,e._source,e._owner,e.props)},l.cloneElement=function(e,t,n){var a,f,p=r({},e.props),d=e.key,h=e.ref,m=(e._self,e._source,e._owner);if(null!=t)for(a in u(t)&&(h=t.ref,m=o.current),c(t)&&(d=""+t.key),e.type&&e.type.defaultProps&&(f=e.type.defaultProps),t)i.call(t,a)&&!s.hasOwnProperty(a)&&(void 0===t[a]&&void 0!==f?p[a]=f[a]:p[a]=t[a]);var y=arguments.length-2;if(1===y)p.children=n;else if(y>1){for(var v=Array(y),b=0;b<y;b++)v[b]=arguments[b+2];p.children=v}return l(e.type,d,h,0,0,m,p)},l.isValidElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===a},e.exports=l},161:function(e,t,n){"use strict";var r=function(e){};e.exports=function(e,t,n,o,i,a,s,u){if(r(t),!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,o,i,a,s,u],f=0;(c=new Error(t.replace(/%s/g,function(){return l[f++]}))).name="Invariant Violation"}throw c.framesToPop=1,c}}},163:function(e,t,n){"use strict";n(165)("link",function(e){return function(t){return e(this,"a","href",t)}})},164:function(e,t,n){"use strict";e.exports=function(e){for(var t=arguments.length-1,n="Minified React error #"+e+"; visit http://facebook.github.io/react/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);n+=" for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";var o=new Error(n);throw o.name="Invariant Violation",o.framesToPop=1,o}},165:function(e,t,n){var r=n(11),o=n(18),i=n(19),a=/"/g,s=function(e,t,n,r){var o=String(i(e)),s="<"+t;return""!==n&&(s+=" "+n+'="'+String(r).replace(a,"&quot;")+'"'),s+">"+o+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(s),r(r.P+r.F*o(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}},166:function(e,t,n){"use strict";e.exports=n(190)},167:function(e,t,n){"use strict";var r=n(173);e.exports=r},171:function(e,t,n){"use strict";var r=n(164),o=n(54),i=n(172),a=(n(174),n(175));n(161),n(191);function s(e,t,n){this.props=e,this.context=t,this.refs=a,this.updater=n||i}function u(e,t,n){this.props=e,this.context=t,this.refs=a,this.updater=n||i}function c(){}s.prototype.isReactComponent={},s.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&r("85"),this.updater.enqueueSetState(this,e),t&&this.updater.enqueueCallback(this,t,"setState")},s.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this),e&&this.updater.enqueueCallback(this,e,"forceUpdate")},c.prototype=s.prototype,u.prototype=new c,u.prototype.constructor=u,o(u.prototype,s.prototype),u.prototype.isPureReactComponent=!0,e.exports={Component:s,PureComponent:u}},172:function(e,t,n){"use strict";n(167);var r={isMounted:function(e){return!1},enqueueCallback:function(e,t){},enqueueForceUpdate:function(e){},enqueueReplaceState:function(e,t){},enqueueSetState:function(e,t){}};e.exports=r},173:function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},174:function(e,t,n){"use strict";e.exports=!1},175:function(e,t,n){"use strict";e.exports={}},176:function(e,t,n){"use strict";e.exports={current:null}},177:function(e,t,n){"use strict";var r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;e.exports=r},178:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.insertScript=function(e,t,n){var r=window.document.createElement("script");return r.async=!0,r.src=e,r.id=t,n.appendChild(r),r},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var r=void 0;return function(){var o=this,i=arguments,a=n&&!r;window.clearTimeout(r),r=setTimeout(function(){r=null,n||e.apply(o,i)},t),a&&e.apply(o,i)}}},188:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=t.CommentEmbed=t.CommentCount=void 0;var r=n(189),o=n(208),i=n(209);t.CommentCount=r.CommentCount,t.CommentEmbed=o.CommentEmbed,t.DiscussionEmbed=i.DiscussionEmbed;var a={CommentCount:r.CommentCount,CommentEmbed:o.CommentEmbed,DiscussionEmbed:i.DiscussionEmbed};t.default=a},189:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentCount=void 0;var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(166),a=(r=i)&&r.__esModule?r:{default:r},s=n(178);var u=(0,s.debounce)(function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})},300,!1);t.CommentCount=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),o(t,[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){if(this.props.shortname!==e.shortname)return!0;var t=e.config,n=this.props.config;return t.url!==n.url&&t.identifier!==n.identifier}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;e.getElementById("dsq-count-scr")?u():(0,s.insertScript)("https://"+this.props.shortname+".disqus.com/count.js","dsq-count-scr",e.body)}},{key:"cleanInstance",value:function(){var e=window.document.body;(0,s.removeScript)("dsq-count-scr",e),window.DISQUSWIDGETS=void 0}},{key:"render",value:function(){return a.default.createElement("span",{className:"disqus-comment-count","data-disqus-identifier":this.props.config.identifier,"data-disqus-url":this.props.config.url},this.props.children)}}]),t}()},190:function(e,t,n){"use strict";var r=n(54),o=n(171),i=n(192),a=n(197),s=n(160),u=n(198),c=n(204),l=n(205),f=n(207),p=s.createElement,d=s.createFactory,h=s.cloneElement,m=r,y={Children:{map:i.map,forEach:i.forEach,count:i.count,toArray:i.toArray,only:f},Component:o.Component,PureComponent:o.PureComponent,createElement:p,cloneElement:h,isValidElement:s.isValidElement,PropTypes:u,createClass:l,createFactory:d,createMixin:function(e){return e},DOM:a,version:c,__spread:m};e.exports=y},191:function(e,t,n){"use strict";e.exports=function(){}},192:function(e,t,n){"use strict";var r=n(193),o=n(160),i=n(173),a=n(194),s=r.twoArgumentPooler,u=r.fourArgumentPooler,c=/\/+/g;function l(e){return(""+e).replace(c,"$&/")}function f(e,t){this.func=e,this.context=t,this.count=0}function p(e,t,n){var r=e.func,o=e.context;r.call(o,t,e.count++)}function d(e,t,n,r){this.result=e,this.keyPrefix=t,this.func=n,this.context=r,this.count=0}function h(e,t,n){var r=e.result,a=e.keyPrefix,s=e.func,u=e.context,c=s.call(u,t,e.count++);Array.isArray(c)?m(c,r,n,i.thatReturnsArgument):null!=c&&(o.isValidElement(c)&&(c=o.cloneAndReplaceKey(c,a+(!c.key||t&&t.key===c.key?"":l(c.key)+"/")+n)),r.push(c))}function m(e,t,n,r,o){var i="";null!=n&&(i=l(n)+"/");var s=d.getPooled(t,i,r,o);a(e,h,s),d.release(s)}function y(e,t,n){return null}f.prototype.destructor=function(){this.func=null,this.context=null,this.count=0},r.addPoolingTo(f,s),d.prototype.destructor=function(){this.result=null,this.keyPrefix=null,this.func=null,this.context=null,this.count=0},r.addPoolingTo(d,u);var v={forEach:function(e,t,n){if(null==e)return e;var r=f.getPooled(t,n);a(e,p,r),f.release(r)},map:function(e,t,n){if(null==e)return e;var r=[];return m(e,r,null,t,n),r},mapIntoWithKeyPrefixInternal:m,count:function(e,t){return a(e,y,null)},toArray:function(e){var t=[];return m(e,t,null,i.thatReturnsArgument),t}};e.exports=v},193:function(e,t,n){"use strict";var r=n(164),o=(n(161),function(e){if(this.instancePool.length){var t=this.instancePool.pop();return this.call(t,e),t}return new this(e)}),i=function(e){e instanceof this||r("25"),e.destructor(),this.instancePool.length<this.poolSize&&this.instancePool.push(e)},a=o,s={addPoolingTo:function(e,t){var n=e;return n.instancePool=[],n.getPooled=t||a,n.poolSize||(n.poolSize=10),n.release=i,n},oneArgumentPooler:o,twoArgumentPooler:function(e,t){if(this.instancePool.length){var n=this.instancePool.pop();return this.call(n,e,t),n}return new this(e,t)},threeArgumentPooler:function(e,t,n){if(this.instancePool.length){var r=this.instancePool.pop();return this.call(r,e,t,n),r}return new this(e,t,n)},fourArgumentPooler:function(e,t,n,r){if(this.instancePool.length){var o=this.instancePool.pop();return this.call(o,e,t,n,r),o}return new this(e,t,n,r)}};e.exports=s},194:function(e,t,n){"use strict";var r=n(164),o=(n(176),n(177)),i=n(195),a=(n(161),n(196)),s=(n(167),"."),u=":";function c(e,t){return e&&"object"==typeof e&&null!=e.key?a.escape(e.key):t.toString(36)}e.exports=function(e,t,n){return null==e?0:function e(t,n,l,f){var p,d=typeof t;if("undefined"!==d&&"boolean"!==d||(t=null),null===t||"string"===d||"number"===d||"object"===d&&t.$$typeof===o)return l(f,t,""===n?s+c(t,0):n),1;var h=0,m=""===n?s:n+u;if(Array.isArray(t))for(var y=0;y<t.length;y++)h+=e(p=t[y],m+c(p,y),l,f);else{var v=i(t);if(v){var b,g=v.call(t);if(v!==t.entries)for(var w=0;!(b=g.next()).done;)h+=e(p=b.value,m+c(p,w++),l,f);else for(;!(b=g.next()).done;){var E=b.value;E&&(h+=e(p=E[1],m+a.escape(E[0])+u+c(p,0),l,f))}}else if("object"===d){var S=String(t);r("31","[object Object]"===S?"object with keys {"+Object.keys(t).join(", ")+"}":S,"")}}return h}(e,"",t,n)}},195:function(e,t,n){"use strict";var r="function"==typeof Symbol&&Symbol.iterator,o="@@iterator";e.exports=function(e){var t=e&&(r&&e[r]||e[o]);if("function"==typeof t)return t}},196:function(e,t,n){"use strict";var r={escape:function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})},unescape:function(e){var t={"=0":"=","=2":":"};return(""+("."===e[0]&&"$"===e[1]?e.substring(2):e.substring(1))).replace(/(=0|=2)/g,function(e){return t[e]})}};e.exports=r},197:function(e,t,n){"use strict";var r=n(160).createFactory,o={a:r("a"),abbr:r("abbr"),address:r("address"),area:r("area"),article:r("article"),aside:r("aside"),audio:r("audio"),b:r("b"),base:r("base"),bdi:r("bdi"),bdo:r("bdo"),big:r("big"),blockquote:r("blockquote"),body:r("body"),br:r("br"),button:r("button"),canvas:r("canvas"),caption:r("caption"),cite:r("cite"),code:r("code"),col:r("col"),colgroup:r("colgroup"),data:r("data"),datalist:r("datalist"),dd:r("dd"),del:r("del"),details:r("details"),dfn:r("dfn"),dialog:r("dialog"),div:r("div"),dl:r("dl"),dt:r("dt"),em:r("em"),embed:r("embed"),fieldset:r("fieldset"),figcaption:r("figcaption"),figure:r("figure"),footer:r("footer"),form:r("form"),h1:r("h1"),h2:r("h2"),h3:r("h3"),h4:r("h4"),h5:r("h5"),h6:r("h6"),head:r("head"),header:r("header"),hgroup:r("hgroup"),hr:r("hr"),html:r("html"),i:r("i"),iframe:r("iframe"),img:r("img"),input:r("input"),ins:r("ins"),kbd:r("kbd"),keygen:r("keygen"),label:r("label"),legend:r("legend"),li:r("li"),link:r("link"),main:r("main"),map:r("map"),mark:r("mark"),menu:r("menu"),menuitem:r("menuitem"),meta:r("meta"),meter:r("meter"),nav:r("nav"),noscript:r("noscript"),object:r("object"),ol:r("ol"),optgroup:r("optgroup"),option:r("option"),output:r("output"),p:r("p"),param:r("param"),picture:r("picture"),pre:r("pre"),progress:r("progress"),q:r("q"),rp:r("rp"),rt:r("rt"),ruby:r("ruby"),s:r("s"),samp:r("samp"),script:r("script"),section:r("section"),select:r("select"),small:r("small"),source:r("source"),span:r("span"),strong:r("strong"),style:r("style"),sub:r("sub"),summary:r("summary"),sup:r("sup"),table:r("table"),tbody:r("tbody"),td:r("td"),textarea:r("textarea"),tfoot:r("tfoot"),th:r("th"),thead:r("thead"),time:r("time"),title:r("title"),tr:r("tr"),track:r("track"),u:r("u"),ul:r("ul"),var:r("var"),video:r("video"),wbr:r("wbr"),circle:r("circle"),clipPath:r("clipPath"),defs:r("defs"),ellipse:r("ellipse"),g:r("g"),image:r("image"),line:r("line"),linearGradient:r("linearGradient"),mask:r("mask"),path:r("path"),pattern:r("pattern"),polygon:r("polygon"),polyline:r("polyline"),radialGradient:r("radialGradient"),rect:r("rect"),stop:r("stop"),svg:r("svg"),text:r("text"),tspan:r("tspan")};e.exports=o},198:function(e,t,n){"use strict";var r=n(160).isValidElement,o=n(199);e.exports=o(r)},199:function(e,t,n){"use strict";var r=n(200);e.exports=function(e){return r(e,!1)}},200:function(e,t,n){"use strict";var r=n(201),o=n(54),i=n(76),a=n(203),s=Function.call.bind(Object.prototype.hasOwnProperty),u=function(){};function c(){return null}e.exports=function(e,t){var n="function"==typeof Symbol&&Symbol.iterator,l="@@iterator";var f="<<anonymous>>",p={array:y("array"),bool:y("boolean"),func:y("function"),number:y("number"),object:y("object"),string:y("string"),symbol:y("symbol"),any:m(c),arrayOf:function(e){return m(function(t,n,r,o,a){if("function"!=typeof e)return new h("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var s=t[n];if(!Array.isArray(s)){var u=b(s);return new h("Invalid "+o+" `"+a+"` of type `"+u+"` supplied to `"+r+"`, expected an array.")}for(var c=0;c<s.length;c++){var l=e(s,c,r,o,a+"["+c+"]",i);if(l instanceof Error)return l}return null})},element:function(){return m(function(t,n,r,o,i){var a=t[n];if(!e(a)){var s=b(a);return new h("Invalid "+o+" `"+i+"` of type `"+s+"` supplied to `"+r+"`, expected a single ReactElement.")}return null})}(),elementType:function(){return m(function(e,t,n,o,i){var a=e[t];if(!r.isValidElementType(a)){var s=b(a);return new h("Invalid "+o+" `"+i+"` of type `"+s+"` supplied to `"+n+"`, expected a single ReactElement type.")}return null})}(),instanceOf:function(e){return m(function(t,n,r,o,i){if(!(t[n]instanceof e)){var a=e.name||f,s=function(e){if(!e.constructor||!e.constructor.name)return f;return e.constructor.name}(t[n]);return new h("Invalid "+o+" `"+i+"` of type `"+s+"` supplied to `"+r+"`, expected instance of `"+a+"`.")}return null})},node:function(){return m(function(e,t,n,r,o){if(!v(e[t]))return new h("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.");return null})}(),objectOf:function(e){return m(function(t,n,r,o,a){if("function"!=typeof e)return new h("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var u=t[n],c=b(u);if("object"!==c)return new h("Invalid "+o+" `"+a+"` of type `"+c+"` supplied to `"+r+"`, expected an object.");for(var l in u)if(s(u,l)){var f=e(u,l,r,o,a+"."+l,i);if(f instanceof Error)return f}return null})},oneOf:function(e){if(!Array.isArray(e))return c;return m(function(t,n,r,o,i){for(var a=t[n],s=0;s<e.length;s++)if(d(a,e[s]))return null;var u=JSON.stringify(e,function(e,t){var n=g(t);return"symbol"===n?String(t):t});return new h("Invalid "+o+" `"+i+"` of value `"+String(a)+"` supplied to `"+r+"`, expected one of "+u+".")})},oneOfType:function(e){if(!Array.isArray(e))return c;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return u("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+w(n)+" at index "+t+"."),c}return m(function(t,n,r,o,a){for(var s=0;s<e.length;s++){var u=e[s];if(null==u(t,n,r,o,a,i))return null}return new h("Invalid "+o+" `"+a+"` supplied to `"+r+"`.")})},shape:function(e){return m(function(t,n,r,o,a){var s=t[n],u=b(s);if("object"!==u)return new h("Invalid "+o+" `"+a+"` of type `"+u+"` supplied to `"+r+"`, expected `object`.");for(var c in e){var l=e[c];if(l){var f=l(s,c,r,o,a+"."+c,i);if(f)return f}}return null})},exact:function(e){return m(function(t,n,r,a,s){var u=t[n],c=b(u);if("object"!==c)return new h("Invalid "+a+" `"+s+"` of type `"+c+"` supplied to `"+r+"`, expected `object`.");var l=o({},t[n],e);for(var f in l){var p=e[f];if(!p)return new h("Invalid "+a+" `"+s+"` key `"+f+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var d=p(u,f,r,a,s+"."+f,i);if(d)return d}return null})}};function d(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function h(e){this.message=e,this.stack=""}function m(e){function n(n,r,o,a,s,u,c){if((a=a||f,u=u||o,c!==i)&&t){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}return null==r[o]?n?null===r[o]?new h("The "+s+" `"+u+"` is marked as required in `"+a+"`, but its value is `null`."):new h("The "+s+" `"+u+"` is marked as required in `"+a+"`, but its value is `undefined`."):null:e(r,o,a,s,u)}var r=n.bind(null,!1);return r.isRequired=n.bind(null,!0),r}function y(e){return m(function(t,n,r,o,i,a){var s=t[n];return b(s)!==e?new h("Invalid "+o+" `"+i+"` of type `"+g(s)+"` supplied to `"+r+"`, expected `"+e+"`."):null})}function v(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(v);if(null===t||e(t))return!0;var r=function(e){var t=e&&(n&&e[n]||e[l]);if("function"==typeof t)return t}(t);if(!r)return!1;var o,i=r.call(t);if(r!==t.entries){for(;!(o=i.next()).done;)if(!v(o.value))return!1}else for(;!(o=i.next()).done;){var a=o.value;if(a&&!v(a[1]))return!1}return!0;default:return!1}}function b(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function g(e){if(null==e)return""+e;var t=b(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function w(e){var t=g(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return h.prototype=Error.prototype,p.checkPropTypes=a,p.resetWarningCache=a.resetWarningCache,p.PropTypes=p,p}},201:function(e,t,n){"use strict";e.exports=n(202)},202:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,i=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,s=r?Symbol.for("react.strict_mode"):60108,u=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,f=r?Symbol.for("react.async_mode"):60111,p=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,h=r?Symbol.for("react.suspense"):60113,m=r?Symbol.for("react.memo"):60115,y=r?Symbol.for("react.lazy"):60116;function v(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case f:case p:case a:case u:case s:case h:return e;default:switch(e=e&&e.$$typeof){case l:case d:case c:return e;default:return t}}case y:case m:case i:return t}}}function b(e){return v(e)===p}t.typeOf=v,t.AsyncMode=f,t.ConcurrentMode=p,t.ContextConsumer=l,t.ContextProvider=c,t.Element=o,t.ForwardRef=d,t.Fragment=a,t.Lazy=y,t.Memo=m,t.Portal=i,t.Profiler=u,t.StrictMode=s,t.Suspense=h,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===p||e===u||e===s||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===m||e.$$typeof===c||e.$$typeof===l||e.$$typeof===d)},t.isAsyncMode=function(e){return b(e)||v(e)===f},t.isConcurrentMode=b,t.isContextConsumer=function(e){return v(e)===l},t.isContextProvider=function(e){return v(e)===c},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return v(e)===d},t.isFragment=function(e){return v(e)===a},t.isLazy=function(e){return v(e)===y},t.isMemo=function(e){return v(e)===m},t.isPortal=function(e){return v(e)===i},t.isProfiler=function(e){return v(e)===u},t.isStrictMode=function(e){return v(e)===s},t.isSuspense=function(e){return v(e)===h}},203:function(e,t,n){"use strict";function r(e,t,n,r,o){}r.resetWarningCache=function(){0},e.exports=r},204:function(e,t,n){"use strict";e.exports="15.6.2"},205:function(e,t,n){"use strict";var r=n(171).Component,o=n(160).isValidElement,i=n(172),a=n(206);e.exports=a(r,o,i)},206:function(e,t,n){"use strict";var r=n(54),o=n(175),i=n(161),a="mixins";e.exports=function(e,t,n){var s=[],u={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",UNSAFE_componentWillMount:"DEFINE_MANY",UNSAFE_componentWillReceiveProps:"DEFINE_MANY",UNSAFE_componentWillUpdate:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},c={getDerivedStateFromProps:"DEFINE_MANY_MERGED"},l={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var n=0;n<t.length;n++)p(e,t[n])},childContextTypes:function(e,t){e.childContextTypes=r({},e.childContextTypes,t)},contextTypes:function(e,t){e.contextTypes=r({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=h(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){e.propTypes=r({},e.propTypes,t)},statics:function(e,t){!function(e,t){if(t)for(var n in t){var r=t[n];if(t.hasOwnProperty(n)){var o=n in l;i(!o,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',n);var a=n in e;if(a){var s=c.hasOwnProperty(n)?c[n]:null;return i("DEFINE_MANY_MERGED"===s,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n),void(e[n]=h(e[n],r))}e[n]=r}}}(e,t)},autobind:function(){}};function f(e,t){var n=u.hasOwnProperty(t)?u[t]:null;g.hasOwnProperty(t)&&i("OVERRIDE_BASE"===n,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",t),e&&i("DEFINE_MANY"===n||"DEFINE_MANY_MERGED"===n,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",t)}function p(e,n){if(n){i("function"!=typeof n,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),i(!t(n),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var r=e.prototype,o=r.__reactAutoBindPairs;for(var s in n.hasOwnProperty(a)&&l.mixins(e,n.mixins),n)if(n.hasOwnProperty(s)&&s!==a){var c=n[s],p=r.hasOwnProperty(s);if(f(p,s),l.hasOwnProperty(s))l[s](e,c);else{var d=u.hasOwnProperty(s);if("function"!=typeof c||d||p||!1===n.autobind)if(p){var y=u[s];i(d&&("DEFINE_MANY_MERGED"===y||"DEFINE_MANY"===y),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",y,s),"DEFINE_MANY_MERGED"===y?r[s]=h(r[s],c):"DEFINE_MANY"===y&&(r[s]=m(r[s],c))}else r[s]=c;else o.push(s,c),r[s]=c}}}}function d(e,t){for(var n in i(e&&t&&"object"==typeof e&&"object"==typeof t,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects."),t)t.hasOwnProperty(n)&&(i(void 0===e[n],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",n),e[n]=t[n]);return e}function h(e,t){return function(){var n=e.apply(this,arguments),r=t.apply(this,arguments);if(null==n)return r;if(null==r)return n;var o={};return d(o,n),d(o,r),o}}function m(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function y(e,t){return t.bind(e)}var v={componentDidMount:function(){this.__isMounted=!0}},b={componentWillUnmount:function(){this.__isMounted=!1}},g={replaceState:function(e,t){this.updater.enqueueReplaceState(this,e,t)},isMounted:function(){return!!this.__isMounted}},w=function(){};return r(w.prototype,e.prototype,g),function(e){var t=function(e,r,a){this.__reactAutoBindPairs.length&&function(e){for(var t=e.__reactAutoBindPairs,n=0;n<t.length;n+=2){var r=t[n],o=t[n+1];e[r]=y(e,o)}}(this),this.props=e,this.context=r,this.refs=o,this.updater=a||n,this.state=null;var s=this.getInitialState?this.getInitialState():null;i("object"==typeof s&&!Array.isArray(s),"%s.getInitialState(): must return an object or null",t.displayName||"ReactCompositeComponent"),this.state=s};for(var r in t.prototype=new w,t.prototype.constructor=t,t.prototype.__reactAutoBindPairs=[],s.forEach(p.bind(null,t)),p(t,v),p(t,e),p(t,b),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),i(t.prototype.render,"createClass(...): Class specification must implement a `render` method."),u)t.prototype[r]||(t.prototype[r]=null);return t}}},207:function(e,t,n){"use strict";var r=n(164),o=n(160);n(161);e.exports=function(e){return o.isValidElement(e)||r("143"),e}},208:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentEmbed=void 0;var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(166),a=(r=i)&&r.__esModule?r:{default:r};(t.CommentEmbed=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),o(t,[{key:"getSrc",value:function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")}},{key:"render",value:function(){return a.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0"})}}]),t}()).defaultProps={showMedia:!0,showParentComment:!0,width:420,height:320}},209:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=void 0;var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(166),a=(r=i)&&r.__esModule?r:{default:r},s=n(178);t.DiscussionEmbed=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),o(t,[{key:"componentWillMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance()}},{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){if(this.props.shortname!==e.shortname)return!0;var t=e.config,n=this.props.config;return t.url!==n.url&&t.identifier!==n.identifier}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;window&&window.DISQUS&&e.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,s.insertScript)("https://"+this.props.shortname+".disqus.com/embed.js","dsq-embed-scr",e.body))}},{key:"cleanInstance",value:function(){var e=window.document;(0,s.removeScript)("dsq-embed-scr",e.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var t=e.getElementById("disqus_thread");if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild)}},{key:"getDisqusConfig",value:function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.callbacks.onNewComment=[e.onNewComment]}}},{key:"render",value:function(){return a.default.createElement("div",{id:"disqus_thread"})}}]),t}()}}]);
//# sourceMappingURL=13-d556f9f4011f398c7d90.js.map