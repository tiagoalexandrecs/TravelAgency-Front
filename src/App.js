import { BrowserRouter, Routes, Route, useActionData } from "react-router-dom"
import FlightDetails from "./Pages/FlightDetailsPage";
import FlightsPage from "./Pages/FlightsPage";
import HotelsPage from "./Pages/HotelsPage";
import HotelDetails from "./Pages/HotelDetailsPage";
import HomePage from "./Pages/HomePage";


 function App() {

  
  return(
    <PagesContainer>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/flights/:city" element={<FlightsPage/>} />
        <Route path="/flight/:id" element={<FlightDetails/>} />
        <Route path="/hotels/:city" element={<HotelsPage/>} />
        <Route path="/hotel/:id" element={<HotelDetails/>} />
      </Routes>
    </BrowserRouter>
  </PagesContainer>
  )
}

export default App;
