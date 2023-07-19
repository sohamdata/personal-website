export default function Ideas() {

  const items = [
    {
      name: 'one use instagram',
      description:
        "description",
      tags: ['free plan', 'pro plan @ $100/month'],
    },
    {
      name: 'downloadable internet',
      description:
        'description',
      tags: ['internet', 'offline'],
    },
  ];

  return (
    <div>
      <p style={styles.paragraph}>
        f
      </p>
      {items.map((item, i) => (
        <div style={styles.itemContainer} key={`${i}`}>
          <header style={styles.itemHeader}>{item.name}</header>
          <br />
          <p style={styles.itemParagraph}>{item.description}</p>
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
  itemParagraph: {
    fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
    fontSize: 16,
    color: '#080808',
  },
  spanAnchor: {
    textDecoration: 'none',
  },
  span: {
    backgroundColor: '#0F216B',
    color: '#fff',
    fontFamily: "'Roboto', sans-serif",
    fontWeight: 500,
    fontSize: 18,
    padding: '21px 30px',
    borderRadius: 8,
    boxShadow: '5px 5px 35px 5px rgba(0,0,0,0.33)',
  },
  icon: {
    marginLeft: 8,
  },
};
