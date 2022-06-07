import { Image } from "react-bootstrap";

export const Bienvenida = () => {
    return <div className="text-center justify-content-center" style={{ margin: '12px' }}>
        <h2 style={{ margin: '24px' }}>
            BIENVENIDOS A FERRETERIA ESPE
        </h2>
        <Image style={{ width: '90%', borderRadius: '24px',  margin: '24px' }} src="https://www.canalferretero.com/images/galerias/grande/5f6dbe2079fc4.jpg"/>
        <span >
            En nuestro sitio web encontrará todas las soluciones para los proyectos de su hogar, a un precio inigualable en el mercado.
        </span>
        <br/>
        <br/>
        <span >
            Además, en nuestra ferreteria tendrá una atención preferencial y personalizada, ya que para Ferreteria ESPE lo más importante es usted.
        </span>
    </div>
}