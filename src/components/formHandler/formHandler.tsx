import { Grid, InputBase } from "@mui/material";
import React from "react";
import ReactSelect from "react-select";
import { ICardIO, Parameters } from "../../types/Card";
import styles from "./styles.module.scss";

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
        <React.Fragment>
          <ReactSelect
            value={{
              value: props.data.type as string,
              label: props.data.type as string,
            }}
            className={styles.select}
            options={options}
            onChange={(e) => {
              if (e)
                props.onChange(props.data, {
                  ...props.data,
                  type: e.value as Parameters,
                });
            }}
          />
          <InputBase
            value={props.data.name}
            sx={{
              px: 2,
            }}
            placeholder="Value"
            onChange={(e) => {
              props.onChange(props.data, {
                ...props.data,
                name: e.target.value,
              });
            }}
          />
        </React.Fragment>
      );

    case Parameters.number:
      return (
        <React.Fragment>
          <ReactSelect
            value={{
              value: props.data.type.toString(),
              label: props.data.type.toString(),
            }}
            options={options}
            className={styles.select}
            onChange={(e) => {
              if (e)
                props.onChange(props.data, {
                  ...props.data,
                  type: e.value as Parameters,
                });
            }}
          />
          <InputBase
            value={props.data.name}
            sx={{
              px: 2,
            }}
            placeholder="Value"
            onChange={(e) => {
              props.onChange(props.data, {
                ...props.data,
                name: e.target.value,
              });
            }}
          />
        </React.Fragment>
      );
  }

  return <React.Fragment></React.Fragment>;
}

export default FormHandler;
