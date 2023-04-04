import { Container, Navbar, Nav } from "react-bootstrap";
import "./NavBar.css";
export default function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-transparent w-100 d-flex justify-content-around">
      <a class="navbar-brand text-dark px-lg-3 px-xl-5 blockSize" href="#">
        <img
          class="goose"
          src="/images/goose-icon.png"
          style={{ width: "60%" }}
        />
        the goose company.
      </a>
      <button
        class="ml-auto navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse navRecenter" id="navbarNavDropdown">
        <ul class="navbar-nav d-flex justify-content-end w-100 text-dark ">
          <li class="nav-item active px-lg-5 px-sm-3 px-1">
            <a class="nav-link" href="#">
              Home
            </a>
          </li>
          <li class="nav-item px-lg-5 px-sm-3 px-1">
            <a class="nav-link" href="#">
              Features
            </a>
          </li>
          <li class="nav-item px-lg-5 px-sm-3 px-1">
            <a class="nav-link" href="#">
              Pricing
            </a>
          </li>
          <li class="nav-item text-dark dropdown px-lg-5 px-sm-3 px-1">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown link
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#">
                Action
              </a>
              <a class="dropdown-item" href="#">
                Another action
              </a>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
