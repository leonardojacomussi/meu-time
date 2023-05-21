import { NextPage } from "next";
import { useState } from "react";
import Image from "next/image";
import soccerImg from "../../../public/assets/soccer.svg";
import { Container, Header, Content } from "./styles";
import HStepper from "@/components/HStepper";
import { DataProps } from "@/interfaces";

const Home: NextPage = (): JSX.Element => {
  const [data, setData] = useState<DataProps>({
    country: {
      name: "Selecione um país",
      code: "",
      flag: "",
    },
    league: {
      id: 0,
      type: "",
      name: "",
      logo: "",
    },
    season: "",
    club: "",
    api: "",
  });

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
        <HStepper data={data} setData={setData}/>
      </Content>
    </Container>
  );
};

export default Home;