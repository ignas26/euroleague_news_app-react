import React from 'react';
import FontAwesome from 'react-fontawesome';

const TeamData =(props)=>{

  const teamName =(teams, teamid)=>{
    let data = teams.find((item)=>{
      return item.id === teamid
    });
    if(data){
      return data.name
    }
  };



  return(
      <div className="team">
        <span className="teamName">
          {teamName(props.teams, props.teamid)}
        </span>
        <span className="date">
          <FontAwesome name="clock-o"/>
          {props.date}
        </span>
      </div>
  )


};

export default TeamData;