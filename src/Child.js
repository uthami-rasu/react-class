import { useState } from "react";

function Child({ message, handleChildMessage }) {
  let [mymsg, setMessage] = useState("Hello Appa!");

  return (
    <>
      <h1>Child Component</h1>
      <h1>Parent Message:{message}</h1>
      <h1>Child Message:{mymsg}</h1>

      <button onClick={handleChildMessage(mymsg)}>Child Reply</button>
    </>
  );
}

export default Child;
