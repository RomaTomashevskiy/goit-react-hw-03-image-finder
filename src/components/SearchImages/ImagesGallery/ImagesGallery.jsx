import PropTypes from 'prop-types'
import './index.css';
import ImagesGalleryItem from '../ImagesGalleryItem/ImagesGalleryItem';



const ImagesGallery = ({ images, onImageClick }) => (
  <ul className='imageGallery'>
    {images.map(image => {
      return (
         <ImagesGalleryItem
          key={image.id}
          image={image}
          onImageClick={onImageClick}
        />
      );
    })}
  </ul>
);



export default ImagesGallery;

ImagesGallery.prototype = {
  images:  PropTypes.arrayOf(PropTypes.shape({})),
  onImageClick: PropTypes.func.isRequired
}