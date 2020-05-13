import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Nav from './components/Nav';
import NoMatch from './pages/NoMatch';

export default function App() {
	return (
		<Router>
			<div>
				<Nav />
				<Switch>
					<Route exact path="/" component={SearchBooks} />
					<Route exact path="/books" component={SavedBooks} />
					<Route exact path="/books/:id" component={SavedBooks} />
					<Route component={NoMatch} />
				</Switch>
			</div>
		</Router>
	);
}
