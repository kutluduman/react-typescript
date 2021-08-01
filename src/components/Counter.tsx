import { useState } from "react";

const Counter = () => {
  // state with the useState hook is automatically strongly-typed by inferring the type from the initial value passed into the function. This is great in lots of cases because we don’t need to do anything to get the benefits of strongly-typed state.
  const [count,setCount] = useState(0);
  return (
      <button onClick={() =>setCount(c => c + 1)}>{count}</button>
  )
};

const Application = () => {
  return (
    <Counter/>
  )
};
export default Application;
