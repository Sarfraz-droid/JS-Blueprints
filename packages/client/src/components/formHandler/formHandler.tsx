import { Grid, InputBase, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";
import ReactSelect from "react-select";
import { ICardIO, Parameters } from "@workspace/lib/types/Card";
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

  // switch (props.data.type) {
  //   case Parameters.string:
  //     return (
  //       <React.Fragment>
  //         {/* <ReactSelect
  //           value={{
  //             value: props.data.type as string,
  //             label: props.data.type as string,
  //           }}
  //           className={styles.select}
  //           options={options}
  //           onChange={(e) => {
  //             if (e)
  //               props.onChange(props.data, {
  //                 ...props.data,
  //                 type: e.value as Parameters,
  //               });
  //           }}
  //         /> */}
  //         <Typography
  //           sx={{
  //             width: 100,
  //             fontWeight: 600,
  //             color: red[600],
  //           }}
  //           alignSelf={"center"}>
  //           {props.data.type}
  //         </Typography>
  //         <InputBase
  //           value={props.data.name}
  //           sx={{
  //             px: 2,
  //           }}
  //           placeholder="Value"
  //           onChange={(e) => {
  //             props.onChange(props.data, {
  //               ...props.data,
  //               name: e.target.value,
  //             });
  //           }}
  //         />
  //       </React.Fragment>
  //     );

  //   case Parameters.number:
  //     return (
  //       <React.Fragment>
  //         <Typography
  //           sx={{
  //             width: 100,
  //             fontWeight: 600,
  //             color: red[600],
  //           }}
  //           alignSelf={"center"}>
  //           {props.data.type}
  //         </Typography>
  //         <InputBase
  //           value={props.data.name}
  //           sx={{
  //             px: 2,
  //           }}
  //           placeholder="Value"
  //           onChange={(e) => {
  //             props.onChange(props.data, {
  //               ...props.data,
  //               name: e.target.value,
  //             });
  //           }}
  //         />
  //       </React.Fragment>
  //     );
  // }

  return (
    <React.Fragment>
      <Typography
        sx={{
          width: 100,
          fontWeight: 600,
          color: red[600],
        }}
        alignSelf={"center"}>
        {props.data.type}
      </Typography>
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

export default FormHandler;
