const fs = require('fs');
const courseDataPath = './data/courseData.tsx';
let fileContent = fs.readFileSync(courseDataPath, 'utf8');

const badString = '    \\n    ,\\n    \\'python\\': {\\n                topics: [';
const replacement = '    ,\\n    \\'python\\': {\\n        topics: [';

if (fileContent.includes(badString)) {
    fileContent = fileContent.replace(badString, replacement);
    fs.writeFileSync(courseDataPath, fileContent, 'utf8');
    console.log('Successfully fixed the start of the python object');
} else {
    console.log('Could not find the bad string');
}
