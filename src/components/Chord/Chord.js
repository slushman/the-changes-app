import React from 'react';
import styled from '@emotion/styled';

const ListItem = styled.li`
  font-size: 1.5em;
  padding: 1em;
  position: relative;
`;

const ChordSelect = styled.select`
  appearance: none;
  background-color: transparent;
  border: 0;
  color: white;
  font-size: 1.5em;
  text-align-last: center;
`;

const Chord = ({
  label,
  options,
}) => {
  const [selectedChord, setSelectedChord] = React.useState(label);

  const handleSelectChord = React.useCallback(event => setSelectedChord(event.target.value), []);

  return (
    <ListItem>
      <ChordSelect onChange={handleSelectChord} value={selectedChord}>
      {
        options.map((option, index) => (
          <option key={index}>{option}</option>
        ))
      }
      </ChordSelect>
    </ListItem>
  );
};

export default React.memo(Chord);
