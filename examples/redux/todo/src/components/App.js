import React from 'react'
import Footer from './Footer'
import TodoForm from '../containers/TodoForm'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <TodoForm />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
