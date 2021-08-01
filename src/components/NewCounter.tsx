import { useState } from "react";

const NewCounter = () => {
  // Use the useState's generic parameter in the second CodeSandbox project we have open to make the count state more strongly-typed.
  // So, there are times when TypeScript doesn’t infer the type we want for state in the useState hook. How do we specify the type we want to use for the state? Well, useState is a generic function
  const [count,setCount] = useState<number | null>(null);
  return (
      <button onClick={() =>setCount(c => c + 1)}>{count}</button>
  )
};

const Application = () => {
  return (
    <NewCounter/>
  )
};
export default Application;
