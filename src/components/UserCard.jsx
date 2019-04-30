import React,{Component} from 'react';
import {Card,Col,Row} from 'antd';
import MiniReviewerCard from './MiniReviewerCard';

import './UserCard.css';
import axios from 'axios';

class UserCard extends Component{
    constructor(props){
        super(props)
        //mock data
        this.state = {
            userId: 0
        }
    }

    changeUserId = (userId) => {
        console.log('choose: ',userId)
        this.setState({userId})
        localStorage.setItem('userId',userId)
    }
    componentDidMount(){
        axios.get('http://localhost:3000/user/random',{
		}).then((res) => {
			const {data} = res
			var result = Object.keys(data).map(function(key) {
				return  data[key];
			  });
              this.setState({result})
		})		
    }
    handleRenderCard = () => {
        const {result} = this.state;
        return result ? result.map((content, idx) => {

            return (
            <Col key={idx} span={6} className='card-in-usercard'>
              <MiniReviewerCard className='card-in-usercard' data={content} userId={this.state.userId} changeUserId={this.changeUserId} />
            </Col>
            )
        }
          
        ): <div>sdfsd</div>
    }

    render(){
        return(
            <Card className='ml-5 mr-5 usercard-root' style={{borderRadius:25}}>
                <Row><span className="color">User Selected:</span> {this.state.userId === 0 ? 'plz select your profile' : this.state.userId}</Row>
                <div className="d-flex justify-content-around">
                    {this.handleRenderCard()}
                </div>
            </Card>
        )
    }
}

export default UserCard;