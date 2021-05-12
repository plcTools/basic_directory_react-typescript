import React, {Fragment} from 'react';
import './styles.scss'
import PropertyCard from '../../components/PropertyCard/propertyCard'

const LandingPage: React.FC = () => {

    return (
        <Fragment>
            <h1>I'm Landing Page</h1>
            <PropertyCard/>
        </Fragment>
    )
};


export default LandingPage;