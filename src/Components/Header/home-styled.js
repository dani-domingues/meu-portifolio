import styled from 'styled-components';

export const StyledHeader = styled.div`
  background-color: #A6A6A6;
  align-items: center;
  padding: 1px;
  width: 100%; 
  height: 55px;
  border-bottom: 3.5px solid black;

  ul {
    display: flex;
  }

  li {
    list-style: none;
    margin-left: 40px;
    margin-top: 0px; /* corrigido aqui */
    text-decoration: none;
    color: black;
    font-size: 20px;
    font-weight: bold;
  }
`;

