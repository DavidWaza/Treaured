import { Col, Container, Row } from "react-bootstrap";
import contactStyles from "../styles/Contact.module.css";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import Location from "../public/img/contact/location.png";
import Call from "../public/img/contact/call.png";
import Email from "../public/img/contact/email.png";
import BackButton from "../public/img/buttonBk.png";
import FrontButton from "../public/img/buttonFk.png";
import Form from "../components/Form/index";

const ContactPage = () => {
  return (
    <>
      <div className={contactStyles.bannerImgContainer}></div>
      <Container>
        <Row className="g-5">
          <Col sm={4}>
            <div className={contactStyles.addrContainer}>
              <span className="flex justify-center pt-10">
                <Image src={Location} alt="location" />
              </span>
              <p className="text-center font-bold mt-3">Visit our office hq.</p>
              <p className="text-center">
                112 Moferere street, off Ajilosun. Behind Ado Local Govt, Health
                Center. Ado
              </p>
            </div>
          </Col>
          <Col sm={4}>
            <div className={contactStyles.addrContainer}>
              <span className="flex justify-center pt-10">
                <Image src={Call} alt="location" />
              </span>
              <p className="text-center font-bold mt-3">Talk to us</p>
              <p className="text-center">
                Do you want to make any enquiries? We are here for you. Call us.
              </p>
              <Link href="tel:08029246221">
                <div className="flex justify-center mt-4">
                  <button className="flex -mt-3 cursor-pointer">
                    <div className=" relative">
                      <Image
                        src={BackButton}
                        alt="back"
                        height={49}
                        width={150}
                      />
                    </div>
                    <div className="flex absolute mt-1.5">
                      <Image
                        src={FrontButton}
                        alt="front"
                        height={45}
                        width={140}
                      />
                    </div>
                    <div className="absolute ml-12 mt-3 tracking-wider font-bold">
                      <p className="text-white">call</p>
                    </div>
                  </button>
                </div>
              </Link>
            </div>
          </Col>
          <Col sm={4}>
            <div className={contactStyles.addrContainer}>
              <span className="flex justify-center pt-10">
                <Image src={Email} alt="location" />
              </span>
              <p className="text-center font-bold mt-3">Send us an Email @</p>
              <p className="text-center">
                treasuredheritagemontessori@gmail.com
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <div className={styles.contactBg}>
            <Form />
          </div>
        </Row>
      </Container>
    </>
  );
};

export default ContactPage;
