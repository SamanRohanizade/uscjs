/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-2ea034fc692d7b968a60.js"
  },
  {
    "url": "commons.567b3d47c78e445c8dd0.css"
  },
  {
    "url": "commons-a748ebef564bd82ffaf0.js"
  },
  {
    "url": "app-9751b7ce2a55a8e02371.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-b5074a8d6a86e5b20e68.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "849e94a3ed55afeb3ec248219f3b6d02"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "78d27f3e6eb3e01f5bb24843c3c62f1f"
  },
  {
    "url": "styles.4f3bcb257e8537d26cf0.css"
  },
  {
    "url": "component---src-pages-index-js-0787f0c73b362378fa70.js"
  },
  {
    "url": "styles-63729e350fe4dca1fc9c.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "19f7e9de3afa9a1f240ec32e991e2a31"
  },
  {
    "url": "component---src-templates-post-js-ed99f065bd458a394426.js"
  },
  {
    "url": "page-data/topics/async/page-data.json",
    "revision": "162d960051f8a053d977004d3356a269"
  },
  {
    "url": "page-data/topics/async-pattern/page-data.json",
    "revision": "802cdf2422302e8253e7894c1b9721b2"
  },
  {
    "url": "page-data/topics/beyond-es6/page-data.json",
    "revision": "a43982a2cf7cc973dba7008c47867969"
  },
  {
    "url": "page-data/topics/coercion/page-data.json",
    "revision": "74217c6192e181974d26f3777682c5f4"
  },
  {
    "url": "page-data/topics/data-types/page-data.json",
    "revision": "00c1d35919c98ebcb4174e764cbe25b1"
  },
  {
    "url": "page-data/topics/es6/page-data.json",
    "revision": "2c428c6b11ce53cb3ecad53afd6cfbd2"
  },
  {
    "url": "page-data/topics/grammer/page-data.json",
    "revision": "22b2e1cb9343723721c0307598b035b6"
  },
  {
    "url": "page-data/topics/page-data.json",
    "revision": "40e95ccd36db2b8bfe58c863ac1bf306"
  },
  {
    "url": "page-data/topics/job-market/page-data.json",
    "revision": "b9c7e3a3f3ed15ca4eb03ff346a5e28d"
  },
  {
    "url": "page-data/topics/metaprogramming/page-data.json",
    "revision": "67c93e4fe26f25f5c66fda381d0ff78a"
  },
  {
    "url": "page-data/topics/prototype/page-data.json",
    "revision": "75d31253a85687800f796fd83543bd61"
  },
  {
    "url": "page-data/topics/scope/page-data.json",
    "revision": "827b3f7031074dfd2fa1bf313bc31b6c"
  },
  {
    "url": "page-data/topics/this-and-objects/page-data.json",
    "revision": "0dc1c386786bd141a998bcee6e7318a1"
  },
  {
    "url": "page-data/topics/useful-links/page-data.json",
    "revision": "b8cb0c1de1babbe92bad6f26e5868262"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "b431a78322ebb05fc8f9ae1a717d4fff"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\page-data\/.*\/page-data\.json/, new workbox.strategies.NetworkFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */

importScripts(`idb-keyval-iife.min.js`)

const { NavigationRoute } = workbox.routing
let offlineShellEnabled = true

const navigationRoute = new NavigationRoute(async ({ event }) => {
  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^/uscjs`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/uscjs/app-9751b7ce2a55a8e02371.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/uscjs/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, ({ event }) => {
  const { pathname } = new URL(event.request.url)

  const api = pathname.match(/:(.+)/)[1]
  MessageAPI[api]()

  return new Response()
})
