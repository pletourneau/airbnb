import React from "react";

function Header() {
  return (
    <React.Fragment>
      <h1>AirBnB</h1>
      <form>
        <input type="text" placeholder="Location" />
        <input type="date" />
        <input type="number" placeholder="Add Guests" />
      </form>
    </React.Fragment>
  );
}

export default Header;
