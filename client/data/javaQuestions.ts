export const javaQuestions = [
    {
        id: 'j1',
        question: 'What is the size of int in Java?',
        options: ['2 bytes', '4 bytes', '8 bytes', 'Depends on system'],
        answer: 1,
        explanation: '4 bytes'
    },
    {
        id: 'j2',
        question: 'Which keyword is used to define a class?',
        options: ['define', 'class', 'struct', 'object'],
        answer: 1,
        explanation: 'class'
    },
    {
        id: 'j3',
        question: 'Which method is the entry point of a Java program?',
        options: ['start()', 'run()', 'main()', 'init()'],
        answer: 2,
        explanation: 'main() method'
    },
    {
        id: 'j4',
        question: 'Which of the following is not a primitive data type?',
        options: ['int', 'float', 'String', 'char'],
        answer: 2,
        explanation: 'String (it is a class, not primitive)'
    },
    {
        id: 'j5',
        question: 'What is the default value of a boolean variable?',
        options: ['true', 'false', 'null', '0'],
        answer: 1,
        explanation: 'false'
    },
    {
        id: 'j6',
        question: 'Which operator is used for comparison?',
        options: ['=', '==', '!=', 'Both B and C'],
        answer: 3,
        explanation: '== and != (Both are comparison operators)'
    },
    {
        id: 'j7',
        question: 'Which package is automatically imported in Java?',
        options: ['java.util', 'java.io', 'java.lang', 'java.net'],
        answer: 2,
        explanation: 'java.lang'
    },
    {
        id: 'j8',
        question: 'Which of the following is a valid variable name?',
        options: ['1value', 'value_1', 'value-1', 'value 1'],
        answer: 1,
        explanation: 'value_1'
    },
    {
        id: 'j9',
        question: 'Which symbol is used to end a statement in Java?',
        options: ['.', ';', ':', ','],
        answer: 1,
        explanation: 'semicolon ( ; )'
    },
    {
        id: 'j10',
        question: 'What is the result of 5/2 in Java?',
        options: ['2.5', '2', '3', 'Error'],
        answer: 1,
        explanation: '2 (integer division)'
    },
    {
        id: 'j11',
        question: 'Which loop is guaranteed to execute at least once?',
        options: ['for', 'while', 'do-while', 'none'],
        answer: 2,
        explanation: 'do-while loop'
    },
    {
        id: 'j12',
        question: 'What is the range of byte data type?',
        options: ['-128 to 127', '0 to 255', '-256 to 255', '0 to 127'],
        answer: 0,
        explanation: '-128 to 127'
    },
    {
        id: 'j13',
        question: 'Which keyword is used to make a constant?',
        options: ['const', 'static', 'final', 'constant'],
        answer: 2,
        explanation: 'final'
    },
    {
        id: 'j14',
        question: 'Which operator is used for logical AND?',
        options: ['&', '&&', '||', '!'],
        answer: 1,
        explanation: '&&'
    },
    {
        id: 'j15',
        question: 'Which statement is used to exit a loop?',
        options: ['stop', 'exit', 'break', 'return'],
        answer: 2,
        explanation: 'break'
    },
    {
        id: 'j16',
        question: 'What does JVM stand for?',
        options: ['Java Variable Machine', 'Java Virtual Machine', 'Java Verified Machine', 'Java Visual Machine'],
        answer: 1,
        explanation: 'Java Virtual Machine'
    },
    {
        id: 'j17',
        question: 'Which keyword is used for inheritance?',
        options: ['implement', 'extends', 'inherit', 'super'],
        answer: 1,
        explanation: 'extends'
    },
    {
        id: 'j18',
        question: 'What is the default value of an int variable?',
        options: ['1', '0', 'null', 'undefined'],
        answer: 1,
        explanation: '0'
    },
    {
        id: 'j19',
        question: 'Which of the following is a loop?',
        options: ['if', 'switch', 'for', 'break'],
        answer: 2,
        explanation: 'for loop'
    },
    {
        id: 'j20',
        question: 'Which keyword is used to create an object?',
        options: ['new', 'create', 'make', 'object'],
        answer: 0,
        explanation: 'new'
    },
    {
        id: 'j21',
        question: 'What is the output of "Hello".substring(1,4)?',
        options: ['Hell', 'ello', 'ell', 'lo'],
        answer: 2,
        explanation: 'ell (index 1 to 3)'
    },
    {
        id: 'j22',
        question: 'What is the output of "Java".indexOf(\'a\')?',
        options: ['0', '1', '2', '3'],
        answer: 1,
        explanation: '1 (first occurrence of a)'
    },
    {
        id: 'j23',
        question: 'What is the output of "Java".lastIndexOf(\'a\')?',
        options: ['1', '2', '3', '-1'],
        answer: 2,
        explanation: '3 (last occurrence of a)'
    },
    {
        id: 'j24',
        question: 'What does String.valueOf(10) return?',
        options: ['10', '"10"', 'Error', 'null'],
        answer: 1,
        explanation: '"10" (converts int to string)'
    },
    {
        id: 'j25',
        question: 'What is the output of "abc".compareTo("abc")?',
        options: ['1', '-1', '0', 'Error'],
        answer: 2,
        explanation: '0 (strings are equal)'
    },
    {
        id: 'j26',
        question: 'What is the output of "abc".compareTo("abd")?',
        options: ['Positive', 'Negative', 'Zero', 'Error'],
        answer: 1,
        explanation: 'Negative (c < d)'
    },
    {
        id: 'j27',
        question: 'Which method checks if string starts with a prefix?',
        options: ['beginsWith()', 'startsWith()', 'initWith()', 'prefix()'],
        answer: 1,
        explanation: 'startsWith()'
    },
    {
        id: 'j28',
        question: 'Which method checks if string ends with a suffix?',
        options: ['endsWith()', 'finishWith()', 'lastWith()', 'suffix()'],
        answer: 0,
        explanation: 'endsWith()'
    },
    {
        id: 'j29',
        question: 'What is the output of " hi ".trim()?',
        options: ['"hi"', '" hi"', '"hi "', '" hi "'],
        answer: 0,
        explanation: '"hi" (removes leading & trailing spaces)'
    },
    {
        id: 'j30',
        question: 'What is the output of "Java".replace(\'a\',\'o\')?',
        options: ['Jovo', 'Jova', 'Jovoa', 'Java'],
        answer: 0,
        explanation: 'Jovo'
    },
    {
        id: 'j31',
        question: 'What is the output of "Java".toLowerCase()?',
        options: ['"java"', '"JAVA"', '"Java"', 'Error'],
        answer: 0,
        explanation: '"java"'
    },
    {
        id: 'j32',
        question: 'What is the output of "Java".toUpperCase()?',
        options: ['"java"', '"JAVA"', '"Java"', 'Error'],
        answer: 1,
        explanation: '"JAVA"'
    },
    {
        id: 'j33',
        question: 'What is the output of "abc".concat("def")?',
        options: ['"abcdef"', '"defabc"', '"abc def"', 'Error'],
        answer: 0,
        explanation: '"abcdef"'
    },
    {
        id: 'j34',
        question: 'What is the output of "abc".charAt(5)?',
        options: ['c', 'null', 'Error', 'blank'],
        answer: 2,
        explanation: 'Error (Index out of bounds)'
    },
    {
        id: 'j35',
        question: 'What does split() method return?',
        options: ['String', 'int', 'Array of strings', 'boolean'],
        answer: 2,
        explanation: 'Array of strings'
    },
    {
        id: 'j36',
        question: 'What is the output of "Java".substring(2)?',
        options: ['Ja', 'va', 'av', 'a'],
        answer: 1,
        explanation: 'va (from index 2 to end)'
    },
    {
        id: 'j37',
        question: 'What is the output of "hello".replace("l","x")?',
        options: ['hexxo', 'hexlo', 'helxo', 'hello'],
        answer: 0,
        explanation: 'hexxo (all l replaced)'
    },
    {
        id: 'j38',
        question: 'What is the output of "abc".equals("abc ")?',
        options: ['true', 'false'],
        answer: 1,
        explanation: 'false (space matters)'
    },
    {
        id: 'j39',
        question: 'What is the output of "Java".startsWith("Ja")?',
        options: ['true', 'false'],
        answer: 0,
        explanation: 'true'
    },
    {
        id: 'j40',
        question: 'What is the output of "Java".endsWith("va")?',
        options: ['true', 'false'],
        answer: 0,
        explanation: 'true'
    }
];
