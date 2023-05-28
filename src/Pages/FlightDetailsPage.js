import styled from 'styled-components';
import { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate , Link, useParams} from "react-router-dom";

export default function FlightDetails(){

    const [details, setDetails]= useState({})

    const {id}= useParams()

    useEffect(() => {
        axios
          .get(`https://travelagency.onrender.com/flight/${id}`)
          .then((res) => {setDetails(res.data); console.log(res.data)})
          .catch((err) => console.log(err.message));
      }, []);

    return (
        <Container>
            <Header>
                <div><h1>Viagens Alucinantes</h1></div>
                <Return><Link to={`/flights/${details[1]?.rows[0].id}`}><h2>VOLTAR</h2></Link></Return>
            </Header>
            <Info>
                <Text>Passagem para {details[0]?.destiny}</Text>
                <Details>
                  <Container2><Text2>Cidade de Destino:          {details[0]?.destiny}</Text2></Container2>
                  <Container2><Text2>Cidade de Partida:          {details[0]?.origin}</Text2></Container2>
                  <Container2><Text2>Companhia Aérea:            {details[0]?.company}</Text2></Container2>
                  <Container2><Text2>Horário de partida:         {details[0]?.takeoff}</Text2></Container2>
                  <Container2><Text2>Horário de chegada:         {details[0]?.arrival}</Text2></Container2>
                  <Container2>  <Text2>Preço da Passagem:          {details[0]?.price}</Text2></Container2>
                </Details>
            </Info>
        </Container>
    )
}

const Header= styled.header `
width: 100vw;
  height: 70px;
  position: fixed;
  background: #ffdf00;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
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
      font-size: 40px;
      font-family: 'Architects Daughter', cursive;
      font-weight: 700;
      color: #009c3b;
      text-align: center;
      margin-left:370px;
    }
    h2{
      font-size: 20px;
      font-family: 'Architects Daughter', cursive;
      font-weight: 700;
      color: #009c3b;
      text-align: center;
      margin-left:200px;
    }
  }`;

  const Container= styled.div `
background-color: #002776;
height: 800px;
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
margin-bottom: 5px;
font-family: 'Architects Daughter', cursive;
 font-weight: 700;
 font-size: 40px;
 color: white;`;

const Details= styled.div `
display:flex;
flex-direction: column;
justify-content: space-between;
`;

const Return= styled.div `
margin-left: 100px;`

const Text2= styled.div `
font-family: 'Architects Daughter', cursive;
 font-weight: 700;
 color: black;
 font-size: 35px;
 margin-left: 30px;
`;

const Container2= styled.div `
margin-top: 20px;
width: 800px;
border-radius: 8px;
box-shadow: 10px 10px 5px lightblue;
background: white;`