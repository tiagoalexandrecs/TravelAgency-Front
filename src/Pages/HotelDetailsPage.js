import styled from 'styled-components';
import { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate , Link, useParams} from "react-router-dom";

export default function  HotelDetails(){

    const {id}= useParams()

    const [details, setDetails]= useState([])

    useEffect(() => {
        axios
          .get(`${process.env.REACT_APP_API_URL}/hotels/${id}`)
          .then((res) => setDetails(res.data))
          .catch((err) => console.log(err.response.data));
      }, []);

    return(
        <Container>
            <Header>
                  <div><h1>Viagens Alucinantes</h1></div>
                  <Return><Link to={`/hotels/${details[0].city}`}><h1>VOLTAR</h1></Link></Return>
            </Header>
            <Name>{details[0].name}</Name>
            <Images>
                <Box></Box>
            </Images>
            <Details>
                <Container2><Text>Características</Text>
                <ul>{details[0].characteristics?.map((i) => <li>{i}</li>)}</ul></Container2>
                <Container2><Text>Comodidades</Text>
                <ul>{details[0].commodities?.map((i) => <li>{i}</li>)}</ul></Container2>
            </Details>
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

const Name= styled.div `
width: 100%;
height: 100px;
margin-top:20px;
margin-bottom:20px;`;

const Images= styled.div `
width:100%;
height: 300px;
overflow-x: scroll;
display: flex;
flex-direction: row;
margin-bottom: 50px;
`;

const Box= styled.div `
height:150px;
width:75px;
img{
    height:150px;
    width:75px;
}`

const Details= styled.div `
display:flex;
flex-direction:row;
justify-content: space-between;
align-items: center;`;

const Container2= styled.div `
background: white;`

const Return= styled.div `
margin-left: 60%;`

const Text= styled.div `
`
