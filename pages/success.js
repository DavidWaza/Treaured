import React from "react";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

const Success = () => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/");
  };
  return (
    <>
      <div className={styles.successBg}>
        <p>Your Newsletter would be sent to your inbox</p>
        <div className="mt-4 flex justify-center">
          <button onClick={handleClick}>
            <p>Home page</p>
          </button>
        </div>
      </div>
    </>
  );
};
export default Success;
