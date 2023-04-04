import { Container, Navbar, Nav, Card } from "react-bootstrap";
import "./Feature.css";

export default function Feature() {
  return (
    <Container style={{ marginTop: "10%" }}>
      <div class="row">
        <div class="d-flex flex-column justify-content-center align-items-center col-md-12 col-lg-6">
          <img src="/images/goose-2.png" style={{ width: "50%" }} />
        </div>
        <div class="d-flex justify-content-center col-md-12 col-lg-6">
          <img src="/images/store-1.png" style={{ width: "90%" }} />
        </div>
      </div>
    </Container>
  );
}
