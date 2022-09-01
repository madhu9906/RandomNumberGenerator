// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumber extends Component {
  state = {randomNumber: 0}

  getRandomNumber = () => {
    const generateRandomNumber = Math.floor(Math.random() * 100 + 1)
    this.setState({randomNumber: generateRandomNumber})
  }

  getNumber = () => {
    const {randomNumber} = this.state
    return <p className="number">{randomNumber}</p>
  }

  render() {
    const isRandomNumber = this.getNumber()

    return (
      <div className="bg-container">
        <div className="page-content">
          <h1 className="heading"> Random Number</h1>
          <p className="note-text">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            onClick={this.getRandomNumber}
            className="button"
            type="button"
          >
            Generate
          </button>
          {isRandomNumber}
        </div>
      </div>
    )
  }
}

export default RandomNumber
