import React from "react";
import Header from "../Components/Header";
import minhaImagem1 from '../assets/minhaImagem1.jpeg';
import { StyledHome } from "./home-styled";

function Home() {
  return (
    <div>
    <Header> </Header>
    <StyledHome>
    <h1>Hello World!!</h1>
    <p>Sou uma desenvolvedora fullstack, estou em uma joranda para aprimorar minhas habilidades na ate da programação, impulsionada pela dedicação e criatividade.</p>
    <img src={minhaImagem1} alt="Descrição da imagem" />
    </StyledHome>
    </div>
  );
}

export default Home;