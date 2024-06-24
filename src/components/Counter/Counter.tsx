import React from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../hooks/useAppDispatchSelector";
import { RootState } from "../../store";
import { increment, decrement } from "../../features/counter/counterSlice";

const Counter: React.FC = () => {
  const count = useAppSelector((state: RootState) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <>
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        <span>{count}</span>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
    </>
  );
};

export default Counter;
