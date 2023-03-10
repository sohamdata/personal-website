export default function Segment(props) {
  // to hold page names
  const pages = ['Hi', 'Skills and Interests', 'Projects', 'Fun', 'Contact'];

  return (
    <div style={styles.container}>
      {pages.map((page, i) => (
        <div
          key={`${i}`}
          onClick={() => {
            // cookies.save('currentPage', page);
            props.setCurrentPage(page.replace(/\s/g, ""));
          }}
          style={{
            ...styles.block,
            ...(page.replace(/\s/g, "") === props.currentPage
              ? { backgroundColor: '#000000', color: '#4B56D2' }
              : { backgroundColor: '#4B56D2', color: '#000000' }),
          }}
        >
          {page}
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
