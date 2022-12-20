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
	parameterColor,
	Parameters,
} from "@workspace/lib/types/Card";
import InputHandler from "../UI/InputHandler";
import NodeWrapper from "./common/NodeWrapper";
import TagHandler from "./common/TagHandler";

const handleStyle = { top: 10 };

// ? Node used to update text
export function NodeTemplate(props: CardInterface) {
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
						background: theme.palette.grey[200],
						pt: 0,
					})}>
					{/* <Handle
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
					</Typography> */}

					{/* 
            Right side of node
          */}
					{props.data.output.map((_, index) => (
						<React.Fragment>
							<TagHandler
								_={_}
								index={index}
								position={Position.Right}
								key={_.id}
							/>
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

					{/* 
            Left Side of Node
          */}
					{props.data.input.map((_, index) => {
						return (
							<React.Fragment>
								<TagHandler
									position={Position.Left}
									_={_}
									index={index}
									key={index}
								/>
							</React.Fragment>
						);
					})}

					{/* <Handle
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
					</Typography> */}
				</Card>
			</NodeWrapper>
		</>
	);
}
