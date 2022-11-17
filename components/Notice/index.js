import styles from "../../styles/Home.module.css";
import { Col, Row } from "react-bootstrap";
import BackButton from "../../public/img/buttonBk.png";
import FrontButton from "../../public/img/buttonFk.png";
import Link from "next/link";
import Image from "next/image";

export const Notice = () => {
  return (
    <>
      <Row>
        <Col>
          <div className={styles.noticeBg}>
            <Row>
              <Col sm={6}>
                <div className={styles.noticeText}>
                  <p>
                    We are a caring community school focusing on inspiring the
                    child through practical learning and embedding in all we do
                  </p>
                </div>
              </Col>
              <Col sm={6}>
                <div className="flex justify-center">
                  <Link href="/admission">
                    <button className={`flex mt-12 cursor-pointer ${styles.noticeButton}`}>
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
                      <div className="absolute ml-6 mt-3 tracking-wider font-bold">
                        <p className="text-white">Enroll Now</p>
                      </div>
                    </button>
                  </Link>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </>
  );
};
