const path = require("path");
const allowedImageWordPressDomain = new URL(process.env.NEXT_PUBLIC_WORDPRESS_URL).hostname
const withCSS = require("@zeit/next-css");
const withImages = require('next-images')




module.exports = withImages({
    trailingSlash: true,
    cleanDistDir: false,
    // experimental: { scriptLoader: true },
    webpackDevMiddleware: (config) => {
        config.watchOptions = {
            poll: 1000,
            aggregateTimeout: 300,
            
        };
        
        return config;
    },
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
    },
    /**
     * We specify which domains are allowed to be optimized.
     * This is needed to ensure that external urls can't be abused.
     * @see https://nextjs.org/docs/basic-features/image-optimization#domains
     */
    images: {
        domains: [ allowedImageWordPressDomain, 'via.placeholder.com' ],
    },
    webpack5: true,
})



// const withCSS = require("@zeit/next-css");
// const withFonts = require('next-fonts');

// module.exports = withCSS({
//     trailingSlash: true,
//     webpack(config) {
//       config.module.rules.push({
//         test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
//         use: {
//           loader: 'url-loader',
//           options: {
//             limit: 100000,
//           },
//         },
//       });
//       config.watchOptions = {
//             poll: 1000,
//             aggregateTimeout: 300,
            
//         };
//       return config;
//     },
//         sassOptions: {
//         includePaths: [path.join(__dirname, "styles")],
//     },
//     images: {
//         domains: [ allowedImageWordPressDomain, 'via.placeholder.com' ],
//     },
//   });


//normal
//   module.exports = {
    
//     trailingSlash: true,
//     webpackDevMiddleware: (config) => {
//         config.watchOptions = {
//             poll: 1000,
//             aggregateTimeout: 300,
            
//         };
        
//         return config;
//     },
//     sassOptions: {
//         includePaths: [path.join(__dirname, "styles")],
//     },
//     /**
//      * We specify which domains are allowed to be optimized.
//      * This is needed to ensure that external urls can't be abused.
//      * @see https://nextjs.org/docs/basic-features/image-optimization#domains
//      */
//     images: {
//         domains: [ allowedImageWordPressDomain, 'via.placeholder.com' ],
//     },

// };