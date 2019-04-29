import React from 'react';
import { withRouter } from 'react-router-dom';
import SelectBox from '../../components/SelectBox';
import './home.css';

const Home = props => {
	return (
		<div className="home">
			<div className="d-flex justify-content-center flex-column">
				<div className="title">Find the best reviewer for your restaurant!</div>
				<div className="d-flex form flex-column p-5 align-items-center">
					<div className="d-flex mb-3 w-75 justify-content-between">
						<div className="topic">Restaurant Type</div>
						<SelectBox />
					</div>
					<div className="d-flex mb-3 w-75 justify-content-between">
						<div className="topic">Location</div>
						<SelectBox />
					</div>
					<div className="d-flex mb-3 w-75 justify-content-between">
						<div className="topic">User Age Range</div>
						<SelectBox />
					</div>
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
