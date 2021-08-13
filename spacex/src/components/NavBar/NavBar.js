import React, {useRef} from 'react';
import {gql,useQuery} from '@apollo/client';
//components
import Error from './../Error';
import Loader from './../Loader';
import TopMenu from './../TopMenu';
import SideMenu from './../SideMenu';
//hooks
import useNavigation from './../../hooks/useNavigation';
//style
import './style.scss';

const GET_SHIP_NAMES = gql`
{
ship(id: "$shipId")
{
id
name
}
}
`;
const NavBar = () => {
    const navRef=useRef(null);
    const {
        isMobileView,
        isMenuOpen,
        setIsMenuOpen,
    }=useNavigation(navRef);

    const {data,loading,error}=useQuery(GET_SHIP_NAMES);
  
    if (loading) return <Loader />;
    if (error) return <Error error={error}/>;
   
    return(
    <div className="container-fluid" ref={navRef}>
        <div className="row">
        <TopMenu
            isMenuOpen={isMenuOpen}
            isMobileView={isMobileView}
            toggleMenu={setIsMenuOpen}
            ship={data.ship}
        />
        <SideMenu
            isMenuOpen={isMenuOpen}
            isMobileView={isMobileView}
            toggleMenu={setIsMenuOpen}
            ship={data.ship}
        />
        </div>
        </div>
    );
};

export default NavBar;
