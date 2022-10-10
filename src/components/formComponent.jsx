import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import useAxios from "../hooks/useAxios";

const FormComponent = ({
  variant,
  user,
  name,
  id = "",
  state,
  email,
  path,
  method,
  setReload,
}) => {
  const [_, setConfigAxios] = useAxios();
  const [formData, setFormData] = useState({
    name,
    state,
    email,
  });
  const handleName = (event) => {
    setFormData((formData) => ({
      ...formData,
      name: event.target.value,
    }));
  };

  const handleEmail = (event) => {
    setFormData((formData) => ({
      ...formData,
      email: event.target.value,
    }));
  };

  const handleSelect = (event) => {
    setFormData((formData) => ({
      ...formData,
      state: event.target.value,
    }));
  };

  const handleDelete = async (event) => {
    await setConfigAxios({
      path,
      method: "delete",
      params: id,
    });
    setReload(true);
  };

  const handleUpdate = async (event) => {
    await setConfigAxios({
      path,
      method: "put",
      params: id,
      data: formData,
    });
    setReload(true);
  };

  const handleCreate = async (event) => {
    event.preventDefault();
    await setConfigAxios({ path, method, params: id, data: formData });
    setReload(true);
  };
  return (
    <Card bg="" text="" className="m-5 p-3 col-2">
      <Form validated onSubmit={handleCreate}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Control
            required
            size="sm"
            type="text"
            placeholder="Nombre"
            value={formData.name}
            onChange={handleName}
          />
        </Form.Group>
        {user && (
          <Form.Group className="mb-3" controlId="email">
            <Form.Control
              required
              size="sm"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleEmail}
            />
          </Form.Group>
        )}
        <Form.Group className="mb-3" controlId="state">
          <Form.Select
            required
            size="sm"
            value={formData.state}
            onChange={handleSelect}
          >
            <option value="activado">Activado</option>
            <option value="desactivado">Desactivado</option>
          </Form.Select>
        </Form.Group>
        {variant ? (
          <>
            <Button variant="info" size="sm" onClick={handleUpdate}>
              Actualizar
            </Button>
            <Button variant="danger" size="sm" onClick={handleDelete}>
              Eliminar
            </Button>
          </>
        ) : (
          <Button variant="primary" size="sm" type="submit">
            Crear
          </Button>
        )}
      </Form>
    </Card>
  );
};

export default FormComponent;
