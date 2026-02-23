import { useState } from "react"

export default function EditForm({ item, setEdit, setTodoList }) {
  const [formData, setFormData] = useState({
    task: item.task,
    completed: item.completed,
  })

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  
  async function handleSubmit(e) {
    e.preventDefault();

    setTodoList(list => list.map(prevItem => 
      prevItem.task === item.task ? formData : prevItem
    ))

    setEdit(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="task" value={formData.task} onChange={handleChange} />
      <input type="submit" value="Save" />
    </form>
  )
}