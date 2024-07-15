import React from "react";
import Header from "../Components/Header";
import minhaImagem1 from '../assets/minhaImagem1.jpeg';
import { StyledHome } from "./home-styled";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div className="Home">
      <Header squareSize={{ md:200, sm:100, xs:50}}></Header>
      <StyledHome>
    <div>
      <h1>Hello World!!</h1>
      <p>Sou uma desenvolvedora fullstack, estou em uma jornada para aprimorar minhas habilidades na arte da programação, sempre com muita dedicação e com muita criatividade.</p>
    </div>
    <div>
    <img src={minhaImagem1} alt="Descrição da imagem" />
    </div>
    <Footer></Footer>
    </StyledHome>
    </div>
  );
}

export default Home;