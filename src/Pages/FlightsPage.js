import styled from 'styled-components';
import { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate , Link, useParams} from "react-router-dom";

export default function FlightsPage(){

    const [available, setAvailable]= useState([])

    const navigate= useNavigate()

    const {cityId}= useParams()

    useEffect(() => {
      console.log(city)
        axios
          .get(`https://travelagency.onrender.com/cities/flights/${cityId}`)
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
    }
  }`;

  const Container= styled.div `
  background-color: #002776;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;`;

const Container2= styled.div `
display:flex;
flex-direction:row;
align-items: top;
margin-top:62px;
`

const Filters= styled.div `
height: 600px;
width: 300px;
background-color: lightblue;
z-index:1;
margin-right: 730px;`;

const Flights= styled.div `

display:flex;
flex-direction: column;
`;

const Text= styled.div `

font-family: 'Architects Daughter', cursive;
font-size: 20px;
color: white;
`;

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

