import React, { Component } from 'react';
import './App.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Jumbotron,
  Container } from 'reactstrap';
import topGraphic from './img/topGraphic.jpg';

class App extends Component {
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

var sectionStyle = {
  backgroundImage: "url(" + topGraphic + ")",
  backgroundSize: "cover",
  color: "white",
  textAlign: "center"
};
    return (
      <div>
        <Navbar light expand="lg" >
          <div className="container">
            <NavbarBrand href="/">Student Volunteer</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar className="mr-5">
                <DropdownToggle nav caret>
                  Where to go ?
                </DropdownToggle>
                <DropdownMenu left >
                  <DropdownItem>
                    Bangkok
                  </DropdownItem>
                  <DropdownItem>
                    Phuket
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar className="mr-5">
                <DropdownToggle nav caret>
                  THB
                </DropdownToggle>
                <DropdownMenu left >
                  <DropdownItem>
                    US Dollar
                  </DropdownItem>
                  <DropdownItem>
                    Eu Euro
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
                <Button className="btn-outline-info mr-4">Log In</Button>
                <Button className="btn-outline-info mr-4">Help Center</Button>
                <Button className="btn-outline-info mr-4">Sign Up</Button>
                <Button color="info">Become Local Expert</Button>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <div>
      <Jumbotron style={ sectionStyle } > 
        <h1 className="display-3">Hello, world!</h1>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-2" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
    </div>
    
      </div>
    );
  }
}

export default App;
