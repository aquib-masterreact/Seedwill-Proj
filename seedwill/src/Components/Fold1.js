import React from "react";
import "./Components.css";
function Fold1() {
  return (
    <div className="fold1">
      <h1>Where the Dream of Your Lavish Villa Experience Comes True </h1>
      <p id="Line1">
        Become a Pride Resident of the Finest Locale of Yehalanka{" "}
      </p>
      <div className="imagepart">
        <img
          src="https://prestigegroupprojects.co.in/prestige-dew-drops/assets/img/about-img.jpg"
          className="img-fluid"
          alt="..."
        />
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Enticing Mix of Amenities </th>
              <th scope="col">Exclusive Villa Luxury</th>
              <th scope="col">Address of the Future</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                9 Ft Grand Entrance, 10K Sq. Ft Clubhouse & Other Provisions
              </td>
              <td>
                Nature Homes with Classy Interiors & Engineered-wood Flooring
              </td>
              <td>
                Placed Near Upcoming Metro Station Connecting Airport, KR Puram,
                etc.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Fold1;
