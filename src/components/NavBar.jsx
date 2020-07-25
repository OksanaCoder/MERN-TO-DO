import React, { Component } from 'react'
import { Navbar, Container, NavbarBrand, Form, FormControl, Button, Nav } from 'react-bootstrap'


export default class NavBar extends Component {
    render() {
        return (
            <>
                <Navbar bg="dark" expand="lg" variant="dark">
                    <Navbar.Brand href="#home">TodoList</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                       
                        {/* <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2 searchBar" />
                            <Button variant="outline-light">Search</Button>
                        </Form> */}
                       <Nav className='text-muted'> Github</Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
        )
    }
}