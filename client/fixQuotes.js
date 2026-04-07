const fs = require('fs');

let content = fs.readFileSync('data/pythonCourseData.tsx', 'utf8');

// The issue is code={"x = 5\\nprint(x)"} is giving TSX errors.
// It's much cleaner to use template literals: code={\`x = 5\\nprint(x)\`}
content = content.replace(/code=\\{"([^"]*?)"\\}/g, (match, p1) => {
    // When switching from standard double quotes to literal we need to unescape \\n to literal \n in the source file
    let fixed = p1.replace(/\\\\n/g, '\\n');
    // We also need to unescape \\" to just "
    fixed = fixed.replace(/\\\\"/g, '"');
    return \`code={\\\`\${fixed}\\\`}\`;
});

// There are also some ones that might use single quotes or different arrangements
content = content.replace(/code=\\{'([^']*?)'\\}/g, (match, p1) => {
    let fixed = p1.replace(/\\\\n/g, '\\n');
    fixed = fixed.replace(/\\\\'/g, "'");
    return \`code={\\\`\${fixed}\\\`}\`;
});

// Since I wrote `"\\n"` in multiple scripts as literal string, sometimes it's two slashes, sometimes it's four. Let's make sure.
// If it's a raw string literal on disk:
// We just want standard JS template syntax: `console.log("hello"); `
fs.writeFileSync('data/pythonCourseData.tsx', content, 'utf8');
console.log('Fixed quotes in pythonCourseData.tsx');
