import React, { Component } from "react";
import { Link } from "react-router-dom";
import erdobenLogo from "../images/erdobenLogo.png";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

export default class Navbar extends Component {
	render() {
		return (
			<NavWrapper className="navbar">
				<Link to="/">
					<img src={erdobenLogo} alt="erdoben logo" className="navbar-logo" />
					<h4 className="navbar-title">chainmaille jewelry</h4>
				</Link>
				<div className="navbar-nav">
					<h3 className="nav-item ml-5">
						<Link to="/" className="nav-link">
							store
						</Link>
					</h3>
					<h3 className="nav-item ml-5">
						<Link to="/about" className="nav-link">
							about
						</Link>
					</h3>
					<h3 className="nav-item ml-5">
						<Link to="/contact" className="nav-link">
							contact
						</Link>
					</h3>
				</div>
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
		text-transform: uppercase;
		font-family: "Unica One", cursive;
	}
	.nav-link:hover {
		font-size: 1.6rem;
		transition: all 0.5s;
	}

	.navbar-nav {
		display: flex;
		flex-direction: row;
	}
`;
