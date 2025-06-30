import * as S from "./styles.js";
import Header from "../../components/Header/index.jsx";
import FotoJoanaSantos from "../../assets/foto-joana-santos.png";

import Footer from "../../components/Footer/index.jsx";


export default function About() {
  return (
    <>
      <Header />

      <S.MainSection>
        <S.Section>
          <h2>Sobre mim</h2>

          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga.
          </p>

          <p>
            Et harum quidem rerum facilis est et expedita distinctio. Nam libero
            tempore, cum soluta nobis est eligendi optio cumque nihil impedit
            quo minus id quod maxime placeat facere possimus, omnis voluptas
            assumenda est, omnis dolor repellendus. Temporibus autem quibusdam
            et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et
            voluptates repudiandae sint et molestiae non recusandae. Itaque
            earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
            voluptatibus maiores alias consequatur aut perferendis doloribus
            asperiores ipsum delis forum birol parela maxime infena. Excepteur
            sint occaecat cupidatat non.
          </p>
        </S.Section>

        <img src={FotoJoanaSantos} alt="Foto Da Desenvolvedora Joana Santos" />
      </S.MainSection>

      <Footer />
    </>
  );
}
