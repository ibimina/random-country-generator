import React, { Component } from "react";
import { data } from "./Data";
import Header from "./Header";
import Main from "./Main";
import Button from "./Button";

class App extends Component {
  state = { data: data[0] };

  changeCountry = () => {
    let countryLength = data.length - 1;
    let indexNo = (Math.random() * countryLength).toFixed(0);
    let randoCount = data[indexNo];
    this.setState({ data: randoCount });
  };
  render() {
    const data = this.state.data;
    const title = "Random Country Selector";
    const text = "Random  Country";
    const subtitle = "Generate a Country For Your Next Holiday";
    return (
      <>
        <Header title={title} subtitle={subtitle} />
        <div className="container">
          <Main data={data} />
          <Button text={text} changeCountry={this.changeCountry} />
        </div>
      </>
    );
  }
}

export default App;
