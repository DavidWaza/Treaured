import React from "react";
import Image from "next/image";
import RightC from "../../public/img/rightC.png";
import Right from "../../public/img/rightArrow.svg";
import LeftC from "../../public/img/leftC.png";
import Left from "../../public/img/leftArrow.svg";
import styles from '../../styles/Home.module.css'

export default function Slider({ direction, moveSlide }) {
  return (
    <>
      <div className=" scale-50  space-x-10">
        <button
          onClick={moveSlide}
          className={
            direction === "next"
              ? `${styles.btnSlide} ${styles.next}`
              : `${styles.btnSlide} ${styles.prev}`
          }
        >
          <a className="flex cursor-pointer">
            <Image
              src={direction === "next" ? RightC : LeftC}
              alt="arrowCaret"
            />
            <div className="absolute flex justify-center mt-1.5 ml-1.5">
              <Image src={direction === "next" ? Right : Left} alt="right" />
            </div>
          </a>
        </button>
      </div>
    </>
  );
}
