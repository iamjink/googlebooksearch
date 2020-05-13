import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Container } from '../components/Grid';
import Jumbotron from '../components/Jumbotron';
import API from '../utils/API';

class SavedBooks extends Component {
	state = {
		book: {}
	};

	componentDidMount() {
		API.getBook(this.props.match.params.id)
			.then((res) => this.setState({ book: res.data }))
			.catch((err) => console.log(err));
	}

	deleteBook = (id) => {
		API.deleteBook(id).then((res) => this.loadBooks()).catch((err) => console.log(err));
	};

	render() {
		return (
			<Container fluid>
				<Row>
					<Col size="md-10 md-offset-1">
						<article>
							<h1>Description</h1>
							<p>{this.state.book.description}</p>
						</article>
					</Col>
				</Row>
				<Row>
					<Col size="md-2">
						<Link to="/">← Back to Book Search</Link>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default SavedBooks;
