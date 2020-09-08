import React from 'react';

const WorkCard = props => {
  return (
    <a
      href="#"
      className={props.extraClass + ' w-100 pa4 mv4 bg-light-gray work-card'}>
      <span className="bg-box"></span>
      <span
        class="card-content flex justify-center"
        style={{
          backgroundImage: 'url(' + props.image + ')',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <span className="view-project">View Project</span>
      </span>
    </a>
  );
};

export default WorkCard;
