import React from 'react';
import { Course } from './courseData';
import CodeBlock from '../components/CodeBlock';

export const javaCourseContent: Course = {
    title: 'Java Programming',
    lastUpdated: '9 Mar, 2026',
    topics: [
        {
            id: 'java-intro',
            title: 'Java Intro',
            content: (
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900">What is Java?</h2>
                    <p className="text-gray-700">Java is a popular and powerful programming language, created in 1995.</p>
                    <p className="text-gray-700">It is owned by Oracle, and more than 3 billion devices run Java.</p>
                    <p className="text-gray-700">It is used for:</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Mobile applications (specially Android apps)</li>
                        <li>Desktop applications</li>
                        <li>Web applications</li>
                        <li>Web servers and application servers</li>
                        <li>Games</li>
                        <li>Database connection</li>
                        <li>And much, much more!</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8">Why Use Java?</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Java works on different platforms (Windows, Mac, Linux, Raspberry Pi, etc.)</li>
                        <li>It is one of the most popular programming languages in the world</li>
                        <li>It has a large demand in the current job market</li>
                        <li>It is easy to learn and simple to use</li>
                        <li>It is open-source and free</li>
                        <li>It is secure, fast and powerful</li>
                        <li>It has huge community support (tens of millions of developers)</li>
                        <li>Java is an object oriented language which gives a clear structure to programs and allows code to be reused, lowering development costs</li>
                        <li>As Java is close to C++ and C#, it makes it easy for programmers to switch to Java or vice versa</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8">Java Example</h2>
                    <p className="text-gray-700">Java is often used in everyday programming tasks, like saying hello to a user:</p>
                    <CodeBlock language="java" code={`public class Main {
  public static void main(String[] args) {
    String name = "John";
    System.out.println("Hello " + name);
  }
}`} />
                    <p className="text-gray-700 font-bold mt-4">Result:</p>
                    <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm text-gray-800">
                        Hello John
                    </div>
                </div>
            )
        },
        {
            id: 'java-syntax',
            title: 'Java Syntax',
            subItems: [
                { id: 'syntax', title: 'Syntax', content: (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900">Java Syntax</h2>
                        <p className="text-gray-700">In the previous chapter, we created a Java file called Main.java, and we used the following code to print "Hello World" to the screen:</p>
                        
                        <CodeBlock language="java" code={`public class Main {
  public static void main(String[] args) {
    System.out.println("Hello World");
  }
}`} />

                        <h3 className="text-xl font-bold text-gray-900 mt-6">Example explained</h3>
                        <p className="text-gray-700">Every line of code that runs in Java must be inside a class. The class name should always start with an uppercase first letter. In our example, we named the class <strong>Main</strong>.</p>
                        <p className="text-gray-700"><strong>Note:</strong> Java is case-sensitive. MyClass and myclass would be treated as two completely different names.</p>
                        <p className="text-gray-700">The name of the Java file must match the class name. So if your class is called Main, the file must be saved as Main.java. This is because Java uses the class name to find and run your code. If the names don't match, Java will give an error and the program will not run.</p>
                        <p className="text-gray-700">When saving the file, save it using the class name and add .java to the end of the filename. To run the example above on your computer, make sure that Java is properly installed. The output should be:</p>
                        <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm text-gray-800">Hello World</div>

                        <h3 className="text-xl font-bold text-gray-900 mt-6">The main Method</h3>
                        <p className="text-gray-700">The <code>main()</code> method is required in every Java program. It is where the program starts running:</p>
                        <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm text-gray-800">public static void main(String[] args)</div>
                        <p className="text-gray-700 mt-4">Any code placed inside the <code>main()</code> method will be executed.</p>
                        <p className="text-gray-700">For now, you don't need to understand the keywords public, static, and void. You will learn about them later in this tutorial. Just remember: main() is the starting point of every Java program.</p>

                        <h3 className="text-xl font-bold text-gray-900 mt-6">System.out.println()</h3>
                        <p className="text-gray-700">Inside the <code>main()</code> method, we can use the <code>println()</code> method to print a line of text to the screen:</p>
                        <CodeBlock language="java" code={`public static void main(String[] args) {
  System.out.println("Hello World");
}`} />
                        <p className="text-gray-700"><strong>Note:</strong> The curly braces <code>{`{}`}</code> mark the beginning and the end of a block of code.</p>
                        <p className="text-gray-700"><code>System.out.println()</code> may look long, but you can think of it as a single command that means: "Send this text to the screen."</p>
                        <p className="text-gray-700">Here's what each part means (you will learn the details later):</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>System</strong> is a built-in Java class.</li>
                            <li><strong>out</strong> is a member of System, short for "output".</li>
                            <li><strong>println()</strong> is a method, short for "print line".</li>
                        </ul>
                        <p className="text-gray-700 font-bold mt-4">Finally, remember that each Java statement must end with a semicolon (;).</p>
                    </div>
                ) },
                { id: 'statements', title: 'Statements', content: (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900">Statements</h2>
                        <p className="text-gray-700">A computer program is a list of "instructions" to be "executed" by a computer.</p>
                        <p className="text-gray-700">In a programming language, these programming instructions are called statements.</p>
                        <p className="text-gray-700">The following statement "instructs" the compiler to print the text "Java is fun!" to the screen:</p>
                        
                        <CodeBlock language="java" code={`System.out.println("Java is fun!");`} />
                        
                        <p className="text-gray-700 font-bold text-red-600">It is important that you end the statement with a semicolon ;.</p>
                        <p className="text-gray-700">If you forget the semicolon (;), an error will occur and the program will not run:</p>
                        
                        <CodeBlock language="java" code={`System.out.println("Java is fun!")`} />
                        <p className="text-gray-700 font-bold mt-4">Result:</p>
                        <div className="bg-red-50 text-red-700 p-4 rounded-lg font-mono text-sm border border-red-200">
                            error: ';' expected
                        </div>
                        
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                            <p className="text-blue-700"><strong>Tip:</strong> You can think of a statement like a sentence in English. Just as sentences end with a period ., Java statements end with a semicolon ;.</p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8">Many Statements</h2>
                        <p className="text-gray-700">Most Java programs contain many statements. The statements are executed, one by one, in the same order as they are written:</p>
                        <CodeBlock language="java" code={`System.out.println("Hello World!");
System.out.println("Have a good day!");
System.out.println("Learning Java is fun!");`} />
                        
                        <h3 className="text-xl font-bold text-gray-900 mt-6">Example explained</h3>
                        <p className="text-gray-700">From the example above, we have three statements:</p>
                        <ul className="list-decimal list-inside space-y-2 text-gray-700">
                            <li>The first statement is executed first (print "Hello World!" to the screen).</li>
                            <li>Then the second statement is executed (print "Have a good day!" to the screen).</li>
                            <li>And at last, the third statement is executed (print "Learning Java is fun!" to the screen).</li>
                        </ul>
                        <p className="text-gray-700 mt-4">You will learn more about statements while reading this tutorial. For now, just remember to always end them with a semicolon to avoid any errors.</p>
                    </div>
                ) }
            ]
        },
        {
            id: 'java-variables',
            title: 'Java Variables',
            subItems: [
                { id: 'variables', title: 'Variables', content: (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900">Java Variables</h2>
                        <p className="text-gray-700">Variables are containers for storing data values.</p>
                        <p className="text-gray-700">In Java, there are different types of variables, for example:</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>String</strong> - stores text, such as "Hello". String values are surrounded by double quotes</li>
                            <li><strong>int</strong> - stores integers (whole numbers), without decimals, such as 123 or -123</li>
                            <li><strong>float</strong> - stores floating point numbers, with decimals, such as 19.99 or -19.99</li>
                            <li><strong>char</strong> - stores single characters, such as 'a' or 'B'. Char values are surrounded by single quotes</li>
                            <li><strong>boolean</strong> - stores values with two states: true or false</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8">Declaring (Creating) Variables</h2>
                        <p className="text-gray-700">To create a variable in Java, you need to: Choose a type (like int or String), give the variable a name (like x, age, or name), and optionally assign it a value using =.</p>
                        <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm text-gray-800">type variableName = value;</div>
                        
                        <p className="text-gray-700 mt-6">For example, if you want to store some text, you can use a String. Create a variable called name of type String and assign it the value "John". Then we use println() to print the name variable:</p>
                        <CodeBlock language="java" code={`String name = "John";
System.out.println(name);`} />

                        <p className="text-gray-700 mt-6">To create a variable that should store a number, you can use int:</p>
                        <CodeBlock language="java" code={`int myNum = 15;
System.out.println(myNum);`} />

                        <p className="text-gray-700 mt-6">You can also declare a variable without assigning the value, and assign the value later:</p>
                        <CodeBlock language="java" code={`int myNum;
myNum = 15;
System.out.println(myNum);`} />

                        <p className="text-gray-700 mt-6">Note that if you assign a new value to an existing variable, it will overwrite the previous value:</p>
                        <CodeBlock language="java" code={`int myNum = 15;
myNum = 20;  // myNum is now 20
System.out.println(myNum);`} />

                        <h2 className="text-2xl font-bold text-gray-900 mt-8">Final Variables</h2>
                        <p className="text-gray-700">If you don't want others (or yourself) to overwrite existing values, use the <code>final</code> keyword (this will declare the variable as "final" or "constant", which means unchangeable and read-only):</p>
                        <CodeBlock language="java" code={`final int myNum = 15;
myNum = 20;  // will generate an error: cannot assign a value to a final variable`} />

                        <h2 className="text-2xl font-bold text-gray-900 mt-8">Other Types</h2>
                        <p className="text-gray-700">A demonstration of how to declare variables of other types:</p>
                        <CodeBlock language="java" code={`int myNum = 5;
float myFloatNum = 5.99f;
char myLetter = 'D';
boolean myBool = true;
String myText = "Hello";`} />
                    </div>
                ) },
                { id: 'print-variables', title: 'Print Variables', content: (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900">Java Print Variables</h2>
                        <p className="text-gray-700">The <code>println()</code> method is often used to display variables.</p>
                        <p className="text-gray-700">To combine both text and a variable, use the <code>+</code> character:</p>
                        <CodeBlock language="java" code={`String name = "John";
System.out.println("Hello " + name);`} />

                        <p className="text-gray-700 mt-6">You can also use the <code>+</code> character to add a variable to another variable:</p>
                        <CodeBlock language="java" code={`String firstName = "John ";
String lastName = "Doe";
String fullName = firstName + lastName;
System.out.println(fullName);`} />

                        <h3 className="text-xl font-bold text-gray-900 mt-6">In Java, the + symbol has two meanings:</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>For text (strings), it joins them together (called concatenation).</li>
                            <li>For numbers, it adds values together.</li>
                        </ul>

                        <p className="text-gray-700 mt-6">For numeric values, the <code>+</code> character works as a mathematical operator (notice that we use int variables here):</p>
                        <CodeBlock language="java" code={`int x = 5;
int y = 6;
System.out.println(x + y); // Print the value of x + y`} />
                        <p className="text-gray-700">From the example above, here's what happens step by step:</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>x stores the value 5</li>
                            <li>y stores the value 6</li>
                            <li>println() displays the result of x + y, which is 11</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8">Mixing Text and Numbers</h2>
                        <p className="text-gray-700">Be careful when combining text and numbers in the same line of code. Without parentheses, Java will treat the numbers as text after the first string:</p>
                        <CodeBlock language="java" code={`int x = 5;
int y = 6;

System.out.println("The sum is " + x + y);   // Prints: The sum is 56
System.out.println("The sum is " + (x + y)); // Prints: The sum is 11`} />
                        
                        <p className="text-gray-700"><strong>Explanation:</strong></p>
                        <p className="text-gray-700">In the first line, Java combines "The sum is " with <code>x</code>, creating the string "The sum is 5". Then <code>y</code> is added to that string, so it becomes "The sum is 56".</p>
                        <p className="text-gray-700">In the second line, the parentheses make sure <code>x + y</code> is calculated first (resulting in 11), so the output is "The sum is 11".</p>
                    </div>
                ) },
                { id: 'multiple-variables', title: 'Multiple Variables', content: (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900">Declare Many Variables</h2>
                        <p className="text-gray-700">To declare more than one variable of the same type, you can use a comma-separated list:</p>
                        <p className="text-gray-700">Instead of writing:</p>
                        <CodeBlock language="java" code={`int x = 5;
int y = 6;
int z = 50;
System.out.println(x + y + z); // 61`} />
                        <p className="text-gray-700 mt-4">You can write:</p>
                        <CodeBlock language="java" code={`int x = 5, y = 6, z = 50;
System.out.println(x + y + z); // 61`} />
                        
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                            <p className="text-blue-700"><strong>Note:</strong> Declaring many variables in one line is shorter, but writing one variable per line can sometimes make the code easier to read.</p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8">One Value to Multiple Variables</h2>
                        <p className="text-gray-700">You can also assign the same value to multiple variables in one line:</p>
                        <CodeBlock language="java" code={`int x, y, z;
x = y = z = 50;
System.out.println(x + y + z); // 150`} />
                    </div>
                ) },
                { id: 'identifiers', title: 'Identifiers', content: (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900">Java Identifiers</h2>
                        <p className="text-gray-700">All Java variables must be identified with unique names. These unique names are called <strong>identifiers</strong>.</p>
                        <p className="text-gray-700">Identifiers can be short names (like <code>x</code> and <code>y</code>) or more descriptive names (<code>age</code>, <code>sum</code>, <code>totalVolume</code>).</p>
                        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-6">
                            <p className="text-yellow-700"><strong>Note:</strong> It is recommended to use descriptive names in order to create understandable and maintainable code.</p>
                        </div>
                        <CodeBlock language="java" code={`// Good
int minutesPerHour = 60;

// OK, but not so easy to understand what m actually is
int m = 60;`} />

                        <p className="text-gray-700 mt-6">The general rules for naming variables are:</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Names can contain letters, digits, underscores, and dollar signs</li>
                            <li>Names must begin with a letter</li>
                            <li>Names should start with a lowercase letter, and cannot contain whitespace</li>
                            <li>Names can also begin with <code>$</code> and <code>_</code></li>
                            <li>Names are <strong>case-sensitive</strong> ("myVar" and "myvar" are different variables)</li>
                            <li>Reserved words (like Java keywords, such as <code>int</code> or <code>boolean</code>) cannot be used as names</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8">Invalid Identifiers</h2>
                        <p className="text-gray-700">Here are some examples of invalid identifiers that would cause errors:</p>
                        <CodeBlock language="java" code={`// Invalid identifiers:
int 2ndNumber = 5;  // Cannot start with a digit
int my var = 10;    // Cannot contain spaces
int int = 20;       // Cannot use reserved keywords`} />
                    </div>
                ) },
                { id: 'constants', title: 'Constants (Final)', content: (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900">Java Constants (final)</h2>
                        <p className="text-gray-700">When you do not want a variable's value to change, use the <code>final</code> keyword.</p>
                        <p className="text-gray-700">A variable declared with <code>final</code> becomes a constant, which means unchangeable and read-only:</p>
                        <CodeBlock language="java" code={`final int myNum = 15;
myNum = 20;  // Error: cannot assign a value to final variable 'myNum'`} />

                        <h2 className="text-2xl font-bold text-gray-900 mt-8">When to Use final?</h2>
                        <p className="text-gray-700">You should declare variables as final when their values should never change.  For example, the number of minutes in an hour, or your birth year:</p>
                        <CodeBlock language="java" code={`final int MINUTES_PER_HOUR = 60;
final int BIRTHYEAR = 1980;`} />
                        
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                            <p className="text-blue-700"><strong>Note:</strong> By convention, final variables in Java are usually written in upper case (e.g. <code>BIRTHYEAR</code>). It is not required, but useful for code readability and common for many programmers.</p>
                        </div>
                    </div>
                ) }
            ]
        },
        {
            id: 'java-data-types',
            title: 'Java Data Types',
            subItems: [
                { id: 'data-types', title: 'Data Types', content: <div>Content for Data Types</div> },
                { id: 'numbers', title: 'Numbers', content: <div>Content for Numbers</div> },
                { id: 'booleans', title: 'Booleans', content: <div>Content for Booleans</div> },
                { id: 'characters', title: 'Characters', content: <div>Content for Characters</div> },
                { id: 'non-primitive', title: 'Non-primitive Types', content: <div>Content for Non-primitive Types</div> },
                { id: 'var-keyword', title: 'The var Keyword', content: <div>Content for The var Keyword</div> }
            ]
        },
        {
            id: 'java-type-casting',
            title: 'Java Type Casting',
            content: (
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900">Java Type Casting</h2>
                    <p className="text-gray-700">Type casting means converting one data type into another. For example, turning an int into a double.</p>
                    <p className="text-gray-700">In Java, there are two main types of casting:</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li><strong>Widening Casting (automatic)</strong> - converting a smaller type to a larger type size<br/><code>byte -&gt; short -&gt; char -&gt; int -&gt; long -&gt; float -&gt; double</code></li>
                        <li><strong>Narrowing Casting (manual)</strong> - converting a larger type to a smaller type size<br/><code>double -&gt; float -&gt; long -&gt; int -&gt; char -&gt; short -&gt; byte</code></li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8">Widening Casting</h2>
                    <p className="text-gray-700">Widening casting is done automatically when passing a smaller size type into a larger size type.</p>
                    <p className="text-gray-700">This works because there is no risk of losing information. For example, an int value can safely fit inside a double:</p>
                    <CodeBlock language="java" code={`int myInt = 9;
double myDouble = myInt; // Automatic casting: int to double

System.out.println(myInt);    // Outputs 9
System.out.println(myDouble); // Outputs 9.0`} />

                    <h2 className="text-2xl font-bold text-gray-900 mt-8">Narrowing Casting</h2>
                    <p className="text-gray-700">Narrowing casting must be done manually by placing the type in parentheses () in front of the value.</p>
                    <p className="text-gray-700">This is required because narrowing may result in data loss (for example, dropping decimals when converting a double to an int):</p>
                    <CodeBlock language="java" code={`double myDouble = 9.78d;
int myInt = (int) myDouble; // Manual casting: double to int

System.out.println(myDouble); // Outputs 9.78
System.out.println(myInt);    // Outputs 9`} />

                    <h2 className="text-2xl font-bold text-gray-900 mt-8">Real-Life Example</h2>
                    <p className="text-gray-700">Here is a real-life example of type casting. We calculate the percentage of a user's score in relation to the maximum score in a game.</p>
                    <p className="text-gray-700">We use type casting to make sure that the result is a floating-point value, rather than an integer:</p>
                    <CodeBlock language="java" code={`// Set the maximum possible score in the game to 500
int maxScore = 500;

// The actual score of the user
int userScore = 423;

/* Calculate the percentage of the user's score in relation to the maximum available score.
Convert userScore to double to make sure that the division is accurate */
double percentage = (double) userScore / maxScore * 100.0d;

System.out.println("User's percentage is " + percentage);`} />
                </div>
            )
        },
        {
            id: 'java-operators',
            title: 'Java Operators',
            subItems: [
                { id: 'operators', title: 'Operators', content: (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900">Java Operators</h2>
                        <p className="text-gray-700">Operators are used to perform operations on variables and values.</p>
                        <p className="text-gray-700">In the example below, we use the <code>+</code> operator to add together two values:</p>
                        <CodeBlock language="java" code={`int x = 100 + 50;`} />
                        <p className="text-gray-700 mt-6">Although the <code>+</code> operator is often used to add together two values, like in the example above, it can also be used to add together a variable and a value, or a variable and another variable:</p>
                        <CodeBlock language="java" code={`int sum1 = 100 + 50;        // 150 (100 + 50)
int sum2 = sum1 + 250;      // 400 (150 + 250)
int sum3 = sum2 + sum2;     // 800 (400 + 400)`} />

                        <p className="text-gray-700 mt-6">Java divides the operators into the following groups:</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Arithmetic operators</li>
                            <li>Assignment operators</li>
                            <li>Comparison operators</li>
                            <li>Logical operators</li>
                            <li>Bitwise operators</li>
                        </ul>
                    </div>
                ) },
                { id: 'arithmetic', title: 'Arithmetic', content: (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900">Arithmetic Operators</h2>
                        <p className="text-gray-700">Arithmetic operators are used to perform common mathematical operations.</p>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Operator</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Example</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200 text-sm text-gray-700">
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap font-mono text-center bg-gray-50">+</td>
                                        <td className="px-6 py-4 whitespace-nowrap">Addition</td>
                                        <td className="px-6 py-4">Adds together two values</td>
                                        <td className="px-6 py-4 font-mono bg-gray-50 text-center">x + y</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap font-mono text-center bg-gray-50">-</td>
                                        <td className="px-6 py-4 whitespace-nowrap">Subtraction</td>
                                        <td className="px-6 py-4">Subtracts one value from another</td>
                                        <td className="px-6 py-4 font-mono bg-gray-50 text-center">x - y</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap font-mono text-center bg-gray-50">*</td>
                                        <td className="px-6 py-4 whitespace-nowrap">Multiplication</td>
                                        <td className="px-6 py-4">Multiplies two values</td>
                                        <td className="px-6 py-4 font-mono bg-gray-50 text-center">x * y</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap font-mono text-center bg-gray-50">/</td>
                                        <td className="px-6 py-4 whitespace-nowrap">Division</td>
                                        <td className="px-6 py-4">Divides one value by another</td>
                                        <td className="px-6 py-4 font-mono bg-gray-50 text-center">x / y</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap font-mono text-center bg-gray-50">%</td>
                                        <td className="px-6 py-4 whitespace-nowrap">Modulus</td>
                                        <td className="px-6 py-4">Returns the division remainder</td>
                                        <td className="px-6 py-4 font-mono bg-gray-50 text-center">x % y</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap font-mono text-center bg-gray-50">++</td>
                                        <td className="px-6 py-4 whitespace-nowrap">Increment</td>
                                        <td className="px-6 py-4">Increases the value of a variable by 1</td>
                                        <td className="px-6 py-4 font-mono bg-gray-50 text-center">++x</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap font-mono text-center bg-gray-50">--</td>
                                        <td className="px-6 py-4 whitespace-nowrap">Decrement</td>
                                        <td className="px-6 py-4">Decreases the value of a variable by 1</td>
                                        <td className="px-6 py-4 font-mono bg-gray-50 text-center">--x</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <p className="text-gray-700 mt-6">Here is an example using different arithmetic operators in one example:</p>
                        <CodeBlock language="java" code={`int x = 10;
int y = 3;

System.out.println(x + y); // 13
System.out.println(x - y); // 7
System.out.println(x * y); // 30
System.out.println(x / y); // 3
System.out.println(x % y); // 1

int z = 5;
++z;
System.out.println(z); // 6
--z;
System.out.println(z); // 5`} />

                        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-6">
                            <p className="text-yellow-700"><strong>Note:</strong> When dividing two integers in Java, the result will also be an integer. For example, 10 / 3 gives 3. If you want a decimal result, use double values, like 10.0 / 3.</p>
                        </div>
                        <CodeBlock language="java" code={`int a = 10;
int b = 3;
System.out.println(a / b);   // Integer division, result is 3

double c = 10.0d;
double d = 3.0d;
System.out.println(c / d);   // Decimal division, result is 3.333...`} />
                    </div>
                ) },
                { id: 'assignment', title: 'Assignment', content: (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900">Assignment Operators</h2>
                        <p className="text-gray-700">Assignment operators are used to assign values to variables.</p>
                        <p className="text-gray-700">In the example below, we use the assignment operator <code>=</code> to assign the value 10 to a variable called x:</p>
                        <CodeBlock language="java" code={`int x = 10;`} />
                        <p className="text-gray-700 mt-6">The addition assignment operator <code>+=</code> adds a value to a variable:</p>
                        <CodeBlock language="java" code={`int x = 10;
x += 5;`} />
                        
                        <h3 className="text-xl font-bold text-gray-900 mt-8">A list of all assignment operators:</h3>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Operator</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Example</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Same As</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200 text-sm text-gray-700 font-mono">
                                    <tr><td className="px-6 py-4 bg-gray-50 text-center">=</td><td className="px-6 py-4">x = 5</td><td className="px-6 py-4">x = 5</td></tr>
                                    <tr><td className="px-6 py-4 bg-gray-50 text-center">+=</td><td className="px-6 py-4">x += 3</td><td className="px-6 py-4">x = x + 3</td></tr>
                                    <tr><td className="px-6 py-4 bg-gray-50 text-center">-=</td><td className="px-6 py-4">x -= 3</td><td className="px-6 py-4">x = x - 3</td></tr>
                                    <tr><td className="px-6 py-4 bg-gray-50 text-center">*=</td><td className="px-6 py-4">x *= 3</td><td className="px-6 py-4">x = x * 3</td></tr>
                                    <tr><td className="px-6 py-4 bg-gray-50 text-center">/=</td><td className="px-6 py-4">x /= 3</td><td className="px-6 py-4">x = x / 3</td></tr>
                                    <tr><td className="px-6 py-4 bg-gray-50 text-center">%=</td><td className="px-6 py-4">x %= 3</td><td className="px-6 py-4">x = x % 3</td></tr>
                                    <tr><td className="px-6 py-4 bg-gray-50 text-center">&amp;=</td><td className="px-6 py-4">x &amp;= 3</td><td className="px-6 py-4">x = x &amp; 3</td></tr>
                                    <tr><td className="px-6 py-4 bg-gray-50 text-center">|=</td><td className="px-6 py-4">x |= 3</td><td className="px-6 py-4">x = x | 3</td></tr>
                                    <tr><td className="px-6 py-4 bg-gray-50 text-center">^=</td><td className="px-6 py-4">x ^= 3</td><td className="px-6 py-4">x = x ^ 3</td></tr>
                                    <tr><td className="px-6 py-4 bg-gray-50 text-center">&gt;&gt;=</td><td className="px-6 py-4">x &gt;&gt;= 3</td><td className="px-6 py-4">x = x &gt;&gt; 3</td></tr>
                                    <tr><td className="px-6 py-4 bg-gray-50 text-center">&lt;&lt;=</td><td className="px-6 py-4">x &lt;&lt;= 3</td><td className="px-6 py-4">x = x &lt;&lt; 3</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                            <p className="text-blue-700"><strong>Note:</strong> Most assignment operators are just shorter ways of writing code. For example, <code>x += 5</code> is the same as <code>x = x + 5</code>, but shorter and often easier to read.</p>
                        </div>
                        
                        <h2 className="text-2xl font-bold text-gray-900 mt-8">Real-Life Example: Tracking Savings</h2>
                        <p className="text-gray-700">Assignment operators can also be used in real-life scenarios. For example, you can use the <code>+=</code> operator to keep track of savings when you add money to an account:</p>
                        <CodeBlock language="java" code={`int savings = 100; 
savings += 50; // add 50 to savings
System.out.println("Total savings: " + savings);`} />
                    </div>
                ) },
                { id: 'comparison', title: 'Comparison', content: (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900">Comparison Operators</h2>
                        <p className="text-gray-700">Comparison operators are used to compare two values (or variables). This is important in programming, because it helps us to find answers and make decisions.</p>
                        <p className="text-gray-700">The return value of a comparison is either <code>true</code> or <code>false</code>. These values are known as Boolean values, and you will learn more about them in the Booleans and If..Else chapter.</p>
                        <p className="text-gray-700">In the following example, we use the greater than operator (<code>&gt;</code>) to find out if 5 is greater than 3:</p>
                        <CodeBlock language="java" code={`int x = 5;
int y = 3;
System.out.println(x > y); // returns true, because 5 is higher than 3`} />
                        
                        <h3 className="text-xl font-bold text-gray-900 mt-8">A list of all comparison operators:</h3>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Operator</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Example</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200 text-sm text-gray-700">
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap font-mono text-center bg-gray-50">==</td>
                                        <td className="px-6 py-4 whitespace-nowrap">Equal to</td>
                                        <td className="px-6 py-4 font-mono">x == y</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap font-mono text-center bg-gray-50">!=</td>
                                        <td className="px-6 py-4 whitespace-nowrap">Not equal</td>
                                        <td className="px-6 py-4 font-mono">x != y</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap font-mono text-center bg-gray-50">&gt;</td>
                                        <td className="px-6 py-4 whitespace-nowrap">Greater than</td>
                                        <td className="px-6 py-4 font-mono">x &gt; y</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap font-mono text-center bg-gray-50">&lt;</td>
                                        <td className="px-6 py-4 whitespace-nowrap">Less than</td>
                                        <td className="px-6 py-4 font-mono">x &lt; y</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap font-mono text-center bg-gray-50">&gt;=</td>
                                        <td className="px-6 py-4 whitespace-nowrap">Greater than or equal to</td>
                                        <td className="px-6 py-4 font-mono">x &gt;= y</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap font-mono text-center bg-gray-50">&lt;=</td>
                                        <td className="px-6 py-4 whitespace-nowrap">Less than or equal to</td>
                                        <td className="px-6 py-4 font-mono">x &lt;= y</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8">Real-Life Examples</h2>
                        <p className="text-gray-700">Comparison operators are often used in real-world conditions, such as checking if a person is old enough to vote:</p>
                        <CodeBlock language="java" code={`int age = 18;

System.out.println(age >= 18); // true, old enough to vote
System.out.println(age < 18);  // false`} />

                        <p className="text-gray-700 mt-6">Another common use is checking if a password is long enough:</p>
                        <CodeBlock language="java" code={`int passwordLength = 5;

System.out.println(passwordLength >= 8); // false, too short
System.out.println(passwordLength < 8);  // true, needs more characters`} />
                    </div>
                ) },
                { id: 'logical', title: 'Logical', content: (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900">Logical Operators</h2>
                        <p className="text-gray-700">As with comparison operators, you can also test for true or false values with logical operators.</p>
                        <p className="text-gray-700">Logical operators are used to determine the logic between variables or values, by combining multiple conditions:</p>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Operator</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Example</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200 text-sm text-gray-700">
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap font-mono text-center bg-gray-50">&amp;&amp;</td>
                                        <td className="px-6 py-4 whitespace-nowrap">Logical and</td>
                                        <td className="px-6 py-4">Returns true if both statements are true</td>
                                        <td className="px-6 py-4 font-mono">x &lt; 5 &amp;&amp;  x &lt; 10</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap font-mono text-center bg-gray-50">||</td>
                                        <td className="px-6 py-4 whitespace-nowrap">Logical or</td>
                                        <td className="px-6 py-4">Returns true if one of the statements is true</td>
                                        <td className="px-6 py-4 font-mono">x &lt; 5 || x &lt; 4</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap font-mono text-center bg-gray-50">!</td>
                                        <td className="px-6 py-4 whitespace-nowrap">Logical not</td>
                                        <td className="px-6 py-4">Reverse the result, returns false if the result is true</td>
                                        <td className="px-6 py-4 font-mono">!(x &lt; 5 &amp;&amp; x &lt; 10)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <h2 className="text-2xl font-bold text-gray-900 mt-8">Real-Life Example: Login Check</h2>
                        <p className="text-gray-700">The example below shows how logical operators can be used in a real situation, e.g. when checking login status and access rights:</p>
                        <CodeBlock language="java" code={`boolean isLoggedIn = true;
boolean isAdmin = false;

System.out.println("Regular user: " + (isLoggedIn && !isAdmin));
System.out.println("Has access: " + (isLoggedIn || isAdmin));
System.out.println("Not logged in: " + (!isLoggedIn));`} />
                        <p className="text-gray-700 font-bold mt-4">Result:</p>
                        <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm text-gray-800">
                            Is regular user: true<br/>
                            Has access: true<br/>
                            Not logged in: false
                        </div>
                        <p className="text-gray-700 mt-4">Logical operators often become easier to understand once you start using them inside if statements, which you will learn about in the upcoming chapters.</p>
                    </div>
                ) },
                { id: 'precedence', title: 'Precedence', content: (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900">Java Operator Precedence</h2>
                        <p className="text-gray-700">When a calculation contains more than one operator, Java follows order of operations rules to decide which part to calculate first.</p>
                        <p className="text-gray-700">For example, multiplication happens before addition:</p>
                        <CodeBlock language="java" code={`int result1 = 2 + 3 * 4;     // 2 + 12 = 14
int result2 = (2 + 3) * 4;   // 5 * 4 = 20

System.out.println(result1);
System.out.println(result2);`} />
                        
                        <h3 className="text-xl font-bold text-gray-900 mt-8">Why Does This Happen?</h3>
                        <p className="text-gray-700">In <code>2 + 3 * 4</code>, the multiplication is done first, so the answer is 14.</p>
                        <p className="text-gray-700">If you want the addition to happen first, you must use parentheses: <code>(2 + 3) * 4</code>, which gives 20.</p>

                        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                            <p className="text-blue-700"><strong>Tip:</strong> Always use parentheses ( ) if you want to make sure the calculation is done in the order you expect. It also makes your code easier to read.</p>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mt-8">Order of Operations</h3>
                        <p className="text-gray-700">Here are some common operators, from highest to lowest priority:</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 font-mono">
                            <li>() - Parentheses</li>
                            <li>*, /, % - Multiplication, Division, Modulus</li>
                            <li>+, - - Addition, Subtraction</li>
                            <li>&gt;, &lt;, &gt;=, &lt;= - Comparison</li>
                            <li>==, != - Equality</li>
                            <li>&amp;&amp; - Logical AND</li>
                            <li>|| - Logical OR</li>
                            <li>= - Assignment</li>
                        </ul>

                        <h3 className="text-xl font-bold text-gray-900 mt-8">Another Example</h3>
                        <p className="text-gray-700">Subtraction and addition are done from left to right, unless you add parentheses:</p>
                        <CodeBlock language="java" code={`int result1 = 10 - 2 + 5;    // (10 - 2) + 5 = 13
int result2 = 10 - (2 + 5);  // 10 - 7 = 3

System.out.println(result1);
System.out.println(result2);`} />
                        <p className="text-gray-700 mt-4 font-medium text-blue-600">Remember: Parentheses always come first. Use them to control the order of your calculations.</p>
                    </div>
                ) }
            ]
        },
        {
            id: 'java-strings',
            title: 'Java Strings',
            subItems: [
                { id: 'strings', title: 'Strings', content: (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900">Java Strings</h2>
                        <p className="text-gray-700">Strings are used for storing text.</p>
                        <p className="text-gray-700">A <code>String</code> variable contains a collection of characters surrounded by double quotes (<code>""</code>):</p>
                        <p className="text-gray-700">Create a variable of type <code>String</code> and assign it a value:</p>
                        <CodeBlock language="java" code={`String greeting = "Hello";`} />

                        <h2 className="text-2xl font-bold text-gray-900 mt-8">String Length</h2>
                        <p className="text-gray-700">A String in Java is actually an object, which means it contains methods that can perform certain operations on strings.</p>
                        <p className="text-gray-700">For example, you can find the length of a string with the <code>length()</code> method:</p>
                        <CodeBlock language="java" code={`String txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
System.out.println("The length of the txt string is: " + txt.length());`} />

                        <h2 className="text-2xl font-bold text-gray-900 mt-8">More String Methods</h2>
                        <p className="text-gray-700">There are many string methods available in Java.</p>
                        <p className="text-gray-700">For example:</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>The <code>toUpperCase()</code> method converts a string to upper case letters.</li>
                            <li>The <code>toLowerCase()</code> method converts a string to lower case letters.</li>
                        </ul>
                        <CodeBlock language="java" code={`String txt = "Hello World";
System.out.println(txt.toUpperCase());   // Outputs "HELLO WORLD"
System.out.println(txt.toLowerCase());   // Outputs "hello world"`} />

                        <h2 className="text-2xl font-bold text-gray-900 mt-8">Finding a Character in a String</h2>
                        <p className="text-gray-700">The <code>indexOf()</code> method returns the index (the position) of the first occurrence of a specified text in a string (including whitespace):</p>
                        <CodeBlock language="java" code={`String txt = "Please locate where 'locate' occurs!";
System.out.println(txt.indexOf("locate")); // Outputs 7`} />
                        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-6">
                            <p className="text-yellow-700"><strong>Java counts positions from zero.</strong><br/>0 is the first position in a string, 1 is the second, 2 is the third ...</p>
                        </div>
                        <p className="text-gray-700 mt-6">You can use the <code>charAt()</code> method to access a character at a specific position in a string:</p>
                        <CodeBlock language="java" code={`String txt = "Hello";
System.out.println(txt.charAt(0));  // H
System.out.println(txt.charAt(4));  // o`} />

                        <h2 className="text-2xl font-bold text-gray-900 mt-8">Comparing Strings</h2>
                        <p className="text-gray-700">To compare two strings, you can use the <code>equals()</code> method:</p>
                        <CodeBlock language="java" code={`String txt1 = "Hello";
String txt2 = "Hello";

String txt3 = "Greetings";
String txt4 = "Great things";

System.out.println(txt1.equals(txt2));  // true
System.out.println(txt3.equals(txt4));  // false`} />

                        <h2 className="text-2xl font-bold text-gray-900 mt-8">Removing Whitespace</h2>
                        <p className="text-gray-700">The <code>trim()</code> method removes whitespace from the beginning and the end of a string:</p>
                        <CodeBlock language="java" code={`String txt = "   Hello World   ";
System.out.println("Before: [" + txt + "]");
System.out.println("After:  [" + txt.trim() + "]");`} />
                        <p className="text-gray-700 font-bold mt-4">Result:</p>
                        <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm text-gray-800">
                            Before: [   Hello World   ]<br/>
                            After: [Hello World]
                        </div>
                    </div>
                ) },
                { id: 'concatenation', title: 'Concatenation', content: (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900">String Concatenation</h2>
                        <p className="text-gray-700">The <code>+</code> operator can be used between strings to combine them. This is called concatenation:</p>
                        <CodeBlock language="java" code={`String firstName = "John";
String lastName = "Doe";
System.out.println(firstName + " " + lastName);`} />
                        <p className="text-gray-700 mt-4">Note that we have added an empty text (<code>" "</code>) to create a space between firstName and lastName on print.</p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8">Concatenation in Sentences</h2>
                        <p className="text-gray-700">You can use string concatenation to build sentences with both text and variables:</p>
                        <CodeBlock language="java" code={`String name = "John";
int age = 25;
System.out.println("My name is " + name + " and I am " + age + " years old.");`} />
                        <p className="text-gray-700 font-bold mt-4">Result:</p>
                        <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm text-gray-800">
                            My name is John and I am 25 years old.
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8">The concat() Method</h2>
                        <p className="text-gray-700">You can also use the <code>concat()</code> method to concatenate strings:</p>
                        <CodeBlock language="java" code={`String firstName = "John ";
String lastName = "Doe";
System.out.println(firstName.concat(lastName));`} />
                        <p className="text-gray-700 mt-6">You can also join more than two strings by chaining <code>concat()</code> calls:</p>
                        <CodeBlock language="java" code={`String a = "Java ";
String b = "is ";
String c = "fun!";
String result = a.concat(b).concat(c);
System.out.println(result);`} />

                        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                            <p className="text-blue-700"><strong>Note:</strong> While you can use <code>concat()</code> to join multiple strings, most developers prefer the <code>+</code> operator because it is shorter and easier to read.</p>
                        </div>
                    </div>
                ) },
                { id: 'numbers-strings', title: 'Numbers and Strings', content: (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900">Adding Numbers and Strings</h2>
                        <div className="bg-red-50 border-l-4 border-red-500 p-4">
                            <p className="text-red-700 font-bold">WARNING!</p>
                            <p className="text-red-700 mt-2">Java uses the <code>+</code> operator for both addition and concatenation.</p>
                            <p className="text-red-700 mt-2">Numbers are added. Strings are concatenated.</p>
                        </div>

                        <p className="text-gray-700 mt-6">If you add two numbers, the result will be a number:</p>
                        <CodeBlock language="java" code={`int x = 10;
int y = 20;
int z = x + y;  // z will be 30 (an integer/number)`} />

                        <p className="text-gray-700 mt-6">If you add two strings, the result will be a string concatenation:</p>
                        <CodeBlock language="java" code={`String x = "10";
String y = "20";
String z = x + y;  // z will be 1020 (a String)`} />

                        <p className="text-gray-700 mt-6">If you add a number and a string, the result will be a string concatenation:</p>
                        <CodeBlock language="java" code={`String x = "10";
int y = 20;
String z = x + y;  // z will be 1020 (a String)`} />
                    </div>
                ) },
                { id: 'special-characters', title: 'Special Characters', content: (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900">Strings - Special Characters</h2>
                        <p className="text-gray-700">Because strings must be written within quotes, Java will misunderstand this string, and generate an error:</p>
                        <CodeBlock language="java" code={`String txt = "We are the so-called \\"Vikings\\" from the north.";`} />
                        
                        <p className="text-gray-700 mt-6">The solution to avoid this problem, is to use the <strong>backslash escape character</strong>.</p>
                        <p className="text-gray-700">The backslash (<code>\\</code>) escape character turns special characters into string characters:</p>
                        <div className="overflow-x-auto mt-4">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Escape character</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Result</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200 text-sm text-gray-700 font-mono">
                                    <tr><td className="px-6 py-4 bg-gray-50 text-center">\\'</td><td className="px-6 py-4 text-center">'</td><td className="px-6 py-4 font-sans">Single quote</td></tr>
                                    <tr><td className="px-6 py-4 bg-gray-50 text-center">\\"</td><td className="px-6 py-4 text-center">"</td><td className="px-6 py-4 font-sans">Double quote</td></tr>
                                    <tr><td className="px-6 py-4 bg-gray-50 text-center">\\\\</td><td className="px-6 py-4 text-center">\\</td><td className="px-6 py-4 font-sans">Backslash</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <p className="text-gray-700 mt-6">The sequence <code>\\"</code> inserts a double quote in a string:</p>
                        <CodeBlock language="java" code={`String txt = "We are the so-called \\"Vikings\\" from the north.";`} />

                        <p className="text-gray-700 mt-6">The sequence <code>\\'</code> inserts a single quote in a string:</p>
                        <CodeBlock language="java" code={`String txt = "It's alright.";`} />

                        <p className="text-gray-700 mt-6">The sequence <code>\\\\</code> inserts a single backslash in a string:</p>
                        <CodeBlock language="java" code={`String txt = "The character \\\\ is called backslash.";`} />

                        <h3 className="text-xl font-bold text-gray-900 mt-8">Other common escape sequences that are valid in Java are:</h3>
                        <div className="overflow-x-auto mt-4">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Code</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Result</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200 text-sm text-gray-700 font-mono">
                                    <tr><td className="px-6 py-4 bg-gray-50 text-center">\\n</td><td className="px-6 py-4 font-sans">New Line</td></tr>
                                    <tr><td className="px-6 py-4 bg-gray-50 text-center">\\t</td><td className="px-6 py-4 font-sans">Tab</td></tr>
                                    <tr><td className="px-6 py-4 bg-gray-50 text-center">\\b</td><td className="px-6 py-4 font-sans">Backspace</td></tr>
                                    <tr><td className="px-6 py-4 bg-gray-50 text-center">\\r</td><td className="px-6 py-4 font-sans">Carriage Return</td></tr>
                                    <tr><td className="px-6 py-4 bg-gray-50 text-center">\\f</td><td className="px-6 py-4 font-sans">Form Feed</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                            <p className="text-blue-700"><strong>Note:</strong> Most of these escape codes are rarely used in modern programming. The most common ones are <code>\\n</code> (new line), <code>\\"</code> (double quote), and <code>\\\\</code> (backslash).</p>
                        </div>
                    </div>
                ) }
            ]
        },
        {
            id: 'java-math',
            title: 'Java Math',
            content: (
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900">Java Math</h2>
                    <p className="text-gray-700">Strings - Special Characters</p>
                    <p className="text-gray-700">Because strings must be written within quotes, Java will misunderstand this string, and generate an error:</p>
                    <CodeBlock language="java" code={`String txt = "We are the so-called \\"Vikings\\" from the north.";`} />
                    <p className="text-gray-700">The solution to avoid this problem, is to use the backslash escape character.</p>
                    <p className="text-gray-700">The backslash (<code>\\</code>) escape character turns special characters into string characters:</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 font-mono">
                        <li>\\' - Single quote</li>
                        <li>\\" - Double quote</li>
                        <li>\\\\ - Backslash</li>
                    </ul>
                    <p className="text-gray-700 mt-6">The sequence <code>\\"</code> inserts a double quote in a string:</p>
                    <CodeBlock language="java" code={`String txt = "We are the so-called \\"Vikings\\" from the north.";`} />
                    <p className="text-gray-700 mt-6">The sequence <code>\\'</code> inserts a single quote in a string:</p>
                    <CodeBlock language="java" code={`String txt = "It's alright.";`} />
                    <p className="text-gray-700 mt-6">The sequence <code>\\\\</code> inserts a single backslash in a string:</p>
                    <CodeBlock language="java" code={`String txt = "The character \\\\ is called backslash.";`} />
                    <p className="text-gray-700 mt-6">Other common escape sequences that are valid in Java are:</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 font-mono">
                        <li>\\n - New Line</li>
                        <li>\\t - Tab</li>
                        <li>\\b - Backspace</li>
                        <li>\\r - Carriage Return</li>
                        <li>\\f - Form Feed</li>
                    </ul>
                    <p className="text-gray-700">Note: Most of these escape codes are rarely used in modern programming. The most common ones are <code>\\n</code> (new line), <code>\\"</code> (double quote), and <code>\\\\</code> (backslash).</p>
                </div>
            )
        },
        {
            id: 'java-booleans',
            title: 'Java Booleans',
            content: (
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900">Java Booleans</h2>
                    <p className="text-gray-700">Very often in programming, you will need a data type that can only have one of two values, like:</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>YES / NO</li>
                        <li>ON / OFF</li>
                        <li>TRUE / FALSE</li>
                    </ul>
                    <p className="text-gray-700 mt-4">For this, Java has a <code>boolean</code> data type, which can store <code>true</code> or <code>false</code> values.</p>
                    <p className="text-gray-700">The name boolean comes from George Boole, a mathematician who first defined the logic system used in computers today.</p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8">Boolean Values</h2>
                    <p className="text-gray-700">A boolean type is declared with the <code>boolean</code> keyword and can only take the values <code>true</code> or <code>false</code>:</p>
                    <CodeBlock language="java" code={`boolean isJavaFun = true;
boolean isFishTasty = false;

System.out.println(isJavaFun);    // Outputs true
System.out.println(isFishTasty);  // Outputs false`} />
                    <p className="text-gray-700 mt-4">In practice, booleans are most often the result of expressions, and are used to test conditions in programs (see below).</p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8">Boolean Expressions</h2>
                    <p className="text-gray-700">A boolean expression returns a boolean value: <code>true</code> or <code>false</code>.</p>
                    <p className="text-gray-700">This is useful to build logic and make decisions in programs.</p>
                    <p className="text-gray-700">For example, you can use a comparison operator, such as the greater than (<code>&gt;</code>) operator, to find out if an expression (or a variable) is true or false:</p>
                    <CodeBlock language="java" code={`int x = 10;
int y = 9;

System.out.println(x > y); // Outputs true, because 10 is greater than 9`} />

                    <p className="text-gray-700 mt-6">Or even easier:</p>
                    <CodeBlock language="java" code={`System.out.println(10 > 9); // Outputs true, because 10 is greater than 9`} />

                    <p className="text-gray-700 mt-6">In the examples below, we use the equal to (<code>==</code>) operator to evaluate an expression:</p>
                    <CodeBlock language="java" code={`int x = 10;

System.out.println(x == 10); // Outputs true, because the value of x is equal to 10`} />

                    <CodeBlock language="java" code={`System.out.println(10 == 15); // Outputs false, because 10 is not equal to 15`} />

                    <h2 className="text-2xl font-bold text-gray-900 mt-8">Store the Result in a Boolean Variable</h2>
                    <p className="text-gray-700">You can also store the result of a comparison in a boolean variable:</p>
                    <CodeBlock language="java" code={`int x = 10;
int y = 9;

boolean isGreater = x > y;

System.out.println(isGreater); // Outputs true`} />

                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                        <p className="text-blue-700"><strong>Note:</strong> It is up to you whether you store the result of a comparison in a boolean variable or use the comparison directly.</p>
                        <p className="text-blue-700 mt-2">Storing the result can make your code easier to read, especially if you want to reuse it.</p>
                    </div>
                </div>
            )
        },
        {
            id: 'java-if-else',
            title: 'Java If....Else',
            subItems: [
                { id: 'if', title: 'if', content: (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900">Java Conditions and If Statements</h2>
                        <p className="text-gray-700">Conditions and if statements let you control the flow of your program - deciding which code runs, and which code is skipped.</p>
                        <p className="text-gray-700">Think of it like real life: If it rains, take an umbrella. Otherwise, do nothing.</p>
                        <p className="text-gray-700">Every <code>if</code> statement needs a condition that results in true or false.</p>
                        <p className="text-gray-700">This means if statements work hand-in-hand with boolean values:</p>
                        <CodeBlock language="java" code={`boolean isRaining = true;

if (isRaining) {
  System.out.println("Bring an umbrella!");
}`} />
                        <p className="text-gray-700 mt-6">Most often, conditions are created using comparison operators, like the ones below:</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 font-mono">
                            <li>Less than: a &lt; b</li>
                            <li>Less than or equal to: a &lt;= b</li>
                            <li>Greater than: a &gt; b</li>
                            <li>Greater than or equal to: a &gt;= b</li>
                            <li>Equal to: a == b</li>
                            <li>Not equal to: a != b</li>
                        </ul>
                        <p className="text-gray-700 mt-4">You can use these conditions to perform different actions for different decisions.</p>
                        
                        <p className="text-gray-700 mt-6">Java has the following conditional statements:</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Use <code>if</code> to specify a block of code to be executed, if a specified condition is true</li>
                            <li>Use <code>else</code> to specify a block of code to be executed, if the same condition is false</li>
                            <li>Use <code>else if</code> to specify a new condition to test, if the first condition is false</li>
                            <li>Use <code>switch</code> to specify many alternative blocks of code to be executed</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8">The if Statement</h2>
                        <p className="text-gray-700">The <code>if</code> statement specifies a block of code to be executed if a condition is true:</p>
                        <h3 className="text-xl font-bold text-gray-900 mt-4">Syntax</h3>
                        <CodeBlock language="java" code={`if (condition) {
  // block of code to be executed if the condition is true
}`} />
                        <p className="text-gray-700 mt-4">The condition inside the if statement must result in a boolean value - it can be either a boolean expression (like <code>x &gt; y</code>) or a boolean variable (like <code>isLightOn</code>).</p>
                        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-4">
                            <p className="text-yellow-700"><strong>Note:</strong> <code>if</code> is in lowercase letters. Uppercase letters (If or IF) will generate an error.</p>
                        </div>

                        <p className="text-gray-700 mt-6">In the example below, we test two values to find out if 20 is greater than 18. If the condition is true, print some text:</p>
                        <CodeBlock language="java" code={`if (20 > 18) {
  System.out.println("20 is greater than 18");
}`} />

                        <p className="text-gray-700 mt-6">You can also compare variables:</p>
                        <CodeBlock language="java" code={`int x = 20;
int y = 18;
if (x > y) {
  System.out.println("x is greater than y");
}`} />
                        <p className="text-gray-700 mt-4 font-bold">Example explained</p>
                        <p className="text-gray-700">In the example above we use two variables, x and y, to test whether x is greater than y (using the <code>&gt;</code> operator). As x is 20, and y is 18, and we know that 20 is greater than 18, we print to the screen that "x is greater than y".</p>

                        <p className="text-gray-700 mt-6">Comparison is also often used to check if two values are equal, using the <code>==</code> operator:</p>
                        <CodeBlock language="java" code={`int x = 20;
int y = 20;
if (x == y) {
  System.out.println("x is equal to y");
}`} />
                        <p className="text-gray-700 mt-4">Here the condition <code>x == y</code> is true, because both x and y are 20, so the message "x is equal to y" is printed.</p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8">Using Boolean Variables</h2>
                        <p className="text-gray-700">You can also test boolean variables directly in an if statement:</p>
                        <CodeBlock language="java" code={`boolean isLightOn = true;

if (isLightOn) {
  System.out.println("The light is on.");
}`} />
                        <p className="text-gray-700 mt-4"><strong>Note:</strong> Writing <code>if (isLightOn)</code> is the same as writing <code>if (isLightOn == true)</code>, but shorter and easier to read.</p>
                        
                        <p className="text-gray-700 mt-6">Here is the same example with the value false to see that the program continues even when the code block does not run:</p>
                        <CodeBlock language="java" code={`boolean isLightOn = false;

if (isLightOn) {
  System.out.println("The light is on.");  // This will not be printed
}

System.out.println("This line runs no matter what, because it is outside the if statement.");`} />

                        <h2 className="text-2xl font-bold text-gray-900 mt-8">If Without Braces</h2>
                        <p className="text-gray-700">If an if statement has only one line of code, you can write it without curly braces <code>{`{ }`}</code>:</p>
                        <CodeBlock language="java" code={`if (20 > 18)
  System.out.println("20 is greater than 18");`} />

                        <h3 className="text-xl font-bold text-gray-900 mt-6">Potential Problem</h3>
                        <p className="text-gray-700">Without braces, only the first line after the if belongs to it. Any other lines will run no matter what, which can lead to unexpected results:</p>
                        <CodeBlock language="java" code={`int x = 20;
int y = 18;

if (x > y)
  System.out.println("x is greater than y");  // Belongs to if
  System.out.println("This line runs no matter what (not part of the if statement)");

// Output:
// x is greater than y
// This line runs no matter what (not part of the if statement)`} />

                        <h3 className="text-xl font-bold text-gray-900 mt-6">The Safe Way</h3>
                        <p className="text-gray-700">To avoid mistakes, always use curly braces <code>{`{ }`}</code>. This makes it clear which lines belong to the if statement:</p>
                        <CodeBlock language="java" code={`int x = 20;
int y = 18;

if (x > y) {
  System.out.println("x is greater than y");
  System.out.println("Both lines are part of the if");
}

// Some code outside if
System.out.println("I am outside if, not part of if!");`} />

                        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                            <p className="text-blue-700"><strong>Tip:</strong> Always using braces <code>{`{ }`}</code> makes your code clearer, easier to read, and prevents subtle bugs.</p>
                        </div>
                    </div>
                ) },
                { id: 'else', title: 'else', content: (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900">Java Else</h2>
                        <h3 className="text-xl font-bold text-gray-900 mt-4">The else Statement</h3>
                        <p className="text-gray-700">The <code>else</code> statement lets you run a block of code when the condition in the if statement is false.</p>

                        <h3 className="text-xl font-bold text-gray-900 mt-6">Syntax</h3>
                        <CodeBlock language="java" code={`if (condition) {
  // block of code to be executed if the condition is true
} else {
  // block of code to be executed if the condition is false
}`} />
                        <p className="text-gray-700 mt-4">Think of it like real life: If it rains, bring an umbrella. Otherwise (else), go outside without one:</p>
                        <CodeBlock language="java" code={`boolean isRaining = false;

if (isRaining) {
  System.out.println("Bring an umbrella!");
} else {
  System.out.println("No rain today, no need for an umbrella!");
}`} />
                        <p className="text-gray-700 mt-4">Since isRaining is false, the condition inside the if statement is not met. That means the if block is skipped, and the else block runs instead, printing "No rain today, no need for an umbrella!".</p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8">Another Example</h2>
                        <p className="text-gray-700">This example says good day or good evening depending on the time:</p>
                        <CodeBlock language="java" code={`int time = 20;

if (time < 18) {
  System.out.println("Good day.");
} else {
  System.out.println("Good evening.");
}
// Outputs "Good evening."`} />
                        <p className="text-gray-700 mt-4 font-bold">Example explained</p>
                        <p className="text-gray-700">In the example above, time (20) is greater than 18, so the condition is false. Because of this, we move on to the else condition and print to the screen "Good evening". If the time was less than 18, the program would print "Good day".</p>

                        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                            <p className="text-blue-700 font-bold">Notes</p>
                            <ul className="list-disc list-inside space-y-1 mt-2 text-blue-700">
                                <li><code>else</code> does not have a condition - it runs when the <code>if</code> condition is false.</li>
                                <li>Do not put a semicolon right after <code>if (condition)</code>. That would end the statement early and make <code>else</code> behave unexpectedly.</li>
                            </ul>
                        </div>
                    </div>
                ) },
                { id: 'else-if', title: 'else if', content: (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900">Java Else If</h2>
                        <h3 className="text-xl font-bold text-gray-900 mt-4">The else if Statement</h3>
                        <p className="text-gray-700">Use the <code>else if</code> statement to specify a new condition to test if the first condition is false.</p>

                        <h3 className="text-xl font-bold text-gray-900 mt-6">Syntax</h3>
                        <CodeBlock language="java" code={`if (condition1) {
  // block of code to be executed if condition1 is true
} else if (condition2) {
  // block of code to be executed if condition1 is false and condition2 is true
} else {
  // block of code to be executed if both conditions are false
}`} />
                        <p className="text-gray-700 mt-4">Think of it like real life: If it rains, bring an umbrella. Else if it is sunny, wear sunglasses. Else, just go outside normally.</p>
                        
                        <CodeBlock language="java" code={`int weather = 2; // 1 = raining, 2 = sunny, 3 = cloudy

if (weather == 1) {
  System.out.println("Bring an umbrella.");
} else if (weather == 2) {
  System.out.println("Wear sunglasses.");
} else {
  System.out.println("Just go outside normally.");
}
// Outputs "Wear sunglasses."`} />
                        <p className="text-gray-700 mt-4">Since weather is 2, the first condition (<code>weather == 1</code>) is not met, so the if block is skipped. The program then checks the else if condition (<code>weather == 2</code>), which is true. That means the else if block runs and prints "Wear sunglasses.".</p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8">Another Example</h2>
                        <p className="text-gray-700">This example chooses between three different messages depending on the time of day:</p>
                        <CodeBlock language="java" code={`int time = 16;

if (time < 12) {
  System.out.println("Good morning.");
} else if (time < 18) {
  System.out.println("Good day.");
} else {
  System.out.println("Good evening.");
}
// Outputs "Good day."`} />
                        <p className="text-gray-700 mt-4 font-bold">Example explained</p>
                        <p className="text-gray-700">The value of time is 16. The first condition (time &lt; 12) is false, but the second condition (time &lt; 18) is true. Because of this, the else if block runs and prints "Good day.".</p>
                        <p className="text-gray-700 mt-4">If the value of time was 22, none of the conditions would be true, and the program would print "Good evening." instead:</p>
                        <CodeBlock language="java" code={`int time = 22;

if (time < 12) {
  System.out.println("Good morning.");
} else if (time < 18) {
  System.out.println("Good day.");
} else {
  System.out.println("Good evening.");
}
// Outputs "Good day."`} />
                    </div>
                ) },
                { id: 'short-hand', title: 'Short Hand If ... Else', content: (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900">Java Short Hand If...Else (Ternary Operator)</h2>
                        <h3 className="text-xl font-bold text-gray-900 mt-4">Short Hand if...else</h3>
                        <p className="text-gray-700">There is also a short-hand if else, which is known as the <strong>ternary operator</strong> because it consists of three operands.</p>
                        <p className="text-gray-700">It can be used to replace multiple lines of code with a single line, and is most often used to replace simple if else statements:</p>

                        <h3 className="text-xl font-bold text-gray-900 mt-6">Syntax</h3>
                        <CodeBlock language="java" code={`variable = (condition) ? expressionTrue :  expressionFalse;`} />
                        
                        <p className="text-gray-700 mt-6">Instead of writing:</p>
                        <CodeBlock language="java" code={`int time = 20;
if (time < 18) {
  System.out.println("Good day.");
} else {
  System.out.println("Good evening.");
}`} />

                        <p className="text-gray-700 mt-6">You can simply write:</p>
                        <CodeBlock language="java" code={`int time = 20;
String result = (time < 18) ? "Good day." : "Good evening.";
System.out.println(result);`} />

                        <p className="text-gray-700 mt-6">You can also use the ternary operator directly inside <code>System.out.println()</code> without a temporary variable:</p>
                        <CodeBlock language="java" code={`int time = 20;
System.out.println((time < 18) ? "Good day." : "Good evening.");`} />

                        <h2 className="text-2xl font-bold text-gray-900 mt-8">Nested Ternary (Optional)</h2>
                        <p className="text-gray-700">You can nest ternary operators to handle more than two possible outcomes, but this can make your code harder to read:</p>
                        <CodeBlock language="java" code={`int time = 22;
String message = (time < 12) ? "Good morning."
               : (time < 18) ? "Good afternoon."
               : "Good evening.";
System.out.println(message);`} />

                        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                            <p className="text-blue-700"><strong>Tip:</strong> Use the ternary operator for short, simple choices. For longer or more complex logic, the regular <code>if...else</code> is easier to read.</p>
                        </div>
                    </div>
                ) },
                { id: 'nested-if', title: 'Nested If', content: (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900">Java Nested If</h2>
                        <h3 className="text-xl font-bold text-gray-900 mt-4">Nested If</h3>
                        <p className="text-gray-700">You can also place an <code>if</code> statement inside another <code>if</code>. This is called a <strong>nested if statement</strong>.</p>
                        <p className="text-gray-700">A nested if lets you check for a condition only if another condition is already true.</p>

                        <h3 className="text-xl font-bold text-gray-900 mt-6">Syntax</h3>
                        <CodeBlock language="java" code={`if (condition1) {
  // code to run if condition1 is true
  if (condition2) {
    // code to run if both condition1 and condition2 are true
  }
}`} />
                        <p className="text-gray-700 mt-6">In this example, we first check if x is greater than 10. If it is, we then check if y is greater than 20:</p>
                        <CodeBlock language="java" code={`int x = 15;
int y = 25;

if (x > 10) {
  System.out.println("x is greater than 10");
  
  // Nested if 
  if (y > 20) {
    System.out.println("y is also greater than 20");
  }
}`} />
                        <p className="text-gray-700 mt-4 font-bold">Result:</p>
                        <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm text-gray-800">
                            x is greater than 10<br/>
                            y is also greater than 20
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8">Real-Life Example</h2>
                        <p className="text-gray-700">Nested if statements are useful when you need to test multiple conditions that depend on each other. For example, checking if a person is old enough to vote, and if they are a citizen:</p>
                        <CodeBlock language="java" code={`int age = 20;
boolean isCitizen = true;

if (age >= 18) {
  System.out.println("Old enough to vote.");
  
  if (isCitizen) {
    System.out.println("And you are a citizen, so you can vote!");
  } else {
    System.out.println("But you must be a citizen to vote.");
  }
} else {
  System.out.println("Not old enough to vote.");
}`} />
                        <p className="text-gray-700 mt-4 font-bold">Result:</p>
                        <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm text-gray-800">
                            Old enough to vote.<br/>
                            And you are a citizen, so you can vote!
                        </div>

                        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                            <p className="text-blue-700 font-bold">Notes</p>
                            <ul className="list-disc list-inside space-y-1 mt-2 text-blue-700">
                                <li>You can nest as many if statements as you want, but avoid making the code too deep - it can become hard to read.</li>
                                <li>Nested if is often used together with <code>else</code> and <code>else if</code> for more complex decision making.</li>
                            </ul>
                        </div>
                    </div>
                ) },
                { id: 'logical-operators', title: 'Logical Operators', content: (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900">Java Logical Operators in Conditions</h2>
                        <h3 className="text-xl font-bold text-gray-900 mt-4">Logical Operators in Conditions</h3>
                        <p className="text-gray-700">You can combine or reverse conditions using logical operators. These work together with <code>if</code>, <code>else</code>, and <code>else if</code> to build more complex decisions.</p>

                        <ul className="list-disc list-inside space-y-2 mt-4 text-gray-700">
                            <li><strong>&amp;&amp; (AND)</strong> - all conditions must be true</li>
                            <li><strong>|| (OR)</strong> - at least one condition must be true</li>
                            <li><strong>! (NOT)</strong> - reverses a condition (true = false, false = true)</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8">AND (&amp;&amp;)</h2>
                        <p className="text-gray-700">Use AND (<code>&amp;&amp;</code>) when both conditions must be true:</p>
                        <p className="text-gray-700"><strong>Example:</strong> Test if a is greater than b, and if c is greater than a:</p>
                        <CodeBlock language="java" code={`int a = 200;
int b = 33;
int c = 500;

if (a > b && c > a) {
  System.out.println("Both conditions are true");
}`} />

                        <h2 className="text-2xl font-bold text-gray-900 mt-8">OR (||)</h2>
                        <p className="text-gray-700">Use OR (<code>||</code>) when at least one of the conditions can be true:</p>
                        <p className="text-gray-700"><strong>Example:</strong> Test if a is greater than b, or if a is greater than c:</p>
                        <CodeBlock language="java" code={`int a = 200;
int b = 33;
int c = 500;

if (a > b || a > c) {
  System.out.println("At least one condition is true");
}`} />

                        <h2 className="text-2xl font-bold text-gray-900 mt-8">NOT (!)</h2>
                        <p className="text-gray-700">Use NOT (<code>!</code>) to reverse a condition:</p>
                        <p className="text-gray-700"><strong>Example:</strong> Test if a is not greater than b:</p>
                        <CodeBlock language="java" code={`int a = 33;
int b = 200;

if (!(a > b)) {
  System.out.println("a is NOT greater than b");
}`} />

                        <h2 className="text-2xl font-bold text-gray-900 mt-8">Real-Life Example</h2>
                        <p className="text-gray-700">In real programs, logical operators are often used for access control. For example, to get access to a system, there are specific requirements:</p>
                        <p className="text-gray-700">You must be logged in, and then you either need to be an admin, or have a high security clearance (level 1 or 2):</p>
                        <CodeBlock language="java" code={`boolean isLoggedIn = true;
boolean isAdmin = false;
int securityLevel = 3; // 1 = highest

if (isLoggedIn && (isAdmin || securityLevel <= 2)) {
  System.out.println("Access granted");
} else {
  System.out.println("Access denied");
}`} />
                        <div className="bg-gray-100 p-4 rounded-lg mt-4 font-mono text-sm text-gray-800">
                            // Try changing securityLevel to test different outcomes:<br/>
                            //<br/>
                            // securityLevel 1 = Access granted<br/>
                            // securityLevel 2 = Access granted<br/>
                            // securityLevel 3 = Access denied<br/>
                            // securityLevel 4 = Access denied<br/>
                            //<br/>
                            // If isAdmin = true, access is granted.
                        </div>
                    </div>
                ) }
            ]
        },
        {
            id: 'java-switch',
            title: 'Java Switch',
            content: (
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900">Java Switch Statements</h2>
                    <p className="text-gray-700">Instead of writing many <code>if..else</code> statements, you can use the <code>switch</code> statement.</p>
                    <p className="text-gray-700">Think of it like ordering food in a restaurant: If you choose number 1, you get Pizza. If you choose 2, you get a Burger. If you choose 3, you get Pasta. Otherwise, you get nothing.</p>

                    <p className="text-gray-700 mt-4">The <code>switch</code> statement selects one of many code blocks to be executed:</p>

                    <h3 className="text-xl font-bold text-gray-900 mt-6">Syntax</h3>
                    <CodeBlock language="java" code={`switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}`} />
                    <p className="text-gray-700 mt-4 font-bold">This is how it works:</p>
                    <ul className="list-disc list-inside space-y-2 mt-2 text-gray-700">
                        <li>The <code>switch</code> expression is evaluated once.</li>
                        <li>The result is compared with the values of each <code>case</code>.</li>
                        <li>If there is a match, the associated block of code is executed.</li>
                        <li>The <code>break</code> and <code>default</code> keywords are optional, and will be described later in this chapter.</li>
                    </ul>

                    <p className="text-gray-700 mt-6">The example below uses the weekday number to calculate the weekday name:</p>
                    <CodeBlock language="java" code={`int day = 4;
switch (day) {
  case 1:
    System.out.println("Monday");
    break;
  case 2:
    System.out.println("Tuesday");
    break;
  case 3:
    System.out.println("Wednesday");
    break;
  case 4:
    System.out.println("Thursday");
    break;
  case 5:
    System.out.println("Friday");
    break;
  case 6:
    System.out.println("Saturday");
    break;
  case 7:
    System.out.println("Sunday");
    break;
}
// Outputs "Thursday" (day 4)`} />

                    <h2 className="text-2xl font-bold text-gray-900 mt-8">The break Keyword</h2>
                    <p className="text-gray-700">When Java reaches a <code>break</code> keyword, it breaks out of the switch block.</p>
                    <p className="text-gray-700">This will stop the execution of more code and case testing inside the block.</p>
                    <p className="text-gray-700">When a match is found, and the job is done, it's time for a break. There is no need for more testing.</p>
                    
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                        <p className="text-blue-700">A break can save a lot of execution time because it "ignores" the execution of all the rest of the code in the switch block.</p>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8">The default Keyword</h2>
                    <p className="text-gray-700">The <code>default</code> keyword specifies some code to run if there is no case match:</p>
                    <CodeBlock language="java" code={`int day = 4;
switch (day) {
  case 6:
    System.out.println("Today is Saturday");
    break;
  case 7:
    System.out.println("Today is Sunday");
    break;
  default:
    System.out.println("Looking forward to the Weekend");
}
// Outputs "Looking forward to the Weekend"`} />

                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                        <p className="text-blue-700"><strong>Note:</strong> Note that if the <code>default</code> statement is used as the last statement in a switch block, it does not need a break.</p>
                    </div>
                </div>
            )
        },
        {
            id: 'java-while-loop',
            title: 'Java While Loop',
            subItems: [
                { id: 'while-loop', title: 'While loop', content: (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900">Java While Loop</h2>
                        <h3 className="text-xl font-bold text-gray-900 mt-4">Loops</h3>
                        <p className="text-gray-700">Loops can execute a block of code as long as a specified condition is true.</p>
                        <p className="text-gray-700">Loops are handy because they save time, reduce errors, and they make code more readable.</p>

                        <h3 className="text-xl font-bold text-gray-900 mt-6">Java While Loop</h3>
                        <p className="text-gray-700">The <code>while</code> loop repeats a block of code as long as the specified condition is true:</p>
                        
                        <h3 className="text-xl font-bold text-gray-900 mt-4">Syntax</h3>
                        <CodeBlock language="java" code={`while (condition) {
  // code block to be executed
}`} />
                        <p className="text-gray-700 mt-6">In the example below, the code in the loop will run again and again, as long as a variable (i) is less than 5:</p>
                        <CodeBlock language="java" code={`int i = 0;
while (i < 5) {
  System.out.println(i);
  i++;
}`} />

                        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-6">
                            <p className="text-yellow-700"><strong>Note:</strong> Do not forget to increase the variable used in the condition (<code>i++</code>), otherwise the loop will never end!</p>
                        </div>
                        <p className="text-gray-700 mt-4">Do you wonder why we used the letter i in the example above? It's a counter variable and a common choice in simple loops because it's short, traditional, and stands for 'index' or 'iterator'.</p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8">Countdown Example</h2>
                        <p className="text-gray-700">You can also use a while loop to count down. This example counts from 3 to 1, and then prints "Happy New Year!!" at the end:</p>
                        <CodeBlock language="java" code={`int countdown = 3;

while (countdown > 0) {
  System.out.println(countdown);
  countdown--;
}

System.out.println("Happy New Year!!");`} />

                        <h2 className="text-2xl font-bold text-gray-900 mt-8">While Loop With False Condition</h2>
                        <p className="text-gray-700">In the previous examples, the condition was true at the start, so the loop ran one or more times. But if the condition is false at the beginning, the code inside the loop will never run:</p>
                        <CodeBlock language="java" code={`int i = 10;

while (i < 5) {
  System.out.println("This will never be printed");
  i++;
}`} />
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                            <p className="text-blue-700"><strong>Note:</strong> A while loop may never run if the condition is false from the start. In the next chapter, you will learn about the <code>do while</code> loop, which always runs the code at least once before checking the condition.</p>
                        </div>
                    </div>
                ) },
                { id: 'do-while-loop', title: 'Do/While loop', content: (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900">Java Do/While Loop</h2>
                        <h3 className="text-xl font-bold text-gray-900 mt-4">The Do/While Loop</h3>
                        <p className="text-gray-700">The <code>do/while</code> loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true. Then it will repeat the loop as long as the condition is true.</p>

                        <h3 className="text-xl font-bold text-gray-900 mt-6">Syntax</h3>
                        <CodeBlock language="java" code={`do {
  // code block to be executed
}
while (condition);`} />
                        <p className="text-gray-700 mt-4"><strong>Note:</strong> The semicolon <code>;</code> after the while condition is required!</p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8">Do/While Example</h2>
                        <p className="text-gray-700">The example below uses a do/while loop. The loop will always be executed at least once, even if the condition is false, because the code block is executed before the condition is tested:</p>
                        <CodeBlock language="java" code={`int i = 0;
do {
  System.out.println(i);
  i++;
}
while (i < 5);`} />
                        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-6">
                            <p className="text-yellow-700">Do not forget to increase the variable used in the condition (<code>i++</code>), otherwise the loop will never end!</p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8">Condition is False from the Start</h2>
                        <p className="text-gray-700">In the while loop chapter, we saw that if the condition is false at the beginning, the loop never runs at all.</p>
                        <p className="text-gray-700">The do/while loop is different: it will always run the code block at least once, even if the condition is false from the start.</p>
                        <p className="text-gray-700 mt-4">In the example below, the variable <code>i</code> starts at 10, so <code>i &lt; 5</code> is false immediately. Still, the loop runs once before checking the condition:</p>
                        <CodeBlock language="java" code={`int i = 10;

do {
  System.out.println("i is " + i);
  i++;
} while (i < 5);`} />
                        
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                            <p className="text-blue-700"><strong>Summary:</strong> A do/while loop always runs at least once, even if the condition is false at the start. This is the key difference from a while loop, which would skip the code block completely in the same situation.</p>
                            <p className="text-blue-700 mt-2">This behavior makes do/while useful when you want something to happen at least once, such as showing a message or asking the user for input.</p>
                        </div>
                    </div>
                ) }
            ]
        },
        {
            id: 'java-for-loop',
            title: 'Java For Loop',
            subItems: [
                { id: 'for-loop', title: 'For Loop', content: (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900">Java For Loop</h2>
                        <h3 className="text-xl font-bold text-gray-900 mt-4">Java For Loop</h3>
                        <p className="text-gray-700">When you know exactly how many times you want to loop through a block of code, use the <code>for</code> loop instead of a <code>while</code> loop:</p>

                        <h3 className="text-xl font-bold text-gray-900 mt-6">Syntax</h3>
                        <CodeBlock language="java" code={`for (statement 1; statement 2; statement 3) {
  // code block to be executed
}`} />
                        <p className="text-gray-700 mt-4"><strong>Statement 1</strong> is executed (one time) before the execution of the code block.</p>
                        <p className="text-gray-700"><strong>Statement 2</strong> defines the condition for executing the code block.</p>
                        <p className="text-gray-700"><strong>Statement 3</strong> is executed (every time) after the code block has been executed.</p>

                        <p className="text-gray-700 mt-6">The example below will print the numbers 0 to 4:</p>
                        <CodeBlock language="java" code={`for (int i = 0; i < 5; i++) {
  System.out.println(i);
}`} />
                        <h4 className="font-bold text-gray-900 mt-4">Example explained</h4>
                        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                            <li>Statement 1 sets a variable before the loop starts (<code>int i = 0</code>).</li>
                            <li>Statement 2 defines the condition for the loop to run (<code>i</code> must be less than 5). If the condition is true, the loop will start over again, if it is false, the loop will end.</li>
                            <li>Statement 3 increases a value (<code>i++</code>) each time the code block in the loop has been executed.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8">Another Example</h2>
                        <p className="text-gray-700">This example will only print even values between 0 and 10:</p>
                        <CodeBlock language="java" code={`for (int i = 0; i <= 10; i = i + 2) {
  System.out.println(i);
}`} />
                    </div>
                ) },
                { id: 'nested-loops', title: 'Nested Loops', content: (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900">Java Nested Loops</h2>
                        <p className="text-gray-700">It is also possible to place a loop inside another loop. This is called a <strong>nested loop</strong>.</p>
                        <p className="text-gray-700">The "inner loop" will be executed one time for each iteration of the "outer loop":</p>

                        <h3 className="text-xl font-bold text-gray-900 mt-6">Example</h3>
                        <CodeBlock language="java" code={`// Outer loop
for (int i = 1; i <= 2; i++) {
  System.out.println("Outer: " + i); // Executes 2 times
  
  // Inner loop
  for (int j = 1; j <= 3; j++) {
    System.out.println(" Inner: " + j); // Executes 6 times (2 * 3)
  }
} `} />
                        <h4 className="font-bold text-gray-900 mt-4">Result:</h4>
                        <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm text-gray-800">
                            Outer: 1<br/>
                             Inner: 1<br/>
                             Inner: 2<br/>
                             Inner: 3<br/>
                            Outer: 2<br/>
                             Inner: 1<br/>
                             Inner: 2<br/>
                             Inner: 3
                        </div>
                    </div>
                ) },
                { id: 'for-each-loop', title: 'For-Each Loop', content: (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900">Java For-Each Loop</h2>
                        <p className="text-gray-700">There is also a "for-each" loop, which is used exclusively to loop through elements in an array (or other data sets like Lists):</p>

                        <h3 className="text-xl font-bold text-gray-900 mt-6">Syntax</h3>
                        <CodeBlock language="java" code={`for (type variableName : arrayName) {
  // code block to be executed
}`} />
                        <p className="text-gray-700 mt-6">The following example outputs all elements in the <strong>cars</strong> array, using a "for-each" loop:</p>

                        <h3 className="text-xl font-bold text-gray-900 mt-6">Example</h3>
                        <CodeBlock language="java" code={`String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
for (String i : cars) {
  System.out.println(i);
}`} />
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                            <p className="text-blue-700"><strong>Note:</strong> Don't worry if you don't understand the example above. You will learn more about arrays in the next chapter.</p>
                            <p className="text-blue-700 mt-2">However, if you want to loop through a data set like an Array, the <code>for-each</code> loop provides a more readable and cleaner code structure compared to the standard <code>for</code> loop.</p>
                        </div>
                    </div>
                ) }
            ]
        },
        {
            id: 'java-break-continue',
            title: 'Java Break/Continue',
            content: (
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900">Java Break and Continue</h2>
                    
                    <h3 className="text-xl font-bold text-gray-900 mt-6">Java Break</h3>
                    <p className="text-gray-700">You have already seen the <code>break</code> statement used in an earlier chapter of this tutorial. It was used to "jump out" of a <code>switch</code> statement.</p>
                    <p className="text-gray-700">The <code>break</code> statement can also be used to jump out of a <strong>loop</strong>.</p>
                    
                    <p className="text-gray-700 mt-4">This example stops the loop when <code>i</code> is equal to 4:</p>
                    <CodeBlock language="java" code={`for (int i = 0; i < 10; i++) {
  if (i == 4) {
    break;
  }
  System.out.println(i);
}`} />
                    <p className="text-gray-700 mt-2">The output will be 0, 1, 2, and 3 because the loop ends immediately when i reaches 4.</p>

                    <h3 className="text-xl font-bold text-gray-900 mt-8">Java Continue</h3>
                    <p className="text-gray-700">The <code>continue</code> statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.</p>
                    
                    <p className="text-gray-700 mt-4">This example skips the value of 4:</p>
                    <CodeBlock language="java" code={`for (int i = 0; i < 10; i++) {
  if (i == 4) {
    continue;
  }
  System.out.println(i);
}`} />
                    <p className="text-gray-700 mt-2">The output will be 0, 1, 2, 3, 5, 6, 7, 8, 9 (the number 4 is skipped).</p>

                    <h3 className="text-xl font-bold text-gray-900 mt-8">Break and Continue in While Loop</h3>
                    <p className="text-gray-700">You can also use <code>break</code> and <code>continue</code> in <code>while</code> loops:</p>
                    
                    <h4 className="font-bold text-gray-900 mt-4">Break Example</h4>
                    <CodeBlock language="java" code={`int i = 0;
while (i < 10) {
  System.out.println(i);
  i++;
  if (i == 4) {
    break;
  }
}`} />

                    <h4 className="font-bold text-gray-900 mt-4">Continue Example</h4>
                    <CodeBlock language="java" code={`int i = 0;
while (i < 10) {
  if (i == 4) {
    i++;
    continue;
  }
  System.out.println(i);
  i++;
}`} />
                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-4">
                        <p className="text-yellow-700"><strong>Note:</strong> In a while loop with <code>continue</code>, it's very important to increment the counter variable (like <code>i++</code>) <em>before</em> the continue statement, otherwise the loop might run forever!</p>
                    </div>
                </div>
            )
        },
        {
            id: 'java-arrays',
            title: 'Java Arrays',
            subItems: [
                { id: 'arrays', title: 'Arrays', content: (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900">Java Arrays</h2>
                        <p className="text-gray-700">Arrays are used to store multiple values in a single variable, instead of declaring separate variables for each value.</p>
                        <p className="text-gray-700">To declare an array, define the variable type with square brackets:</p>
                        <CodeBlock language="java" code={`String[] cars;`} />
                        <p className="text-gray-700 mt-4">We have now declared a variable that holds an array of strings. To insert values to it, we can use an array literal - place the values in a comma-separated list, inside curly braces:</p>
                        <CodeBlock language="java" code={`String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};`} />
                        <p className="text-gray-700 mt-4">To create an array of integers, you could write:</p>
                        <CodeBlock language="java" code={`int[] myNum = {10, 20, 30, 40};`} />

                        <h2 className="text-2xl font-bold text-gray-900 mt-8">Access the Elements of an Array</h2>
                        <p className="text-gray-700">You can access an array element by referring to the index number.</p>
                        <p className="text-gray-700">This statement accesses the value of the first element in cars:</p>
                        <CodeBlock language="java" code={`String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
System.out.println(cars[0]);
// Outputs Volvo`} />
                        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-6">
                            <p className="text-yellow-700"><strong>Note:</strong> Array indexes start with 0: <code>[0]</code> is the first element. <code>[1]</code> is the second element, etc.</p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8">Change an Array Element</h2>
                        <p className="text-gray-700">To change the value of a specific element, refer to the index number:</p>
                        <CodeBlock language="java" code={`String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
cars[0] = "Opel";
System.out.println(cars[0]);
// Now outputs Opel instead of Volvo`} />

                        <h2 className="text-2xl font-bold text-gray-900 mt-8">Array Length</h2>
                        <p className="text-gray-700">To find out how many elements an array has, use the <code>length</code> property:</p>
                        <CodeBlock language="java" code={`String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
System.out.println(cars.length);
// Outputs 4`} />
                    </div>
                ) },
                { id: 'loop-array', title: 'Loop Through an Array', content: (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900">Loop Through an Array</h2>
                        <p className="text-gray-700">You can loop through the array elements with the <code>for</code> loop, and use the <code>length</code> property to specify how many times the loop should run.</p>
                        <p className="text-gray-700">The following example outputs all elements in the cars array:</p>
                        <CodeBlock language="java" code={`String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
for (int i = 0; i < cars.length; i++) {
  System.out.println(cars[i]);
}`} />

                        <h2 className="text-2xl font-bold text-gray-900 mt-8">Loop Through an Array with For-Each</h2>
                        <p className="text-gray-700">There is also a "for-each" loop, which is used exclusively to loop through elements in arrays:</p>
                        
                        <h3 className="text-xl font-bold text-gray-900 mt-4">Syntax</h3>
                        <CodeBlock language="java" code={`for (type variable : arrayname) {
  // code block to be executed
}`} />
                        <p className="text-gray-700 mt-4">The following example outputs all elements in the cars array, using a "for-each" loop:</p>
                        <CodeBlock language="java" code={`String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
for (String i : cars) {
  System.out.println(i);
}`} />
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                            <p className="text-blue-700">Comparing the <code>for</code> loop and <code>for-each</code> loop, you will see that the <code>for-each</code> method is easier to write, it does not require a counter (using the length property), and it is more readable.</p>
                        </div>
                    </div>
                ) },
                { id: 'multidimensional-arrays', title: 'Multidimensional Arrays', content: (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900">Java Multidimensional Arrays</h2>
                        <p className="text-gray-700">A multidimensional array is an array of arrays.</p>
                        <p className="text-gray-700">Multidimensional arrays are useful when you want to store data as a tabular form, like a table with rows and columns.</p>
                        <p className="text-gray-700">To create a two-dimensional array, add each array within its own set of curly braces:</p>
                        <CodeBlock language="java" code={`int[][] myNumbers = { {1, 2, 3, 4}, {5, 6, 7} };`} />
                        <p className="text-gray-700 mt-4"><code>myNumbers</code> is now an array with two arrays as its elements.</p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8">Access Elements</h2>
                        <p className="text-gray-700">To access the elements of the <code>myNumbers</code> array, specify two indexes: one for the array, and one for the element inside that array. This example accesses the third element (2) in the second array (1) of myNumbers:</p>
                        <CodeBlock language="java" code={`int[][] myNumbers = { {1, 2, 3, 4}, {5, 6, 7} };
System.out.println(myNumbers[1][2]); // Outputs 7`} />
                        
                        <h2 className="text-2xl font-bold text-gray-900 mt-8">Change Element Values</h2>
                        <p className="text-gray-700">You can also change the value of an element:</p>
                        <CodeBlock language="java" code={`int[][] myNumbers = { {1, 2, 3, 4}, {5, 6, 7} };
myNumbers[1][2] = 9;
System.out.println(myNumbers[1][2]); // Outputs 9 instead of 7`} />
                        
                        <h2 className="text-2xl font-bold text-gray-900 mt-8">Loop Through a Multi-Dimensional Array</h2>
                        <p className="text-gray-700">We can also use a <code>for</code> loop inside another <code>for</code> loop to get the elements of a two-dimensional array (we still have to point to the two indexes):</p>
                        <CodeBlock language="java" code={`int[][] myNumbers = { {1, 2, 3, 4}, {5, 6, 7} };
for (int i = 0; i < myNumbers.length; ++i) {
  for(int j = 0; j < myNumbers[i].length; ++j) {
    System.out.println(myNumbers[i][j]);
  }
}`} />
                    </div>
                ) }
            ]
        }
    ]
};
