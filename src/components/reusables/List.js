import React, {Component} from 'react';
//import {CSSTransition, Transition} from 'react-transition-group';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {URL} from '../../types/allTypes'

class List extends Component{
  state={
  items:[],
  start:this.props.start,
  end:this.props.start + this.props.amount,
  amount:this.props.amount
  };

  componentWillMount(){
    this.request(this.state.start, this.state.end)
  }


  request= (start, end) =>{
    axios.get(`${URL}/news?_start=${start}&_end=${end}`).then(response=>{
      this.setState({
        items:[...this.state.items, ...response.data]
      })
    })
  };

  loadMore =()=>{
    let end = this.state.end + this.state.amount;
    this.request(this.state.end, end)
  };


  renderNews = (type) =>{
    let template =null;
    switch(type) {
      case('landing'):
        template=this.state.items.map((item, i)=>(
          <div key={i}>
            <div className="newslist-item">
              <Link to={`/news/${item.id}`}>
                <h2>{item.title}</h2>
              </Link>
            </div>
          </div>
        ));
        break;
      default: template=null;
    }
    return template;
  };

  render(){
    return(
        <div>
          {this.renderNews(this.props.type)}
          <div onClick={()=>this.loadMore()}>
            LOAD MORE
          </div>
        </div>
    )
  }

}

export default List;