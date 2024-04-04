import { useEffect } from "react";
import { usePipStore } from "./pipStore";

export const Pip = () => {
  const count = usePipStore((state) => state.count);

  useEffect(() => {
    function updatePipStore(e) {
      const { key } = e;
      if (key === "pip-store") {
        usePipStore.persist.rehydrate();
      }
    }

    window.addEventListener("storage", updatePipStore);

    return () => {
      window.removeEventListener("storage", updatePipStore);
    };
  }, []);

  return (
    <div>
      <h1>Pip</h1>
      <p>Count: {count}</p>
    </div>
  );
};
