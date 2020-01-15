import React from "react";
import styled from "styled-components";

const Footer = () => {
	return (
		<FooterWrapper>
			<div className="footer">
				<a href="http://meganschultepdx.com" target="blank">
					<div className="site-stamp">2020 megan schulte</div>
				</a>
			</div>
		</FooterWrapper>
	);
};

// styled components
const FooterWrapper = styled.footer`
	.footer {
		height: 3rem;
		width: 100%;
		background-color: var(--lightPurple);
	}

	a {
		text-decoration: none;
	}

	.site-stamp {
		color: var(--mainWhite);
		font-size: 1.25rem;
		text-transform: uppercase;
		text-align: center;
		padding-top: 0.5rem;
	}

	.site-stamp:hover {
		font-size: 1.6rem;
		color: var(--mainBlue);
		transition: all 0.5s;
	}
`;

export default Footer;
