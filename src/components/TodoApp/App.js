import React from 'react'
import Footer from './Footer'
import {AddTodo,VisibleTodoList} from '../../containers/TodoContainer'


const TodoApp = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)


export default TodoApp
