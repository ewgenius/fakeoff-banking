const staticCacheName = 'state-v1' 

self.addEventListener('install', event => {
  console.log('installed')
})

self.addEventListener('activate', event => {
  console.log('activated')  
})

self.addEventListener('fetch', event => {

})

self.addEventListener('message', event => {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting()
  }
})