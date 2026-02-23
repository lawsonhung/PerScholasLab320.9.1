import { useState } from "react";
import EditForm from "../EditForm/EditForm";
import "./ListItem.css";

export default function ListItem({ item, todoList, setTodoList }) {
  const [edit, setEdit] = useState(false);

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

  function handleDelete() {
    setTodoList((list) => list.filter((i) => i.task !== item.task));
  }

  return (
    <>
      {edit ? (
        <EditForm
          item={item}
          setEdit={setEdit}
          setTodoList={setTodoList}
        />
      ) : (
        <li id={item.task}>
          <label htmlFor={item.task}>
            <input
              name={item.task}
              type="checkbox"
              checked={item.completed}
              onChange={handleChange}
            />
            {item.task}
          </label >
          <button
            onClick={() => setEdit(true)}
          >
            Edit
          </button>
          <button
            disabled={!item.completed}
            onClick={handleDelete}
          >
            Delete
          </button>
        </li >
      )
      }
    </>
  )
}