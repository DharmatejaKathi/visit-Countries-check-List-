import './index.css'

const CountriesListItem = props => {
  const {CountryDetails, onClickVisit} = props
  const {name, id, isVisited} = CountryDetails

  const onAddVisit = () => {
    onClickVisit(id)
  }

  const buttonName = isVisited ? 'Visited' : 'Visit'

  return (
    <li className="list">
      <p className="name">{name}</p>
      {isVisited === true ? (
        <p className="p">{buttonName}</p>
      ) : (
        <button type="button" className="visit" onClick={onAddVisit}>
          {buttonName}
        </button>
      )}
    </li>
  )
}

export default CountriesListItem
