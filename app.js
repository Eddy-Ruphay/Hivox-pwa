Hivoxconsole.log("Hivox iniciado.");

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(reg => {
        console.log("Service Worker registrado com sucesso:", reg);
      })
      .catch(err => {
        console.log("Falha ao registrar Service Worker:", err);
      });
  });
} 
