/*import { useRef } from "react";

const FormualrioNoControlado = () => {
  const formulario = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const datos = new FormData(formulario.current);
    const objetosDatos = Object.fromEntries([...datos.entries()]);
    console.log(objetosDatos);

    // Destructuracion

    const { TodoName, TodoDescripcion } = objetosDatos;
    // Validacion de espacios

    if (!TodoDescripcion.trim() || !TodoName.trim()) {
      console.log(" Esta vacio ");
      return;
    }
    console.log("Paso validaciones ");
  };

  return (
    <>
      <h2 className="text-danger">Formaulario</h2>

      <form ref={formulario} onSubmit={handleSubmit}>
        <input
          type="text"
          name="TodoName"
          placeholder="Todo aqui"
          className="form-control mb-2"
          defaultValue="Tarea #01"
        />
        <textarea
          name="TodoDescripcion"
          className="form-control mb-2"
          placeholder="Ingrese la descripcion"
          defaultValue="Descripción de la Tareas"
        ></textarea>
        <select
          name="todoEstado"
          className="form-control mb-2"
          defaultValue="Pendiente"
        >
          <option value="pendiente">Pendiente</option>
          <option value="completada">Completada</option>
        </select>
        <button className="btn btn-primary">Agregar</button>
      </form>
    </>
  );
};

export default FormualrioNoControlado;
*/
