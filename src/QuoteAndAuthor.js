import React from "react";

class QuoteAndAuthor extends React.Component {

  render() {
    const html = document.documentElement;
    html.style.backgroundImage = `url(${this.props.background})`;

    return (
      <div style={{ backgroundColor: "#d9d9d9" }} className="quotebox">
        <div
          className="fadeIn"
          style={{ color: "black" }}
        >
        <div className="image-container">
            <img src={(this.props.quote)} />
        </div>
          <h5 id="movie">
            {this.props.movie ? this.props.movie : "Unknown"}
            ({this.props.year ? this.props.year : "Unknown"})
          </h5>
        </div>
        <button
          className="newquote"
          onClick={this.props.handleClick}
        >
          new quote
        </button>
      </div>
    );
  }
}

export default QuoteAndAuthor;