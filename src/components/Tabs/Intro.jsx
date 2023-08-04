export default function Intro() {
  return (
    <div>
      <p style={styles.paragraph}>
        Hey there, 👋. Thanks for visiting.
        <br /> <br />
        I am a 19-year-old <span style={styles.empahsis}>Computer Science student and developer</span> from <span style={{ color: '#FF7B54' }}>India</span> currently in my pre-final year at university.
        <br /> <br />
        I am primarily interested in <span style={styles.empahsis}>Full-Stack Web Development</span>, aim to explore and deepen my understanding in various areas of technology and product development.
        <br />
        <span style={{ color: '#FF7B54' }}>Open to work, seeking a summer 2024 internship.</span>
        <br /> <br />
        I use ReactJS/NextJS, NodeJS, JavaScript/TypeScript, SQL/NoSQL databases and Python for my projects. I am open to other technologies as well.<br />
        Feel free to look around, or reach out through the contact tab.
      </p>
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
    hover: {
      backgroundColor: '#ffffff',
    },
  },
  icon: {
    marginLeft: 8,
  },
};
