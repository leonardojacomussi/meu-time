import { NextPage } from "next";
import Image from "next/image";
import soccerImg from "../../../public/assets/soccer.svg";
import { Container, Header, Content } from "./styles";

const Home: NextPage = (): JSX.Element => {
  return (
    <Container>
      <Header>
        <h1>Meu time</h1>
        <div className="soccer">
          <Image
            src={soccerImg}
            alt="Desenho de um jogador de futebol"
            width={143}
            height={85}
          />
        </div>
      </Header>
      <Content>
        <h1>Content</h1>
      </Content>
    </Container>
  );
};

export default Home;