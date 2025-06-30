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
  gap: 2rem;

  h2 {
    font-size: 2.25rem;
    font-family: "Krona One", sans-serif;
  }

  p {
    font-family: "Montserrat", sans-serif;
    font-size: 1.5rem;
  }
`;