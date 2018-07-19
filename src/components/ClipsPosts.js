import React, {Component} from 'react';
import axios from 'axios';
import {URL} from '../types/allTypes'
import Header from './ClipsHeader'
import ClipsRestOf from './reusables/ClipsRestOf'

class ClipsPosts extends Component{
state={
  clips:[],
  team:[],
  teams:[],
  restOf:[]
};

  componentWillMount(){
    axios.get(`${URL}/clips?id=${this.props.match.params.id}`).then(response=>{
      let post = response.data[0];
      axios.get(`${URL}/teams?id=${post.team}`).then(response=>{
        this.setState({
          clips:post,
          team:response.data
        });
        this.restOfClips();
      })
    })
  }

  restOfClips=()=>{
    axios.get(`${URL}/teams`)
        .then(response=>{

let teams = response.data;

          axios.get(`${URL}/clips?q=${this.state.team[0].city}`)
              .then(response=>{
this.setState({
  teams,
  restOf:response.data
})
              })
    });
  };

  render(){
const clips = this.state.clips;
const team = this.state.team;

    return(
        <div>
          <Header teamdata={team[0]}/>
          <div className='wrapper'>
<h1>{clips.title}</h1>
            <iframe
              title='player'
              width='100%'
              height='300px'
              src={`https://www.youtube.com/embed/${clips.url}`}
            >
            </iframe>
          </div>
          <ClipsRestOf
          data={this.state.restOf}
          teams={this.state.teams}
          />
        </div>
    )
  }



}

export default ClipsPosts