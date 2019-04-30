import React, { useState, useEffect } from 'react';
import './reviewer.css';
import ReviewerCard from '../../components/ReviewerCard';
import axios from 'axios';

const Reviewer = () => {
	const [listReviwer, setListReviewer] = useState([{},{}, {},{},{},{},{}, {},{},{}]);
	useEffect(() => {
		axios.post('http://localhost:3000/user/id',{
			id:[22,211,323,41,52,1,2,3,4,5]
		}).then((res) => {
			const {data} = res
			var result = Object.keys(data).map(function(key) {
				return  data[key];
			  });
			  console.log(result)
			setListReviewer(result)
		})		
	},[]);

	return (
		<div className="bg">
			<div className="container">
				<div className="row col title mb-4">Recommended Reviewer</div>
				<div className="row col result">About {listReviwer.length} results</div>
				{listReviwer.map((e,index) => {
					return (
						<div className="row mb-4" key={index}>
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
