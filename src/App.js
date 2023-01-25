import { useState } from 'react';
import { Segment, Intro, Projects, Ideas, Fun } from './components/index';
import './App.css';

function App() {
  // state of current page
  const [currentPage, setCurrentPage] = useState('Hi');

  // mappings from pages to components
  const pages = {
    Hi: <Intro />,
    Projects: <Projects />,
    Ideas: <Ideas />,
    Fun: <Fun />,
  };

  return (
    <div className="App">
      <header style={{ ...styles.h1, fontSize: window.innerWidth > 450 ? 60 : 30 }}>
        ssohamm
      </header>
      <Segment setCurrentPage={setCurrentPage} currentPage={currentPage} />
      {pages[currentPage]}
      <br />
      <br />
      <br />
    </div>
  );
}

const styles = {
  h1: {
    fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
    fontWeight: 700,
    fontSize: 30,
    color: '#0F216B',
  },
};

export default App;
