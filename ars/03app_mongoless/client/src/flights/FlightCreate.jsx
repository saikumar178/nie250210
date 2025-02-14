import { useState } from "react";
import PageHeader from "../header/PageHeader";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function FlightCreate() {
    const [flight, setFlight] = useState({ id: "", flight_number: "", airway_name: "", source: "", destination: "", capacity: 0, price: 0 })
    const OnBoxChange = (event) => {
        const newFlight = { ...flight };
        newFlight[event.target.id] = event.target.value;
        setFlight(newFlight);
    }
    const OnCreate = async () => {
        try {
            `//try block to handle the error`
            const baseUrl = "http://localhost:8080";
            const response = await axios.post(`${baseUrl}/flights`, { ...flight, capacity: parseInt(flight.capacity), price: parseFloat(flight.price) });
            alert(response.data.message)
            navigate("/flights/list");
        }
        catch (error) {
            alert('Server Error. Please try again after some time.');
        }
    };
    const navigate = useNavigate();
    return (
        <>
            <PageHeader PageNumber={2} />
            <h3>Add Flight</h3>
            <div className="container">
                <div className="mb-3">
                    <label htmlFor="flight_number" className="form-label">Flight Number : </label>
                    <input type="text" className="form-control" id="flight_number" placeholder="Please enter flight number" value={flight.flight_number} onChange={OnBoxChange} />

                </div>
            </div>
            <div className="container">
                <div className="mb-3">
                    <label htmlFor="airway_name" className="form-label">Airway Name : </label>
                    <input type="text" className="form-control" id="airway_name" placeholder="Please enter airway name" value={flight.airway_name} onChange={OnBoxChange} />
                </div>
            </div>
            <div className="container">
                <div className="mb-3">
                    <label htmlFor="source" className="form-label">Source : </label>
                    <input type="text" className="form-control" id="source" placeholder="Please enter source place" value={flight.source} onChange={OnBoxChange} />
                </div>
            </div>
            <div className="container">
                <div className="mb-3">
                    <label htmlFor="destination" className="form-label">Destination : </label>
                    <input type="text" className="form-control" id="destination" placeholder="Please enter destination place" value={flight.destination} onChange={OnBoxChange} />
                </div>
            </div>
            <div className="container">
                <div className="mb-3">
                    <label htmlFor="capacity" className="form-label">Capacity : </label>
                    <input type="text" className="form-control" id="capacity" placeholder="Please enter capacity(number of seats)" value={flight.capacity} onChange={OnBoxChange} />
                </div>
            </div>
            <div className="container">
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Ticket price : </label>
                    <input type="text" className="form-control" id="price" placeholder="Please enter price" value={flight.price} onChange={OnBoxChange} />
                </div>
                <button className="btn btn-success" onClick={OnCreate}>Add</button>
                <a href="/flights/list" className="btn btn-warning">Go Back</a>
            </div>
        </>
    )
}
export default FlightCreate;