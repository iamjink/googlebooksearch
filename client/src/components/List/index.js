import React from 'react';
import './style.css';
import Thumbnail from '../Thumbnail';
import { Container, Row, Col } from '../Grid';

export function BookList({ children }) {
	return <ul className="List-group">{children}</ul>;
}

export class BookListItem extends React.Component {
	render() {
		return (
			<li>
				<Container>
					<Row>
						<Col size="xs-4 sm-2">
							<Thumbnail src={this.props.thumbnail} />
						</Col>

						<Col size="xs-8 sm-9">
							<h3>
								{this.props.title}
								<span>
									<h5>{this.props.authors.join(', ')}</h5>
								</span>
							</h3>
							<p>{this.props.synopsis}</p>
							<a target="_blank" href={this.props.link} rel="noopener noreferrer"> Go to Book</a>
						</Col>
					</Row>
				</Container>
			</li>
		);
	}
}
