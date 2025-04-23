self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('rural-connect-cache').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/booking-form.html',
                'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css',
                'https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js',
                'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js',
                'https://cdn.jsdelivr.net/npm/@babel/standalone@7.20.15/babel.min.js'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
