import React from "react";
import Listing from "./Listing";

const mainRentalList = [
  {
    location: "Vashon",
    maxGuest: 4,
    price: 135,
    description: "cute cabin in the woods with a fireplace",
    imageSrc: "vashon",
  },
  {
    location: "Seattle",
    maxGuest: 12,
    price: 300,
    description: "tech bro pad",
    imageSrc: "seattle",
  },
  {
    location: "Seattle",
    maxGuest: 12,
    price: 300,
    description: "tech bro pad",
    imageSrc: "seattle",
  },
  {
    location: "Seattle",
    maxGuest: 12,
    price: 300,
    description: "tech bro pad",
    imageSrc: "seattle",
  },
];

function RentalList() {
  return (
    <div className="rental-list-container">
      {mainRentalList.map((listing, index) => (
        <Listing
          description={listing.description}
          location={listing.location}
          price={listing.price}
          maxGuest={listing.maxGuest}
          imageSrc={listing.imageSrc}
          key={index}
        />
      ))}
    </div>
  );
}

export default RentalList;
