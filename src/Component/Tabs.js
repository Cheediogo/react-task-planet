import React from 'react'
import { Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NavDropdownExample() {
  
    return (
      <Container>
            <Nav variant="pills" activeKey="1" className="">
                <Nav.Item>
                    <Nav.Link eventKey="1" as={Link} to="/" className="nav-text1">
                    PLANETS
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="2" as={Link} to="/Characters" title="Item" className="nav-text2 text-muted">
                    CHARACTERS
                    </Nav.Link>
                </Nav.Item>
            </Nav>
      </Container>
    );
  }
  

const Tabs = () => {
    return (
        <NavDropdownExample />
    )
}

export default Tabs
