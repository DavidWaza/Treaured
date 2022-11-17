// import { useState, useEffect } from "react";
import Head from "next/head";
import About from "../components/About";
import Herobanner from "../components/Herobanner";
import Program from "../components/Programs";
import Welcome from "../components/Welcome";
// import Testimony from "../components/Testimony";
import ContactPage from "../components/Contact";
import Newsletter from "../components/Newsletter";
import { Notice } from "../components/Notice";

export default function Home() {
  const Content = "college, high-school, school, mentossori";
  const { Keyword } = "keyword";
  return (
    <>
      <Head>
        <title>Treasured heritage school</title>
        <meta name={Keyword} content={Content} />
      </Head>
      <Herobanner />
      <Notice />
      <Welcome />
      <About />
      <Program />
      <ContactPage />
      <Newsletter />
    </>
  );
}
