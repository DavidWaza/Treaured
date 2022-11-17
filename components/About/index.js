import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/Home.module.css";
import Image from 'next/image'

const About = () => {
  return (
    <div className={styles.abtWrapper}>
      <Container>
        <Row>
          <Col sm={8}>
            <div className={styles.abtHeader}>
              <p>Who we are</p>
              <p>
                Treasured Heritage School (THS) is a Christian Montessori School
                that offers educational services from Creche to Grade levels. We
                are poised to build a total child that is spiritually, morally
                and academically sound, exuding self confidence that can make
                the child compete favourably with his/her contemporaries in any
                part of the world.
              </p>
            </div>
            <Image
              src="https://res.cloudinary.com/ddwkojhaj/image/upload/q_auto,f_auto/v1668638477/casual_hndg5x.png"
              alt="fanboy"
              width={100}
              height={100}
            />
          </Col>
          <Col sm={4}>
            <p className={styles.AbtTitle}>About Us</p>
            <div className={styles.abtImg}></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default About;
