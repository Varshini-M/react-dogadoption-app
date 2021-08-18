import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './AboutComponent'
import Home from './HomeComponent';
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Adopt from './AdoptComponent';
import Adoptathon from './AdoptathonComponent';
import Sponsor from './SponsorComponent';
import Activities from './ActivitiesComponent';
import Error from './ErrorComponent';


function Main() {
    return (
        <React.Fragment>
            <Header />
            <Switch>
                <Route exact path='/About'>
                    <About/>
                </Route>
                <Route exact path='/About/Adoptathon'>
                    <Adoptathon/>
                </Route>
                <Route exact path='/About/Sponsor'>
                    <Sponsor/>
                </Route>
                <Route exact path='/About/Activities'>
                    <Activities/>
                </Route>
                <Route exact path='/Contact'>
                    <Contact />
                </Route>
                <Route exact path='/Adopt'>
                    <Adopt />
                </Route>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='*'>
                    <Error errorMessage='Page Not Found' />
                </Route>
            </Switch>
            <Footer />
        </React.Fragment>);
}

export default Main;