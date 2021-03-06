import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Button from '../Button';

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
			.then(() => toast.success(`You added ${book.title} to your bookshelf`))
			.catch((err) => console.log(err));
	};

	render() {
		return (
			<div>
				<Button
					type="primary"
					onClick={() => {
						this.postDB(this.props);
					}}
				>
					Save
				</Button>
			</div>
		);
	}
}

export default AddBtn;
