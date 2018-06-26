import React, {Component} from 'react';
import axios from 'axios';
import Template from './Slider_template';

class Slider extends Component {
  state = {
    news: []
  };

  componentWillMount(){
    axios.get(`http://localhost:3004/news?_start=${this.props.start}&_end=${this.props.amount}`)
        .then( response => {
      this.setState({
        news: response.data
      })
    })
  }

  render() {
    return (
        <Template data={this.state.news} type={this.props.type} settings={this.props.settings}/>
    )
  }
}

export default Slider;