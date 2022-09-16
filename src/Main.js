import React, { Component } from "react";

class Main extends Component {
    state = {  } 
     
    render() { 
      let flag = this.props.data.flag;
        return (
          <>
            <div
              className="imade-div"
              style={{ backgroundImage: `url(${flag})` }}
            ></div>
            <h3>{this.props.data.name}</h3>
            <div className="details">
              <p className="title">
                Capital: <span className="text">{this.props.data.capital}</span>{" "}
              </p>
              <p className="title">
                Languages:{" "}
                <span className="text">
                  {this.props.data.languages.join(", ")}.
                </span>
              </p>
              <p className="title">
                Population:{" "}
                <span className="text">
                  {this.props.data.population.toLocaleString()}
                </span>
              </p>
              <p className="title">
                Currency:{" "}
                <span className="text"> {this.props.data.currency}</span>
              </p>
            </div>
          </>
        );
    }
}
 
export default Main;