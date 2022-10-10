import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import FormComponent from "../components/formComponent";
import useAxios from "../hooks/useAxios";

const config = { path: "user", method: "get" };
const UserPage = () => {
  const [resp, setAxios] = useAxios(config);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    if (reload) setAxios(config);
    setReload(false);
  }, [reload]);

  return (
    <Container>
      <FormComponent
        setReload={setReload}
        path="user"
        method="post"
        user={true}
        state="activado"
      />
      <Row>
        {resp &&
          resp[0].map(({ name, state, _id, email }, index) => (
            <FormComponent
              setReload={setReload}
              variant={true}
              name={name}
              state={state}
              path="user"
              user={true}
              email={email}
              id={_id}
              key={index}
            />
          ))}
      </Row>
    </Container>
  );
};

export default UserPage;
