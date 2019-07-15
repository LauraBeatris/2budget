import React from "react";
import Header from "../../components/Header/Header";

// Creating the edit page component
const EditExpensePage = props => (
  <div>
    <Header />
    <div>
      <h1>Editing the expense with id of {props.match.params.id}</h1>
    </div>
  </div>
);

export default EditExpensePage;
