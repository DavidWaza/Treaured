import { Col, Container, Row } from "react-bootstrap";
import { FooterArr } from "./footerArr";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import FaceBook from "../../public/img/fb.png";
import Instagram from "../../public/img/ig.png";
import Twitter from "../../public/img/tw.png";

const fbURL = "https://web.facebook.com/profile.php?id=100063690275152";

const Footer = () => {
  return (
    <>
      <Container fluid className={styles.footerbg}>
        <Row>
          {FooterArr.map((obj) => (
            <Col sm={3} key={obj.id}>
              <div className={styles.footerItems}>
                <p>{obj.Header}</p>
                <Link href={`/ ${obj.subTitleOne}`}>
                  <p>{obj.subTitleOne}</p>
                </Link>
                <Link href={`/ ${obj.subTitleTwo}`}>
                  <p className="text-sm">{obj.subTitleTwo}</p>
                </Link>
                <Link href={`/ ${obj.subTitleThree}`}>
                  <p>{obj.subTitleThree}</p>
                </Link>
                <Link href={`/ ${obj.subTitleFour}`}>
                  <p>{obj.subTitleFour}</p>
                </Link>
              </div>
            </Col>
          ))}
        </Row>
        <Row>
          <div className="flex justify-center space-x-10 mt-5">
            <div className="cursor-pointer">
              <Link href={fbURL}>
                <Image src={FaceBook} alt="fb" />
              </Link>
            </div>
            <div className="cursor-pointer">
              <Link href="/">
                <Image src={Instagram} alt="ig" />
              </Link>
            </div>
            <div className="cursor-pointer">
              <Link href="/">
                <Image src={Twitter} alt="tw" />
              </Link>
            </div>
          </div>
        </Row>
        <Row>
          <p className="text-center mt-2 tracking-wider font-thin">
            All right reserved @ THS 2022
          </p>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
