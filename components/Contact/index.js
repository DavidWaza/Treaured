import styles from "../../styles/Home.module.css";
import Form from "../Form";

const ContactUs = () => {
  return (
    <>
      <div className={styles.contactBg}>
        <p className="text-white flex justify-center pt-12 text-3xl font-bold">
          Get in touch
        </p>
        <p className="text-center text-white">
          Reach out. We’d love to hear from you
        </p>
        <div>
            <Form />
        </div>
      </div>
    </>
  );
};

export default ContactUs;
