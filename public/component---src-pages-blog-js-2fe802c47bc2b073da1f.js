(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{152:function(A,e,t){"use strict";t.r(e);t(74);var B=t(0),a=t.n(B),E=t(32),s=t.n(E),Q=t(157),i=t.n(Q),c=function(A){var e=A.data;return a.a.createElement("div",{className:"blog-card elevate white-bg"},a.a.createElement("div",{className:"cover"},a.a.createElement(i.a,{style:{height:"100%"},fluid:e.cover.childImageSharp.fluid})),a.a.createElement("div",{className:"card-content"},a.a.createElement("div",{className:"tags"},e.tags),a.a.createElement("div",{className:"title"},a.a.createElement(s.a,{to:e.slug},e.title)),a.a.createElement("div",{className:"description"},e.description),a.a.createElement("div",{className:"author-box"},a.a.createElement("img",{className:"author-img",alt:"",src:"https://avatars1.githubusercontent.com/"+e.author+"?size=100"}),a.a.createElement("div",{className:"author-details"},a.a.createElement("div",{className:"author-name"},e.author),a.a.createElement("div",{className:"date"},e.date)))))},o=t(155);t.d(e,"blogsQuery",function(){return r});e.default=function(A){var e=A.data;return a.a.createElement(o.a,null,a.a.createElement("div",{className:"page"},a.a.createElement("div",{className:"container"},a.a.createElement("section",{className:"blog-section"},a.a.createElement("div",{className:"blog-posts"},function(A){var e=[];return A.allMarkdownRemark.edges.forEach(function(A){e.push(a.a.createElement(c,{data:A.node.frontmatter}))}),e}(e))))))};var r="1522974168"},153:function(A,e){(function(e){A.exports={siteMetadata:{title:"SOSC",siteUrl:"localhost",events:{title:"SOSC - Events",siteUrl:"localhost/events"},team:{title:"SOSC - Team",siteUrl:"localhost/team"},blog:{title:"SOSC - Blog",siteUrl:"localhost/blog"}},plugins:["gatsby-plugin-react-helmet","gatsby-plugin-sass","gatsby-remark-copy-linked-files","gatsby-transformer-sharp","gatsby-plugin-sharp",{resolve:"gatsby-transformer-remark",options:{plugins:[{resolve:"gatsby-remark-images",options:{maxWidth:1080}}]}},{resolve:"gatsby-source-filesystem",options:{path:e+"/src",name:"images"}},{resolve:"gatsby-plugin-google-analytics",options:{trackingId:"UA-101997744-5",head:!0,anonymize:!0,respectDNT:!0,exclude:["/preview/**","/do-not-track/me/too/"]}},{resolve:"gatsby-plugin-sitemap"},{resolve:"gatsby-plugin-nprogress",options:{color:"green",showSpinner:!1}}]}}).call(this,"/")},154:function(A,e){A.exports="data:image/vnd.microsoft.icon;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEBAQEBAQEBAQEBAQEBAQBA4IEAQICA4EFAgEEBAQEAoWGAIWGAsYEgUWCxAQEBQFFhIAEQYWFxIXAhQQEBAUDAARCw0YEhMBChYKEBAQEAQKDggFAQQKDhABARAQEBAUFBQUFBQQFBQQFBQUEBQOFRIYCgYWFgsIFAYJDhQOABcVFQMDFRUSDRAFDRMRCRgWEw8LBw8PCRMBCxINFwAVEwgMDQ8BERMXCxATDBMYCRMCBQANEhYYAAMNExUSAQ8VCggSDRUJDQcJDQwPBRQFAAsQDhcTExgVExMAChAQFAgEEBAQDg4QFAQOCBQQEBAQEBAQEBAQEBAQEBAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="},155:function(A,e,t){"use strict";var B=t(0),a=t.n(B),E=t(4),s=t.n(E),Q=t(32),i=t.n(Q),c=t(154),o=t.n(c),r=t(156),l=t.n(r),n=t(153),g=t.n(n),d=function(A){var e=A.siteTitle;return a.a.createElement("div",{className:"nav-bar"},a.a.createElement(l.a,{title:g.a.siteMetadata.title,meta:[{name:"description",content:"Blackbox Testing Community"},{name:"keywords",content:"Community, OpenSource, blackbox, testing, Community"}],link:[{rel:"shortcut icon",type:"image/ico",href:""+o.a}]}),a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"nav-items"},a.a.createElement("span",{className:"brand"},e),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(i.a,{to:"/",exact:!0,activeClassName:"active"},"Home")),a.a.createElement("li",null,a.a.createElement(i.a,{to:"/events",exact:!0,activeClassName:"active"},"Events")),a.a.createElement("li",null,a.a.createElement(i.a,{to:"/blog",exact:!0,activeClassName:"active"},"Blogs")),a.a.createElement("li",null,a.a.createElement(i.a,{to:"/team",exact:!0,activeClassName:"active"},"Team"))))))},w=function(A){A.siteTitle;return a.a.createElement("footer",null,a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"info-area"},a.a.createElement("div",{className:"column"},"listStyle = 'initial'",a.a.createElement("a",{href:"https://github.com/so-sc"},"GitHub")),a.a.createElement("div",{className:"column"},a.a.createElement("a",{href:"https://github.com/so-sc/code-of-conduct"},"Community Guidelines"),a.a.createElement("a",{href:"https://github.com/so-sc/code-of-conduct"},"Code of Conduct")),a.a.createElement("div",{className:"column"},a.a.createElement("p",null,a.a.createElement("strong",null,"Testing Community"),a.a.createElement("br",null),"Blackbox Testing Community,",a.a.createElement("br",null))))),a.a.createElement("div",{className:"copyright-area"},a.a.createElement("p",null,"SOSC © ",(new Date).getFullYear())))},u=(t(158),function(A){var e=A.children;return a.a.createElement("div",{id:"flexContainer"},a.a.createElement(d,{siteTitle:"SOSC"}),a.a.createElement("main",null,e),a.a.createElement(w,null))});u.propTypes={children:s.a.node.isRequired};e.a=u},157:function(A,e,t){"use strict";var B=t(8);e.__esModule=!0,e.default=void 0;var a,E=B(t(7)),s=B(t(33)),Q=B(t(73)),i=B(t(55)),c=B(t(0)),o=B(t(4)),r=function(A){var e=(0,i.default)({},A);return e.resolutions&&(e.fixed=e.resolutions,delete e.resolutions),e.sizes&&(e.fluid=e.sizes,delete e.sizes),e},l={},n=function(A){var e=r(A),t=e.fluid?e.fluid.src:e.fixed.src;return l[t]||!1},g=[];var d=function(A,e){(void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver(function(A){A.forEach(function(A){g.forEach(function(e){e[0]===A.target&&(A.isIntersecting||A.intersectionRatio>0)&&(a.unobserve(e[0]),e[1]())})})},{rootMargin:"200px"})),a).observe(A),g.push([A,e])},w=function(A){var e=A.src?'src="'+A.src+'" ':'src="" ',t=A.sizes?'sizes="'+A.sizes+'" ':"",B=A.srcSetWebp?"<source type='image/webp' srcset=\""+A.srcSetWebp+'" '+t+"/>":"",a=A.srcSet?'srcset="'+A.srcSet+'" ':"",E=A.title?'title="'+A.title+'" ':"",s=A.alt?'alt="'+A.alt+'" ':'alt="" ',Q=A.width?'width="'+A.width+'" ':"",i=A.height?'height="'+A.height+'" ':"",c=A.opacity?A.opacity:"1";return"<picture>"+B+"<img "+Q+i+t+a+e+s+E+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(A.transitionDelay?A.transitionDelay:"0.5s")+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},u=c.default.forwardRef(function(A,e){var t=A.sizes,B=A.srcSet,a=A.src,E=A.style,s=A.onLoad,o=A.onError,r=(0,Q.default)(A,["sizes","srcSet","src","style","onLoad","onError"]);return c.default.createElement("img",(0,i.default)({sizes:t,srcSet:B,src:a},r,{onLoad:s,onError:o,ref:e,style:(0,i.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},E)}))});u.propTypes={style:o.default.object,onError:o.default.func,onLoad:o.default.func};var h=function(A){function e(e){var t;t=A.call(this,e)||this;var B=!0,a=!1,E=e.fadeIn,Q=n(e);!Q&&"undefined"!=typeof window&&window.IntersectionObserver&&(B=!1,a=!0),"undefined"==typeof window&&(B=!1),e.critical&&(B=!0,a=!1);var i=!(t.props.critical&&!t.props.fadeIn);return t.state={isVisible:B,imgLoaded:!1,IOSupported:a,fadeIn:E,hasNoScript:i,seenBefore:Q},t.imageRef=c.default.createRef(),t.handleImageLoaded=t.handleImageLoaded.bind((0,s.default)((0,s.default)(t))),t.handleRef=t.handleRef.bind((0,s.default)((0,s.default)(t))),t}(0,E.default)(e,A);var t=e.prototype;return t.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:n(this.props)}),this.props.critical){var A=this.imageRef.current;A&&A.complete&&this.handleImageLoaded()}},t.handleRef=function(A){var e=this;this.state.IOSupported&&A&&d(A,function(){var A=n(e.props);e.state.isVisible||"function"!=typeof e.props.onStartLoad||e.props.onStartLoad({wasCached:A}),e.setState({isVisible:!0,imgLoaded:A})})},t.handleImageLoaded=function(){var A,e,t;A=this.props,e=r(A),t=e.fluid?e.fluid.src:e.fixed.src,l[t]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},t.render=function(){var A=r(this.props),e=A.title,t=A.alt,B=A.className,a=A.style,E=void 0===a?{}:a,s=A.imgStyle,Q=void 0===s?{}:s,o=A.placeholderStyle,l=void 0===o?{}:o,n=A.placeholderClassName,g=A.fluid,d=A.fixed,h=A.backgroundColor,f=A.Tag,m=A.itemProp,H="boolean"==typeof h?"lightgray":h,C=(0,i.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},Q,l),p=(0,i.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},Q),I={title:e,alt:this.state.isVisible?"":t,style:C,className:n};if(g){var D=g;return c.default.createElement(f,{className:(B||"")+" gatsby-image-wrapper",style:(0,i.default)({position:"relative",overflow:"hidden"},E),ref:this.handleRef,key:"fluid-"+JSON.stringify(D.srcSet)},c.default.createElement(f,{style:{width:"100%",paddingBottom:100/D.aspectRatio+"%"}}),D.base64&&c.default.createElement(u,(0,i.default)({src:D.base64},I)),D.tracedSVG&&c.default.createElement(u,(0,i.default)({src:D.tracedSVG},I)),H&&c.default.createElement(f,{title:e,style:{backgroundColor:H,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&c.default.createElement("picture",null,D.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:D.srcSetWebp,sizes:D.sizes}),c.default.createElement(u,{alt:t,title:e,sizes:D.sizes,src:D.src,srcSet:D.srcSet,style:p,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:m})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:w((0,i.default)({alt:t,title:e},D))}}))}if(d){var F=d,R=(0,i.default)({position:"relative",overflow:"hidden",display:"inline-block",width:F.width,height:F.height},E);return"inherit"===E.display&&delete R.display,c.default.createElement(f,{className:(B||"")+" gatsby-image-wrapper",style:R,ref:this.handleRef,key:"fixed-"+JSON.stringify(F.srcSet)},F.base64&&c.default.createElement(u,(0,i.default)({src:F.base64},I)),F.tracedSVG&&c.default.createElement(u,(0,i.default)({src:F.tracedSVG},I)),H&&c.default.createElement(f,{title:e,style:{backgroundColor:H,width:F.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:F.height}}),this.state.isVisible&&c.default.createElement("picture",null,F.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:F.srcSetWebp,sizes:F.sizes}),c.default.createElement(u,{alt:t,title:e,width:F.width,height:F.height,sizes:F.sizes,src:F.src,srcSet:F.srcSet,style:p,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:m})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:w((0,i.default)({alt:t,title:e,width:F.width,height:F.height},F))}}))}return null},e}(c.default.Component);h.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var f=o.default.shape({width:o.default.number.isRequired,height:o.default.number.isRequired,src:o.default.string.isRequired,srcSet:o.default.string.isRequired,base64:o.default.string,tracedSVG:o.default.string,srcWebp:o.default.string,srcSetWebp:o.default.string}),m=o.default.shape({aspectRatio:o.default.number.isRequired,src:o.default.string.isRequired,srcSet:o.default.string.isRequired,sizes:o.default.string.isRequired,base64:o.default.string,tracedSVG:o.default.string,srcWebp:o.default.string,srcSetWebp:o.default.string});h.propTypes={resolutions:f,sizes:m,fixed:f,fluid:m,fadeIn:o.default.bool,title:o.default.string,alt:o.default.string,className:o.default.oneOfType([o.default.string,o.default.object]),critical:o.default.bool,style:o.default.object,imgStyle:o.default.object,placeholderStyle:o.default.object,placeholderClassName:o.default.string,backgroundColor:o.default.oneOfType([o.default.string,o.default.bool]),onLoad:o.default.func,onError:o.default.func,onStartLoad:o.default.func,Tag:o.default.string,itemProp:o.default.string};var H=h;e.default=H}}]);
//# sourceMappingURL=component---src-pages-blog-js-2fe802c47bc2b073da1f.js.map