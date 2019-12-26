import React, { Component } from "react";
import { Link } from "react-router-dom";
import erdobenLogo from "../images/erdobenLogo.png";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

export default class Navbar extends Component {
	render() {
		return (
			<NavWrapper className="navbar navbar-dark bg-dark">
				<Link to="/">
					<img src={erdobenLogo} alt="erdoben logo" className="navbar-logo" />
				</Link>
				<ul className="navbar-nav align-items-center">
					<li className="nav-item ml-5">
						<Link to="/" className="nav-link">
							products
						</Link>
					</li>
				</ul>
				<Link to="/cart" className="ml-auto">
					<ButtonContainer>
						<span className="mr-2">
							<i className="fas fa-cart-plus" />
						</span>
						my cart
					</ButtonContainer>
				</Link>
			</NavWrapper>
		);
	}
}

// styled components
const NavWrapper = styled.nav`
	.nav-link {
		color: var(--mainWhite) !important;
		font-size: 1.3rem;
		text-transform: capitalize;
	}
`;
