const CACHE_NAME = 'c5152d631c113d98';

// List of files which are store in cache.
let filesToCache = [
    '/',
    '/assets/icon-512x512.png',
    '/styles.css',
    'https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.3.0/socket.io.dev.js',
    'scripts.js'
];

self.addEventListener('install', (evt) => {
    evt.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(filesToCache))
    );
});

self.addEventListener('fetch', (evt) => {
    evt.respondWith(
        fetch(evt.request).catch(() => caches.match(evt.request))
    );
});