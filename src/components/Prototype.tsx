import * as React from 'react'
import { Component, Props } from 'react'

import { Flex } from 'reflexbox'
import AppBar from 'material-ui/AppBar'
import FontIcon from 'material-ui/FontIcon'
import RaisedButton from 'material-ui/RaisedButton'
import FloatingActionButton from 'material-ui/FloatingActionButton'


export default class Prototype extends Component<Props<any>, {}> {
  render() {
    return <Flex flexAuto flexColumn>
      <AppBar title='Фэйк-банк' />
      <Flex px={6} align='stretch'>
        <RaisedButton primary label='test' />
        <RaisedButton secondary label='test' />
      </Flex>
      <Flex align='stretch'>
        <FloatingActionButton>
          <FontIcon className='material-icons'>add</FontIcon>
        </FloatingActionButton>
        <FloatingActionButton secondary>
          <FontIcon className='material-icons'>add</FontIcon>
        </FloatingActionButton>
      </Flex>
    </Flex>
  }
}