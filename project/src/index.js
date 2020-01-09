import React, { Component } from "react";
import ReactDom from "react-dom";
import axios from "axios";

class App extends Component {
  componentDidMount() {
    axios.get("https://www.easy-mock.com/mock/5d2a9caa1bba03305e100ec5/api/table/list1").then(res => {
      console.log(res);
    });
  }
  render() {
    return <div>Hello World</div>;
  }
}

ReactDom.render(<App />, document.getElementById("root"));
