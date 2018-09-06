// import React module
import React from 'react'
//
class App extends React.Component {
  constructor () {
    super()
    this.state = {
      typingScreen: '',
      answerScreen: ''
    }
    this.handleClick = this.handleClick.bind(this)
  }
  // defined constructor, called super method, line 8&9 set state
  // explicitly set value of 'this'
  // render is what we want to draw on the screen
  render () {
    return (
      <table id='frame'>
        <thead id='display'>
          <tr>
            <th name='typingScreen' />
            <th name='answerScreen' />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td id='Clear'><button onClick={(event) => this.handleClick()} data-action='clear'>C</button></td>
            <td id='Decimal'><button onClick={(event) => this.handleClick()} data-action='decimal'>.</button></td>
            <td id='Calculate'><button onClick={(event) => this.handleClick()} data-action='calculate'>=</button></td>
          </tr>
          <tr>
            <td id='7'><button onClick={(event) => this.handleClick()}>7</button></td>
            <td id='8'><button onClick={(event) => this.handleClick()}>8</button></td>
            <td id='9'><button onClick={(event) => this.handleClick()}>9</button></td>
          </tr>
          <tr>
            <td id='4'><button onClick={(event) => this.handleClick()}>4</button></td>
            <td id='5'><button onClick={(event) => this.handleClick()}>5</button></td>
            <td id='6'><button onClick={(event) => this.handleClick()}>6</button></td>
          </tr>
          <tr>
            <td id='1'><button onClick={(event) => this.handleClick()}>1</button></td>
            <td id='2'><button onClick={(event) => this.handleClick()}>2</button></td>
            <td id='3'><button onClick={(event) => this.handleClick()}>3</button></td>
          </tr>
          <tr>
            <td id='0'><button onClick={(event) => this.handleClick()}>0</button></td>
            <td id='Add'><button onClick={(event) => this.handleClick()} data-action='add'>+</button></td>
            <td id='Subtract'><button onClick={(event) => this.handleClick()} data-action='subtract'>-</button></td>
          </tr>
          <tr>
            <td id='Multiply'><button onClick={(event) => this.handleClick()} data-action='multiply'>*</button></td>
            <td id='Divide'><button onClick={(event) => this.handleClick()} data-action='divide'>÷</button></td>
            <td id='Calculate'><button onClick={(event) => this.handleClick()} data-action='calculate'>=</button></td>
          </tr>
        </tbody>
      </table>
    )
  }
  handleClick (event) {
    const value = event.target.value
    if ('calculate') {
      const answerScreen = eval(this.state.typingScreen).toString()
      this.setState({answerScreen})
    } else {
      this.button = ('clear')
      this.setState({typingScreen: ''})
    }
  }
}

export default App
