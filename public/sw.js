if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return t[e]||(s=new Promise((async s=>{if("document"in self){const t=document.createElement("script");t.src=e,document.head.appendChild(t),t.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!t[e])throw new Error(`Module ${e} didn’t register its module`);return t[e]}))},s=(s,t)=>{Promise.all(s.map(e)).then((e=>t(1===e.length?e[0]:e)))},t={require:Promise.resolve(s)};self.define=(s,a,n)=>{t[s]||(t[s]=Promise.resolve().then((()=>{let t={};const i={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return t;case"module":return i;default:return e(s)}}))).then((e=>{const s=n(...e);return t.default||(t.default=s),t}))})))}}define("./sw.js",["./workbox-030153e1"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/9zGtSQ4RgwpuRlhatAL8f/_buildManifest.js",revision:"9zGtSQ4RgwpuRlhatAL8f"},{url:"/_next/static/9zGtSQ4RgwpuRlhatAL8f/_ssgManifest.js",revision:"9zGtSQ4RgwpuRlhatAL8f"},{url:"/_next/static/chunks/0b7b90cd.29e69a5732431035a8f0.js",revision:"9zGtSQ4RgwpuRlhatAL8f"},{url:"/_next/static/chunks/13.4869f605d364033eec2a.js",revision:"9zGtSQ4RgwpuRlhatAL8f"},{url:"/_next/static/chunks/612a5669ed7988766ff3084011b359dc5de30d6c.97a1e221edae127794f1.js",revision:"9zGtSQ4RgwpuRlhatAL8f"},{url:"/_next/static/chunks/bb9a4470b984507ac537ac1324ab5e51b615490f.a79bd759dd81f3d16e2c.js",revision:"9zGtSQ4RgwpuRlhatAL8f"},{url:"/_next/static/chunks/commons.251397cd5d949e5a0708.js",revision:"9zGtSQ4RgwpuRlhatAL8f"},{url:"/_next/static/chunks/framework.ce4a96022bc463719e4f.js",revision:"9zGtSQ4RgwpuRlhatAL8f"},{url:"/_next/static/chunks/main-aed54ec66740fd9fc3a7.js",revision:"9zGtSQ4RgwpuRlhatAL8f"},{url:"/_next/static/chunks/pages/%5Bslug%5D-bbf7143874ea828b6988.js",revision:"9zGtSQ4RgwpuRlhatAL8f"},{url:"/_next/static/chunks/pages/_app-efdc1b2ca5e05ee481ec.js",revision:"9zGtSQ4RgwpuRlhatAL8f"},{url:"/_next/static/chunks/pages/_error-a22081feb7265ba9e28f.js",revision:"9zGtSQ4RgwpuRlhatAL8f"},{url:"/_next/static/chunks/pages/index-be780293575f55f52ab7.js",revision:"9zGtSQ4RgwpuRlhatAL8f"},{url:"/_next/static/chunks/pages/place/%5Bslug%5D-6116f1ca61dabdc0974e.js",revision:"9zGtSQ4RgwpuRlhatAL8f"},{url:"/_next/static/chunks/polyfills-6f7c72e370684550d611.js",revision:"9zGtSQ4RgwpuRlhatAL8f"},{url:"/_next/static/chunks/webpack-5f0f9cb6574e501a96de.js",revision:"9zGtSQ4RgwpuRlhatAL8f"},{url:"/img/cover.png",revision:"35787926c793ede64aa11b2e1cc51a30"},{url:"/img/hero-illustration.svg",revision:"5fd5143cba1046a214d9a359fce22e89"},{url:"/img/icon-192.png",revision:"d27169d080684ebb57b8387d05c4b444"},{url:"/img/icon-512.png",revision:"f1d74b43a3832183202483a40d9e9d84"},{url:"/img/logo-gh.svg",revision:"e3a0c31390db72fd374570f4a57c56b0"},{url:"/img/logo.svg",revision:"202525302ad30aca5b2b790d4b0b5796"},{url:"/manifest.json",revision:"47ba3adb8d411e73e4f91091ec018376"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
