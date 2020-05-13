import React from 'react';
import Button from '../Button';
import axios from 'axios';
import { toast } from 'react-toastify';

class AddBtn extends React.Component {
	postDB = (book) => {
		var dbBook = {
			title: book.title,
			authors: book.authors,
			synopsis: book.synopsis,
			thumbnail: book.thumbnail,
			link: book.link
		};

		axios
			.post('/api/books', dbBook)
			.then(() => toast.success(`${book.title} was added to your bookshelf!`))
			.catch((err) => console.log(err));
	};

	render() {
		return (
			<div>
				<Button type="primary" onClick={() => {this.postDB(this.props)}}>Save</Button>
			</div>
		);
	}
}

export default AddBtn;