import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchBooks from './pages/SearchBooks';
import Saved from './pages/SavedBooks';
import Nav from './components/Nav';
import NoMatch from './pages/NoMatch';
import { Container } from './components/Grid';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
	render() {
		return (
			<div>
				{' '}
				<Nav />
				<Router>
					<Container>
						<ToastContainer
							postion="top-center"
							autoClose={5000}
							transition={Zoom}
							hideProgressBar
							newestOnTop
							closeOnClick
							rtl={false}
							pauseOnVisibilityChange
							draggable={false}
							pauseOnHover
						/>
						<Switch>
							<Route exact path="/" component={SearchBooks} />
							<Route exact path="/books" component={Saved} />
							<Route exact path="/books/:id" component={null} />
							<Route component={NoMatch} />
						</Switch>
					</Container>
				</Router>
			</div>
		);
	}
}
export default App;
