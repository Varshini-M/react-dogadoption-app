import React from 'react';
import getintouch from '../assets/get-in-touch.png';
import phone from '../assets/phone.png';
import mail from '../assets/mail.png';
import location from '../assets/location.png';
import { Form, Button } from 'react-bootstrap';

function Contact() {
    return (
        <React.Fragment>
            <div className='bgColor'>
                <div className='App-ContactImage'>
                    <img src={getintouch} alt='getintouchimg' />
                    <br />
                </div>
                <br />
                <br />
                <br />
                <div className='App-Contact'>
                    <div className='App-AllIcon'>
                        <br />
                        <br />
                        <div className='App-IconDetails'>
                            <img src={phone} alt='phoneicon' className='App-Icon' />
                            <p>&nbsp;&nbsp;</p>
                            <dl>
                                <dt className='App-IconText'>Phone</dt>
                                <dt className='App-IconText'>99999-99999</dt>
                            </dl>
                        </div>
                        <div className='App-IconDetails'>
                            <img src={mail} alt='mailicon' className='App-Icon' />
                            <p>&nbsp;&nbsp;</p>
                            <dl>
                                <dt className='App-IconText'>Mail</dt>
                                <dt className='App-IconText'>pawsabode@gmail.com</dt>
                            </dl>
                        </div>
                        <div className='App-IconDetails'>
                            <img src={location} alt='locationicon' className='App-Icon' />
                            <p>&nbsp;&nbsp;</p>
                            <dl>
                                <dt className='App-IconText'>Address</dt>
                                <dt className='App-IconText'>4B, Abc Block, Xyz Nagar, Chennai-6*****</dt>
                            </dl>
                        </div>
                    </div>
                    <div>
                        <Form>
                            <Form.Group controlId="formGroupName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Name" size='sm' />
                            </Form.Group>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="abc@gmail.com" size='sm' />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                        </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formGroupMessage">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as='textarea' type="text" placeholder="Message" size='sm' rows={2} />
                            </Form.Group>
                            <br />
                            <Button variant="dark" type="submit" size='small'>
                                Submit
                            </Button>
                        </Form>
                        <br />
                        <br />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Contact;