import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Default from "./components/Default";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Modal from "./components/Modal";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import ScrollButton from "./components/ScrollButton";

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<Switch>
					<Route exact path="/" component={ProductList} />
					<Route exact path="/about" component={About} />
					<Route exact path="/contact" component={Contact} />
					<Route exact path="/details" component={Details} />
					<Route exact path="/cart" component={Cart} />
					<Route component={Default} />
				</Switch>
				<Modal />
				{/* <ScrollButton /> */}
				<Footer />
			</React.Fragment>
		);
	}
}

export default App;
