import React from 'react';
import {Navbar,Container,NavDropdown,Nav} from "react-bootstrap";

export default function HeaderNavbar(){
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{zIndex:10}}>
            <Container fluid>
                <Navbar.Brand href="/"><h1 style={{color:'rgb(253, 207, 27)',fontWeight:"800",fontSize:"xx-large"}} className="text-border p-1 ps-4">My Form</h1></Navbar.Brand>
                <div className="ps-5 pe-5" />
                <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/NewForm">Yeni Form Yarat</Nav.Link>
                        <Nav.Link href="/FillForm">Form Doldur</Nav.Link>
                        <NavDropdown title="Formlarım" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/Forms/All">All</NavDropdown.Item>
                            <NavDropdown.Item href="/Forms/Waiting">Waiting</NavDropdown.Item>
                            <NavDropdown.Item href="/Forms/Sent">Sent</NavDropdown.Item>
                            <NavDropdown.Item href="/Forms/Archived">Archived</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Item className="ms-3 me-3 seperator" ></Nav.Item>
                        <Nav.Link href="/Pazar">Canlı Poke Pazarı</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/Login">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
    
}