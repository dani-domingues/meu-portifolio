import styled from 'styled-components';

export const StyledHome = styled.div`
margin-top: -70px;
width:100%;
height: 100%;

h1 {
    margin-top: 250px;
    margin-left: 100px;
    font-size: 70px;
}

p {
    width: 730px;
    text-align: left; /* Centraliza horizontalmente */
    margin-left: 100px;
    margin-top: -40px;
    font-size: 20px;
}

img {
    width: 450px;
    height: 450px;
    flex-shrink: 0;
    margin-left: 880px;
    margin-top: -280px;
    border-radius: 50%;
}


@media only screen and (min-width: 768px) {
    /* Media query para dispositivos maiores */
    h1 {
        margin-top: 250px; /* Restaura a margem para dispositivos maiores */
        margin-left: 100px;
        font-size: 70px;
    }

    p {
        width: 730px;
        margin-left: 100px;
        margin-top: -40px;
        font-size: 20px;
    }

    img {
        margin-left: 880px;
        margin-top: -280px;
    }
}

`
