// Phase 1: minimal service worker for PWA installability.
// No caching — Firebase message data must always be fetched fresh.
// Push event handler will be added in Phase 2.

self.addEventListener("install", (e) => self.skipWaiting());
self.addEventListener("activate", (e) => self.clients.claim());
self.addEventListener("fetch", (e) => {
  // Pass-through: do not cache. Caching strategy must be confirmed
  // before adding here — stale Firebase data would break live messages.
});
