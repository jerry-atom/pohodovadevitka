import React from "react";
import { Link } from "gatsby";
import {
  Collapse,
  Container,
  Nav,
  Navbar as BNavbar,
  NavbarBrand,
  NavItem,
  NavLink,
  NavbarToggler
} from "reactstrap";
import logoLarge from "../img/logo-lg.png";
import logoSmall from "../img/logo-sm.png";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <BNavbar color="light" light expand="lg">
        <Container>
          <NavbarBrand>
            <Link to="/" className="navbar-item" title="Logo">
              <img
                src={logoSmall}
                className="d-inline d-lg-none"
                alt="Logo pohodové devítky"
                style={{ width: 34, height: 34 }}
              />
              <img
                src={logoLarge}
                className="d-none d-lg-inline my-2"
                alt="Logo pohodové devítky"
                style={{ width: 300, height: 45 }}
              />
            </Link>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/about">
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/products">
                  Products
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/contact">
                  Contact
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/contact/examples">
                  Form Examples
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </BNavbar>
    );
  }
}
