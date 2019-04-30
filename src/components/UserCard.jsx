import React,{Component} from 'react';
import {Card,Col,Row} from 'antd';
import MiniReviewerCard from './MiniReviewerCard';

import './UserCard.css';

class UserCard extends Component{
    constructor(props){
        super(props)
        //mock data
        this.state = {
            data : [
                {
                    gender : '1',
                    email : 'kwaiiiii@gmail.com',
                    activityScore : 55,
                    lastActivityTime : '19.05 11 March 2019',
                    totalNumberOfSponsored : 100,
                    numberOfFollowers : 9999
                },
                {
                    gender : '1',
                    email : 'kwaiiiii@gmail.com',
                    activityScore : 55,
                    lastActivityTime : '19.05 11 March 2019',
                    totalNumberOfSponsored : 100,
                    numberOfFollowers : 9999
                },{
                    gender : '1',
                    email : 'kwaiiiii@gmail.com',
                    activityScore : 55,
                    lastActivityTime : '19.05 11 March 2019',
                    totalNumberOfSponsored : 100,
                    numberOfFollowers : 9999
                }
            ]
        }
    }

    handleRenderCard = () => {
        const data = this.state.data;
        return data.map((content, idx) => {

            return (
            <Col key={idx} span={5} className='card-in-usercard'>
              <MiniReviewerCard className='card-in-usercard' content={content} />
            </Col>
            )
        }
          
        )
    }

    render(){
        return(
            <Card className='usercard-root' style={{borderRadius:25}}>
                <Row type='flex' justify='space-between'>
                    {this.handleRenderCard()}
                </Row>
            </Card>
        )
    }
}

export default UserCard;