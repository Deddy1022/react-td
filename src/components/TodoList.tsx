import TodoCard from "./TodoCard";

export type TodoListProp = {
  todos?: string[];
  handleDeleteTodo: (index: number) => void;
  handleEditTodo: (index: number, value: string) => void;
}
export default function TodoList({
  todos,
  handleDeleteTodo,
  handleEditTodo,
}: TodoListProp) {
  return (
    <ul className="main">
      {
        todos!.map((todo, index) => 
        {
          return(
            <TodoCard 
              handleDeleteTodo={handleDeleteTodo}
              handleEditTodo={handleEditTodo}
              key={index}
              todo={todo}
              currentIndex={index}
            >
              <p>{todo}</p>
            </TodoCard>
          )
        })
      }
    </ul>
  )
}
