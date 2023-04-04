import { Container } from "react-bootstrap";
import HeroSection from "./components/HeroSection";
import CardSection from "./components/CardSection";
import Feature from "./components/Feature";
import Feature2 from "./components/Feature2";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ActionCall from "./components/ActionCall";

export default function App() {
  return (
    <div className="w-70 bg-light">
      <NavBar />
      <Container fluid class="bg-light">
        <HeroSection />
      </Container>
      <Feature />
      <Feature2 />
      <CardSection />
      <ActionCall />
      <Container>
        <Footer />
      </Container>
    </div>
  );
}
