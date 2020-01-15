import React from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../Context";

const ProductList = () => {
	return (
		<React.Fragment>
			<div className="py-5">
				<div className="container">
					<Title welcome="welcome to the" title="erdoben" store="  shop" />
					{/* product row */}
					<div className="row">
						<ProductConsumer>
							{value => {
								return value.products.map(product => {
									return <Product key={product.id} product={product} />;
								});
							}}
						</ProductConsumer>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};
export default ProductList;
