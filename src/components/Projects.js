import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

// assets
import reach from '../assets/reach.gif';
import garlicoin from '../assets/garlicoin.png';
import lite from '../assets/lite.png';
import reachv2 from '../assets/reachv2.gif';
import golang from '../assets/golang.png';
import asking from '../assets/asking.png';

export default function Projects() {
    // items for projects
    const items = [
        {
            title: 'Co-Chef',
            description:
                'Find the recipes of tens of thousands of dishes!',
            image: asking,
            stats: ['react', 'edamam', 'javascript'],
            action: ['Website', 'GitHub'],
            url: ['https://recipes-app-reactjs.web.app/', 'https://github.com/sohamdata/Co-Chef'],
        },
        {
            title: 'toSpotify',
            description:
                'A command-line tool written in Go that allows users to quickly create a Spotify playlist from songs stored locally(.mp3, .wav, .flac, etc.)',
            image: golang,
            stats: ['go'],
            action: ['Github'],
            url: ['https://github.com/sohamdata/tospotify-go'],
        },
        {
            title: 'Notes App',
            description:
                'Fullstack React app for taking notes with auth using GraphQL and AWS services.',
            image: lite,
            stats: ['react', 'javascript', 'netlify', 'graphql', 'aws'],
            action: ['GitHub', 'Demo'],
            url: ['https://github.com/sohamdata/aws-sem3-project', 'https://user-images.githubusercontent.com/78294692/206841659-06aa6627-f2b6-4636-8492-3a3f725acc03.gif'],
        },
        {
            title: 'face detection',
            description:
                "Face and emotions detection website",
            image: reachv2,
            stats: ['HTML', 'CSS', 'Javascript', 'face-api.js'],
            action: ['GitHub', 'Website'],
            url: ['https://github.com/justadudewhohacks/face-api.js', 'https://sohamdata.github.io/facedetection/'],
        },
        {
            title: 'Commander',
            description:
                "A .NET Core MVC REST API to review commands that we may use on a daily basis",
            image: reach,
            stats: ['C#', 'ASP.NET Core', 'Entity Framework Core', 'SQL Server', 'REST API'],
            action: ['GitHub'],
            url: ['https://github.com/sohamdata/commanderRESTAPI'],
        },
        {
            title: 'perlin noise',
            description:
                'interesting visualizations produced by using p5.js library.',
            image: garlicoin,
            stats: ['p5.js', 'javascript'],
            action: ['GitHub', 'Website'],
            url: ['https://github.com/sohamdata/PerlinNoise', 'https://sohamdata.github.io/PerlinNoise/'],
        },
    ];

    return (
        <div>
            <p style={styles.paragraph}>Here are some things I made.</p>
            {items.map((item, i) => (
                <div style={styles.itemContainer} key={`${i}`}>
                    <div style={styles.imageContainer}>
                        <img src={item.image} style={styles.thumbnail} alt="thumbnail" />
                    </div>
                    <div style={styles.attributeContainer}>
                        <div style={styles.textContainer}>
                            <header style={styles.itemHeader}>{item.title}</header>
                            <p style={styles.itemParagraph}>{item.description}</p>
                            {item.stats.map(stat => (
                                <span key={`${Math.random()}`} style={styles.itemBubble}>
                                    {stat}
                                </span>
                            ))}
                            <div style={styles.anchorContainer}>
                                <a href={item.url} style={styles.spanAnchor} target="_blank" rel="noreferrer">
                                    <span style={styles.span}>
                                        {item.action} <FontAwesomeIcon style={styles.icon} icon={faArrowRight} />
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
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
        padding: '12px 18px',
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        marginTop: 26,
        display: 'flex',
    },
    imageContainer: { flexGrow: 0.5, display: 'flex', justifyContent: 'flex-start' },
    attributeContainer: {
        flexGrow: 0.5,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft: 20,
    },
    textContainer: { textAlign: 'left' },
    thumbnail: { width: 60, height: 60, borderRadius: 8 },
    itemHeader: {
        fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
        fontWeight: 700,
        fontSize: 26,
        color: '#000000',
    },
    itemParagraph: {
        fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
        fontSize: 16,
        color: '#080808',
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
    anchorContainer: {
        marginTop: 30,
        marginBottom: 20,
    },
    spanAnchor: {
        textDecoration: 'none',
    },
    span: {
        backgroundColor: '#000000',
        color: '#f9f9f9',
        fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
        fontWeight: 800,
        fontSize: 16,
        padding: '12px 16px',
        borderRadius: 8,
    },
    icon: {
        marginLeft: 8,
    },
};
