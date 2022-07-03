import React from "react";
import ReactSelect from "react-select";
import { ICardIO, Parameters } from "../../types/Card";

interface IProps {
  data: ICardIO;
  onChange(oldData: ICardIO, newData: ICardIO): void;
}

function FormHandler(props: IProps) {
  const options = Object.keys(Parameters).map((key) => ({
    value: key,
    label: key,
  }));

  switch (props.data.type) {
    case Parameters.string:
      return (
        <div className="flex gap-5">
          <ReactSelect
            value={{
              value: props.data.type as string,
              label: props.data.type as string,
            }}
            options={options}
            onChange={(e) => {
              if (e)
                props.onChange(props.data, {
                  ...props.data,
                  type: e.value as Parameters,
                });
            }}
          />
          <input
            value={props.data.value}
            className="p-2 border outline-none border-blue-500/70 rounded-lg"
            placeholder="Value"
            onChange={(e) => {
              props.onChange(props.data, {
                ...props.data,
                value: e.target.value,
              });
            }}
          />
        </div>
      );

    case Parameters.number:
      return (
        <div className="flex gap-5">
          <ReactSelect
            value={{
              value: props.data.type.toString(),
              label: props.data.type.toString(),
            }}
            options={options}
            onChange={(e) => {
              if (e)
                props.onChange(props.data, {
                  ...props.data,
                  type: e.value as Parameters,
                });
            }}
          />
          <input
            value={props.data.value}
            className="p-2 border outline-none border-blue-500/70 rounded-lg"
            placeholder="Value"
            onChange={(e) => {
              props.onChange(props.data, {
                ...props.data,
                value: e.target.value,
              });
            }}
          />
        </div>
      );
  }

  return <React.Fragment></React.Fragment>;
}

export default FormHandler;
