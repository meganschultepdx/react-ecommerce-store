import styled from "styled-components";

export const ButtonContainer = styled.button`
	text-transform: capitalize;
	font-family: "Unica One", cursive;
	font-size: 1.4rem;
	background: transparent;
	border: 0.05rem solid var(--darkPurple);
	border-color: ${props =>
		props.cart ? "var(--darkPurple)" : "var(--mainYellow)"};
	color: ${prop => (prop.cart ? "var(--darkPurple)" : "var(--mainYellow)")};
	border-radius: 0.5rem;
	padding: 0.2rem 0.5rem;
	curser: pointer;
	margin: 0.2rem 0.5rem 0.2rem 0rem;
	transition: all 0.5s ease-in-out;
	&:hover {
		background: ${prop =>
			prop.cart ? "var(--darkPurple)" : "var(--mainYellow)"};
		color: var(--mainWhite);
		&:focus {
			outline: none;
		}
	}
`;
