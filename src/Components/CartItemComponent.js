import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { cartActions, shopCartActions, currentPupActions, adoptPupActions } from '../store/indexstore';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function CartItem(props) {
    let dispatch = useDispatch();
    let cartObject = useSelector((state) => state.cartData);
    let adoptObject = useSelector((state) => state.adoptPupData);
    const addCart = () => {
        dispatch(cartActions.addCart({ id: props.cart.id, quantity: 1, amount: props.cart.amount, name: props.cart.name }));
        dispatch(shopCartActions.addShopItem({ id: props.cart.id, quantity: 1, price: props.cart.amount, total: props.cart.amount }));
    };

    const deleteCart = () => {
        dispatch(cartActions.deleteCart({ id: props.cart.id, quantity: 1, amount: props.cart.amount, name: props.cart.name }));
        dispatch(shopCartActions.deleteShopItem({ id: props.cart.id, quantity: 1, price: props.cart.amount, total: props.cart.amount }));
    };

    const cartNavHandler = () => {
        let viewObject = adoptObject.filter((item) => item.name + ' AdoptionFee' === props.cart.name)
        dispatch(currentPupActions.addCurrent(viewObject[0]))
    };
    useEffect(() => {
        let cartAdoptionItems = cartObject.items.filter((item) => item.name.includes('AdoptionFee'))
        if (cartAdoptionItems.length === 0) {
            dispatch(cartActions.initialiseCart());
            dispatch(shopCartActions.initialiseShopCart());
        } else {
            dispatch(adoptPupActions.removeAdoptPup(cartAdoptionItems));
        }
    }, [cartObject, dispatch])
    return (
        <React.Fragment>
            <tr className='App-CartText'>
                <td >{props.cart.id}</td>
                {props.cart.name.includes('AdoptionFee') && <Link to={`/Adopt/${props.cart.id}`}><td className='App-font' onClick={cartNavHandler}>{props.cart.name}</td></Link>}
                {!props.cart.name.includes('AdoptionFee') && <td >{props.cart.name}</td>}
                <td >{props.cart.quantity}x </td>
                <div className='App-quantityCart'><td >Rs. {props.cart.amount}/-</td> <div>{!props.cart.name.includes('AdoptionFee') && <Button variant='outline-dark' size='sm' onClick={addCart}><b>+</b></Button>}{' '} <Button size='sm' variant='outline-dark' onClick={deleteCart}><b>-</b></Button>{' '}</div></div>
            </tr>
        </React.Fragment>
    )
}

export default CartItem;