import './index.css'

const VisitedItem = props => {
  const {details, renderDeleteList} = props
  const {imageUrl, id, name} = details
  const onRemoveItem = () => {
    renderDeleteList(id)
  }
  return (
    <li className="added-list">
      <img src={imageUrl} alt="thumbnail" className="thumbnail-img" />
      <div className="bottom-section">
        <p>{name}</p>
        <button type="button" className="delete-button" onClick={onRemoveItem}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedItem
