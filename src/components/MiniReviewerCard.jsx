import React,{Component} from 'react';
import maleLogo from './img/mars-solid.svg';
import femaleLogo from './img/venus-solid.svg';
import {Card,Row,Col} from 'antd';

import './MiniReviewerCard.css';

class MiniReviewerCard extends Component {
    constructor(props){
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
            gender : '1',
            email : 'kwaiiiii@gmail.com',
            activityScore : 55,
            lastActivityTime : '19.05 11 March 2019',
            totalNumberOfSponsored : 100,
            numberOfFollowers : 9999
        };
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
        return(
            <div>
                <Card className='mini-reviewer-card-container'>
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
                </Card>
            </div>
        )
    }
    
}

export default MiniReviewerCard;
