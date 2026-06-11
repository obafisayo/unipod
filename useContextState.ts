import { useState } from "react";

interface ContextState {
  hover: boolean;
  onEnter: () => void;
  onLeave: () => void;
}

function useContextState(): ContextState {
  const [hover, setHover] = useState(false);
  function onEnter() {
    setHover(true);
  }
  function onLeave() {
    setHover(false);
  }
  return { hover, onEnter, onLeave };
}
export default useContextState;
