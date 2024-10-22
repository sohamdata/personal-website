import {
  butterflyEffect,
  cochef,
  criticai,
  elitecode,
  facerecog,
  golang,
  livesyntax,
  notesapp,
  perlinnoise,
  reach,
  sohamdatta,
  tictactoe,
  wordle,
} from "../assets/images";

const ProjectData = [
  {
    title: "Critic.ai",
    description:
      "Created a game review engine that utilizes Large Language Models and Retrieval Augmented Generation to generate aggregated textual Game reviews.",
    image: criticai,
    stats: [
      "React.js",
      "TypeScript",
      "TailwindCSS",
      "Socket.io",
      "LlamaIndex",
      "Large Language Models",
      "MongoDB",
      "VectorDB",
    ],
    action: ["Demo", "GitHub"],
    url: [
      "https://www.youtube.com/watch?v=j67vs5kmeQA",
      "https://github.com/critic-ai",
    ],
  },
  {
    title: "EliteCode",
    description:
      "A Full-stack LeetCode clone, with authentication and a interactive workspace providing an efficient problem-solving environment.",
    image: elitecode,
    stats: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "React.js",
      "Custom Hooks",
      "CodeMirror",
    ],
    action: ["Website", "GitHub"],
    url: [
      "https://elitecode-sohamdata.vercel.app/",
      "https://github.com/sohamdata/elitecode",
    ],
  },
  {
    title: "LiveSyntax",
    description:
      "A code editor that allows multiple users to edit the same code in real-time.",
    image: livesyntax,
    stats: [
      "React.js",
      "TypeScript",
      "TailwindCSS",
      "CodeMirror",
      "Socket.io",
      "Express.js",
    ],
    action: ["Website", "GitHub", "Wake up server"],
    url: [
      "https://livesyntax.vercel.app/",
      "https://github.com/sohamdata/LiveSyntax/",
      "https://livesyntax-server.glitch.me/wakeup",
    ],
  },
  {
    title: "toSpotify",
    description:
      "A command-line tool written in Go that allows users to quickly create a Spotify playlist from songs stored locally(.mp3, .wav, .flac, etc.)",
    image: golang,
    stats: ["go", "Spotify API", "cli"],
    action: ["Github"],
    url: ["https://github.com/sohamdata/tospotify-go"],
  },
  {
    title: "Co-Chef",
    description: "Find the recipes of tens of thousands of dishes!",
    image: cochef,
    stats: ["React.js", "Edamam API", "JavaScript"],
    action: ["Website", "GitHub"],
    url: [
      "https://recipes-app-React.js.web.app/",
      "https://github.com/sohamdata/Co-Chef",
    ],
  },
  {
    title: "wordle helper",
    description: "Python program to help you with wordle!",
    image: wordle,
    stats: ["python", "wordle", "oop"],
    action: ["Github"],
    url: ["https://github.com/sohamdata/wordlul"],
  },
  {
    title: "MiniMax Algorithm Tic-Tac-Toe",
    description: "Tic Tac Toe using the Min-Max Algorithm",
    image: tictactoe,
    stats: ["JavaScript", "algorithms", "minimax", "HTML", "CSS"],
    action: ["GitHub", "Website"],
    url: [
      "https://github.com/sohamdata/tic-tac-toe-minmax",
      "https://tic-tac-toe-mini-max.netlify.app/",
    ],
  },
  {
    title: "Notes App",
    description:
      "Fullstack React app for taking notes with auth using GraphQL and AWS platform.",
    image: notesapp,
    stats: ["React.js", "JavaScript", "graphql", "aws"],
    action: ["GitHub", "Demo"],
    url: [
      "https://github.com/sohamdata/aws-sem3-project",
      "https://user-images.githubusercontent.com/78294692/206841659-06aa6627-f2b6-4636-8492-3a3f725acc03.gif",
    ],
  },
  {
    title: "face detection",
    description: "Face and emotions detection website",
    image: facerecog,
    stats: ["HTML", "CSS", "JavaScript", "face-api.js"],
    action: ["GitHub", "Website"],
    url: [
      "https://github.com/sohamdata/facedetection",
      "https://sohamdata.github.io/facedetection/",
    ],
  },
  {
    title: "Commander",
    description:
      "A .NET Core MVC REST API to review commands that we may use on a daily basis",
    image: reach,
    stats: [
      "C#",
      "ASP.NET Core",
      "Entity Framework Core",
      "SQL Server",
      "REST API",
    ],
    action: ["GitHub"],
    url: ["https://github.com/sohamdata/commanderRESTAPI"],
  },
  {
    title: "perlin noise",
    description: "interesting visualizations produced by using p5.js library.",
    image: perlinnoise,
    stats: ["p5.js", "JavaScript"],
    action: ["GitHub", "Website"],
    url: [
      "https://github.com/sohamdata/PerlinNoise",
      "https://sohamdata.github.io/PerlinNoise/",
    ],
  },
  {
    title: "sohamisa.live",
    description:
      "One of the first websites I made, it was meant to teach myself and play around with HTML, CSS, JavaScript",
    image: sohamdatta,
    stats: ["JavaScript", "HTML", "CSS", "algorithms"],
    action: ["GitHub", "Website"],
    url: ["https://github.com/sohamdata/website", "https://sohamisa.live/"],
  },
  {
    title: "this website",
    description:
      "If you want to help in improving this website, create a pull request on my GitHub repository.",
    image: butterflyEffect,
    stats: ["React.js"],
    action: ["GitHub", "Feedback"],
    url: [
      "https://github.com/sohamdata/personal-website",
      "https://tally.so/r/3yMX9x",
    ],
  },
];

const SkillsInterests = [
  {
    name: "Programming Languages",
    tags: [
      "Python",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "SQL",
      "Go",
      "C++",
      "Java",
    ],
  },
  {
    name: "Tools/Frameworks",
    tags: [
      "Git",
      "NextJS/React.js",
      "Flask",
      "MySQL",
      "NoSQL DB's",
      "Django",
      "AWS",
      "Node.js",
      "Tailwind CSS / Ant Design/ MUI / Bootstrap",
      "Docker",
      "Linux",
      "UML diagrams",
    ],
  },
  {
    name: "Hobbies",
    tags: [
      "Outdoors",
      "Travel",
      "Mountain biking",
      "Computers",
      "Guitar",
      "Football",
      "Video Games",
      "Automobiles",
      "Open Source",
      "The Internet",
      "Whatever interests me",
    ],
  },
];

const Ideas = [
  {
    name: "one use text-chat",
    description: "description",
    tags: ["free plan", "pro plan @ $100/month"],
  },
  {
    name: "downloadable internet",
    description: "description",
    tags: ["internet", "offline"],
  },
];

const Backgrounds = [
  "https://glslsandbox.com/e#108297.0",
  "https://glslsandbox.com/e#99603.8",
  "https://mrdoob.com/projects/chromeexperiments/google-space/",
  "https://glslsandbox.com/e#99596.0",
  "https://glslsandbox.com/e#99332.0",
  "https://glslsandbox.com/e#99536.6",
];

const Music = [
  "closer2.aac",
  "ego.aac",
  "icarus.aac",
  "peaked.aac",
  "scifi.aac",
  "startend.aac",
  "tomtom.aac",
  "twenty24.aac",
];

export { Backgrounds, Ideas, Music, ProjectData, SkillsInterests };
