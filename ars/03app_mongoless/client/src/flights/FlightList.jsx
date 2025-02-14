import { useEffect, useState } from "react";
import PageHeader from "../header/PageHeader";
import axios from "axios";

function FlightList() {
    const [flights, setFlights] = useState([]);
    const readAllFlights = async () => {
        try {
            `//try block to handle the error`
            const baseUrl = "http://localhost:8080/flights";
            const response = await axios.get(`${baseUrl}`);
            setFlights(response.data);
        }
        catch (error) {
            alert('Server Error. Please try again after some time.');
        }
    }//scoped function (to covert axio call from  async to sync)

    useEffect(() => { readAllFlights(); }, [])
    return (
        <>
            <PageHeader PageNumber={1} />
            <h3>List of Flights</h3>
            <div className="container">
                <table className="table table-primary table-striped">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">Flight Number</th>
                            <th scope="col">Airline Name</th>
                            <th scope="col">Source</th>
                            <th scope="col">Destination</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {flights.map((flight) => {
                            return (
                                <tr>
                                    <th scope="row">{flight.flight_number}</th>
                                    <td>{flight.airway_name}</td>
                                    <td>{flight.source}</td>
                                    <td>{flight.destination}</td>
                                    <td>
                                        <a href={`/flights/edit/${flight.id}`} className="btn btn-warning">Edit Price</a>
                                        <button className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default FlightList;