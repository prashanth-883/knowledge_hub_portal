const fs = require('fs');
const courseDataPath = './data/courseData.tsx';
let fileContent = fs.readFileSync(courseDataPath, 'utf8');

const badString = "    \\n    ,\\n    'python': {\\n                topics: [";
const goodString = "    ,\\n    'python': {\\n        topics: [";

if (fileContent.includes(badString)) {
    fileContent = fileContent.replace(badString, goodString);
    fs.writeFileSync(courseDataPath, fileContent, 'utf8');
    console.log('Fixed syntax error via JS script!');
} else {
    console.log("Could not find the literal string.");
}
