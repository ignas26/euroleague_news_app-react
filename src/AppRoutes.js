import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import LayOut from './components/hoc/LayOut';
import NewsPost from './components/NewsPost';

class AppRoutes extends Component {

  render() {
    return (
        <BrowserRouter>
          <LayOut>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/news/:id" exact component={NewsPost}/>
            </Switch>
          </LayOut>
        </BrowserRouter>
    )
  }
}

export default AppRoutes