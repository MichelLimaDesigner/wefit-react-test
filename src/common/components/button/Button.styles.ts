import styled from "styled-components";

interface IBtn {
  isAdded?: boolean;
}

export const Btn = styled.div<IBtn>`
  width: 100%;

  button {
    width: 100%;
    max-width: 400px;
    min-width: 200px;
    border: none;
    border-radius: 0.25rem;
    background-color: var(--primary-color);
    color: #ffffff;
    padding: 1rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    transition: all 0.3s linear;
    cursor: pointer;
  }

  &.center {
    button {
      margin: auto;
    }
  }

  &.margin-t-2 {
    margin-top: 2rem;
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

  div {
    display: flex;
    gap: 0.5rem;
    font-weight: 400;

    img {
      width: 1rem;
      height: 1rem;
    }
  }
`;
