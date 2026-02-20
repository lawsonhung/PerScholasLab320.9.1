export default function ListItem({ item: { task, completed }, todoList, setTodoList }) {

  function handleChange(e) {
    const itemToChange = todoList.find(item => item.task == e.target.name);
    const filteredTodoList = todoList.filter(item => {
      return item.task !== e.target.name
    });

    setTodoList([
      ...filteredTodoList,
      {
        task: itemToChange.task,
        completed: !itemToChange.completed
      }
    ]);
  }

  return (
    <li key={task}>
      <label htmlFor={task}>
        <input
          name={task}
          type="checkbox"
          checked={completed}
          onChange={handleChange}
        />
        {task}
      </label>
    </li>
  )
}