import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  cursor: pointer;
`;

export const Cart = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  text-align: right;

  h5 {
    font-size: 1rem;
    font-weight: 600;
  }
`;

export const Itens = styled.p`
  font-size: 0.8rem;
  font-weight: 200;
  color: var(--text-gray-light);
`;
