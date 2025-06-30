import * as S from "./styles.js";
import Header from "../../components/Header/index.jsx";
import FotoJoanaSantos from "../../assets/foto-joana-santos.png";

import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";

import Footer from "../../components/Footer/index.jsx";

function Home(){
    return (
      <>
        <Header />

        <S.MainSection>
          <S.Section>
            <h1>
              Eleve seu negócio digital a outro nível{" "}
              <strong>com um Front-end de qualidade!</strong>
            </h1>

            <p>
              Olá! Sou Joana Santos, desenvolvedora Front-end com especialidade
              em <strong>React</strong>, <strong>HTML</strong> e{" "}
              <strong>CSS</strong>. Ajudo pequenos negócios e designers a
              colocarem em prática boas ideias. Vamos conversar?
            </p>

            <S.SocialMediaLinks>
              <h2>Acesse minhas redes:</h2>

              <a href="#">
                <FaGithub className="icon" />
                Github
              </a>

              <a href="#">
                <FaLinkedinIn className="icon" />
                Linkedin
              </a>

              <a href="#">
                <FaTwitch className="icon" />
                Twitch
              </a>
            </S.SocialMediaLinks>
          </S.Section>

          <img
            src={FotoJoanaSantos}
            alt="Foto Da Desenvolvedora Joana Santos"
          />
        </S.MainSection>

        <Footer />
      </>
    );
}

export default Home;