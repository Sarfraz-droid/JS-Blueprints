import React from "react";
import { ICardIO, Parameters } from "../../../types/Card";
import Input from "../../commons/UI/Input";

function InputHandler(props: ICardIO) {
  switch (props.type) {
    case Parameters.string:
      return (
        <React.Fragment>
          <Input
            id={`${props.id}__input`}
            placeholder={props.value}
            className="font-mono rounded-sm border-1 ml-2 p-0"
            style={{
              fontSize: "0.5rem",
            }}
          />
        </React.Fragment>
      );
  }

  return <React.Fragment></React.Fragment>;
}

export default InputHandler;
