import styled from 'styled-components';
import { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate , Link, useParams} from "react-router-dom";

export default function FlightsPage(){

    const [available, setAvailable]= useState([])

    const navigate= useNavigate()

    const {city}= useParams()

    useEffect(() => {
        axios
          .get(`${process.env.REACT_APP_API_URL}/flights/${city}`)
          .then((res) => setAvailable(res.data))
          .catch((err) => console.log(err.response.data));
      }, []);

      return(
        <Container>
             <Header>
                 <div><h1>Viagens Alucinantes</h1></div>
                 
             </Header>
             <Container2>
                <Filters></Filters>
                <Flights>
                    <Text>Passagens para {city}</Text>
                    <Images>
                        {available?.map((i) => <Box><Link to={`/flight/${i.id}`}><img src={ i.company === "Latam" ? "src/images/logo_latam.jpg" : 
                        i.company === "Avianca"?  "src/images/avianca.jpg" : 
                        i.company === "Azul"? "src/images/azul.png" :
                        i.company === "Gol"? "src/images/gol.png" : "src/images/voepass.jpg"}></img>
                        </Link><Info></Info></Box>)}
                    </Images>
                </Flights>
             </Container2>

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

const Container2= styled.div `
display:flex;
flex-direction:row;
justify-content:center;
align-items: center;
`

const Filters= styled.div `
height: 100%;
width: 20%;`;

const Flights= styled.div `
height: 100%;
width:80%;
display:flex;
flex-direction: column;
`;

const Text= styled.div `
margin-top: 100px;
margin-bottom: 50px;`;

const Images= styled.div`
overflow: scroll;
display: flex;
flex-direction:column;`;

const Box= styled.div `
height:150px;
width:75px;
img{
    height:90px;
    width:75px;
}`

const Info= styled.div`
height:60px;
width:75px;
background: white;`

