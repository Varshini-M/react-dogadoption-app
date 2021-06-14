import React, { useState, useEffect } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import pupp from '../assets/pupp.jpg';
import thankyou from '../assets/thank-you.jpg';
import activities from '../assets/activities.jpg';
import { Link, Route, Switch } from 'react-router-dom';
import Adoptathon from './AdoptathonComponent';
import Sponsor from './SponsorComponent';
import Activities from './ActivitiesComponent';


function About() {
    const [todayDate, setTodayDate] = useState(new Date());
    const [leftDate, setLeftDate] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const refreshDate = () => {
        setTodayDate(new Date());
    };
    const timerAdoptathon = () => {
        let eventDate = new Date("September 9, 2021 00:00:00");
        let timeLeft = eventDate.getTime() - todayDate.getTime();
        let leftValue = { days: Math.floor(timeLeft / (1000 * 60 * 60 * 24)), hours: Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), minutes: Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)), seconds: Math.floor((timeLeft % (1000 * 60)) / 1000) };
        return leftValue;
    };
    useEffect(() => {
        let res = setInterval(() => {
            refreshDate();
            let left = timerAdoptathon();
            if(left.days <= 0){
                setLeftDate({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }else{
                setLeftDate(left);
            }
        }, 1000);
        return () => { clearInterval(res) };
    });
    return (
        <React.Fragment>
            <div className='App-About'>
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src={pupp} />
                        <br />
                        <Card.Body>
                            <Link to='/About/Adoptathon' className='textColor'><Card.Title>Adoptathon</Card.Title></Link>
                            <Card.Text>
                                Find a Pawfect match for your family.Don't miss the event!!
                                Save ur date @ 9th September 2021.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="countdown-item">{leftDate.days + ' Days : ' + leftDate.hours + ' Hours : ' + leftDate.minutes + ' Minutes : ' + leftDate.seconds + ' Seconds'}</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={thankyou} />
                        <br />
                        <Card.Body>
                            <Link to='/About/Sponsor' className='textColor'><Card.Title>Sponsor a rescue</Card.Title></Link>
                            <Card.Text>
                                Offer every penny to the right programs of sponsorship
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Your turn to be the top contributor of Paws Abode!!</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={activities} />
                        <br />
                        <Card.Body>
                            <Link to='/About/Activities' className='textColor'><Card.Title>Activities</Card.Title></Link>
                            <Card.Text>
                                We train and groom all our pups.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Do visit our activity area and get amused!</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </div>
            <Switch>
                <Route exact path='/About/Adoptathon'>
                    <Adoptathon />
                </Route>
                <Route exact path='/About/Sponsor'>
                    <Sponsor />
                </Route>
                <Route exact path='/About/Activities'>
                    <Activities />
                </Route>
            </Switch>
        </React.Fragment>
    );
}

export default About;
