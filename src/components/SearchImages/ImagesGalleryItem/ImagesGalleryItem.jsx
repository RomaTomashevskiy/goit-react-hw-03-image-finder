import './index.css'
import PropTypes from 'prop-types'

const ImagesGalleryItem = ({ image, onImageClick }) => {
  const {webformatURL , tags , largeImageURL} = image
  return (
    <li id='item'>
      <img
        src={webformatURL}
        alt={tags}
        className='imageGallery_Item_image'
        onClick={() => onImageClick(largeImageURL)}
      />
    </li>
  );
};

ImagesGalleryItem.prototype = {
  onImageClick: PropTypes.func.isRequired,
  images:  PropTypes.arrayOf(PropTypes.shape({})),

}

export default ImagesGalleryItem;





