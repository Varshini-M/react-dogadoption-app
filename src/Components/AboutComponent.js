import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import pupp from '../assets/pupp.jpg';
import thankyou from '../assets/thank-you.jpg';
import activities from '../assets/activities.jpg';
function About(props) {
    return (
        <React.Fragment>
            <div className='App-About'>
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src={pupp} />
                        <br/>
                        <Card.Body>
                            <Card.Title>Adoptathon</Card.Title>
                            <Card.Text>
                                Find a Pawfect match for your family.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={thankyou} />
                        <br/>
                        <Card.Body>
                            <Card.Title>Sponsor a rescue</Card.Title>
                            <Card.Text>
                                Offer every penny to the right programs of sponsorship
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={activities} />
                        <br/>
                        <Card.Body>
                            <Card.Title>Activities</Card.Title>
                            <Card.Text>
                                We train and groom all our pups.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </div>
        </React.Fragment>
    );
}

export default About;
