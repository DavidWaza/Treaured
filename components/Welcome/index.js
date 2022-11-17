import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

const Welcome = () => {
  return (
    <>
      <Container>
        <Row>
          <div className={styles.welcomeHeader}>WELCOME NOTE</div>
          <Col sm={4}></Col>
          <Col sm={8}>
            <div className={styles.welcomeTitle}>
              <p>THS Welcomes you</p>
              <p>
                It is my pleasure to welcome you to our website. We are
                particularly delighted that you have created time to visit this
                site. This site is the official platform for the dissemination
                of information to the general public and to members of the
                Treasured Heritage School community in particular. We have made
                the site very interactive where you can access every information
                on THS, and also express your views about us. It is my sincere
                belief that after this visit, you will have a very positive view
                about us.{" "}
              </p>
              <p>
                And we hope this will not be your last. We look forward to
                hearing from you very soon Yours in the affairs of moulding
                lives.
              </p>
              <p>Martina George - Bominuru(Mrs)</p>
              <hr />
              <p className={styles.title}>Proprietress</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Welcome;
