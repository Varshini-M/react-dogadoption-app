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
                <Route exact path='/About'>
                    <About pathname={'Default'} />
                </Route>
                <Route exact path='/About/Adoptathon'>
                    <About pathname={'Adoptathon'} />
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