import React from 'react';

const Club = (props) => {
  const items = props.club.members.map((member, index) => {
    return <li key={index}>{member}</li>;
  });
  return (
    <article className="club">
      <i className={props.club.fa} />
      <h2 className="title">{props.club.name}</h2>
      <div className="text">
        <h3 className="members">Members:</h3>
        <ul className="list-members">{items}</ul>
      </div>
    </article>
  );
};

export default Club;
