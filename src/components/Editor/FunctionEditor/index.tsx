import React, { useCallback, useState } from "react";
import Editor from "@monaco-editor/react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { UpdateData } from "../../../redux/functions/UpdateData";
import { instance } from "../../../api/instance";
import toast from "react-hot-toast";

function FunctionEditor() {
  const [CodeRunner, setCodeRunner] = useState({
    running: false,
    output: "",
    data: {},
  });

  const activeNode = useSelector((state: RootState) => state.activeNode);

  const activeCard = useSelector((state: RootState) => {
    const card = state.nodes.find((card) => card.id === activeNode.activeNode);
    return card;
  });

  const dispatch = useDispatch<AppDispatch>();

  const TestState = useCallback(async () => {
    try {
      setCodeRunner({
        ...CodeRunner,
        running: true,
      });

      const data = {
        input: activeCard?.data.input,
        parameter: activeCard?.data.parameters,
        code: activeCard?.data.function.content,
      };

      console.log(data);

      const res = await instance.post("/function/run", data);

      if (res.status === 200) {
        setCodeRunner({
          running: false,
          output: JSON.stringify(res.data.data, null, 2),
          data: res.data.data,
        });
      }
    } catch (err) {
      console.log(err);
      setCodeRunner({
        running: false,
        output: "Error Occured",
        data: {},
      });
      toast.error("Error in running code");
    }
  }, [activeCard, CodeRunner]);

  if (!activeCard) return <>Please Choose a card</>;

  return (
    <div className="my-2">
      {activeCard?.data.function.outdated ? (
        <div
          style={{
            height: "60vh",
          }}
          className="bg-slate-900 rounded-md text-white flex flex-col justify-center items-center"
        >
          <div>You have to generate a new function for this card.</div>
          <button className="p-3 px-5 shadow-lg hover:shadow-blue-500/20 my-4 bg-blue-500 hover:bg-blue-600 rounded-lg transition-all">
            Generate function
          </button>
        </div>
      ) : (
        <Editor
          height="60vh"
          defaultLanguage="javascript"
          value={activeCard.data.function.content}
          onChange={(newValue) => {
            dispatch(
              UpdateData({
                data: {
                  function: {
                    ...activeCard.data.function,
                    content: newValue,
                  },
                },
                id: activeCard.id,
              })
            );
          }}
          theme="vs-dark"
        />
      )}

      <button className="btn" onClick={TestState}>
        {CodeRunner.running ? "Running..." : "Run"}
      </button>

      <div className="p-1">
        <h1 className="font-bold text-lg">Output</h1>
        <pre className="p-3 h-40 bg-slate-200 font-mono">
          {CodeRunner.output}
        </pre>
      </div>
    </div>
  );
}

export default FunctionEditor;
