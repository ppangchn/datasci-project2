import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import './Header.css';
const Container = styled.div`
	height: 4em;
	border-bottom: 5px solid #0070a8;
`;

const Header = props => {
	return (
		<Container>
			<div className="d-flex justify-content-left ml-5">
				<img
					src="icon.png"
					className="icon"
					style={{ cursor: 'pointer' }}
					onClick={() => props.history.push('/')}
				/>
			</div>
		</Container>
	);
};

export default withRouter(Header);
