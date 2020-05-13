import React from 'react';
import Button from '../Button';

export default function RemoveBtn(props) {
	return (
		<Button type="danger" className="delete-btn" {...props} role="button" tabIndex="0">
			Delete
		</Button>
	);
}
