import { useState } from 'react';
import { Segment, Intro, SkillsandInterests, Projects, Fun, Contact } from './components/index';
import Gradient from './components/Gradient';
import Footer from './components/Footer';
import './App.css';

function App() {
  // state of current page
  const [currentPage, setCurrentPage] = useState('Hi');

  // mappings from pages to components
  const pages = {
    Hi: <Intro />,
    SkillsandInterests: <SkillsandInterests />,
    Projects: <Projects />,
    Fun: <Fun />,
    Contact: <Contact />,
  };

  return (
    <div>
      <div className="App">
        <header style={{ ...styles.h1, fontSize: window.innerWidth > 450 ? 60 : 30 }}>
          <Gradient dir="left-to-right" from="#0064f2" to="#7400c5">
            Soham{' '}
          </Gradient>
          <Gradient dir="left-to-right" from="#7400c5" to="#ff0074">
            Datta
          </Gradient>
        </header>
        <Segment setCurrentPage={setCurrentPage} currentPage={currentPage} />
        {pages[currentPage]}
        <br />
        <br />
        <br />
      </div>
      <div className="footer">
        <Footer />
      </div>
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
