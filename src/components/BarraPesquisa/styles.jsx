import styled from 'styled-components';

export const Barra = styled.div`
    width:100%;
    height:40px;
    background: #fff;
    padding:5px;
    border-radius: 10px;
`;

export const Search = styled.div`
  width:100%;
  height:40px;
  margin: 0 auto;
  text-align: center;
  input{
      width:40%;
      padding: 10px 20px;
      border-radius: 5px;
  }
  input:focus{
      border: 0.5px solid #7159c1;
      border-radius: 5px;
  }
`;