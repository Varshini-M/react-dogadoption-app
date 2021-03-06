import React, { useEffect, useState } from 'react';
import { Table, Button, Container, Offcanvas,Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import CartItem from './CartItemComponent';

function Cart() {
    let cartObject = useSelector((state) => state.cartData);
    const [total, setTotal] = useState(cartObject.totalAmount);
    const [isPayNow,setIsPayNow] = useState(false);
    const payHandler = () => {
        setIsPayNow(true);
    }
    const handleClose = () => {
        setIsPayNow(false);
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
                    <Button variant='secondary' disabled={total===0} className='App-CartText' onClick={payHandler}>Pay Now</Button>{' '}
                </div>
                {isPayNow && 
                    <Offcanvas show={isPayNow} onHide={handleClose} scroll={true} backdrop={true} placement='end'>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Happy Adoption!!</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                        <div>
                            <p>You are one step closer to reach you pup!!</p>
                            <Card className='App-CartText' style={{ width: '18rem'}}>
                            <Table>
                            <thead><Card.Header>Checkout</Card.Header></thead>
                            <tbody>
                                {cartObject.items.length > 0 && cartObject.items.map((item) => {
                                    return (<tr><td>{item.name}</td> <td>{item.quantity}</td> <td>Rs. {item.amount}/-</td></tr>)
                                })}
                                <tr><td>Total</td> <td>{cartObject.cartCount}</td>  <td>Rs. {total}/-</td></tr>
                            </tbody>
                            ??</Table>
                            </Card>
                        </div>
                        </Offcanvas.Body>   
                        <Button variant='secondary'>Pay {total}/-</Button>
                    </Offcanvas>
                }
                <br />
            </Container>
        </React.Fragment>
    )
}

export default Cart;