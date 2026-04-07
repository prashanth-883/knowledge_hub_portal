import React, { useState } from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import java from 'react-syntax-highlighter/dist/cjs/languages/prism/java';
import c from 'react-syntax-highlighter/dist/cjs/languages/prism/c';
import cpp from 'react-syntax-highlighter/dist/cjs/languages/prism/cpp';
import python from 'react-syntax-highlighter/dist/cjs/languages/prism/python';
import markup from 'react-syntax-highlighter/dist/cjs/languages/prism/markup';
import javascript from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

SyntaxHighlighter.registerLanguage('c', c);
SyntaxHighlighter.registerLanguage('java', java);
SyntaxHighlighter.registerLanguage('cpp', cpp);
SyntaxHighlighter.registerLanguage('python', python);
SyntaxHighlighter.registerLanguage('html', markup);
SyntaxHighlighter.registerLanguage('javascript', javascript);

interface CodeBlockProps {
    code: string;
    language?: string;
}

export default function CodeBlock({ code, language = 'c' }: CodeBlockProps) {
    const [copied, setCopied] = useState(false);

    // Parse lines to see if there's a header line (like #include) we should put in the top bar.
    let headerText = language === 'cpp' ? 'C++ Example' :
                     language === 'html' ? 'HTML Example' :
                     language === 'python' ? 'Python Example' :
                     language === 'java' ? 'Java Example' :
                     language === 'javascript' ? 'JavaScript Example' :
                     'C Example';
    let codeContent = code.trim();
    let hasExtractedHeader = false;

    const lines = codeContent.split('\n');
    if (lines.length > 0 && lines[0].startsWith('#include')) {
        headerText = lines[0];
        codeContent = lines.slice(1).join('\n').replace(/^\s+/, '');
        hasExtractedHeader = true;
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(codeContent);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="rounded-lg border border-gray-800 overflow-hidden my-6 shadow-sm font-mono flex flex-col bg-black">
            {/* Top Bar matching dark/black styling */}
            <div className="bg-[#111111] px-4 py-3 flex justify-between items-center text-sm border-b border-gray-800">
                <div className="text-gray-400">
                    {hasExtractedHeader ? (
                        <span className="text-gray-400">{headerText}</span>
                    ) : (
                        <span className="text-gray-400 font-sans font-medium">{headerText}</span>
                    )}
                </div>

                {/* Top Right Action Buttons (Close, Play, Copy) */}
                <div className="flex space-x-2">
                    <button
                        className="w-7 h-7 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-300 transition-colors"
                        title="Close"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                    <button
                        className="w-7 h-7 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-300 pl-0.5 transition-colors"
                        title="Run"
                    >
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                    </button>
                    <button
                        onClick={handleCopy}
                        className="w-7 h-7 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-300 transition-colors"
                        title={copied ? "Copied!" : "Copy"}
                    >
                        {copied ? (
                            <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        ) : (
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Code Body */}
            <SyntaxHighlighter
                language={language}
                style={vscDarkPlus}
                customStyle={{ margin: 0, padding: '1.25rem', backgroundColor: '#000000' }}
                wrapLongLines={true}
            >
                {codeContent}
            </SyntaxHighlighter>
        </div>
    );
}
