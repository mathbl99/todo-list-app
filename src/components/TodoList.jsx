import { List } from "../styles/styles.style";
import Todo from "./Todo";

function TodoList(props) {
  const { list, digitedChar } = props;

  return (
    <div>
      <List>
        {list
          .map(({ text, id, status }, index) => (
            <Todo
              key={id}
              text={text}
              index={index}
              status={status}
              {...props}
            />
          ))
          .filter(({ props: { text } }) =>
            text.toLowerCase().includes(digitedChar.toLowerCase())
          )}
        {console.log(list)}
      </List>
    </div>
  );
}

export default TodoList;
