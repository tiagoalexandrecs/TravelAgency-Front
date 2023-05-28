import styled from 'styled-components';
import { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate , Link, useParams} from "react-router-dom";
import hotel1 from "./images/carlos-machado-TmRckxjJoP8-unsplash.jpg"
import hotel2 from "./images/edvin-johansson-rlwE8f8anOc-unsplash.jpg"
import hotel3 from "./images/gerson-repreza-CepDpEiALqM-unsplash.jpg"
import hotel4 from "./images/mauro-lima-TJEKvoz4obQ-unsplash.jpg"
import hotel5 from "./images/oswald-elsaboath-ym_EI-DTS1g-unsplash.jpg"
import hotel6 from "./images/paul-szewczyk-nI4aC1kaTRc-unsplash.jpg"
import hotel7 from "./images/pexels-big-element-16587835.jpg"
import hotel8 from "./images/pexels-boonkong-boonpeng-1134176.jpg"
import hotel9 from "./images/pexels-jakub-zerdzicki-16098043.jpg"
import hotel10 from "./images/pexels-michael-block-3225531.jpg"
import hotel11 from "./images/prateek-katyal-aUe5BHk51mc-unsplash.jpg"
import hotel12 from "./images/rakabtw_-M3YuHIpgmSY-unsplash.jpg"
import hotel13 from "./images/ranjith-alingal-f-MvFZ6-M3U-unsplash.jpg"
import hotel14 from "./images/tuan-nguyen-kHP6Lfd8e_0-unsplash.jpg"
import hotel15 from "./images/vic-alcuaz-MjR15QXwGOs-unsplash.jpg"
import hotel16 from "./images/zheka-boychenko-SIg-ZsJPf5Q-unsplash.jpg"

export default function HotelsPage(){

  function getRandomItem(arr) {

    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex];

    return item;
}

  let images= [hotel1, hotel2, hotel3, hotel4, hotel5, hotel6, hotel7, hotel8, hotel9, hotel10, hotel11, hotel12, hotel13, hotel14, hotel15, hotel16]
  const [available, setAvailable]= useState([])
  const [min, setMin]= useState(0)
  const [max, setMax]= useState(10000)
  const [base, setBase]= useState([])

  const navigate= useNavigate()

  const {cityId}= useParams() 

  let expo=[]
  

  useEffect(() => {
      axios
        .get(`https://travelagency.onrender.com/flights/${cityId}`)
        .then((res) => {
          setAvailable(res.data)
          setBase(res.data)})
        .catch((err) => console.log(err.message));
    }, []);

    function Filter(){
      for(let i=0; i < base.length; i++){
        let item=base[i].price 
        if( item>= min && item <= max){
            expo.push(base[i])
        }
    }
    setAvailable(expo)
  console.log(expo)}

    return(
      <Container>
           <Header>
               <Return><Link to={`/flights/${cityId}`}><h2>VOOS</h2></Link></Return>
               <div><h1>Viagens Alucinantes</h1></div>
           </Header>
           <Container2>
              <Flights>
                  <Text>Hotéis na cidade {available[0]?.city} </Text>
                  <Images>
                      {available?.map((i) => <Box><Link to={`/hotel/${i.id}`}><img src={getRandomItem(images)}/> 
                        </Link><Info> <div>{i.name}</div>
                          <div> R$ {i.price}</div></Info></Box>)} 
                  </Images>
              </Flights>
           </Container2>
           <Filters>
            <Text2>Personalize a sua busca!</Text2>
            <Form >
               <Text3>Insira o valor mínimo:</Text3>
               <Input type="number" value={min} onChange={e => setMin(e.target.value)}/>
               <Text3>Insira o valor máximo:</Text3>
               <Input type="number" value={max} onChange={e => setMax(e.target.value)}/>
               <Input2 onClick={Filter}> Realizar filtragem</Input2>
            </Form>
           </Filters>

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
    margin-left:389px;
  }
  h2{
    font-size: 20px;
    font-family: 'Architects Daughter', cursive;
    font-weight: 700;
    color: #009c3b;
    text-align: center;
    margin-left:20px;
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
margin-top:62px;
`

const Filters= styled.footer `
width: 100vw;
background-color: lightblue;
height: 60px;
position:fixed;
left:0;
bottom:0;
background: #ffdf00;
display: flex;
flex-direction: row;
align-items: center;
z-index: 1;`;

const Flights= styled.div `

display:flex;
flex-direction: column;
align-items: center;
width:100vw;
`;

const Text= styled.div `

font-family: 'Architects Daughter', cursive;
font-size: 30px;
color: white;
margin-top: 30px;
margin-bottom: 20px;
`;

const Images= styled.div`
overflow-y: scroll;
display: flex;
flex-wrap: wrap;
width:100vw;`;

const Box= styled.div `
height:250px;
width:200px;
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

const Info= styled.div`
height:70px;
width:200px;
margin-left:10px;
background: white;
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;
div{
font-family: 'Architects Daughter', cursive;
font-size: 15px;
color: black;
};`;

const Text2= styled.div `
font-family: 'Architects Daughter', cursive;
font-size: 30px;
font-weight:400;
color: #009c3b;
margin-left:40px;
`

const Input= styled.input `
margin-left:10px;
width:100px;
height:20px;
`

const Text3= styled.div `
font-family: 'Architects Daughter', cursive;
font-size: 20px;
font-weight:400;
color: #009c3b;
margin-left:20px;
`;

const Input2= styled.button `
background-color: #009c3b;
color: white;
height: 30px;
font-family: 'Architects Daughter', cursive;
font-size: 20px;
margin-left: 30px;
`;

const Form= styled.div `
display:flex;
flex-direction: row;
align-items: center;`;

const Return= styled.div ``;




