import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

// assets
import reach from '../assets/reach.gif';
import perlinnoise from '../assets/perlinnoise.gif';
import notesapp from '../assets/notesapp.png';
import facerecog from '../assets/facerecog.png';
import golang from '../assets/toSpotify.png';
import wordle from '../assets/wordle.png';
import cochef from '../assets/cochef.png';
import tictactoe from '../assets/tictactoe.png';
import sohamdatta from '../assets/sohamdatta.png';

export default function Projects() {
    // items for projects
    const items = [
        {
            title: 'Co-Chef',
            description:
                'Find the recipes of tens of thousands of dishes!',
            image: cochef,
            stats: ['react', 'Edamam API', 'javascript'],
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
            image: notesapp,
            stats: ['react', 'javascript', 'netlify', 'graphql', 'aws'],
            action: ['GitHub', 'Demo'],
            url: ['https://github.com/sohamdata/aws-sem3-project', 'https://user-images.githubusercontent.com/78294692/206841659-06aa6627-f2b6-4636-8492-3a3f725acc03.gif'],
        },
        {
            title: 'wordle helper',
            description:
                'Python program to help you with wordle!',
            image: wordle,
            stats: ['python', 'wordle', 'oop'],
            action: ['Github'],
            url: ['https://github.com/sohamdata/wordlul'],
        },
        {
            title: 'face detection',
            description:
                "Face and emotions detection website",
            image: facerecog,
            stats: ['HTML', 'CSS', 'JavaScript', 'face-api.js'],
            action: ['GitHub', 'Website'],
            url: ['https://github.com/sohamdata/facedetection', 'https://sohamdata.github.io/facedetection/'],
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
            title: 'MiniMax Algorithm Tic-Tac-Toe',
            description:
                'Tic Tac Toe using the Min-Max Algorithm',
            image: tictactoe,
            stats: ['JavaScript', 'algorithms', 'HTML', 'CSS'],
            action: ['GitHub', 'Website'],
            url: ['https://github.com/sohamdata/tic-tac-toe-minmax', 'https://tic-tac-toe-mini-max.netlify.app/'],
        },
        {
            title: 'perlin noise',
            description:
                'interesting visualizations produced by using p5.js library.',
            image: perlinnoise,
            stats: ['p5.js', 'JavaScript'],
            action: ['GitHub', 'Website'],
            url: ['https://github.com/sohamdata/PerlinNoise', 'https://sohamdata.github.io/PerlinNoise/'],
        },
        {
            title: 'sohamdatta.ga',
            description:
                'I made this website to teach myself and play around with HTML, CSS, Javascript, and markdown.',
            image: sohamdatta,
            stats: ['JavaScript', 'HTML', 'CSS', 'algorithms'],
            action: ['GitHub', 'Website'],
            url: ['https://github.com/sohamdata/website', 'https://sohamdatta.ga/'],
        },
    ];

    return (
        <div>
            <p style={styles.paragraph}>Here are some things I made.</p>
            {items.map((item, i) => (
                <div style={styles.itemContainer} key={`${i}`}>
                    <div style={styles.imageContainer}>
                        <img src={item.image} alt={item.title} style={styles.image} />
                    </div>
                    <div style={styles.textContainer}>
                        <header style={styles.itemHeader}>{item.title}</header>
                        <p style={styles.itemParagraph}>{item.description}</p>
                        {item.stats.map(stat => (
                            <span key={`${Math.random()}`} style={styles.itemBubble}>
                                {stat}
                            </span>
                        ))}
                        <div style={styles.anchorContainer}>
                            {item.action.map((action, i) => (
                                <a href={item.url[i]} style={styles.spanAnchor} target="_blank" rel="noreferrer">
                                    <span key={i} style={styles.span}>
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
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        marginTop: 26,
        display: 'flex',
        alignItems: 'center',
    },
    imageContainer: {
        width: '28%',
        padding: '10px',
    },
    image: {
        width: '100%',
    },
    textContainer: {
        width: '60%',
        padding: '10px',
        textAlign: 'center',
    },
    itemHeader: {
        fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
        fontWeight: 700,
        fontSize: 26,
        // fontSize: '1.5rem',
        margin: '10px 0'
    },
    itemParagraph: {
        fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
        fontSize: 16,
        margin: '10px 0'
    },
    itemBubble: {
        backgroundColor: '#000000',
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
        backgroundColor: '#000000',
        color: '#f9f9f9',
        fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
        fontWeight: 800,
        fontSize: 16,
        padding: '12px 16px',
        margin: '0 8px',
        borderRadius: 8,
    },
    icon: {
        marginLeft: 8,
    },
};