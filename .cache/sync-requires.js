const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-js": hot(preferDefault(require("/home/khoded/Gatsby/sosc-website-master/src/templates/blog.js"))),
  "component---src-templates-event-js": hot(preferDefault(require("/home/khoded/Gatsby/sosc-website-master/src/templates/event.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/khoded/Gatsby/sosc-website-master/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/khoded/Gatsby/sosc-website-master/src/pages/404.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/home/khoded/Gatsby/sosc-website-master/src/pages/blog.js"))),
  "component---src-pages-events-js": hot(preferDefault(require("/home/khoded/Gatsby/sosc-website-master/src/pages/events.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/khoded/Gatsby/sosc-website-master/src/pages/index.js"))),
  "component---src-pages-team-js": hot(preferDefault(require("/home/khoded/Gatsby/sosc-website-master/src/pages/team.js")))
}

