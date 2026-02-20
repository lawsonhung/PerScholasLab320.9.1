import { useState } from "react"

export default function TodoForm({ setTodoList, todoList }) {
  const [task, setTask] = useState(null);

  function handleChange(e) {
    setTask(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    setTodoList([
      ...todoList,
      {
        task: task,
        completed: false,
      }
    ])
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add task"
        name="task"
        onChange={handleChange}
      />
      <input type="submit" value="Add" />
    </form>
  )
}