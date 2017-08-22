import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../Actions'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <h3>To-Do List</h3>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
          style={{width: 50 + "%",
          margin: 1 +"rem"
          }}
        />
        <button className="btn btn-primary">
          Add
        </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo;