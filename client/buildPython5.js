const fs = require('fs');

const pythonTopicsPart5 = \`            {
                id: 'python-functions',
                title: 'Functions',
                subItems: [
                    {
                        id: 'python-functions-topic',
                        title: 'Python Functions',
                        content: (
                            <div className="space-y-8 text-gray-800 leading-relaxed tracking-wide text-lg">
                                <h2 className="text-3xl font-extrabold text-blue-900 mt-12 mb-6 border-b-2 border-blue-100 pb-3">Python Functions</h2>
                                <p className="text-gray-700 mb-4">A function is a block of code which only runs when it is called.</p>
                                <p className="text-gray-700 mb-4">You can pass data, known as parameters, into a function.</p>
                                <p className="text-gray-700 mb-4">A function can return data as a result.</p>
                                
                                <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4 border-b border-gray-100 pb-2">Creating a Function</h3>
                                <p className="text-gray-700 mb-4">In Python a function is defined using the <code>def</code> keyword:</p>
                                <CodeBlock language="python" code={"def my_function():\\n  print(\\"Hello from a function\\")"} />
                                
                                <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4 border-b border-gray-100 pb-2">Calling a Function</h3>
                                <p className="text-gray-700 mb-4">To call a function, use the function name followed by parenthesis:</p>
                                <CodeBlock language="python" code={"def my_function():\\n  print(\\"Hello from a function\\")\\n\\nmy_function()"} />

                                <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4 border-b border-gray-100 pb-2">Arguments</h3>
                                <p className="text-gray-700 mb-4">Information can be passed into functions as arguments.</p>
                                <p className="text-gray-700 mb-4">Arguments are specified after the function name, inside the parentheses. You can add as many arguments as you want, just separate them with a comma.</p>
                                <CodeBlock language="python" code={"def my_function(fname):\\n  print(fname + \\" Refsnes\\")\\n\\nmy_function(\\"Emil\\")\\nmy_function(\\"Tobias\\")\\nmy_function(\\"Linus\\")"} />
                                
                                <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4 border-b border-gray-100 pb-2">Return Values</h3>
                                <p className="text-gray-700 mb-4">To let a function return a value, use the <code>return</code> statement:</p>
                                <CodeBlock language="python" code={"def my_function(x):\\n  return 5 * x\\n\\nprint(my_function(3))\\nprint(my_function(5))\\nprint(my_function(9))"} />
                            </div>
                        )
                    }
                ]
            }
        ]
    };

    // Load existing courseData.tsx
    const courseDataPath = './data/courseData.tsx';
    let fileContent = fs.readFileSync(courseDataPath, 'utf8');

    // Find the end of the courses object
    const closingBracketIndex = fileContent.lastIndexOf('}');
    const endOfCoursesIndex = fileContent.lastIndexOf('}', closingBracketIndex - 1);

    if (endOfCoursesIndex !== -1) {
        // Build the final string to inject
        const newPythonContent = \`
    ,
    'python': python
        \`;
        
        // Let's inject it into courseData.tsx
        let updatedContent = fileContent.substring(0, endOfCoursesIndex + 1) + newPythonContent + fileContent.substring(endOfCoursesIndex + 1);

        fs.writeFileSync(courseDataPath, updatedContent, 'utf8');
        console.log('Successfully injected Python content into courseData.tsx');
    } else {
        console.error('Could not find the injection point for courseData.tsx');
    }
}

injectEverything();\`;

fs.writeFileSync('injectPython_p5.js', pythonTopicsPart5, 'utf8');
console.log('Part 5 saved.');
