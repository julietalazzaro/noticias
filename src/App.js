import React, { Fragment, useState } from "react";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Formulario from "./components/Formulario.js";
import ListadoNoticias from "./components/ListadoNoticias.js";

function App() {
  const [categoria, setCategoria] = useState("");
  const [pais, setPais] = useState("ar");
  const [noticias, setNoticias] = useState([]);

  React.useEffect(() => {
    const consultarAPI = async () => {
      let url = `https://newsapi.org/v2/top-headlines?country=${pais}&category=${categoria}&apiKey=${"962623f8fa99405c85f130eba3dd3ff2"}`;
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      setNoticias(noticias.articles);
    };

    consultarAPI();
  }, [categoria, pais]);
  return (
    <Fragment>
      <div className="App">
        <div>
          <Header titulo="Buscador de Noticias" />
          <div className="container white">
            <Formulario setCategoria={setCategoria} setPais={setPais} />
            <ListadoNoticias noticias={noticias} />
          </div>
          <Footer />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
