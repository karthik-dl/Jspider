import React from "react";

const App = () => {
  return React.createElement(
    "div",
    { id: "div1" },
    React.createElement(
      "section",
      {
        id: "section",
        style: {
          border: "3px solid green",
          backgroundColor: "black",
          color: "white",
          width: "400px",
          height: "250px",
          textAlign: "center",
          paddingTop: "5px",
          paddingBottom: "5px",
        },
      },
      React.createElement(
        "h1",
        { id: "h1", style: { color: "red" } },
        "Name: Karthik DL"
      ),
      React.createElement(
        "h1",
        { id: "h2", style: { color: "blue" } },
        "id: 123"
      ),
      React.createElement(
        "h1",
        { id: "h3", style: { color: "blue" } },
        "Salary: 20000k"
      ),
      React.createElement(
        "h1",
        { id: "h4", style: { color: "blue" } },
        "Company: IBM"
      ),
      React.createElement(
        "h1",
        { id: "h5", style: { color: "blue" } },
        "Address: Bangalore"
      )
    ),
    React.createElement(
      "div",
      { id: "div2" },
      React.createElement(
        "nav",
        {
          id: "nav",
          style: { display: "flex", color: "black", border: "1px solid black" },
        },
        React.createElement("a", { href: "#" }, "submit"),
        React.createElement("a", { href: "#" }, "Signin"),
        React.createElement("a", { href: "#" }, "about"),
        React.createElement("a", { href: "#" }, "contact")
      )
    )
  );
};

export default App;