import React, { useState } from "react";

const FormuarioControlado = () => {
  const [todo, setTodo] = useState({
    TodoName: "",
    TodoDescripcion: "",
    todoEstado: "Pendiente",
    todoCheck: false,
  });

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { TodoName, TodoDescripcion } = todo;

    if (!TodoDescripcion.trim() || !TodoName.trim()) {
      setError(true);
      return;
    }
    setError(false);
  };

  // Destructuracion

  const handLenchange = (e) => {
    const { name, value, checked, type } = e.target;
    setTodo({
      ...todo,
      /*
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,*/

      [name]: type === "checkbox" ? checked : value,
    });
  };

  const PintarError = () => (
    <div className="alert alert-danger">Campos Obligatorio</div>
  );

  return (
    <>
      <h2>Formulario controlado</h2>
      {error ? <PintarError /> : null}
      <h3 className="text-danger">Formaulario</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="TodoName"
          placeholder="Todo aqui"
          className="form-control mb-2"
          onChange={handLenchange}
          value={todo.TodoName}
        />
        <textarea
          name="TodoDescripcion"
          className="form-control mb-2"
          placeholder="Ingrese la descripcion"
          onChange={handLenchange}
          value={todo.TodoDescripcion}
        ></textarea>
        <select
          name="todoEstado"
          className="form-control mb-2"
          onChange={handLenchange}
          value={todo.todoEstado}
        >
          <option value="pendiente">Pendiente</option>
          <option value="completada">Completada</option>
        </select>
        <div className="form-check">
          <input
            type="checkbox"
            name="todoCheck"
            id="flexCheckDefault"
            className="form-check-input"
            checked={todo.todoCheck}
            onChange={handLenchange}
          />
          <label htmlFor="flexCheckDefault" className="form-check-labe">
            Dar Prioridad
          </label>
        </div>

        <button type="Submit" className="btn btn-primary">
          Agregar
        </button>
      </form>
    </>
  );
};

export default FormuarioControlado;
