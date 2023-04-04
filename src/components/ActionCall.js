import "./ActionCall.css";
import { Container, Navbar, Nav, Card, Button } from "react-bootstrap";

export default function ActionCall() {
  return (
    <Container className="text-center" style={{ marginTop: "15%" }}>
      <div
        className="d-flex justify-content-center gap-5"
        style={{ marginTop: "5%" }}
      >
        <img
          class="py-2 px-2 rounded-circle roundthatIcon"
          src="/images/cart-1.png"
        />
        <img
          class="py-2 px-2 rounded-circle roundthatIcon"
          src="/images/goose-icon.png"
        />
        <img
          class="py-2 px-2 rounded-circle roundthatIcon"
          src="/images/llama-1.png"
        />
      </div>
      <h1 style={{ marginTop: "5%" }}>
        {" "}
        Find the ideal object for any occasion{" "}
      </h1>
      <p style={{ marginTop: "2%" }}>
        Whatever it is you are looking for, it very well could be here.
      </p>
      <p>
        possibly even a <strong>goose</strong>
      </p>
      <div
        className="d-flex justify-content-center gap-5"
        style={{ marginTop: "5%" }}
      >
        <button type="button" class="btn btn-outline-dark btn-lg">
          CHECK STOCK
        </button>
        <button type="button" class="btn btn-outline-dark btn-lg">
          HONK HONK
        </button>
      </div>
    </Container>
  );
}
