import React from "react";
import { useDispatch } from "react-redux";
import { UpdateData } from "../../../redux/functions/UpdateData";
import { AppDispatch } from "../../../redux/store";
import { ICardIO, Parameters } from "../../../types/Card";
import Input from "../../commons/UI/Input";

function InputHandler({
  item,
  onChange,
}: {
  item: ICardIO;
  onChange: (value: string) => void;
}) {
  switch (item.type) {
    case Parameters.string:
      return (
        <React.Fragment>
          <label
            className="-mb-2 z-50 -mr-8 bg-white font-bold"
            style={{
              fontSize: "0.3rem",
            }}
          >
            {item.name}
          </label>
          <Input
            id={`${item.id}__input`}
            placeholder={item.name}
            className="font-mono rounded-sm border-1 p-0"
            style={{
              fontSize: "0.5rem",
            }}
            onChange={(e) => {
              onChange(e.target.value);
            }}
            value={item.value}
          />
        </React.Fragment>
      );
  }

  return <React.Fragment></React.Fragment>;
}

export default InputHandler;
