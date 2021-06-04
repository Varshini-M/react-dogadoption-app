import React from 'react';
import Adoptathon from './AdoptathonComponent'
import Sponsor from './SponsorComponent';
import Activities from  './ActivitiesComponent';
function About(props) {
    return (
        <React.Fragment>
            <Adoptathon />
            <Sponsor />
            <Activities />
            <br />
        </React.Fragment>
    );
}

export default About;
