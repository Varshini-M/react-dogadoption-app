import React, { useState } from 'react';
import getintouch from '../assets/get-in-touch.png';
import phone from '../assets/phone.png';
import mail from '../assets/mail.png';
import location from '../assets/location.png';
import { Form, Button, Alert } from 'react-bootstrap';
import GoogleMapReact from 'google-map-react'

function Contact() {
    const [visible, setVisible] = useState(false);
    const [contactObject, setContactObject] = useState({ name: '', email: '', message: '' });
    const handleObjectChange = (event) => {
        setContactObject({ ...contactObject, [event.target.name]: event.target.value });
    };
    const url = 'http://localhost:8400/v1/updateContactDetails';
    const handleSubmit = async (event) => {
        event.preventDefault();
        setVisible(true);
        const settings = {
            method: 'POST',
            body: JSON.stringify(contactObject),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        };
        await fetch(url, settings);
        setContactObject({ name: '', email: '', message: '' });
    };
    const locationVal = {
        lat: 12.970309631943298,
        lng: 80.21777787058762
    };
    const LocationPin = ({ text }) => (
        <div>
            <img src={location} className="App-Icon" alt='locationicon' />
            <p>{text}</p>
        </div>
    );
    let zoomLevel = 17;
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
                        <div className="map">
                            <h6>Check Directions</h6>
                            <div className="google-map">
                                <GoogleMapReact
                                    bootstrapURLKeys={{ key: '' }}
                                    defaultCenter={locationVal}
                                    defaultZoom={zoomLevel}
                                >
                                    <LocationPin
                                        lat={locationVal.lat}
                                        lng={locationVal.lng}
                                        txt='4B, Abc Block, Xyz Nagar, Chennai-6*****'
                                    />
                                </GoogleMapReact>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Form>
                            <Form.Group controlId="formGroupName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control name='name' type="text" value={contactObject.name} placeholder="Enter Name" size='sm' onChange={handleObjectChange} />
                            </Form.Group>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control name='email' type="email" value={contactObject.email} placeholder="abc@gmail.com" size='sm' onChange={handleObjectChange} />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                        </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formGroupMessage">
                                <Form.Label>Message</Form.Label>
                                <Form.Control name='message' as='textarea' value={contactObject.message} type="text" placeholder="Message" size='sm' rows={2} onChange={handleObjectChange} />
                            </Form.Group>
                            <Button variant="dark" type="submit" size='small' onClick={handleSubmit}>
                                Submit
                            </Button>
                            <br />
                            <br />
                            <Alert show={visible} transition={false} variant='warning' onClose={() => setVisible(false)} dismissible>Hey Thanks for writing to us !!!</Alert>
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