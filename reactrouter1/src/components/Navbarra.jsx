import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";


function Navbarra() {
    return (
        <div >
            <Navbar bg="danger" variant="dark">
                <Container>
                    <Nav className="me-auto">
                        <img src="/casa.ico" alt="" style={{ width: '20px' }}/>
                        <Link to="/" className="text-white ms-1 text-decoration-none">Home</Link>
                        <img src="/book.ico" alt="" style={{ width: '20px' }} className="ms-3"/>
                        <Link to="/Contact" className="text-white ms-1 text-decoration-none">Contacto</Link>
                    </Nav>
                    <Nav >
                        <Nav.Link href="#" style={{ color: 'white' }}>Happy CAKE</Nav.Link>
                        <img src="/favicon.ico" alt="" style={{ width: '30px' }}/>
                    </Nav>
                    
                </Container>
            </Navbar>
        </div>
    )
}

export default Navbarra;
