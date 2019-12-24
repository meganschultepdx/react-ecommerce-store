import React, { Component } from "react";
import { Link } from "react-router-dom";
import erdoben_logo from "../images/erdoben_logo.jpg";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

export class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-dark bg-dark">
				<Link to="/">
					<img src={erdoben_logo} alt="erdoben logo" className="navbar-brand" />
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
			</nav>
		);
	}
}

export default Navbar;
