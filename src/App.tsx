import { useEffect, useState } from 'react';
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState(
    [
      "go to the gym",
      "eat more foods and veg"
    ]
  );

  const [todoValue, setTodoValue] = useState<string>("");
  useEffect(() => {
    if(!localStorage)
      return;
    const localTodos = localStorage.getItem("todos");
    if(!localTodos)
      return;
    try {
      const todos: string[] = JSON.parse(localTodos);
      setTodos(todos);
    } catch (error) {
      console.error("Error parsing todos from localStorage:", error);
      return;
    }
  }, []);

  function persistData(newTodos: string[])
  {
    localStorage.setItem("todos", JSON.stringify(newTodos));
  }
  
  function handleAddTodo(newTodo: string)
  {
    if(newTodo != ""){
      const newTodos = [...todos, newTodo]
      setTodos(newTodos);
      persistData(newTodos);
  }
  }

  function handleDeleteTodo(index: number)
  {
    const newTodoList = todos.filter((_, todoIndex) => todoIndex != index);
    setTodos(newTodoList);
    persistData(newTodoList);
  }

  function handleEditTodo(index: number, newValue: string)
  {
    todos[index] = newValue;
    setTodos(todos);
    persistData(todos);
  }
  return (
    <>
      <TodoInput 
        handleAddTodo={handleAddTodo} 
        todoValue={todoValue} 
        onChange={setTodoValue}
      />
      <TodoList 
        todos={todos}
        handleDeleteTodo={handleDeleteTodo}
        handleEditTodo={handleEditTodo}
      />
    </>
  )
}

export default App
