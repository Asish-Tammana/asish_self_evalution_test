import './index.css'

const TabItem = props => {
  const {details, changeActiveState, activeState} = props
  const {tabId, displayText} = details

  const isActive = activeState === tabId

  const highlightClass = isActive ? 'active-class' : 'inactive-class'

  const changeState = () => {
    changeActiveState(tabId)
  }

  return (
    <li type="none">
      <button
        type="button"
        className={`tab-item ${highlightClass} `}
        onClick={changeState}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
