import React from 'react';
import { Link } from 'react-router-dom';
// style
import './style.scss';

const LaunchArticle = ({ name, link, imgUrl, description,date, details,success}) => (
    <div className="d-flex flex-column justify-content-around w-100">
        <Link to={{ pathname: link }} className="article" target="_blank" rel="noopener">
            <img srcSet={`${imgUrl}`} alt={name} className="article__image" />
        
            <div className="article__header">
                <h2 className="m-1 p-8">{name}</h2>
                <p className="m-1 p-2">{description} {date} {success}  </p> 
            </div>

 </Link>
                <h5 className="d-flex flex-column justify-content-around w-100"> {details} </h5>
                   
      
 
    </div>
);

export default LaunchArticle;
