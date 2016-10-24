/// <reference path="../typings/modules/reflexbox/index.d.ts" />


import './styles/styles.scss'
import * as React from 'react'
import { render } from 'react-dom'
import * as configureTap from 'react-tap-event-plugin'

import Prototype from './components/Prototype'

configureTap()

const container = document.querySelector('#root')

render(<Prototype />, container)