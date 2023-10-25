// const { Configuration, OpenAIApi } = require("openai");
// const apiKey = "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"
// const configuration = new Configuration({apiKey});
// const openai = new OpenAIApi(configuration);

//This emulates api behavior
let openai = {
    createCompletion: (params) => {
        console.log(params)
        return new Promise((resolve) => {
            setTimeout(() => {
                if (params.prompt[0] === "I") {
                    resolve({
                        "id": "cmpl-uqkvlQyYK7bGYrRHQ0eXlWi7",
                        "object": "text_completion",
                        "created": 1589478378,
                        "model": "text-davinci-003",
                        "choices": [
                            {
                                "text": `Sure! Here's a list of topics you should consider preparing for as a Frontend Engineer:
    
HTML, CSS, JavaScript, React, Angular, Vue.js, Responsive Web Design, Browser compatibility, Version control (Git), DOM manipulation, AJAX, RESTful APIs, Web performance optimization, Cross-browser testing, Frontend build tools (Webpack, Gulp, etc.), Frontend frameworks and libraries, UI/UX principles, Accessibility standards (WCAG), Testing and debugging, Frontend security, Code optimization and best practices, Progressive Web Apps (PWA), Mobile-first development, Frontend performance monitoring, CSS preprocessors (Sass, Less, etc.), Frontend package managers (npm, Yarn, etc.), Frontend deployment and hosting.

Remember to also review any specific requirements or technologies mentioned in the job description to tailor your preparation accordingly. Good luck with your interview!`,
                                "index": 0,
                                "logprobs": null,
                                "finish_reason": "length"
                            }
                        ],
                        "usage": {
                            "prompt_tokens": 5,
                            "completion_tokens": 7,
                            "total_tokens": 12
                        }
                    })
                }
                else {
                    resolve({
                        "id": "cmpl-uqkvlQyYK7bGYrRHQ0eXlWi7",
                        "object": "text_completion",
                        "created": 1589478378,
                        "model": "text-davinci-003",
                        "choices": [
                            {
                                "text": `Certainly! Here are 10 interview questions related to React:
What is React and what are its key features?
Explain the difference between functional components and class components in React.
What is JSX in React? How is it different from HTML?
What are React hooks? How do they differ from class-based components?
How does state work in React? What is the difference between state and props?
What is the significance of virtual DOM in React?
Explain the lifecycle methods in React and their order of execution.
How do you handle forms in React? Explain controlled and uncontrolled components.
What is React Router? How does it facilitate routing in React applications?
Describe the concept of conditional rendering in React.
Remember to go beyond just the questions and thoroughly understand the concepts and implementations behind each question. Good luck with your interview preparation!`,
                                "index": 0,
                                "logprobs": null,
                                "finish_reason": "length"
                            }
                        ],
                        "usage": {
                            "prompt_tokens": 5,
                            "completion_tokens": 7,
                            "total_tokens": 12
                        }
                    })
                }
            }, Math.random() * 10000);



        })
    }
}

/**
 * If its a job description, the chat is gonna be like this.
 * 
 * I am preparing for an interview. The Job Description is :
 * {Job Description}
 * 
 * What all topics (separated by commas) should I prepare for? Just give the list and no extra description.
 * 
 * This is gonna bring both to the same page.
 */

function callChatGPT(prompt) {
    return openai.createCompletion({
        model: "gpt-3.5-turbo",
        prompt,
        temperature: 0.6,
    })
}

export function getSteps(query) {
    let steps = [];
    
    if (query.type === "role") {
        steps.push({text:"Fetching relevant Skills",activity:getSkills})
        steps.push({text:"Parsing Skill Information",activity:formatSkills})
    }
    steps.push({text:"Fetching Questions for Skills",activity:getQuestions});
    steps.push({text:"Formatting Question Information",activity:formatQuestions});
    let initialStep={
        text:"Preparing Information",
        activity:Promise.resolve(query.content)
    }
    return {initialStep,steps};
}

function getSkills(jobDescription) {
    let prompt = `I am preparing for an interview. The Job Description is :
${jobDescription}
What all topics (separated by commas) should I prepare for? Just give the list and no extra description.`;
    return callChatGPT(prompt).then(completion => {
        return completion;
    })
}
function formatSkills(response) {
    return new Promise((r) => {
        let text = response.choices[0].text
        r(text.split("\n").find(row => row.includes(",")))
    })
}

function getQuestions(skillset) {
    let prompt = `Get me 10 interview questions each for ${skillset}
Just give the list and no extra description`;
    return callChatGPT(prompt).then(completion => {

        return completion;
    })
}

function formatQuestions(response) {
    return new Promise((r) => {
        let text = response.choices[0].text
        let lines = text.split('\n')
        r(lines.slice(1, lines.length - 2))
    })
}