import React from 'react';

export default function Nav() {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
			<a className="navbar-brand" href="/">
				Google Books Search
			</a>
			<ul className="navbar-nav">
				<li className="nav-item">
					<a className="nav-link navbar-brand" id="savedLink" href="/bookshelf">Saved Books</a>
				</li>
			</ul>
		</nav>
	);
}
