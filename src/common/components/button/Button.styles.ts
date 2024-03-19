import styled from "styled-components";

interface BtnProps {
  isAdded?: boolean;
}

export const Btn = styled.div<BtnProps>`
  button {
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
  }

  &.active {
    button {
      background-color: var(--secondary-color);
    }

    &:hover {
      button {
        background-color: var(--secondary-color);
      }
    }
  }

  &:hover {
    button {
      background-color: var(--bg-btn-hover);
    }
  }

  figure {
    display: flex;
    gap: 0.5rem;
    font-weight: 400;
  }
`;
