import React, { useState, useRef } from "react";
import ModalComponent from "./ModalComponent";
export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();
  // const [mz, setMz] = useState(false);
  // const [sd, setSd] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timerisActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);

    dialog.current.open();
  }

  function handelReset() {
    setTimeRemaining(targetTime * 1000);
  }
  function onstart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prev) => prev - 10);
    }, 10);
  }
  function onClose() {
    clearInterval(timer.current);
    dialog.current.open();
  }

  return (
    <>
      <ModalComponent
        result="lost"
        targetTime={targetTime}
        ref={dialog}
        remainingTime={timeRemaining}
        onReset={handelReset}
      />

      <section className="challenge">
        <h2>{title}</h2>

        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerisActive ? onClose : onstart}>
            {timerisActive ? "Stop Challenge" : "Start Challenge"}
          </button>
        </p>
        <p className="">
          {timerisActive ? "Timer running " : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
