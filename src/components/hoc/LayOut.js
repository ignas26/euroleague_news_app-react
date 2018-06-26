import React, {Component} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

class LayOut extends Component{
  state={
  show:false
  };

  navigationTrigger = (action)=>{
    this.setState({
      show:action
    })
  };

render() {
  return (
      <div>
        <Header
        show={this.state.show}
        hide={() => this.navigationTrigger(false)}
        open={() => this.navigationTrigger(true)}
        />
        {this.props.children}

<Footer></Footer>

      </div>
  )
}
}

export default LayOut