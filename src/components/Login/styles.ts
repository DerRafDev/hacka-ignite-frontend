import styled from "styled-components";

export const RetangleBlue = styled.div`
width: 863px;
height: 540px;

background: var(--blue-light);
box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.25);
`;

export const RetangleWhite = styled.div`
width: 863px;
height: 540px;
background-color: var(--white);
box-shadow: 6px 0px 12px rgba(0, 0, 0, 0.12);

margin: -15px 0 0 -19px;
`;

export const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
export const InputSpace = styled.div`
margin-top: 12px;
margin-bottom: 14px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const Input = styled.input`
margin-bottom: 12px;
width: 365px;
height: 60px;
left: calc(50% - 365px / 2 + 2.5px);
top: calc(50% - 60px / 2 + 62px);
background: var(--white);

border: 1.5px solid #dcdce6;
box-sizing: border-box;
border-radius: 8px;

font-family: Roboto;
font-style: normal;
font-weight: 400;
font-size: 18px;

color: var(--text-component);

padding-left: 47px;
`;

export const Button = styled.button`
width: 365px;
height: 59px;
left: 540px;
top: 534px;

font-family: Roboto;
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 21px;
text-align: center;

color: #f0f0f5;
background: var(--blue-light);
border-radius: 8px;
margin-bottom: 12px;
border: none;

transition: filter 0.2s;
&:hover {
  filter: brightness(0.93);
}
`;

export const DivRegister = styled.a`
margin-right: 36.4px;
margin-top: 12px;
text-decoration: none;
color: var(--blue-light);

font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 16px;

transition: filter 0.2s;
&:hover {
  filter: brightness(0.9);
}
`;
