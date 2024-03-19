import styled from "styled-components";

export const CardsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  margin: 2rem auto;
`;

export const Card = styled.div`
  width: 100%;
  background-color: var(--bg-card);
  color: #000;
  border-radius: 0.25rem;
  text-align: center;
  padding: 1rem;
  box-sizing: border-box;

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
  height: 188px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const Button = styled.button`
  width: 100%;
  max-width: 400px;
  border: none;
  border-radius: 0.25rem;
  background-color: var(--primary-color);
  color: #ffffff;
  padding: 1rem;
  margin: auto;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  transition: all 0.3s linear;
  cursor: pointer;

  &:hover {
    background-color: #0073a1;
  }

  figure {
    display: flex;
    gap: 0.5rem;
    font-weight: 400;
  }
`;
