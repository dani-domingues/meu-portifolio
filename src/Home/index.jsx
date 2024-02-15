import React from "react";
import Header from "../Components/Header";
import minhaImagem1 from '../assets/minhaImagem1.jpeg';
import { StyledHome } from "./home-styled";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div>
    <Header> </Header>
    <StyledHome>
    <h1>Hello World!!</h1>
    <p>Sou uma desenvolvedora fullstack, estou em uma jornada para aprimorar minhas habilidades na arte da programação, sempre com muita dedicação e com muita criatividade.</p>
    <img src={minhaImagem1} alt="Descrição da imagem" />
    </StyledHome>


    <Footer></Footer>
    </div>
  );
}

export default Home;