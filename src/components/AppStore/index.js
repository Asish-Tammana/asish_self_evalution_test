import {useState} from 'react'
import {Audio} from 'react-loader-spinner'
import TabItem from '../TabItem'
import AppItem from '../AppItem/index'
import './index.css'

const tabsList = [
  {tabId: 'SOCIAL', displayText: 'Social'},
  {tabId: 'GAMES', displayText: 'Games'},
  {tabId: 'NEWS', displayText: 'News'},
  {tabId: 'FOOD', displayText: 'Food'},
]

const AppStore = () => {
  const [userInput, setUserInput] = useState('')
  const [ImagesData, setImagesData] = useState([])
  const [loading, setLoading] = useState(false)

  const updateSearchInput = event => {
    setUserInput(event.target.value)
  }

  const getData = async () => {
    setLoading(true)
    const url = `https://api.unsplash.com/search/photos?page=1&query=${userInput}&client_id=ExM5Cs4z3bx6zUGrWMMiUiecSZjZ7GYXMXthhYpDqtU`

    const response = await fetch(url)
    const data = await response.json()
    const {results} = data
    setImagesData(results)
    setLoading(false)
  }

  return (
    <div className="bg-container">
      <h1>Gallery Store</h1>
      <div className="input-container">
        <input
          type="search"
          className="input-tag"
          onChange={updateSearchInput}
          value={userInput}
        />
        <button type="button" className="search-icon-button" onClick={getData}>
          <img
            className="search-icon"
            src="https://assets.ccbp.in/frontend/react-js/app-store/app-store-search-img.png"
            alt="search icon"
          />
        </button>
      </div>

      <ul className="tab-item-container">
        {tabsList.map(eachItem => (
          <TabItem
            key={eachItem.tabId}
            details={eachItem}
            updateSearchInput={setUserInput}
          />
        ))}
      </ul>

      {loading ? (
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
      ) : (
        <ul className="app-container">
          {ImagesData.map(each => (
            <AppItem imageDetails={each} key={each.id} />
          ))}
        </ul>
      )}

      {/* <ul className="app-container">
        {filteredList.map(eachApp => (
          <AppItem appDetails={eachApp} key={eachApp.appId} />
        ))}
      </ul> */}
    </div>
  )
}

// Write your code here
// class AppStore extends Component {
//   state = {
//     activeState: tabsList[0].tabId,
//     searchInput: '',
//   }

//   changeActiveState = tabId => {
//     this.setState({
//       activeState: tabId,
//     })
//   }

//   searchApp = event => {
//     const searchInputGiven = event.target.value

//     this.setState({
//       searchInput: searchInputGiven,
//     })
//   }

//   render() {
//     const {activeState, searchInput} = this.state
//     let filteredList = appsList.filter(each => each.category === activeState)

//     filteredList = filteredList.filter(each =>
//       each.appName.toLowerCase().includes(searchInput.toLowerCase()),
//     )

//     return (

//     )
//   }
// }

export default AppStore
