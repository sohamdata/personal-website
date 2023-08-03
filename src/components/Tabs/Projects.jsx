import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { elitecode, reach, perlinnoise, notesapp, facerecog, golang, wordle, cochef, tictactoe, sohamdatta, butterflyEffect, logindash } from '../../assets/images';

export default function Projects() {
    const items = [
        {
            title: 'EliteCode',
            description:
                'A Full-stack LeetCode clone, with authentication and a interactive workspace providing an efficient problem-solving environment.',
            image: elitecode,
            stats: ['Next.js', 'TypeScript', 'TailwindCSS', 'ReactJS', 'Custom Hooks', 'CodeMirror'],
            action: ['Website', 'GitHub'],
            url: ['https://elitecode-sohamdata.vercel.app/', 'https://github.com/sohamdata/elitecode'],
        },
        {
            title: 'Co-Chef',
            description:
                'Find the recipes of tens of thousands of dishes!',
            image: cochef,
            stats: ['ReactJS', 'Edamam API', 'JavaScript'],
            action: ['Website', 'GitHub'],
            url: ['https://recipes-app-reactjs.web.app/', 'https://github.com/sohamdata/Co-Chef'],
        },
        {
            title: 'toSpotify',
            description:
                'A command-line tool written in Go that allows users to quickly create a Spotify playlist from songs stored locally(.mp3, .wav, .flac, etc.)',
            image: golang,
            stats: ['go', 'Spotify API', 'cli'],
            action: ['Github'],
            url: ['https://github.com/sohamdata/tospotify-go'],
        },
        {
            title: 'Notes App',
            description:
                'Fullstack React app for taking notes with auth using GraphQL and AWS services.',
            image: notesapp,
            stats: ['ReactJS', 'JavaScript', 'graphql', 'aws'],
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
            title: 'Login Dashboard',
            description:
                'A login dashboard with field validation and user authentication local storage using ReactJS, made to practice React Hooks.',
            image: logindash,
            stats: ['ReactJS'],
            action: ['GitHub', 'Live'],
            url: ['https://github.com/sohamdata/react-login-dashboard', 'https://login-dash.netlify.app/'],
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
            stats: ['JavaScript', 'algorithms', 'minimax', 'HTML', 'CSS'],
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
            title: 'sohamdata.github.io/website',
            description:
                'One of the first websites I made, it was meant to teach myself and play around with HTML, CSS, JavaScript',
            image: sohamdatta,
            stats: ['JavaScript', 'HTML', 'CSS', 'algorithms'],
            action: ['GitHub', 'Website'],
            url: ['https://github.com/sohamdata/website', 'https://sohamdata.github.io/website/'],
        },
        {
            title: 'this website',
            description:
                'If you want to help in improving this website, create a pull request on my GitHub repository.',
            image: butterflyEffect,
            stats: ['ReactJS'],
            action: ['GitHub', 'Feedback'],
            url: ['https://github.com/sohamdata/personal-website', 'https://tally.so/r/3yMX9x'],
        },
    ];

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
