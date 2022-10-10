import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import FormInventoryComponent from "../components/formInventoryComponent";
import useAxios from "../hooks/useAxios";

const config = { path: "inventory", method: "get" };
const InventoryPage = () => {
  const [resp, setAxios] = useAxios(config);
  const [reload, setReload] = useState(false);
  useEffect(() => {
    if (reload) setAxios(config);
    setReload(false);
  }, [reload]);
  return (
    <Container>
      <FormInventoryComponent setReload={setReload} />
      <Row>
        {resp &&
          resp[0].map(
            (
              {
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
              },
              index
            ) => (
              <FormInventoryComponent
                setReload={setReload}
                variant={true}
                serial={serial}
                model={model}
                description={description}
                photo={photo}
                color={color}
                price={price}
                user={user}
                brand={brand}
                stateEquipment={stateEquipment}
                typeEquipment={typeEquipment}
                key={index}
              />
            )
          )}
      </Row>
    </Container>
  );
};

export default InventoryPage;
