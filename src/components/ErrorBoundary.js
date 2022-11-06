import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }
  componentDidCatch(error, errorInfo) {
    console.log("Logging", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{display: 'flex', justifyContent: 'center', padding:"25% "}}>
        <div style={{textAlign: 'center'}}>
          <h1>Something went wrong</h1>
          <button
            style={{
              borderColor: "#778679",
              backgroundColor: "#909877",
              padding: "0.5rem 2rem",
              borderRadius: "8px",
              marginLeft: "1rem",
            }}
          >
            <a style={{textDecoration: 'none'}} href="/">Go home</a>
          </button>
        </div>
        </div>
      );
    }
    return this.props.children;
  }
}
