import React from 'react'
import { connect } from 'react-redux'
import { add } from '../actions/Todo'
import { set } from '../actions/Todo'
import { toggle } from '../actions/Todo'
import Link from '../components/TodoApp/Link'
import TodoList from '../components/TodoApp/TodoList'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(add(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

AddTodo = connect()(AddTodo)

// export default AddTodo
//*************************************

const mapStateToProps1 = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps1 = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(set(ownProps.filter))
  }
})

const FilterLink = connect(
  mapStateToProps1,
  mapDispatchToProps1
)(Link)

// export default FilterLink
//*************************************

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)

    default:
      throw new Error('Unknown filter: ' + filter )
  }
}

const mapStateToProps2 = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps2 = {
  onTodoClick: toggle
}

const VisibleTodoList = connect(
  mapStateToProps2,
  mapDispatchToProps2
)(TodoList)

// export default VisibleTodoList
//*************************************

export { AddTodo, FilterLink, VisibleTodoList}
