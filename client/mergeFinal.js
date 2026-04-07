const fs = require('fs');
const courseDataPath = './data/courseData.tsx';
let fileContent = fs.readFileSync(courseDataPath, 'utf8');

// I will extract the parts directly from the generated JS scripts
let c1 = fs.readFileSync('buildPython1.js', 'utf8');
let c2 = fs.readFileSync('buildPython2.js', 'utf8');
let c3 = fs.readFileSync('buildPython3.js', 'utf8');
let c4 = fs.readFileSync('buildPython4.js', 'utf8');
let c5 = fs.readFileSync('buildPython5.js', 'utf8');

const getPayload = (str) => {
    let start = str.indexOf('\`') + 1;
    let end = str.lastIndexOf('\`');
    return str.substring(start, end);
};

let rawParts = getPayload(c1) + getPayload(c2) + getPayload(c3) + getPayload(c4) + getPayload(c5).split('// Load')[0];
// The problem is Javascript template literal newline and string escapes
// Like: code={"print(\\"Hello\\")\\nprint('Hello')"}
// They get double written as '\\n' in code instead of '\n'

// Let's clean the stray backslashes combining array objects:
rawParts = rawParts.replace(/\\}, \\\\\\s*\\{/g, '},\\n            {');
// Same for the actual literals (they need to remain valid JS string literals inside code={""} in the OSX)
rawParts = rawParts.replace(/\\\\n/g, '\\\\n').replace(/\\\\"/g, '\\\\"');

let fullPayload = \`    ,
    'python': {
        topics: [
\` + rawParts + \`
    }\`;

const endOfCoursesIndex = fileContent.lastIndexOf('}'); // The final export object curly brace
const endOfExportObject = fileContent.lastIndexOf('}', endOfCoursesIndex - 1); 

if (endOfExportObject !== -1) {
    let updatedContent = fileContent.substring(0, endOfExportObject) + fullPayload + '\\n' + fileContent.substring(endOfExportObject);
    fs.writeFileSync(courseDataPath, updatedContent, 'utf8');
    console.log('Successfully saved to courseData.tsx');
}
