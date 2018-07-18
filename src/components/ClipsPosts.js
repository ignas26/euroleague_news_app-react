import React, {Component} from 'react';
import axios from 'axios';
import {URL} from '../types/allTypes'
import Header from './ClipsHeader'

class ClipsPosts extends Component{
state={
  clips:[],
  team:[]
};

  componentWillMount(){
    axios.get(`${URL}/clips?id=${this.props.match.params.id}`).then(response=>{
      let post = response.data[0];
      axios.get(`${URL}/teams?id=${post.team}`).then(response=>{
        this.setState({
          clips:post,
          team:response.data
        })
      })
    })
  }

  render(){
const clips = this.state.clips;
const team = this.state.team;

    return(
        <div>
          <Header teamdata={team[0]}/>
          clips
        </div>
    )
  }



}

export default ClipsPosts