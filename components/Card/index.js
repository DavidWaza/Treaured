import envStyles from "../../styles/Event.module.css";
import Image from "next/image";

import DateUpdate from "../DateUpdate";

const Card = (props) => {
  return (
    <div className={envStyles.container}>
      <div className={envStyles.cardContainer}>
          <Image
            src={props.img}
            alt="student"
            height={400}
          />
        <p>{props.update}</p>
        <p>{props.title}</p>
        <div className="pl-1">
          <DateUpdate />
        </div>
      </div>
    </div>
  );
};

export default Card;
