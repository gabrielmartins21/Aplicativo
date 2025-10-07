self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(app-saudacao-cache).then(cache => {
         return cache.addAll([
            "index.html",
            "manifest.json",
            "icone-192.png",
            "icone-512.png",
            "iconedia.png",
            "iconenoite.png",
            "iconetarde.png",
            "fundo.jpg",
            "fundotarde.jpg",
            "fundonoite.jpg"
         ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
