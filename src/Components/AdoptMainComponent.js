import React, { useEffect, useState } from 'react';
import Adopt from './AdoptComponent';
function AdoptMain() {
    const [pupDetails, setPupDetails] = useState();
    const jsonListFunction = async () => {
        let response = await fetch('http://localhost:8400/v1/getAdoptPupDetails');
        const responseJson = await response.clone().json();
        setPupDetails(responseJson);
    };
    useEffect(() => {
        jsonListFunction();
    }, []);

    return (
        <React.Fragment>
            <div className='App-AdoptPupItems'>
                {pupDetails !== undefined && pupDetails.map((pup) => {
                    return <Adopt key={pup.id} pupDetails={pup} />
                })}
            </div>
        </React.Fragment>
    );
};

export default AdoptMain;