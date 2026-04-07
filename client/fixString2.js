const fs = require('fs');
const courseDataPath = './data/courseData.tsx';
let fileContent = fs.readFileSync(courseDataPath, 'utf8');

// The problematic string looks like this in raw file structure:
//         ]
//     \\n    ,\\n    \\'python\\': {\\n                topics: [
//             {
//                 id: 'python-intro',

const goodClosing = '        ]\\n    },';
const pythonStart = "    'python': {\\n        topics: [\\n            {\\n                id: 'python-intro',";

const markerStart = fileContent.indexOf("id: 'number_system',");
const startSliceIndex = fileContent.indexOf("        ]\\n    \\n    ,\\n    \\'python\\': {\\n                topics: [\\n            {\\n                id: 'python-intro',", markerStart);

if (startSliceIndex !== -1) {
    console.log("Found the target chunk.");
    // calculate exactly how many chars to drop based on the pattern
    const dropLength = "        ]\\n    \\n    ,\\n    \\'python\\': {\\n                topics: [\\n            {\\n                id: 'python-intro',".length;
    fileContent = fileContent.substring(0, startSliceIndex) + goodClosing + "\\n" + pythonStart + fileContent.substring(startSliceIndex + dropLength);
    fs.writeFileSync(courseDataPath, fileContent, 'utf8');
    console.log("Fixed!");
} else {
    // Brute force substring search
    const badChunk = fileContent.substring(fileContent.indexOf("        ]\\n    \\n"), fileContent.indexOf("id: 'python-intro',"));
    console.log("Found this chunk to replace:");
    console.log(badChunk);

    fileContent = fileContent.replace(badChunk, "        ]\\n    },\\n    'python': {\\n        topics: [\\n            {\\n                ");
    fs.writeFileSync(courseDataPath, fileContent, 'utf8');
    console.log("Replaced brute force chunk.");
}
