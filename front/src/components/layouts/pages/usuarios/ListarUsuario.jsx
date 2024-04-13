import axios from "axios";
import { useState, useEffect } from "react";
let apiUsuarios = "http://localhost:5174/usuarios";

const ListarUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const getUsuarios = async () => {
    let resultado = await axios.get(apiUsuarios);
    console.log(usuarios);
    setUsuarios(resultado.data);
  };

  useEffect(() => {
    getUsuarios();
  }, []);

  console.log(usuarios);
  return (
    <div className="cards">
      {usuarios.map((usuario) => (
        <section>
          <p>Usuario: {usuario.usuario}</p>
          <p>Contraseña: {usuario.contrasena}</p>
          <p>Correo:{usuario.correo}</p>
          <div>
          <button>Eliminar</button>
          <button>Editar</button>
          </div>
        </section>
      ))}
    </div>
  );
};

export default ListarUsuarios;