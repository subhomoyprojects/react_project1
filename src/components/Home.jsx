import { Container } from "@mui/material";
import { banner } from "../assets";

export default function Home() {
  return (
    <main>
      <section className="banner-wrapper">
        <Container>
          <img src={banner} alt="" />
        </Container>
      </section>
    </main>
  );
}
