import { useState } from 'react';
import { Segment, Intro, SkillsandInterests, Projects, Fun, Contact } from './components/index';
import Gradient from '../src/utils/Gradient';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('Hi');

  const pages = {
    Hi: <Intro />,
    SkillsandInterests: <SkillsandInterests />,
    Projects: <Projects />,
    Fun: <Fun />,
    Contact: <Contact />,
  };

  return (
    <div>
      <div style={styles.app}>
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
      <div style={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}

const styles = {
  app: {
    textAlign: 'center',
    padding: 12,
    maxWidth: 700,
    margin: 'auto',
  },
  footer: {
    maxWidth: '100%',
    paddingBottom: 0,
  },
  h1: {
    fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
    fontWeight: 700,
    fontSize: 30,
    color: '#0F216B',
  },
};

export default App;
