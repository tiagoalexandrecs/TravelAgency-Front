import styled from 'styled-components';
import { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate , Link, useParams} from "react-router-dom";

export default function FlightDetails(){

    const [details, setDetails]= useState([])

    const {id}= useParams()

    useEffect(() => {
        axios
          .get(`${process.env.REACT_APP_API_URL}/flights/${id}`)
          .then((res) => setDetails(res.data))
          .catch((err) => console.log(err.response.data));
      }, []);

    return (
        <Container>
            <Header>
                <div><h1>Viagens Alucinantes</h1></div>
                <Return><Link to={`/flights/${details[0].origin}`}><h1>VOLTAR</h1></Link></Return>
            </Header>
            <Info>
                <Text>Passagem para {details[0].destiny}</Text>
                <Details>
                    <Text2>Cidade de Destino: {details[0].destiny}</Text2>
                    <Text2>Cidade de Partida: {details[0].origin}</Text2>
                    <Text2>Companhia Aérea:{details[0].company}</Text2>
                    <Text2>Horário de partida: {details[0].takeoff}</Text2>
                    <Text2>Horário de chegada: {details[0].arrival}</Text2>
                    <Text2>Preço da Passagem: {details[0].price}</Text2>
                </Details>
            </Info>
        </Container>
    )
}

const Header= styled.header `
width: 100vw;
  height: 70px;
  position: fixed;
  background: #ffffff;
  left: 0;
  top: 0;
  display: flex;
  justify-content: left;
  align-items: center;
  z-index: 1;
  div {
    weight: 100%;
    display: flex;
    align-items: center;
    a {
      text-decoration: none;
    }
    a:visited {
      color: inherit;
    }
    h1 {
      font-family: 'Architects Daughter', cursive;
      font-size: 40px;
      font-weight: 700;
      color: #6cc4b1;
      text-align: center;
    }
  }`;

  const Container= styled.div `
background-color: lightblue;
display: flex;
flex-direction: column;
justify-content:center;
align-items: center;`;

const Info= styled.div `
display: flex;
flex-direction:column;
justify-content:center;
align-items:center;
`;

const Text= styled.div `
margin-top: 100px;
margin-bottom: 50px;`;

const Details= styled.div `
display:flex;
flex-direction: column;
justify-content: space-between;
`;

const Return= styled.div `
margin-left: 60%;`

const Text2= styled.div `
`