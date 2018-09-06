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
  }
  // defined constructor, called super method, line 8&9 set state
  // explicitly set value of 'this'
  // render is what we want to draw on the screen
  render () {
    return (
      <table id='frame'>
        <thead id='display'>
          <tr>
            <th name='typingScreen'>{this.state.typingScreen}</th>
            <th name='answerScreen'>{this.state.answerScreen}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td id='Clear'><button onClick={(event) => this.handleClick(event)} data-action='clear'>C</button></td>
            <td id='Decimal'><button onClick={(event) => this.handleClick(event)} data-action='decimal'>.</button></td>
            <td id='Calculate'><button onClick={(event) => this.handleClick(event)} data-action='calculate'>=</button></td>
          </tr>
          <tr>
            <td id='7'><button onClick={(event) => this.handleClick(event)}>7</button></td>
            <td id='8'><button onClick={(event) => this.handleClick(event)}>8</button></td>
            <td id='9'><button onClick={(event) => this.handleClick(event)}>9</button></td>
          </tr>
          <tr>
            <td id='4'><button onClick={(event) => this.handleClick(event)}>4</button></td>
            <td id='5'><button onClick={(event) => this.handleClick(event)}>5</button></td>
            <td id='6'><button onClick={(event) => this.handleClick(event)}>6</button></td>
          </tr>
          <tr>
            <td id='1'><button onClick={(event) => this.handleClick(event)}>1</button></td>
            <td id='2'><button onClick={(event) => this.handleClick(event)}>2</button></td>
            <td id='3'><button onClick={(event) => this.handleClick(event)}>3</button></td>
          </tr>
          <tr>
            <td id='0'><button onClick={(event) => this.handleClick(event)}>0</button></td>
            <td id='Add'><button onClick={(event) => this.handleClick(event)} data-action='add'>+</button></td>
            <td id='Subtract'><button onClick={(event) => this.handleClick(event)} data-action='subtract'>-</button></td>
          </tr>
          <tr>
            <td id='Multiply'><button onClick={(event) => this.handleClick(event)} data-action='multiply'>*</button></td>
            <td id='Divide'><button onClick={(event) => this.handleClick(event)} data-action='divide'>÷</button></td>
            <td id='Calculate'><button onClick={(event) => this.handleClick(event)} data-action='calculate'>=</button></td>
          </tr>
        </tbody>
      </table>
    )
  }
  handleClick (event) {
    const action = event.target.dataset.action
    if (action === 'calculate') {
      const answerScreen = eval(this.state.typingScreen).toString()
      this.setState({answerScreen: answerScreen})
    } else if (action === 'clear') {
      this.setState({typingScreen: ''})
    } else {
      this.setState({typingScreen: this.state.typingScreen + event.target.innerText})
    }
  }
}

export default App
