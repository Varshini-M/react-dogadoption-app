import React,{useEffect,useState} from 'react';
import { Card, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import favourite from '../assets/favourite.png'
import {useDispatch,useSelector} from 'react-redux';
import {shopCartActions,cartActions} from '../store/indexstore';
function ShoppingItem(props) {
    let dispatch = useDispatch();
    let shopCartObject = useSelector((state)=>state.shopCartData);
    const [shopItem,setShopItem] = useState();
    const addHandler = () => {
        dispatch(shopCartActions.addShopItem({id:props.itemDetails.id,quantity:1,price:props.itemDetails.price,total:props.itemDetails.price}));        
        dispatch(cartActions.addCart({ id: props.itemDetails.id, quantity: 1, amount: props.itemDetails.price, name: props.itemDetails.name}));
    };
    const removeHandler = () => {
        dispatch(shopCartActions.deleteShopItem({id:props.itemDetails.id,quantity:1,price:props.itemDetails.price,total:props.itemDetails.price}));
        dispatch(cartActions.deleteCart({ id: props.itemDetails.id, quantity: 1, amount: props.itemDetails.price, name: props.itemDetails.name}));
    };
    const favouriteSubmitHandler = () => {

    };
    useEffect(()=>{
        let obj = shopCartObject.filter((item)=>item.id===props.itemDetails.id)
        setShopItem(obj[0]);
    },[shopCartObject,props])
    return (
        <React.Fragment>
            <Card className='App-ShoppingDetail'>
                <Card.Img variant="top" src={props.itemDetails.image} width='35vw' height='150vw' />
                <Card.Body>
                    <Card.Title>{props.itemDetails.name}</Card.Title>
                    <Card.Text className='App-ShopText'>
                        {props.itemDetails.description}
                    </Card.Text>
                    <ListGroup className="list-group-flush" horizontal>
                        <ListGroupItem className='App-ShopText'><b>{props.itemDetails.measure}</b></ListGroupItem>
                        <ListGroupItem className='App-ShopText'><b>Rs. {props.itemDetails.price}/-</b></ListGroupItem>
                    </ListGroup>
                    <br/>
                    {shopItem!==undefined && shopItem.quantity>0 && <ListGroupItem className='App-ShopText'>Qty: {shopItem.quantity}</ListGroupItem>}
                    {shopItem!==undefined && shopItem.total>0 && <ListGroupItem className='App-ShopText'>Total: Rs.{shopItem.total}/-</ListGroupItem>}
                    <br/>
                    <Button variant="outline-dark" size="sm" className='App-AdoptText' onClick={addHandler}><b>+</b></Button>{' '}
                    <Button variant="outline-danger" size="sm" className='App-AdoptText' onClick={removeHandler}><b>-</b></Button>{' '}
                    <Button variant='outline-*secondary'><img src={favourite} alt='favicon' height='25vw' width='25vw' onClick={favouriteSubmitHandler} /></Button>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted App-ShopText">Frequently Brought Together</small>
                </Card.Footer>
            </Card>
        </React.Fragment>
    );
};

export default ShoppingItem;