import { FaTimes } from 'react-icons/fa'
import Card from './shared/Card'
import PropTypes from 'prop-types'

function FeedbackItem({ item, handleDelete }) {

  return (
    // <Card reverse={true}>
    <Card>
      <div className="num-display">{item.rating}</div>
      <buttton onClick={() => handleDelete(item.id)} className="close">
        <FaTimes color='purple' />
      </buttton>
      <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default FeedbackItem