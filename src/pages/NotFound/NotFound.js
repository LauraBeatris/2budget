import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Helmet from "react-helmet";

import { Container } from "./styles";
import Header from "../../components/Header/Header";

// Creating the not found page component
export const NotFound = ({ isAuthenticated }) => (
  <div>
    <Helmet>
      <title> 2Budget | Not Found </title>
    </Helmet>
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
