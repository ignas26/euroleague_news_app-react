import React from 'react';
import Clips from './reusables/Clips';



const FullClips = () =>(

    <Clips
type="featured"
title={false}
loadmore={true}
start={0}
amount={10}
/>

);

export default FullClips