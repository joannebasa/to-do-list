import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, text }) => (
  <ul className="list-group">
    <li className="list-group-item list-group-item-info"
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none',
        width: 50 + "%",
      }}
    >
      {text}
    </li>
  </ul>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo;
