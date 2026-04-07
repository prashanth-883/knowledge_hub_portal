const fs = require('fs');

const extractStr = (fileName) => {
    let content = fs.readFileSync(fileName, 'utf8');
    // I know that the previous script failed because I didn't replace the unescaped literal \\n in JSX content

    // Read the array items manually bypassing the string literal syntax errors 
    let startIndex = content.indexOf('        topics: [') + 17;
    let endIndex = content.lastIndexOf('    }\\n};');
    if (endIndex === -1) endIndex = content.lastIndexOf('};');

    if (startIndex > 17 && endIndex > startIndex) {
        return content.substring(startIndex, endIndex);
    }
    return '';
}

// Read the old files where I know the JSX object is mostly valid except for concatenation lines.
let content = fs.readFileSync('buildPython5.js', 'utf8');
let topicsStr = content.split('// Load existing')[0];

const pythonStart = \`    ,
    'python': {
        topics: [
\`;

let fullPayload = pythonStart + topicsStr.substring(topicsStr.indexOf('            {'), topicsStr.lastIndexOf(']'));

// Clean all literal '\\n' which break the compiler
fullPayload = fullPayload.replace(/\\\\n/g, '\\\\n');
// Also clean literal '\\"'
fullPayload = fullPayload.replace(/\\\\"/g, '\\\\"');

// The string in buildPython5.js actually contains ALL the content since I've fixed it before in a previous file! 
// Let's see what buildPython5 actually contains.
console.log('buildPython5 length:', fullPayload.length);
