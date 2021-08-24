import React from 'react';
import { Card, Button, ListGroup, ListGroupItem} from 'react-bootstrap';
import favourite from '../assets/favourite.png';
import correct from '../assets/correct.png';
import wrong from '../assets/wrong.png';

function Adopt(props) {
    // const [isAdopt, setIsAdopt] = useState(false);
    // const [isSponsor, setIsSponsor] = useState(false);
    // const [isFavourite, setIsFavourite] = useState(false);
    const isVaccinated = props.pupDetails.vaccinated;
    const isPottyTrained = props.pupDetails.pottyTrained;

    const adoptSubmitHandler = (event) => {
        event.preventDefault()
        // setIsAdopt(true);
    };
    const sponsorSubmitHandler = (event) => {
        event.preventDefault();
        // setIsSponsor(true)
    };
    const favouriteSubmitHandler = () => {
        // setIsFavourite(true);
    }
    return (
        <React.Fragment>
            <Card className='App-width'>
                <Card.Img variant="top" src={props.pupDetails.image} width='100vw' height='250vw' />
                <Card.Body>
                    <Card.Title>{props.pupDetails.name}</Card.Title>
                    <Card.Text className='App-AdoptText'>
                        {props.pupDetails.description}
                    </Card.Text>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem className='App-AdoptText'>Vaccinated {<img src={isVaccinated==='true'?correct:wrong} alt='correct' width='20vw' height='20vw'/>}</ListGroupItem>
                        <ListGroupItem className='App-AdoptText'>Potty Trained {<img src={isPottyTrained==='true'?correct:wrong} alt='correct' width='20vw' height='20vw'/>}</ListGroupItem>
                    </ListGroup>
                    <br/>
                    <Button variant="outline-dark" size="sm" className='App-AdoptText' onClick={adoptSubmitHandler}>Adopt</Button>{' '}
                    <Button variant="outline-dark" size="sm" className='App-AdoptText' onClick={sponsorSubmitHandler}>Sponsor</Button>{' '}
                    <Button variant='outline-*secondary'><img src={favourite} alt='favicon' height='30vw' width='30vw' onClick={favouriteSubmitHandler}/></Button> 
                </Card.Body>
            </Card>
        </React.Fragment>
    );
}

export default Adopt;