import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function SkillsandInterests() {

  // different technologies and languages
  const items = [
    { name: 'Programming Languages', tags: ['Python', 'C++', 'JavaScript', 'Java', 'Go', 'SQL'] },
    { name: 'Tools/Frameworks', tags: ['Git', 'ReactJS', 'AWS', 'GCP', 'Node.js', 'HTML', 'CSS', 'Bootstrap', 'Tailwind CSS', 'Docker', 'Linux', 'UML diagrams'] },
    { name: 'Hobbies', tags: ['Outdoors', 'Podcasts', 'Mountain biking', 'Computers', 'Guitar', 'Football', 'Video Games', 'Travel', 'The Internet'] },
  ];

  return (
    <div>
      {items.map((item, i) => (
        <div style={styles.itemContainer} key={`${i}`}>
          <header style={styles.itemHeader}>{item.name}</header>
          <br />
          {item.tags.map(tag => (
            <span key={`${Math.random()}`} style={styles.itemBubble}>
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
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    marginTop: 26,
  },
  itemHeader: {
    fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
    fontWeight: 700,
    fontSize: 26,
    color: '#000000',
  },
  itemBubble: {
    backgroundColor: '#000000',
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
  },
  icon: {
    marginLeft: 8,
  },
};
