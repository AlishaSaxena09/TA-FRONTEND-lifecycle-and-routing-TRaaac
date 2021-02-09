import React from "react";
import "./Card.css";
function Card(props) {
  return (
    <div className="card">
      <div className="header">
        <div className="img-container">
          <img src={props.data.avatar_url} />
        </div>
        <div>
          <h2>
            {props.data.name} ({props.data.login})
          </h2>
          <p>{props.data.bio}</p>
        </div>
      </div>
      <div className="list">
        <div>
          <span>{props.data.public_repos}</span>
          <p>Public Repos</p>
        </div>
        <div>
          <span>{props.data.followers}</span>
          <p>Followers</p>
        </div>
        <div>
          <span>{props.data.following}</span>
          <p>Following</p>
        </div>
      </div>
    </div>
  );
}
export default Card;
