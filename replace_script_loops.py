import re

file_path = 'client/data/courseData.tsx'
with open(file_path, 'r', encoding='utf-8') as f:
    text = f.read()

replacement = """                    { 
                        id: 'c-do-while-loop', 
                        title: 'C Do/While Loop', 
                        content: (
                            <div className="space-y-8 text-gray-800 leading-relaxed tracking-wide text-lg">
                                <h2 className="text-3xl font-extrabold text-blue-900 mb-6 border-b-2 border-blue-100 pb-3">The Do/While Loop</h2>
                                <p>The <code>do/while</code> loop is a variant of the <code>while</code> loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.</p>

                                <h4 className="text-xl font-medium text-gray-800 mt-6">Syntax</h4>
                                <CodeBlock code={`do {
  // code block to be executed
}
while (condition);`} />

                                <h4 className="text-xl font-medium text-gray-800 mt-8">Example</h4>
                                <p>The example below uses a <code>do/while</code> loop. The loop will always be executed at least once, even if the condition is false, because the code block is executed before the condition is tested:</p>
                                <CodeBlock code={`int i = 0;

do {
  printf("%d\\n", i);
  i++;
}
while (i < 5);`} />

                                <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-lg my-6">
                                    <h4 className="text-base font-bold text-red-800 uppercase tracking-wider mb-2">Warning</h4>
                                    <p className="text-red-800 text-base">Do not forget to increase the variable used in the condition, otherwise the loop will never end!</p>
                                </div>

                                <h3 className="text-2xl font-semibold text-gray-800 mt-12 mb-4 border-b border-gray-100 pb-2">Condition is False from the Start</h3>
                                <p>In the example above, the condition <code>i &lt; 5</code> was true at the beginning, so the loop executed multiple times. But what if the condition is false right from the start?</p>
                                <p>In the example below, the variable <code>i</code> starts at 10, so the condition <code>i &lt; 5</code> is false immediately - yet the <code>do/while</code> loop still runs once:</p>

                                <h4 className="text-xl font-medium text-gray-800 mt-8">Example</h4>
                                <p>Even if the condition is false from the start, the code block will still execute one time:</p>
                                <CodeBlock code={`int i = 10;

do {
  printf("i is %d\\n", i);
  i++;
} while (i < 5);`} />

                                <h3 className="text-2xl font-semibold text-gray-800 mt-12 mb-4 border-b border-gray-100 pb-2">Summary</h3>
                                <p>The <code>do/while</code> loop always runs at least once, even if the condition is already false. This is different from a regular <code>while</code> loop, which would skip the loop entirely if the condition is false at the start.</p>
                                <p>This behavior makes <code>do/while</code> useful when you want to ensure something happens at least once, like showing a message or asking for user input.</p>

                                <h4 className="text-xl font-medium text-gray-800 mt-8">Practical Example: User Input</h4>
                                <p>This example keeps asking the user to enter a positive number. The loop stops when the user enters 0 or a negative number:</p>
                                <CodeBlock code={`int number;

do {
  printf("Enter a positive number: ");
  scanf("%d", &number);
} while (number > 0);`} />

                                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-r-lg my-6">
                                    <h4 className="text-base font-bold text-yellow-800 uppercase tracking-wider mb-2">Note</h4>
                                    <p className="text-yellow-800 text-base">You will learn more about the <code>scanf()</code> function and user input in a later chapter.</p>
                                </div>
                            </div>
                        ) 
                    },
                    { 
                        id: 'c-for-loop', 
                        title: 'C For Loop', 
                        content: (
                            <div className="space-y-8 text-gray-800 leading-relaxed tracking-wide text-lg">
                                <h2 className="text-3xl font-extrabold text-blue-900 mb-6 border-b-2 border-blue-100 pb-3">For Loop</h2>
                                <p>When you know exactly how many times you want to loop through a block of code, use the <code>for</code> loop instead of a <code>while</code> loop:</p>

                                <h4 className="text-xl font-medium text-gray-800 mt-6">Syntax</h4>
                                <CodeBlock code={`for (expression 1; expression 2; expression 3) {
  // code block to be executed
}`} />
                                <ul className="list-disc pl-8 space-y-2">
                                    <li><strong>Expression 1</strong> is executed (one time) before the execution of the code block.</li>
                                    <li><strong>Expression 2</strong> defines the condition for executing the code block.</li>
                                    <li><strong>Expression 3</strong> is executed (every time) after the code block has been executed.</li>
                                </ul>

                                <h3 className="text-2xl font-semibold text-gray-800 mt-12 mb-4 border-b border-gray-100 pb-2">Print Numbers</h3>
                                <p>The example below will print the numbers 0 to 4:</p>

                                <h4 className="text-xl font-medium text-gray-800 mt-8">Example</h4>
                                <CodeBlock code={`int i;

for (i = 0; i < 5; i++) {
  printf("%d\\n", i);
}`} />

                                <h4 className="text-xl font-medium text-gray-800 mt-8">Example explained</h4>
                                <ul className="list-decimal pl-8 space-y-2">
                                    <li>Statement 1 sets a variable before the loop starts: <code>int i = 0</code></li>
                                    <li>Statement 2 defines the condition for the loop to run: <code>i &lt; 5</code>. If the condition is true, the loop will start over again, if it is false, the loop will end.</li>
                                    <li>Statement 3 increases a value each time the code block in the loop has been executed: <code>i++</code></li>
                                </ul>

                                <h3 className="text-2xl font-semibold text-gray-800 mt-12 mb-4 border-b border-gray-100 pb-2">Print Even Numbers</h3>
                                <p>This example prints even values between 0 and 10:</p>

                                <CodeBlock code={`int i;

for (i = 0; i <= 10; i = i + 2) {
  printf("%d\\n", i);
}`} />

                                <h3 className="text-2xl font-semibold text-gray-800 mt-12 mb-4 border-b border-gray-100 pb-2">Sum of Numbers</h3>
                                <p>This example calculates the sum of numbers from 1 to 5:</p>
                                <CodeBlock code={`int sum = 0;
int i;

for (i = 1; i <= 5; i++) {
  sum = sum + i;
}

printf("Sum is %d", sum);`} />

                                <h3 className="text-2xl font-semibold text-gray-800 mt-12 mb-4 border-b border-gray-100 pb-2">Countdown</h3>
                                <p>This example prints a countdown from 5 to 1:</p>
                                <CodeBlock code={`int i;

for (i = 5; i > 0; i--) {
  printf("%d\\n", i);
}`} />
                            </div>
                        ) 
                    },
                    { 
                        id: 'c-nested-loops', 
                        title: 'C Nested Loops', 
                        content: (
                            <div className="space-y-8 text-gray-800 leading-relaxed tracking-wide text-lg">
                                <h2 className="text-3xl font-extrabold text-blue-900 mb-6 border-b-2 border-blue-100 pb-3">Nested Loops</h2>
                                <p>It is also possible to place a loop inside another loop. This is called a nested loop.</p>
                                <p>The "inner loop" will be executed one time for each iteration of the "outer loop":</p>

                                <h4 className="text-xl font-medium text-gray-800 mt-8">Example</h4>
                                <CodeBlock code={`int i, j;

// Outer loop
for (i = 1; i <= 2; ++i) {
  printf("Outer: %d\\n", i);  // Executes 2 times

  // Inner loop
  for (j = 1; j <= 3; ++j) {
    printf(" Inner: %d\\n", j);  // Executes 6 times (2 * 3)
  }
}`} />

                                <h3 className="text-2xl font-semibold text-gray-800 mt-12 mb-4 border-b border-gray-100 pb-2">Multiplication Table Example</h3>
                                <p>This example uses nested loops to print a simple multiplication table (1 to 3):</p>
                                <CodeBlock code={`int i, j;

for (i = 1; i <= 3; i++) {
  for (j = 1; j <= 3; j++) {
    printf("%d ", i * j);
  }
  printf("\\n");
}`} />

                                <div className="bg-gray-100 p-4 rounded text-gray-700 font-mono text-sm mt-4 shadow-inner">
                                    <p>Result:</p>
                                    <p>1 2 3<br />2 4 6<br />3 6 9</p>
                                </div>

                                <p className="mt-8">Nested loops are useful when working with tables, matrices, or multi-dimensional data structures.</p>
                            </div>
                        ) 
                    },
                    { 
                        id: 'c-break-continue', 
                        title: 'C Break and Continue', 
                        content: (
                            <div className="space-y-8 text-gray-800 leading-relaxed tracking-wide text-lg">
                                <h2 className="text-3xl font-extrabold text-blue-900 mb-6 border-b-2 border-blue-100 pb-3">Break</h2>
                                <p>You have already seen the <code>break</code> statement used in an earlier chapter of this tutorial. It was used to "jump out" of a switch statement.</p>
                                <p>The <code>break</code> statement can also be used to jump out of a loop.</p>
                                <p>This example stops the loop when <code>i</code> is equal to 4:</p>

                                <h4 className="text-xl font-medium text-gray-800 mt-8">Example</h4>
                                <CodeBlock code={`int i;

for (i = 0; i < 10; i++) {
  if (i == 4) {
    break;
  }
  printf("%d\\n", i);
}`} />

                                <h3 className="text-2xl font-semibold text-gray-800 mt-12 mb-4 border-b border-gray-100 pb-2">Continue</h3>
                                <p>The <code>continue</code> statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.</p>
                                <p>This example skips the value of 4:</p>

                                <h4 className="text-xl font-medium text-gray-800 mt-8">Example</h4>
                                <CodeBlock code={`int i;

for (i = 0; i < 10; i++) {
  if (i == 4) {
    continue;
  }
  printf("%d\\n", i);
}`} />

                                <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg my-6">
                                    <h4 className="text-base font-bold text-blue-800 uppercase tracking-wider mb-2">Good to Remember:</h4>
                                    <ul className="list-disc pl-6 text-blue-800 space-y-2 text-base">
                                        <li><code>break</code> = stop the loop completely.</li>
                                        <li><code>continue</code> = skip this round, but keep looping.</li>
                                    </ul>
                                </div>

                                <h3 className="text-2xl font-semibold text-gray-800 mt-12 mb-4 border-b border-gray-100 pb-2">Combining Break and Continue</h3>
                                <p>You can also combine <code>break</code> and <code>continue</code>.</p>
                                <p>This example skips printing 2 and stops the loop at 4:</p>
                                <CodeBlock code={`int i;

for (i = 0; i < 6; i++) {
  if (i == 2) {
    continue;
  }
  if (i == 4) {
    break;
  }
  printf("%d\\n", i);
}`} />

                                <h3 className="text-2xl font-semibold text-gray-800 mt-12 mb-4 border-b border-gray-100 pb-2">Break and Continue in While Loop</h3>
                                <p>You can also use <code>break</code> and <code>continue</code> in while loops:</p>

                                <h4 className="text-xl font-medium text-gray-800 mt-8">Break Example</h4>
                                <CodeBlock code={`int i = 0;

while (i < 10) {
  if (i == 4) {
    break;
  }
  printf("%d\\n", i);
  i++;
}`} />

                                <h4 className="text-xl font-medium text-gray-800 mt-8">Continue Example</h4>
                                <CodeBlock code={`int i = 0;

while (i < 10) {
  if (i == 4) {
    i++;
    continue;
  }
  printf("%d\\n", i);
  i++;
}`} />

                                <h3 className="text-2xl font-semibold text-gray-800 mt-12 mb-4 border-b border-gray-100 pb-2">Real-Life Example</h3>
                                <p>Imagine processing a list of numbers where you want to skip negative values, but stop completely if you find a zero:</p>
                                <CodeBlock code={`int myNumbers[] = {3, -1, 7, 0, 9};
int length = sizeof(myNumbers) / sizeof(myNumbers[0]);
int i;

for (i = 0; i < length; i++) {
  if (myNumbers[i] < 0) {
    continue; // skip negative numbers
  }
  if (myNumbers[i] == 0) {
    break; // stop loop when zero is found
  }
  printf("%d\\n", myNumbers[i]);
}`} />

                                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-r-lg my-6">
                                    <h4 className="text-base font-bold text-yellow-800 uppercase tracking-wider mb-2">Note</h4>
                                    <p className="text-yellow-800 text-base">Don't worry if you don't fully understand the example above. It uses an array (<code>int numbers[] = {{3, -1, 7, 0, 9}};</code>) to store the numbers, and you will learn more about arrays in the next chapter.</p>
                                </div>
                            </div>
                        ) 
                    }
                ]
            },"""

pattern = r'                    \{\s+id: \'c-for-loop\',.*?(?=\{\s+id: \'arrays\')'

new_text = re.sub(pattern, replacement, text, flags=re.DOTALL)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_text)

print("Second half of loops injected!")
