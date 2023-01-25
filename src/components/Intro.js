import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Intro() {
  return (
    <div>
      <p style={styles.paragraph}>
        unga banga<br />
        <br /> I'm currently a <a href="https://linkedin.com/in/sohamdata">banga unga</a> at{' '}
        <a href="https://amazon.com">unga gunga</a> hunga <a href="https://google.com">unga</a> end end end
        <br />
        <br />
        My favorite programming languages are Python and Go, my favorite food is comic sans 🍣.
        <br />
        <br />
        Feel free to look around, or reach out through email below.
      </p>
      <br />
      <br />
      <div style={styles.anchorContainer}>
        <a href="mailto:hi@kanyeeast.me" style={styles.spanAnchor}>
          <span style={styles.span}>
            Say hello <FontAwesomeIcon style={styles.icon} icon={faArrowRight} />
          </span>
        </a>
      </div>
    </div>
  );
}

const styles = {
  paragraph: {
    fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
    fontSize: '1.3rem',
    color: '#adadad',
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
