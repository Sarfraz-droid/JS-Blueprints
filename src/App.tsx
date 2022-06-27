import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import UpdatableEdge from "./UpdatableEdge";

function App() {
  const card = useSelector((state: RootState) => state.card);

  console.log(card);

  return (
    <div className="App h-screen">
      <button onClick={() => {}}>Add Card</button>
      <UpdatableEdge />
    </div>
  );
}

export default App;
