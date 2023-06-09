const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let profile = {};

const questions = [
  "What's your name? Nicknames are also acceptable :)",
  "What's an activity you like doing?",
  "What do you listen to while doing that?",
  "Which meal is your favourite (e.g., dinner, brunch, etc.)?",
  "What's your favourite thing to eat for that meal?",
  "Which sport is your absolute favourite?",
  "What is your superpower? In a few words, tell us what you are amazing at!"
];

const askQuestion = (x) => {
  rl.question(questions[x] + ' ', (answer) => {
    profile[questions[x]] = answer;
    if (x < questions.length - 1) {
      askQuestion(x + 1);
    } else {
      generateProfile();
      rl.close();
    }
  });
};

const generateProfile = () => {
  let text = "";
  for (const question of questions) {
    const answer = profile[question];
    text += `${question}\n${answer}\n\n`;
  }
  console.log(text);
};

askQuestion(0)