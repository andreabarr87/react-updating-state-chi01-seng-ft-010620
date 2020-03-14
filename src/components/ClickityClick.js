import React from 'react'

class ClickityClick extends React.Component {

	constructor() {
		super()
		this.state = {
			// hasBeenClicked: false
			count: 0
		}
	}

	handleClick = (e) => {
		// let newCount = this.state.count + 1
		this.setState(previousState => {
			return {
				count: previousState.count + 1
			}
		})
	}

	render() {
		return(
			<div>
			{/* <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p> */}
			<h1>this many: {this.state.count}</h1>
			<button onClick={this.handleClick}>well hello</button>
			</div>
		)
	}

}

export default ClickityClick