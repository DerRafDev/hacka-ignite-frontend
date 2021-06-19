import styled from "styled-components";

export const DivHeader = styled.div`
  margin: 0 auto;
  padding-left: 163px;
  padding-right: 161px;

  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

export const NavButtons = styled.nav`
  margin-left: 226px;
`;

export const ButtonGerenciamento = styled.button`
  width: 164px;
  height: 59px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  text-align: center;

  color: #f0f0f5;
  background: var(--blue-light);
  border-radius: 8px;
  margin-right: 18px;
  border: none;

  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.93);
    cursor: pointer;
  }
`;

export const ButtonCadastrar = styled.button`
  width: 271px;
  height: 60px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  text-align: center;

  color: #f0f0f5;
  background: var(--blue-light);
  border-radius: 8px;
  margin-right: 24px;
  border: none;

  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.93);
  }
`;

export const ButtonSair = styled.button`
  width: 60px;
  height: 60px;

  /* Linha Inputs */
  background: var(--background);
  border: 1.5px solid #dcdce6;
  box-sizing: border-box;
  border-radius: 8px;

  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.93);
  }
`;
