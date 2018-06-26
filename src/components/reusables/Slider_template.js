import React from 'react';
import {Link} from 'react-router-dom';
import Slick from 'react-slick';

const Template = (props) => {
  let template = null;

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
      ...props.settings
  };

  switch (props.type) {
    case ('data'):
      template = props.data.map((item, i) => {
        return (
            <div key={i}>
              <div className="data">
                <div className="data-img"
                     style={{background: `url(/images/news/${item.image})`}}>
                </div>
                <Link to={`/news/${item.id}`}>
                  <div className="data-caption">
                    {item.title}
                  </div>
                </Link>
              </div>
            </div>
        )
      });
      break;
    default:
      template = null;

  }


  return (
      <Slick {...settings}>
        {template}
      </Slick>
  )

};

export default Template