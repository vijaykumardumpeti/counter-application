import {Component} from 'react'
import './index.css'

class Counter extends Component {
  state = {countingValue: 0}

  onIncrement = () => {
    this.setState(prevState => ({countingValue: prevState.countingValue + 1}))
  }
  onDecrement = () => {
    this.setState(prevState => ({countingValue: prevState.countingValue - 1}))
  }
  render() {
    const {countingValue} = this.state
    return (
      <div className="container">
        <h1 className="heading">Counting the value</h1>
        <p className="count">{countingValue}</p>
        <div>
          <button onClick={this.onIncrement} className="button">
            Increment
          </button>
          <button onClick={this.onDecrement} className="button">
            Decrement
          </button>
        </div>
      </div>
    )
  }
}
export default Counter
