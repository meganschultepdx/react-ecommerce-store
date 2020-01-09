import React from "react";

const Title = ({ welcome, title, store }) => {
	return (
		<div className="row">
			<div className="col-12 mx-auto my-2 text-center">
				<h1 className="text-uppercase">
					{welcome} <strong className="text-blue">{title}</strong>
					{store}
				</h1>
			</div>
		</div>
	);
};

export default Title;
