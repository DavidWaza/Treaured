
import Moment from "react-moment";

const DateUpdate = () => {
    const dateToFormat = new Date();
  return (
    <>
      <div>
        <Moment format="MMMM">{dateToFormat}</Moment> {" "}
        <Moment format="DD">{dateToFormat}</Moment> {", "}
        <Moment format="YYYY">{dateToFormat}</Moment>
      </div>
    </>
  );
};

export default DateUpdate;
