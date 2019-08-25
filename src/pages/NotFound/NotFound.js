import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { Container } from "./styles";
import Header from "../../components/Header/Header";

// Creating the not found page component
export const NotFound = ({ isAuthenticated }) => (
  <div>
    {isAuthenticated && <Header />}
    <Container>
      <h1> What are you doing here? </h1>
      <Link to={isAuthenticated ? "/dashboard" : "/"}>Go Home</Link>
    </Container>
  </div>
);

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(NotFound);
