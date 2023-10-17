import { useState, useRef } from "react";
import { IconEdit, IconDelete } from "../assets/icons/input-icons";
import { ListItem, Checkbox, IconButtonWrapper } from "../styles/styles.style";

function Todo({ text, index, status, deleteTask, editTask, changeStatus }) {
  const [editToggle, setEditToggle] = useState(true);
  const inputTodo = useRef(null);

  const handleSave = () => {
    setEditToggle((old) => !old);
    editTask(inputTodo.current.value, index);
  };

  const isDoneMarkerText = (t) => {
    return status ? (
      <>
        <del>{t}</del>
      </>
    ) : (
      <>{t}</>
    );
  };

  return (
    <ListItem>
      <Checkbox onChange={(e) => changeStatus(e.target.checked, index)} />
      {editToggle ? (
        <>
          <span>{isDoneMarkerText(text)}</span>
          <div>
            <IconButtonWrapper
              onClick={() => {
                setEditToggle((old) => !old);
              }}
            >
              <IconEdit />
            </IconButtonWrapper>
            <IconButtonWrapper onClick={() => deleteTask(index)}>
              <IconDelete />
            </IconButtonWrapper>
          </div>{" "}
        </>
      ) : (
        <>
          <input
            ref={inputTodo}
            type="text"
            defaultValue={text}
            onKeyDown={(e) => (e.key != "Enter" ? e : handleSave())}
            autoFocus={true}
            maxLength={55}
            onBlur={handleSave}
          />
          <div>
            <IconButtonWrapper onClick={() => deleteTask(index)}>
              <IconDelete />
            </IconButtonWrapper>
          </div>{" "}
        </>
      )}
    </ListItem>
  );
}

export default Todo;
