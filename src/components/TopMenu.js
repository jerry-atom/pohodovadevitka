import React from "react";
import { Link } from "gatsby";
import { StaticQuery, graphql } from "gatsby";
import {
  Collapse,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  NavbarToggler,
  UncontrolledDropdown
} from "reactstrap";
import logoLarge from "../img/logo-lg.png";
import logoSmall from "../img/logo-sm.png";

class TopMenuComponent extends React.Component {
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
      <Navbar color="light" light expand="lg">
        <Container>
          <NavbarBrand tag={Link} to="/" title="Logo">
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
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/propozice/">
                  Propozice
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://pohodovadevitka.rajce.idnes.cz/">
                  Fotogalerie
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#!">
                  Novinky
                </NavLink>
              </NavItem>
              <UncontrolledDropdown>
                <DropdownToggle nav caret>
                  Výsledky
                </DropdownToggle>
                <DropdownMenu right>
                  {this.props.results.map(item => (
                    <DropdownItem tag={Link} to={item.slug} key={item.slug}>
                      {item.title}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown>
                <DropdownToggle nav caret>
                  O závodu
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem tag={Link} to="/kdo-jsme/">
                    Kdo jsme
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/jak-to-cele-vzniklo/">
                    Jak to celé vzniklo?
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

const query = graphql`
  query TopMenu {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "results-page" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            startDate
          }
        }
      }
    }
  }
`;

const mapResults = x => ({
  slug: x.node.fields.slug,
  title: x.node.frontmatter.title,
  year: x.node.frontmatter.startDate,
});

const TopMenu = () => (
  <StaticQuery
    query={query}
    render={data => (
      <TopMenuComponent
        results={data.allMarkdownRemark.edges.map(mapResults).sort((a, b) => a.year - b.year)}
      />
    )}
  />
);

export default TopMenu;
