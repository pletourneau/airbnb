import React from "react";
import Header from "./Header";
import RentalList from "./RentalList";

function App() {
  return (
    <React.Fragment>
      <Header />
      <hr />
      <div class="flex-container">
        <RentalList />
      </div>
    </React.Fragment>
  );
}
export default App;
