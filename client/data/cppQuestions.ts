export const cppQuestions = [
    {
        id: 'cpp1',
        question: 'What is the correct extension of C++ files?',
        options: ['.c', '.cpp', '.cp', '.cxx'],
        answer: 1,
        explanation: '.cpp is the most common extension for C++ files.'
    },
    {
        id: 'cpp2',
        question: 'Which symbol is used for comments in C++ (single-line)?',
        options: ['#', '//', '/*', '--'],
        answer: 1,
        explanation: '// is used for single-line comments in C++.'
    },
    {
        id: 'cpp3',
        question: 'Which header file is used for input/output?',
        options: ['stdio.h', 'conio.h', 'iostream', 'math.h'],
        answer: 2,
        explanation: '<iostream> is the standard input/output stream library in C++.'
    },
    {
        id: 'cpp4',
        question: 'Which keyword is used to declare a variable?',
        options: ['var', 'int', 'declare', 'dim'],
        answer: 1,
        explanation: 'Types like \'int\' are used as keywords to declare integer variables in C++.'
    },
    {
        id: 'cpp5',
        question: 'What is the default return type of main()?',
        options: ['void', 'float', 'int', 'char'],
        answer: 2,
        explanation: 'The main() function returns an int to the operating system.'
    },
    {
        id: 'cpp6',
        question: 'Which operator is used for scope resolution?',
        options: ['.', '->', '::', ':'],
        answer: 2,
        explanation: ':: is the scope resolution operator.'
    },
    {
        id: 'cpp7',
        question: 'Which keyword is used to define a constant?',
        options: ['static', 'const', 'final', 'constant'],
        answer: 1,
        explanation: 'The const keyword makes variables immutable.'
    },
    {
        id: 'cpp8',
        question: 'What is the size of int (typically)?',
        options: ['2 bytes', '4 bytes', '8 bytes', '1 byte'],
        answer: 1,
        explanation: 'On most modern systems, an int is 4 bytes wide.'
    },
    {
        id: 'cpp9',
        question: 'Which operator is used for input?',
        options: ['>>', '<<', '==', '='],
        answer: 0,
        explanation: '>> is the extraction operator, used with cin.'
    },
    {
        id: 'cpp10',
        question: 'Which operator is used for output?',
        options: ['>>', '<<', '=', '!='],
        answer: 1,
        explanation: '<< is the insertion operator, used with cout.'
    },
    {
        id: 'cpp11',
        question: 'Which keyword is used for decision making?',
        options: ['loop', 'if', 'decide', 'select'],
        answer: 1,
        explanation: 'if is used for conditional decision making.'
    },
    {
        id: 'cpp12',
        question: 'Which loop runs at least once?',
        options: ['for', 'while', 'do-while', 'none'],
        answer: 2,
        explanation: 'The do-while loop guarantees at least one iteration.'
    },
    {
        id: 'cpp13',
        question: 'Which symbol is used to end a statement?',
        options: [':', '.', ';', ','],
        answer: 2,
        explanation: 'A semicolon (;) finishes statements in C++.'
    },
    {
        id: 'cpp14',
        question: 'Which data type stores a single character?',
        options: ['int', 'char', 'string', 'float'],
        answer: 1,
        explanation: 'The char data type holds single characters.'
    },
    {
        id: 'cpp15',
        question: 'Which is a valid variable name?',
        options: ['2num', 'num_2', 'num-2', 'num 2'],
        answer: 1,
        explanation: 'Identifiers cannot start with numbers, have dashes, or have spaces.'
    },
    {
        id: 'cpp16',
        question: 'Which operator is used for equality check?',
        options: ['=', '==', '!=', '<='],
        answer: 1,
        explanation: '== is used to compare values for equality.'
    },
    {
        id: 'cpp17',
        question: 'What is the result of 5/2?',
        options: ['2.5', '2', '3', '2.0'],
        answer: 1,
        explanation: 'Integer division drops the fraction.'
    },
    {
        id: 'cpp18',
        question: 'Which keyword is used for loops?',
        options: ['repeat', 'loop', 'for', 'iterate'],
        answer: 2,
        explanation: 'for (as well as while, do) is a C++ loop keyword.'
    },
    {
        id: 'cpp19',
        question: 'Which function is used to display output?',
        options: ['printf()', 'cout', 'print()', 'display()'],
        answer: 1,
        explanation: 'cout is the standard output stream object in C++.'
    },
    {
        id: 'cpp20',
        question: 'Which function is used to take input?',
        options: ['scanf()', 'cin', 'input()', 'get()'],
        answer: 1,
        explanation: 'cin is the standard input stream object.'
    },
    {
        id: 'cpp21',
        question: 'Which operator is used for increment?',
        options: ['++', '--', '+=', '=='],
        answer: 0,
        explanation: '++ increments a value by 1.'
    },
    {
        id: 'cpp22',
        question: 'What is the result of 10 % 3?',
        options: ['3', '1', '0', '2'],
        answer: 1,
        explanation: '10 divided by 3 has a remainder of 1.'
    },
    {
        id: 'cpp23',
        question: 'Which keyword is used to exit a loop?',
        options: ['stop', 'exit', 'break', 'end'],
        answer: 2,
        explanation: 'break instantly leaves the closest surrounding loop.'
    },
    {
        id: 'cpp24',
        question: 'Which keyword skips an iteration?',
        options: ['skip', 'continue', 'pass', 'break'],
        answer: 1,
        explanation: 'continue skips to the top of the loop for the next cycle.'
    },
    {
        id: 'cpp25',
        question: 'Which of these is not a data type?',
        options: ['int', 'float', 'real', 'char'],
        answer: 2,
        explanation: 'real is not a standard built-in C++ keyword.'
    },
    {
        id: 'cpp26',
        question: 'Which operator is used for logical AND?',
        options: ['&', '&&', 'AND', '&&&'],
        answer: 1,
        explanation: '&& means logical AND.'
    },
    {
        id: 'cpp27',
        question: 'Which operator is used for logical OR?',
        options: ['||', 'OR', '|', '///'],
        answer: 0,
        explanation: '|| means logical OR.'
    },
    {
        id: 'cpp28',
        question: 'Which operator is used for NOT?',
        options: ['!', 'not', '~', '!='],
        answer: 0,
        explanation: '! is logical NOT.'
    },
    {
        id: 'cpp29',
        question: 'What is the result of (5 > 3)?',
        options: ['0', '1', '5', '3'],
        answer: 1,
        explanation: 'True becomes 1 (or true boolean).'
    },
    {
        id: 'cpp30',
        question: 'Which data type stores decimal values?',
        options: ['int', 'char', 'float', 'bool'],
        answer: 2,
        explanation: 'float stores floating-point numbers.'
    },
    {
        id: 'cpp31',
        question: 'Which header is used for strings?',
        options: ['string.h', 'strings', 'string', 'str'],
        answer: 2,
        explanation: 'The <string> header allows you to use string objects in C++.'
    },
    {
        id: 'cpp32',
        question: 'Which class is used for strings in C++?',
        options: ['char', 'string', 'text', 'str'],
        answer: 1,
        explanation: 'The string class (std::string) is used to represent sequences of characters.'
    },
    {
        id: 'cpp33',
        question: 'How do you declare a string?',
        options: ['string s;', 'str s;', 'char s;', 'text s;'],
        answer: 0,
        explanation: 'string s; invokes the default constructor for string.'
    },
    {
        id: 'cpp34',
        question: 'What is the length function for string?',
        options: ['size()', 'length()', 'both A and B', 'count()'],
        answer: 2,
        explanation: 'Both length() and size() return the length of the string.'
    },
    {
        id: 'cpp35',
        question: 'What does s[0] represent?',
        options: ['last character', 'first character', 'middle character', 'null'],
        answer: 1,
        explanation: 'Index 0 corresponds to the initial position.'
    },
    {
        id: 'cpp36',
        question: 'Which function concatenates strings?',
        options: ['add()', 'append()', 'concat()', 'join()'],
        answer: 1,
        explanation: 'The append() method appends characters to a string.'
    },
    {
        id: 'cpp37',
        question: 'Which operator also concatenates strings?',
        options: ['+', '*', '&', '||'],
        answer: 0,
        explanation: 'The overloaded + operator can be used to join strings.'
    },
    {
        id: 'cpp38',
        question: 'What is the output of string s = "Hi"; s + "!"?',
        options: ['Hi', '!Hi', 'Hi!', 'Error'],
        answer: 2,
        explanation: 'It evaluates to the concatenated string Hi!.'
    },
    {
        id: 'cpp39',
        question: 'Which function finds substring?',
        options: ['find()', 'search()', 'locate()', 'index()'],
        answer: 0,
        explanation: 'The find() method searches the string for the first occurrence of the sequence specified.'
    },
    {
        id: 'cpp40',
        question: 'What is the index of first character in string?',
        options: ['1', '0', '-1', 'depends'],
        answer: 1,
        explanation: 'std::string sequences are zero-indexed.'
    }
];
