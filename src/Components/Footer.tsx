import { Todo } from "../model";

type FooterProps = {
  todos: Todo[];
};

const Footer = ({ todos }: FooterProps) => {
  return (
    <div className="footer">
      <span className="todo-count">
        {todos.filter((todo) => !todo.isDone).length} items left
      </span>
      <span className="todo-count">
        {todos.filter((todo) => todo.isDone).length} items done
      </span>
    </div>
  );
};

export default Footer;
