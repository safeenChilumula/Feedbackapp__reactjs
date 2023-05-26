import './index.css'
import {Component} from 'react'

import Emojis from '../Emojis'

class Feedback extends Component {
  state = {
    click: true,
  }

  onFeedback = () => {
    this.setState(prevState => ({
      click: !prevState,
    }))
  }

  render() {
    const {click} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    return (
      <div className="bg-container">
        {click && (
          <div className="emoji-cart-container">
            <h1 className="heading">
              How satisfied are you with our customer support performance
            </h1>
            <ul className="emoji-container">
              {emojis.map(eachEmoji => (
                <Emojis
                  onFeedback={this.onFeedback}
                  key={eachEmoji.id}
                  eachEmoji={eachEmoji}
                />
              ))}
            </ul>
          </div>
        )}

        {!click && (
          <div className="emoji-cart-container">
            <img className="love-img" src={loveEmojiUrl} alt="love emoji" />
            <h1 className="heading">Thank You!</h1>
            <p className="description">
              We will use your feedback to improve our customer support
              performance.
            </p>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
