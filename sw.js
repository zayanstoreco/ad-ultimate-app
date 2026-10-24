// Minimal service worker: makes Ad Ultimate installable as an app. Network only (no caching), so the app is
// always the latest version and data is never served stale.
self.addEventListener('install', () => self.skipWaiting())
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()))
self.addEventListener('fetch', () => {})
