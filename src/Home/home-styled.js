import styled from 'styled-components';

export const StyledHome = styled.div`

    h1{
        margin-top: 250px;
        margin-left: 120px;
        font-size: 70px;

    }

    p{
        width:730px;
        align: center;  
        margin-left: 120px;
        margin-top: -40px;
        font-size: 20px;

    }

    img{
        width: 450px;
        height: 450px;
        flex-shrink: 0; /* Não encolhe para caber o conteúdo */
        margin-left: 870px; /* Adicione uma margem para separar o texto da imagem */
        margin-top: -320px;
        border-radius:50%;
    }
`;