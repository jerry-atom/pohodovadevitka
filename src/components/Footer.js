import React from "react";
import { Container, Nav, NavItem, NavLink } from "reactstrap";
import { FaHome, FaFacebook, FaEnvelope, FaTwitter } from "react-icons/fa";
import Sponsors from "./Sponsors";

const Footer = () => (
  <footer className="d-print-none">
    <Container fluid>
      <Sponsors />

      <Nav className="middle justify-content-center">
        <NavItem>
          <NavLink
            href="http://www.pohodovadevitka.cz"
            title="Oficiální web závodu"
            className="text-muted"
          >
            <FaHome size="1.5rem"/>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="http://www.facebook.com/pohodovadevitka"
            title="Facebook závodu"
            className="text-muted"
          >
            <FaFacebook size="1.5rem" />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="https://twitter.com/pohodovadevitka"
            title="Twitter závodu"
            className="text-muted"
          >
            <FaTwitter size="1.5rem" />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="mailto:pohodovadevitka@gmail.com"
            title="E-mail závodu"
            className="text-muted"
          >
            <FaEnvelope size="1.5rem"/>
          </NavLink>
        </NavItem>
      </Nav>

      <div className="bottom text-muted text-center p-3">
        &copy; Zdeněk Kundera 2014 - 2019 | Stránky vytvořil{" "}
        <a
          className="text-secondary"
          href="mailto:jaroslav.novotny.84@gmail.com"
          title="Kontakt na autora webu"
        >
          Jaroslav Novotný
        </a>
      </div>
    </Container>
  </footer>
);

export default Footer;
