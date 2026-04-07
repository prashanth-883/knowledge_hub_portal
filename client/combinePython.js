const fs = require('fs');

const extractStr = (fileName) => {
    let content = fs.readFileSync(fileName, 'utf8');
    // We used: const pythonTopicsPartX = \` ... \`;
    // We want to extract everything between the backticks.
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
// v5 includes the injection script logic at the bottom so we only want the array part.
const fullV5 = extractStr('buildPython5.js');
const v5ArrayOnly = fullV5.split('// Load existing')[0];

const fullPayload = v1 + v2 + v3 + v4 + v5ArrayOnly;

const courseDataPath = './data/courseData.tsx';
let fileContent = fs.readFileSync(courseDataPath, 'utf8');

// We need to inject right before the final '};' of the module exports.
const endOfCoursesIndex = fileContent.lastIndexOf('}'); // The final export object curly brace
const endOfExportObject = fileContent.lastIndexOf('}', endOfCoursesIndex - 1);

if (endOfExportObject !== -1) {
    const newPythonContent = "\\n    ,\\n    'python': {\\n        " + fullPayload + "\\n    }\\n    ";
    let updatedContent = fileContent.substring(0, endOfExportObject) + newPythonContent + fileContent.substring(endOfExportObject);
    fs.writeFileSync(courseDataPath, updatedContent, 'utf8');
    console.log('Successfully injected Python content into courseData.tsx');
} else {
    console.log('Failed finding export object');
}
