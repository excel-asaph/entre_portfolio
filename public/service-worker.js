// Self-destructing Service Worker
// This file exists to replace any old/stale service worker that might be caching the site.
// It immediately unregisters itself and forces the page to reload.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    self.registration.unregister().then(() => {
      return self.clients.matchAll();
    }).then((clients) => {
      clients.forEach((client) => {
        // Navigate the client to the current URL to force a reload
        // after unregistering.
        client.navigate(client.url);
      });
    })
  );
});
