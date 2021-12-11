
const offlineCache = "expense-tracker";

const cacheFiles = [
  "/",
  "/index.html",
  "/manifest.json",
  "/favicon.ico",
  "/logo192.png",
  "/static/js/bundle.js",
  "/static/js/vendors~main.chunk.js",
  "/static/js/main.chunk.js",
  "/static/media/bg.ec70bd4b.jpg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(offlineCache).then((cache) => {
      return cache.addAll(cacheFiles);
    })
  )
});

self.addEventListener("fetch", (event) => {
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((res) => {
        if (res) {
          return res;
        }
      })
    );
  }
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (cachesName) {
      return Promise.all(
        cachesName
          .filter(function (cacheName) {
            return cacheName.startsWith("Offline-") && cacheName != offlineCache;
          })
          .map(function (cacheName) {
            return caches.delete(cacheName);
          })
      );
    })
  );
});
