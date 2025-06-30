import styled from "styled-components";

export const Header = styled.header`
  padding: 2% 15%;
  display: flex;

  nav {
    font-family: "Montserrat", sans-serif;
    display: flex;
    gap: 5rem;

    a{
        text-decoration: none;
        color: #22d4fd;
        font-size: 1.5rem;
        font-weight: 600;
    }
  }
`;