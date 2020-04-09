import React from 'react';
import styled from '@emotion/styled';

import './App.css';
import Chord from '../Chord';

const keys = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab'];

const ChordList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const KeySelect = styled.select`
  appearance: none;
  background-color: transparent;
  border: 0;
  color: white;
  font-size: 1.25em;
  text-align-last: center;
`;

function App() {
  const [selectedKey, setSelectedKey] = React.useState('C');

  const handleSelectKey = React.useCallback(event => setSelectedKey(event.target.value), []);

  return (
    <div className="App">
      <header className="App-header">
        <ChordList>
          <Chord label="1" options={['1', '2-', '3-', '4', '5', '6-', '7-']} />
          <Chord label="4" options={['1', '2-', '3-', '4', '5', '6-', '7-']} />
          <Chord label="1" options={['1', '2-', '3-', '4', '5', '6-', '7-']} />
          <Chord label="5" options={['1', '2-', '3-', '4', '5', '6-', '7-']} />
        </ChordList>
      </header>
    </div>
  );
}

export default React.memo(App);
