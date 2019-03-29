import React from 'react';
import { Button } from 'reactstrap';


const NavbarMeteo = props => (
  <Navbar bg="dark" variant="dark">
    <NavbarBrand href="#home">Météo</NavbarBrand>
    <Nav className="mr-auto">
      <NavLink href="#home">Ville : {props.this.state.city}</NavLink>
      <NavLink href="#features">Features</NavLink>
      <NavLink href="#pricing">Pricing</NavLink>
    </Nav>
    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form> */}
  </Navbar>
);

export default NavbarMeteo;