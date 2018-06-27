import React from 'react';
import Slider from './reusables/Slider';
import List from './reusables/List';

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
      <List
          type="landing"
          loadMore={true}
          start={3}
          amount={3}
      />
    </div>
  )
};

export default Home