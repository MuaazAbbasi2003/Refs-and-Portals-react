import React from "react";
import { useRef, useImperativeHandle } from "react";

export default function ModalComponent({
  targetTime,
  remainingTime,
  onReset,
  ref,
}) {
  const dialog = useRef();
  const userlost = remainingTime <= 0;
  const x = (remainingTime / 1000).toFixed(2);
  const score = Math.round(100 * (1 - remainingTime / (targetTime * 1000)));

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return (
    <dialog className="result-modal" ref={dialog}>
      {userlost ? (
        <h2>You Lost</h2>
      ) : (
        <h2>You Win and Your Score is {score}</h2>
      )}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>{" "}
      </p>
      <p>
        You stopped with <strong>{x} seconds remaining.</strong>{" "}
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
}
