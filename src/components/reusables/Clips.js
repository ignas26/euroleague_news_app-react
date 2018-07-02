import React, {Component} from 'react';
import axios from 'axios';
import {URL} from '../../types/allTypes'
import Buttons from './Buttons';
import ClipsTemplate from './ClipsTemplate';


class Clips extends Component {
  state = {
    teams: [],
    clips: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount
  };

  componentWillMount(){
    this.request(this.state.start, this.state.end)
  }


  request=(start, end)=>{
    if(this.state.teams.length<1){
      axios.get(`${URL}/teams`).then(response=>{
this.setState({
  teams:response.data
})
      })
    }
axios.get(`${URL}/clips?_start=${start}&_end=${end}`).then(response=>{
  this.setState({
    clips:[...this.state.clips, ...response.data],
    start,
    end
  })
})
  };

  showClips=()=>{
    let template= null;
    switch(this.props.type){
      case('featured'):
        template = <ClipsTemplate
            data={this.state.clips}
            teams={this.state.teams}/>;
        break;
      default:
        template=null
    }
    return template;
  };

  loadMore = ()=>{
let end =this.state.end + this.state.amount;
this.request(this.state.end, end)
  };

  showTitle = (title) =>{
    return title ? <h3><strong>Euroleague</strong>Clips</h3> : null
  };

  showButton=()=>{
    return this.props.loadMore?
        <Buttons
        type="loadmore"
        loadmore={()=>this.loadMore()}
        button="more clips"
        />
        :
        <Buttons
            type="linkTo"
            button="more clips"
            linkTo="/clips"/>
  };

render(){
    return(
<div className="wrapper">
  {this.showTitle(this.props.title)}
  {this.showClips()}
  {this.showButton()}
</div>
    )
}

}

export default Clips