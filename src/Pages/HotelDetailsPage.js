import styled from 'styled-components';
import { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate , Link, useParams} from "react-router-dom";
import detail1 from "./images/gabrielle-maurer-Q48pAVVON0o-unsplash.jpg"
import detail2 from "./images/hans-vivek-RvfBEtCdYdA-unsplash.jpg"
import detail3 from "./images/kirill-x_VOtnVJeGE-unsplash.jpg"
import detail4 from "./images/louis-hansel-wVoP_Q2Bg_A-unsplash.jpg"
import detail5 from "./images/masaaki-komori-iMbXscxYIFE-unsplash.jpg"
import detail6 from "./images/paul-szewczyk-X2ef9uxU23E-unsplash.jpg"
import detail7 from "./images/praveen-thirumurugan-nx05CDCrfzM-unsplash.jpg"
import detail8 from "./images/katarzyna-pracuch-mglHaz5PjLg-unsplash.jpg"
import detail9 from "./images/beazy-NDYJ1tjOuXI-unsplash.jpg"
import detail10 from "./images/francesca-saraco-_dS27XGgRyQ-unsplash.jpg"
import detail11 from "./images/mateo-fernandez-XTC538P_eWk-unsplash.jpg"
import detail12 from "./images/jonathan-borba-00fCk2lZn1c-unsplash.jpg"

export default function  HotelDetails(){

    let images=[detail1, detail2, detail3, detail4, detail5, detail6, detail7, detail8, detail9, detail10, detail11, detail12]

    const {id}= useParams()

    const [details, setDetails]= useState([])

    function getRandomItem(arr) {

      const randomIndex = Math.floor(Math.random() * arr.length);
  
      const item = arr[randomIndex];
  
      return item;
  }
  

    useEffect(() => {
        axios
          .get(`https://travelagency.onrender.com/hotel/${id}`)
          .then((res) => {setDetails(res.data);
            console.log(res.data)})
          .catch((err) => console.log(err.response.data));
      }, []);

    return(
        <Container>
            <Header>
                  <div><h1>Viagens Alucinantes</h1></div>
                  <Return><Link to={`/hotels/${details[1]?.rows[0].id}`}><h2>VOLTAR</h2></Link></Return>
            </Header>
            <Text>{details[0]?.name}</Text>
            <Images>
                <Box1><img src={getRandomItem(images)}/> </Box1>
                <Box><img src={getRandomItem(images)}/> </Box>
                <Box><img src={getRandomItem(images)}/> </Box>
                <Box><img src={getRandomItem(images)}/> </Box>
                <Box><img src={getRandomItem(images)}/> </Box>
                <Box><img src={getRandomItem(images)}/> </Box>
            </Images>
            <Details>
                <Container2><Text2>Características:</Text2>
                <ul>{details[0]?.characteristics?.map((i) => <Li>{i}</Li>)}</ul></Container2>
                <Container2><Text2>Comodidades:</Text2>
                <ul>{details[0]?.commodities?.map((i) => <Li>{i}</Li>)}</ul></Container2>
            </Details>
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
height: 80vw;
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
margin-bottom: 30px;
font-family: 'Architects Daughter', cursive;
 font-weight: 700;
 font-size: 40px;
 color: white;`;

const Details= styled.div `
display:flex;
flex-direction: row;
justify-content: space-evenly;
margin-top:50px;
width:90vw;
margin-right:30px;
`;

const Return= styled.div `
margin-left: 100px;`

const Text2= styled.div `
margin-bottom: 5px;
font-family: 'Architects Daughter', cursive;
 font-weight: 700;
 font-size: 40px;
 color: black;`;

const Container2= styled.div `
margin-top: 20px;
height: 300px;
width: 350px;
border-radius: 8px;
box-shadow: 10px 10px 5px lightblue;
background: white;
margin-left:20px;`;

const Images= styled.div`
overflow-x: scroll;
display: flex;
align-items:center;
justify-content: center;
width:90vw;
height: 300px;
background:white;
border-radius: 8px;
box-shadow: 10px 10px 5px lightblue;`;

const Box= styled.div `
height:250px;
width:200px;
margin-top:100px;
img{
    height:200px;
    width:200px;
    border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
  margin-right: 10px;
  margin-bottom: 10px;
};
margin-bottom:110px;
margin-left:50px;`;

const Li= styled.li `
font-family: 'Architects Daughter', cursive;
 font-weight: 400;
 color: black;
 font-size: 20px;
`;

const Box1= styled.div `
height:250px;
width:200px;
margin-top:100px;
img{
    height:200px;
    width:200px;
    border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
  margin-right: 10px;
  margin-bottom: 10px;
};
margin-bottom:110px;
margin-left:300px;`;




