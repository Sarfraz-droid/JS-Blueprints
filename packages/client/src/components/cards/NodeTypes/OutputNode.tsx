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
	parameterColor,
	Parameters,
} from "@workspace/lib/types/Card";
import InputHandler from "../UI/InputHandler";
import NodeWrapper from "./common/NodeWrapper";
import TagHandler from "./common/TagHandler";

const handleStyle = { top: 10 };

const doNotOutput = [Parameters.event];

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
						background: theme.palette.grey[200],
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
							{props.data.input
								.filter((item) => !doNotOutput.includes(item.type))
								.map((input, index) => (
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
								<TagHandler
									_={_}
									index={index}
									position={Position.Left}
									key={index}
								/>
							</React.Fragment>
						);
					})}
				</Card>
			</NodeWrapper>
		</>
	);
}
