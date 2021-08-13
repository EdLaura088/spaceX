import React from 'react';
import { gql, useQuery} from '@apollo/client';
//components
import Error from './../../components/Error';
import Loader from './../../components/Loader';
import Rocket from './../../components/Rocket';

const GET_SHIP_INFO= gql`
    {
  ship(id: "$shipId") {
    name
    active
    home_port
    roles
  }

}
`;

const ShipPage = ({match}) => {
const shipId= match.params.id;


const {data,loading,error}=useQuery(GET_SHIP_INFO, {
    variables: {shipId},

    });

  if (loading) return <Loader />;
    if (error) return <Error error={error}/>;
     
    return <ship ship={{...data.ship,id:shipId}}/>;
};
export default ShipPage;
