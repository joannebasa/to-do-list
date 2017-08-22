import React from 'react';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
  </div>
)

export default App;
//things to do: 
// * set initial state - initial.js
// * make container
// * actions to change state?
// * reducers
// * container to dispatch actions from components
