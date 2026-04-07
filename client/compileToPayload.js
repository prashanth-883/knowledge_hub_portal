const fs = require('fs');

const extractStr = (fileName) => {
    let content = fs.readFileSync(fileName, 'utf8');
    let startIndex = content.indexOf('\`') + 1;
    let endIndex = content.lastIndexOf('\`');
    if (startIndex > 0 && endIndex > startIndex) {
        return content.substring(startIndex, endIndex);
    }
    return '';
}

const v1 = extractStr('buildPython1.js');
const v2 = extractStr('buildPython2.js');
const v3 = extractStr('buildPython3.js');
const v4 = extractStr('buildPython4.js');
const fullV5 = extractStr('buildPython5.js');
const v5ArrayOnly = fullV5.split('// Load existing')[0];

const chunkRegex = /\\}, \\\\\\s*\\{/g; // Look for stray escapes and braces at concatenation boundaries.

let fullArrayItems = (v1.trim() + ',' + v2.trim() + ',' + v3.trim() + ',' + v4.trim() + ',' + v5ArrayOnly.trim())
    .replace(chunkRegex, '},\\n            {');

let fullPayload = \`    ,
    'python': {
        \` + fullArrayItems + \`
    }\`;

const courseDataPath = './data/courseData.tsx';
let fileContent = fs.readFileSync(courseDataPath, 'utf8');

const endOfCoursesIndex = fileContent.lastIndexOf('}'); // The final export object curly brace
const endOfExportObject = fileContent.lastIndexOf('}', endOfCoursesIndex - 1); 

if (endOfExportObject !== -1) {
    let updatedContent = fileContent.substring(0, endOfExportObject) + fullPayload + '\\n' + fileContent.substring(endOfExportObject);
    fs.writeFileSync(courseDataPath, updatedContent, 'utf8');
    console.log('Successfully injected Python content into courseData.tsx');
} else {
    console.log('Failed finding export object');
}
