import CodeBlock from '../components/CodeBlock';
import { Course } from './courseData';

export const pythonCourseContent: Course = {
    title: 'Python Programming',
    lastUpdated: 'Jan 2024',
    topics: [
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
                            <CodeBlock language="bash" code={`C:\\Users\\Your Name>python --version`} />

                            <p className="text-gray-700 mb-4">To check if you have python installed on a Linux or Mac, then on linux open the command line or on Mac open the Terminal and type:</p>
                            <CodeBlock language="bash" code={`python --version`} />

                            <h2 className="text-3xl font-extrabold text-blue-900 mt-12 mb-6 border-b-2 border-blue-100 pb-3">Python Quickstart</h2>
                            <p className="text-gray-700 mb-4">Python is an interpreted programming language, this means that as a developer you write Python (.py) files in a text editor and then put those files into the python interpreter to be executed.</p>
                            <p className="text-gray-700 mb-4">Let's write our first Python file, called helloworld.py, which can be done in any text editor.</p>
                            <CodeBlock language="python" code={`print("Hello, World!")`} />
                            <p className="text-gray-700 mb-4">Simple as that. Save your file. Open your command line, navigate to the directory where you saved your file, and run:</p>
                            <CodeBlock language="bash" code={`C:\\Users\\Your Name>python helloworld.py`} />
                            <p className="text-gray-700 mb-4">The output should read:</p>
                            <CodeBlock language="plaintext" code={`Hello, World!`} />
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
                            <CodeBlock language="python" code={`if 5 > 2:\n  print("Five is greater than two!")`} />

                            <p className="text-gray-700 mb-4">Python will give you an error if you skip the indentation:</p>
                            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg my-4"><p className="text-red-800 text-sm"><strong>Syntax Error:</strong><br /><code>if 5 &gt; 2:<br />print("Five is greater than two!")</code></p></div>

                            <h2 className="text-3xl font-extrabold text-blue-900 mt-12 mb-6 border-b-2 border-blue-100 pb-3">Comments</h2>
                            <p className="text-gray-700 mb-4">Comments can be used to explain Python code or prevent execution.</p>

                            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4 border-b border-gray-100 pb-2">Creating a Comment</h3>
                            <p className="text-gray-700 mb-4">Comments starts with a <code>#</code>, and Python will ignore them:</p>
                            <CodeBlock language="python" code={`#This is a comment\nprint("Hello, World!")`} />

                            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4 border-b border-gray-100 pb-2">Multi Line Comments</h3>
                            <p className="text-gray-700 mb-4">Python does not really have a syntax for multi line comments.</p>
                            <p className="text-gray-700 mb-4">Since Python will ignore string literals that are not assigned to a variable, you can add a multiline string (triple quotes) in your code, and place your comment inside it:</p>
                            <CodeBlock language="python" code={`\"\"\"\nThis is a comment\nwritten in\nmore than just one line\n\"\"\"\nprint("Hello, World!")`} />
                        </div>
                    )
                }
            ]
        },
        {
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
                            <CodeBlock language="python" code={`x = 5\ny = "John"\nprint(x)\nprint(y)`} />

                            <p className="text-gray-700 mb-4">Variables do not need to be declared with any particular <em>type</em>, and can even change type after they have been set.</p>
                            <CodeBlock language="python" code={`x = 4       # x is of type int\nx = "Sally" # x is now of type str\nprint(x)`} />

                            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4 border-b border-gray-100 pb-2">Casting</h3>
                            <p className="text-gray-700 mb-4">If you want to specify the data type of a variable, this can be done with casting.</p>
                            <CodeBlock language="python" code={`x = str(3)    # x will be '3'\ny = int(3)    # y will be 3\nz = float(3)  # z will be 3.0`} />

                            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4 border-b border-gray-100 pb-2">Get the Type</h3>
                            <p className="text-gray-700 mb-4">You can get the data type of a variable with the <code>type()</code> function.</p>
                            <CodeBlock language="python" code={`x = 5\ny = "John"\nprint(type(x))\nprint(type(y))`} />

                            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4 border-b border-gray-100 pb-2">Case-Sensitive</h3>
                            <p className="text-gray-700 mb-4">Variable names are case-sensitive.</p>
                            <CodeBlock language="python" code={`a = 4\nA = "Sally"\n#A will not overwrite a`} />
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
                            <CodeBlock language="python" code={`x = 5\nprint(type(x))`} />

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
                                    x = {"{"}"name" : "John", "age" : 36{"}"} # dict
                                    x = {"{"}"apple", "banana", "cherry"{"}"} # set
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
                            <CodeBlock language="python" code={`x = 1    # int\ny = 2.8  # float\nz = 1j   # complex`} />

                            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4 border-b border-gray-100 pb-2">Int</h3>
                            <p className="text-gray-700 mb-4">Int, or integer, is a whole number, positive or negative, without decimals, of unlimited length.</p>
                            <CodeBlock language="python" code={`x = 1\ny = 35656222554887711\nz = -3255522\n\nprint(type(x))\nprint(type(y))\nprint(type(z))`} />

                            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4 border-b border-gray-100 pb-2">Float</h3>
                            <p className="text-gray-700 mb-4">Float, or "floating point number" is a number, positive or negative, containing one or more decimals.</p>
                            <CodeBlock language="python" code={`x = 1.10\ny = 1.0\nz = -35.59\n\nprint(type(x))\nprint(type(y))\nprint(type(z))`} />

                            <h2 className="text-3xl font-extrabold text-blue-900 mt-12 mb-6 border-b-2 border-blue-100 pb-3">Python Casting</h2>
                            <p className="text-gray-700 mb-4">There may be times when you want to specify a type on to a variable. This can be done with casting. Python is an object-orientated language, and as such it uses classes to define data types, including its primitive types.</p>
                            <p className="text-gray-700 mb-4">Casting in python is therefore done using constructor functions:</p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-6">
                                <li><code>int()</code> - constructs an integer number from an integer literal, a float literal (by removing all decimals), or a string literal (providing the string represents a whole number)</li>
                                <li><code>float()</code> - constructs a float number from an integer literal, a float literal or a string literal (providing the string represents a float or an integer)</li>
                                <li><code>str()</code> - constructs a string from a wide variety of data types, including strings, integer literals and float literals</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4 border-b border-gray-100 pb-2">Integers:</h3>
                            <CodeBlock language="python" code={`x = int(1)   # x will be 1\ny = int(2.8) # y will be 2\nz = int("3") # z will be 3`} />

                            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4 border-b border-gray-100 pb-2">Floats:</h3>
                            <CodeBlock language="python" code={`x = float(1)     # x will be 1.0\ny = float(2.8)   # y will be 2.8\nz = float("3")   # z will be 3.0\nw = float("4.2") # w will be 4.2`} />

                            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4 border-b border-gray-100 pb-2">Strings:</h3>
                            <CodeBlock language="python" code={`x = str("s1") # x will be 's1'\ny = str(2)    # y will be '2'\nz = str(3.0)  # z will be '3.0'`} />
                        </div>
                    )
                }
            ]
        },
        {
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
                            <CodeBlock language="python" code={`print("Hello")\nprint('Hello')`} />

                            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4 border-b border-gray-100 pb-2">Assign String to a Variable</h3>
                            <p className="text-gray-700 mb-4">Assigning a string to a variable is done with the variable name followed by an equal sign and the string:</p>
                            <CodeBlock language="python" code={`a = "Hello"\nprint(a)`} />

                            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4 border-b border-gray-100 pb-2">Multiline Strings</h3>
                            <p className="text-gray-700 mb-4">You can assign a multiline string to a variable by using three quotes:</p>
                            <CodeBlock language="python" code={`a = """Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit,\nsed do eiusmod tempor incididunt\nut labore et dolore magna aliqua."""\nprint(a)`} />

                            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4 border-b border-gray-100 pb-2">Strings are Arrays</h3>
                            <p className="text-gray-700 mb-4">Like many other popular programming languages, strings in Python are arrays of bytes representing unicode characters.</p>
                            <p className="text-gray-700 mb-4">However, Python does not have a character data type, a single character is simply a string with a length of 1.</p>
                            <p className="text-gray-700 mb-4">Square brackets can be used to access elements of the string.</p>
                            <CodeBlock language="python" code={`a = "Hello, World!"\nprint(a[1]) # Get the character at position 1 (remember that the first character has the position 0)`} />

                            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4 border-b border-gray-100 pb-2">String Length</h3>
                            <p className="text-gray-700 mb-4">To get the length of a string, use the <code>len()</code> function.</p>
                            <CodeBlock language="python" code={`a = "Hello, World!"\nprint(len(a))`} />
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
                            <CodeBlock language="python" code={`print(10 > 9)\nprint(10 == 9)\nprint(10 < 9)`} />

                            <p className="text-gray-700 mb-4">When you run a condition in an if statement, Python returns <code>True</code> or <code>False</code>:</p>
                            <CodeBlock language="python" code={`a = 200\nb = 33\n\nif b > a:\n  print("b is greater than a")\nelse:\n  print("b is not greater than a")`} />

                            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4 border-b border-gray-100 pb-2">Most Values are True</h3>
                            <p className="text-gray-700 mb-4">Almost any value is evaluated to <code>True</code> if it has some sort of content.</p>
                            <p className="text-gray-700 mb-4">Any string is <code>True</code>, except empty strings.</p>
                            <p className="text-gray-700 mb-4">Any number is <code>True</code>, except <code>0</code>.</p>
                            <p className="text-gray-700 mb-4">Any list, tuple, set, and dictionary are <code>True</code>, except empty ones.</p>

                            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4 border-b border-gray-100 pb-2">Some Values are False</h3>
                            <p className="text-gray-700 mb-4">In fact, there are not many values that evaluate to <code>False</code>, except empty values, such as <code>()</code>, <code>[]</code>, <code>{"{}"}</code>, <code>""</code>, the number <code>0</code>, and the value <code>None</code>. And of course the value <code>False</code> evaluates to <code>False</code>.</p>
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
                                <li>Comparison operators (==, !=, &gt;, &lt;, &gt;=, &lt;=)</li>
                                <li>Logical operators (and, or, not)</li>
                                <li>Identity operators (is, is not)</li>
                                <li>Membership operators (in, not in)</li>
                                <li>Bitwise operators (&amp;, |, ^, ~, &lt;&lt;, &gt;&gt;)</li>
                            </ul>

                            <h2 className="text-3xl font-extrabold text-blue-900 mt-12 mb-6 border-b-2 border-blue-100 pb-3">Python Lists</h2>
                            <p className="text-gray-700 mb-4">Lists are used to store multiple items in a single variable.</p>
                            <p className="text-gray-700 mb-4">Lists are one of 4 built-in data types in Python used to store collections of data, the other 3 are Tuple, Set, and Dictionary, all with different qualities and usage.</p>
                            <p className="text-gray-700 mb-4">Lists are created using square brackets:</p>
                            <CodeBlock language="python" code={`thislist = ["apple", "banana", "cherry"]\nprint(thislist)`} />

                            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4 border-b border-gray-100 pb-2">List Items</h3>
                            <p className="text-gray-700 mb-4">List items are ordered, changeable, and allow duplicate values.</p>
                            <p className="text-gray-700 mb-4">List items are indexed, the first item has index <code>[0]</code>, the second item has index <code>[1]</code> etc.</p>
                            <CodeBlock language="python" code={`thislist = ["apple", "banana", "cherry"]\nprint(thislist[1])`} />
                        </div>
                    )
                },
                {
                    id: 'python-tuples-sets-dicts',
                    title: 'Tuples, Sets & Dictionaries',
                    content: (
                        <div className="space-y-8 text-gray-800 leading-relaxed tracking-wide text-lg">
                            <h2 className="text-3xl font-extrabold text-blue-900 mt-12 mb-6 border-b-2 border-blue-100 pb-3">Python Tuples</h2>
                            <p className="text-gray-700 mb-4">Tuples are used to store multiple items in a single variable.</p>
                            <p className="text-gray-700 mb-4">A tuple is a collection which is ordered and <strong>unchangeable</strong>.</p>
                            <p className="text-gray-700 mb-4">Tuples are written with round brackets.</p>
                            <CodeBlock language="python" code={`thistuple = ("apple", "banana", "cherry")\nprint(thistuple)`} />

                            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4 border-b border-gray-100 pb-2">Tuple Items</h3>
                            <p className="text-gray-700 mb-4">Tuple items are ordered, unchangeable, and allow duplicate values.</p>
                            <p className="text-gray-700 mb-4">Tuple items are indexed, the first item has index <code>[0]</code>, the second item has index <code>[1]</code> etc.</p>
                            <CodeBlock language="python" code={`thistuple = ("apple", "banana", "cherry")\nprint(thistuple[1])`} />

                            <h2 className="text-3xl font-extrabold text-blue-900 mt-12 mb-6 border-b-2 border-blue-100 pb-3">Python Sets</h2>
                            <p className="text-gray-700 mb-4">Sets are used to store multiple items in a single variable.</p>
                            <p className="text-gray-700 mb-4">A set is a collection which is unordered, unchangeable*, and unindexed.</p>
                            <p className="text-gray-700 mb-4">* Note: Set items are unchangeable, but you can remove items and add new items.</p>
                            <p className="text-gray-700 mb-4">Sets are written with curly brackets.</p>
                            <CodeBlock language="python" code={`thisset = {"apple", "banana", "cherry"}\nprint(thisset)`} />

                            <p className="text-gray-700 mb-4">Sets cannot have two items with the same value.</p>
                            <CodeBlock language="python" code={`thisset = {"apple", "banana", "cherry", "apple"}\nprint(thisset)`} />

                            <h2 className="text-3xl font-extrabold text-blue-900 mt-12 mb-6 border-b-2 border-blue-100 pb-3">Python Dictionaries</h2>
                            <p className="text-gray-700 mb-4">Dictionaries are used to store data values in key:value pairs.</p>
                            <p className="text-gray-700 mb-4">A dictionary is a collection which is ordered*, changeable and do not allow duplicates.</p>
                            <p className="text-gray-700 mb-4">Dictionaries are written with curly brackets, and have keys and values:</p>
                            <CodeBlock language="python" code={`thisdict = {\n  "brand": "Ford",\n  "model": "Mustang",\n  "year": 1964\n}\nprint(thisdict)`} />

                            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4 border-b border-gray-100 pb-2">Dictionary Items</h3>
                            <p className="text-gray-700 mb-4">Dictionary items are presented in key:value pairs, and can be referred to by using the key name.</p>
                            <CodeBlock language="python" code={`thisdict = {\n  "brand": "Ford",\n  "model": "Mustang",\n  "year": 1964\n}\nprint(thisdict["brand"])`} />
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
                                <li>Greater than: <code>a &gt; b</code></li>
                                <li>Greater than or equal to: <code>a &gt;= b</code></li>
                            </ul>
                            <p className="text-gray-700 mb-4">These conditions can be used in several ways, most commonly in "if statements" and loops.</p>
                            <p className="text-gray-700 mb-4">An "if statement" is written by using the <code>if</code> keyword.</p>
                            <CodeBlock language="python" code={`a = 33\nb = 200\nif b > a:\n  print("b is greater than a")`} />

                            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4 border-b border-gray-100 pb-2">Elif</h3>
                            <p className="text-gray-700 mb-4">The <code>elif</code> keyword is Python's way of saying "if the previous conditions were not true, then try this condition".</p>
                            <CodeBlock language="python" code={`a = 33\nb = 33\nif b > a:\n  print("b is greater than a")\nelif a == b:\n  print("a and b are equal")`} />

                            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4 border-b border-gray-100 pb-2">Else</h3>
                            <p className="text-gray-700 mb-4">The <code>else</code> keyword catches anything which isn't caught by the preceding conditions.</p>
                            <CodeBlock language="python" code={`a = 200\nb = 33\nif b > a:\n  print("b is greater than a")\nelif a == b:\n  print("a and b are equal")\nelse:\n  print("a is greater than b")`} />

                            <h2 className="text-3xl font-extrabold text-blue-900 mt-12 mb-6 border-b-2 border-blue-100 pb-3">Python Match Framework</h2>
                            <p className="text-gray-700 mb-4">Introduced in Python 3.10, the <code>match</code> statement evaluates an expression and executes code if the structure of a given variable matches.</p>
                            <CodeBlock language="python" code={`status = 404\nmatch status:\n  case 400:\n    print("Bad request")\n  case 404:\n    print("Not found")\n  case 418:\n    print("I'm a teapot")\n  case _:\n    print("Something's wrong with the internet")`} />

                            <h2 className="text-3xl font-extrabold text-blue-900 mt-12 mb-6 border-b-2 border-blue-100 pb-3">Python While Loops</h2>
                            <p className="text-gray-700 mb-4">With the <code>while</code> loop we can execute a set of statements as long as a condition is true.</p>
                            <CodeBlock language="python" code={`i = 1\nwhile i < 6:\n  print(i)\n  i += 1`} />
                            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg my-4"><p className="text-yellow-800 text-sm">Note: remember to increment i, or else the loop will continue forever.</p></div>

                            <p className="text-gray-700 mb-4">With the <code>break</code> statement we can stop the loop even if the while condition is true:</p>
                            <CodeBlock language="python" code={`i = 1\nwhile i < 6:\n  print(i)\n  if i == 3:\n    break\n  i += 1`} />

                            <h2 className="text-3xl font-extrabold text-blue-900 mt-12 mb-6 border-b-2 border-blue-100 pb-3">Python For Loops</h2>
                            <p className="text-gray-700 mb-4">A <code>for</code> loop is used for iterating over a sequence (that is either a list, a tuple, a dictionary, a set, or a string).</p>
                            <p className="text-gray-700 mb-4">This is less like the for keyword in other programming languages, and works more like an iterator method as found in other object-orientated programming languages.</p>
                            <CodeBlock language="python" code={`fruits = ["apple", "banana", "cherry"]\nfor x in fruits:\n  print(x)`} />

                            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4 border-b border-gray-100 pb-2">The range() Function</h3>
                            <p className="text-gray-700 mb-4">To loop through a set of code a specified number of times, we can use the <code>range()</code> function,</p>
                            <p className="text-gray-700 mb-4">The <code>range()</code> function returns a sequence of numbers, starting from 0 by default, and increments by 1 (by default), and ends at a specified number.</p>
                            <CodeBlock language="python" code={`for x in range(6):\n  print(x)`} />
                        </div>
                    )
                }
            ]
        },
        {
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
                            <CodeBlock language="python" code={`def my_function():\n  print("Hello from a function")`} />

                            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4 border-b border-gray-100 pb-2">Calling a Function</h3>
                            <p className="text-gray-700 mb-4">To call a function, use the function name followed by parenthesis:</p>
                            <CodeBlock language="python" code={`def my_function():\n  print("Hello from a function")\n\nmy_function()`} />

                            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4 border-b border-gray-100 pb-2">Arguments</h3>
                            <p className="text-gray-700 mb-4">Information can be passed into functions as arguments.</p>
                            <p className="text-gray-700 mb-4">Arguments are specified after the function name, inside the parentheses. You can add as many arguments as you want, just separate them with a comma.</p>
                            <CodeBlock language="python" code={`def my_function(fname):\n  print(fname + " Refsnes")\n\nmy_function("Emil")\nmy_function("Tobias")\nmy_function("Linus")`} />

                            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4 border-b border-gray-100 pb-2">Return Values</h3>
                            <p className="text-gray-700 mb-4">To let a function return a value, use the <code>return</code> statement:</p>
                            <CodeBlock language="python" code={`def my_function(x):\n  return 5 * x\n\nprint(my_function(3))\nprint(my_function(5))\nprint(my_function(9))`} />
                        </div>
                    )
                }
            ]
        }
    ]
};
