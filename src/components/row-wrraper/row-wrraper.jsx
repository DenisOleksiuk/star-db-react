import './row-wrraper.css'
import PropTypes from 'prop-types'

const Row = (({left, right}) => {
  return (
    <div className="row mb2 people__page">
        <div className="col-md-6">
         {left}
        </div>
        <div className="col-md-6">
          {right}
        </div>
    </div>
  )
});

Row.propTypes = {
  left: PropTypes.node,
  right: PropTypes.node
}

export default Row;
