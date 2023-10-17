import { useState, useRef } from "react";
import { nanoid } from "nanoid";
import TodoList from "./components/TodoList";
import InputTask from "./components/InputTask";
import { AppWrapper, Button, Input } from "./styles/styles.style";

function App() {
  const [todos, setTodos] = useState([]);
  const [digitedChar, setDigitedChar] = useState("");
  const ref = useRef(null);
  const id = nanoid();

  const handleAddTask = () => {
    ref.current.value &&
      setTodos([...todos, { id: id, text: ref.current.value, status: false }]);
    ref.current.value = "";
    ref.current.focus();
  };

  const handleDeleteTask = (index) => {
    setTodos(todos.filter((_, i) => index !== i));
  };

  const handleEditTask = (editedText, index) => {
    setTodos((prev) =>
      prev.map(({ id, text, status }, i) =>
        i === index ? { id, text: editedText, status } : { id, text, status }
      )
    );
  };

  const handleChangeStatus = (changedStatus, index) => {
    setTodos((prev) =>
      prev.map(({ status, ...props }, i) =>
        i === index ? { ...props, status: changedStatus } : { ...props, status }
      )
    );
  };

  const handleFilter = (e) => {
    setDigitedChar(() => e.target.value.trim());
  };

  const handleDeleteTasksFromList = () => {
    setTodos((prev) => prev.filter((todo) => !todo.status));
  };

  return (
    <AppWrapper>
      <h1>Todo List</h1>
      <div className="top">
        <div>
          <InputTask ref={ref} addTask={handleAddTask} />
          <Button onClick={handleAddTask}>Add Task</Button>
        </div>
        <Input placeholder="search task here..." onChange={handleFilter} />
        <Button onClick={handleDeleteTasksFromList}>
          Remove Selected Tasks
        </Button>
      </div>
      <TodoList
        deleteTask={handleDeleteTask}
        editTask={handleEditTask}
        changeStatus={handleChangeStatus}
        list={todos}
        digitedChar={digitedChar}
      />
    </AppWrapper>
  );
}

export default App;
