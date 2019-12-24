import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Default from "./components/Default";
import Details from "./components/Details";

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<ProductList />
				<Details />
				<Default />
			</React.Fragment>
		);
	}
}

export default App;
