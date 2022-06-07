import { Navigate } from 'react-router-dom';
import { Form, Button, Row, Col, Tabs, Tab } from "react-bootstrap";
import { useState, useEffect } from 'react';

export const Productos = ({ user }) => {

    let [data, setData] = useState([]);
    const [validated, setValidated] = useState(false);

    useEffect(
        () => {
            obtenerProductos();
    }, []);

    const obtenerProductos = async () => {
        const res = await fetch('http://localhost:5000/productos');
        const resData = await res.json();
        console.log(resData);
        setData(resData)
    };


    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };


    if (!user) {
        return <Navigate to="/" replace />;
    }

    return (
        <Tabs defaultActiveKey="nuevo_roducto" id="uncontrolled-tab-example" className="mb-3">
            <Tab eventKey="nuevo_roducto" title="Ingresar Nuevo Producto">
                <div>
                    <h2 className="text-center justify-content-center">Ingresar un Nuevo Producto</h2>
                    <br />
                    <Form noValidate validated={validated} onSubmit={handleSubmit} >
                        <Form.Group className="mb-3" controlId="validationCustom01" as={Row}>
                            <Form.Label column sm="2">Codigo *</Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="Codigo" required />
                            </Col>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword" as={Row}>
                            <Form.Label column sm="2">Nombre *</Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="Nombre" required />
                            </Col>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword" as={Row}>
                            <Form.Label column sm="2">Categoria *</Form.Label>
                            <Col sm="10">
                                <Form.Select type="text" placeholder="Categoria" required>
                                    <option>Seleccionar Categoria</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </Col>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword" as={Row}>
                            <Form.Label column sm="2">Proveedor *</Form.Label>
                            <Col sm="10">
                                <Form.Select type="text" placeholder="Proveedor" required>
                                    <option>Seleccionar Proveedor</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </Col>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword" as={Row}>
                            <Form.Label column sm="2">Precio *</Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="Precio" required />
                            </Col>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword" as={Row}>
                            <Form.Label column sm="2">Cantidad *</Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="Cantidad" required />
                            </Col>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword" as={Row}>
                            <Form.Label column sm="2">Descripción *</Form.Label>
                            <Col sm="10">
                                <Form.Control as="textarea" rows={3} placeholder="Descripción" required />
                            </Col>
                        </Form.Group>

                        <div className="text-center justify-content-center">
                            <Button variant="outline-success" type="submit">Agregar</Button>
                        </div>
                    </Form>
                    <br />
                    <br />
                    <br />
                </div>
            </Tab>
            <Tab eventKey="gestión_roductos" title="Gestionar Productos">
                <h2 className="text-center justify-content-center">Gestionar Productos</h2>
                <br />
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Código</th>
                            <th>Nombre</th>
                            <th>Categoria</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Descripcion</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((producto) => (
                            <tr key={producto.id}>
                                <td>{producto.id}</td>
                                <td>{producto.codigo}</td>
                                <td>{producto.nombre}</td>
                                <td>{producto.categoria}</td>
                                <td>{producto.precio}</td>
                                <td>{producto.cantidad}</td>
                                <td>{producto.descripcion}</td>
                                <td>
                                    <Button variant="outline-success" type="submit">Actualizar</Button>
                                    <br />
                                    <br />
                                    <Button variant="outline-danger" type="summir">Eliminar</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Tab>
        </Tabs>
    );
}
