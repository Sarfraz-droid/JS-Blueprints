import { Card, createStyles, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Box } from "@mui/system";
import React, { ChangeEvent, useCallback } from "react";
import { Handle, Position } from "react-flow-renderer";
import { useDispatch } from "react-redux";
import { UpdateData } from "../../../redux/functions/updateData.action";
import { AppDispatch } from "../../../redux/store";
import {
  CardInterface,
  ParameterColor,
  Parameters,
} from "@workspace/lib/types/Card";
import InputHandler from "../UI/InputHandler";
import NodeWrapper from "./common/NodeWrapper";

const handleStyle = { top: 10 };

export function TextUpdaterNode(props: CardInterface) {
  console.log(props);
  const onChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
    console.log(evt.target.value);
  }, []);

  const dispatch = useDispatch<AppDispatch>();

  return (
		<>
			<NodeWrapper card={props}>
				<Card
					sx={(theme) => ({
						minHeight:
							Math.max(
								props.data.output.length,
								props.data.parameters.length,
								props.data.input.length
							) *
								8 +
							50,
						"&:focus": {
							boxShadow: theme.shadows[6],
						},
						boxShadow: theme.shadows[0],
						background: "background.paper",
						border: `1px solid ${theme.palette.primary.main}`,
					})}>
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
						}}>
						Event
					</Typography>

					{props.data.output.map((_, index) => (
						<React.Fragment>
							<Handle
								type="source"
								position={Position.Right}
								style={{
									top: (index + 1) * 10 + 25,
									padding: 1,
									marginLeft: -1.5,
									backgroundColor: (ParameterColor as any)[_.type],
									width: 3,
									height: 3,
								}}
								id={_.id}
							/>
							<Typography
								sx={{
									position: "absolute",
									top: (index + 1) * 10 + 25,
									right: 3,
									fontSize: "0.3rem",
									marginTop: "-0.2rem",
									color: (ParameterColor as any)[_.type],
								}}>
								{_.name}
							</Typography>
						</React.Fragment>
					))}
					<Box
						sx={(theme) => ({
							width: "100%",
							py: 0.4,
							bgcolor: theme.palette.primary.main,
							borderRadius: "0.2rem",
							mt: 0.1,
							ml: 0.01,
						})}>
						<Typography
							sx={{
								fontSize: "0.3rem",
								textAlign: "left",
								pl: 1,
								fontWeight: "bold",
								color: "white",
							}}>
							{props.data.label}
						</Typography>
					</Box>
					<Box
						sx={(theme) => ({
							pl: 4,
							pr: 5,
							py: 1,
						})}>
						{props.data.renderer !== null && props.data.renderer != undefined
							? props.data?.renderer()
							: ""}
						{props.data.parameters.map((item, index) => (
							<InputHandler
								item={item}
								onChange={(value) => {
									const newParameters = { ...item, value: value };
									dispatch(
										UpdateData({
											data: {
												parameters: props.data.parameters.map((_, i) => {
													if (_.id === item.id) return newParameters;
													return _;
												}),
											},
											id: props.id,
										})
									);
								}}
								key={index}
							/>
						))}
					</Box>

					{props.data.input.map((_, index) => {
						return (
							<React.Fragment>
								<Handle
									type="target"
									position={Position.Left}
									style={{
										top: (index + 1) * 10 + 25,
										padding: 1,
										marginLeft: 1,
										backgroundColor: (ParameterColor as any)[_.type],
										width: 3,
										height: 3,
									}}
									id={`${_.id}`}
								/>
								<Typography
									className="absolute left-0 ml-1 font-extralight"
									sx={{
										position: "absolute",
										left: 0,
										ml: 0.6,
										top: (index + 1) * 10 + 25,
										fontSize: "0.3rem",
										marginTop: "-0.2rem",
										color: "text.secondary",
									}}>
									{_.name}
								</Typography>
							</React.Fragment>
						);
					})}

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
						}}>
						Event
					</Typography>
				</Card>
			</NodeWrapper>
		</>
	);
}
