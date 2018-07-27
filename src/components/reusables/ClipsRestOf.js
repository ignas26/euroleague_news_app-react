import React from 'react';
import ClipsTemplate from './ClipsTemplate';


const ClipsRestOf =(props)=>(

<div className='wrapper'>
  <ClipsTemplate
  data={props.data}
  teams={props.teams}
  />
</div>

);

export default ClipsRestOf