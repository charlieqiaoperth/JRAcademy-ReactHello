import React from 'react';
import './App.css';
import Welcome from './Welcome';
import Counter from './Counter';

const App= () => {
  return (
    <section className="App">
        <Welcome name={'Nick'} isTeather />
        <Welcome name="Charlie" />
        <Welcome name="Sam" />
        <Counter/>
    </section>
  );
}

export default App;
