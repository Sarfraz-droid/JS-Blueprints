import { nanoid } from "nanoid";
import React from "react";
import { CardData, Parameters } from "@workspace/lib/types/Card";
import { DefaultComponent, functionCreator } from "../default";

export const condition_LessThan = () =>
	({
		error: {
			code: "",
			message: "",
		},
		function: {
			content: functionCreator(`
            let a = parseFloat(input['A']);
			let b = parseFloat(input['B']);

			if(a < b){
				call('True',{
					'out': true
				})
			}else{
				call('False',{
					'out': false
				})
			}
        `),
		},
		editable: false,
		label: "End",
		renderer: () => (
			<div>
				<p>A{" < "}B</p>
			</div>
		),
		output: [
			{
				type: Parameters.event,
				name: "True",
				id: `${Parameters.event}__output__${nanoid()}`,
			},
			{
				type: Parameters.event,
				name: "False",
				id: `${Parameters.event}__output__${nanoid()}`,
			},
			{
				type: Parameters.boolean,
				value: false,
				id: `${Parameters.boolean}__output__${nanoid()}`,
				name: "out",
			},
		],
		parameters: [],
		input: [
			{
				type: Parameters.event,
				name: "Start",
				id: `${Parameters.event}__input__${nanoid()}`,
			},
			{
				type: Parameters.number,
				value: 0,
				id: `${Parameters.number}__input__${nanoid()}`,
				name: "A",
			},
			{
				type: Parameters.number,
				value: 0,
				id: `${Parameters.number}__input__${nanoid()}`,
				name: "B",
			},
		],
	} as CardData);
