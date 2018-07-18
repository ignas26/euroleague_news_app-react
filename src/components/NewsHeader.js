import React from 'react';
import TeamInfo from './TeamInfo';
import PostData from './PostData';


const header = (props) =>{

  const teamInfo =(team)=>{
  return team ? (
      <TeamInfo team={team}/>
  ) : null
};

  const postInfo =(date, author)=>(
    <PostData
    data={{date, author}}
    >

    </PostData>
  );

  return(
      <div>
        {teamInfo(props.teamInfo)}
        {postInfo(props.date, props.author)}
      </div>
  )
};

export default header
