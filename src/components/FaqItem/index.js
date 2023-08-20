// Write your code here.
import {Component} from 'react'
import './index.css'

class Faqs extends Component {
  state = {displystatus: false}

  dispalyanswer = () => {
    this.setState(prestate => ({displystatus: !prestate.displystatus}))
  }

  render() {
    const {displystatus} = this.state
    const {eachlist} = this.props
    const {questionText, answerText} = eachlist

    return (
      <li className="list_container">
        <div className="question_container">
          <h1>{questionText}</h1>
          <button
            type="button"
            className="opertor_button"
            onClick={this.dispalyanswer}
          >
            {displystatus ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
                alt="minus"
                className="opertor_size"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
                alt="plus"
                className="opertor_size"
              />
            )}
          </button>
        </div>
        <div>{displystatus ? <p>{answerText}</p> : <p> </p>}</div>
      </li>
    )
  }
}
export default Faqs
