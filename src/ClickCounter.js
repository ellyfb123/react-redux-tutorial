import React, { Component } from 'react';

class ClickCounter extends Component {
	constructor(props) {
		super(props);
		this.clickButton = this.clickButton.bind(this);
		this.state = {
			count: 0
		}
	}

	clickButton() {
		this.setState({count: this.state.count+1})
	}

	render() {
		const { count } = this.state;
		const inlineStyle = {
			margin: '20px',
			color: 'red'
		}
		return (
			<div style={inlineStyle}>
				<button onClick={this.clickButton}>count me</button>
				<p>the count is { count }</p>
			</div>
			)
	}
}

export default ClickCounter;
