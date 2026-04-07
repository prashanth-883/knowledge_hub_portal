const fs = require('fs');

const pythonTopicsPart1 = \`        topics: [
            {
                id: 'python-intro',
                title: 'Basics & Syntax',
                subItems: [
                    {
                        id: 'python-introduction',
                        title: 'Python Introduction',
                        content: (
                            <div className="space-y-8 text-gray-800 leading-relaxed tracking-wide text-lg">
                                <h2 className="text-3xl font-extrabold text-blue-900 mt-12 mb-6 border-b-2 border-blue-100 pb-3">What is Python?</h2>
                                <p className="text-gray-700 mb-4">Python is a popular programming language. It was created by Guido van Rossum, and released in 1991.</p>
                                <p className="text-gray-700 mb-4">It is used for:</p>
                                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-6">
                                    <li>web development (server-side),</li>
                                    <li>software development,</li>
                                    <li>mathematics,</li>
                                    <li>system scripting.</li>
                                </ul>

                                <h2 className="text-3xl font-extrabold text-blue-900 mt-12 mb-6 border-b-2 border-blue-100 pb-3">What can Python do?</h2>
                                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-6">
                                    <li>Python can be used on a server to create web applications.</li>
                                    <li>Python can be used alongside software to create workflows.</li>
                                    <li>Python can connect to database systems. It can also read and modify files.</li>
                                    <li>Python can be used to handle big data and perform complex mathematics.</li>
                                    <li>Python can be used for rapid prototyping, or for production-ready software development.</li>
                                </ul>
                            </div>
                        )
                    },
                    {
                        id: 'python-get-started',
                        title: 'Python Getting Started',
                        content: (
                            <div className="space-y-8 text-gray-800 leading-relaxed tracking-wide text-lg">
                                <h2 className="text-3xl font-extrabold text-blue-900 mt-12 mb-6 border-b-2 border-blue-100 pb-3">Python Install</h2>
                                <p className="text-gray-700 mb-4">Many PCs and Macs will have python already installed.</p>
                                <p className="text-gray-700 mb-4">To check if you have python installed on a Windows PC, search in the start bar for Python or run the following on the Command Line (cmd.exe):</p>
                                <CodeBlock language="bash" code={"C:\\\\Users\\\\Your Name>python --version"} />
                                
                                <p className="text-gray-700 mb-4">To check if you have python installed on a Linux or Mac, then on linux open the command line or on Mac open the Terminal and type:</p>
                                <CodeBlock language="bash" code={"python --version"} />

                                <h2 className="text-3xl font-extrabold text-blue-900 mt-12 mb-6 border-b-2 border-blue-100 pb-3">Python Quickstart</h2>
                                <p className="text-gray-700 mb-4">Python is an interpreted programming language, this means that as a developer you write Python (.py) files in a text editor and then put those files into the python interpreter to be executed.</p>
                                <p className="text-gray-700 mb-4">Let's write our first Python file, called helloworld.py, which can be done in any text editor.</p>
                                <CodeBlock language="python" code={"print(\\"Hello, World!\\")"} />
                                <p className="text-gray-700 mb-4">Simple as that. Save your file. Open your command line, navigate to the directory where you saved your file, and run:</p>
                                <CodeBlock language="bash" code={"C:\\\\Users\\\\Your Name>python helloworld.py"} />
                                <p className="text-gray-700 mb-4">The output should read:</p>
                                <CodeBlock language="plaintext" code={"Hello, World!"} />
                            </div>
                        )
                    },
                    {
                        id: 'python-syntax-comments',
                        title: 'Python Syntax & Comments',
                        content: (
                            <div className="space-y-8 text-gray-800 leading-relaxed tracking-wide text-lg">
                                <h2 className="text-3xl font-extrabold text-blue-900 mt-12 mb-6 border-b-2 border-blue-100 pb-3">Python Indentation</h2>
                                <p className="text-gray-700 mb-4">Indentation refers to the spaces at the beginning of a code line.</p>
                                <p className="text-gray-700 mb-4">Where in other programming languages the indentation in code is for readability only, the indentation in Python is very important.</p>
                                <p className="text-gray-700 mb-4">Python uses indentation to indicate a block of code.</p>
                                <CodeBlock language="python" code={"if 5 > 2:\\n  print(\\"Five is greater than two!\\")"} />
                                
                                <p className="text-gray-700 mb-4">Python will give you an error if you skip the indentation:</p>
                                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg my-4"><p className="text-red-800 text-sm"><strong>Syntax Error:</strong><br/><code>if 5 &gt; 2:<br/>print("Five is greater than two!")</code></p></div>
                                
                                <h2 className="text-3xl font-extrabold text-blue-900 mt-12 mb-6 border-b-2 border-blue-100 pb-3">Comments</h2>
                                <p className="text-gray-700 mb-4">Comments can be used to explain Python code or prevent execution.</p>
                                
                                <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4 border-b border-gray-100 pb-2">Creating a Comment</h3>
                                <p className="text-gray-700 mb-4">Comments starts with a <code>#</code>, and Python will ignore them:</p>
                                <CodeBlock language="python" code={"#This is a comment\\nprint(\\"Hello, World!\\")"} />
                                
                                <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4 border-b border-gray-100 pb-2">Multi Line Comments</h3>
                                <p className="text-gray-700 mb-4">Python does not really have a syntax for multi line comments.</p>
                                <p className="text-gray-700 mb-4">Since Python will ignore string literals that are not assigned to a variable, you can add a multiline string (triple quotes) in your code, and place your comment inside it:</p>
                                <CodeBlock language="python" code={"\\"\\"\\"\\nThis is a comment\\nwritten in\\nmore than just one line\\n\\"\\"\\"\\nprint(\\"Hello, World!\\")"} />
                            </div>
                        )
                    }
                ]
            },\`;

fs.writeFileSync('injectPython_p1.js', pythonTopicsPart1, 'utf8');
console.log('Part 1 saved.');
