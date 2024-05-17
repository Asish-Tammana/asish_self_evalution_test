import {useState} from 'react'
import './index.css'

const AppItem = props => {
  const {imageDetails} = props
  const {urls, description} = imageDetails

  const [tooltip, setTooltip] = useState({visible: false, x: 0, y: 0})

  const handleMouseOver = e => {
    setTooltip({
      visible: true,
      x: e.clientX,
      y: e.clientY,
    })
  }

  const handleMouseMove = e => {
    setTooltip({
      visible: true,
      x: e.clientX,
      y: e.clientY,
    })
  }

  const handleMouseOut = () => {
    setTooltip({visible: false, x: 0, y: 0})
  }

  return (
    <li
      type="none"
      className="app-item-container"
      onFocus={handleMouseOver}
      onMouseMove={handleMouseMove}
      onBlur={handleMouseOut}
    >
      <img
        src={urls.raw}
        alt={imageDetails.alt_description}
        className="app-item-img"
      />

      {tooltip.visible && description && (
        <div
          className="tooltip"
          style={{
            left: tooltip.x + 10,
            top: tooltip.y + 10,
          }}
        >
          {description}
        </div>
      )}
    </li>
  )
}

export default AppItem
