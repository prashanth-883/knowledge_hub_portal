const fs = require('fs');

const pythonTopicsPart3 = \`            {
                id: 'python-strings-booleans',
                title: 'Strings & Booleans',
                subItems: [
                    {
                        id: 'python-strings',
                        title: 'Python Strings',
                        content: (
                            <div className="space-y-8 text-gray-800 leading-relaxed tracking-wide text-lg">
                                <h2 className="text-3xl font-extrabold text-blue-900 mt-12 mb-6 border-b-2 border-blue-100 pb-3">Python Strings</h2>
                                <p className="text-gray-700 mb-4">Strings in python are surrounded by either single quotation marks, or double quotation marks.</p>
                                <p className="text-gray-700 mb-4"><code>'hello'</code> is the same as <code>"hello"</code>.</p>
                                <p className="text-gray-700 mb-4">You can display a string literal with the <code>print()</code> function:</p>
                                <CodeBlock language="python" code={"print(\\"Hello\\")\\nprint('Hello')"} />
                                
                                <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4 border-b border-gray-100 pb-2">Assign String to a Variable</h3>
                                <p className="text-gray-700 mb-4">Assigning a string to a variable is done with the variable name followed by an equal sign and the string:</p>
                                <CodeBlock language="python" code={"a = \\"Hello\\"\\nprint(a)"} />
                                
                                <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4 border-b border-gray-100 pb-2">Multiline Strings</h3>
                                <p className="text-gray-700 mb-4">You can assign a multiline string to a variable by using three quotes:</p>
                                <CodeBlock language="python" code={"a = \\"\\"\\"Lorem ipsum dolor sit amet,\\nconsectetur adipiscing elit,\\nsed do eiusmod tempor incididunt\\nut labore et dolore magna aliqua.\\"\\"\\"\\nprint(a)"} />
                                
                                <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4 border-b border-gray-100 pb-2">Strings are Arrays</h3>
                                <p className="text-gray-700 mb-4">Like many other popular programming languages, strings in Python are arrays of bytes representing unicode characters.</p>
                                <p className="text-gray-700 mb-4">However, Python does not have a character data type, a single character is simply a string with a length of 1.</p>
                                <p className="text-gray-700 mb-4">Square brackets can be used to access elements of the string.</p>
                                <CodeBlock language="python" code={"a = \\"Hello, World!\\"\\nprint(a[1]) # Get the character at position 1 (remember that the first character has the position 0)"} />
                                
                                <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4 border-b border-gray-100 pb-2">String Length</h3>
                                <p className="text-gray-700 mb-4">To get the length of a string, use the <code>len()</code> function.</p>
                                <CodeBlock language="python" code={"a = \\"Hello, World!\\"\\nprint(len(a))"} />
                            </div>
                        )
                    },
                    {
                        id: 'python-booleans',
                        title: 'Python Booleans',
                        content: (
                            <div className="space-y-8 text-gray-800 leading-relaxed tracking-wide text-lg">
                                <h2 className="text-3xl font-extrabold text-blue-900 mt-12 mb-6 border-b-2 border-blue-100 pb-3">Python Booleans</h2>
                                <p className="text-gray-700 mb-4">Booleans represent one of two values: <code>True</code> or <code>False</code>.</p>
                                <p className="text-gray-700 mb-4">In programming you often need to know if an expression is <code>True</code> or <code>False</code>.</p>
                                <p className="text-gray-700 mb-4">You can evaluate any expression in Python, and get one of two answers, <code>True</code> or <code>False</code>.</p>
                                <p className="text-gray-700 mb-4">When you compare two values, the expression is evaluated and Python returns the Boolean answer:</p>
                                <CodeBlock language="python" code={"print(10 > 9)\\nprint(10 == 9)\\nprint(10 < 9)"} />
                                
                                <p className="text-gray-700 mb-4">When you run a condition in an if statement, Python returns <code>True</code> or <code>False</code>:</p>
                                <CodeBlock language="python" code={"a = 200\\nb = 33\\n\\nif b > a:\\n  print(\\"b is greater than a\\")\\nelse:\\n  print(\\"b is not greater than a\\")"} />
                                
                                <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4 border-b border-gray-100 pb-2">Most Values are True</h3>
                                <p className="text-gray-700 mb-4">Almost any value is evaluated to <code>True</code> if it has some sort of content.</p>
                                <p className="text-gray-700 mb-4">Any string is <code>True</code>, except empty strings.</p>
                                <p className="text-gray-700 mb-4">Any number is <code>True</code>, except <code>0</code>.</p>
                                <p className="text-gray-700 mb-4">Any list, tuple, set, and dictionary are <code>True</code>, except empty ones.</p>
                                
                                <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4 border-b border-gray-100 pb-2">Some Values are False</h3>
                                <p className="text-gray-700 mb-4">In fact, there are not many values that evaluate to <code>False</code>, except empty values, such as <code>()</code>, <code>[]</code>, <code>&#123;&#125;</code>, <code>""</code>, the number <code>0</code>, and the value <code>None</code>. And of course the value <code>False</code> evaluates to <code>False</code>.</p>
                            </div>
                        )
                    }
                ]
            },
            {
                id: 'python-data-structures',
                title: 'Data Structures & Control Flow',
                subItems: [
                    {
                        id: 'python-lists-operators',
                        title: 'Operators & Lists',
                        content: (
                            <div className="space-y-8 text-gray-800 leading-relaxed tracking-wide text-lg">
                                <h2 className="text-3xl font-extrabold text-blue-900 mt-12 mb-6 border-b-2 border-blue-100 pb-3">Python Operators</h2>
                                <p className="text-gray-700 mb-4">Operators are used to perform operations on variables and values.</p>
                                <p className="text-gray-700 mb-4">Python divides the operators in the following groups:</p>
                                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-6">
                                    <li>Arithmetic operators (+, -, *, /, %, **, //)</li>
                                    <li>Assignment operators (=, +=, -=, *=, /=, etc.)</li>
                                    <li>Comparison operators (==, !=, >, &lt;, >=, &lt;=)</li>
                                    <li>Logical operators (and, or, not)</li>
                                    <li>Identity operators (is, is not)</li>
                                    <li>Membership operators (in, not in)</li>
                                    <li>Bitwise operators (&, |, ^, ~, &lt;&lt;, >>)</li>
                                </ul>

                                <h2 className="text-3xl font-extrabold text-blue-900 mt-12 mb-6 border-b-2 border-blue-100 pb-3">Python Lists</h2>
                                <p className="text-gray-700 mb-4">Lists are used to store multiple items in a single variable.</p>
                                <p className="text-gray-700 mb-4">Lists are one of 4 built-in data types in Python used to store collections of data, the other 3 are Tuple, Set, and Dictionary, all with different qualities and usage.</p>
                                <p className="text-gray-700 mb-4">Lists are created using square brackets:</p>
                                <CodeBlock language="python" code={"thislist = [\\"apple\\", \\"banana\\", \\"cherry\\"]\\nprint(thislist)"} />
                                
                                <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4 border-b border-gray-100 pb-2">List Items</h3>
                                <p className="text-gray-700 mb-4">List items are ordered, changeable, and allow duplicate values.</p>
                                <p className="text-gray-700 mb-4">List items are indexed, the first item has index <code>[0]</code>, the second item has index <code>[1]</code> etc.</p>
                                <CodeBlock language="python" code={"thislist = [\\"apple\\", \\"banana\\", \\"cherry\\"]\\nprint(thislist[1])"} />
                            </div>
                        )
                    },\`;

fs.writeFileSync('injectPython_p3.js', pythonTopicsPart3, 'utf8');
console.log('Part 3 saved.');
