import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import { Container } from "./styles";

// Creating the not found page component
class NotFound extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: false
    };
  }

  componentDidMount() {
    localStorage.getItem("auth-token")
      ? this.setState({ isAuth: true })
      : this.setState({ isAuth: false });
  }

  render() {
    return (
      <div>
        {this.state.isAuth && <Header />}
        <Container>
          <h1> What are you doing here? </h1>
          <Link to={this.state.isAuth ? "/dashboard" : "/"}>Go Home</Link>
        </Container>
      </div>
    );
  }
}
export default NotFound;
