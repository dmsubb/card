import React from 'react';
import './Card.css';

function Card(props) {
  return (
    <div className="Card">
      <img src={props.image} alt={props.name} />
      <h2>{props.name}</h2>
      <p>{props.jobTitle}</p>
      <ul>
        <li>Email: {props.email}</li>
        <li>Phone: {props.phone}</li>
      </ul>
    </div>
  );
}

export default Card;
