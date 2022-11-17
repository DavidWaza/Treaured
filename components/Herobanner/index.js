import { Carousel } from "react-bootstrap";
import styles from "../../styles/Home.module.css";

const Herobanner = () => {
  return (
    <Carousel className={styles.carousel}>
      <Carousel.Item>
        <div className={styles.firstHero}></div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={styles.secondHero}></div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={styles.thirdHero}></div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Herobanner;
