import React, { useState, useEffect } from 'react';
import './reviewer.css';
import ReviewerCard from '../../components/ReviewerCard';
import axios from 'axios';
import $ from 'jquery';

const Reviewer = () => {
	const [listReviwer, setListReviewer] = useState([{},{}, {},{},{},{},{}, {},{},{}]);
	useEffect(() => {
		$.post(`http://192.168.43.24:5000/predict`, {userId: localStorage.getItem('userId')}).then(
			(res) => {
			axios.post('http://localhost:3000/user/id',{
			id:res
		}).then((res) => {
			const {data} = res
			var result = Object.keys(data).map(function(key) {
				return  data[key];
			  });
			  console.log(result)
			setListReviewer(result)
		})
		}
		)
		// axios.post(`http://172.20.10.14:5000/predict?userId=${localStorage.getItem('userId')}`)
		// .then((res) => {
		// 	axios.post('http://localhost:3000/user/id',{
		// 	id:res.data
		// }).then((res) => {
		// 	const {data} = res
		// 	var result = Object.keys(data).map(function(key) {
		// 		return  data[key];
		// 	  });
		// 	  console.log(result)
		// 	setListReviewer(result)
		// })
		// })
				
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
