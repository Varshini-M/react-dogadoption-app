import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './AboutComponent'
import Home from './HomeComponent';
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Adopt from './AdoptComponent';


function Main() {
    return (
        <React.Fragment>
            <Header />
            <Switch>
                <Route path='/About'>
                    <About/>
                </Route>
                <Route exact path='/About/Adoptathon#AdoptathonId'>
                    <About/>
                </Route>
                <Route exact path='/About/Sponsor#SponsorId'>
                    <About/>
                </Route>
                <Route exact path='/About/Activities#ActivitiesId'>
                    <About/>
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
            </Switch>
            <Footer />
        </React.Fragment>);
}

export default Main;