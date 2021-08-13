import React, { Fragment } from 'react';
//components
import RocketHeader from './../RocketHeader';
import TechInfo from './../TechInfo';
//style
import  './style.scss';

const Ship = ({ ship }) => {
    const{id,name,active,home_port,roles} = Ship;


    return (
    <Fragment>
    <div className="ship d-flex flex-column aligh-items-center justify-content-around">
        <RocketHeader id={id} name={name} />
        <TechInfo name={name}ship={{active,roles,home_port}}/>
    </div>
    <TechInfo name={Ship.id} ship={ship} isShip />
    </Fragment>
    );
};

export default Ship;
