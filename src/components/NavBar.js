import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export class NavBar extends Component {
  render() {
    return (
      <>
        <div>
          <Navbar
            collapseOnSelect
            expand="lg"
            bg="dark"
            variant="dark"
            fixed="top"
          >
            <Container>
              <Nav>
                <Navbar.Brand>SamaChaar</Navbar.Brand>
              </Nav>

              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Link className="nav-link" to="/News">
                    General
                  </Link>
                  <Link className="nav-link" to="/Entertainment">
                    Entertainment
                  </Link>
                  <Link className="nav-link" to="/Business">
                    Business
                  </Link>
                  <Link className="nav-link" to="/Health">
                    Health
                  </Link>
                  <Link className="nav-link" to="/Science">
                    Science
                  </Link>
                  <Link className="nav-link" to="/Sports">
                    Sports
                  </Link>
                  <Link className="nav-link" to="/Technology">
                    Technology
                  </Link>
                </Nav>
                <Nav>
                  <Navbar.Brand>Made By Winner</Navbar.Brand>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </>
    );
  }
}

export default NavBar;
