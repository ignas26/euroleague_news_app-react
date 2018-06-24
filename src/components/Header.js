import React from 'react';
import {Link} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import Navigation from "./Navigation";

const Header = (props)=>{


  const navBars = () =>(

<div className="bars">
<FontAwesome name="bars"
onClick={props.open}
/>
</div>

  );


  const logo = () =>(

        <Link to="/" className="logo"> <img className="logo-img" src="/images/logo-png.png" alt=""/></Link>
  );




  return (
      <div className="header">
        <Navigation {...props}/>
      <div className="optics">
        {navBars()}
        {logo()}
      </div>
      </div>
  )
};

export default Header