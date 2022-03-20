import { useState } from "react";

export const useCouter = (initialcounter = -1) => {
  const [counter, setCounter] = useState(initialcounter);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(initialcounter);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
