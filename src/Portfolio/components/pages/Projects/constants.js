export const skillType = {
    "frontend": ["React", "HTML", "CSS", "styled-components", "Jest", "Enzyme", "ReactVR", "react-google-charts", "Tailwind","JQuery"],
    "languages": ["JavaScript", "Python", "Harlowe"],
    "backend": ["Django", "NodeJS", "Flask", "Firebase","Express","Axios","PHP"],
    "database": ["Redis", "PostgreSQL", "MongoDB","MySQL"],
    "UX": ["Figma","Sketch"],
    "AI": ["scikit-learn","NLTK","Stanford-CoreNLP","Word2Vec","lexrank","Aubio","textblob"]
}
export const skillColors = {
    "frontend": "#000d96",
    "languages": "#900",
    "backend": "#d4a900",
    "database": "#00c90a",
    "UX": "#7500ab",
    "AI": "#c40080",
    "other": "#333"
}
export const ProjectsData = [{
    title: "Work Projects",
    projects: [
        {
            title: "AARDVARC",
            description: "USC School of Pharmacy's Automated approach to reviewing and developing valuable assessment resources for its curriculum. It helps the school streamline its programmatic, curricular, faculty, teaching, and experiential data.",
            contribution: "I worked with the team to develop new features and build UX wireframes for the admin panel. ",
            link: "https://acadoinformatics.com/aardvarc/",
            techStack: ["Django", "Python", "HTML", "CSS", "JavaScript", "Figma"],
            duration: "December 2021 - Present",
            color: "#900",
            font:"Helvetica",
        },
        {
            title: "TYPS eCases",
            description: "eCases are a part of the Teach Yourself Pharmaceutical Sciences platform by USC School of Pharmacy, aimed at presenting different scenarios to Pharmacy students testing on their response to the situation.",
            contribution: "I worked with the team to develop the eCases using Twine, HTML and CSS. I also developed a platform wherein new eCases can be 'run' instead of built from scratch.",
            techStack: ["Twine", "Harlowe", "HTML", "CSS", "JavaScript"],
            duration: "October 2021 - Present",
            color: "#900",
            font:"Helvetica",
        },
        {
            title: "myProduct Promotions",
            description: "Promotions management tool for products sold at Tesco stores. The module helps in streamlining the complete promotion lifecycle, reducing the number of duplicate and stale promotions at Tesco by 60%.",
            contribution: "I worked as a Frontend developer, architecting and developing new components and screens after through discussions with the product management team. The team managed the NodeJS middleware, React Frontend Application, Redis cache system and Selenium test automation suite for the application",
            techStack: ["JavaScript", "React", "styled-components", "Jest", "Enzyme", "NodeJS", "Redis"],
            duration: "September 2018 - July 2021",
            color: "#00569f",
            font:"TESCO Modern",
        },
        {
            title: "Unified Dashboard",
            description: "Project tracking dashboard for Unified Visualization and Analysis of stories, code quality, app health and user experience metrics and support processes in a single view. It pulls data from Github, Sonarqube, Jira, AppDynamics and Zendesk to give managers and directors a single yet detailed view of the status of an application",
            contribution: "Solely developed the POC for Unified Dashboard in React, NodeJS and MongoDB, hosted on Tesco Private Cloud. Later, the application was extended with more features, built on a Springboot backend with PostgreSQL.",
            techStack: ["JavaScript", "React", "styled-components", "NodeJS", "MongoDB", "Jest", "Enzyme", "Figma"],
            duration: "May 2019 - July 2021",
            color: "#00569f",
            font:"TESCO Modern",
        },
        {
            title: "myEveryday Conversations",
            description: "Conversation logging application built for the HR team at Tesco to to manage regular and ad-hoc meetings between Tesco colleagues and their managers.",
            contribution: "I worked on the UX prototypes for the application discussing with the HR team and built the React frontend for the application hosted on Tesco Private Cloud",
            techStack: ["JavaScript", "React", "styled-components", "NodeJS", "PostgreSQL", "Figma"],
            duration: "October 2018 - May 2019",
            color: "#00569f",
            font:"TESCO Modern",
        },
        {
            title: "Product Group ID Matcher",
            description: "AI tool that automated categorization of inventory products to speed up adding new entities to the system and eliminate errors.",
            contribution: "Worked with the AI lead at Tesco to build the Frontend application and supporting Flask backend",
            techStack: ["JavaScript", "React", "styled-components", "Python", "Flask", "scikit-learn"],
            duration: "June 2019",
            color: "#00569f",
            font:"TESCO Modern",
        },
        {
            title: "Virtual Store",
            description: "Virtual Reality Application that helps planogrammers at Tesco to visualize and plan the ideal placement of products in the store and get an idea of how the store would look like.",
            contribution: "Worked with the team to build the ReactVR application and integrate with NodeJS backend connected to existing Tesco APIs",
            techStack: ["JavaScript", "ReactVR", "NodeJS"],
            duration: "July 2018 - September 2018",
            color: "#00569f",
            font:"TESCO Modern",
        },
    ]
},
{
    title: "Side projects and Volunteering",
    projects: [{
        title: "Market Sentiment",
        link: "https://www.marketsentiment.live",
        description: "Real-time AI Chatter & Sentiment Analyzer, for stock trading. The application analyses Twitter posts about stock tickers and displays the sentiment associated with a stock, hence providing insights for stock trading.",
        contribution: "Worked on the Frontend application in React using react-google-charts.",
        techStack: ["JavaScript", "React", "styled-components", "react-google-charts"],
        duration: "April 2021 - July 2021",
        color: "#319cd1",
        font:"Open Sans",
    }, {
        title: "Market Pearl",
        description: "Sustainability-driven B2B fabric sourcing marketplace and inventory analytics platform serving apparel brands, retailers, and manufacturers. The platform connected fabric manufacturers and retailers from across the world, allowing brands to purchase materials from new fabric suppliers.",
        contribution: "Worked with the team to build UX wireframes and the POC in React and Firebase.",
        techStack: ["JavaScript", "React", "styled-components", "Firebase"],
        duration: "May 2020 - November 2020",
        color: "#fe8590",
        font:"Rubik",
    }, {
        title: "Coronasafe - Suspect Tracker",
        link: "https://www.coronasafe.in/",
        description: "Website aimed to be used by Primary Health Centers, Railway and Airport officials to report and maintain records of passengers who have arrived from infected regions and people who have come in contact with confirmed patients and suspected patients.",
        contribution: "Worked with the team to develop new features for the existing application.",
        techStack: ["JavaScript", "React", "styled-components", "Tailwind"],
        duration: "April 2020",
        color: "#b21936",
        font:"Poppins"
    }, {
        title: "Animapp",
        description: "Webapp connecting pet owners and veterinarians in Chennai",
        contribution: "Worked on the doctor facing application to maintain records of injured pets.",
        techStack: ["PHP","HTML","CSS","JQuery","MySQL","Sketch"],
        duration: "June 2016",
        color: "#2a286c",
        font:"Rubik",
    }]
}, {
    title: "Open Source Contributions",
    projects: [
        {
            title: "Create Styled React Component",
            link: "https://marketplace.visualstudio.com/items?itemName=amaljose96.create-styled-react-component",
            description: "VS Code Extension that generates the folder structure and boilerplate code for a new React styled-components based component along with a snapshot test case",
            techStack: ["JavaScript", "React", "styled-components", "Jest"],
            duration: "April 2020",
            color: "#107c10",
        },
        {
            title: "Hera",
            link: "https://www.npmjs.com/package/hera-monitor",
            description: "Network log manager for axios and express. This tracks details of all incoming requests, corresponding outgoing API calls and responses for each request like timing and responses - hence helping to figure out slow calls or in error logging.",
            techStack: ["JavaScript", "Express", "NodeJS", "Axios", "React"],
            duration: "April 2020",
            color: "#EA2039"
        },
        {
            title: "Sodux",
            link: "https://www.npmjs.com/package/sodux-mother",
            description: "Network log manager for axios and express. This tracks details of all incoming requests, corresponding outgoing API calls and responses for each request like timing and responses - hence helping to figure out slow calls or in error logging.",
            techStack: ["JavaScript", "Express", "NodeJS", "Axios", "React"],
            duration: "April 2020",
            color: "#EA2039"
        },
        {
            title: "Pearls",
            description: "UI Component Library for React that provides basic components like Buttons, Cards and Tables",
            techStack: ["JavaScript", "React", "styled-components"],
            duration: "Unreleased",
            color: "#EA2039"
        },
        {
            title: "React Template",
            link:"https://github.com/amaljose96/aj-react-template",
            description: "A template for React App that has boilerplate code for features like global state management using useContext and useProvider",
            techStack: ["JavaScript", "React", "styled-components"],
            color: "#006eed"
        },
    ]
},{
    title:"Research Projects",
    projects: [
        {
            title:"Natural Language Question Answering System",
            description:"An NLP system which takes in a passage and a question as an input and finds the sentence from the passage that answers the question. This involves classification of questions as factual and descriptive using an MLP Classifier, preprocessing using NLTK, parsing with Stanford parser and finding similarity using Word2Vec",
            contribution:"Worked with team of 3 to implement the project and come up with a draft research paper",
            techStack: ["Python","NLTK","Stanford-CoreNLP","Word2Vec","scikit-learn"],
            duration:"August 2017 - May 2018",
            color: "#00008B"
        },
        {
            title:"Survey Paper on Extractive Text Summarisation Techniques",
            description:"A survey on the current state of the art text summarisation techniques such as LexRank and TF-IDF",
            contribution:"Worked with team of 3 to survey existing literature and evaluate different text summarisation techniques",
            techStack: ["Python","NLTK","lexrank"],
            duration:"August 2017 - December 2017",
            color:"green"
        },
        {
            title:"Chord Detection",
            description:"A machine learning approach to detecting chords in songs. This involved converting WAV files to features that can be used by the classifier to detect chords.",
            techStack: ["Python","Aubio","scikit-learn"],
            duration:"February 2019",
            color:"darkred"
        },
        {
            title:"Paragraph to Rating",
            description:"An NLP project that takes in a paragraph and gives a 10 star rating based on it's sentiment using NLTK's Vader module",
            techStack: ["Python","NLTK","textblob"],
            link:"https://github.com/amaljose96/Paragraph_to_rating",
            duration:"February 2019",
            color:"gray"
        }
    ]
},{
    title:"College projects",
    projects:[
        {
            title:"Clueless '15 and Clueless '16",
            description:"A picture-based quiz built as a part of Tathva, the technical fest at NIT Calicut",
            contribution:"My first public facing webpage written in basic HTML, CSS, JQuery and PHP",
            techStack:["HTML","CSS","JavaScript","JQuery","PHP"],
            duration:"2015, 2016",
            font:"Roboto",
            color:"limegreen"
        },{
            title:"Tathva '16",
            description:"Website for the technical fest at NIT Calicut. This displayed events and workshops happening in the fest and allowed students to register for events",
            contribution:"Worked on the Frontend webpage for the team using JQuery and PHP",
            techStack:["HTML","CSS","JavaScript","JQuery","PHP"],
            duration:"October 2016",
            font:"Nanum Gothic",
            color:"turquoise",
        },{
            title:"Echoes '18",
            description:"Website for the cultural fest at IIM Kozhikode for students and professionals to view events and concerts happening at Echoes'18",
            contribution:"This was my first freelance project which was done using HTML, CSS and JQuery",
            techStack:["HTML","CSS","JavaScript","JQuery"],
            duration:"February 2018",
            font:"Avenir",
            color:"darkred",
        },{
            title:"Ragam '18",
            description:"Website for the cultural fest at NIT Calicut. Events, Proshows and workshops happening at Ragam '18 were displayed here and students could purchase tickets to attend them.",
            contribution:"Developed the main website and Campus Ambassador website as a part of the Ragam Website Team",
            techStack:["HTML","CSS","JavaScript","JQuery","PHP"],
            duration:"March 2018",
            color:"orange",
        },
    ]
}]