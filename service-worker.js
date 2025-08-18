self.addEventListener("install", (e) => {
    e.waitUntil(
      caches.open("oyin-cache").then((cache) => {
        return cache.addAll([
          "/",                
          "/index.html",
          "/next.html",
          "/main.css",
          "/main.js",
          "/starter.js",
          "/sozlar.js",
          "/manifest.json",
          "/images/icons/icon.jpg",
          "/images/aralash.jpg",
          "/images/atamalar.jpg",
          "/images/hayvonlar.jpg", 
          "/images/bg-image.jpg",
          "/images/card-bg.jpg",
          "/images/cities.jpg",
          "/images/countries.jpg",
          "/images/items.jpg",
          "/images/kasblar.jpg",
          "/images/osimliklar.jpg",
          "/images/hasharotlar.jpg",
          "/images/qushlar.jpg",
          "/images/logo-1.png", 
          "/images/logo-2.png"
        ]);
      })
    );
  });
  
  self.addEventListener("fetch", (event) => {
    event.respondWith(
      caches.match(event.request).then((res) => {
        return res || fetch(event.request);
      })
    );
  });
  