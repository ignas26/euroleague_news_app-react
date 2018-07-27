import React, {Component} from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {URL} from '../../types/allTypes'
import Buttons from './Buttons';
import TeamData from './TeamData';


class List extends Component {
  state = {
    teams: [],
    items: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount
  };

  componentWillMount() {
    this.request(this.state.start, this.state.end)
  }


  request = (start, end) => {
    if (this.state.teams.length < 1) {
      axios.get(`${URL}/teams`).then(response => {
        this.setState({
          teams: response.data
        })
      })
    }

    axios.get(`${URL}/news?_start=${start}&_end=${end}`).then(response => {
      this.setState({
        items: [...this.state.items, ...response.data],
        start,
        end
      })
    })
  };

  loadMore = () => {
    let end = this.state.end + this.state.amount;
    this.request(this.state.end, end)
  };


  renderNews = (type) => {
    let template = null;
    switch (type) {
      case('landing'):
        template = this.state.items.map((item, i) => (
            <CSSTransition
                classNames={{
                  enter: "list-wrapper",
                  enterActive: "list-wrapper-enter"
                }}
                timeout={500}
                key={i}
            >
              <div key={i}>
                <div className="newslist-item">
                  <Link to={`/news/${item.id}`}>
                    <TeamData
                        teams={this.state.teams}
                        teamid={item.team}
                        date={item.date}
                    />
                    <h2>{item.title}</h2>
                  </Link>
                </div>
              </div>
            </CSSTransition>
        ));
        break;
      case('FullCard'):
        template = this.state.items.map((item, i) => (
            <CSSTransition
                classNames={{
                  enter: "list-wrapper",
                  enterActive: "list-wrapper-enter"
                }}
                timeout={500}
                key={i}
            >
<Link to={`/news/${item.id}`}>
<div className="news-wrapper">
  <div className="left" style={{
    background:`url('/images/news/${item.image}')`
  }}>
    <div></div>
  </div>
<div className="right">
  <TeamData
      teams={this.state.teams}
      teamid={item.team}
      date={item.date}
  />
  <h2>{item.title}</h2>
</div>
</div>
</Link>
            </CSSTransition>
        ));
        break;
      default:
        template = null;
    }
    return template;
  };

  render() {
    return (
        <div>
          <TransitionGroup
              component="div"
              className="transition-list"
          >
            {this.renderNews(this.props.type)}
          </TransitionGroup>
          <Buttons
              type="loadmore"
              loadmore={() => this.loadMore()}
              button="More News"
          />
        </div>
    )
  }

}

export default List;