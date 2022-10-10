import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

const LayoutPage = () => {
  return (
    <Container>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Control de equipos</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="nav-link" to="/user">
              Usuarios
            </Link>
            <Link className="nav-link" to="/typeEquipment">
              Tipo de equipos
            </Link>
            <Link className="nav-link" to="/stateEquipment">
              Estado de equipos
            </Link>
            <Link className="nav-link" to="/brand">
              Marcas
            </Link>
            <Link className="nav-link" to="/inventory">
              Inventario
            </Link>
          </Nav>
        </Container>
      </Navbar>

      <Outlet />
    </Container>
  );
};

export default LayoutPage;
