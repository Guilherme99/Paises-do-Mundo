import styled from 'styled-components';

export const Paises = styled.div`
    max-width: 85%;
    width: 100%;
    margin: 5% auto;
    background: #9781E4;
    padding:10px;
    display:flex;
    flex-wrap:wrap;
    flex-direction: row;
    flex-grow: initial;
    padding:1%;
`;
export const Card = styled.div`
    display:flex;
    flex-direction:column;
    margin: 10px;
    width: 300px;
    height: 350px;
    background: #fff;
    border-radius: 10px;
    overflow: hidden;

    img{
        width:100%;
        height:80%;
    }

    h4{
        color:#439;
        margin-top:5px;
        margin-left: 20px;
    }
`;
 