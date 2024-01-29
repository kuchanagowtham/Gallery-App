// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imagesList, getLogoImage, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = imagesList

  const styleName = isActive ? 'btn-logo' : ''

  const getImageUrl = () => {
    getLogoImage(id)
  }
  return (
    <li className="li-Container">
      <button
        className={`logo-btn ${styleName}`}
        type="button"
        onClick={getImageUrl}
      >
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem
