import React from 'react';
import Slider from './reusables/Slider';
import List from './reusables/List';


const NewsFull=()=>(

  <div>
  <Slider
  type="data"
  settings={{dots:false}}
  start={0}
  amount={3}
  />
    <List
    type="FullCard"
    loadMore={true}
    start={3}
    amount={3}
    />
  </div>
);

export default NewsFull