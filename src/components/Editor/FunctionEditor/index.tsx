import React from "react";
import Editor from "@monaco-editor/react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

function FunctionEditor() {
  const activeNode = useSelector((state: RootState) => state.activeNode);
  const activeCard = useSelector((state: RootState) => {
    const card = state.nodes.find((card) => card.id === activeNode.activeNode);

    return card;
  });

  if (!activeCard) return <>Please Choose a card</>;

  return (
    <div className="my-2">
      {activeCard?.data.function.outdated ? (
        <div
          style={{
            height: "60vh",
          }}
          className="bg-slate-900 rounded-md text"
        >
          <div>You have to generate a new function for this card.</div>
        </div>
      ) : (
        <Editor
          height="60vh"
          defaultLanguage="javascript"
          defaultValue="// some comment"
          theme="vs-dark"
        />
      )}
    </div>
  );
}

export default FunctionEditor;
