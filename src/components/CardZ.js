import { Container, Navbar, Nav, Card, Button } from "react-bootstrap";
import "./CardZ.css";

function CardZ() {
  return (
    <Card className="roundThat bg-light text-dark" style={{ width: "100%" }}>
      <Card.Img
        className="roundThatPicture"
        variant="top"
        src="https://picsum.photos/1280"
      />
      <Card.Body>
        <Card.Title class="text-center">
          <div class="">
            <p>&#11088;&#11088;&#11088;&#11088;&#11088;</p>
          </div>
        </Card.Title>
        <Card.Text class="text-center">
          Some quick example text to show how this space could be used for
          reviews or service summaries
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardZ;
