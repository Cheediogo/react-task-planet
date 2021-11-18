import React from 'react'
import { Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'

function NavDropdownExample() {
    // const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
  
    return (
        
        <Nav variant="pills" activeKey="1" className=" mt-2 me-5 px-2">
            <Nav.Item>
                <Nav.Link eventKey="2" as={Link} to="/" className="nav-text1 text-muted">
                PLANETS
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="1" as={Link} to="/Characters" title="Item" className="nav-text2">
                CHARACTERS
                </Nav.Link>
            </Nav.Item>
            <NavDropdown title="Planet: All" id="nav-dropdown" className="ms-md-auto me-md-5 me-lg-0 fw-bold btn pe-4 border-0 navdrop-link">
                <NavDropdown.Item eventKey="4.1">Brooklyn Simmons</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">Jane Cooper</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">Planet Alpha</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.4">Planet Alpha</NavDropdown.Item>
            </NavDropdown>
        </Nav>
      
    );
  }

const TabsCharacter = () => {
    return (
        <div>
            <NavDropdownExample />
        </div>
    )
}

export default TabsCharacter
