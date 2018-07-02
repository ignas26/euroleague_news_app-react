import React from 'react';
import {Link} from 'react-router-dom';
import TeamData from './TeamData';

const ClipsTemplate = (props) => {
  return props.data.map((item, i) => (
        <Link to={`/clips/${item.id}`} key={i}>
          <div className="clip-item">
            <div className="left"
                 style={{
                   background: `url(/images/clips/${item.image})`
                 }}>
              <div></div>
            </div>
            <div className="right">
              <TeamData
                  teams={props.teams}
                  teamid={item.team}
                  date={item.date}
              ></TeamData>
              <h2>{item.title}</h2>
            </div>
          </div>
        </Link>
    )
  )
  };





export default ClipsTemplate