const fs = require('fs');

const cppTopics = `        topics: [
            {
                id: 'cpp-intro',
                title: 'Basics & Syntax',
                subItems: [
                    {
                        id: 'cpp-introduction',
                        title: 'C++ Introduction',
                        content: (
                            <div className="space-y-8 text-gray-800 leading-relaxed tracking-wide text-lg">
                                <h2 className="text-3xl font-extrabold text-blue-900 mt-12 mb-6 border-b-2 border-blue-100 pb-3">What is C++?</h2>
                                <p className="text-gray-700 mb-4">C++ is a cross-platform language that can be used to create high-performance applications.</p>
                                <p className="text-gray-700 mb-4">C++ was developed by Bjarne Stroustrup, as an extension to the C language.</p>
                                <p className="text-gray-700 mb-4">C++ gives programmers a high level of control over system resources and memory.</p>
                                <p className="text-gray-700 mb-4">The language was updated 5 major times in 2011, 2014, 2017, 2020, and 2023 to C++11, C++14, C++17, C++20, and C++23.</p>

                                <h2 className="text-3xl font-extrabold text-blue-900 mt-12 mb-6 border-b-2 border-blue-100 pb-3">Why Use C++</h2>
                                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-6">
                                    <li>C++ is one of the world's most popular programming languages.</li>
                                    <li>C++ can be found in today's operating systems, Graphical User Interfaces, and embedded systems.</li>
                                    <li>C++ is an object-oriented programming language which gives a clear structure to programs and allows code to be reused, lowering development costs.</li>
                                    <li>C++ is portable and can be used to develop applications that can be adapted to multiple platforms.</li>
                                    <li>C++ is fun and easy to learn!</li>
                                    <li>As C++ is close to C, C# and Java, it makes it easy for programmers to switch to C++ or vice versa.</li>
                                </ul>

                                <h2 className="text-3xl font-extrabold text-blue-900 mt-12 mb-6 border-b-2 border-blue-100 pb-3">Difference between C and C++</h2>
                                <p className="text-gray-700 mb-4">C++ was developed as an extension of C, and both languages have almost the same syntax.</p>
                                <p className="text-gray-700 mb-4">The main difference between C and C++ is that C++ supports classes and objects, while C does not.</p>

                                <h2 className="text-3xl font-extrabold text-blue-900 mt-12 mb-6 border-b-2 border-blue-100 pb-3">Get Started</h2>
                                <p className="text-gray-700 mb-4">When you are finished with this tutorial, you will be able to write C++ programs and create real-life examples.</p>
                                <p className="text-gray-700 mb-4">It is not necessary to have any prior programming experience.</p>
                            </div>
                        )
                    },
                    {
                        id: 'cpp-syntax',
                        title: 'C++ Syntax',
                        content: (
                            <div className="space-y-8 text-gray-800 leading-relaxed tracking-wide text-lg">
                                <h2 className="text-3xl font-extrabold text-blue-900 mt-12 mb-6 border-b-2 border-blue-100 pb-3">C++ Syntax</h2>
                                <p className="text-gray-700 mb-4">Let's break up the following code to understand it better:</p>

                                <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4 border-b border-gray-100 pb-2">Example</h3>
                                <CodeBlock language="cpp" code={\`#include <iostream>\\nusing namespace std;\\n\\nint main() {\\n  cout << "Hello World!";\\n  return 0;\\n}\`} />

                                <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4 border-b border-gray-100 pb-2">Example explained</h3>
                                <p className="text-gray-700 mb-4"><strong>Line 1:</strong> <code>#include &lt;iostream&gt;</code> is a header file library that lets us work with input and output objects, such as <code>cout</code> (used in line 5). Header files add functionality to C++ programs.</p>
                                <p className="text-gray-700 mb-4"><strong>Line 2:</strong> <code>using namespace std</code> means that we can use names for objects and variables from the standard library.</p>
                                
                                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg my-4"><p className="text-yellow-800 text-sm">Don't worry if you don't understand how <code>#include &lt;iostream&gt;</code> and <code>using namespace std</code> works. Just think of it as something that (almost) always appears in your program.</p></div>
                                
                                <p className="text-gray-700 mb-4"><strong>Line 3:</strong> A blank line. C++ ignores white space. But we use it to make the code more readable.</p>
                                <p className="text-gray-700 mb-4"><strong>Line 4:</strong> Another thing that always appear in a C++ program is <code>int main()</code>. This is called a function. Any code inside its curly brackets <code>&#123;&#125;</code> will be executed.</p>
                                <p className="text-gray-700 mb-4"><strong>Line 5:</strong> <code>cout</code> (pronounced "see-out") is an object used together with the insertion operator (<code>&lt;&lt;</code>) to output/print text. In our example, it will output "Hello World!".</p>
                                
                                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg my-4"><p className="text-yellow-800 text-sm"><strong>Note:</strong> C++ is case-sensitive: "cout" and "Cout" has different meaning.</p></div>
                                
                                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg my-4"><p className="text-yellow-800 text-sm"><strong>Note:</strong> Every C++ statement ends with a semicolon ;.</p></div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg my-4"><p className="text-yellow-800 text-sm"><strong>Note:</strong> The body of int main() could also been written as:<br/><code>int main () &#123; cout &lt;&lt; "Hello World! "; return 0; &#125;</code></p></div>

                                <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-lg my-4"><p className="text-indigo-800 text-sm"><strong>Remember:</strong> The compiler ignores white spaces. However, multiple lines makes the code more readable.</p></div>

                                <p className="text-gray-700 mb-4"><strong>Line 6:</strong> <code>return 0;</code> ends the main function.</p>
                                <p className="text-gray-700 mb-4"><strong>Line 7:</strong> Do not forget to add the closing curly bracket <code>&#125;</code> to actually end the main function.</p>

                                <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4 border-b border-gray-100 pb-2">Omitting Namespace</h3>
                                <p className="text-gray-700 mb-4">You might see some C++ programs that run without the standard namespace line. The <code>using namespace std;</code> statement can be omitted, and replaced with the <code>std</code> keyword followed by the <code>::</code> operator, for some objects (like <code>std::cout</code> in the example below):</p>
                                
                                <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4 border-b border-gray-100 pb-2">Example</h3>
                                <CodeBlock language="cpp" code={\`#include <iostream>\\n\\nint main() {\\n  std::cout << "Hello World!";\\n  return 0;\\n}\`} />
                                
                                <p className="text-gray-700 mb-4">Both approaches are valid in C++. Using <code>std::</code> makes it clear where names come from and avoids name conflicts in larger programs.</p>

                                <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4 border-b border-gray-100 pb-2">Which One Do We Use?</h3>
                                <p className="text-gray-700 mb-4">In this tutorial, we will mostly use <code>using namespace std;</code></p>
                                <p className="text-gray-700 mb-4">This keeps the code shorter and easier to read while learning the basics of C++. It helps beginners focus on understanding the language itself, instead of repeatedly writing <code>std::</code> in every example.</p>
                                <p className="text-gray-700 mb-4">As you write larger or more advanced programs, you may prefer using <code>std::</code> explicitly. You will see both styles in real-world C++ code.</p>
                            </div>
                        )
                    }
                ]
            },
            {
                id: 'cpp-variables',
                title: 'Variables',
                subItems: [
                    {
                        id: 'cpp-variables-data',
                        title: 'C++ Variables',
                        content: (
                            <div className="space-y-8 text-gray-800 leading-relaxed tracking-wide text-lg">
                                <h2 className="text-3xl font-extrabold text-blue-900 mt-12 mb-6 border-b-2 border-blue-100 pb-3">C++ Variables</h2>
                                <p className="text-gray-700 mb-4">Variables are containers for storing data values.</p>
                                <p className="text-gray-700 mb-4">In C++, there are different types of variables (defined with different keywords), for example:</p>

                                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-6">
                                    <li><code>int</code> - stores integers (whole numbers), without decimals, such as 123 or -123</li>
                                    <li><code>double</code> - stores floating point numbers, with decimals, such as 19.99 or -19.99</li>
                                    <li><code>char</code> - stores single characters, such as 'a' or 'B'. Char values are surrounded by single quotes</li>
                                    <li><code>string</code> - stores text, such as "Hello World". String values are surrounded by double quotes</li>
                                    <li><code>bool</code> - stores values with two states: true or false</li>
                                </ul>

                                <h2 className="text-3xl font-extrabold text-blue-900 mt-12 mb-6 border-b-2 border-blue-100 pb-3">Declaring (Creating) Variables</h2>
                                <p className="text-gray-700 mb-4">To create a variable, specify the type and assign it a value:</p>

                                <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4 border-b border-gray-100 pb-2">Syntax</h3>
                                <CodeBlock language="cpp" code={\`type variableName = value;\`} />
                                <p className="text-gray-700 mb-4">Where <em>type</em> is one of C++ types (such as <code>int</code>), and <em>variableName</em> is the name of the variable (such as <strong>x</strong> or <strong>myName</strong>). The equal sign is used to assign values to the variable.</p>

                                <p className="text-gray-700 mb-4">To create a variable that should store a number, look at the following example:</p>

                                <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4 border-b border-gray-100 pb-2">Example</h3>
                                <p className="text-gray-700 mb-4">Create a variable called myNum of type int and assign it the value 15:</p>
                                <CodeBlock language="cpp" code={\`int myNum = 15;\\ncout << myNum;\`} />

                                <p className="text-gray-700 mb-4">You can also declare a variable without assigning the value, and assign the value later:</p>
                                <CodeBlock language="cpp" code={\`int myNum;\\nmyNum = 15;\\ncout << myNum;\`} />

                                <h2 className="text-3xl font-extrabold text-blue-900 mt-12 mb-6 border-b-2 border-blue-100 pb-3">Changing Variable Values</h2>
                                <p className="text-gray-700 mb-4">Note that if you assign a new value to an existing variable, it will overwrite the previous value:</p>
                                <CodeBlock language="cpp" code={\`int myNum = 15;  // myNum is 15\\nmyNum = 10;  // Now myNum is 10\\ncout << myNum;  // Outputs 10\`} />

                                <h2 className="text-3xl font-extrabold text-blue-900 mt-12 mb-6 border-b-2 border-blue-100 pb-3">Other Types</h2>
                                <p className="text-gray-700 mb-4">A demonstration of other data types:</p>
                                <CodeBlock language="cpp" code={\`int myNum = 5;               // Integer (whole number without decimals)\\ndouble myFloatNum = 5.99;    // Floating point number (with decimals)\\nchar myLetter = 'D';         // Character\\nstring myText = "Hello";     // String (text)\\nbool myBoolean = true;       // Boolean (true or false)\`} />
                                <p className="text-gray-700 mb-4">You will learn more about the individual types in the Data Types chapter.</p>

                                <h2 className="text-3xl font-extrabold text-blue-900 mt-12 mb-6 border-b-2 border-blue-100 pb-3">Display Variables</h2>
                                <p className="text-gray-700 mb-4">The <code>cout</code> object is used together with the <code>&lt;&lt;</code> operator to display variables.</p>
                                <p className="text-gray-700 mb-4">To combine both text and a variable, separate them with the <code>&lt;&lt;</code> operator:</p>
                                <CodeBlock language="cpp" code={\`int myAge = 35;\\ncout << "I am " << myAge << " years old.";\`} />
                                
                                <p className="text-gray-700 mb-4">You can also combine different types, which you will learn more about in a later chapter.</p>
                                <CodeBlock language="cpp" code={\`string name = "John";\\nint age = 35;\\ndouble height = 6.1;\\n\\ncout << name << " is " << age << " years old and " << height << " feet tall.";\`} />

                                <h2 className="text-3xl font-extrabold text-blue-900 mt-12 mb-6 border-b-2 border-blue-100 pb-3">Add Variables Together</h2>
                                <p className="text-gray-700 mb-4">To add a variable to another variable, you can use the <code>+</code> operator:</p>
                                <CodeBlock language="cpp" code={\`int x = 5;\\nint y = 6;\\nint sum = x + y;\\ncout << sum;\`} />

                                <h2 className="text-3xl font-extrabold text-blue-900 mt-12 mb-6 border-b-2 border-blue-100 pb-3">C++ Declare Multiple Variables</h2>
                                <p className="text-gray-700 mb-4">To declare more than one variable of the same type, use a comma-separated list:</p>
                                <CodeBlock language="cpp" code={\`int x = 5, y = 6, z = 50;\\ncout << x + y + z;\`} />

                                <p className="text-gray-700 mb-4">You can also assign the same value to multiple variables in one line:</p>
                                <CodeBlock language="cpp" code={\`int x, y, z;\\nx = y = z = 50;\\ncout << x + y + z;\`} />

                                <h2 className="text-3xl font-extrabold text-blue-900 mt-12 mb-6 border-b-2 border-blue-100 pb-3">C++ Identifiers</h2>
                                <p className="text-gray-700 mb-4">All C++ variables must be identified with unique names.</p>
                                <p className="text-gray-700 mb-4">These unique names are called identifiers.</p>
                                <p className="text-gray-700 mb-4">Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).</p>
                                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg my-4"><p className="text-yellow-800 text-sm"><strong>Note:</strong> It is recommended to use descriptive names in order to create understandable and maintainable code.</p></div>
                                
                                <CodeBlock language="cpp" code={\`// Good\\nint minutesPerHour = 60;\\n\\n// OK, but not so easy to understand what m actually is\\nint m = 60;\`} />
                                
                                <p className="text-gray-700 mb-4">The general rules for naming variables are:</p>
                                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-6">
                                    <li>Names can contain letters, digits and underscores</li>
                                    <li>Names must begin with a letter or an underscore (_)</li>
                                    <li>Names are case-sensitive (myVar and myvar are different variables)</li>
                                    <li>Names cannot contain whitespaces or special characters like !, #, %, etc.</li>
                                    <li>Reserved words (like C++ keywords, such as int) cannot be used as names</li>
                                </ul>

                                <h2 className="text-3xl font-extrabold text-blue-900 mt-12 mb-6 border-b-2 border-blue-100 pb-3">C++ Constants</h2>
                                <p className="text-gray-700 mb-4">When you do not want others (or yourself) to change existing variable values, use the <code>const</code> keyword (this will declare the variable as "constant", which means unchangeable and read-only):</p>
                                <CodeBlock language="cpp" code={\`const int myNum = 15;  // myNum will always be 15\\nmyNum = 10;  // error: assignment of read-only variable 'myNum'\`} />
                                
                                <p className="text-gray-700 mb-4">You should always declare the variable as constant when you have values that are unlikely to change:</p>
                                <CodeBlock language="cpp" code={\`const int minutesPerHour = 60;\`} />

                                <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4 border-b border-gray-100 pb-2">Notes On Constants</h3>
                                <p className="text-gray-700 mb-4">When you declare a constant variable, it must be assigned with a value:</p>
                                <CodeBlock language="cpp" code={\`const int minutesPerHour = 60;\`} />
                                <p className="text-gray-700 mb-4">This however, will not work:</p>
                                <CodeBlock language="cpp" code={\`const int minutesPerHour;\\nminutesPerHour = 60; // error\`} />
                            </div>
                        )
                    }
                ]
            }
        ]`;

let content = fs.readFileSync('data/courseData.tsx', 'utf8');

const cppStart = content.indexOf('cpp: {');
if (cppStart === -1) {
    console.log('CPP section not found');
    process.exit(1);
}

const topicsStart = content.indexOf('topics: [', cppStart);
if (topicsStart === -1) {
    console.log('topics inside CPP not found');
    process.exit(1);
}

const cppEndRegex = /\s*},\s*\/\/\s*=========================================================================\s*\/\/\s*Java Programming/s;
const cppEndMatch = content.match(cppEndRegex);

let endOfTopics = -1;
if (cppEndMatch && cppEndMatch.index > topicsStart) {
    endOfTopics = content.lastIndexOf(']', cppEndMatch.index);
} else {
    const nextStart = content.indexOf('java: {');
    if (nextStart !== -1) {
        endOfTopics = content.lastIndexOf(']', nextStart);
    } else {
        console.log('End bound not found');
        process.exit(1);
    }
}

const newContent = content.slice(0, topicsStart) + cppTopics + content.slice(endOfTopics + 1);
fs.writeFileSync('data/courseData.tsx', newContent, 'utf8');
console.log('Success injected CPP');
