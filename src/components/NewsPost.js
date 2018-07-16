import React, {Component} from 'react';
import axios from 'axios';
import {URL} from '../types/allTypes'
import Header from './NewsHeader';
import Body from './NewsBody';

class NewsPost extends Component{
  state={
    news:[],
    team:[]
  };

  componentWillMount(){
    axios.get(`${URL}/news?id=${this.props.match.params.id}`).then(response=>{
    let post = response.data[0];
    axios.get(`${URL}/teams?id=${post.team }`).then(response=>{
      this.setState({
        news:post,
        team:response.data
      })
    })
    })
  }

  render(){
    const post = this.state.news;
    const team = this.state.team;

    return(
        <div className="wrapper">
          <Header
              teamData={team[0]}
              date={post.date}
              author={post.author}
          >
          </Header>
          <Body>
          </Body>
        </div>
    )
  }
}

export default NewsPost