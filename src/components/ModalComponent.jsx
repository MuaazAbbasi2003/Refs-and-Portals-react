import React from "react";
import { useRef, useImperativeHandle } from "react";

export default function ModalComponent({ result, targetTime, ref }) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return (
    <dialog className="result-modal" ref={dialog}>
      <h2>you{result} </h2>
      <p>
        The target time was <strong>{targetTime} seconds.</strong>{" "}
      </p>
      <p>
        You stopped with <strong> X seconds remaining.</strong>{" "}
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
}
