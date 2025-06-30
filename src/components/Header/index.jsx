import * as S from "./styles.js";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <S.Header>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/About"}>About</Link>
      </nav>
    </S.Header>
  );
}


