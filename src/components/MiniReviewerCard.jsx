import React,{Component} from 'react';
import maleLogo from './img/mars-solid.svg';
import femaleLogo from './img/venus-solid.svg';
import {Row,Col} from 'antd';

import './MiniReviewerCard.css';

class MiniReviewerCard extends Component {
    constructor(props){
        super(props);
        // this.state = {
        //     gender : this.props.gender,
        //     email : this.props.email,
        //     activityScore : this.props.activityScore,
        //     lastActivityTime : this.props.lastActivityTime,
        //     totalNumberOfSponsored : this.props.totalNumberOfSponsored,
        //     numberOfFollowers : this.props.numberOfFollowers
        // }
        this.state = {
            id: 0,
            gender : '1',
            email : 'kwaiiiii@gmail.com',
            activityScore : 55,
            lastActivityTime : '19.05 11 March 2019',
            totalNumberOfSponsored : 100,
            numberOfFollowers : 9999,
            choose:false,
            userId:0,
        };

    }   
    componentDidMount() {
        const {userId} = this.props
        this.setState({userId})
        console.log('prop')
		console.log(this.props)
		const { gender,id,email_2 ,activity_score,last_activity_time,number_of_followers,total_rating,total_number_of_reviews,average_rating} = this.props.data
		console.log(gender, id,email_2 ,activity_score,last_activity_time,number_of_followers,total_rating,total_number_of_reviews,average_rating)
		this.setState({
            id:id,
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

  
	componentWillReceiveProps(props){
        const {userId} = props
        console.log('recieve props userId',userId)
        this.setState({userId})
		console.log('prop')
		console.log(props)
		const { gender,id,email_2 ,activity_score,last_activity_time,number_of_followers,total_rating,total_number_of_reviews,average_rating} = props.data
		console.log(gender, id,email_2 ,activity_score,last_activity_time,number_of_followers,total_rating,total_number_of_reviews,average_rating)
		this.setState({
            id:id,
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
        if(this.state.gender ==  '1'){
            return <img src={maleLogo} style={{margin:30}} className='gender-img'></img> ;
        } else return <img src={femaleLogo} style={{margin:30}} className='gender-img'></img> ;
    }

    handleMoreInfo = () => {
        this.props.history.push('/');
    }

    render(){
        console.log('sadfdfd',this.state.choose)
        return(
            <div className={`container p-3 h-100 ${this.state.userId === this.state.id ? 'mini-card' : ''}`} onClick={() => this.setState({choose:true})}>
                <div className='row mini-reviewer-card-container p-2 d-flex justify-content-center' onClick={()=> {this.props.changeUserId(this.state.id)}}>
                    <Row>{this.handleDisplayImage()}</Row>
                    <Row type="flex" justify="center" style={{borderRadius:25}}>
                        <Col>
                            <Row type="flex" justify="start"> <span className='bold-font'>Email:&nbsp; </span>{this.state.email}</Row>
                            <Row type="flex" justify="start"> <span className='bold-font'>Activity Score:&nbsp; </span>{this.state.activityScore}</Row>
                            <Row type="flex" justify="start"> <span className='bold-font'>Last Activity Time:&nbsp;</span>{this.state.lastActivityTime}</Row>
                            <Row type="flex" justify="start"> <span className='bold-font'>Total Number Of Sponsored Reviews:&nbsp; </span>{this.state.totalNumberOfSponsored}</Row>
                            <Row type="flex" justify="start"> <span className='bold-font'>Number Of Followers:&nbsp; </span>{this.state.numberOfFollowers}</Row>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
    
}

export default MiniReviewerCard;
