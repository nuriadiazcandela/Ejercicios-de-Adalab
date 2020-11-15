import React from 'react';
import Club from './Club';

class ClubList extends React.Component {
  render() {
    const items = this.props.clubs.map((club, index) => {
      return (
        <li key={club.id} id={index}>
          <Club club={club} />
        </li>
      );
    });
    return (
      <div>
        <ul className="list">{items}</ul>
      </div>
    );
  }
}

export default ClubList;
