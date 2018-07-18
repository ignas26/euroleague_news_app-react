import React from 'react';

const postData=(props)=>(
  <div className="postData">
<div>
  date:
  <span>{props.data.date}</span>
</div>
    <div>
      author:
      <span>{props.data.author}</span>
    </div>
  </div>
);

export default postData