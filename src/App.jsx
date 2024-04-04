import "./App.css";
import { usePipStore } from "./pipStore";

function App() {
  const increaseStoreCount = usePipStore((state) => state.increaseCount);

  const openWindow = () => {
    window.open(
      `${window.location.origin}/pip`,
      undefined,
      "popup,width=600,height=600",
    );
  };

  return (
    <>
      <button onClick={openWindow}>Open Pip</button>
      <button onClick={increaseStoreCount}>Increase Pip Store Count</button>
    </>
  );
}

export default App;
