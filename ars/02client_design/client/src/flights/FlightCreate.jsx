import PageHeader from "../header/PageHeader";

function FlightCreate(){
    return(
        <>
        <PageHeader PageNumber={2}/>
          <h3><a href="/flights/list" className="btn btn-light">Go back</a>New Flight</h3>
    <div className="container">
        <div className="form-group mb-3">
            <label htmlFor="number" className="form-label">Flight Number</label>
            <input type="text" className="form-control" id="number" placeholder="please enter flight number"/>
        </div>
        <div className="form-group mb-3">
            <label htmlFor="airline-name" className="form-label">Airline Name</label>
            <input type="text" className="form-control" id="airline_name" placeholder="please enter flight number"/>
        </div>
        <div className="form-group mb-3">
            <label htmlFor="source" className="form-label">Source</label>
            <input type="text" className="form-control" id="source" placeholder="please enter source"/>
        </div>
        <div className="form-group mb-3">
            <label htmlFor="destination" className="form-label">Destination</label>
            <input type="text" className="form-control" id="destination" placeholder="please enter destination"/>
        </div>
        <div className="form-group mb-3">
            <label htmlFor="capcity" className="form-label">Destination</label>
            <input type="text" className="form-control" id="capcity" placeholder="please enter capacity(no.of seats)."/>
        </div>
        <div className="form-group mb-3">
            <label htmlFor="price" className="form-label">Ticket Price</label>
            <input type="text" className="form-control" id="price" placeholder="please enter ticket price"/>
        </div>
        <button className="btn btn-success">Create Flight</button>
    </div>
        </>
    )
}

export default FlightCreate;