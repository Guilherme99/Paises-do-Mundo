import styled from 'styled-components';

export const Header = styled.div`
    max-width: 85%;
    width: 100%;
    margin: 0 auto;
    background: #88B0E394;
    display:flex;
    padding:1%;
    border-radius: 20px;

    h1{
        color: #fff;
        font-size: 25px;
        font-weight:bold;

    }
`;
export const Paises = styled.div`
    max-width: 85%;
    width: 100%;
    margin: 2% auto;
    background: #88B0E394;
    padding:1%;
    display:flex;
    flex-wrap:wrap;
    flex-direction: row;
    justify-content:center;
    border-radius: 20px;
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
    text-align:center;
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
 