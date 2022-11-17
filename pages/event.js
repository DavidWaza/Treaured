import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import Card from "../components/Card";
import DateUpdate from "../components/DateUpdate";
import evnStyles from "../styles/Event.module.css";
import { CardArr, EventDayArr } from "../components/DataArr/Data";

const Event = () => {
  return (
    <>
      <div className={evnStyles.herobanner}></div>
      <Container>
        <Row>
          <Col>
            <div className="font-bold text-xl mt-10 mb-2">Latest News</div>
          </Col>
        </Row>
        <Row>
          <div className={evnStyles.FaDayContainer}>
            <p>Photos</p>
            <p>Children{"'"}s Day</p>
            <div>
              <DateUpdate />
            </div>
          </div>
        </Row>
        <Row className="g-5">
          {CardArr.map((obj) => (
            <Col sm={6} key={obj.id}>
              <div className={`${evnStyles.cardWrapper}`}>
                <Card img={obj.img} update={obj.update} title={obj.title} />
              </div>
            </Col>
          ))}
        </Row>
        <Row>
          {EventDayArr.map((obj) => (
            <Col sm={4} key={obj.id}>
              <Card img={obj.img} update={obj.update} title={obj.title} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Event;
