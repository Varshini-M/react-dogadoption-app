import React from 'react';
import AdoptDescription from './AdoptDescriptionComponent';
import { useSelector } from 'react-redux';

function Shopping() {
    
    let currentAdoptObject = useSelector((state) => state.currentPupData);
    return (
        <React.Fragment>
            <div >
                <AdoptDescription pupDetails={currentAdoptObject} />
            </div>
        </React.Fragment>
    );
};

export default Shopping;
