import React from 'react';
import Slider from './reusables/Slider';

const Home = ()=>{
  return(
    <div>
      <Slider
      type="data"
      start={0}
      amount={3}
      settings={{
        dots:false
      }}
      />
    </div>
  )
};

export default Home