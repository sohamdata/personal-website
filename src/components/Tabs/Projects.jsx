import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { ProjectData } from '../Data';

export default function Projects() {
    const items = ProjectData;

    return (
        <div>
            <p style={styles.paragraph}>Here are some things I made.</p>
            {items.map(item => (
                <div style={styles.itemContainer} key={item.title}>
                    <div style={styles.imageContainer}>
                        <img src={item.image} alt={item.title} style={styles.image} />
                    </div>

                    <div style={styles.textContainer}>
                        <header style={styles.itemHeader}>{item.title}</header>
                        <p style={styles.itemParagraph}>{item.description}</p>
                        {item.stats.map(stat => (
                            <span style={styles.itemBubble} key={stat}>
                                {stat}
                            </span>
                        ))}

                        <div style={styles.anchorContainer}>
                            {item.action.map((action, i) => (
                                <a href={item.url[i]} style={styles.spanAnchor} target="_blank" rel="noreferrer" key={i}>
                                    <span style={styles.span}>
                                        {action} <FontAwesomeIcon style={styles.icon} icon={faArrowRight} />
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
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
        padding: '12px 18px',
        backgroundColor: '#4E4E50',
        borderRadius: 8,
        marginTop: 26,
        display: 'flex',
        alignItems: 'center',
    },
    imageContainer: {
        width: '40%',
        padding: '10px',
    },
    image: {
        width: '100%',
    },
    textContainer: {
        width: '100%',
        padding: '10px',
        textAlign: 'center',
    },
    itemHeader: {
        color: '#E3E2DF',
        fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
        fontWeight: 700,
        fontSize: 26,
        margin: '10px 0'
    },
    itemParagraph: {
        color: '#E3E2DF',
        fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
        fontSize: 16,
        margin: '10px 0'
    },
    itemBubble: {
        backgroundColor: '#1F2833',
        color: '#f9f9f9',
        padding: 8,
        margin: 6,
        borderRadius: 10,
        fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
        fontSize: 12,
        fontWeight: 500,
        display: 'inline-block',
    },
    anchorContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        marginBottom: 20,
    },
    spanAnchor: {
        textDecoration: 'none',
    },
    span: {
        backgroundColor: '#5D001E',
        color: '#f9f9f9',
        fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
        fontSize: 16,
        padding: '12px 16px',
        margin: '8px',
        borderRadius: 50,
    },
    icon: {
        marginLeft: 7,
    },
};
