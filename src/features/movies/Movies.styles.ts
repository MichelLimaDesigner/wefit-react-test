import styled from "styled-components";

export const CardsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  margin-top: 2rem;
  padding-bottom: 3rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  width: 100%;
  min-width: 250px;
  background-color: var(--bg-card);
  color: #000;
  border-radius: 0.25rem;
  text-align: center;
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;

  button {
    margin: auto;
  }

  h4 {
    font-size: 1rem;
    font-weight: 700;
    margin-top: 0.5rem;
  }

  h5 {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0.5rem 0;
  }
`;

export const CardImg = styled.div`
  width: 100%;
  max-width: 150px;
  height: 188px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin: auto;

  img {
    width: 100%;
  }
`;
