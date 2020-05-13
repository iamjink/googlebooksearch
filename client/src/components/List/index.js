import React from 'react';
import './style.css';
import Thumbnail from "../Thumbnail";
import {Container,Row, Col} from "../Grid";

export function BookList({children}) {
	return (
		<ul classNAme="List-group">{children}</ul>
	)
}

export class BookListItem extends React.Component {
render() {
	<li>
		<Container>
			<Row>
				<Col size='xs-4 sm-2'>
					<Thumbnail src={this.props.thumbnail} />
				</Col>

				<Col size="xs-8 sm-9">
					<h3>{this.props.title}<span><h5>{this.props.authors.join(", "}</h5></span></h3>
					<p>
						{this.props.synopsis}
					</p>
				</Col>
			</Row>
		</Container>
	</li>
}


}