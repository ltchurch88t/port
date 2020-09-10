import React from 'react';
import WorkCard from '../work/WorkCard';

const WorkSection = props => {
  return (
    <div className="relative flex flex-wrap justify-center w-100 h-100">
      <h1 className="work-title tl mr-auto absolute left-0 top-0">WORK</h1>
      <div className="ml-auto mr-auto w-80 flex flex-wrap justify-evenly">
        <div className="w-40-l ma-auto w-80 flex flex-column justify-evenly">
          <WorkCard image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80" />
          <WorkCard image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
        </div>
        <div className="w-40-l ma-auto w-80 second-column-work flex flex-column justify-evenly">
          <WorkCard image="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
          <WorkCard image="https://images.unsplash.com/photo-1536148935331-408321065b18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80" />
        </div>
      </div>
      <div className="w-100 tc flex justify-center mt5">
        <a href="/work" className="mainBtn">
          <span className="behind"></span>
          <span className="btnContent"></span>
          <span className="ma-auto relative">View More</span>
        </a>
      </div>
    </div>
  );
};

export default WorkSection;
