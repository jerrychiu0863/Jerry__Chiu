import { HashLink as Link } from 'react-router-hash-link';
import React, { Component } from 'react';
import '../css/NavBar.css';

import {
  Container,
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem
} from 'mdbreact';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      activeItem: ''
    };
    this.navbarRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside);
    window.addEventListener('scroll', this.handleScreenScrolling);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
    window.removeEventListener('scroll', this.handleScreenScrolling);
  }

  toggleCollapse = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  handleClick = target => {
    // If logo is clicked and dropdown is open, do nothing.
    // Prevent displaying of dropdown when logo is pressed
    if (target === 'logo' && !this.state.isOpen) {
      this.setState({
        isOpen: this.state.isOpen
      });
      // Collapse only in mobile devices
    } else if (this.props.width < 768) {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  };

  handleClickOutside = event => {
    const navbarNode = this.navbarRef.current;
    if (!navbarNode.contains(event.target)) {
      this.setState({
        isOpen: false
      });
    }
  };

  handleScreenScrolling = event => {
    if (event.type === 'scroll') {
      this.setState({
        isOpen: false
      });
    }
  };

  render() {
    return (
      <div className="Navbar" ref={this.navbarRef}>
        <Navbar
          className="Navbar__navbar"
          id="top-nav"
          light
          expand="md"
          fixed="top"
          scrolling
        >
          <Container fluid className="Navbar__container">
            <NavbarBrand className="Navbar__navbar-brand" />
            <NavbarToggler
              className="Navbar__toggler"
              onClick={() => {
                this.handleClick();
                this.toggleCollapse();
              }}
            />
            <Collapse isOpen={this.state.isOpen} navbar>
              <NavbarNav className="Navbar__nav" right>
                <NavItem className="Navbar__nav-item">
                  <Link
                    className="Navbar__nav-link--about nav-links mobile-link"
                    to="/"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Home
                  </Link>
                </NavItem>
                <NavItem className="Navbar__nav-item">
                  <Link
                    className="Navbar__nav-link--about nav-links mobile-link"
                    to="/#skills"
                    scroll={el => this.props.onScrollWithOffset(el, 120)}
                    onClick={() => {
                      this.handleClick();
                    }}
                  >
                    Skills
                  </Link>
                </NavItem>
                <NavItem className="Navbar__nav-item">
                  <Link
                    className="Navbar__nav-link--about nav-links mobile-link"
                    to="/#projects"
                    scroll={el => this.props.onScrollWithOffset(el, 60)}
                    onClick={() => {
                      this.handleClick();
                    }}
                  >
                    Projects
                  </Link>
                </NavItem>

                <NavItem className="Navbar__nav-item">
                  <Link
                    className="Navbar__nav-link--support nav-links"
                    to="/#contact"
                    scroll={el => this.props.onScrollWithOffset(el, 0)}
                    onClick={() => {
                      this.handleClick();
                    }}
                  >
                    Contact
                  </Link>
                </NavItem>
              </NavbarNav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
