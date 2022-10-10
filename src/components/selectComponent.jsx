import { useMemo } from "react";
import { Form } from "react-bootstrap";
import useAxios from "../hooks/useAxios";

const SelectComponent = ({ path, label, value }) => {
  const config = useMemo(
    () => ({
      path,
      method: "get",
    }),
    [path]
  );
  const [resp] = useAxios(config);
  return (
    <Form.Group className="mb-3" controlId={path}>
      <Form.Label>{label}</Form.Label>
      <Form.Select required size="sm" value={value}>
        <>
          <option value="">Seleccione una opción</option>
          {resp &&
            resp[0].map(({ _id, name, state }, index) => {
              if (state === "activado")
                return (
                  <option key={index} value={_id}>
                    {name}
                  </option>
                );
            })}
        </>
      </Form.Select>
    </Form.Group>
  );
};

export default SelectComponent;
