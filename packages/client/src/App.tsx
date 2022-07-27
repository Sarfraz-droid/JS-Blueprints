import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./redux/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Editor from "./screens/Editor";
import Docs from "./screens/Docs";
import Home from "./screens/Home";

function App() {
  const card = useSelector((state: RootState) => state.nodes);
  const edges = useSelector((state: RootState) => state.edges);
  const activeCard = useSelector((state: RootState) => state.activeNode);
  console.log(card);

  const dispatch = useDispatch<AppDispatch>();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="editor">
            <Route index element={<Editor />} />
            <Route path=":id" element={<Editor />} />
          </Route>
          <Route path="docs">
            <Route index element={<Docs />} />
            <Route path=":id" element={<Docs />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
