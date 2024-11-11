import { ReactNode, useState } from "react"
import { TodoListProp } from "./TodoList";

type TodoCardProp = {
  todo: string,
  children: ReactNode;
  currentIndex: number;
}
export default function TodoCard({
  todo,
  children,
  currentIndex,
  handleDeleteTodo,
  handleEditTodo,
}: TodoCardProp & TodoListProp) {
  const [isEditing, setIsEditing] = useState(false);
  const [todoValue, setTodoValue] = useState(todo);
  return (
    <li className="todoItem">
      {
        isEditing ? (<input type="text" className="editing-todo" value={todoValue} onChange={(e) => {
          if(e.target.value != "")
            setTodoValue(e.target.value)
        } } />):
        children
      }
      <div className="actionsContainer">
        <i className={isEditing ? "fa fa-check-square":"fa-solid fa-pen-to-square"} onClick={() => {
          setIsEditing(!isEditing);
          handleEditTodo(currentIndex, todoValue);
        }}></i>
        <i className="fa-solid fa-trash-can" onClick={() => handleDeleteTodo(currentIndex)}></i>
      </div>
    </li>
  )
}
