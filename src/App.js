import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    advice: ""
  };
  componentDidMount() {
    axios
      .get("https://api.adviceslip.com/advice")
      .then(response => {
        const { advice } = response.data.slip;
        this.setState({ advice });
      })
      .catch(error => console.error(error));
  }

  fetchData = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then(response => {
        const { advice } = response.data.slip;
        this.setState({ advice });
      })
      .catch(error => console.error(error));
  };

  render() {
    const { advice } = this.state;

    const divStyle = {
      height: "100%",

      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",

      backgroundImage: "url('../src/img/city.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center"
    };

    const boxStyle = {
      width: "40%",
      height: "30%",

      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      background: "whitesmoke",

      padding: "2%",
      borderRadius: "25px"
    };

    const heading = {
      display: "flex",
      alignItems: "center",
      height: "580px",
      fontFamily: "Verdana"
    };

    const btnStyle = {
      borderRadius: "50px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textTransform: "uppercase",
      cursor: "pointer",
      height: "200px",
      width: "210px",
      backgroundColor: "#ffffff",
      border: "1px solid rgba(22, 76, 167, 0.6)"
    };

    return (
      <div style={divStyle}>
        <div className="box" style={boxStyle}>
          <h1 style={heading}>{advice}</h1>
          <button onClick={this.fetchData} style={btnStyle}>
            Get random advice
          </button>
        </div>
      </div>
    );
  }
}

export default App;
