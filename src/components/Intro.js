import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Intro() {
  return (
    <div>
      <p style={styles.paragraph}>
        Hey there, 👋. Thanks for visiting.
        <br />
        <br /> I am a 19-year-old <span style={styles.empahsis}>Computer Science student and developer</span> from <span style={{ color: '#FF7B54' }}>India</span>.
        <br />
        <br />
        I am primarily interested in <span style={styles.empahsis}>Front-end Web Development</span>, aim to explore and deepen my understanding in various areas of technology and product development.
        <br />
        Currently, I am learning <span style={styles.empahsis}>backend development</span>, and exploring the world of <span style={styles.empahsis}>Cloud Computing</span>.
        <br />
        <br />
        I use ReactJS, Javascript, Python, Go for my projects.
        Feel free to look around, or reach out through email below.
      </p>
      <br />
      <br />
      <div style={styles.anchorContainer}>
        <a href="mailto:sohamdatta34@gmail.com" style={styles.spanAnchor}>
          <span style={{ ...styles.span }}>
            Say hello <FontAwesomeIcon style={styles.icon} icon={faArrowRight} />
          </span>
        </a>
      </div>
    </div >
  );
}

const styles = {
  paragraph: {
    fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
    fontSize: '1.3rem',
    color: '#adadad',
  },
  empahsis: {
    color: '#4B56D2',
  },
  spanAnchor: {
    textDecoration: 'none',
  },
  span: {
    backgroundColor: '#f9f9f9',
    color: '#000000',
    fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
    fontWeight: 800,
    fontSize: 18,
    padding: '21px 30px',
    borderRadius: 8,
  },
  icon: {
    marginLeft: 8,
  },
};
