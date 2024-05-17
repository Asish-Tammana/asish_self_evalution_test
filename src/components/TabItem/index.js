import './index.css'

const TabItem = props => {
  const {details, updateSearchInput} = props
  const {displayText} = details

  const changeState = () => {
    updateSearchInput(displayText)
  }

  return (
    <li type="none">
      <button type="button" className="tab-item" onClick={changeState}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
