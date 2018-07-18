import React from 'react';


const teamInfo =(props)=>(
  <div className="teamHeader">
<div className="leftSide"
style={{
  background:`url('/images/teams/${props.team.logo}')`
}}
>
</div>
    <div className="rightSide">
      <div>
        <span>
          {props.team.city}
          {props.team.name}
        </span>
      </div>
      <div>
        <strong>
          W{props.team.stats[0].wins}-L{props.team.stats[0].defeats}
        </strong>
      </div>
</div>

  </div>
);

export default teamInfo