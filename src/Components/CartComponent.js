import React, { useEffect, useState } from 'react';
import { Table, Button, Container  } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import CartItem from './CartItemComponent';

function Cart() {
    let cartObject = useSelector((state) => state.cartData);
    const [total, setTotal] = useState(cartObject.totalAmount);
    const payHandler = () => {
        
    }
    useEffect(() => {
        setTotal(cartObject.totalAmount);
    }, [cartObject]);
    return (
        <React.Fragment>
            <br />
            <Container>
                <Table striped hover size="sm" responsive>
                    <thead>
                        <tr className='App-CartText'>
                            <th >#</th>
                            <th >Item</th>
                            <th >Quantity</th>
                            <th >Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartObject.items.length > 0 && cartObject.items.map((item) => {
                            return (<CartItem key={item.id} cart={item} />)
                        })}
                        <tr className='App-CartText'>
                            <td></td>
                            <td><b>Total</b></td>
                            <td>{cartObject.cartCount}</td>
                            <td>Rs. {total}/-</td>
                        </tr>
                    </tbody>
                </Table>
                <div className='App-Pay'>
                    <Button variant='secondary' className='App-CartText' onClick={payHandler}>Pay Now</Button>{' '}
                </div>
                <br />
            </Container>
        </React.Fragment>
    )
}

export default Cart;