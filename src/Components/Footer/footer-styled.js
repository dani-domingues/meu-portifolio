import styled from 'styled-components';

export const StyledFooter = styled.div`
    background-color: #A6A6A6;
    padding: 0px;
    width: 100%; 
    height: 55px;
    border-top: 3.5px solid black;
    margin-top: 70px;
    display: flex;
    flexDirection: row;

  div.button-container{
    margin-left: 450px;
  }
  div.button-container{
    margin-top: -25px;
    margin-left: 390px;
  }
  
  button{
      width: 190px; 
      height: 60px;
      background-color: #A6A6A6;
      text-decoration: none;
      color: black;
      font-size: 20px;
      font-weight: bold;
  
  }
  button.button-1 {
      border: 3.5px solid black;
      border-right: 1px solid black;
  }
  button.button-2 {
      border: 3px solid black;
  }
  button.button-3 {
      border: 3.5px solid black;
      border-left: 1px solid black;
  }

`