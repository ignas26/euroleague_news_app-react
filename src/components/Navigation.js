import React from 'react';
import SideNav from 'react-simple-sidenav';
import NavItems from './NavItems';

const Navigation =(props)=>{
  return(
<div>
<SideNav
    showNav={props.show}
    onHideNav={props.hide}
    navStyle={{
      background: '#232523',
      maxWidth: '195px'
    }}
>
<NavItems>

</NavItems>
  OPTIONS
</SideNav>
</div>
  )
};

export default Navigation;