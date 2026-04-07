const fs = require('fs');

const data = JSON.parse(fs.readFileSync('java_scraped.json', 'utf8'));
let content = fs.readFileSync('data/courseData.tsx', 'utf8');

const javaStart = content.indexOf('java: {');
if (javaStart === -1) {
    console.log('Java section not found');
    process.exit(1);
}

const topicsStart = content.indexOf('topics: [', javaStart);
if (topicsStart === -1) {
    console.log('topics inside Java not found');
    process.exit(1);
}

const javaEndRegex = /\s*},\s*\/\/\s*=========================================================================\s*\/\/\s*C Programming/s;
const javaEndMatch = content.match(javaEndRegex);

let endOfTopics = -1;
if (javaEndMatch && javaEndMatch.index > topicsStart) {
    // Find the last ] before the match
    endOfTopics = content.lastIndexOf(']', javaEndMatch.index);
} else {
    // fallback if someone removed the comment
    const cStart = content.indexOf('c: {');
    endOfTopics = content.lastIndexOf(']', cStart);
}

if (endOfTopics === -1) {
    console.log('End of topics array not found');
    process.exit(1);
}

// Map the 17 items into objects
const subItemsObj = data.map(item => {
    // We have to be careful not to escape HTML tags.
    // Let's escape specific known instances. The easiest way is to escape '<' followed by space or '='
    // and '>' preceded by space or '='
    let safeContent = item.content.replace(/class=/g, 'className=')
        .replace(/<CodeBlock /g, '<CodeBlock language="java" ')
        .replace(/ < /g, ' &lt; ')
        .replace(/ > /g, ' &gt; ')
        .replace(/<=/g, '&lt;=')
        .replace(/>=/g, '&gt;=')
        .replace(/\(>\)/g, '(&gt;)')
        .replace(/\(<\)/g, '(&lt;)')
        .replace(/->/g, '-&gt;');

    // We can't easily nest random JS in the string without proper escaping.
    // The safest way in AST-less regex replacement is to dump the literal HTML string
    // but React needs a JSX element.
    // Let's just output it as a massive JSX fragment.

    return `{
                id: '${item.id}',
                title: '${item.title}',
                content: (<>${safeContent}</>)
            }`;
});

let newTopics = `
        topics: [
            {
                id: 'java-intro-basics',
                title: 'Java Basics',
                subItems: [
                    ${subItemsObj.slice(0, 4).join(',\n')}
                ]
            },
            {
                id: 'java-variables-data',
                title: 'Variables & Data',
                subItems: [
                    ${subItemsObj.slice(4, 10).join(',\n')}
                ]
            },
            {
                id: 'java-control-flow-arrays',
                title: 'Control Flow & Arrays',
                subItems: [
                    ${subItemsObj.slice(10, 17).join(',\n')}
                ]
            }
        ]`;

const newContent = content.slice(0, topicsStart) + newTopics + content.slice(endOfTopics + 1);
fs.writeFileSync('data/courseData.tsx', newContent, 'utf8');
console.log('Success injected Java');
