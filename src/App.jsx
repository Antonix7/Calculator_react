import { useState, Component } from 'react'
import Display from './components/Display.jsx'
import ButtonsPanel from './components/ButtonsPanel.jsx'
import operations from './func/operations.js'

class App extends Component {

  state = {
    total: null,
    next: null,
    operator: null
  }

  handleClick = buttonValue => this.setState(operations(this.state, buttonValue))

  render() {
  return (
      <div>
        <Display value={this.state.next || this.state.total || "0"} />
        <ButtonsPanel clickButton={this.clickButton} />
      </div>
  )
}
}

export default App
