import React, { useState } from 'react';
import { Card, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import favourite from '../assets/favourite.png';
import correct from '../assets/correct.png';
import wrong from '../assets/wrong.png';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions,currentPupActions,adoptPupActions } from '../store/indexstore';
import AdoptModal from './AdoptModalComponent';
import {Link} from 'react-router-dom';

function Adopt(props) {
    const [isModal, setIsModal] = useState(false);
    const isVaccinated = props.pupDetails.vaccinated;
    const isPottyTrained = props.pupDetails.pottyTrained;
    const images = require.context('../assets/', true);
    let dispatch = useDispatch();
    let cartObject = useSelector((state) => state.cartData);
    const [isAdopt, setIsAdopt] = useState(cartObject.idList.indexOf(props.pupDetails.id) !== -1);
    const adoptSubmitHandler = (event) => {
        event.preventDefault();
        dispatch(cartActions.addCart({ id: props.pupDetails.id, quantity: 1, amount: 100, name: props.pupDetails.name+' AdoptionFee' }));
        dispatch(currentPupActions.addCurrent(props.pupDetails));
        dispatch(adoptPupActions.addAdoptPup(props.pupDetails));
        setIsAdopt(true);
        setIsModal(true);
    };
    const sponsorSubmitHandler = (event) => {
        event.preventDefault();
    };
    const favouriteSubmitHandler = () => {
    };

    const imageClickHandler = () => {
        dispatch(currentPupActions.addCurrent(props.pupDetails));
    };

    return (
        <React.Fragment>
            <Card className='App-width'>
                <Link to={`/Adopt/${props.pupDetails.id}`}><Card.Img variant="top" src={images(`./${props.pupDetails.image}`)} width='100vw' height='250vw' onClick={imageClickHandler} /></Link>
                <Card.Body>
                    <Card.Title>{props.pupDetails.name}</Card.Title>
                    <Card.Text className='App-AdoptText'>
                        {props.pupDetails.description}
                    </Card.Text>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem className='App-AdoptText'>Vaccinated {<img src={isVaccinated === 'true' ? correct : wrong} alt='correct' width='20vw' height='20vw' />}</ListGroupItem>
                        <ListGroupItem className='App-AdoptText'>Potty Trained {<img src={isPottyTrained === 'true' ? correct : wrong} alt='correct' width='20vw' height='20vw' />}</ListGroupItem>
                    </ListGroup>
                    <br />
                    <Button variant="outline-dark" size="sm" className='App-AdoptText' onClick={adoptSubmitHandler} disabled={isAdopt}>Adopt</Button>{' '}
                    <Button variant="outline-dark" size="sm" className='App-AdoptText' onClick={sponsorSubmitHandler}>Sponsor</Button>{' '}
                    <Button variant='outline-*secondary'><img src={favourite} alt='favicon' height='30vw' width='30vw' onClick={favouriteSubmitHandler} /></Button>
                    {isModal && <AdoptModal title={'Your pup is ready to reach you!!'} description={'Do you wish to purchase coupons/ offers for vet appointments and explore exciting options exclusive for adoption owners?'} pupDetails={props.pupDetails}/>}
                </Card.Body>
            </Card>
        </React.Fragment>
    );
}

export default Adopt;