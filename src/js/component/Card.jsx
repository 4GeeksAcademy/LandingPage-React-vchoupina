import React from 'react';

const Card = ({ title, text, imageUrl, buttonUrl, buttonText }) => {
    return (
      <div className="card mb-4" style={{ width: "18rem", margin: "0 auto" }}>
        <img src={imageUrl} className="card-img-top" alt={title} style={{ height: "200px", objectFit: "cover" }} />
        <div className="card-body text-center">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <a href={buttonUrl} className="btn btn-primary">{buttonText}</a>
        </div>
      </div>
    );
  };

export default Card;
