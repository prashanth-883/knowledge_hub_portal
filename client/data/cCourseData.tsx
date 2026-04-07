import React from 'react';
import CodeBlock from '../components/CodeBlock';
import { Course } from './courseData';

export const cCourseContent: Course = {
    title: 'C Programming',
    lastUpdated: '6 Mar, 2026',
    topics: [
        {
            id: 'c-basics',
            title: 'C Basics',
            subItems: [
                {
                    id: 'intro',
                    title: 'C Language Introduction',
                    content: (
                        <div className="space-y-8">
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Introduction to C</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    C is a general-purpose, procedural programming language developed by Dennis Ritchie at Bell Labs in 1972. It is one of the most influential programming languages ever created and remains widely used in systems programming, embedded systems, and wherever performance matters.
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    C is often called the "mother of all languages" because many languages — C++, Java, Python, JavaScript — are either directly derived from or heavily influenced by C.
                                </p>
                                <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Why Learn C?</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                    <li>C is the foundation for understanding computer architecture and memory management.</li>
                                    <li>Operating systems like Linux, Windows, and macOS are written in C.</li>
                                    <li>C gives you direct access to memory via pointers — a skill essential for systems programming.</li>
                                    <li>C programs are extremely fast and efficient.</li>
                                    <li>Learning C makes learning any other language much easier.</li>
                                </ul>
                            </section>
                            <hr className="border-gray-200" />
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Your First C Program</h2>
                                <p className="text-gray-700 mb-4">Every C program starts execution from the <code>main()</code> function. Here is the classic "Hello, World!" program:</p>
                                <CodeBlock language="c" code={`#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`} />
                                <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Line by Line Explanation</h3>
                                <ul className="space-y-3 text-gray-700">
                                    <li><strong>#include &lt;stdio.h&gt;</strong> — Includes the standard input/output library so we can use <code>printf()</code>.</li>
                                    <li><strong>int main()</strong> — Entry point of every C program. <code>int</code> means it returns an integer.</li>
                                    <li><strong>printf("Hello, World!\n")</strong> — Prints text to the console. <code>\n</code> moves to a new line.</li>
                                    <li><strong>return 0;</strong> — Returns 0 to the OS, indicating successful execution.</li>
                                </ul>
                            </section>
                        </div>
                    )
                },
                {
                    id: 'variables',
                    title: 'Variables in C',
                    content: (
                        <div className="space-y-8">
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Variables in C</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    A variable is a named location in memory that stores a value. In C, you must declare a variable before using it, specifying its data type.
                                </p>
                                <CodeBlock language="c" code={`#include <stdio.h>

int main() {
    int age = 20;
    float salary = 45000.50;
    char grade = 'A';
    
    printf("Age: %d\\n", age);
    printf("Salary: %.2f\\n", salary);
    printf("Grade: %c\\n", grade);
    return 0;
}`} />
                            </section>
                            <hr className="border-gray-200" />
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Variable Declaration Rules</h2>
                                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                    <li>Variable names must start with a letter or underscore (_).</li>
                                    <li>Names are case-sensitive: <code>age</code> and <code>Age</code> are different.</li>
                                    <li>No spaces or special characters (except underscore).</li>
                                    <li>Cannot use C keywords like <code>int</code>, <code>return</code>, <code>if</code> as variable names.</li>
                                </ul>
                                <CodeBlock language="c" code={`// Valid variable names
int myAge;
float _salary;
char firstName;

// Invalid (will cause errors)
// int 2score;     -- starts with number
// float my salary; -- contains space`} />
                            </section>
                        </div>
                    )
                },
                {
                    id: 'datatypes',
                    title: 'Data Types in C',
                    content: (
                        <div className="space-y-8">
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Data Types in C</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    C is a statically typed language. Every variable must have a type that defines what kind of data it can hold and how much memory it occupies.
                                </p>
                                <div className="overflow-x-auto mb-6">
                                    <table className="w-full border-collapse text-sm">
                                        <thead>
                                            <tr className="bg-gray-100">
                                                <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
                                                <th className="border border-gray-300 px-4 py-2 text-left">Size</th>
                                                <th className="border border-gray-300 px-4 py-2 text-left">Format</th>
                                                <th className="border border-gray-300 px-4 py-2 text-left">Example</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {[
                                                ['int', '4 bytes', '%d', '42'],
                                                ['float', '4 bytes', '%f', '3.14'],
                                                ['double', '8 bytes', '%lf', '3.14159265'],
                                                ['char', '1 byte', '%c', "'A'"],
                                                ['long', '8 bytes', '%ld', '100000000'],
                                            ].map(([type, size, fmt, ex]) => (
                                                <tr key={type} className="hover:bg-gray-50">
                                                    <td className="border border-gray-300 px-4 py-2 font-mono text-blue-700">{type}</td>
                                                    <td className="border border-gray-300 px-4 py-2">{size}</td>
                                                    <td className="border border-gray-300 px-4 py-2 font-mono">{fmt}</td>
                                                    <td className="border border-gray-300 px-4 py-2 font-mono">{ex}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <CodeBlock language="c" code={`#include <stdio.h>

int main() {
    int    count  = 100;
    float  pi     = 3.14f;
    double precise = 3.141592653589793;
    char   letter = 'C';

    printf("int:    %d\\n",  count);
    printf("float:  %f\\n",  pi);
    printf("double: %lf\\n", precise);
    printf("char:   %c\\n",  letter);
    return 0;
}`} />
                            </section>
                        </div>
                    )
                },
                {
                    id: 'operators',
                    title: 'Operators in C',
                    content: (
                        <div className="space-y-8">
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Operators in C</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Operators are symbols that perform operations on variables and values. C has a rich set of operators.
                                </p>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">Arithmetic Operators</h3>
                                <CodeBlock language="c" code={`#include <stdio.h>

int main() {
    int a = 10, b = 3;
    printf("a + b = %d\\n", a + b);  // 13  Addition
    printf("a - b = %d\\n", a - b);  // 7   Subtraction
    printf("a * b = %d\\n", a * b);  // 30  Multiplication
    printf("a / b = %d\\n", a / b);  // 3   Division (integer)
    printf("a %% b = %d\\n", a % b); // 1   Modulus (remainder)
    return 0;
}`} />
                            </section>
                            <hr className="border-gray-200" />
                            <section>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">Comparison Operators</h3>
                                <p className="text-gray-700 mb-4">Comparison operators return 1 (true) or 0 (false).</p>
                                <CodeBlock language="c" code={`#include <stdio.h>

int main() {
    int x = 5, y = 10;
    printf("%d\\n", x == y);  // 0 (false)
    printf("%d\\n", x != y);  // 1 (true)
    printf("%d\\n", x < y);   // 1 (true)
    printf("%d\\n", x > y);   // 0 (false)
    printf("%d\\n", x <= 5);  // 1 (true)
    printf("%d\\n", x >= 5);  // 1 (true)
    return 0;
}`} />
                            </section>
                            <hr className="border-gray-200" />
                            <section>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">Logical Operators</h3>
                                <CodeBlock language="c" code={`#include <stdio.h>

int main() {
    int a = 1, b = 0;
    printf("%d\\n", a && b);  // 0  AND: both must be true
    printf("%d\\n", a || b);  // 1  OR:  at least one must be true
    printf("%d\\n", !a);      // 0  NOT: flips the boolean value
    return 0;
}`} />
                            </section>
                            <hr className="border-gray-200" />
                            <section>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">Assignment Operators</h3>
                                <CodeBlock language="c" code={`#include <stdio.h>

int main() {
    int x = 10;
    x += 5;   printf("%d\\n", x);  // 15
    x -= 3;   printf("%d\\n", x);  // 12
    x *= 2;   printf("%d\\n", x);  // 24
    x /= 4;   printf("%d\\n", x);  // 6
    x %= 4;   printf("%d\\n", x);  // 2
    return 0;
}`} />
                            </section>
                        </div>
                    )
                },
                {
                    id: 'decision-making',
                    title: 'Decision Making in C',
                    content: (
                        <div className="space-y-8">
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">If...Else Statements</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Decision-making in C is done using <code>if</code>, <code>else if</code>, and <code>else</code> statements to execute different code based on conditions.
                                </p>
                                <CodeBlock language="c" code={`#include <stdio.h>

int main() {
    int score = 75;

    if (score >= 90) {
        printf("Grade: A\\n");
    } else if (score >= 75) {
        printf("Grade: B\\n");
    } else if (score >= 60) {
        printf("Grade: C\\n");
    } else {
        printf("Grade: F\\n");
    }
    // Output: Grade: B
    return 0;
}`} />
                            </section>
                            <hr className="border-gray-200" />
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Switch Statement</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    The <code>switch</code> statement is used when you need to compare one value against multiple options. It's cleaner than many <code>else if</code> chains.
                                </p>
                                <CodeBlock language="c" code={`#include <stdio.h>

int main() {
    int day = 3;

    switch (day) {
        case 1:
            printf("Monday\\n");
            break;
        case 2:
            printf("Tuesday\\n");
            break;
        case 3:
            printf("Wednesday\\n");
            break;
        case 4:
            printf("Thursday\\n");
            break;
        case 5:
            printf("Friday\\n");
            break;
        default:
            printf("Weekend\\n");
    }
    // Output: Wednesday
    return 0;
}`} />
                                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mt-4">
                                    <p className="text-blue-900 font-medium">⚠️ Important: <code>break</code></p>
                                    <p className="text-blue-800 text-sm mt-1">Without <code>break</code>, execution "falls through" to the next case. Always include <code>break</code> unless you intentionally want fall-through behaviour.</p>
                                </div>
                            </section>
                            <hr className="border-gray-200" />
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Ternary Operator</h2>
                                <p className="text-gray-700 mb-4">A shorthand for simple if-else:</p>
                                <CodeBlock language="c" code={`#include <stdio.h>

int main() {
    int age = 20;
    // condition ? value_if_true : value_if_false
    const char* status = (age >= 18) ? "Adult" : "Minor";
    printf("%s\\n", status);  // Output: Adult
    return 0;
}`} />
                            </section>
                        </div>
                    )
                },
                {
                    id: 'loops',
                    title: 'Loops in C',
                    content: (
                        <div className="space-y-8">
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">While Loop</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    The <code>while</code> loop executes a block of code as long as a condition is true. The condition is checked <strong>before</strong> each iteration.
                                </p>
                                <CodeBlock language="c" code={`#include <stdio.h>

int main() {
    int i = 1;
    while (i <= 5) {
        printf("%d\\n", i);
        i++;
    }
    // Output: 1 2 3 4 5
    return 0;
}`} />
                            </section>
                            <hr className="border-gray-200" />
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Do...While Loop</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    The <code>do...while</code> loop executes the block <strong>at least once</strong>, then checks the condition.
                                </p>
                                <CodeBlock language="c" code={`#include <stdio.h>

int main() {
    int i = 1;
    do {
        printf("%d\\n", i);
        i++;
    } while (i <= 5);
    // Output: 1 2 3 4 5
    return 0;
}`} />
                            </section>
                            <hr className="border-gray-200" />
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">For Loop</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    The <code>for</code> loop combines initialization, condition, and increment in one line — ideal when the number of iterations is known.
                                </p>
                                <CodeBlock language="c" code={`#include <stdio.h>

int main() {
    // for (init; condition; update)
    for (int i = 1; i <= 5; i++) {
        printf("%d\\n", i);
    }
    // Output: 1 2 3 4 5
    return 0;
}`} />
                            </section>
                            <hr className="border-gray-200" />
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Nested Loops</h2>
                                <p className="text-gray-700 mb-4">A loop inside another loop — commonly used to work with 2D data like grids and matrices.</p>
                                <CodeBlock language="c" code={`#include <stdio.h>

int main() {
    // Print a 3x3 multiplication table
    for (int i = 1; i <= 3; i++) {
        for (int j = 1; j <= 3; j++) {
            printf("%4d", i * j);
        }
        printf("\\n");
    }
    /* Output:
       1   2   3
       2   4   6
       3   6   9  */
    return 0;
}`} />
                            </section>
                            <hr className="border-gray-200" />
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Break and Continue</h2>
                                <CodeBlock language="c" code={`#include <stdio.h>

int main() {
    // break: exits the loop immediately
    for (int i = 1; i <= 10; i++) {
        if (i == 5) break;
        printf("%d ", i);
    }
    printf("\\n");  // Output: 1 2 3 4

    // continue: skips the current iteration
    for (int i = 1; i <= 5; i++) {
        if (i == 3) continue;
        printf("%d ", i);
    }
    printf("\\n");  // Output: 1 2 4 5

    return 0;
}`} />
                            </section>
                        </div>
                    )
                },
                {
                    id: 'functions',
                    title: 'Functions in C',
                    content: (
                        <div className="space-y-8">
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Functions in C</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    A function is a block of code that performs a specific task. Functions make code reusable, organised, and easier to debug.
                                </p>
                                <CodeBlock language="c" code={`#include <stdio.h>

// Function declaration (prototype)
int add(int a, int b);

int main() {
    int result = add(5, 3);
    printf("Sum = %d\\n", result);  // Sum = 8
    return 0;
}

// Function definition
int add(int a, int b) {
    return a + b;
}`} />
                            </section>
                            <hr className="border-gray-200" />
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Function Types</h2>
                                <CodeBlock language="c" code={`#include <stdio.h>

// Void function: no return value
void greet(char name[]) {
    printf("Hello, %s!\\n", name);
}

// Function with return value
float square(float n) {
    return n * n;
}

// Function with multiple parameters
int max(int a, int b) {
    return (a > b) ? a : b;
}

int main() {
    greet("Alice");              // Hello, Alice!
    printf("%.1f\\n", square(4.5));  // 20.2
    printf("%d\\n", max(10, 7));     // 10
    return 0;
}`} />
                            </section>
                            <hr className="border-gray-200" />
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Recursion</h2>
                                <p className="text-gray-700 mb-4">A function that calls itself is called recursive. Classic example: factorial.</p>
                                <CodeBlock language="c" code={`#include <stdio.h>

int factorial(int n) {
    if (n == 0 || n == 1)
        return 1;                 // Base case
    return n * factorial(n - 1); // Recursive call
}

int main() {
    printf("5! = %d\\n", factorial(5));  // 5! = 120
    return 0;
}`} />
                            </section>
                        </div>
                    )
                },
                {
                    id: 'identifiers',
                    title: 'Identifiers in C',
                    content: (
                        <div className="space-y-8">
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Identifiers in C</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    An identifier is the name given to program elements — variables, functions, arrays, etc. Identifiers distinguish one element from another in a C program.
                                </p>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">Rules for Identifiers</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-6">
                                    <li>Must begin with a letter (a–z, A–Z) or an underscore (_).</li>
                                    <li>Can contain letters, digits (0–9), and underscores.</li>
                                    <li>Cannot contain spaces or special characters like @, #, $.</li>
                                    <li>Case-sensitive: <code>count</code> and <code>Count</code> are different.</li>
                                    <li>Cannot be a C keyword (reserved word).</li>
                                    <li>No length limit in C99 (first 31 characters are significant in older standards).</li>
                                </ul>
                                <CodeBlock language="c" code={`// Valid identifiers
int age;
float _salary;
char firstName;
int num123;

// Invalid identifiers (would cause compile error)
// int 1count;    // starts with digit
// float my-var;  // contains hyphen
// char int;      // reserved keyword`} />
                            </section>
                        </div>
                    )
                },
                {
                    id: 'keywords',
                    title: 'Keywords in C',
                    content: (
                        <div className="space-y-8">
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Keywords in C</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Keywords are reserved words that have predefined meaning in C. They cannot be used as identifiers. C99 defines 37 keywords.
                                </p>
                                <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 mb-6">
                                    {['auto', 'break', 'case', 'char', 'const', 'continue', 'default', 'do', 'double', 'else', 'enum', 'extern', 'float', 'for', 'goto', 'if', 'inline', 'int', 'long', 'register', 'restrict', 'return', 'short', 'signed', 'sizeof', 'static', 'struct', 'switch', 'typedef', 'union', 'unsigned', 'void', 'volatile', 'while', '_Bool', '_Complex', '_Imaginary'].map(kw => (
                                        <span key={kw} className="bg-blue-50 border border-blue-200 text-blue-800 text-xs font-mono px-2 py-1 rounded text-center">{kw}</span>
                                    ))}
                                </div>
                                <CodeBlock language="c" code={`#include <stdio.h>

int main() {
    // 'int', 'if', 'else', 'return' are all keywords
    int x = 10;
    if (x > 5) {
        printf("Greater\\n");
    } else {
        printf("Smaller or equal\\n");
    }
    return 0;
}`} />
                            </section>
                        </div>
                    )
                },
            ]
        },
        {
            id: 'arrays-strings',
            title: 'Arrays & Strings',
            subItems: [
                {
                    id: 'arrays',
                    title: 'Arrays in C',
                    content: (
                        <div className="space-y-8">
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Arrays in C</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    An array is a collection of elements of the same data type stored in contiguous memory locations. Arrays allow you to store multiple values under a single name.
                                </p>
                                <CodeBlock language="c" code={`#include <stdio.h>

int main() {
    // Declare and initialize an array of 5 integers
    int numbers[5] = {10, 20, 30, 40, 50};

    // Access elements using index (0-based)
    printf("First:  %d\\n", numbers[0]);  // 10
    printf("Third:  %d\\n", numbers[2]);  // 30
    printf("Last:   %d\\n", numbers[4]);  // 50
    return 0;
}`} />
                            </section>
                            <hr className="border-gray-200" />
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Array Size</h2>
                                <p className="text-gray-700 mb-4">Use <code>sizeof</code> to find the size of an array at runtime:</p>
                                <CodeBlock language="c" code={`#include <stdio.h>

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int size = sizeof(arr) / sizeof(arr[0]);
    printf("Array has %d elements\\n", size);  // 5
    return 0;
}`} />
                            </section>
                            <hr className="border-gray-200" />
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Looping Through Arrays</h2>
                                <CodeBlock language="c" code={`#include <stdio.h>

int main() {
    int scores[] = {85, 92, 78, 95, 88};
    int n = sizeof(scores) / sizeof(scores[0]);
    int sum = 0;

    for (int i = 0; i < n; i++) {
        sum += scores[i];
        printf("Score[%d] = %d\\n", i, scores[i]);
    }
    printf("Average: %.1f\\n", (float)sum / n);
    return 0;
}`} />
                            </section>
                            <hr className="border-gray-200" />
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">2D Arrays</h2>
                                <p className="text-gray-700 mb-4">A 2D array is like a table — it has rows and columns. Ideal for matrices and grids.</p>
                                <CodeBlock language="c" code={`#include <stdio.h>

int main() {
    // 3 rows, 3 columns
    int matrix[3][3] = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };

    // Print the matrix
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            printf("%4d", matrix[i][j]);
        }
        printf("\\n");
    }
    return 0;
}`} />
                            </section>
                        </div>
                    )
                },
                {
                    id: 'strings',
                    title: 'Strings in C',
                    content: (
                        <div className="space-y-8">
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Strings in C</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    In C, a string is an array of characters terminated by a null character <code>'\0'</code>. C does not have a built-in string type like other languages.
                                </p>
                                <CodeBlock language="c" code={`#include <stdio.h>

int main() {
    // Two ways to declare a string
    char name1[] = "Alice";              // Array form
    char name2[10] = {'B','o','b','\\0'};  // Explicit form

    printf("%s\\n", name1);  // Alice
    printf("%s\\n", name2);  // Bob

    // Each character is accessible by index
    printf("First char: %c\\n", name1[0]);  // A
    return 0;
}`} />
                            </section>
                            <hr className="border-gray-200" />
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">String Functions — string.h</h2>
                                <p className="text-gray-700 mb-4">The <code>&lt;string.h&gt;</code> library provides powerful functions for working with strings:</p>
                                <CodeBlock language="c" code={`#include <stdio.h>
#include <string.h>

int main() {
    char str1[] = "Hello";
    char str2[] = "World";
    char result[50];

    // strlen: length of string
    printf("Length: %lu\\n", strlen(str1));          // 5

    // strcpy: copy string
    strcpy(result, str1);
    printf("Copy: %s\\n", result);                   // Hello

    // strcat: concatenate strings
    strcat(result, " ");
    strcat(result, str2);
    printf("Concat: %s\\n", result);                 // Hello World

    // strcmp: compare strings (0 = equal)
    printf("Compare: %d\\n", strcmp(str1, str2));    // negative

    // strupr / strlwr (not standard, use toupper loop)
    for (int i = 0; str1[i]; i++) {
        printf("%c", str1[i] - 32);  // HELLO
    }
    printf("\\n");

    return 0;
}`} />
                            </section>
                            <hr className="border-gray-200" />
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Reading Strings with Spaces</h2>
                                <CodeBlock language="c" code={`#include <stdio.h>

int main() {
    char sentence[100];

    // scanf stops at space — use fgets instead
    printf("Enter a sentence: ");
    fgets(sentence, sizeof(sentence), stdin);
    printf("You entered: %s", sentence);
    return 0;
}`} />
                            </section>
                        </div>
                    )
                },
            ]
        },
        {
            id: 'pointers-structures',
            title: 'Pointers and Structures',
            subItems: [
                {
                    id: 'pointers',
                    title: 'Pointers in C',
                    content: (
                        <div className="space-y-8">
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Pointers in C</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    A pointer is a variable that stores the <strong>memory address</strong> of another variable. Pointers are one of C's most powerful features — and one of its most distinctive.
                                </p>
                                <CodeBlock language="c" code={`#include <stdio.h>

int main() {
    int   age = 25;
    int  *ptr = &age;  // ptr stores the address of age

    printf("Value of age:   %d\\n",  age);   // 25
    printf("Address of age: %p\\n",  &age);  // e.g. 0x7ffd...
    printf("ptr holds:      %p\\n",  ptr);   // same address
    printf("Value via ptr:  %d\\n", *ptr);   // 25  (dereferencing)

    // Modify via pointer
    *ptr = 30;
    printf("New age: %d\\n", age);           // 30
    return 0;
}`} />
                            </section>
                            <hr className="border-gray-200" />
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Pointers and Arrays</h2>
                                <p className="text-gray-700 mb-4">An array name is a pointer to its first element. Pointer arithmetic lets you traverse arrays.</p>
                                <CodeBlock language="c" code={`#include <stdio.h>

int main() {
    int arr[] = {10, 20, 30, 40, 50};
    int *p = arr;           // points to arr[0]

    for (int i = 0; i < 5; i++) {
        printf("%d ", *(p + i));  // pointer arithmetic
    }
    // Output: 10 20 30 40 50
    printf("\\n");
    return 0;
}`} />
                            </section>
                        </div>
                    )
                },
                {
                    id: 'function-pointer',
                    title: 'Function Pointer in C',
                    content: (
                        <div className="space-y-8">
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Function Pointers</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    A function pointer holds the address of a function. This enables passing functions as arguments, implementing callbacks, and building dispatch tables.
                                </p>
                                <CodeBlock language="c" code={`#include <stdio.h>

int add(int a, int b) { return a + b; }
int sub(int a, int b) { return a - b; }

int main() {
    // Declare a function pointer: return_type (*name)(params)
    int (*op)(int, int);

    op = add;
    printf("Add: %d\\n", op(10, 5));  // 15

    op = sub;
    printf("Sub: %d\\n", op(10, 5));  // 5

    return 0;
}`} />
                            </section>
                        </div>
                    )
                },
                {
                    id: 'unions',
                    title: 'Unions in C',
                    content: (
                        <div className="space-y-8">
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Unions in C</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    A union is similar to a struct, but all members share the same memory location. Only one member holds a value at any time. The size of a union equals the size of its largest member.
                                </p>
                                <CodeBlock language="c" code={`#include <stdio.h>

union Data {
    int    i;
    float  f;
    char   str[20];
};

int main() {
    union Data d;

    d.i = 10;
    printf("d.i = %d\\n", d.i);       // 10

    d.f = 3.14f;
    printf("d.f = %.2f\\n", d.f);     // 3.14
    printf("d.i = %d\\n", d.i);       // corrupted! — shared memory

    printf("Size of union: %lu bytes\\n", sizeof(d));  // 20 (largest member)
    return 0;
}`} />
                            </section>
                        </div>
                    )
                },
                {
                    id: 'enum',
                    title: 'Enumeration (or enum) in C',
                    content: (
                        <div className="space-y-8">
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Enumerations in C</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    An enum is a user-defined type that consists of named integer constants. It makes code more readable by replacing magic numbers with meaningful names.
                                </p>
                                <CodeBlock language="c" code={`#include <stdio.h>

// By default: Mon=0, Tue=1, Wed=2, ...
enum Day {
    Mon, Tue, Wed, Thu, Fri, Sat, Sun
};

enum Status {
    ACTIVE = 1,
    INACTIVE = 0,
    PENDING = 2
};

int main() {
    enum Day today = Wed;
    printf("Day number: %d\\n", today);  // 2

    enum Status s = ACTIVE;
    if (s == ACTIVE) {
        printf("User is active\\n");
    }
    return 0;
}`} />
                            </section>
                        </div>
                    )
                },
                {
                    id: 'structure-member',
                    title: 'Structures in C',
                    content: (
                        <div className="space-y-8">
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Structures in C</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    A structure (<code>struct</code>) groups variables of different types under one name. This is C's primary tool for creating custom data types.
                                </p>
                                <CodeBlock language="c" code={`#include <stdio.h>
#include <string.h>

// Define a structure
struct Student {
    char  name[50];
    int   roll;
    float gpa;
};

int main() {
    // Create and initialize a struct variable
    struct Student s1;
    strcpy(s1.name, "Alice");
    s1.roll = 101;
    s1.gpa  = 3.8f;

    printf("Name: %s\\n",  s1.name);
    printf("Roll: %d\\n",  s1.roll);
    printf("GPA:  %.1f\\n", s1.gpa);
    return 0;
}`} />
                            </section>
                            <hr className="border-gray-200" />
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Pointer to Structure</h2>
                                <CodeBlock language="c" code={`#include <stdio.h>
#include <string.h>

struct Point { int x; int y; };

int main() {
    struct Point p = {10, 20};
    struct Point *ptr = &p;

    // Arrow operator (->) accesses members via pointer
    printf("x = %d, y = %d\\n", ptr->x, ptr->y);  // 10 20

    ptr->x = 99;
    printf("New x = %d\\n", p.x);  // 99
    return 0;
}`} />
                            </section>
                        </div>
                    )
                },
                {
                    id: 'alignment',
                    title: 'Alignment, Padding and Data Packing',
                    content: (
                        <div className="space-y-8">
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Alignment and Padding</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    CPUs access memory most efficiently when data is <strong>aligned</strong> — stored at addresses that are multiples of the data size. The C compiler automatically adds <strong>padding bytes</strong> between struct members to ensure alignment, which means a struct's size can be larger than the sum of its members.
                                </p>
                                <CodeBlock language="c" code={`#include <stdio.h>

struct Padded {
    char  a;    // 1 byte + 3 bytes padding
    int   b;    // 4 bytes
    char  c;    // 1 byte + 3 bytes padding
};              // Total: 12 bytes (not 6!)

struct Optimized {
    int   b;    // 4 bytes
    char  a;    // 1 byte
    char  c;    // 1 byte + 2 bytes padding
};              // Total: 8 bytes

int main() {
    printf("Padded:    %lu bytes\\n", sizeof(struct Padded));    // 12
    printf("Optimized: %lu bytes\\n", sizeof(struct Optimized)); // 8
    return 0;
}`} />
                                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg mt-4">
                                    <p className="text-yellow-900 font-medium">💡 Tip: Order members from largest to smallest to reduce padding and save memory.</p>
                                </div>
                            </section>
                            <hr className="border-gray-200" />
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Pack Structures</h2>
                                <p className="text-gray-700 mb-4">Use <code>#pragma pack</code> to disable padding (platform-specific, use carefully):</p>
                                <CodeBlock language="c" code={`#include <stdio.h>

#pragma pack(1)  // No padding
struct Packed {
    char a;   // 1 byte
    int  b;   // 4 bytes
    char c;   // 1 byte
};           // Total: 6 bytes exactly
#pragma pack()  // Restore default

int main() {
    printf("Packed size: %lu bytes\\n", sizeof(struct Packed));  // 6
    return 0;
}`} />
                            </section>
                        </div>
                    )
                },
            ]
        },
    ]
};
