import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import SelectBox from '../../components/SelectBox';
import './home.css';
import axios from 'axios';
import UserCard from '../../components/UserCard';
import '../../components/UserCard.css';
const Home = props => {
	
	return (
		<div className="home">
			<div className="d-flex justify-content-center flex-column">
				<div className="title mb-5">Friend Suggestion System!</div>
				<UserCard />
				<div class="button d-flex justify-content-center">
					<div class="btn btn-white mr-2 mt-3">Clear</div>
					<div class="btn btn-white mr-5 mt-3 pl-3 pr-3" onClick={() => props.history.push('/reviewer')}>
						Find
					</div>
				</div>
			</div>
		</div>
	);
};

export default withRouter(Home);
