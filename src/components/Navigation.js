import React from 'react';
import SideNav from 'react-simple-sidenav';

const Navigation =(props)=>{
  return(
<div>
<SideNav
    showNav={props.show}
    onHideNav={props.hide}
    navStyle={{
      background: '#242424',
      maxWidth: '200px'
    }}
>

  OPTIONS
</SideNav>
</div>
  )
};

export default Navigation;