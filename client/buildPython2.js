const fs = require('fs');

const pythonTopicsPart2 = \`            {
                id: 'python-variables',
                title: 'Variables & Data Types',
                subItems: [
                    {
                        id: 'python-variables-types',
                        title: 'Python Variables',
                        content: (
                            <div className="space-y-8 text-gray-800 leading-relaxed tracking-wide text-lg">
                                <h2 className="text-3xl font-extrabold text-blue-900 mt-12 mb-6 border-b-2 border-blue-100 pb-3">Variables</h2>
                                <p className="text-gray-700 mb-4">Variables are containers for storing data values.</p>
                                
                                <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4 border-b border-gray-100 pb-2">Creating Variables</h3>
                                <p className="text-gray-700 mb-4">Python has no command for declaring a variable.</p>
                                <p className="text-gray-700 mb-4">A variable is created the moment you first assign a value to it.</p>
                                <CodeBlock language="python" code={"x = 5\\ny = \\"John\\"\\nprint(x)\\nprint(y)"} />
                                
                                <p className="text-gray-700 mb-4">Variables do not need to be declared with any particular <em>type</em>, and can even change type after they have been set.</p>
                                <CodeBlock language="python" code={"x = 4       # x is of type int\\nx = \\"Sally\\" # x is now of type str\\nprint(x)"} />

                                <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4 border-b border-gray-100 pb-2">Casting</h3>
                                <p className="text-gray-700 mb-4">If you want to specify the data type of a variable, this can be done with casting.</p>
                                <CodeBlock language="python" code={"x = str(3)    # x will be '3'\\ny = int(3)    # y will be 3\\nz = float(3)  # z will be 3.0"} />

                                <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4 border-b border-gray-100 pb-2">Get the Type</h3>
                                <p className="text-gray-700 mb-4">You can get the data type of a variable with the <code>type()</code> function.</p>
                                <CodeBlock language="python" code={"x = 5\\ny = \\"John\\"\\nprint(type(x))\\nprint(type(y))"} />

                                <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4 border-b border-gray-100 pb-2">Case-Sensitive</h3>
                                <p className="text-gray-700 mb-4">Variable names are case-sensitive.</p>
                                <CodeBlock language="python" code={"a = 4\\nA = \\"Sally\\"\\n#A will not overwrite a"} />
                            </div>
                        )
                    },
                    {
                        id: 'python-data-types',
                        title: 'Python Data Types',
                        content: (
                            <div className="space-y-8 text-gray-800 leading-relaxed tracking-wide text-lg">
                                <h2 className="text-3xl font-extrabold text-blue-900 mt-12 mb-6 border-b-2 border-blue-100 pb-3">Built-in Data Types</h2>
                                <p className="text-gray-700 mb-4">In programming, data type is an important concept.</p>
                                <p className="text-gray-700 mb-4">Variables can hold data of different types, and different types can do different things.</p>
                                <p className="text-gray-700 mb-4">Python has the following data types built-in by default, in these categories:</p>
                                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-6">
                                    <li>Text Type: <code>str</code></li>
                                    <li>Numeric Types: <code>int, float, complex</code></li>
                                    <li>Sequence Types: <code>list, tuple, range</code></li>
                                    <li>Mapping Type: <code>dict</code></li>
                                    <li>Set Types: <code>set, frozenset</code></li>
                                    <li>Boolean Type: <code>bool</code></li>
                                    <li>Binary Types: <code>bytes, bytearray, memoryview</code></li>
                                    <li>None Type: <code>NoneType</code></li>
                                </ul>

                                <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4 border-b border-gray-100 pb-2">Getting the Data Type</h3>
                                <p className="text-gray-700 mb-4">You can get the data type of any object by using the <code>type()</code> function:</p>
                                <CodeBlock language="python" code={"x = 5\\nprint(type(x))"} />
                                
                                <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4 border-b border-gray-100 pb-2">Setting the Data Type</h3>
                                <p className="text-gray-700 mb-4">In Python, the data type is set when you assign a value to a variable:</p>
                                <div className="bg-black text-gray-100 rounded-lg p-6 font-mono text-sm overflow-x-auto mb-6">
                                    <pre><code>x = "Hello World" # str
x = 20 # int
x = 20.5 # float
x = 1j # complex
x = ["apple", "banana", "cherry"] # list
x = ("apple", "banana", "cherry") # tuple
x = range(6) # range
x = &#123;"name" : "John", "age" : 36&#125; # dict
x = &#123;"apple", "banana", "cherry"&#125; # set
x = True # bool
x = b"Hello" # bytes</code></pre>
                                </div>
                            </div>
                        )
                    },
                    {
                        id: 'python-numbers-casting',
                        title: 'Numbers & Casting',
                        content: (
                            <div className="space-y-8 text-gray-800 leading-relaxed tracking-wide text-lg">
                                <h2 className="text-3xl font-extrabold text-blue-900 mt-12 mb-6 border-b-2 border-blue-100 pb-3">Python Numbers</h2>
                                <p className="text-gray-700 mb-4">There are three numeric types in Python:</p>
                                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-6">
                                    <li><code>int</code></li>
                                    <li><code>float</code></li>
                                    <li><code>complex</code></li>
                                </ul>
                                <p className="text-gray-700 mb-4">Variables of numeric types are created when you assign a value to them:</p>
                                <CodeBlock language="python" code={"x = 1    # int\\ny = 2.8  # float\\nz = 1j   # complex"} />
                                
                                <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4 border-b border-gray-100 pb-2">Int</h3>
                                <p className="text-gray-700 mb-4">Int, or integer, is a whole number, positive or negative, without decimals, of unlimited length.</p>
                                <CodeBlock language="python" code={"x = 1\\ny = 35656222554887711\\nz = -3255522\\n\\nprint(type(x))\\nprint(type(y))\\nprint(type(z))"} />
                                
                                <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4 border-b border-gray-100 pb-2">Float</h3>
                                <p className="text-gray-700 mb-4">Float, or "floating point number" is a number, positive or negative, containing one or more decimals.</p>
                                <CodeBlock language="python" code={"x = 1.10\\ny = 1.0\\nz = -35.59\\n\\nprint(type(x))\\nprint(type(y))\\nprint(type(z))"} />

                                <h2 className="text-3xl font-extrabold text-blue-900 mt-12 mb-6 border-b-2 border-blue-100 pb-3">Python Casting</h2>
                                <p className="text-gray-700 mb-4">There may be times when you want to specify a type on to a variable. This can be done with casting. Python is an object-orientated language, and as such it uses classes to define data types, including its primitive types.</p>
                                <p className="text-gray-700 mb-4">Casting in python is therefore done using constructor functions:</p>
                                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-6">
                                    <li><code>int()</code> - constructs an integer number from an integer literal, a float literal (by removing all decimals), or a string literal (providing the string represents a whole number)</li>
                                    <li><code>float()</code> - constructs a float number from an integer literal, a float literal or a string literal (providing the string represents a float or an integer)</li>
                                    <li><code>str()</code> - constructs a string from a wide variety of data types, including strings, integer literals and float literals</li>
                                </ul>
                                
                                <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4 border-b border-gray-100 pb-2">Integers:</h3>
                                <CodeBlock language="python" code={"x = int(1)   # x will be 1\\ny = int(2.8) # y will be 2\\nz = int(\\"3\\") # z will be 3"} />
                                
                                <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4 border-b border-gray-100 pb-2">Floats:</h3>
                                <CodeBlock language="python" code={"x = float(1)     # x will be 1.0\\ny = float(2.8)   # y will be 2.8\\nz = float(\\"3\\")   # z will be 3.0\\nw = float(\\"4.2\\") # w will be 4.2"} />
                                
                                <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4 border-b border-gray-100 pb-2">Strings:</h3>
                                <CodeBlock language="python" code={"x = str(\\"s1\\") # x will be 's1'\\ny = str(2)    # y will be '2'\\nz = str(3.0)  # z will be '3.0'"} />
                            </div>
                        )
                    }
                ]
            },\`;

fs.writeFileSync('injectPython_p2.js', pythonTopicsPart2, 'utf8');
console.log('Part 2 saved.');
