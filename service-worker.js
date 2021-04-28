const APP_PREFIX = 'TravelTransactions-';
const VERSION = 'version_01';
const CACHE_NAME = APP_PREFIX + VERSION;

const FILES_TO_CACHE = [
    "./public/index.html",
    "./public/assets/css/style.css",
    "./dist/app.bundle.js",
    "./dist/assets/icons/icon_96x96.png",
    "./dist/assets/icons/icon_128x128.png",
    "./dist/assets/icons/icon_192x192.png",
    "./dist/assets/icons/icon_256x256.png",
    "./dist/assets/icons/icon_384x384.png",
    "./dist/assets/icons/icon_512x512.png",
];

self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
        console.log('installing cache : ' + CACHE_NAME)
        return cache.addAll(FILES_TO_CACHE)
        })
    )
})

self.addEventListener('activate', function(e) {
    e.waitUntil(
      caches.keys().then(function(keyList) {
        let cacheKeeplist = keyList.filter(function(key) {
          return key.indexOf(APP_PREFIX);
        });
        cacheKeeplist.push(CACHE_NAME);
  
        return Promise.all(
          keyList.map(function(key, i) {
            if (cacheKeeplist.indexOf(key) === -1) {
              console.log('deleting cache : ' + keyList[i]);
              return caches.delete(keyList[i]);
            }
          })
        );
      })
    );
});

self.addEventListener('fetch', function (e) {
    console.log('fetch request : ' + e.request.url)
    e.respondWith(
        caches.match(e.request).then(function (request) {
            if (request) {
              console.log('responding with cache : ' + e.request.url)
              return request
            } else {
              console.log('file is not cached, fetching : ' + e.request.url)
              return fetch(e.request)
            } 
        })
    )
})