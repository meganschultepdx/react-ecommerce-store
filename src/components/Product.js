import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../Context";
import PropTypes from "prop-types";

export default class Product extends Component {
	render() {
		const { id, title, img, price, inCart } = this.props.product;
		return (
			<ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
				<div className="card">
					<ProductConsumer>
						{value => (
							<div
								className="img-container p-5"
								onClick={() => value.handleDetail(id)}
							>
								<Link to="/details">
									<img src={img} alt="product" className="card-img-top" />
								</Link>
								<button
									className="cart-btn"
									disabled={inCart ? true : false}
									onClick={() => {
										value.addToCart(id);
										value.openModal(id);
									}}
								>
									{inCart ? (
										<p className="text-capitalize mb-0" disabled>
											in cart
										</p>
									) : (
										<i className="fas fa-cart-plus" />
									)}
								</button>
							</div>
						)}
					</ProductConsumer>
					{/*  card footer */}
					<div className="card-footer d-flex flex-column justify-content-center">
						<div className="card-title d-flex justify-content-center mb-0">
							<h5 className="mb-0">{title}</h5>
						</div>
						<div className="d-flex justify-content-center">
							<h5 className="text-blue font-italic mb-0">
								<span className="mr-1">$</span>
								{price}
							</h5>
						</div>
					</div>
				</div>
			</ProductWrapper>
		);
	}
}

Product.propTypes = {
	product: PropTypes.shape({
		id: PropTypes.number,
		img: PropTypes.string,
		title: PropTypes.string,
		price: PropTypes.number,
		inCart: PropTypes.bool
	}).isRequired
};

const ProductWrapper = styled.div`
	.card {
		border-color: transparent;
		height: 20rem;
		width: 16rem;
		transition: all 0.5s linear;
	}
	.card-footer {
		background: transparent;
		border-top: transparent;
		transition: all 0.5s linear;
	}
	&:hover {
		.card {
			border: 0.04rem solid rgba(0, 0, 0, 0, 0.2);
			box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
		}
		.card-footer {
			background: rgba(247, 247, 247);
		}
	}
	.card-title {
		text-align: center;
		text-transform: capitalize;
		font-family: "Unica One", cursive !important;
	}
	.img-container {
		height: 15rem;
		margin-top: -0.5rem;
		position: relative;
		overflow: hidden;
	}
	.card-img-top {
		transition: all 1s linear;
	}
	.img-container:hover .card-img-top {
		transform: scale(1.2);
	}
	.cart-btn {
		position: absolute;
		bottom: 0;
		right: 0;
		padding: 1rem 2rem;
		background: var(--lightPurple);
		border: none;
		color: var(--mainwWhite);
		border-radius: 0.5rem 0 0 0;
		transform: translate(100%, 100%);
		transition: all 1s linear;
	}
	.img-container:hover .cart-btn {
		transform: translate(0, 0);
	}
	.cart-btn:hover {
		color: var(--mainWhite);
		cursor: pointer;
	}
`;
