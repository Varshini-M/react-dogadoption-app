import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Nav, NavDropdown } from 'react-bootstrap';
import logo from '../assets/logo.png';
import Snippet from './SnippetComponent';


function Header() {
    return (
        <div className='App-header'>
            <Link to='/'><img src={logo} alt='pawsabodeicon' height='100vw' width='100vw'></img></Link>
            <Nav variant="tabs">
                <Nav.Item>
                    <Nav.Link href='/' id='blackStyleId'>Home</Nav.Link>
                </Nav.Item>
                <NavDropdown title="About Us" id="blackStyleId">
                    <NavDropdown.Item href='/About/Adoptathon' eventKey="4.1">Adoptathon</NavDropdown.Item>
                    <NavDropdown.Item href='/About/Sponsor' eventKey="4.2">Sponsor A Rescue</NavDropdown.Item>
                    <NavDropdown.Item href='/About/Acitivities' eventKey="4.3">Activities</NavDropdown.Item>
                </NavDropdown>
                <Nav.Item>
                    <Nav.Link href='/Contact' id="blackStyleId">Contact Us</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='/Adopt' id='blackStyleId'>Adopt a Pup</Nav.Link>
                </Nav.Item>
            </Nav>
            <div>
                <Snippet />
            </div>
        </div>
    );
}
export default Header;