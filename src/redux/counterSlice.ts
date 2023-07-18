import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Counter {
  id: string;
  label: string;
  value: number;
}

interface CounterState {
  counters: Counter[];
}

const initialState: CounterState = {
  counters: [],
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addCounter: (state, action: PayloadAction<Counter>) => {
      state.counters.push(action.payload);
    },
    removeCounter: (state, action: PayloadAction<string>) => {
      state.counters = state.counters.filter(
        (counter) => counter.id !== action.payload
      );
    },
    increment: (state, action: PayloadAction<string>) => {
      const counter = state.counters.find(
        (counter) => counter.id === action.payload
      );
      if (counter) counter.value += 1;
    },
    decrement: (state, action: PayloadAction<string>) => {
      const counter = state.counters.find(
        (counter) => counter.id === action.payload
      );
      if (counter) counter.value -= 1;
    },
    reset: (state, action: PayloadAction<string>) => {
      const counter = state.counters.find(
        (counter) => counter.id === action.payload
      );
      if (counter) counter.value = 0;
    },
    setStartValue: (
      state,
      action: PayloadAction<{ id: string; startValue: number }>
    ) => {
      const counter = state.counters.find(
        (counter) => counter.id === action.payload.id
      );
      if (counter) counter.value = action.payload.startValue;
    },
  },
});

export const {
  addCounter,
  removeCounter,
  increment,
  decrement,
  reset,
  setStartValue,
} = counterSlice.actions;

export default counterSlice.reducer;
