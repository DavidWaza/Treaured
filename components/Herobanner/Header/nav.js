import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";
import Logo from "../../../public/img/logo.png";
import BackButton from "../../../public/img/buttonBk.png";
import FrontButton from "../../../public/img/buttonFk.png";
import styles from "../../../styles/Home.module.css";
import Link from 'next/link'

const admisURL =
  "https://treasuredheritageschool.com/admission-treasured-heritage-school-ekiti/";

function CollapsibleNav() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="transparent"
      variant="light"
      className={`${styles.transparent}`}
    >
      <Container>
        <Navbar.Brand href="/">
          <Image src={Logo} alt="logo" height={70} width={70} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="flex text-bolder">
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/program">Programs</Nav.Link>
            <Nav.Link href="/event">Events</Nav.Link>
            <Nav.Link href="/gallery">Gallery</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/admission">
              <Link href={admisURL}>
                  <button className="flex -mt-3 cursor-pointer">
                    <div className=" relative">
                      <Image src={BackButton} alt="" height={49} width={150} />
                    </div>
                    <div className="flex absolute mt-1.5">
                      <Image
                        src={FrontButton}
                        alt="front"
                        height={45}
                        width={140}
                      />
                    </div>
                    <div className="absolute ml-8 mt-3">
                      <p className="text-white">admission</p>
                    </div>
                  </button>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleNav;
