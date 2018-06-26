import React from 'react';
import {Link} from 'react-router-dom';
import {ACTIVE_YEAR} from "../types/allTypes";

const Footer = ()=> (
      <div className="footer">
        <Link to="/" className="logo"> <img className="logo-img" src="/images/logo-png.png" alt=""/></Link>
      <div className="right">
        @ Euroleague {ACTIVE_YEAR} All Rights Reserved.
      </div>
      </div>
  );

export default Footer