import { Container, Navbar, Nav } from "react-bootstrap";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <div class="container text-white bg-light">
      <div class="container-fluid bg-light w-100" style={{ marginTop: "0%" }}>
        <div class="row">
          <div class="col-md-12 col-lg-6">
            <div class="container-fluid">
              <img src="/images/gooseCombo-1.png" style={{ width: "100%" }} />
            </div>
          </div>
          <div class="col-md-12 col-lg-6 m-auto text-center text-dark py-1">
            <div class="container" style={{ marginTop: "0%" }}>
              <div class="base_header">
                <span>
                  <small class="bor_header_left"></small>WE ARE THE GOOSE
                  COMPANY
                  <small class="bor_header_right"></small>
                </span>
                <h3>If you can imagine it, we bet we could sell it.</h3>
              </div>
              <div class="base_footer">
                <p>
                  Welcome to our company, where we sell everything you could
                  need! <br />
                  <br />
                  From everyday household items to the latest technology, we've
                  got you covered. Our vast selection of products includes
                  clothing, electronics, home decor, beauty supplies, toys, and
                  so much more. We take pride in offering the best quality
                  products at affordable prices to our valued customers. Our
                  team is committed to providing exceptional customer service
                  and making your shopping experience a breeze.
                </p>
                <br />
                <button type="button" class="btn btn-dark btn-lg">
                  PLACE AN ORDER
                </button>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
