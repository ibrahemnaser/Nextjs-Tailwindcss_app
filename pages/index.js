import Head from "next/head";
import NewsLetter from "../components/NewsLetter";
import Slider from "../components/Slider";
import Products from "../components/Products";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mobiley</title>
        <meta name="description" content="An E-commerce site for mobiles" />
        <link rel="icon" href="/apple.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
          integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>
      <Slider />
      <Products />
      <NewsLetter />
    </div>
  );
}
