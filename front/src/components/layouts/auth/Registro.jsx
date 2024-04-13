import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./Login.css";
import axios from "axios";
import  {usuario}  from "../../../database/dataBase.jsx";

let apiUsuarios = "http://localhost:5174/usuarios";

const Registro = () => {
  const [getUsuario, setUsuario] = useState("");
  const [getContrasena, setContrasena] = useState("");
  const [getCorreo, setCorreo] = useState("");
  const [usuarios, setUsuarios] = useState([]);
  let redireccion = useNavigate();

  const buscarUsuario = () => {
    let estado = usuario.some((usuario) => {
      if (
        getUsuario === usuario.usuario 
        // &&
        // getContrasena === usuario.contrasena &&
        // getCorreo === usuario.correo
      ) {
        return true;
      }
    });
    return estado;
  };

  const agregarUsuario = async () => {
    let usuarioNuevo = {
      id: Math.round(Math.random() * 100).toFixed(0),
      usuario: getUsuario,
      contrasena: getContrasena,
      correo: getCorreo,
    };
    await axios.post(apiUsuarios, usuarioNuevo);
  };

  const registrarUsuario = () => {
    if (buscarUsuario()) {
      Swal.fire({
        title: "Error",
        text: "Usuario ya existe en la base de datos",
        icon: "warning",
      });
    } else {
      agregarUsuario();
      Swal.fire({
        title: "Bienvenido",
        text: "Seras redireccionado al Login",
        icon: "success",
      });
      redireccion("/");
    }
  };
  return (
    <form className="login-form">
      <h2>Iniciar sesión</h2>
      <div className="input-group">
        <label htmlFor="username">Usuario:</label>
        <input
          type="text"
          onChange={(e) => {
            setUsuario(e.target.value);
          }}
        />
      </div>
      <div className="input-group">
        <label htmlFor="password">Contraseña:</label>
        <input
          onChange={(e) => {
            setContrasena(e.target.value);
          }}
          type="text"
          name=""
          id=""
        />
      </div>
      <div className="input-group">
        <label htmlFor="email">Correo electrónico:</label>
        <input
          onChange={(e) => {
            setCorreo(e.target.value);
          }}
          type="text"
          name=""
          id=""
        />
      </div>
      <button onClick={registrarUsuario} type="button">
        Registrar Usuario
      </button>
    </form>
  );
};

export default Registro;