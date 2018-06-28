import React from 'react';
import {Link} from 'react-router-dom';


const Buttons =(props)=>{
let template = null;

switch(props.type){
  case 'more-news': template = (
      <div className="fancy-btn"
      onClick={props.loadmore}
      >
        {props.button}
      </div>
  );
  break;
  default: template = null;
}
  return template;
};


export default  Buttons;