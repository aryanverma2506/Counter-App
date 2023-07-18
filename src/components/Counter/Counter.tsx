import React from "react";
import { useDispatch } from "react-redux";

import {
  increment,
  decrement,
  reset,
  removeCounter,
  setStartValue,
} from "../../redux/counterSlice";
import Button from "../Button/Button";

interface CounterProps {
  id: string;
  label: string;
  value: number;
}

const Counter: React.FC<CounterProps> = ({ id, label, value }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <h3>{label}</h3>
      <p>Value: {value}</p>
      <Button onClick={() => dispatch(increment(id))}>Increment</Button>
      <Button onClick={() => dispatch(decrement(id))}>Decrement</Button>
      <Button onClick={() => dispatch(reset(id))}>Reset</Button>
      <input
        type="number"
        placeholder="Start value"
        onChange={(e) =>
          dispatch(setStartValue({ id, startValue: Number(e.target.value) }))
        }
      />
      <Button onClick={() => dispatch(removeCounter(id))}>
        Remove Counter
      </Button>
    </div>
  );
};

export default Counter;
