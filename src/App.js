import "./styles.css";
import Child from "./Child";
import { useState } from "react";
export default () => {
  let [message, setMessage] = useState(" Hi from Appa!");

  let [childMessage, setChildMessage] = useState("");

  const handleChildMessage = (msg) => {
    setChildMessage(msg);
  };
  return (
    <div class="myc">
      <h1> Parent Component </h1>
      <h1> Message to Child:{message}</h1>
      <h1> Message from Child: {childMessage}</h1>

      <Child message={message} handleChildMessage={setChildMessage}></Child>
    </div>
  );
};
