import "./styles.css";

type InputFieldProps = {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (evt: React.FormEvent) => void;
};

const InputField = ({ todo, setTodo, handleAdd }: InputFieldProps) => {
  return (
    <form className="input" onSubmit={handleAdd}>
      <input
        className="new-todo"
        value={todo}
        placeholder="What needs to be done?"
        onChange={(e) => {
          if (e.target.value.length === 0) {
            return;
          }
          if (e.target.value.length <= 50) {
            setTodo(e.target.value);
          }
        }}
        autoFocus
      />
      <button className="new-todo-submit" type="submit">
        &raquo;
      </button>
    </form>
  );
};

export default InputField;
