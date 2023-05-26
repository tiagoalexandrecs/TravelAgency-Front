import styled from 'styled-components';
import { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function HomePage(){

    const navigate= useNavigate()

    const [cities, setCities]= useState([])
    const [chosen, setChosen]= useState("")

    useEffect(() => {
        axios
          .get(`${process.env.REACT_APP_API_URL}/cities`)
          .then((res) => setCities(res.data))
          .catch((err) => console.log(err.response.data));
      }, []);

    function Procede(){
        navigate(`/flights/${chosen}`)
    }

      return(
        <Container>
        <Header>
            <div><h1>Viagens Alucinantes</h1></div>
        </Header>
        <form onSubmit={Procede}>
          <Input1 list="browsers" name="browser" value={chosen} onChange={e => setChosen(e.target.value)}/>
          <datalist id="browsers">
            {cities?.map((i) => <option value={i}>{i}</option>)}
          </datalist>
          <Input2 type="submit"/>
        </form>
        <Box>
            <Picture1> 1. Escolha a cidade que deseja visitar</Picture1>
            <Picture2> 2. Veja as passagens disponíveis, com preço e data</Picture2>
            <Picture3> 3. E por fim, busque pelos hóteis disponíveis, e monte seu plano de viagem ideal!</Picture3>
        </Box>
        </Container> )
        

}

const Container= styled.div `
background-color: lightblue;
display: flex;
flex-direction: column;
justify-contenter:center;
align-items: center;`;

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
      font-size: 40px;
      font-weight: 700;
      color: #6cc4b1;
      text-align: center;
    }
  }`;

  const Input1= styled.input `
  background-color: white;
  color: black;
  width: 50%;
  height: 50px;
  margin-top: 100px;
  `

  const Input2= styled.input `
  background-color: lightgreen;
  color: white;
  width: 50%;
  height: 50px;
  margin-bottom: 200px;
  `;

  const Box= styled.div `
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items: center;
  `

  const Picture1= styled.div `
  background-image: url("./images/cidade.jpeg");
  height: 300px;
  width: 150px;
  margin-right: 80px; `;

  const Picture2= styled.div `
  background-image: url("./images/aviao.jpg");
  color: white;
  height: 300px;
  width: 150px;
  margin-right: 80px;`

  const Picture3= styled.div `
  background-image: url("./images/hotel.jpg");
  color: white;
  height: 300px;
  width: 150px;
  margin-right: 80px; `