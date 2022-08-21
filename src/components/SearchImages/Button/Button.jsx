import './index.css';

import PropTypes from 'prop-types'

function Button({lodarMore}) {
    return <div className='box'>
        <button className='button' type="button" onClick={lodarMore}>Load more</button>
    </div>
};

Button.propTypes = {
    lodarMore : PropTypes.func.isRequired
}

export default Button