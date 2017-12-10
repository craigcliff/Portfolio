const { resolve } = require('path')

module.exports = {

  modules: [
    // provide path to the file with resources
    
    ['nuxt-sass-resources-loader', [
      resolve(__dirname, 'assets/css/abstracts/_variables.scss'),
      resolve(__dirname, 'assets/css/abstracts/_mixins.scss'),
      resolve(__dirname, 'assets/css/base/_typography.scss'),
      resolve(__dirname, 'assets/css/base/_utilities.scss'),
      resolve(__dirname, 'assets/css/base/_base.scss')
  ]]
 

  ],



  /*
   ** Headers of the page
   */



  head: {
    title: 'portfolio',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'Craig Hector Web Developer Portfolio',
        content: 'Nuxt.js project'
      }
    ],
    link: [

      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.0/css/bulma.min.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Source+Code+Pro:400,700'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Corben'
      },

      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },

  css: [
    
    // CSS file in the project
    '@/assets/css/main.css',
    // SCSS file in the project
    '@/assets/css/main.scss'
  ],


  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#3B8070'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
   // extend(config, ctx) {
   //   if (ctx.dev && ctx.isClient) {
   //     config.module.rules.push({
   //       enforce: 'pre',
   //       test: /\.(js|vue)$/,
    //      loader: 'eslint-loader',
   //       exclude: /(node_modules)/
   //     })
   //   }
    }
  }
