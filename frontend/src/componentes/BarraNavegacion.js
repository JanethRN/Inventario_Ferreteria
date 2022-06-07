import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const BarraNavegacion = () => {
    return <Navbar bg="primary" variant="dark" expand='xl'>
        <Container>
            <Navbar.Brand href="/">FERRETERIA ESPE</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav className="justify-content-end ">
                    {/* gerente */}
                    <Nav.Link className="nav-link" href="/productos">Productos</Nav.Link>
                    <Nav.Link className="nav-link" href="/proveedores">Proveedores</Nav.Link>
                    <Nav.Link className="nav-link" href="/clientes">Clientes</Nav.Link>
                    <Nav.Link className="nav-link" href="/stock">Stock de Producto</Nav.Link>
                    <Nav.Link className="nav-link" href="/informe">Informe</Nav.Link>
                    
                    {/* no registrado invitado */}
                    <Nav.Link className="nav-link" href="/categorias">Categorias</Nav.Link>

                     {/* no registrado */}
                     <Nav.Link className="nav-link" href="/catalogo">Catalogo</Nav.Link>
                     <Nav.Link className="nav-link" href="/contacto">Contacto</Nav.Link>

                     <Link to="/login">
                        <Button className="btn btn-light" type="button">LOGIN</Button>
                     </Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}