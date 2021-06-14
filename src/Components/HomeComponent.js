import React from 'react';
import {Link} from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
function Home() {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src="/assets/puppy-dog-adoption.jpg" alt="First slide"/>
                    <Carousel.Caption>
                        <h3>Adopt a pup</h3>
                        <p>There are millions of stray and homeless puppies.If every individual were to adopt one stray/homeless pup, the number of those on the streets will become negligible.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="/assets/PupPaws.jpg" alt="Second slide" />
                    <Carousel.Caption>
                        <h3 style={{ color: 'white' }}>PawsAbode presents Adoptathon!!!!</h3>
                        <p style={{ color: 'white' }}>Do not miss the event.Furr more details, wag <Link to='/About/Adoptathon'><img src='assets/dog.gif' alt='wagtailpic' height='75vw' width='75vw'></img></Link></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="/assets/pup.jpeg" alt="Third slide" />
                    <Carousel.Caption>
                        <h3 style={{ color: 'black' }}>Sponsor a rescue</h3>
                        <p style={{ color: 'black' }}>Your generous offerings will help many pups. Don't you find them adorable? Kindly donate <Link to='/About/Sponsor'><img src='assets/piggybank.gif' alt='piggybankimg' height='75vw' width='75vw'></img></Link></p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Home;