import { useState } from "react";
import "./App.css";
import InputField from "./Components/InputField";
import { Todo } from "./model";
import TodoList from "./Components/TodoList";
import Footer from "./Components/Footer";

function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (evt: React.FormEvent) => {
    evt.preventDefault();
    const trimmedTodo = todo.trim();
    if (trimmedTodo.length === 0) {
      return;
    }
    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: trimmedTodo,
        isDone: false,
      },
    ]);
    setTodo("");
  };

  return (
    <>
      <div className="App">
        <span className="heading">todos</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList todos={todos} setTodos={setTodos} />
        <Footer todos={todos} />
      </div>
    </>
  );
}

export default App;
