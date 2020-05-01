import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './style.css'

const Example = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">Will Coan</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            
            <NavItem>
              <NavLink href="https://github.com/clueking1" target='blank'>Github</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://www.linkedin.com/in/will-coan-b65613133/" target='blank'>Linkedin</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={require('./WillCoanRes.pdf')} target="_blank">Resume</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;