import React from 'react';
import '../stylesheet/App.scss';
import clubs from '../data/clubs.json';
import ClubList from './ClubList';

class App extends React.Component {
  render() {
    return <ClubList clubs={clubs} />;
  }
}

export default App;
