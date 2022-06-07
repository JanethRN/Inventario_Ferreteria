import { Row, Col } from "react-bootstrap";
import { Login } from "./Login";
import { Bienvenida } from "./Bienvenida";

export const Inicio = () => {
    return <>
        <Row>
            <Col>
                <Bienvenida />
            </Col>
            
            <Col style={{ margin: 'auto' }}>
                <Login />
            </Col>
        </Row>
    </>
}