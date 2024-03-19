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

  @media (max-width: 700px) {
    display: none;
  }
`;

export const Item = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 1fr;
  align-items: center;
  margin-bottom: 2rem;
  position: relative;

  @media (max-width: 600px) {
    display: none;
  }
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

  @media (max-width: 600px) {
    input {
      width: 1.5rem;
    }
  }
`;

export const ItemPrice = styled.h5`
  font-weight: 700;
  font-size: 1rem;

  @media (max-width: 600px) {
    display: none;

    &.mobile {
      display: block;
    }
  }
`;

export const TotalPrice = styled.div`
  width: 100%;
  display: flex;
  gap: 1.5rem;
  align-items: center;
  justify-content: end;

  h3 {
    font-weight: 700;
    font-size: 1.5rem;
  }

  h4 {
    font-weight: 700;
    font-size: 1rem;
    color: var(--text-gray-light);
  }

  @media (max-width: 600px) {
    justify-content: space-between;
    font-size: 0.8rem;
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

  @media (max-width: 600px) {
    flex-direction: column-reverse;
    gap: 1rem;
  }
`;

export const ItemMobile = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 4fr;
  gap: 1rem;
  align-items: center;
  margin-bottom: 2rem;
  position: relative;

  @media (min-width: 600px) {
    display: none;
  }
`;

export const ItemImgMobile = styled.div`
  width: 64px;

  img {
    width: 100%;
  }
`;

export const ItemMobileBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ItemHeaderMobile = styled.div`
  width: 100%;
  display: flex;
  align-self: center;
  justify-content: space-between;
  font-size: 0.8rem;
`;

export const ItemInputMobile = styled.div`
  width: 100%;
  display: flex;
  align-self: center;
  justify-content: space-between;

  p {
    font-size: 0.8rem;
    color: var(--text-gray-light);
  }
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
