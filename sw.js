// Prótons OS - Service Worker minimal
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", () => self.clients.claim());
// No fetch interception - let all requests pass through
