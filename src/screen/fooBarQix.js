import React from 'react'
import '../App.css'

class fooBarQix extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: '',
      text: '',
      visual: []
    };
  }

  handleChange = (event) => {
    this.setState({number: event.target.value});
  }
  
  handleSubmit = () => {
    let value = this.state.number
    let message = this.state.text
    if (value.includes('0')) {
      if (!message) {
        message = value.replace(/0/g, "*")
      } else {
        message = message.replace(/0/g, "*")
      }
    } 
    if (value.includes('3')) {
      if (!message) {
        message = value.replace(/3/g, "Foo")
      } else {
        message = message.replace(/3/g, "Foo")
      }
    } 
    if (value.includes('5')) {
      if (!message) {
        message = value.replace(/5/g, "Bar")
      } else {
        message = message.replace(/5/g, "Bar")
      }
    } 
    if (value.includes('7')) {
      if (!message) {
        message = value.replace(/7/g, "Qix")
      } else {
        message = message.replace(/7/g, "Qix")
      }
    } 
    let messageFinish = this.valueDivision(message)
    if (!messageFinish) messageFinish = this.state.number
    this.setState({visual: [  ...this.state.visual, {number: this.state.number, message: messageFinish }]})
  }
  valueDivision = (message) => {
    let value = this.state.number
    if (parseInt(value) % 3 === 0 && value !== '0') message += 'Foo'
    if (parseInt(value) % 5 === 0 && value !== '0') message += ' Bar'
    if (parseInt(value) % 7 === 0 && value !== '0') message += ' Qix'
    return message
  }
  showHistory = () => {
    let visual = this.state.visual
    return visual.map(element => {
        return (
          <div>
            {element.number} = {element.message}
          </div> )
      })
  }

  render() {
    return (
      <div className="container">
        <h1>Rules:</h1>
        <div className="columns">
          <div className="column">
            <h3>Step 1</h3>
            <p>If the number is divisible by 3, write "Foo" instead of the number</p>
            <p>If the number is divisible by 5, add "Bar"</p>
            <p>If the number is divisible by 7, add "Qix"</p>
            <p>For each digit 3,5,7 y ''foo'', "Bar", "Qix" in the digits order.</p>
          </div>
          <div className="column">
            <h3>Step 2</h3>
            <p>we have a new trade request: we must keep a trace of 0 in the numbers, each 0 must be replaced by the character "*"
</p>
          </div>
        </div>
        <div className="input-container">
          <label>
            Number:
            <input type="number" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Send" onClick={this.handleSubmit} />
        </div>
        <div className="visual">
          {this.showHistory()}
        </div>
      </div>
    )
  }
}

export default fooBarQix