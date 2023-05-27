import { BrowserRouter, Routes, Route, useActionData } from "react-router-dom"
import FlightDetails from "./Pages/FlightDetailsPage";
import FlightsPage from "./Pages/FlightsPage";
import HotelsPage from "./Pages/HotelsPage";
import HotelDetails from "./Pages/HotelDetailsPage";
import HomePage from "./Pages/HomePage";


 function App() {

  
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/flights/:cityId" element={<FlightsPage/>} />
        <Route path="/flight/:id" element={<FlightDetails/>} />
        <Route path="/hotels/:cityId" element={<HotelsPage/>} />
        <Route path="/hotel/:id" element={<HotelDetails/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
