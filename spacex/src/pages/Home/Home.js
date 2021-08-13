import React, { Fragment } from 'react';
import { gql, useQuery} from '@apollo/client';
//components
import Error from './../../components/Error';
import Loader from './../../components/Loader';
import LaunchesFeed from './../../components/LaunchesFeed';

const GET_LAUNCHES_QUERY= gql`
{
    launchesPast(limit:10){
        mission_name
        launch_site{
            site_name_long
        }
        links{
            article_link
            flickr_images
        }
        id
        launch_date_local
        details
        launch_success
        }
    }
`;
const Home = () => {
    const{data, loading, error}= useQuery(GET_LAUNCHES_QUERY);

       if (loading) return <Loader />;
    if (error) return <Error error={error}/>;
        
    const launches = data.launchesPast.filter(launch => launch.links.article_link && launch.links.flickr_images.length >0 );
   

    return (
        <Fragment>
            <h1 className="display-4 text-center my-5 pt-5">Launches</h1>
            <LaunchesFeed launches= {launches} />
            </Fragment>
    );
};



export default Home;