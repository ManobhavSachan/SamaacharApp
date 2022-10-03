import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { Badge } from "react-bootstrap";

export class NewsItem extends Component {
  render() {
    let {
      title,
      description,
      imageUrl,
      newsUrl,
      author,
      date,
      time,
      source,
    } = this.props;
    return (
      <>
      <div style={{ backgroundColor: "#2f3136" }}>
        <a
                href={newsUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
        <Card bg="dark" text="light">
          <Badge pill bg="dark">
            {source ? source + " " : "Anonymous"}
          </Badge>{" "}
          <Card.Img variant="top" src={imageUrl} style={{ height: "15rem" }} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>

            <footer className="blockquote-footer">
              Author:{" "}
              <cite title="Source Title">{author ? author : "Anonymous"} </cite>
            </footer>

            <footer className="blockquote-footer">
              Published At:{" "}
              <cite title="Source Title">
                {time} on {date}
              </cite>
            </footer>
            <div>
              
                <div
                  style={{
                    backgroundColor: "#2f3136",
                    textAlign: "center",
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  <h2>&rarr;</h2>
                </div>
              
            </div>
          </Card.Body>
        </Card></a>
      </div></>
    );
  }
}

export default NewsItem;
