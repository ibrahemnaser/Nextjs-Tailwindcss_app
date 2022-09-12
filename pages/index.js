import Head from "next/head";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mobiley</title>
        <meta name="description" content="An E-commerce site for mobiles" />
        <link rel="icon" href="/apple.png" />
      </Head>
      <Navbar />
      <Slider />
    </div>
  );
}
