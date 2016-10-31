/// <reference path="../typings/modules/reflexbox/index.d.ts" />

import './styles/styles.scss'
import * as React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { FirebaseService } from './services/firebase'
import worker from './services/sw'
import * as configureTap from 'react-tap-event-plugin'

import AppShell from './components/AppShell/AppShell'
import Prototype from './components/Prototype'

configureTap()

// redux

const store = createStore(() => { })

// sw

function updateReady(worker) {
  console.log('update is ready')
  //if (confirm('new version of app is available. update?')) {
  worker.postMessage({ action: 'skipWaiting' })
  //}
  /*store.dispatch(showAlert('New version is ready', 'reload', () => {
  }))*/
}

function trackInstalling(worker) {
  console.log('installing')
  worker.addEventListener('statechange', (s: any) => {
    console.log(s)
    updateReady(worker)
  })
}

worker(updateReady, trackInstalling)


// firebase

FirebaseService.getInstanse()

const container = document.querySelector('#root')
render(<Provider store={store}>
  <AppShell>
    <Prototype />
  </AppShell>
</Provider>, container)