import { useState } from "react";
export function Header() {
  const [counter, setCount] = useState(0);
  console.log(counter);

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={setCount(counter + 1)}></button>
    </>
  );
}
