import { useEffect, useState } from "react";
import PageHeader from "../header/PageHeader";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function FlightEdit() {
    const [flight,setFlight]= useState({ id: "",flight_number: "",airway_name: "",source: "",destination: "",capacity:0,price:0})
    const OnBoxChange=(event)=>{
        const newFlight ={...flight};
        newFlight[event.target.id]=event.target.value;
        setFlight(newFlight);
    }
    const params = useParams();
    const readFlightById = async () => {
        try {
            `//try block to handle the error`
            const baseUrl = "http://localhost:8080";
            alert(params.id);
            const response = await axios.get(`${baseUrl}/flights/${params.id}`);
            setFlight(response.data);
        }
        catch (error) {
            alert('Server Error.');
        };
    };
    useEffect(()=>{ readFlightById(); },[]);
    const OnUpdate = async() =>{
        try {
            `//try block to handle the error`
            const baseUrl = "http://localhost:8080";
            const response = await axios.put(`${baseUrl}/flights/${params.id}`,{...flight,price:parseFloat(flight.price)});
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
            <PageHeader PageNumber={1} />
            <h3>Edit Flight Ticket Price</h3>
            <div className="container">
                <div className="form-group mb-3">
                    <label htmlFor="flight_number" className="form-label">Flight Number : </label>
                    <div className="form-control" id="flight_number" >{flight.flight_number}</div>
                </div>
            </div>
            <div className="container">
                <div className="form-group mb-3">
                    <label htmlFor="airway_name" className="form-label">Airway Name : </label>
                    <div className="form-control" id="airway_name" >{flight.airway_name}</div>
                </div>
            </div>
            <div className="container">
                <div className="form-group mb-3">
                    <label htmlFor="source" className="form-label">Source : </label>
                    <div className="form-control" id="source" >{flight.source}</div>
                </div>
            </div>
            <div className="container">
                <div className="form-group mb-3">
                    <label htmlFor="destination" className="form-label">Destination : </label>
                    <div className="form-control" id="destination">{flight.destination}</div>
                </div>
            </div>
            <div className="container">
                <div className="form-group mb-3">
                    <label htmlFor="capacity" className="form-label">Capacity : </label>
                    <div className="form-control" id="capacity" >{flight.capacity}</div>
                </div>
            </div>
            <div className="container">
                <div className="form-group mb-3">
                    <label htmlFor="price" className="form-label">Ticket price : </label>
                    <input type="text" className="form-control" id="price" placeholder="Please enter updated price"  value={flight.price} onChange={OnBoxChange}/>
                </div>
                <button className="btn btn-success" onClick={OnUpdate}>Update</button>
                <a href="/flights/list" className="btn btn-warning">Go Back</a>
            </div>
        </>
    )
}
export default FlightEdit;