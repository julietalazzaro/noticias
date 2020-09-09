import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./Formulario.module.css";
import useSelect from "../hooks/useSelect.js";

const Formulario = ({ setCategoria, setPais }) => {
  const OPCIONES = [
    { value: "general", label: "General" },
    { value: "business", label: "Negocios" },
    { value: "entertainment", label: "Entretenimiento" },
    { value: "health", label: "Salud" },
    { value: "science", label: "Ciencia" },
    { value: "sports", label: "Deportes" },
    { value: "technology", label: "Tecnologia" },
  ];

  const PAISES = [
    { value: "ar", label: "Argentina" },
    { value: "us", label: "Estados Unidos" },
    { value: "br", label: "Brasil" },
    { value: "mx", label: "Mexico" },
    { value: "ve", label: "Venezuela" },
    { value: "co", label: "Colombia" },
    { value: "ca", label: "Canada" },
  ];

  const [categoria, SelectNoticias] = useSelect("general", OPCIONES);
  const [pais, SelectPais] = useSelect("ar", PAISES);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCategoria(categoria);
    setPais(pais);
  };

  useEffect(() => {
    setPais(pais);
    // eslint-disable-next-line
  }, [pais]);
  return (
    <Fragment>
      <div className="right ">
        <SelectPais />
      </div>
      <div className={`row ${styles.buscador}`}>
        <div className="col s12 m8 offset-m2">
          <form onSubmit={handleSubmit}>
            <h2 className={styles.heading}>
              Encuentra noticias por categorias
            </h2>
            <SelectNoticias />
            <div className="input-field col s12">
              <input
                type="submit"
                className={`btn-large amber darken-2 ${styles.btn_block}`}
                value="Buscar"
              />
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};
Formulario.propTypes = {
  setCategoria: PropTypes.func.isRequired,
  setPais: PropTypes.func.isRequired,
};
export default Formulario;
