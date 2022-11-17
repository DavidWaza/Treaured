import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import Parent from "../../public/img/parent.png";
import Bus from "../../public/img/bus.png";
import styles from "../../styles/Home.module.css";
import { useState } from "react";
import Slider from "../Slider";
import { dataSlider } from "../Slider/dataSlider";

const Testimony = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };
  const prevSlide = () => {};

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <div className="mt-3 -mb-6 scale-50 flex justify-end">
              <Image src={Bus} alt="Bus" />
            </div>
          </Col>
        </Row>
        <Row className={styles.testBg}>
          <Col sm={4}>
            <div className={styles.parentImg}>
              <Image src={Parent} alt="parent" />
            </div>
          </Col>
          <Col sm={2}>
            <div className="text-center mt-2 text-3xl text-white">
              <p className="no-wrap">
                Parents <br />
                Testimonials
              </p>
            </div>
            <div className="flex justify-center">
              <Slider moveSlide={prevSlide} direction={"prev"} />
              <Slider moveSlide={nextSlide} direction={"next"} />
            </div>
          </Col>
          {dataSlider.map((obj, quote) => (
            <Col sm={6} key={obj.id}>
              <div
                className={
                  slideIndex === quote
                    ? `${styles.slide} ${styles.activeAnim}`
                    : `${styles.slide}`
                }
              >
                <p className={quote}>{obj.quote}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
export default Testimony;
