import React, { Component } from "react";
import NewLine from "./newLine";
import Ls from "./ls";
import Cat from "./cat";
export class Page extends Component {
	state = {
		numberOfLine: 0,
		displayEverything: [{ value: "", id: 0, displayInput: true, type: "line" }]
	};
	information = {
		name: "anne",
		commands: [
			{
				id: 10,
				type: "ls"
			},
			{
				id: 11,
				type: "cat"
			},
			{
				id: 12,
				type: "clear"
			},
			{
				id: 13,
				type: "cmd"
			}
		],
		subDir: [
			{
				id: 14,
				type: "about.txt"
			},
			{
				id: 15,
				type: "education.txt"
			},
			{
				id: 19,
				type: "techstack.txt"
			},
			{
				id: 16,
				type: "projects.txt"
			},
			{
				id: 17,
				type: "socials.txt"
			},
			{
				id: 18,
				type: "contact_me.txt"
			}
		]
	};
	render() {
		return (
			<div className="container">
				<div className="terminal">
					<p className="prompt">
						hi, it's {this.information.name} :D 
						for basic commands type cmd
					</p>

					{this.state.displayEverything.map(l => {
						if (l.type === "line") {
							return (
								<NewLine
									key={l.id}
									handelWhatever={this.handelWhatever}
									line={l}
									displayInput={l.displayInput}
								></NewLine>
							);
						} else if (l.type === "ls") {
							return (
								<Ls key={l.id} line={l} subDir={this.information.subDir}></Ls>
							);
						} else if (l.type === "cmd") {
							return (
								<Ls key={l.id} line={l} subDir={this.information.commands}></Ls>
							);
						} else if (l.type === "cat") {
							return <Cat key={l.id} line={l}></Cat>;
						}
					})}
				</div>
			</div>
		);
	}

	handelWhatever = (string_value, Tid) => {
		let res = string_value.split(" ");

		if (res[0] === "clear") {
			this.setState({
				numberOfLine: 0,
				displayEverything: [
					{ value: "", id: 0, displayInput: true, type: "line" }
				]
			});
		} else {
			this.setState(
				{
					displayEverything: [
						...this.state.displayEverything.filter(l => l.id !== Tid),
						//...{ value: string_value, id: Tid, displayInput: false , type: "line"}
						{
							...this.state.displayEverything.find(l => l.id === Tid),
							value: string_value,
							type: res[0]
						}
					]
				},
				() => this.handleClick()
			);
		}
	};

	// Adding a new line after a click
	handleClick = event => {
		const num = this.state.displayEverything.length + 1;
		this.setState({
			numberOfLine: this.state.numberOfLine + 1,
			displayEverything: [
				...this.state.displayEverything,
				{ value: "", id: num, displayInput: true, type: "line" }
			]
		});
	};
}

export default Page;
