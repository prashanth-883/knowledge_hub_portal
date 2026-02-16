import React from 'react';

// Common interface for course data
export interface SubItem {
    id: string;
    title: string;
    content: React.ReactNode;
}

export interface Topic {
    id: string;
    title: string;
    subItems: SubItem[];
}

export interface Course {
    title: string;
    lastUpdated: string;
    topics: Topic[];
}

export const courses: Record<string, Course> = {
    // =========================================================================
    // C++
    // =========================================================================
    cpp: {
        title: 'C++ Programming Language',
        lastUpdated: '6 Dec, 2025',
        topics: [
            {
                id: 'complete-guide',
                title: 'Basics & Syntax',
                subItems: [
                    {
                        id: 'intro-to-syntax',
                        title: 'Introduction to Syntax',
                        content: (
                            <div className="space-y-12">
                                <section>
                                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction to C++</h2>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        C++ is a cross-platform language that can be used to create high-performance applications. C++ was developed by Bjarne Stroustrup, as an extension to the C language. C++ gives programmers a high level of control over system resources and memory.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        The language was updated 3 major times in 2011, 2014, and 2017 to C++11, C++14, and C++17.
                                    </p>
                                    <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Why Use C++?</h3>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                        <li>C++ is one of the world's most popular programming languages.</li>
                                        <li>C++ can be found in today's operating systems, Graphical User Interfaces, and embedded systems.</li>
                                        <li>C++ is an object-oriented programming language which gives a clear structure to programs and allows code to be reused, lowering development costs.</li>
                                        <li>C++ is portable and can be used to develop applications that can be adapted to multiple platforms.</li>
                                        <li>C++ is fun and easy to learn!</li>
                                        <li>As C++ is close to C, C# and Java, it makes it easy for programmers to switch to C++ or vice versa.</li>
                                    </ul>
                                </section>

                                <hr className="border-gray-200" />

                                <section>
                                    <h2 className="text-3xl font-bold text-gray-900 mb-6">C++ Getting Started</h2>
                                    <p className="text-gray-700 mb-4">
                                        To start using C++, you need two things:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-6">
                                        <li>A text editor, like Notepad, to write C++ code</li>
                                        <li>A compiler, like GCC, to translate the C++ code into a language that the computer will understand</li>
                                    </ul>
                                    <p className="text-gray-700 mb-4">
                                        There are many IDE's available freely on the web which organize your files and folders and include a C++ compiler in them. Some popular IDEs include Code::Blocks, Eclipse, and Visual Studio.
                                    </p>
                                </section>

                                <hr className="border-gray-200" />

                                <section>
                                    <h2 className="text-3xl font-bold text-gray-900 mb-6">C++ Syntax</h2>
                                    <p className="text-gray-700 mb-4">
                                        Let's break down the following code to understand it better:
                                    </p>

                                    <div className="bg-gray-900 text-gray-100 rounded-lg p-6 font-mono text-sm overflow-x-auto mb-6">
                                        <div className="flex justify-between text-gray-500 mb-2">
                                            <span>hello_world.cpp</span>
                                            <span>C++</span>
                                        </div>
                                        <pre><code>{`#include <iostream>
using namespace std;

int main() {
  cout << "Hello World!";
  return 0;
}`}</code></pre>
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-800 mb-3">Example Explained</h3>
                                    <ul className="space-y-4 text-gray-700">
                                        <li><strong>Line 1:</strong> <code>#include &lt;iostream&gt;</code> is a header file library that lets us work with input and output objects, such as <code>cout</code> (used in line 5). Header files add functionality to C++ programs.</li>
                                        <li><strong>Line 2:</strong> <code>using namespace std</code> means that we can use names for objects and variables from the standard library.</li>
                                        <li><strong>Line 3:</strong> A blank line. C++ ignores white space. But we use it to make the code more readable.</li>
                                        <li><strong>Line 4:</strong> <code>int main()</code>. This is called a function. Any code inside its curly brackets <code>{'{}'}</code> will be executed.</li>
                                        <li><strong>Line 5:</strong> <code>cout</code> (pronounced "see-out") is an object used together with the insertion operator (<code>&lt;&lt;</code>) to output/print text. In our example it will output "Hello World!".</li>
                                        <li><strong>Line 6:</strong> <code>return 0</code> ends the main function.</li>
                                        <li><strong>Line 7:</strong> Do not forget to add the closing curly bracket <code>{'}'}</code> to actually end the main function.</li>
                                    </ul>
                                </section>

                                <hr className="border-gray-200" />

                                <section>
                                    <h2 className="text-3xl font-bold text-gray-900 mb-6">C++ Output (Print Text)</h2>
                                    <p className="text-gray-700 mb-4">
                                        The <code>cout</code> object, together with the <code>&lt;&lt;</code> operator, is used to output values/print text:
                                    </p>
                                    <div className="bg-gray-900 text-gray-100 rounded-lg p-6 font-mono text-sm overflow-x-auto mb-6">
                                        <pre><code>{`#include <iostream>
using namespace std;

int main() {
  cout << "Hello World!";
  cout << "I am learning C++";
  return 0;
}`}</code></pre>
                                    </div>
                                    <p className="text-gray-700">
                                        You can add as many <code>cout</code> objects as you want. However, note that it does not insert a new line at the end of the output.
                                    </p>
                                </section>
                            </div>
                        )
                    }
                ]
            },
            {
                id: 'control-flow',
                title: 'Control Flow',
                subItems: [
                    {
                        id: 'if-else',
                        title: 'If...Else Statements',
                        content: (
                            <div className="space-y-12">
                                <section>
                                    <h2 className="text-3xl font-bold text-gray-900 mb-6">C++ Conditions and If Statements</h2>
                                    <p className="text-gray-700 mb-4">
                                        C++ supports the usual logical conditions from mathematics:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-6">
                                        <li>Less than: <code>a &lt; b</code></li>
                                        <li>Less than or equal to: <code>a &lt;= b</code></li>
                                        <li>Greater than: <code>a &gt; b</code></li>
                                        <li>Greater than or equal to: <code>a &gt;= b</code></li>
                                        <li>Equal to: <code>a == b</code></li>
                                        <li>Not Equal to: <code>a != b</code></li>
                                    </ul>
                                    <p className="text-gray-700 mb-4">
                                        You can use these conditions to perform different actions for different decisions.
                                    </p>
                                    <p className="text-gray-700 mb-4">
                                        C++ has the following conditional statements:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                        <li>Use <code>if</code> to specify a block of code to be executed, if a specified condition is true</li>
                                        <li>Use <code>else</code> to specify a block of code to be executed, if the same condition is false</li>
                                        <li>Use <code>else if</code> to specify a new condition to test, if the first condition is false</li>
                                        <li>Use <code>switch</code> to specify many alternative blocks of code to be executed</li>
                                    </ul>
                                </section>

                                <hr className="border-gray-200" />

                                <section>
                                    <h2 className="text-3xl font-bold text-gray-900 mb-6">The if Statement</h2>
                                    <p className="text-gray-700 mb-4">
                                        Use the <code>if</code> statement to specify a block of C++ code to be executed if a condition is <code>true</code>.
                                    </p>
                                    <div className="bg-gray-100 p-4 rounded-lg border border-gray-200 mb-6">
                                        <h4 className="font-semibold mb-2">Syntax</h4>
                                        <pre className="text-sm font-mono text-gray-800">
                                            if (condition) {'{'}<br />
                                            &nbsp;&nbsp;// block of code to be executed if the condition is true<br />
                                            {'}'}
                                        </pre>
                                    </div>
                                    <div className="bg-gray-900 text-gray-100 rounded-lg p-6 font-mono text-sm overflow-x-auto mb-6">
                                        <pre><code>{`if (20 > 18) {
  cout << "20 is greater than 18";
}`}</code></pre>
                                    </div>
                                </section>

                                <hr className="border-gray-200" />

                                <section>
                                    <h2 className="text-3xl font-bold text-gray-900 mb-6">The else Statement</h2>
                                    <p className="text-gray-700 mb-4">
                                        Use the <code>else</code> statement to specify a block of code to be executed if the condition is <code>false</code>.
                                    </p>
                                    <div className="bg-gray-900 text-gray-100 rounded-lg p-6 font-mono text-sm overflow-x-auto mb-6">
                                        <pre><code>{`int time = 20;
if (time < 18) {
  cout << "Good day.";
} else {
  cout << "Good evening.";
}
// Outputs "Good evening."`}</code></pre>
                                    </div>
                                </section>
                            </div>
                        )
                    }
                ]
            },
            {
                id: 'oop-module',
                title: 'Functions & OOP',
                subItems: [
                    {
                        id: 'functions-oop-intro',
                        title: 'Functions to OOP',
                        content: (
                            <div className="space-y-12">
                                <section>
                                    <h2 className="text-3xl font-bold text-gray-900 mb-6">C++ Functions</h2>
                                    <p className="text-gray-700 mb-4">
                                        A function is a block of code which only runs when it is called. You can pass data, known as parameters, into a function. Functions are used to perform certain actions, and they are important for reusing code: Define the code once, and use it many times.
                                    </p>
                                    <div className="bg-gray-900 text-gray-100 rounded-lg p-6 font-mono text-sm overflow-x-auto mb-6">
                                        <pre><code>{`void myFunction() {
  cout << "I just got executed!";
}

int main() {
  myFunction(); // call the function
  return 0;
}`}</code></pre>
                                    </div>
                                </section>

                                <hr className="border-gray-200" />

                                <section>
                                    <h2 className="text-3xl font-bold text-gray-900 mb-6">C++ OOP (Object-Oriented Programming)</h2>
                                    <p className="text-gray-700 mb-4">
                                        C++ is an object-oriented programming language.
                                        Procedural programming is about writing procedures or functions that perform operations on the data, while object-oriented programming is about creating objects that contain both data and functions.
                                    </p>
                                    <p className="text-gray-700 mb-4">
                                        Object-oriented programming has several advantages over procedural programming:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-6">
                                        <li>OOP is faster and easier to execute</li>
                                        <li>OOP provides a clear structure for the programs</li>
                                        <li>OOP helps to keep the C++ code DRY "Don't Repeat Yourself", and makes the code easier to maintain, modify and debug</li>
                                        <li>OOP makes it possible to create full reusable applications with less code and shorter development time</li>
                                    </ul>
                                </section>

                                <hr className="border-gray-200" />

                                <section>
                                    <h2 className="text-3xl font-bold text-gray-900 mb-6">C++ Classes and Objects</h2>
                                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-6">
                                        <p className="text-blue-900">
                                            <strong>Class:</strong> A template or blueprint for creating objects.<br />
                                            <strong>Object:</strong> An instance of a class.
                                        </p>
                                    </div>
                                    <p className="text-gray-700 mb-4">
                                        When the individual objects are created, they inherit all the variables and functions from the class.
                                    </p>
                                    <div className="bg-gray-900 text-gray-100 rounded-lg p-6 font-mono text-sm overflow-x-auto mb-6">
                                        <pre><code>{`class MyClass {       // The class
  public:             // Access specifier
    int myNum;        // Attribute (int variable)
    string myString;  // Attribute (string variable)
};

int main() {
  MyClass myObj;      // Create an object of MyClass

  // Access attributes and set values
  myObj.myNum = 15; 
  myObj.myString = "Some text";

  cout << myObj.myNum << "\\n";
  cout << myObj.myString;
  return 0;
}`}</code></pre>
                                    </div>
                                </section>
                            </div>
                        )
                    }
                ]
            }
        ]
    },

    // =========================================================================
    // Java
    // =========================================================================
    java: {
        title: 'Java Programming',
        lastUpdated: '10 Jan, 2026',
        topics: [
            {
                id: 'java-basics',
                title: 'Java Basics',
                subItems: [
                    { id: 'intro', title: 'Introduction to Java', content: <div>Content for Introduction to Java</div> },
                    { id: 'basics', title: 'Java Programming Basics', content: <div>Content for Java Programming Basics</div> },
                    { id: 'methods', title: 'Java Methods', content: <div>Content for Java Methods</div> },
                    { id: 'access-modifiers', title: 'Access Modifiers in Java', content: <div>Content for Access Modifiers in Java</div> },
                    { id: 'arrays', title: 'Arrays in Java', content: <div>Content for Arrays in Java</div> },
                    { id: 'strings', title: 'Java Strings', content: <div>Content for Java Strings</div> },
                    { id: 'regex', title: 'Regular Expressions in Java', content: <div>Content for Regular Expressions in Java</div> }
                ]
            },
            {
                id: 'oop-interfaces',
                title: 'OOP & Interfaces',
                subItems: [
                    { id: 'classes-objects', title: 'Classes and Objects in Java', content: <div>Content for Classes and Objects in Java</div> },
                    { id: 'constructors', title: 'Java Constructors', content: <div>Content for Java Constructors</div> },
                    { id: 'oop-concepts', title: 'Java OOP Concepts', content: <div>Content for Java OOP Concepts</div> },
                    { id: 'packages', title: 'Java Packages', content: <div>Content for Java Packages</div> },
                    { id: 'interface', title: 'Java Interface', content: <div>Content for Java Interface</div> }
                ]
            }
        ]
    },

    // =========================================================================
    // C Programming
    // =========================================================================
    c: {
        title: 'C Programming',
        lastUpdated: '15 Feb, 2025',
        topics: [
            {
                id: 'c-basics',
                title: 'C Basics',
                subItems: [
                    { id: 'intro', title: 'C Language Introduction', content: <div>Content for C Language Introduction</div> },
                    { id: 'identifiers', title: 'Identifiers in C', content: <div>Content for Identifiers in C</div> },
                    { id: 'keywords', title: 'Keywords in C', content: <div>Content for Keywords in C</div> },
                    { id: 'variables', title: 'Variables in C', content: <div>Content for Variables in C</div> },
                    { id: 'datatypes', title: 'Data Types in C', content: <div>Content for Data Types in C</div> },
                    { id: 'operators', title: 'Operators in C', content: <div>Content for Operators in C</div> },
                    { id: 'decision-making', title: 'Decision Making in C', content: <div>Content for Decision Making in C</div> },
                    { id: 'loops', title: 'Loops in C', content: <div>Content for Loops in C</div> },
                    { id: 'functions', title: 'Functions in C', content: <div>Content for Functions in C</div> }
                ]
            },
            {
                id: 'arrays-strings',
                title: 'Arrays & Strings',
                subItems: [
                    { id: 'arrays', title: 'Arrays in C', content: <div>Content for Arrays in C</div> },
                    { id: 'strings', title: 'Strings in C', content: <div>Content for Strings in C</div> }
                ]
            },
            {
                id: 'pointers-structures',
                title: 'Pointers and Structures',
                subItems: [
                    { id: 'pointers', title: 'Pointers in C', content: <div>Content for Pointers in C</div> },
                    { id: 'function-pointer', title: 'Function Pointer in C', content: <div>Content for Function Pointer in C</div> },
                    { id: 'unions', title: 'Unions in C', content: <div>Content for Unions in C</div> },
                    { id: 'enum', title: 'Enumeration (or enum) in C', content: <div>Content for Enumeration in C</div> },
                    { id: 'structure-member', title: 'Structure Member', content: <div>Content for Structure Member</div> },
                    { id: 'alignment', title: 'Alignment, Padding and Data Packing', content: <div>Content for Alignment, Padding and Data Packing</div> }
                ]
            }
        ]
    },

    // =========================================================================
    // Python
    // =========================================================================
    python: {
        title: 'Python Programming',
        lastUpdated: '20 Jan, 2026',
        topics: [
            {
                id: 'basics',
                title: 'Python Basics',
                subItems: [
                    {
                        id: 'intro',
                        title: 'Introduction',
                        content: (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-bold text-gray-900">Introduction to Python</h2>
                                <p className="text-gray-700">Python is a popular programming language. It is used for web development (server-side), software development, mathematics, system scripting.</p>
                                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                                    <h3 className="text-lg font-semibold text-yellow-900">Why Python?</h3>
                                    <p className="text-yellow-800 text-sm mt-1">Simple syntax similar to English. Works on different platforms (Windows, Mac, Linux).</p>
                                </div>
                                <div className="bg-gray-900 text-gray-100 rounded-lg p-6 font-mono text-sm overflow-x-auto">
                                    <pre><code>{`print("Hello, World!")`}</code></pre>
                                </div>
                            </div>
                        )
                    }
                ]
            }
        ]
    },

    // =========================================================================
    // JavaScript
    // =========================================================================
    javascript: {
        title: 'JavaScript Tutorial',
        lastUpdated: '12 Feb, 2026',
        topics: [
            {
                id: 'basics',
                title: 'JS Basics',
                subItems: [
                    {
                        id: 'intro',
                        title: 'Introduction to JS',
                        content: (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-bold text-gray-900">Introduction to JavaScript</h2>
                                <p className="text-gray-700">JavaScript is the programming language of the Web. It is lightweight, interpreted, and typically used to create dynamic and interactive elements on web pages.</p>
                            </div>
                        )
                    }
                ]
            }
        ]
    },

    // =========================================================================
    // HTML5
    // =========================================================================
    html5: {
        title: 'HTML5 Tutorial',
        lastUpdated: '10 Feb, 2026',
        topics: [
            {
                id: 'basics',
                title: 'HTML Basics',
                subItems: [
                    {
                        id: 'intro',
                        title: 'Introduction',
                        content: (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-bold text-gray-900">HTML Introduction</h2>
                                <p className="text-gray-700">HTML stands for Hyper Text Markup Language. It is the standard markup language for creating Web pages.</p>
                                <div className="bg-gray-900 text-gray-100 rounded-lg p-6 font-mono text-sm overflow-x-auto">
                                    <pre><code>{`<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>
<h1>My First Heading</h1>
<p>My first paragraph.</p>
</body>
</html>`}</code></pre>
                                </div>
                            </div>
                        )
                    }
                ]
            }
        ]
    },

    // =========================================================================
    // CSS3
    // =========================================================================
    css3: {
        title: 'CSS3 Tutorial',
        lastUpdated: '10 Feb, 2026',
        topics: [
            {
                id: 'basics',
                title: 'CSS Basics',
                subItems: [
                    {
                        id: 'syntax',
                        title: 'Syntax',
                        content: (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-bold text-gray-900">CSS Syntax</h2>
                                <p className="text-gray-700">CSS describes how HTML elements are to be displayed on screen.</p>
                                <div className="bg-gray-900 text-gray-100 rounded-lg p-6 font-mono text-sm overflow-x-auto">
                                    <pre><code>{`selector {
  property: value;
}
h1 {
  color: blue;
  font-size: 12px;
}`}</code></pre>
                                </div>
                            </div>
                        )
                    }
                ]
            }
        ]
    },

    // =========================================================================
    // Aptitude
    // =========================================================================
    aptitude: {
        title: 'Aptitude Preparation',
        lastUpdated: '18 Feb, 2026',
        topics: [
            {
                id: 'quant',
                title: 'Quantitative Aptitude',
                subItems: [
                    {
                        id: 'number_system',
                        title: 'Number System',
                        content: (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-bold text-gray-900">Number System</h2>
                                <p className="text-gray-700">The number system is the most important topic in quantitative aptitude.</p>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li>Classification of Numbers</li>
                                    <li>Divisibility Rules</li>
                                    <li>Unit Digit Calculation</li>
                                    <li>Remainders</li>
                                </ul>
                            </div>
                        )
                    }
                ]
            }
        ]
    }
};
