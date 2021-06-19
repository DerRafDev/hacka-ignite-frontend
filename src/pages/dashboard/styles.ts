import styled from "styled-components";

export const Container = styled.main`
  height: calc(100vh - 150px);
  overflow: hidden;
  /* max-width: 1120px;
  padding-left: 157px;
  padding-right: 161px;
  padding-top: 46.19px; */

  max-width: 1120px;
  margin: 0 auto;
  padding-top: 42.16px;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const ViewCardsWarnings = styled.div`
  overflow-y: scroll;
  height: calc(100vh - 150px);
  ::-webkit-scrollbar {
    display: none;
  }

  h1 {
    font-family: Roboto;
    font-weight: 500;
    font-size: 36px;
    margin-bottom: 45px;
    color: #13131A;
  }
`;

export const Card = styled.div`
  width: 736px;
  background: #fff;
  border-radius: 8px;
  margin-bottom: 24px;

  .top {
    display: flex;
    justify-content: space-between;
    padding: 51px;

    h4 {
      font-size: 24px;
      color: #32264D;
      font-weight: 700;
    }

    h5 {
      color: #90CAF9;
      font-size: 20px;
      font-weight: 700;

      span {
        font-size: 14px;
        color: #9C98A6;
        margin-right: 5px;
        font-weight: 400;
      }
      /* font-family: Archivo; */
    }
  }

  p {
    padding: 0 51px;
    font-family: Poppins;
    color: #6A6180;
    font-size: 16px;
    font-weight: 400;
    padding-bottom: 110px;
  }

  .BottomContact {
    height: 120px;
    background: #FAFAFC;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;
    /* padding: 51px; */

    span {
      margin-right: 32px;

      font-family: Poppins;
      font-weight: 400;
      font-size: 14px;
      color: #9C98A6;
    }

    h3 {
      font-weight: 700;
      font-size: 20px;
      color: #90CAF9;
    }
  }
`;

export const ButtonCheckAndClose = styled.button`
  width: 164px;
  height: 56px;
  border-radius: 8px;
  border: none;
  background: #90CAF9;
  color: #fff;

  font-weight: 600;
  font-family: Roboto;
  font-size: 16px;
  margin: 0 37px 0 45px;

  transition: 0.2s;

  &:hover {
    cursor: pointer;
  }
`;

export const ButtonWhatsApp = styled.button`
  width: 250px;
  height: 56px;
  background: #04D361;
  border: none;
  border-radius: 8px;
  color: #fff;

  font-size: 16px;
  font-weight: 600;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  &:hover {
    cursor: pointer;
  }

`;

export const ViewSearch = styled.div`
  margin-top: 90px;

  display: flex;
  flex-direction: column;
  select {
    height: 56px;
    width: 235px;
    padding: 10px;
    border-radius: 8px;
    border: #FAFAFC;
    margin-bottom: 10px;
  }

  h4 {
    margin-bottom: 33px;
    font-family: Roboto;
    font-size: 20px;
    font-weight: 400;
  }
  input {
    height: 56px;
    width: 235px;
    padding: 10px;
    border-radius: 8px;
    border: #FAFAFC;
    margin-bottom: 10px;

    font-family: Roboto;
    font-size: 18px;
    font-weight: 400;
  }

  .btn {
    background: #90CAF9;
    color: #fff;
    width: 231px;
    height: 54px;
    border-radius: 8px;
    border: none;
  }

  button:last-child {
    margin-top: 25px;
  }
`
