import React from 'react';
//components
import InfoTable from './../InfoTable'
//hooks
import useTechInfo from'./../../hooks/useTechInfo';

const TechInfo = ({ name, ship, isShip }) => {
    const tableContent = useTechInfo ({name,ship, isShip});
    return (
        <div className="container d-flex flex-column justify-content-around tech-info__container">
            <div
                className={`d-flex row
                     flex-md-row${isShip ? '-reverse' : ''}
                 justify-content-between flex-column py-5`}
            >
            <InfoTable title={tableContent.header} data={tableContent.body} />
                <div className="col col-md-4 d-flex justify-content-center">
                <img src={tableContent.img} alt={name} />
                </div>
            </div>
        </div>
    );
};

export default TechInfo;
