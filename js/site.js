navigator.serviceWorker && navigator.serviceWorker.register('sw.js').then(function(registration) {
  console.log('Service Worker instal success. SW Scope : ', registration.scope);
});