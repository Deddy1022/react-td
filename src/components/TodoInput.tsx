type TodoInputProp = {
  todoValue: string;
  onChange: (value: string) => void;
  handleAddTodo: (value: string) => void;
}

export default function TodoInput({
  todoValue,
  onChange,
  handleAddTodo
}: TodoInputProp) {
  return (
    <header>
      <input type="text" value={todoValue} onChange={(e) => onChange(e.target.value)} placeholder="todo..."/>
      <button onClick={() => {
        handleAddTodo(todoValue);
        onChange('');
      }}>Add</button>
    </header>
  )
}
