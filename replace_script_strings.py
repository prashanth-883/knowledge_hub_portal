import re

file_path = 'client/data/courseData.tsx'
with open(file_path, 'r', encoding='utf-8') as f:
    text = f.read()

replacement = """            {
                id: 'strings',
                title: 'Strings',
                subItems: [
                    { 
                        id: 'c-strings', 
                        title: 'C Strings', 
                        content: (
                            <div className="space-y-8 text-gray-800 leading-relaxed tracking-wide text-lg">
                                <h2 className="text-3xl font-extrabold text-blue-900 mb-6 border-b-2 border-blue-100 pb-3">Strings</h2>
                                <p>Strings are used for storing text/characters.</p>
                                <p>For example, "Hello World" is a string of characters.</p>
                                <p>Unlike many other programming languages, C does not have a String type to easily create string variables. Instead, you must use the <code>char</code> type and create an array of characters to make a string in C:</p>

                                <CodeBlock code={`char greetings[] = "Hello World!";`} />

                                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-r-lg my-6">
                                    <h4 className="text-base font-bold text-yellow-800 uppercase tracking-wider mb-2">Note</h4>
                                    <p className="text-yellow-800 text-base">Note that you have to use double quotes (<code>""</code>).</p>
                                </div>

                                <p>To output the string, you can use the <code>printf()</code> function together with the format specifier <code>%s</code> to tell C that we are now working with strings:</p>

                                <h4 className="text-xl font-medium text-gray-800 mt-8">Example</h4>
                                <CodeBlock code={`char greetings[] = "Hello World!";
printf("%s", greetings);`} />

                                <h3 className="text-2xl font-semibold text-gray-800 mt-12 mb-4 border-b border-gray-100 pb-2">Access Strings</h3>
                                <p>Since strings are actually arrays in C, you can access a string by referring to its index number inside square brackets <code>[]</code>.</p>
                                <p>This example prints the first character (0) in <strong>greetings</strong>:</p>

                                <h4 className="text-xl font-medium text-gray-800 mt-8">Example</h4>
                                <CodeBlock code={`char greetings[] = "Hello World!";
printf("%c", greetings[0]);`} />

                                <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg my-6">
                                    <h4 className="text-base font-bold text-blue-800 uppercase tracking-wider mb-2">Remember</h4>
                                    <p className="text-blue-800 text-base">Note that we have to use the <code>%c</code> format specifier to print a single character.</p>
                                </div>

                                <h3 className="text-2xl font-semibold text-gray-800 mt-12 mb-4 border-b border-gray-100 pb-2">Modify Strings</h3>
                                <p>To change the value of a specific character in a string, refer to the index number, and use single quotes:</p>

                                <h4 className="text-xl font-medium text-gray-800 mt-8">Example</h4>
                                <CodeBlock code={`char greetings[] = "Hello World!";
greetings[0] = 'J';
printf("%s", greetings);
// Outputs Jello World! instead of Hello World!`} />

                                <h3 className="text-2xl font-semibold text-gray-800 mt-12 mb-4 border-b border-gray-100 pb-2">Loop Through a String</h3>
                                <p>You can also loop through the characters of a string, using a <code>for</code> loop:</p>

                                <h4 className="text-xl font-medium text-gray-800 mt-8">Example</h4>
                                <CodeBlock code={`char carName[] = "Volvo";
int i;

for (i = 0; i < 5; ++i) {
  printf("%c\\n", carName[i]);
}`} />

                                <p className="mt-8">And like we specified in the arrays loop chapter, you should use the <code>sizeof</code> formula (instead of manually write the size of the array in the loop condition <code>i &lt; 5</code>) to make the loop more sustainable:</p>

                                <h4 className="text-xl font-medium text-gray-800 mt-8">Example</h4>
                                <CodeBlock code={`char carName[] = "Volvo";
int length = sizeof(carName) / sizeof(carName[0]);
int i;

for (i = 0; i < length; ++i) {
  printf("%c\\n", carName[i]);
}`} />

                                <h3 className="text-2xl font-semibold text-gray-800 mt-12 mb-4 border-b border-gray-100 pb-2">Another Way Of Creating Strings</h3>
                                <p>In the examples above, we used a "string literal" to create a string variable. This is the easiest way to create a string in C.</p>
                                <p>You should also note that you can create a string with a set of characters. This example will produce the same result as the example in the beginning of this page:</p>

                                <h4 className="text-xl font-medium text-gray-800 mt-8">Example</h4>
                                <CodeBlock code={`char greetings[] = {'H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd', '!', '\\0'};
printf("%s", greetings);`} />

                                <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-lg my-6">
                                    <h4 className="text-base font-bold text-red-800 uppercase tracking-wider mb-2">Warning</h4>
                                    <p className="text-red-800 text-base">Why do we include the <code>\0</code> character at the end? This is known as the <strong>"null terminating character"</strong>, and must be included when creating strings using this method. It tells C that this is the end of the string.</p>
                                </div>

                                <h3 className="text-2xl font-semibold text-gray-800 mt-12 mb-4 border-b border-gray-100 pb-2">Differences</h3>
                                <p>The difference between the two ways of creating strings, is that the first method is easier to write, and you do not have to include the <code>\0</code> character, as C will do it for you.</p>
                                <p>You should note that the size of both arrays is the same: They both have 13 characters (space also counts as a character by the way), including the <code>\0</code> character:</p>

                                <h4 className="text-xl font-medium text-gray-800 mt-8">Example</h4>
                                <CodeBlock code={`char greetings[] = {'H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd', '!', '\\0'};
char greetings2[] = "Hello World!";

printf("%zu\\n", sizeof(greetings));   // Outputs 13
printf("%zu\\n", sizeof(greetings2));  // Outputs 13`} />

                                <h3 className="text-2xl font-semibold text-gray-800 mt-12 mb-4 border-b border-gray-100 pb-2">Real-Life Example</h3>
                                <p>Use strings to create a simple welcome message:</p>

                                <h4 className="text-xl font-medium text-gray-800 mt-8">Example</h4>
                                <CodeBlock code={`char message[] = "Good to see you,";
char fname[] = "John";

printf("%s %s!", message, fname);`} />
                            </div>
                        ) 
                    },
                    { 
                        id: 'c-string-functions', 
                        title: 'C String Functions', 
                        content: (
                            <div className="space-y-8 text-gray-800 leading-relaxed tracking-wide text-lg">
                                <h2 className="text-3xl font-extrabold text-blue-900 mb-6 border-b-2 border-blue-100 pb-3">String Functions</h2>
                                <p>C also has many useful string functions, which can be used to perform certain operations on strings.</p>
                                <p>To use them, you must include the <code>&lt;string.h&gt;</code> header file in your program:</p>

                                <CodeBlock code={`#include <string.h>`} />

                                <h3 className="text-2xl font-semibold text-gray-800 mt-12 mb-4 border-b border-gray-100 pb-2">String Length</h3>
                                <p>For example, to get the length of a string, you can use the <code>strlen()</code> function:</p>

                                <h4 className="text-xl font-medium text-gray-800 mt-8">Example</h4>
                                <CodeBlock code={`char alphabet[] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
printf("%zu", strlen(alphabet));`} />

                                <p className="mt-8">In the Strings chapter, we used <code>sizeof</code> to get the size of a string/array. Note that <code>sizeof</code> and <code>strlen</code> behaves differently, as <code>sizeof</code> also includes the <code>\0</code> character when counting:</p>

                                <h4 className="text-xl font-medium text-gray-800 mt-8">Example</h4>
                                <CodeBlock code={`char alphabet[] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
printf("%zu\\n", strlen(alphabet));   // 26
printf("%zu\\n", sizeof(alphabet));   // 27`} />

                                <p className="mt-8">It is also important that you know that <code>sizeof</code> will always return the memory size (in bytes), and not the actual string length:</p>

                                <h4 className="text-xl font-medium text-gray-800 mt-8">Example</h4>
                                <CodeBlock code={`char alphabet[50] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
printf("%zu\\n", strlen(alphabet));   // 26
printf("%zu\\n", sizeof(alphabet));   // 50`} />

                                <h3 className="text-2xl font-semibold text-gray-800 mt-12 mb-4 border-b border-gray-100 pb-2">Concatenate Strings</h3>
                                <p>To concatenate (combine) two strings, you can use the <code>strcat()</code> function:</p>

                                <h4 className="text-xl font-medium text-gray-800 mt-8">Example</h4>
                                <CodeBlock code={`char str1[20] = "Hello ";
char str2[] = "World!";

// Concatenate str2 to str1 (result is stored in str1)
strcat(str1, str2);

// Print str1
printf("%s", str1);`} />

                                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-r-lg my-6">
                                    <h4 className="text-base font-bold text-yellow-800 uppercase tracking-wider mb-2">Note</h4>
                                    <p className="text-yellow-800 text-base">Note that the size of <code>str1</code> should be large enough to store the result of the two strings combined (20 in our example).</p>
                                </div>

                                <h3 className="text-2xl font-semibold text-gray-800 mt-12 mb-4 border-b border-gray-100 pb-2">Copy Strings</h3>
                                <p>To copy the value of one string to another, you can use the <code>strcpy()</code> function:</p>

                                <h4 className="text-xl font-medium text-gray-800 mt-8">Example</h4>
                                <CodeBlock code={`char str1[20] = "Hello World!";
char str2[20];

// Copy str1 to str2
strcpy(str2, str1);

// Print str2
printf("%s", str2);`} />

                                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-r-lg my-6">
                                    <h4 className="text-base font-bold text-yellow-800 uppercase tracking-wider mb-2">Note</h4>
                                    <p className="text-yellow-800 text-base">Note that the size of <code>str2</code> should be large enough to store the copied string (20 in our example).</p>
                                </div>

                                <h3 className="text-2xl font-semibold text-gray-800 mt-12 mb-4 border-b border-gray-100 pb-2">Compare Strings</h3>
                                <p>To compare two strings, you can use the <code>strcmp()</code> function.</p>
                                <p>It returns <code>0</code> if the two strings are equal, otherwise a value that is not 0:</p>

                                <h4 className="text-xl font-medium text-gray-800 mt-8">Example</h4>
                                <CodeBlock code={`char str1[] = "Hello";
char str2[] = "Hello";
char str3[] = "Hi";

// Compare str1 and str2, and print the result
printf("%d\\n", strcmp(str1, str2));  // Returns 0 (the strings are equal)

// Compare str1 and str3, and print the result
printf("%d\\n", strcmp(str1, str3));  // Returns -4 (the strings are not equal)`} />
                            </div>
                        ) 
                    }
                ]
            },"""

pattern = r'            \{\s+id: \'strings\',\s+title: \'Strings\',\s+subItems: \[\s+\{\s+id: \'c-strings\'.*?(?=\{\s+id: \'functions\')'

new_text = re.sub(pattern, replacement, text, flags=re.DOTALL)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_text)

print("Strings injected successfully!")
