import React from 'react';
import './reviewer.css';
import ReviewerCard from '../../components/ReviewerCard';

const Reviewer = () => {
	return (
		<div class="bg">
			<div className="container">
				<div className="row title">Recommended Reviewer</div>
				<div className="row result">About 111 results</div>
				<div className="row">
					<div className="col">
						<ReviewerCard />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Reviewer;
