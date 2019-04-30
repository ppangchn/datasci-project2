import React from 'react';
import { withRouter } from 'react-router-dom';
import SelectBox from '../../components/SelectBox';
import './home.css';

const Home = props => {
	return (
		<div className="home">
			<div className="d-flex justify-content-center flex-column">
				<div className="title">Friend Suggestion System!</div>
				<div className="d-flex form flex-column p-5 align-items-center">
						
				</div>
				<div class="button d-flex justify-content-end">
					<div class="btn btn-white mr-2 mt-3">Clear</div>
					<div class="btn btn-white mr-5 mt-3" onClick={() => props.history.push('/reviewer')}>
						Find
					</div>
				</div>
			</div>
		</div>
	);
};

export default withRouter(Home);
