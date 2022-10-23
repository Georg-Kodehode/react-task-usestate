import { useEffect, useState } from "react";
import {
  CounterWrapper,
  CounterMain,
  CounterHeader,
  CounterBtnWrapper,
} from "./counterComponents";

const Counter = () => {
  const [counter, counterFunction] = useState(0);

  function incrementCounter() {
    counterFunction((counter) => {
      return counter + 1;
    });
  }

  function decrementCounter() {
    counterFunction((counter) => {
      return counter - 1;
    });
  }

  function addFiveCounter() {
    counterFunction((counter) => {
      return counter + 5;
    });
  }

  return (
    <>
      <CounterMain>
        <CounterWrapper>
          <CounterHeader>Counter</CounterHeader>
          <p>Increment: {counter}</p>
          <CounterBtnWrapper>
            <button onClick={incrementCounter}>Increment</button>
            <button onClick={decrementCounter}>Decrement</button>
            <button onClick={addFiveCounter}>Add 5</button>
          </CounterBtnWrapper>
        </CounterWrapper>
      </CounterMain>
    </>
  );
};

export default Counter;
