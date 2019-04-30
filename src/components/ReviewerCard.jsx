import React, { Component } from 'react';
import maleLogo from './img/mars-solid.svg';
import femaleLogo from './img/venus-solid.svg';
import { Card, Row, Col } from 'antd';


import './ReviewerCard.css';

class ReviewerCard extends Component {
	constructor(props) {
		super();
		// this.state = {
		//     gender : this.props.gender,
		//     email : this.props.email,
		//     activityScore : this.props.activityScore,
		//     lastActivityTime : this.props.lastActivityTime,
		//     totalNumberOfSponsored : this.props.totalNumberOfSponsored,
		//     numberOfFollowers : this.props.numberOfFollowers
		// }
		this.state = {
			gender: '1',
			email: 'test',
			activityScore: 55,
			lastActivityTime: '19.05 11 March 2019',
			totalNumberOfSponsored: 100,
			numberOfFollowers: 9999,
			TotalRating:0,
			total_number_of_review:0,
			averageRating:0
	
		};
	}

	componentWillReceiveProps(props){
		console.log('prop')
		console.log(props)
		const { gender,id,email_2 ,activity_score,last_activity_time,number_of_followers,total_rating,total_number_of_reviews,average_rating} = props.data
		console.log(gender, id,email_2 ,activity_score,last_activity_time,number_of_followers,total_rating,total_number_of_reviews,average_rating)
		this.setState({
			gender:gender,
			email: email_2,
			activityScore:activity_score,
			lastActivityTime:last_activity_time,
			numberOfFollowers:number_of_followers,
			TotalRating:total_rating,
			total_number_of_review:total_number_of_reviews,
			averageRating:average_rating
		})
	}

	handleDisplayImage = () => {
		if (this.state.gender == '1') {
			return <img src={maleLogo} className="gender-img" />;
		} else return <img src={femaleLogo} className="gender-img" />;
	};

	handleMoreInfo = () => {
		this.props.history.push('/');
	};

	render() {
		return (
			<Card className="reviewer-card-container">
				<Row type="flex" justify="space-between">
					<Col>
						<Row type="flex" justify="start">
							{' '}

							<span className="bold-font">Email:&nbsp; </span>
							{this.state.email}
						</Row>
						<Row type="flex" justify="start">
							{' '}
							<span className="bold-font">Activity Score:&nbsp; </span>
							{this.state.activityScore}
						</Row>
						<Row type="flex" justify="start">
							{' '}
							<span className="bold-font">Last Activity Time:&nbsp;</span>
							{this.state.lastActivityTime}
						</Row>
						<Row type="flex" justify="start">
							{' '}
							<span className="bold-font">Total Number Of Sponsored Reviews:&nbsp; </span>
							{this.state.totalNumberOfSponsored}
						</Row>
						<Row type="flex" justify="start">
							{' '}
							<span className="bold-font">Number Of Followers:&nbsp; </span>
							{this.state.numberOfFollowers}
						</Row>
						<Row type="flex" justify="start">
							{' '}
							<span className="bold-font">TotalRating:&nbsp; </span>
							{this.state.TotalRating}
						</Row>
						<Row type="flex" justify="start">
							{' '}
							<span className="bold-font">TotalNumberOfReview:&nbsp; </span>
							{this.state.total_number_of_review}
						</Row>
						<Row type="flex" justify="start">
							{' '}
							<span className="bold-font">averageRating:&nbsp; </span>
							{this.state.averageRating}
						</Row>
						
					</Col>
					<Col style={{ alignItems: 'center', display: 'flex' }}>{this.handleDisplayImage()}</Col>
				</Row>
			</Card>
		);
	}
}

export default ReviewerCard;
