import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import {
  Box,
  Button,
  Divider,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { runCodeService } from "../../../services/functions.service";
import { ICardIO, Parameters } from "@workspace/lib/types/Card";

// ? Test Runner
function TestRunner({
  item,
  SampleInput,
  setSampleInput,
}: {
  item: ICardIO;
  SampleInput: { [key: string]: string };
  setSampleInput: (value: any) => void;
}) {
  switch (item.type) {
    case Parameters.string:
    case Parameters.number:
      return (
        <React.Fragment>
          <InputLabel id={`testinput_label_${item.id}`}>{item.name}</InputLabel>

          <TextField
            variant="filled"
            label={item.name}
            placeholder={`Enter ${item.type}`}
            type={item.type}
            sx={{
              p: 0.4,
              width: "60%",
            }}
            value={SampleInput?.[item.name] ? SampleInput[item.name] : ""}
            onChange={(e) => {
              setSampleInput({
                ...SampleInput,
                [item.name]: e.target.value,
              });
            }}
          />
        </React.Fragment>
      );

    case Parameters.boolean:
      return (
        <React.Fragment>
          <InputLabel id={`testinput_label_${item.id}`}>{item.name}</InputLabel>
          <Select
            variant="filled"
            labelId={`testinput_label_${item.id}`}
            id={`testinput_${item.id}`}
            label={"Input"}
            placeholder={item.name}
            value={
              SampleInput?.[item.name] !== undefined
                ? SampleInput[item.name]
                : ""
            }
            onChange={(e) => {
              setSampleInput({
                ...SampleInput,
                [item.name]: e.target.value === "true" ? true : false,
              });
            }}>
            <MenuItem value={"true"}>True</MenuItem>
            <MenuItem value={"false"}>False</MenuItem>
          </Select>
        </React.Fragment>
      );
  }
}

function TestRun() {
  const [CodeRunner, setCodeRunner] = useState({
    running: false,
    output: "",
    data: {},
  });

  const [SampleInput, setSampleInput] = useState<{ [key: string]: string }>({});

  const activeNode = useSelector((state: RootState) => state.active);

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
        input: activeCard?.data.input.map((item) => {
          return {
            ...item,
            value: SampleInput[item.name] ? SampleInput[item.name] : item.value,
          };
        }),
        parameter: activeCard?.data.parameters,
        code: activeCard?.data.function.content,
      };

      console.log(data, SampleInput);
      if (!activeCard?.data.function.content || !data.input || !data.parameter)
        return new Error("Missing data");

      const output = runCodeService(
        data.input,
        data.parameter,
        activeCard?.data.function.content
      );

      setCodeRunner({
        ...CodeRunner,
        running: false,
        output: JSON.stringify(output, null, 2),
      });

      console.log(data);
    } catch (err) {
      setCodeRunner({
        running: false,
        output: "Error Occured",
        data: {},
      });

      console.log(err);
    }
  }, [activeCard, SampleInput]);

  if (!activeCard) return <>Please Choose a card</>;

  return (
    <div
      style={{
        height: "95vh",
        overflow: "auto",
      }}>
      <Stack
        direction={"column"}
        spacing={1}
        sx={{
          p: 2,
        }}>
        {activeCard.data.input.map((item, index) => (
          <React.Fragment>
            <TestRunner
              item={item}
              SampleInput={SampleInput}
              setSampleInput={setSampleInput}
            />
          </React.Fragment>
        ))}
      </Stack>
      <Button variant="contained" onClick={TestState} sx={{ my: 2 }}>
        {CodeRunner.running ? "Running..." : "Run"}
      </Button>
      <div className="p-1">
        <Typography
          sx={{
            fontWeight: 700,
          }}>
          Output
        </Typography>
        <pre className="p-3 h-40 bg-slate-200 font-mono">
          {CodeRunner.output}
        </pre>
      </div>
    </div>
  );
}

export default TestRun;
