import './index.css'

const Emojis = props => {
  const {eachEmoji, onFeedback} = props
  const {name, imageUrl} = eachEmoji
  console.log(name)

  return (
    <li onClick={onFeedback} className="list-container">
      <img src={imageUrl} alt={name} className="emoji" />
      <p className="emoji-name">{name}</p>
    </li>
  )
}

export default Emojis
