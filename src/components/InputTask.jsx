import { forwardRef } from "react";
import { Input } from "../styles/styles.style";

const InputTask = forwardRef(function InputTask({ addTask }, ref) {
  const handleChange = (e) => e.target.value;
  const handleKeypress = (e) => {
    if (e.key === "Enter") {
      return addTask();
    }
  };

  return (
    <Input
      placeholder="digit the task here..."
      ref={ref}
      type="text"
      onChange={handleChange}
      onKeyPress={handleKeypress}
      maxLength={55}
      autoFocus={true}
    />
  );
});

export default InputTask;
