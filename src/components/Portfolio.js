import React from 'react';
// Component
import WorkItem from '../pages/works/WorksItem';
// Data
import { projectsList } from '../data/DataPortfolio';

const Portfolio = () => {
    return (
        <div className="text-center mb-5">
            <div className="mb-5 mt-3 text-center">
                <h1>My Works</h1>
            </div>

            <div className="works" >
                {projectsList.map((item, index) => {
                    return <WorkItem id={ index } item={ item } key={ item.order } />
                })}
            </div>
        </div>
    );
};

export default Portfolio