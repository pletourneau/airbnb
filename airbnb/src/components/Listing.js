import React from "react";
import PropTypes from "prop-types";
import seattleImg from "./../img/seattle.jpeg";
import vashonImg from "./../img/vashon.jpeg";

function Listing(props) {
  return (
    <React.Fragment>
      <div class="divFrag">
        <img src={seattleImg} alt="Listing Image" style={{ maxWidth: "25%" }} />

        {/* <img
        src={`./../img/${vashon}.jpeg`}
        alt="Listing Image"
        style={{ maxWidth: "25%" }}
      /> */}

        <h3>
          {props.location} - {props.price}/night - {props.maxGuest}/max guest
          count
        </h3>
        <p>
          <em>{props.description}</em>
        </p>
      </div>
    </React.Fragment>
  );
}

Listing.propTypes = {
  price: PropTypes.number.isRequired,
  maxGuest: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string,
  imageSrc: PropTypes.string.isRequired,
};

export default Listing;
