import { useCallback, useState } from "react";
import { Button, Card, Form, Image } from "react-bootstrap";
import useAxios from "../hooks/useAxios";
import SelectComponent from "./selectComponent";

const selects = [
  { path: "user", label: "Usuarios" },
  { path: "brand", label: "Marcas" },
  { path: "typeEquipment", label: "Tipos de equipos" },
  { path: "stateEquipment", label: "Estados de equipos" },
];
const FormInventoryComponent = ({
  variant = false,
  serial = "",
  model = "",
  description = "",
  photo = "",
  color = "",
  price = "",
  user = "",
  brand = "",
  stateEquipment = "",
  typeEquipment = "",
  setReload,
}) => {
  const [_, setConfigAxios] = useAxios();
  const [formData, setFormData] = useState({
    serial,
    model,
    description,
    photo,
    color,
    price,
    user,
    brand,
    stateEquipment,
    typeEquipment,
  });

  const handleOnChange = useCallback((e) => {
    const { value, id } = e.target;
    setFormData((formDataT) => ({ ...formDataT, [id]: value }));
  }, []);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    await setConfigAxios({
      path: "inventory",
      method: "post",
      params: "",
      data: formData,
    });
    setReload(true);
  };

  return (
    <Card bg="" text="" className="m-5 p-3 col-5">
      <Form validated onChange={handleOnChange} onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3" controlId="serial">
          <Form.Control
            required
            size="sm"
            type="text"
            placeholder="Serial"
            value={formData.serial}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="model">
          <Form.Control
            required
            size="sm"
            type="text"
            placeholder="Modelo"
            value={formData.model}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="description">
          <Form.Control
            required
            size="sm"
            type="text"
            placeholder="Descripción"
            value={formData.description}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="price">
          <Form.Control
            required
            size="sm"
            type="number"
            placeholder="Precio"
            value={formData.price}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="photo">
          <Form.Control
            required
            size="sm"
            type="text"
            placeholder="Foto url"
            value={formData.photo}
          />
          {variant && <Image rounded width={300} height={250} src={photo} />}
        </Form.Group>
        <Form.Group className="mb-3" controlId="color">
          <Form.Control
            required
            size="sm"
            type="text"
            placeholder="Color"
            value={formData.color}
          />
        </Form.Group>
        {selects.map(({ path, label }, index) => (
          <SelectComponent
            path={path}
            value={formData[path]}
            label={label}
            key={index}
          />
        ))}
        {variant ? (
          <></>
        ) : (
          <Button variant="primary" size="sm" type="submit">
            Crear
          </Button>
        )}
      </Form>
    </Card>
  );
};

export default FormInventoryComponent;
