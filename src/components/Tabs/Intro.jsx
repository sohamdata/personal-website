export default function Intro() {
  return (
    <div>
      <p style={styles.paragraph}>
        Hey there, 👋. Thanks for visiting.
        <br /> <br />I am a{" "}
        <span style={{ color: "#FF7B54" }}>
          Software Developer Intern at Swipe (YC S21) 🚀
        </span>{" "}
        and <span style={styles.empahsis}>Computer Science student</span> from{" "}
        <span style={{ color: "#FF7B54" }}>India</span> currently in my final
        year at university. <br />
        My primary interest lies in{" "}
        <span style={styles.empahsis}>Product development</span>, and I'm
        dedicated to expanding my knowledge across various domains within
        technology and product development.
        <br /> <br />
        Focus:{" "}
        <span style={styles.empahsis}>
          Full-Stack development (React.js, Flask, SQL/NoSQL databases, Go,
          Django, WebSockets, AWS),
        </span>{" "}
        I'm always open to exploring and incorporating other technologies into
        my work.
        <br />
        Feel free to look around, or reach out through the contact tab.
      </p>
    </div>
  );
}

const styles = {
  paragraph: {
    fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
    fontSize: "1.3rem",
    color: "#adadad",
  },
  empahsis: {
    color: "#4550d1",
  },
  spanAnchor: {
    textDecoration: "none",
  },
  span: {
    backgroundColor: "#f9f9f9",
    color: "#000000",
    fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
    fontWeight: 800,
    fontSize: 18,
    padding: "21px 30px",
    borderRadius: 8,
    hover: {
      backgroundColor: "#ffffff",
    },
  },
  icon: {
    marginLeft: 8,
  },
};
