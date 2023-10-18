// Create a component which display a button and an input field. When click on the button, it focuses on an input field which means the cursor moves to input field using useRef() Hook.

import { useRef } from "react";

export default function FocusInput() {
  const ref = useRef(null);
  return (
    <div>
      <input ref={ref} type="text" />
      <button onClick={() => ref.current?.focus()}>Focus</button>
    </div>
  );
}
