import { useCallback, useState } from "react";

export default function DemoUseCallback() {
  const [count, setcount] = useState(0);
  const increment = useCallback(() => {
    setcount((prev) => prev + 1);
  }, []);

  return (
    <>
      <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
      </div>
    </>
  );
}
