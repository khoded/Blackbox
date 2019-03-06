module.exports = [{
      plugin: require('/home/khoded/Gatsby/sosc-website-master/node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":1080},
    },{
      plugin: require('/home/khoded/Gatsby/sosc-website-master/node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"UA-101997744-5","head":true,"anonymize":true,"respectDNT":true,"exclude":["/preview/**","/do-not-track/me/too/"]},
    },{
      plugin: require('/home/khoded/Gatsby/sosc-website-master/node_modules/gatsby-plugin-nprogress/gatsby-browser.js'),
      options: {"plugins":[],"color":"green","showSpinner":false},
    },{
      plugin: require('/home/khoded/Gatsby/sosc-website-master/gatsby-browser.js'),
      options: {"plugins":[]},
    }]
