import styled from "styled-components";

export const MainSection = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2% 15%;
  color: #f6f6f6;
`;

export const Section = styled.section`
  width: 55%;
  display: flex;
  flex-direction: column;
  gap: 5rem;

  h1 {
    font-size: 2.25rem;
    font-family: "Krona One", sans-serif;

    strong {
      color: #22d4fd;
    }
  }

  p {
    font-size: 1.5rem;
    text-align: justify;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;

    strong {
      color: #22d4fd;
    }
  }
`;

export const SocialMediaLinks = styled.nav`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  h2 {
    font-family: "Krona One", sans-serif;
    font-size: 1.5rem;
  }

  a {
    font-family: "Montserrat", sans-serif;
    text-decoration: none;
    border: 2px solid #22d4fd;
    border-radius: 8px;
    padding: 1rem;
    width: 60%;
    color: #fff;
    font-weight: 600;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    &:hover {
      background-color: #272727;
    }
  }

  .media-icon{
    color: #22d4fd;
  }
`;