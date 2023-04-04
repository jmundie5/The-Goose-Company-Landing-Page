import { Container, Navbar, Nav, Card } from "react-bootstrap";
import "./HeroSection.css";
import CardZ from "./CardZ";

export default function CardSection() {
  return (
    <div class="container text-white">
      <div class="container bg-light" style={{ marginTop: "15%" }}>
        <div class="row">
          <div class="d-flex gap-4 flex-column flex-lg-row justify-content-center align-items-center">
            <CardZ />
            <CardZ />
            <CardZ />
          </div>
        </div>
      </div>
    </div>
  );
}
