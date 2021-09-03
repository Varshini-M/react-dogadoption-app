import { Link } from 'react-router-dom';
import React from 'react'
import { Nav, NavDropdown, Button } from 'react-bootstrap';
import logo from '../assets/logo.png';
import Snippet from './SnippetComponent';
import Cart from '../assets/cart.png';
import { useSelector } from 'react-redux';
function Header() {
    let cartObject = useSelector((state) => state.cartData);
    return (
        <React.Fragment>
            <div className='App-header'>
                <Link to='/'><img src={logo} alt='pawsabodeicon' height='100vw' width='100vw'></img></Link>
                <div className='App-tabSnippet'>
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
                    <div className='App-Snippet'>
                        <br/><Snippet />
                    </div>
                    <div className='App-Cart'>
                        <Button className='App-CartIcon' variant='outline-*secondary' size='sm'>{<React.Fragment><Link to='/Cart'><img src={Cart} alt='cart' width='40vw' height='40vw' />{<b className='App-font'>{cartObject.cartCount}</b>}</Link></React.Fragment>}</Button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Header;