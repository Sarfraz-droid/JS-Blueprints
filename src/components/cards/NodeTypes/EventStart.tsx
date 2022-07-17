import { Card, createStyles, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Box } from "@mui/system";
import React, { ChangeEvent, useCallback } from "react";
import { Handle, Position } from "react-flow-renderer";
import { useDispatch } from "react-redux";
import { UpdateData } from "../../../redux/functions/UpdateData.action";
import { AppDispatch } from "../../../redux/store";
import { CardInterface, CardType } from "../../../types/Card";
import InputHandler from "../UI/InputHandler";

export function EventHandlerNode(props: CardInterface) {
  console.log(props);
  const onChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
    console.log(evt.target.value);
  }, []);

  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <Card
        sx={(theme) => ({
          minHeight:
            Math.max(props.data.output.length, props.data.parameters.length) *
              5 +
            50,
          "&:focus": {
            boxShadow: theme.shadows[6],
          },
          boxShadow: theme.shadows[0],
          background: grey[100],
          border: `1px solid red`,
        })}
      >
        {props.type === CardType.basic_EventStart && (
          <React.Fragment>
            <Handle
              type="source"
              position={Position.Right}
              style={{
                top: 25,
                padding: 1,
                marginLeft: -1.5,
                backgroundColor: "red",
                width: 3,
                height: 3,
                borderRadius: 0,
              }}
              id={props.data.start}
            />

            <Typography
              sx={{
                position: "absolute",
                top: 25,
                right: 3,
                px: 1,
                fontSize: "0.3rem",
                marginTop: "-0.2rem",
                color: "gray",
              }}
            >
              Event
            </Typography>
          </React.Fragment>
        )}

        <Box
          sx={(theme) => ({
            width: "100%",
            py: 0.4,
            bgcolor: "red",
            borderRadius: "0.2rem",
            mt: 0.1,
            ml: 0.01,
          })}
        >
          <Typography
            sx={{
              fontSize: "0.3rem",
              textAlign: "left",
              pl: 1,
              fontWeight: "bold",
              color: "white",
            }}
          >
            {props.data.label}
          </Typography>
        </Box>
        <Box
          sx={(theme) => ({
            pl: 4,
            pr: 5,
            py: 1,
          })}
        >
          {props.data.parameters != undefined &&
            props.data.parameters.map((item, index) => (
              <InputHandler
                item={item}
                onChange={(value) => {
                  const newParameters = { ...item, value: value };

                  if (props.data.parameters === undefined) return;

                  dispatch(
                    UpdateData({
                      data: {
                        parameters: [
                          props.data.parameters.filter((_, i) => i !== index),
                          newParameters,
                        ],
                      },
                      id: props.id,
                    })
                  );
                }}
                key={index}
              />
            ))}
        </Box>

        {props.type === CardType.basic_EventEnd && (
          <React.Fragment>
            <Handle
              type="target"
              position={Position.Left}
              style={{
                top: 25,
                padding: 1,
                marginLeft: 1,
                backgroundColor: "red",
                width: 3,
                height: 3,
                borderRadius: 0,
              }}
              id={props.data.end}
            />

            <Typography
              sx={{
                position: "absolute",
                top: 25,
                left: 0,
                ml: 0.6,
                fontSize: "0.3rem",
                marginTop: "-0.2rem",
                color: "gray",
              }}
            >
              Event
            </Typography>
          </React.Fragment>
        )}
      </Card>
    </>
  );
}
