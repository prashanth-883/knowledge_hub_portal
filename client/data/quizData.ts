import { javaQuestions } from './javaQuestions';
import { cQuestions } from './cQuestions';
import { cppQuestions } from './cppQuestions';
import { htmlQuestions } from './htmlQuestions';
import { cssQuestions } from './cssQuestions';
import { javascriptQuestions } from './jsQuestions';
import { pythonQuestions } from './pythonQuestions';

export interface Question {
    id: string;
    question: string;
    options: string[];
    answer: number; // Index of the correct option
    explanation: string;
}

export interface Quiz {
    courseId: string;
    courseTitle: string;
    questions: Question[];
}

export const quizzes: Record<string, Quiz> = {
    java: {
        courseId: 'java',
        courseTitle: 'Java Programming',
        questions: javaQuestions
    },
    cpp: {
        courseId: 'cpp',
        courseTitle: 'C++',
        questions: cppQuestions
    },
    python: {
        courseId: 'python',
        courseTitle: 'Python',
        questions: pythonQuestions
    },
    javascript: {
        courseId: 'javascript',
        courseTitle: 'JavaScript',
        questions: javascriptQuestions
    },
     c: {
        courseId: 'c',
        courseTitle: 'C Programming',
        questions: cQuestions
    },
    html5: {
        courseId: 'html5',
        courseTitle: 'HTML5',
        questions: htmlQuestions
    },
    css3: {
        courseId: 'css3',
        courseTitle: 'CSS3',
        questions: cssQuestions
    },
    // Removed Aptitude
};
