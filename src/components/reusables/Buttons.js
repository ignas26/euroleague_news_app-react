import React from 'react';
import {Link} from 'react-router-dom';


const Buttons = (props) => {
  let template = null;

  switch (props.type) {
    case 'loadmore':
          template = (
          <div className="fancy-btn"
               onClick={props.loadmore}
          >
            {props.button}
          </div>
      );
          break;
    case 'linkTo':
      template = (
<Link to={props.linkTo}
  className="fancy-btn">
  {props.button}
</Link>
      );
      break;
    default:
      template = null;
  }
  return template;
};


export default Buttons;