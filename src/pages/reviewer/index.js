import React, { useState, useEffect } from 'react';
import './reviewer.css';
import ReviewerCard from '../../components/ReviewerCard';

const Reviewer = () => {
	const [listReviwer, setListReviewer] = useState([{}, {}, {}]);
	useEffect(() => {
		// fetch data
	});
	return (
		<div class="bg">
			<div className="container">
				<div className="row col title mb-4">Recommended Reviewer</div>
				<div className="row col result">About {listReviwer.length} results</div>
				{listReviwer.map(e => {
					return (
						<div className="row mb-4">
							<div className="col">
								<ReviewerCard data={e}/>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Reviewer;
