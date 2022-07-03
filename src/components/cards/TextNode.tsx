import React, { ChangeEvent, useCallback } from "react";
import { Handle, Position } from "react-flow-renderer";
import { CardInterface, ParameterColor, Parameters } from "../../types/Card";
import Input from "../commons/UI/Input";
import InputHandler from "./UI/InputHandler";

const handleStyle = { top: 10 };

export function TextUpdaterNode(props: CardInterface) {
  console.log(props);
  const onChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
    console.log(evt.target.value);
  }, []);

  return (
    <>
      <div
        style={{
          minHeight:
            Math.max(props.data.output.length, props.data.parameters.length) *
              5 +
            50,
        }}
      >
        {props.data.output.map((_, index) => (
          <React.Fragment>
            <Handle
              type="source"
              position={Position.Right}
              style={{
                top: index * 10 + 20,
                padding: 3,
                marginLeft: -1,
                backgroundColor: (ParameterColor as any)[_.type],
              }}
            />
            <label
              className="absolute right-0 mr-1 font-extralight"
              style={{
                top: index * 10 + 20,
                fontSize: "0.5rem",
                marginTop: "-0.4rem",
                color: (ParameterColor as any)[_.type],
              }}
            >
              {_.value}
            </label>
          </React.Fragment>
        ))}
        <div
          className="text-left font-mono p-0 px-1 text-white bg-blue-400  w-full "
          style={{
            fontSize: "0.5rem",
          }}
        >
          {props.data.label}
        </div>
        <div className="px-7 py-2  flex flex-col justify-start items-start gap-1 rounded-lg ">
          {props.data.parameters.map((item, index) => (
            <InputHandler {...item} key={index} />
          ))}
        </div>

        {props.data.input.map((_, index) => {
          return (
            <React.Fragment>
              <Handle
                type="source"
                position={Position.Left}
                style={{
                  top: index * 10 + 20,
                  padding: 3,
                  marginLeft: -1,
                  backgroundColor: (ParameterColor as any)[_.type],
                }}
              />
              <label
                className="absolute left-0 ml-1 font-extralight"
                style={{
                  top: index * 10 + 20,
                  fontSize: "0.5rem",
                  marginTop: "-0.4rem",
                  color: (ParameterColor as any)[_.type],
                }}
              >
                {_.value}
              </label>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
}
