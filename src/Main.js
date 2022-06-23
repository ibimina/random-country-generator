import React, { Component } from "react";

class Main extends Component {
    state = {  } 
     
    render() { 
      let sop = this.props.data.flag;
        return (
          <>
            <div
              className="imade-div"
              style={{ backgroundImage: `url(${sop})` }}
            ></div>
            <h3>{this.props.data.name}</h3>
            <div className="details">
              <p>Capital: {this.props.data.capital}</p>
              <p>Languages: {this.props.data.languages.toLocaleString()}</p>
              <p>Population:{this.props.data.population.toLocaleString()}</p>
              <p>Currency: {this.props.data.currency}</p>
            </div>
          </>
        );
    }
}
 
export default Main;