import React from "react";
import PropTypes from "prop-types";

function Listing(props) {
  return (
    <React.Fragment>
      <div class="divFrag">
        <img
          src={require(`./../img/${props.imageSrc}.jpeg`)}
          alt="Listing Image"
          style={{ maxWidth: "25%" }}
        />

        <h3>
          {props.location} - {props.price}/night
          <br />1 to {props.maxGuest} guests
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
