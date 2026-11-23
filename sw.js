/* Guarda la app en el dispositivo para que funcione sin conexión. Cambia VERSION al publicar una actualización. */
const VERSION='ingles-b2-v1';
const FILES=['./','index.html','manifest.webmanifest','fonts/atkinson-400.woff2','fonts/atkinson-700.woff2','icons/icon-192.png','icons/icon-512.png','icons/maskable-512.png','icons/apple-touch-icon.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(VERSION).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==VERSION).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
/* La página se pide primero a la red (para recibir actualizaciones) y, sin conexión, sale de la copia guardada. El resto, de la copia. */
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET'||new URL(r.url).origin!==location.origin)return;
if(r.mode==='navigate'){e.respondWith(fetch(r).then(res=>{const c=res.clone();caches.open(VERSION).then(x=>x.put('index.html',c));return res}).catch(()=>caches.match('index.html')));return}
e.respondWith(caches.match(r).then(m=>m||fetch(r)))});
