import styled, { css } from 'styled-components';
import { breakpoints } from '../styles/response';


function responsiveProp(prop, callback) {
  if (prop) {
    return breakpoints.map(breakpoint => {
      if (prop[breakpoint.name]) {
        return css`
          @media (max-width: ${breakpoint.media}px) {
            ${callback(breakpoint)}
          }
        `;
      }
    });
  }
}

export const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -900px;

  div h1 {
    text-align: left; /* Centraliza horizontalmente */
    margin-top: 1070px;
        margin-left: 100px;
  }

  div p {
    width: 730px;
    text-align: left; /* Centraliza horizontalmente */
    margin-left: 100px;
    margin-top: 10px;
    font-size: 20px;
  }

  div img {
    width: 400px;
    height: 400px;
    flex-shrink: 0;
    margin-left: 880px;
    margin-top: -250px;
    border-radius: 50%;
  }

  ${({ squareSize }) => {
    return responsiveProp(squareSize, (breakpoint) => css`
      width: ${squareSize[breakpoint.name]}px;
      height: ${squareSize[breakpoint.name]}px;
    `)
  }}
`;
