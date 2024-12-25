import { useEffect } from "react";
import "../assets/styles/globals.css";
import Layout from "../components/Layout/Layout";
import AOS from "aos";
import "aos/dist/aos.css";
export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      offset: 120,
      delay: 100,
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
