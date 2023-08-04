import { Segment, Intro, SkillsandInterests, Projects, Fun, Contact } from './components/Tabs';
import Gradient from './utils/Gradient';
import Footer from './components/Footer';
import useLocalStorage from './utils/useLocalStorage';

function App() {
  const [currentPage, setCurrentPage] = useLocalStorage('currentPage', 'Hi');

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
          <Gradient dir="left-to-right" from="#614385" to="#516395">
            Soham {" "}
          </Gradient>
          <Gradient dir="left-to-right" from="#516395" to="#34E89E">
            Datta
          </Gradient>
        </header>
        <Segment setCurrentPage={setCurrentPage} currentPage={currentPage} />
        {pages[currentPage]}
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
