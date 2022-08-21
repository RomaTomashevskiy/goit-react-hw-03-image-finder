import './index.css'
import PropTypes from 'prop-types'

function Error({ guery }) {
    return <h1 className='error'>Oops... We did not find a picture with a name: {guery}</h1>
};

export default Error;

Error.propTypes = { 
    guery: PropTypes.string.isRequired
}