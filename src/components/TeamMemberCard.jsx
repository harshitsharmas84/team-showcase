import React from "react";

function TeamMemberCard({ name, title }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  );
}

export default TeamMemberCard;
