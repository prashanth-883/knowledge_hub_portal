import React from 'react';
import { pythonCourseContent } from './pythonCourseData';
import { cCourseContent } from './cCourseData';
import { htmlCourseContent } from './htmlCourseData';
import { javaCourseContent } from './javaCourseData';
import CodeBlock from '../components/CodeBlock';

// Common interface for course data
export interface SubItem {
    id: string;
    title: string;
    content: React.ReactNode;
}

export interface Topic {
    id: string;
    title: string;
    subItems?: SubItem[];
    content?: React.ReactNode;
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

                                    <CodeBlock language="cpp" code={`#include <iostream>
using namespace std;

int main() {
  cout << "Hello World!";
  return 0;
}`} />

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
                                    <CodeBlock language="cpp" code={`#include <iostream>
using namespace std;

int main() {
  cout << "Hello World!";
  cout << "I am learning C++";
  return 0;
}`} />
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
                                    <CodeBlock language="cpp" code={`if (20 > 18) {
  cout << "20 is greater than 18";
}`} />
                                </section>

                                <hr className="border-gray-200" />

                                <section>
                                    <h2 className="text-3xl font-bold text-gray-900 mb-6">The else Statement</h2>
                                    <p className="text-gray-700 mb-4">
                                        Use the <code>else</code> statement to specify a block of code to be executed if the condition is <code>false</code>.
                                    </p>
                                    <CodeBlock language="cpp" code={`int time = 20;
if (time < 18) {
  cout << "Good day.";
} else {
  cout << "Good evening.";
}
// Outputs "Good evening."`} />
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
                                    <CodeBlock language="cpp" code={`void myFunction() {
  cout << "I just got executed!";
}

int main() {
  myFunction(); // call the function
  return 0;
}`} />
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
                                    <CodeBlock language="cpp" code={`class MyClass {       // The class
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
}`} />
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
    java: javaCourseContent,

    // =========================================================================
    // C Programming
    // =========================================================================
    c: cCourseContent,

    // =========================================================================
    // Python
    // =========================================================================
    python: pythonCourseContent,

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
    html5: htmlCourseContent,

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

    // Aptitude removed
};
