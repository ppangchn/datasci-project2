import React,{Component} from 'react';
import maleLogo from './img/mars-solid.svg';
import femaleLogo from './img/venus-solid.svg';
import {Card,Row,Col} from 'antd';

import './ReviewerCard.css';

class ReviewerCard extends Component {
    constructor(props){
        super();
        this.state = {
            gender : 'this.props.gender',
            email : 'this.props.email',
            activityScore : 'this.props.activityScore',
            lastActivityTime : 'this.props.lastActivityTime',
            totalNumberOfSponsored : 'this.props.totalNumberOfSponsored',
            numberOfFollowers : 'this.props.numberOfFollowers'
        }
        this.mockdata();
        console.log('ddddd')
    }

    mockdata = () => {
        this.setState({
            gender : '1',
            email : 'kwaiiiii@gmail.com',
            activityScore : 55,
            lastActivityTime : '19.05 11 March 2019',
            totalNumberOfSponsored : 100,
            numberOfFollowers : 9999
        });
    }

    handleDisplayImage = () => {
        if(this.state.gender ==  '1'){
            return <img src={maleLogo} className='gender-img'></img> ;
        } else return <img src={femaleLogo} className='gender-img'></img> ;
    }

    handleMoreInfo = () => {
        this.props.history.push('/');
    }

    render(){
        return(
            <div>
                <Card>
                    <Row type="flex" justify="space-between" className='reviewer-card-container'>
                        <Col>
                            <Row type="flex" justify="start"> <span className='bold-font'>Email:&nbsp; </span>{this.state.email}</Row>
                            <Row type="flex" justify="start"> <span className='bold-font'>Activity Score:&nbsp; </span>{this.state.activityScore}</Row>
                            <Row type="flex" justify="start"> <span className='bold-font'>Last Activity Time:&nbsp;</span>{this.state.lastActivityTime}</Row>
                            <Row type="flex" justify="start"> <span className='bold-font'>Total Number Of Sponsored Reviews:&nbsp; </span>{this.state.totalNumberOfSponsored}</Row>
                            <Row type="flex" justify="start"> <span className='bold-font'>Number Of Followers:&nbsp; </span>{this.state.numberOfFollowers}</Row>
                        </Col>
                        <Col>
                            {this.handleDisplayImage()}
                            <p className='bold-font' onClick={this.handleMoreInfo}>More Info</p>
                        </Col>
                    </Row>
                </Card>
            </div>
        )
    }
    
}

export default ReviewerCard;
