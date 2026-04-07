export const cQuestions = [
    {
        id: 'c1',
        question: 'What is the correct extension of C files?',
        options: ['.cpp', '.c', '.cp', '.cxx'],
        answer: 1,
        explanation: 'The standard extension for C source files is .c'
    },
    {
        id: 'c2',
        question: 'Which header file is used for input/output in C?',
        options: ['iostream.h', 'stdio.h', 'conio.h', 'math.h'],
        answer: 1,
        explanation: 'stdio.h is the standard input/output library in C.'
    },
    {
        id: 'c3',
        question: 'Which function is used to print output?',
        options: ['cout', 'printf()', 'print()', 'display()'],
        answer: 1,
        explanation: 'printf() is used to print output to the console.'
    },
    {
        id: 'c4',
        question: 'Which function is used to take input?',
        options: ['cin', 'scanf()', 'input()', 'get()'],
        answer: 1,
        explanation: 'scanf() is used to take formatted input from standard input.'
    },
    {
        id: 'c5',
        question: 'Which symbol is used for single-line comments?',
        options: ['#', '//', '/*', '--'],
        answer: 1,
        explanation: '// is used for single-line comments.'
    },
    {
        id: 'c6',
        question: 'Which symbol ends a statement?',
        options: [':', ';', '.', ','],
        answer: 1,
        explanation: 'All statements in C must end with a semicolon (;).'
    },
    {
        id: 'c7',
        question: 'Which keyword is used to define a constant?',
        options: ['const', 'define', '#define', 'static'],
        answer: 0,
        explanation: 'The const keyword is used to declare constants. (#define is a preprocessor directive, not a keyword).'
    },
    {
        id: 'c8',
        question: 'What is the default return type of main()?',
        options: ['void', 'int', 'char', 'float'],
        answer: 1,
        explanation: 'The default return type of the main function is int.'
    },
    {
        id: 'c9',
        question: 'Which data type stores integers?',
        options: ['float', 'int', 'char', 'double'],
        answer: 1,
        explanation: 'The int data type is used to store integer (whole number) values.'
    },
    {
        id: 'c10',
        question: 'Which operator is used for assignment?',
        options: ['==', '=', '!=', '<='],
        answer: 1,
        explanation: 'The single equals sign (=) is the assignment operator.'
    },
    {
        id: 'c11',
        question: 'Which operator is used for equality check?',
        options: ['=', '==', '!=', '>='],
        answer: 1,
        explanation: 'The double equals sign (==) checks for equality.'
    },
    {
        id: 'c12',
        question: 'Which data type stores a single character?',
        options: ['int', 'char', 'string', 'float'],
        answer: 1,
        explanation: 'char is used to store a single character.'
    },
    {
        id: 'c13',
        question: 'What is the size of char?',
        options: ['2 bytes', '1 byte', '4 bytes', '8 bytes'],
        answer: 1,
        explanation: 'In C, a char is always 1 byte.'
    },
    {
        id: 'c14',
        question: 'Which format specifier is used for int?',
        options: ['%f', '%c', '%d', '%s'],
        answer: 2,
        explanation: '%d is used for integers (decimal).'
    },
    {
        id: 'c15',
        question: 'Which format specifier is used for float?',
        options: ['%d', '%f', '%c', '%s'],
        answer: 1,
        explanation: '%f is used for floating-point numbers.'
    },
    {
        id: 'c16',
        question: 'Which loop is used when number of iterations is known?',
        options: ['while', 'do-while', 'for', 'loop'],
        answer: 2,
        explanation: 'A for loop is best when you know exactly how many times you want to loop.'
    },
    {
        id: 'c17',
        question: 'Which loop executes at least once?',
        options: ['for', 'while', 'do-while', 'none'],
        answer: 2,
        explanation: 'The do-while loop evaluates its condition at the bottom, so it always runs at least once.'
    },
    {
        id: 'c18',
        question: 'Which keyword is used to exit loop?',
        options: ['stop', 'break', 'exit', 'return'],
        answer: 1,
        explanation: 'The break statement jumps out of a loop.'
    },
    {
        id: 'c19',
        question: 'Which keyword skips an iteration?',
        options: ['continue', 'skip', 'pass', 'break'],
        answer: 0,
        explanation: 'The continue keyword skips the rest of the current iteration and jumps to the next one.'
    },
    {
        id: 'c20',
        question: 'What is the result of 5/2 in C?',
        options: ['2.5', '2', '3', '2.0'],
        answer: 1,
        explanation: 'When both operands are integers, integer division truncates the decimal part, resulting in 2.'
    },
    {
        id: 'c21',
        question: 'What is the result of 10 % 3?',
        options: ['3', '1', '0', '2'],
        answer: 1,
        explanation: 'The modulo operator % returns the remainder of the division. 10 divided by 3 is 3 with a remainder of 1.'
    },
    {
        id: 'c22',
        question: 'Which operator is used for logical AND?',
        options: ['&', '&&', 'AND', '&&&'],
        answer: 1,
        explanation: '&& is the logical AND operator.'
    },
    {
        id: 'c23',
        question: 'Which operator is used for logical OR?',
        options: ['||', 'OR', '|', '///'],
        answer: 0,
        explanation: '|| is the logical OR operator.'
    },
    {
        id: 'c24',
        question: 'Which operator is used for NOT?',
        options: ['!', '~', 'not', '!='],
        answer: 0,
        explanation: '! is the logical NOT operator.'
    },
    {
        id: 'c25',
        question: 'What is the result of (5 > 3)?',
        options: ['0', '1', '5', '3'],
        answer: 1,
        explanation: 'Relational expressions return an integer: 1 for true and 0 for false. 5 > 3 is true, so it returns 1.'
    },
    {
        id: 'c26',
        question: 'Which function is used to read a string?',
        options: ['gets()', 'scanf()', 'both A and B', 'input()'],
        answer: 2,
        explanation: 'Both gets() and scanf() can be used to read a string (though gets is deprecated and unsafe).'
    },
    {
        id: 'c27',
        question: 'Which header file is used for string functions?',
        options: ['string.h', 'strings.h', 'str.h', 'text.h'],
        answer: 0,
        explanation: 'string.h contains standard string manipulation functions.'
    },
    {
        id: 'c28',
        question: 'Which function finds length of string?',
        options: ['strlen()', 'length()', 'size()', 'count()'],
        answer: 0,
        explanation: 'strlen() counts string length excluding the null terminator.'
    },
    {
        id: 'c29',
        question: 'Which function copies strings?',
        options: ['strcpy()', 'copy()', 'assign()', 'move()'],
        answer: 0,
        explanation: 'strcpy() copies the content of a string into another.'
    },
    {
        id: 'c30',
        question: 'Which function concatenates strings?',
        options: ['strcat()', 'append()', 'concat()', 'join()'],
        answer: 0,
        explanation: 'strcat() concatenates (appends) one string to the end of another.'
    },
    {
        id: 'c31',
        question: 'Which function compares strings?',
        options: ['strcmp()', 'compare()', 'equals()', 'strcomp()'],
        answer: 0,
        explanation: 'strcmp() compares two strings.'
    },
    {
        id: 'c32',
        question: 'What does strcmp() return if strings are equal?',
        options: ['1', '-1', '0', 'true'],
        answer: 2,
        explanation: 'strcmp() returns 0 if both strings are lexicographically equal.'
    },
    {
        id: 'c33',
        question: 'How are strings stored in C?',
        options: ['array of integers', 'array of characters', 'list', 'pointer only'],
        answer: 1,
        explanation: 'In C, strings are represented as an array of characters.'
    },
    {
        id: 'c34',
        question: 'What is the last character of a string in C?',
        options: ['0', '\\0', 'null', 'EOF'],
        answer: 1,
        explanation: 'A string must be terminated with a null character (\\0).'
    },
    {
        id: 'c35',
        question: 'Which is a valid string declaration?',
        options: ['string s;', 'char s[10];', 'str s;', 'text s;'],
        answer: 1,
        explanation: 'char s[10]; is correct because string is not a built-in type in C.'
    },
    {
        id: 'c36',
        question: 'Which function reads a character?',
        options: ['getchar()', 'get()', 'read()', 'scan()'],
        answer: 0,
        explanation: 'getchar() reads a single character from the input.'
    },
    {
        id: 'c37',
        question: 'Which function writes a character?',
        options: ['putchar()', 'print()', 'write()', 'put()'],
        answer: 0,
        explanation: 'putchar() writes a single character to output.'
    },
    {
        id: 'c38',
        question: 'What is the index of first element in array?',
        options: ['1', '0', '-1', 'depends'],
        answer: 1,
        explanation: 'Array indices in C are zero-based, meaning they start at 0.'
    },
    {
        id: 'c39',
        question: 'Which keyword is used to return value from function?',
        options: ['break', 'exit', 'return', 'stop'],
        answer: 2,
        explanation: 'The return statement yields a value back from the function.'
    },
    {
        id: 'c40',
        question: 'Which function is entry point of program?',
        options: ['start()', 'main()', 'init()', 'run()'],
        answer: 1,
        explanation: 'Execution begins at the main() function.'
    }
];
