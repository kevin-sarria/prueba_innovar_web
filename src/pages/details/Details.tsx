import { useState, useEffect } from 'react';
import { RedirectButton } from "../";

export const Details = () => {

  const [ image, setImage ] = useState<string>('');

  useEffect( () => {
    setImage('https://www.innovarweb.com/wp-content/uploads/2019/08/logo-innovarweb.png');
  }, [] );

  return (
    <div className="details">
      <div className="details__container">
        <img src={image} alt="Logo InnovarWeb" />
        <p>"En innovar web le damos visibilidad a nuestros clientes para que puedan tener una imagen profesional de su empresa y tengan resultados eficientes en Google. Queremos ser un aliado estratégico para emprendedores caleños en la creación, desarrollo y mantenimiento de productos tecnológicos."</p>
        <RedirectButton text="Ir al inicio" />
      </div>
    </div>
  )
}
