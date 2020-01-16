import React from "react";
import styled from "styled-components";

class ScrollButton extends React.Component {
	constructor() {
		super();

		this.state = {
			intervalId: 0
		};
	}

	scrollStep() {
		if (window.pageYOffset === 0) {
			clearInterval(this.state.intervalId);
		}
		window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
	}

	scrollToTop() {
		let intervalId = setInterval(this.scrollStep.bind(this), "0");
		this.setState({ intervalId: intervalId });
	}

	render() {
		return (
			<ScrollWrapper>
				<button
					title="Back to top"
					className="scrollBtn"
					onClick={() => {
						this.scrollToTop();
					}}
				>
					<span className="arrow-up">
						<i class="fas fa-chevron-up fa-2x"></i>
					</span>
				</button>
			</ScrollWrapper>
		);
	}
}

const ScrollWrapper = styled.button`
	.scrollBtn {
		opacity: 0.7;
		background-color: var(--darkPurple);
		width: 3rem;
		height: 2.5rem;
		position: fixed;
		bottom: 3.25rem;
		right: 1rem;
		border-radius: 5px;
		border: none;
		z-index: 1;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.scrollBtn:hover {
		opacity: 1;
		background-color: var(--mainYellow);
		transition: all 0.5s;
	}

	.arrow-up {
		color: var(--mainWhite);
		position: absolute;
	}
`;

export default ScrollButton;
