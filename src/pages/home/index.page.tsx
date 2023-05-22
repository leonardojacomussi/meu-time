import { NextPage, GetServerSidePropsContext } from "next";
import { useState } from "react";
import Image from "next/image";
import soccerImg from "../../../public/assets/soccer.svg";
import { Container, Header, Content } from "./styles";
import HStepper from "@/components/HStepper";
import { DataType } from "@/interfaces";
import defaultData from "@/mock/data";

const Home: NextPage<{ apiKey: string }> = ({ apiKey }): JSX.Element => {
  const [data, setData] = useState<DataType>({...defaultData});

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
        <HStepper data={data} setData={setData} apiKey={apiKey}/>
      </Content>
    </Container>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext): Promise<{ props: { apiKey: string } }> => {
  const apiKey = ctx.req.cookies["meu-time-api-key"];
  if (!apiKey || typeof apiKey !== "string") {
    const { res } = ctx;
    res.setHeader("location", "/?error=invalid_api_key");
    res.statusCode = 302;
    res.end();
    return {
      props: {
        apiKey: "INVALID",
      },
    };
  };
  return {
    props: {
      apiKey: apiKey,
    },
  };
};


export default Home;