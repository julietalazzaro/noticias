import React from "react";

function Footer() {
  return (
    <footer className="page-footer blue darken-1">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Buscador de noticias</h5>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          Desarrollado por Julieta Lazzaro
          <span className="right">
            Icons made by
            <a
              href="http://www.freepik.com/"
              className="grey-text text-lighten-4"
            >
              {" "}
              Freepik{" "}
            </a>
            from
            <a
              href="https://www.flaticon.com/"
              className="grey-text text-lighten-4"
            >
              www.flaticon.com
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
