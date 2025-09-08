import React, { useState, useRef } from "react";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const [mz, setMz] = useState(false);
  const [sd, setSd] = useState(false);

  function onstart() {
    timer.current = setTimeout(() => {
      setSd(true);
    }, targetTime * 1000);

    setMz(true);
  }
  function onClose() {
    clearTimeout(timer.current);
    setMz(false);
    setSd(false);
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {sd ? <p> time ran out you lost </p> : ""}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={mz ? onClose : onstart}>
          {mz ? "Stop Challenge" : "Start Challenge"}
        </button>
      </p>
      <p className="">{mz ? "Timer running " : "Timer inactive"}</p>
    </section>
  );
}
