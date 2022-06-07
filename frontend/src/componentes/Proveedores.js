// import { Table } from "react-bootstrap";

const JsonData = [
    {
        "id": "0",
        "ruc": "1234567899001",
        "nombre": "proveedor1",
        "telefono": "1234567",
        "correo_electronico": "proveedor1@mail.com",
    }
]

export const Proveedores = () => {
    const DisplayData=JsonData.map(
        (info)=>{
            return(
                <tr>
                    <td>{info.id}</td>
                    <td>{info.ruc}</td>
                    <td>{info.nombre}</td>
                    <td>{info.telefono}</td>
                    <td>{info.correo_electronico}</td>
                </tr>
            )
        }
    );
 
    return(
        <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>RUC</th>
                    <th>Nombre</th>
                    <th>Telefono</th>
                    <th>Correo electronico</th>
                    </tr>
                </thead>
                <tbody>                    
                    {DisplayData}
                </tbody>
            </table>
             
        </div>
    );
}