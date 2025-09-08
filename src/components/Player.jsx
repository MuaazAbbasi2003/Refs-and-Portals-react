import { useState, useRef } from "react";
export default function Player() {
  const [submitted, setSubmitted] = useState(false);
  const pname = useRef();

  function handelClick() {
    setSubmitted(pname.current.value);
  }
  return (
    <section id="player">
      <h2>Welcome {submitted ? submitted : "unknown entity"}</h2>
      <p>
        <input type="text" ref={pname} />
        <button onClick={handelClick}>Set Name</button>
      </p>
    </section>
  );
}
