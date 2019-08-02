// Import react
import React from "react";
// Import other local components used in this component
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
// Import css style sheet
import "./style.css";

// Define Book component
function Book({ title, subtitle, authors, link, description, image, Button }) {
  return (
    // list to display rows of information
    <ListItem>
      <Row className="flex-wrap-reverse">
        {/* display book subtitle */}
        <Col size="md-8">
          <h3 className="font-italic">{title}</h3>
          {subtitle && <h5 className="font-italic">{subtitle}</h5>}
        </Col>
        {/* button to view book*/}
        <Col size="md-4">
          <div className="btn-container">
            <a className="btn btn-light" target="_blank" rel="noopener noreferrer" href={link}>
              View
            </a>
            <Button />
          </div>
        </Col>
      </Row>
      <Row>
        {/* display author */}
        <Col size="md-6">
          <p className="font-italic small">Written by {authors}</p>
        </Col>
      </Row>
      <Row>
        {/* display image of book */}
        <Col size="12 sm-4 md-2">
          <img className="img-thumbnail img-fluid w-100" src={image} alt={title} />
        </Col>
        {/* display description of book */}
        <Col size="12 sm-8 md-10">
          <p>{description}</p>
        </Col>
      </Row>
    </ListItem>
  );
}

export default Book;
