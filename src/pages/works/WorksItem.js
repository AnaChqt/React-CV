import React from 'react';
import { useNavigate } from 'react-router-dom';

const WorkItem = ({ item, id }) => {
    const navigate = useNavigate();
    return (
        <div className="rounded portfolio" onClick={() => {
            navigate("/work/" + id)
        }}>
            <img className="work__img rounded-top" src={ item.image } alt={ item.title } key={ item.id }/>
            <div className='pt-3 '>
                <h5 className='fw-bold title'>{ item.title }</h5>
                <div>
                    <p className='fst-italic fs-6 pb-2'>{ item.category }</p>
                </div>
            </div>
        </div>
    )
}

export default WorkItem