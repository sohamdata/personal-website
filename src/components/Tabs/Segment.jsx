export default function Segment({ setCurrentPage, currentPage }) {
  const pages = [
    { 'Hi': 'Hi' },
    { 'Skills': 'SkillsandInterests' },
    { 'Projects': 'Projects' },
    { 'Fun': 'Fun' },
    { 'Contact': 'Contact' }
  ];

  return (
    <div style={styles.container}>
      {pages.map(page => (
        <div
          key={Object.keys(page)[0]}
          onClick={() => {
            setCurrentPage(Object.values(page)[0]);
          }}
          style={{
            ...styles.block,
            ...(Object.values(page)[0] === currentPage
              ? { backgroundColor: '#000000', color: '#4B56D2' }
              : { backgroundColor: '#4B56D2', color: '#000000' }),
          }}
        >
          {Object.keys(page)[0]}
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    borderRadius: 10,
    marginBottom: 50,
    marginTop: 20,
    display: 'flex',
    height: 45,
    overflow: 'hidden',
    fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
    padding: 6,
    backgroundColor: '#4B56D2 ',
    fontWeight: 600,
    cursor: 'pointer',
  },
  block: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
};
