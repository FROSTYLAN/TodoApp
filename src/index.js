import React from "react";
import ReactDOM from "react-dom";
// import App from "./App/index.js";
import "./index.css";

function App(props) {
  return (
    <h1>
      ¡{props.saludo}, {props.nombre}!
    </h1>
  );
}

function withSaludo(WrappedComponent) {
  return function WrappedComponentWithSaludo(saludo) {
    function ComponenteDeVerdad(props) {
      return (
        <React.Fragment>
          <WrappedComponent {...props} saludo={saludo} />
          <p>Estamos acompañando al WrapperComponent</p>
        </React.Fragment>
      );
    }
  };
}

const AppWithSaludo = withSaludo(App)("Ey");

ReactDOM.render(
  <AppWithSaludo nombre="Charles" />,
  // <App saludo="Buenas" nombre="Nath" />,
  document.getElementById("root")
);
