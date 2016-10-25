export default function (onUpdateReady, onInstalling) {
  if ('serviceWorker' in navigator) {
    const serviceWorker = navigator['serviceWorker']

    serviceWorker.register('/sw.js')
      .then(reg => {
        if (!serviceWorker.controller) {
          return
        }

        if (reg.waiting) {
          onUpdateReady(reg.waiting)
          return
        }

        if (reg.installing) {
          onInstalling(reg.installing)
          return
        }

        reg.addEventListener('updatefound', () => {
          onInstalling(reg.installing)
        })
      })

    let refreshing = false
    serviceWorker.addEventListener('controllerchange', () => {
      if (refreshing) return
      window.location.reload()
      refreshing = true
    })
  }
}