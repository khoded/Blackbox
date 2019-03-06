// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blog-js": () => import("/home/khoded/Gatsby/sosc-website-master/src/templates/blog.js" /* webpackChunkName: "component---src-templates-blog-js" */),
  "component---src-templates-event-js": () => import("/home/khoded/Gatsby/sosc-website-master/src/templates/event.js" /* webpackChunkName: "component---src-templates-event-js" */),
  "component---cache-dev-404-page-js": () => import("/home/khoded/Gatsby/sosc-website-master/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/home/khoded/Gatsby/sosc-website-master/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-blog-js": () => import("/home/khoded/Gatsby/sosc-website-master/src/pages/blog.js" /* webpackChunkName: "component---src-pages-blog-js" */),
  "component---src-pages-events-js": () => import("/home/khoded/Gatsby/sosc-website-master/src/pages/events.js" /* webpackChunkName: "component---src-pages-events-js" */),
  "component---src-pages-index-js": () => import("/home/khoded/Gatsby/sosc-website-master/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-team-js": () => import("/home/khoded/Gatsby/sosc-website-master/src/pages/team.js" /* webpackChunkName: "component---src-pages-team-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/home/khoded/Gatsby/sosc-website-master/.cache/data.json")

