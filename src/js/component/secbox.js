import React, { Component } from "react";

//create your first component
export class Secbox extends Component {
	constructor() {
		super();
		this.arrSeconds = [0, 0, 0, 0, 0, 0];
	}

	render() {
		const secondsList = this.arrSeconds.map(function(elem, index) {
			return (
				<div className="numberBox" key={index}>
					<h5>{elem}</h5>
				</div>
			);
		});
		return (
			<div className="d-flex justify-content-center">{secondsList}</div>
		);
	}
}
