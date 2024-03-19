import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #ffffff;
`;

export const Logo = styled.img`
  cursor: pointer;
`;

export const Cart = styled.div`
  a {
    display: flex;
    gap: 2rem;
    align-items: center;
    text-align: right;
  }

  h5 {
    font-size: 1rem;
    font-weight: 600;
  }

  @media (max-width: 600px) {
    a {
      gap: 1rem;
    }

    h5 {
      display: none;
    }
  }
`;

export const Itens = styled.p`
  font-size: 0.8rem;
  font-weight: 200;
  color: var(--text-gray-light);
`;
