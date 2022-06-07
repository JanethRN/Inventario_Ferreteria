import { Form, Button } from "react-bootstrap";
import { useState } from 'react';
import { Link } from "react-router-dom";

export const Login = () => {
    let datosLogin = {};
    let [data, setData] = useState([]);
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [validated, setValidated] = useState(false);

    // useEffect(
    //     () => {
    //         obtenerProductos();
    // }, []);

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datosLogin)
    };

    const enviarDatosLogin = async () => {
        const res = await fetch('http://localhost:5000/usaurio', requestOptions);
        const resData = await res.json();
        setData(resData)
    };

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        console.log(name + ' ' + password+ ' ');
        setValidated(true);
    };

    return <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre de usuario *</Form.Label>
            <Form.Control onChange={e => setName(e.target.value)}  value={name || ""} type="text" placeholder="Ingrese el nombre de usuario" required/>
            <Form.Text className="text-muted">
                Nunca compartiremos tu correo electrónico con nadie más.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña *</Form.Label>
            <Form.Control onChange={e => setPassword(e.target.value)} value={password || ""} type="password" placeholder="Contraseña" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Mostrar password" />
        </Form.Group>
        <div className="text-center justify-content-center">
            <Button variant="outline-success" type="submit">Iniciar Sesión</Button>
            <br />
            <label><br />- o -</label>
            <br />
            <br />
            <Link to="/invitado">
                <Button variant="outline-primary" >Ingresar Como Invitado</Button>
            </Link>
        </div>
    </Form>
}