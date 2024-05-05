import { useState } from 'react';

import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';

function App() {
  const [ selectedTopic, setSelectedTopic ] = useState('Please click a button');

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2></h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')} label="Components" />
            <TabButton onSelect={() => handleSelect('jsx')} label="JSX" />
            <TabButton onSelect={() => handleSelect('props')} label="Props" />
            <TabButton onSelect={() => handleSelect('state')} label="State" />
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;
