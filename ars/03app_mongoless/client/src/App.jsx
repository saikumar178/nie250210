import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FlightList from "./flights/FlightList";
import FlightCreate from "./flights/FlightCreate";
import FlightEdit from "./flights/FlightEdit";
import PageHeader from './header/PageHeader';  


function App() {
  const [pageNumber, setPageNumber] = useState(1);
  return (
    <>
    <div>
    <BrowserRouter>
          <Routes>
            <Route path="" element={<FlightList/>}/>
            <Route path="/flights/list" element={<FlightList/>}/>
            <Route path="/flights/create" element={<FlightCreate/>}/>
            <Route path="/flights/edit/:id" element={<FlightEdit/>}/>
          </Routes>
        </BrowserRouter>
    </div>
 
    </>
  );
}

export default App;
