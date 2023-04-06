import React from "react";
import "./Components.css";
function Fold4() {
  return (
    <div className="f4">
    <h1 id="f4h">Pricing</h1>
    <div className="fold4">
      
      <table className="table" id="t1">
        <thead>
          <tr>
            <th scope="col">Inventory Types</th>
            <th scope="col">Sizes(Sq.ft)</th>
            <th scope="col">Price</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody className="table-group-divider" id="tbody1">
          <tr id="tdi">
            <th scope="row">Villa</th>
            <td>3500-5000 sq.ft</td>
            <td>Rs. 3.72 Cr*</td>
            <td><a href="#" className="btn btn-primary">
            Price Breakup
          </a></td>
          </tr>
        </tbody>
      </table>
      <div className="card" id="c1">
        <img src="https://prestigegroupprojects.co.in/prestige-dew-drops/assets/img/costing-details.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <a href="#" className="btn btn-primary">
            Complete Costing details
          </a>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Fold4;
