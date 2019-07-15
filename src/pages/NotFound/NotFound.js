import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";

// Creating the not found page component
const NotFound = () => (
  <div>
    <Header />
    <h1> What are you doing here? </h1>
    <Link to="/dashboard">Go Home</Link>
  </div>
);

export default NotFound;
