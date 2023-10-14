import { Container } from "@mui/material";
import assets from "../assets";
import { Link } from "react-router-dom";
import { BannerContent } from "./style/Style";

export default function Home() {
  return (
    <main>
      <section className="banner-wrapper">
        <img src={assets.banner} alt="" />
        <Container className="container">
          <BannerContent>
            <h1>You can transform health through habit change</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi tenetur corporis distinctio repudiandae iste tempore. Voluptates obcaecati eaque excepturi! Accusantium ducimus totam magni.</p>
            <Link to="/login" className="btn">
              Login
            </Link>
          </BannerContent>
        </Container>
      </section>
    </main>
  );
}
