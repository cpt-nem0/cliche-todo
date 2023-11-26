import { useEffect, useRef, useState } from "react";
import { Todo } from "../model";

type TodoItemProps = {
  todo: Todo;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoItem = ({ todo, setTodos }: TodoItemProps) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editText, setEditText] = useState<string>(todo.text);
  const editRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (edit && editRef.current) {
      editRef.current?.focus();
    }
  }, [edit]);

  const handleEdit = () => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === todo.id ? { ...item, text: editText } : item
      )
    );
    setEdit(false);
  };

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={todo.isDone}
        onChange={() => {
          setEdit(false);
          setTodos((prev) =>
            prev.map((item) =>
              item.id === todo.id ? { ...item, isDone: !item.isDone } : item
            )
          );
        }}
      />
      {edit && !todo.isDone ? (
        <input
          type="text"
          className="todo-edit"
          value={editText}
          onChange={(evt) => setEditText(evt.target.value)}
          onBlur={handleEdit}
          onKeyDown={(evt) => {
            if (evt.key === "Enter") {
              handleEdit();
            }
          }}
          ref={editRef} // Add ref here
        />
      ) : (
        <span
          className={`todo-text ${todo.isDone ? "todo-done" : ""}`}
          onDoubleClick={() => {
            setEdit(true);
            setEditText(todo.text);
          }}
        >
          {todo.text}
        </span>
      )}

      <button
        className="todo-delete"
        onClick={() =>
          setTodos((prev) => prev.filter((item) => item.id !== todo.id))
        }
      >
        &times;
      </button>
    </li>
  );
};

export default TodoItem;
