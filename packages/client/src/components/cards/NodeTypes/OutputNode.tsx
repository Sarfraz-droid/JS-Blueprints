import { Card, createStyles, Typography } from "@mui/material";
import { grey, yellow } from "@mui/material/colors";
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

export function OutputNode(props: CardInterface) {
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
							Math.max(props.data.output.length, props.data.parameters.length) *
								5 +
							50,
						"&:focus": {
							boxShadow: theme.shadows[6],
						},
						boxShadow: theme.shadows[0],
						background: theme.palette.background.paper,
						border: `1px solid ${theme.palette.primary.main}`,
					})}>
					<Box
						sx={(theme) => ({
							width: "100%",
							py: 0.4,
							bgcolor: yellow[800],
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
								color: "text.primary",
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
						<Typography>
							{props.data.input.map((input, index) => (
								<div>
									<Typography
										sx={{
											fontSize: "0.4rem",
										}}>
										{input.name}
									</Typography>
									<pre
										style={{
											fontSize: "0.4rem",
										}}>
										{JSON.stringify(input.value, null, 2)}
									</pre>
								</div>
							))}
						</Typography>
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
									id={_.id}
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
										color: (ParameterColor as any)[_.type],
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
