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
                    <Nav.Link><Link className='App-font' to="/">Home</Link></Nav.Link>
                </Nav.Item>
                <NavDropdown id='blackStyleId' title={<Link className='App-font' to="/About">About Us</Link>}>
                    <NavDropdown.Item eventKey="4.1"><Link className='App-font' to='/About/Adoptathon'>Adoptathon</Link></NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.2"><Link className='App-font' to='/About/Sponsor'>Sponsor A Rescue</Link></NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.3"><Link className='App-font' to='/About/Activities'>Activities</Link></NavDropdown.Item>
                </NavDropdown>
                <Nav.Item>
                    <Nav.Link><Link className='App-font' to='/Contact'>Contact Us</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link><Link className='App-font' to='/Adopt'>Adopt a Pup</Link></Nav.Link>
                </Nav.Item>
            </Nav>
            <div>
                <Snippet />
            </div>
        </div>
    );
}
export default Header;