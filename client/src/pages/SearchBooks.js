import React, { Component } from 'react';
import { SaveBtn, ViewBtn, DeleteBtn } from '../components/Buttons';
import Jumbotron from '../components/Jumbotron';
import API from '../utils/API';
import { Link } from 'react-router-dom';
import { Col, Row, Container } from '../components/Grid';
import { List, ListItem } from '../components/List';
import { Input, FormBtn } from '../components/Form';
import axios from "axios";

class SearchBooks extends Component {
	state = {
		searchResult: [],
		query:"",
		books: [],
	};

	loadBooks = (data) => {
		this.setState({books:data.items});
	};


	handleInputChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = (event) => {
		event.preventDefault();	
	let url=`https://www.googleapis.com/books/v1/volumes?q=${
		this.state.query
	  }`;
	  axios.get(url).then(res=>{this.loadBooks(res.data)}).catch(err=>console.log(err)
	  )
	};

	render() {
		return (
			<Container fluid>
				<Row>
					<Col size="md-8">
						<Jumbotron>
							<h1>Google Book Research</h1>
						</Jumbotron>
						<form>
							<Input
								value={this.state.title}
								onChange={this.handleInputChange}
								name="title"
								placeholder="Input your title here"
							/>
							<FormBtn disabled={!this.state.title} onClick={this.handleFormSubmit}>
								Submit Book
							</FormBtn>
						</form>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default SearchBooks;
