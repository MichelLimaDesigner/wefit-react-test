import styled from "styled-components";

export const CartContent = styled.div`
  width: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  margin: 2rem 0;
  padding: 2rem;
  box-sizing: border-box;
`;

export const ContentHeader = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 1fr;
  font-weight: 700;
  color: var(--text-gray-light);
  margin-bottom: 2rem;
`;

export const Item = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 1fr;
  align-items: center;
  margin-bottom: 2rem;
`;

export const ItemHeader = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  align-items: center;

  h3,
  h4 {
    font-size: 1rem;
    font-weight: 700;
    margin: 0.5rem 0;
  }
`;

export const ItemImage = styled.div`
  width: 95px;
  height: 130px;
  overflow: hidden;

  img {
    width: 100%;
  }
`;

export const ItemQtdInput = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: start;

  input {
    max-width: 3rem;
    border: 1px solid #d9d9d9;
    border-radius: 0.25rem;
    padding: 0.25rem 1rem;
    text-align: center;
  }
`;

export const ItemPrice = styled.h5`
  font-weight: 700;
  font-size: 1rem;
`;

export const TotalPrice = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;

  h3 {
    font-weight: 700;
    font-size: 1.5rem;
  }

  h4 {
    font-weight: 700;
    font-size: 1rem;
    color: var(--text-gray-light);
  }
`;

export const ContentFooter = styled.div`
  width: 100%;
  border-top: 1px solid #999999;
  margin-top: 1rem;
  padding-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Purchased = styled.div`
  width: 100%;
  height: 80vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  margin: 2rem 0;
  padding: 1rem;
  box-sizing: border-box;
`;
