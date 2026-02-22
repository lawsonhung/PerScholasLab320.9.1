import TodoForm from './components/TodoForm/TodoForm'
import ListItem from './components/ListItem/ListItem'
import './App.css'
import { useState } from 'react'

function App() {
  const [todoList, setTodoList] = useState([]);
  console.log(todoList)

  return (
    <>
      <h1>Create Todo List</h1>
      <TodoForm setTodoList={setTodoList} todoList={todoList} />
      <ul id="todoList">
        {todoList.map(item =>
          <ListItem
            key={item.task}
            item={item}
            setTodoList={setTodoList}
            todoList={todoList}
          />
        )}
      </ul>
    </>
  )
}

export default App
