const fs = require('fs');

const pythonTopicsPart4 = \`                    {
                        id: 'python-tuples-sets-dicts',
                        title: 'Tuples, Sets & Dictionaries',
                        content: (
                            <div className="space-y-8 text-gray-800 leading-relaxed tracking-wide text-lg">
                                <h2 className="text-3xl font-extrabold text-blue-900 mt-12 mb-6 border-b-2 border-blue-100 pb-3">Python Tuples</h2>
                                <p className="text-gray-700 mb-4">Tuples are used to store multiple items in a single variable.</p>
                                <p className="text-gray-700 mb-4">A tuple is a collection which is ordered and <strong>unchangeable</strong>.</p>
                                <p className="text-gray-700 mb-4">Tuples are written with round brackets.</p>
                                <CodeBlock language="python" code={"thistuple = (\\"apple\\", \\"banana\\", \\"cherry\\")\\nprint(thistuple)"} />
                                
                                <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4 border-b border-gray-100 pb-2">Tuple Items</h3>
                                <p className="text-gray-700 mb-4">Tuple items are ordered, unchangeable, and allow duplicate values.</p>
                                <p className="text-gray-700 mb-4">Tuple items are indexed, the first item has index <code>[0]</code>, the second item has index <code>[1]</code> etc.</p>
                                <CodeBlock language="python" code={"thistuple = (\\"apple\\", \\"banana\\", \\"cherry\\")\\nprint(thistuple[1])"} />

                                <h2 className="text-3xl font-extrabold text-blue-900 mt-12 mb-6 border-b-2 border-blue-100 pb-3">Python Sets</h2>
                                <p className="text-gray-700 mb-4">Sets are used to store multiple items in a single variable.</p>
                                <p className="text-gray-700 mb-4">A set is a collection which is unordered, unchangeable*, and unindexed.</p>
                                <p className="text-gray-700 mb-4">* Note: Set items are unchangeable, but you can remove items and add new items.</p>
                                <p className="text-gray-700 mb-4">Sets are written with curly brackets.</p>
                                <CodeBlock language="python" code={"thisset = {\\"apple\\", \\"banana\\", \\"cherry\\"}\\nprint(thisset)"} />
                                
                                <p className="text-gray-700 mb-4">Sets cannot have two items with the same value.</p>
                                <CodeBlock language="python" code={"thisset = {\\"apple\\", \\"banana\\", \\"cherry\\", \\"apple\\"}\\nprint(thisset)"} />

                                <h2 className="text-3xl font-extrabold text-blue-900 mt-12 mb-6 border-b-2 border-blue-100 pb-3">Python Dictionaries</h2>
                                <p className="text-gray-700 mb-4">Dictionaries are used to store data values in key:value pairs.</p>
                                <p className="text-gray-700 mb-4">A dictionary is a collection which is ordered*, changeable and do not allow duplicates.</p>
                                <p className="text-gray-700 mb-4">Dictionaries are written with curly brackets, and have keys and values:</p>
                                <CodeBlock language="python" code={"thisdict = {\\n  \\"brand\\": \\"Ford\\",\\n  \\"model\\": \\"Mustang\\",\\n  \\"year\\": 1964\\n}\\nprint(thisdict)"} />
                                
                                <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4 border-b border-gray-100 pb-2">Dictionary Items</h3>
                                <p className="text-gray-700 mb-4">Dictionary items are presented in key:value pairs, and can be referred to by using the key name.</p>
                                <CodeBlock language="python" code={"thisdict = {\\n  \\"brand\\": \\"Ford\\",\\n  \\"model\\": \\"Mustang\\",\\n  \\"year\\": 1964\\n}\\nprint(thisdict[\\"brand\\"])"} />
                            </div>
                        )
                    },
                    {
                        id: 'python-ifelse-loops',
                        title: 'If...Else & Match & Loops',
                        content: (
                            <div className="space-y-8 text-gray-800 leading-relaxed tracking-wide text-lg">
                                <h2 className="text-3xl font-extrabold text-blue-900 mt-12 mb-6 border-b-2 border-blue-100 pb-3">Python If ... Else</h2>
                                <p className="text-gray-700 mb-4">Python supports the usual logical conditions from mathematics:</p>
                                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-6">
                                    <li>Equals: <code>a == b</code></li>
                                    <li>Not Equals: <code>a != b</code></li>
                                    <li>Less than: <code>a &lt; b</code></li>
                                    <li>Less than or equal to: <code>a &lt;= b</code></li>
                                    <li>Greater than: <code>a > b</code></li>
                                    <li>Greater than or equal to: <code>a >= b</code></li>
                                </ul>
                                <p className="text-gray-700 mb-4">These conditions can be used in several ways, most commonly in "if statements" and loops.</p>
                                <p className="text-gray-700 mb-4">An "if statement" is written by using the <code>if</code> keyword.</p>
                                <CodeBlock language="python" code={"a = 33\\nb = 200\\nif b > a:\\n  print(\\"b is greater than a\\")"} />
                                
                                <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4 border-b border-gray-100 pb-2">Elif</h3>
                                <p className="text-gray-700 mb-4">The <code>elif</code> keyword is Python's way of saying "if the previous conditions were not true, then try this condition".</p>
                                <CodeBlock language="python" code={"a = 33\\nb = 33\\nif b > a:\\n  print(\\"b is greater than a\\")\\nelif a == b:\\n  print(\\"a and b are equal\\")"} />

                                <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4 border-b border-gray-100 pb-2">Else</h3>
                                <p className="text-gray-700 mb-4">The <code>else</code> keyword catches anything which isn't caught by the preceding conditions.</p>
                                <CodeBlock language="python" code={"a = 200\\nb = 33\\nif b > a:\\n  print(\\"b is greater than a\\")\\nelif a == b:\\n  print(\\"a and b are equal\\")\\nelse:\\n  print(\\"a is greater than b\\")"} />

                                <h2 className="text-3xl font-extrabold text-blue-900 mt-12 mb-6 border-b-2 border-blue-100 pb-3">Python Match Framework</h2>
                                <p className="text-gray-700 mb-4">Introduced in Python 3.10, the <code>match</code> statement evaluates an expression and executes code if the structure of a given variable matches.</p>
                                <CodeBlock language="python" code={"status = 404\\nmatch status:\\n  case 400:\\n    print(\\"Bad request\\")\\n  case 404:\\n    print(\\"Not found\\")\\n  case 418:\\n    print(\\"I'm a teapot\\")\\n  case _:\\n    print(\\"Something's wrong with the internet\\")"} />

                                <h2 className="text-3xl font-extrabold text-blue-900 mt-12 mb-6 border-b-2 border-blue-100 pb-3">Python While Loops</h2>
                                <p className="text-gray-700 mb-4">With the <code>while</code> loop we can execute a set of statements as long as a condition is true.</p>
                                <CodeBlock language="python" code={"i = 1\\nwhile i < 6:\\n  print(i)\\n  i += 1"} />
                                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg my-4"><p className="text-yellow-800 text-sm">Note: remember to increment i, or else the loop will continue forever.</p></div>
                                
                                <p className="text-gray-700 mb-4">With the <code>break</code> statement we can stop the loop even if the while condition is true:</p>
                                <CodeBlock language="python" code={"i = 1\\nwhile i < 6:\\n  print(i)\\n  if i == 3:\\n    break\\n  i += 1"} />

                                <h2 className="text-3xl font-extrabold text-blue-900 mt-12 mb-6 border-b-2 border-blue-100 pb-3">Python For Loops</h2>
                                <p className="text-gray-700 mb-4">A <code>for</code> loop is used for iterating over a sequence (that is either a list, a tuple, a dictionary, a set, or a string).</p>
                                <p className="text-gray-700 mb-4">This is less like the for keyword in other programming languages, and works more like an iterator method as found in other object-orientated programming languages.</p>
                                <CodeBlock language="python" code={"fruits = [\\"apple\\", \\"banana\\", \\"cherry\\"]\\nfor x in fruits:\\n  print(x)"} />
                                
                                <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4 border-b border-gray-100 pb-2">The range() Function</h3>
                                <p className="text-gray-700 mb-4">To loop through a set of code a specified number of times, we can use the <code>range()</code> function,</p>
                                <p className="text-gray-700 mb-4">The <code>range()</code> function returns a sequence of numbers, starting from 0 by default, and increments by 1 (by default), and ends at a specified number.</p>
                                <CodeBlock language="python" code={"for x in range(6):\\n  print(x)"} />
                            </div>
                        )
                    }
                ]
            },\`;

fs.writeFileSync('injectPython_p4.js', pythonTopicsPart4, 'utf8');
console.log('Part 4 saved.');
