import { useForm, ValidationError } from "@formspree/react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import ButtonBack from "../../public/img/buttonBk.png";
import EnrollButton from "../../public/img/rec6.png";

const Form = () => {
  const [state, handleSubmit] = useForm("xgeqarov");
  if (state.succeeded) {
    return (
      <>
        <p className="text-center text-white font-bold text-4xl">
          Thanks for your feeback!
        </p>
        <p className="text-center text-white">You will hear from us shortly..</p>
      </>
    );
  }
  return (
    <>
      <div className={styles.formSpree}>
        <form onSubmit={handleSubmit} autoComplete="off">
          <label htmlFor="name" className="text-white">
            Your Name
          </label>
          <input id="name" type="name" name="name" />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
          <label htmlFor="email" className="text-white">
            Your Email Address
          </label>
          <input id="email" type="email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label htmlFor="subject" className="text-white">
            Subject
          </label>
          <input id="subject" type="subject" name="subject" />
          <ValidationError
            prefix="Subject"
            field="subject"
            errors={state.errors}
          />
          <label htmlFor="message" className="text-white">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="pl-1 w-100 h-20 rounded-md"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <div className="relative flex justify-center mt-2">
            <button type="submit" disabled={state.submitting}>
              <Image src={ButtonBack} alt="submit" height={50} width={150} />
              <div className="absolute top-2">
                <Image
                  src={EnrollButton}
                  alt="submit"
                  height={50}
                  width={150}
                />
                <p className="text-white top-3 right-12 absolute">Submit</p>
              </div>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
