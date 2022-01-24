import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import TextTruncate from "react-text-truncate";

const WeaponCard = ({ weapon }) => {
  console.log(weapon);
  return (
    <Card className="movie-card">
      <Card.Img variant="top" src={weapon.photo} className="weapon-img" />
      <Card.Body>
        <Card.Title style={{ color: "blueviolet", fontWeight: "bold" }}>
          {weapon.brand} {weapon.model}
        </Card.Title>
        <h6>Typ: {weapon.type}</h6>
          <Card.Text style={{ marginTop: 20, fontSize: 14, color: "gray" }}>
              <TextTruncate
              line="3"
              text={weapon.description}
              element="span"
              truncateText="…"
              />
          </Card.Text>
        <Link to={`/weapon/${weapon.id}`}>
          <Button variant="primary" style={{ marginTop: 20 }}>
            Szczegółowe informacje
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default WeaponCard;