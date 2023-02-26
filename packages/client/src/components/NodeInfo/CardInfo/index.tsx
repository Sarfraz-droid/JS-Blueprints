import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UpdateData } from "../../../redux/functions/updateData.action";
import { AppDispatch, RootState } from "../../../redux/store";
import { ICardIO } from "@workspace/lib/types/Card";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { haveInputOutputParam } from "../../../predefined_components";
import CardMenu from "./CardMenu";

function CardInfo() {
	const activeNode = useSelector((state: RootState) => state.active);
	const activeCard = useSelector((state: RootState) => {
		const card = state.nodes.find((card) => card.id === activeNode.activeNode);

		return card;
	});

	const [cardData, setCardData] = useState<
		Array<{
			title: string;
			name: string;
			activeCard: Array<ICardIO>;
			id: string;
		}>
	>([]);

	useEffect(() => {
		if (activeCard) {
			const card = [
				{
					title: "Input",
					name: "input",
					activeCard: activeCard.data.input,
					id: activeCard?.id,
					allowed:
						haveInputOutputParam[
							activeCard.type as keyof typeof haveInputOutputParam
						]?.input,
				},
				{
					title: "Output",
					name: "output",
					activeCard: activeCard.data.output,
					id: activeCard?.id,
					allowed:
						haveInputOutputParam[
							activeCard.type as keyof typeof haveInputOutputParam
						]?.output,
				},
				{
					title: "Parameters",
					name: "parameters",
					activeCard: activeCard.data.parameters,
					id: activeCard?.id,
					allowed:
						haveInputOutputParam[
							activeCard.type as keyof typeof haveInputOutputParam
						]?.parameters,
				},
			];

			setCardData(() => card.filter((i) => i.allowed));
		}
	}, [activeCard]);

	const dispatch = useDispatch<AppDispatch>();

	const data = useMemo(
		() => [
			{
				name: "id",
				value: activeCard?.id,
				editable: false,
			},
			{
				name: "type",
				value: activeCard?.type,
				editable: false,
			},
			{
				name: "label",
				value: activeCard?.data?.label,
				editable: true && activeCard?.data.editable,
			},
		],
		[activeCard]
	);

	if (!activeCard) return null;

	return (
		<Box
			sx={{
				width: "100%",
			}}>
			<Grid direction={"column"} gap={5} columnSpacing={5}>
				{data.map((item, index) => {
					if (item.value === undefined) return null;
					return (
						<Grid item container>
							<Grid item xs={3} alignSelf="center">
								<Typography>{item.name}</Typography>
							</Grid>
							<Grid item xs={9}>
								{item.editable ? (
									<TextField
										variant="filled"
										value={(activeCard?.data as any)[item.name]!}
										sx={{
											"& input": {
												padding: "0.5rem",
											},
										}}
										onChange={(e) => {
											console.log(e.target.value);
											dispatch(
												UpdateData({
													data: {
														[item.name]: e.target.value,
													},
													id: activeCard?.id,
												})
											);
										}}
									/>
								) : (
									<Typography className="self-center opacity-70 italic">
										{activeCard?.id}
									</Typography>
								)}
							</Grid>
						</Grid>
					);
				})}

				{cardData.map((item, index) => (
					<div key={index}>
						<Typography
							variant="h6"
							sx={{
								my: 2,
								fontWeight: 700,
							}}>
							{item.title}
						</Typography>
						<div className="p-3">
							<CardMenu
								activeCard={item.activeCard}
								id={item.id}
								type={item.name}
							/>
						</div>
					</div>
				))}

				<Button
					variant="contained"
					onClick={() => {
						console.log(activeCard);
					}}>
					Log Node
				</Button>
			</Grid>
		</Box>
	);
}

export default CardInfo;
