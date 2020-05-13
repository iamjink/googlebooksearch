import React, { Component } from 'react';
import AddBtn from '../components/AddButton';
import Jumbotron from '../components/Jumbotron';
import { Col, Row, Container } from '../components/Grid';
import { BookList, BookListItem } from '../components/List';
import { Input, FormBtn } from '../components/Form';
import axios from 'axios';
import EmptyList from '../components/EmptyList';

class SearchBooks extends Component {
	state = {
		searchResult: [],
		query: '',
		books: []
	};

	loadBooks = (data) => {
		this.setState({ books: data.items });
	};

	handleInputChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = (event) => {
		event.preventDefault();
		let url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.query}`;
		axios
			.get(url)
			.then((res) => {
				this.loadBooks(res.data);
			})
			.catch((err) => console.log(err));
	};

	render() {
		return (
			<Container fluid>
				<Row>
					<Col size="md-12">
						<Jumbotron>
							<h1>Google Book Research</h1>
						</Jumbotron>
						<form>
							<Input
								id="bookQuery"
								className="form-control form-control-lg"
								type="text"
								value={this.state.query}
								onChange={this.handleInputChange}
								name="query"
								placeholder="Input your title here"
							/>
							<FormBtn disabled={!this.state.query} type="submit" onClick={this.handleFormSubmit}>
								Search For Books
							</FormBtn>
						</form>
					</Col>
					<br />
					<Col size="md-12">
						{this.state.books && this.state.books.length > 0 ? (
							<BookList>
								{this.state.books.map((book) => {
									return (
										<div>
											{' '}
											<AddBtn
												authors={
													book.volumeInfo.authors ? (
														book.volumeInfo.authors
													) : (
														[ 'Author unknown' ]
													)
												}
												title={book.volumeInfo.title}
												synopsis={
													book.volumeInfo.description ? (
														book.volumeInfo.description
													) : (
														'No synopsis available'
													)
												}
												link={book.volumeInfo.infoLink}
												thumbnail={
													book.volumeInfo.imageLinks.thumbnail ? (
														book.volumeInfo.imageLinks.thumbnail
													) : (
														'#'
													)
												}
											/>
											<BookListItem
												key={book.id}
												authors={
													book.volumeInfo.authors ? (
														book.volumeInfo.authors
													) : (
														[ 'Author unknown' ]
													)
												}
												title={book.volumeInfo.title}
												synopsis={
													book.volumeInfo.description ? (
														book.volumeInfo.description
													) : (
														'Description unavailable'
													)
												}
												link={book.volumeInfo.infoLink}
												thumbnail={
													book.volumeInfo.imageLinks.thumbnail ? (
														book.volumeInfo.imageLinks.thumbnail
													) : (
														'#'
													)
												}
											/>
										</div>
									);
								})}
							</BookList>
						) : (
							<EmptyList />
						)}
					</Col>
				</Row>
			</Container>
		);
	}
}

export default SearchBooks;
