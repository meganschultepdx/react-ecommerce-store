import React from "react";

// destructuring the item and value
const CartItem = ({ item, value }) => {
	const { id, title, img, price, total, count } = item;
	const { increment, decrement, removeItem } = value;
	return (
		<div className="cart-row row my-1 mb-4 text-capitalize text-center">
			<div className="col-10 mx-auto col-lg-2">
				<img
					src={img}
					style={{ width: "5rem", height: "5rem" }}
					className="img-fluid"
					alt="product"
				/>
			</div>
			<div className=" cart-productcol-10 mx-auto col-lg-2">
				<span className="d-lg-none">product: </span>
				{title}
			</div>
			<div className="cart-price col-10 mx-auto col-lg-2">
				<span className="d-lg-none">$ </span>
				{price}
			</div>
			<div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
				<div className="d-flex justify-content-center"></div>
				<span className="btn btn-black mx-1" onClick={() => decrement(id)}>
					-
				</span>
				<span className="btn btn-black mx-1">{count}</span>
				<span className="btn btn-black mx-1" onClick={() => increment(id)}>
					+
				</span>
			</div>
			{/*  */}
			<div className="col-10 mx-auto col-lg-2">
				<div className="cart-icon" onClick={() => removeItem(id)}>
					<i className="fas fa-trash"></i>
				</div>
			</div>
			<div className="col-10 mx-auto col-lg-2">
				<strong>item total: ${total}</strong>
			</div>
		</div>
	);
};

export default CartItem;
