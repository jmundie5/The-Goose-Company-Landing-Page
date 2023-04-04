import { Container, Navbar, Nav, Card } from "react-bootstrap";
import "./Feature2.css";

export default function Feature2() {
  return (
    <Container style={{ marginTop: "2%" }}>
      <div class="row">
        <div class="d-flex flex-column align-items-center col-md-12 col-lg-6">
          <img src="/images/store-1.png" style={{ width: "90%" }} />
        </div>
        <div class="d-flex flex-column text-center align-items-center col-md-12 col-lg-6">
          <img src="/images/goose-real.png" style={{ width: "50%" }} />
          <br />
          <h1 class="heading">a new shopping experience.</h1>
        </div>
      </div>
    </Container>
  );
}
