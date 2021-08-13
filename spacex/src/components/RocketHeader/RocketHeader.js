import React from 'react';
// style
import './style.scss';

const RocketHeader = ({ Id, name }) => {
    const imgStyle = {
        backgroundImage: 'url(../assets/' + Id + '.jpg)',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        height: '100vh',
    };

    return (
        <div className="d-flex flex-column justify-content-around w-100">
            <div style={imgStyle}>
                <div className="rocket__header__container position-absolute d-flex flex-column align-items-center">
                    <h1 className="rocket__header__text">{name.toUpperCase()}</h1>
                </div>
            </div>
        </div>
    );
};

export default RocketHeader;
