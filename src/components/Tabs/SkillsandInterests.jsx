import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { SkillsInterests } from "../../utils/Data"

export default function SkillsandInterests() {

  const items = SkillsInterests;

  return (
    <div>
      {items.map(item => (
        <div style={styles.itemContainer} key={item.name}>
          <header style={styles.itemHeader}>{item.name}</header>
          <br />
          {item.tags.map(tag => (
            <span key={tag} style={styles.itemBubble}>
              {tag}
            </span>
          ))}
        </div>
      ))}
      <br />
      <br />
      <div style={styles.anchorContainer}>
        <a href="https://github.com/sohamdata" style={styles.spanAnchor} target="_blank" rel="noreferrer">
          <span style={styles.span}>
            Github <FontAwesomeIcon style={styles.icon} icon={faArrowRight} />
          </span>
        </a>
        <a href="https://tally.so/r/3yMX9x" style={styles.spanAnchor} target="_blank" rel="noreferrer">
          <span style={styles.span}>
            Resume<FontAwesomeIcon style={styles.icon} icon={faArrowRight} />
          </span>
        </a>
      </div>
    </div>
  );
}

const styles = {
  paragraph: {
    fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
    fontSize: 20,
    color: '#adadad',
  },
  itemContainer: {
    padding: '21px 30px',
    backgroundColor: '#4E4E50',
    borderRadius: 8,
    marginTop: 26,
  },
  itemHeader: {
    fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
    fontWeight: 700,
    fontSize: 26,
    color: '#E3E2DF',
  },
  itemBubble: {
    backgroundColor: '#1F2833',
    color: '#f9f9f9',
    padding: 8,
    margin: 6,
    borderRadius: 8,
    fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
    fontSize: 12,
    fontWeight: 500,
    display: 'inline-block',
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
    margin: 10,
  },
  icon: {
    marginLeft: 8,
  },
};
