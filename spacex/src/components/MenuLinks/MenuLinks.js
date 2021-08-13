import React from 'react';
import { Link } from 'react-router-dom';

const MenuLinks = ({ ships, toggleMenu }) => 
    ships.map(ship =>
        <div key={ship.name} className="nav__link">
            <Link onClick={() => toggleMenu(false)} to={`/ship/${ship.id}`} className="m-0">
                {ship.name.toUpperCase()}

            </Link>

        </div>
    )
;

export default MenuLinks;
