import PageHeader from "../header/PageHeader";

function FlightList() {
  return (
    <>
      <PageHeader PageNumber={1}/>
      <h3>LIST OF FLIGHT</h3>
      <div className="container">
        <table className="table table-striped table-primary">
          <thead className="table-dark">
            <tr>
              <th scope="col">Flight Number</th>
              <th scope="col">Airline Name</th>
              <th scope="col">Source</th>
              <th scope="col">Destination</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="table-light">
            <tr>
              <th scope="row">AI845</th>
              <td>Air India</td>
              <td>Mumbai</td>
              <td>Abu dhabhi</td>
              <td>
                <a
                  href="/flights/edit/123456780"
                  className="btn btn-warning btn-outline-success me-2"
                >
                  Edit Price
                </a>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
            <tr>
              <th scope="row">6E151</th>
              <td>Indigo</td>
              <td>Hyderabad</td>
              <td>Banglore</td>
              <td>
                <a
                  href="/flights/edit/123456781"
                  className="btn btn-warning btn-outline-success me-2"
                >
                  Edit Price
                </a>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
            <tr>
              <th scope="row">IN327</th>
              <td>Alibab</td>
              <td>chennai</td>
              <td>Mumbai</td>
              <td>
                <a
                  href="/flights/edit/123456782"
                  className="btn btn-warning btn-outline-success me-2"
                >
                  Edit Price
                </a>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default FlightList;
