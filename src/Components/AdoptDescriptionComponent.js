import React, { useState, useEffect, useCallback } from 'react'
import { Card, ListGroup, ListGroupItem, Button, CardGroup } from 'react-bootstrap';
import correct from '../assets/correct.png';
import wrong from '../assets/wrong.png';
import left from '../assets/left.png';
import right from '../assets/right.png';
import ShoppingItem from './ShoppingItemComponent';
import {useHistory,Link} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import {cartActions,currentPupActions,adoptPupActions} from '../store/indexstore';

function AdoptDescription(props) {
    const isVaccinated = props.pupDetails.vaccinated;
    const isPottyTrained = props.pupDetails.pottyTrained;
    const [shoppingDetails, setShoppingDetails] = useState();
    const [index, setIndex] = useState(0);
    const images = require.context('../assets/', true);
    let cartObject = useSelector((state) => state.cartData);
    const [isAdopt, setIsAdopt] = useState(cartObject.idList.indexOf(props.pupDetails.id) !== -1);
    const [filteredShoppingDetails, setFilteredShoppingDetails] = useState([]);
    let dispatch = useDispatch();
    let currentObject = useSelector((state)=>state.currentPupData);
    let history  = useHistory();
    const jsonListFunction = async () => {
        let response = await fetch('http://localhost:8400/v1/getShoppingDetails');
        const responseJson = await response.clone().json();
        setShoppingDetails(responseJson);
    };
    const filterShopItems = useCallback(() => {
        let array = [];
        for (let i = index; i < index + 3; i++) {
            if (i < shoppingDetails.length) {
                array.push(shoppingDetails[i]);
            }
        }
        setFilteredShoppingDetails(array);
    }, [index, shoppingDetails]);
    useEffect(() => {
        if (shoppingDetails === undefined) {
            jsonListFunction();
        }
        if (shoppingDetails !== undefined) {
            filterShopItems();
        }
    }, [shoppingDetails, filterShopItems]);

    const rightNavigationHandler = () => {
        setIndex((index) => {
            if (index + 3 < shoppingDetails.length) {
                return index + 3;
            } else {
                return 0;
            }
        });
    };

    const leftNavigationHandler = () => {
        setIndex((index) => {
            if (index - 3 >= 0) {
                return index - 3;
            } else {
                return shoppingDetails.length-1;
            }
        });
    };

    const adoptHandler = (event) => {
        event.preventDefault();
        if(cartObject.items.filter((item)=>item.name === (currentObject.name+' AdoptionFee')).length===0){
            dispatch(cartActions.addCart({ id: currentObject.id, quantity: 1, amount: 100, name: currentObject.name+' AdoptionFee' }));
            dispatch(currentPupActions.addCurrent(props.pupDetails));
            dispatch(adoptPupActions.addAdoptPup(props.pupDetails));
        }
        setIsAdopt(true);
    }
    return (
        <React.Fragment>
        { props.pupDetails.id!==undefined && 
            <div className='App-Shop'>
                <div className='App-PupDetailDiv'>
                    <Card className='App-PupDetail'>
                        <Card.Img variant="top" src={images(`./${props.pupDetails.image}`)} width='100vw' height='250vw'/>
                        <Card.Body>
                            <Card.Title>{props.pupDetails.name}</Card.Title>
                            <Card.Text className='App-AdoptText'>
                                {props.pupDetails.description}
                            </Card.Text>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem className='App-AdoptText'>Vaccinated {<img src={isVaccinated === 'true' ? correct : wrong} alt='correct' width='20vw' height='20vw' />}</ListGroupItem>
                                <ListGroupItem className='App-AdoptText'>Potty Trained {<img src={isPottyTrained === 'true' ? correct : wrong} alt='correct' width='20vw' height='20vw' />}</ListGroupItem>
                                <ListGroupItem className='App-AdoptText'>Adoption Fee: Rs. 100/-</ListGroupItem>
                            </ListGroup>
                            <br />
                            <Button variant="outline-dark" size="sm" className='App-AdoptText'><Link to='/Cart' className='App-font'>Proceed Checkout</Link></Button>{' '}
                            <Button variant="outline-dark" size="sm" className='App-AdoptText' onClick={adoptHandler} disabled={isAdopt}>Adopt</Button>{' '}
                        </Card.Body>
                    </Card>
                </div>
                <br />
                <br />
                <div className='App-CardGroup' style={!isAdopt ? {pointerEvents: "none", opacity: "0.4"}:{}}>
                    <div>
                        <Button variant='outline-*secondary'><img src={left} alt='left' height='50vw' width='50vw' onClick={leftNavigationHandler} /></Button>
                    </div>
                    <CardGroup>
                        {shoppingDetails !== undefined && filteredShoppingDetails !== undefined && filteredShoppingDetails.map((item) => {
                            return (
                                <ShoppingItem key={item.id} itemDetails={item} isAdopt={isAdopt} />
                            )
                        })}
                    </CardGroup>
                    <div>
                        <Button variant='outline-*secondary'><img src={right} alt='right' height='50vw' width='50vw' onClick={rightNavigationHandler} /></Button>
                    </div>
                </div>
            </div>}
            {props.pupDetails.id===undefined && history.push('/Adopt/')}
        </React.Fragment>
    );
};

export default AdoptDescription;
