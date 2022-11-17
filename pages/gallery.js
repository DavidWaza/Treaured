import styles from "../styles/Home.module.css";
import { Col, Row, Container } from "react-bootstrap";
// import Image from 'next/image'

const Gallery = ({ galleryPhotos }) => {
  console.log(galleryPhotos);
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <section>
              <div className={styles.Herogallery}>
                <h1>Gallery</h1>
              </div>
            </section>
            <Row className="mt-5">
              {galleryPhotos.map((photo) => (
                <Col sm={4} key={photo.id}>
                  <img src={photo.url} alt="photo"  />
                  <p>{photo.title}</p>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Gallery;

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=8`);
  const galleryPhotos = await res.json();

  return {
    props: {
      galleryPhotos,
    },
  };
};
