
const staticCacheName = `offline-cache-v5`;
const assets = [
  './',
    'index.html',
    '/js/script.js',
    'style.css',
    'sw.js',
    './Images/Batman.png',
    './Images/FemailAvatar.png',
    './Images/friday.png',
    './Images/Inishtin.png',
    './Images/MaleAvatarBeard.png',
    './Images/welcom.jpeg',
    './Images/welcom3.jpeg',
    './Images/welcom2.jpg',
    './css/all.css',
    './webfonts/fa-brands-400.eot',
    './webfonts/fa-brands-400.svg',
    './webfonts/fa-brands-400.ttf',
    './webfonts/fa-brands-400.woff',
    './webfonts/fa-brands-400.woff2',
    './webfonts/fa-regular-400.eot',
    './webfonts/fa-regular-400.svg',
    './webfonts/fa-regular-400.ttf',
    './webfonts/fa-regular-400.woff',
    './webfonts/fa-regular-400.woff2',
    './webfonts/fa-solid-900.eot',
    './webfonts/fa-solid-900.svg',
    './webfonts/fa-solid-900.ttf',
    './webfonts/fa-solid-900.woff',
    './webfonts/fa-solid-900.woff2',
    

];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(staticCacheName)
      .then( (cache) => {
        return cache.addAll(assets);
      })
  );
});

self.addEventListener('activate', function (event) {
    event.waitUntil(
        caches.keys()
          .then( (cacheNames) => {
            return Promise.all(
                cacheNames.filter(function (cacheName) {
                    return cacheName.startsWith('offline-') &&
                        cacheName != staticCacheName;
                }).map(function (cacheName) {
                  
                  
                    return caches.delete(cacheName);
                    
                })
            );
          })
    );
});




self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});


