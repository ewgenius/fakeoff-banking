/// <reference path="../typings/modules/reflexbox/index.d.ts" />

import './styles/styles.scss'
import * as React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { FirebaseService } from './services/firebase'
import * as configureTap from 'react-tap-event-plugin'

import AppShell from './components/AppShell/AppShell'
import Prototype from './components/Prototype'

configureTap()

const container = document.querySelector('#root')

const firebaseService = FirebaseService.getInstanse()

const store = createStore(() => { })

render(<Provider store={store}>
  <AppShell>
    <Prototype />
  </AppShell>
</Provider>, container)