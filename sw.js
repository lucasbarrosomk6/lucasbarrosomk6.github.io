var CACHE_NAME = "ISS_Locator_Cache";

self.oninstall = function() {
  this.caches.open("ISS_Locator_Cache").then(function(cache) {
    cache
      .addAll([
        "/index.css",
        "/index.html",
        "/index.js",
        "/assets/dj.png",
        "/assets/er.png",
        "/assets/fbf.png",
        "/assets/satilite.png"
      ])
      .then(function() {
        console.log("cached");
      })
      .catch(function(err) {
        console.log("err", err);
      });
  });
};
self.onactivate = function() {
  console.log("activated!");
};
self.onfetch = function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        return response;
      } else {
        return fetch(event.request);
      }
    })
  );
};
