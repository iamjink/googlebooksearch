import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Container } from '../components/Grid';
import Jumbotron from '../components/Jumbotron';
import { BookList, BookListItem } from '../components/List';
import EmptyList from '../components/EmptyList';
import RemoveBtn from '../components/RemoveButton';
import { toast } from 'react-toastify';
import axios from 'axios';

class SavedBooks extends Component {
	state = {
		savedBooks: [],
		initialized: true
	};

	componentDidMount() {
		this.getBooks();
	}

	getBooks = () => {
		axios
			.get('/api/books')
			.then((res) => {
				this.setState({ savedBooks: res.data });
			})
			.catch((err) => console.log(err));
	};

	deleteBook = (id) => {
		axios
			.delete(`/api/books/${id}`)
			.then(() => {
				toast.error('Book deleted');
				this.getBooks();
			})
			.catch((err) => console.log(err));
	};

	render() {
		return (
			<Container fluid>
				<Row>
					<Col size="md-12">
						<Jumbotron>
							<h1>Saved Books</h1>
						</Jumbotron>
						{this.state.savedBooks.length > 0 ? (
							<BookList>
								{this.state.savedBooks.map((book) => {
									return (
										<div>
											<BookListItem
												key={book._id}
												authors={book.authors}
												title={book.title}
												synopsis={book.synopsis}
												link={book.link}
												thumbnail={book.thumbnail}
											/>
											<RemoveBtn onClick={() => this.deleteBook(book._id)} />
										</div>
									);
								})}
							</BookList>
						) : (
							<EmptyList />
						)}
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
