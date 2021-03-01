import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div>
          <div>{location.state.title}</div>
          <div>{location.state.summary}</div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
