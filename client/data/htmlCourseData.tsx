import React from 'react';
import { Course } from './courseData';

import CodeBlock from '../components/CodeBlock';

const C = ({ children }: { children: string }) => (
    <CodeBlock code={children} language="html" />
);

export const htmlCourseContent: Course = {
    title: 'HTML5 Tutorial',
    lastUpdated: '6 Mar, 2026',
    topics: [
        {
            id: 'html-basics',
            title: 'HTML Basics',
            subItems: [
                {
                    id: 'intro',
                    title: 'HTML Introduction',
                    content: (
                        <div className="space-y-8">
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">What is HTML?</h2>
                                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-6">
                                    <li>HTML stands for <strong>Hyper Text Markup Language</strong></li>
                                    <li>HTML is the standard markup language for creating Web pages</li>
                                    <li>HTML describes the structure of a Web page</li>
                                    <li>HTML consists of a series of <strong>elements</strong></li>
                                    <li>HTML elements tell the browser how to display the content</li>
                                    <li>HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.</li>
                                </ul>
                            </section>
                            <hr className="border-gray-200" />
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">A Simple HTML Document</h2>
                                <C>{`<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>My First Heading</h1>
    <p>My first paragraph.</p>
  </body>
</html>`}</C>
                                <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Example Explained</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li><code className="bg-gray-100 px-1 rounded">&lt;!DOCTYPE html&gt;</code> — Defines this document as HTML5</li>
                                    <li><code className="bg-gray-100 px-1 rounded">&lt;html&gt;</code> — Root element of every HTML page</li>
                                    <li><code className="bg-gray-100 px-1 rounded">&lt;head&gt;</code> — Contains meta information about the page</li>
                                    <li><code className="bg-gray-100 px-1 rounded">&lt;title&gt;</code> — Specifies a title shown in the browser tab</li>
                                    <li><code className="bg-gray-100 px-1 rounded">&lt;body&gt;</code> — Defines the document body — all visible content</li>
                                    <li><code className="bg-gray-100 px-1 rounded">&lt;h1&gt;</code> — Defines a large heading</li>
                                    <li><code className="bg-gray-100 px-1 rounded">&lt;p&gt;</code> — Defines a paragraph</li>
                                </ul>
                            </section>
                            <hr className="border-gray-200" />
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">What is an HTML Element?</h2>
                                <p className="text-gray-700 mb-4">An HTML element is defined by a start tag, some content, and an end tag:</p>
                                <C>{`<tagname> Content goes here... </tagname>

<h1>My First Heading</h1>
<p>My first paragraph.</p>
<br>   <!-- Empty element: no closing tag needed -->`}</C>
                            </section>
                        </div>
                    )
                },
                {
                    id: 'elements',
                    title: 'HTML Elements',
                    content: (
                        <div className="space-y-8">
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">HTML Elements</h2>
                                <p className="text-gray-700 mb-4">The HTML element is everything from the start tag to the end tag. HTML elements can be nested — elements can contain other elements.</p>
                                <C>{`<!DOCTYPE html>
<html>       <!-- root element -->
  <body>     <!-- body element -->
    <h1>My First Heading</h1>
    <p>My first paragraph.</p>
  </body>
</html>`}</C>
                            </section>
                            <hr className="border-gray-200" />
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Empty HTML Elements</h2>
                                <p className="text-gray-700 mb-4">Some HTML elements have no content and no closing tag. These are called <strong>empty elements</strong>.</p>
                                <C>{`<br>         <!-- Line break -->
<hr>         <!-- Horizontal rule -->
<img src="photo.jpg" alt="A photo">
<input type="text">`}</C>
                            </section>
                            <hr className="border-gray-200" />
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">HTML is Not Case Sensitive</h2>
                                <p className="text-gray-700 mb-4">HTML tags are not case sensitive: <code className="bg-gray-100 px-1 rounded">&lt;P&gt;</code> means the same as <code className="bg-gray-100 px-1 rounded">&lt;p&gt;</code>. W3Schools recommends <strong>lowercase</strong>.</p>
                                <C>{`<!-- Both work, but lowercase is recommended -->
<P>This is a paragraph.</P>
<p>This is a paragraph.</p>`}</C>
                            </section>
                        </div>
                    )
                },
                {
                    id: 'attributes',
                    title: 'HTML Attributes',
                    content: (
                        <div className="space-y-8">
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">HTML Attributes</h2>
                                <p className="text-gray-700 mb-4">Attributes provide additional information about HTML elements. They are always placed in the <strong>start tag</strong> as name/value pairs: <code className="bg-gray-100 px-1 rounded">name="value"</code>.</p>
                            </section>
                            <hr className="border-gray-200" />
                            <section>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">The href Attribute</h3>
                                <p className="text-gray-700 mb-3">The <code className="bg-gray-100 px-1 rounded">&lt;a&gt;</code> tag defines a hyperlink. The <code className="bg-gray-100 px-1 rounded">href</code> attribute specifies the URL:</p>
                                <C>{`<a href="https://www.w3schools.com">Visit W3Schools</a>`}</C>
                            </section>
                            <section>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">The src Attribute</h3>
                                <p className="text-gray-700 mb-3">The <code className="bg-gray-100 px-1 rounded">src</code> attribute specifies the path to the image:</p>
                                <C>{`<img src="img_girl.jpg">
<img src="https://example.com/img_girl.jpg">  <!-- external -->`}</C>
                            </section>
                            <section>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">The alt & style Attributes</h3>
                                <C>{`<!-- alt: text if image can't display -->
<img src="img_girl.jpg" alt="Girl in a jacket">

<!-- style: inline CSS -->
<p style="color:red;">This is a red paragraph.</p>

<!-- width & height -->
<img src="img.jpg" width="300" height="200">`}</C>
                            </section>
                            <section>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">The lang & title Attributes</h3>
                                <C>{`<!-- lang: declare the language of the page -->
<html lang="en">

<!-- title: extra info shown as tooltip on hover -->
<p title="I'm a tooltip">This is a paragraph.</p>`}</C>
                            </section>
                        </div>
                    )
                },
                {
                    id: 'headings',
                    title: 'HTML Headings',
                    content: (
                        <div className="space-y-8">
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">HTML Headings</h2>
                                <p className="text-gray-700 mb-4">HTML headings are defined with the <code className="bg-gray-100 px-1 rounded">&lt;h1&gt;</code> to <code className="bg-gray-100 px-1 rounded">&lt;h6&gt;</code> tags. <code className="bg-gray-100 px-1 rounded">&lt;h1&gt;</code> is the most important and <code className="bg-gray-100 px-1 rounded">&lt;h6&gt;</code> is the least.</p>
                                <C>{`<h1>Heading 1 — largest</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6 — smallest</h6>`}</C>
                            </section>
                            <hr className="border-gray-200" />
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Headings Are Important</h2>
                                <p className="text-gray-700 mb-4">Search engines use headings to index the page structure and content. Use <code className="bg-gray-100 px-1 rounded">&lt;h1&gt;</code> for main headings, then <code className="bg-gray-100 px-1 rounded">&lt;h2&gt;</code> for sections, and so on.</p>
                                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                                    <p className="text-yellow-900 font-medium">💡 Best Practice</p>
                                    <p className="text-yellow-800 text-sm">Use headings for structure only — not to make text bold or big. Use CSS for styling instead.</p>
                                </div>
                            </section>
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Bigger Headings with style</h2>
                                <C>{`<h1 style="font-size:60px;">Heading 1</h1>`}</C>
                            </section>
                        </div>
                    )
                },
                {
                    id: 'paragraphs',
                    title: 'HTML Paragraphs',
                    content: (
                        <div className="space-y-8">
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">HTML Paragraphs</h2>
                                <p className="text-gray-700 mb-4">The <code className="bg-gray-100 px-1 rounded">&lt;p&gt;</code> element defines a paragraph. Browsers automatically add space before and after each paragraph.</p>
                                <C>{`<p>This is a paragraph.</p>
<p>This is another paragraph.</p>`}</C>
                            </section>
                            <hr className="border-gray-200" />
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">HTML Horizontal Rules & Line Breaks</h2>
                                <C>{`<p>Paragraph 1</p>
<hr>              <!-- Horizontal line separating content -->
<p>Paragraph 2</p>

<p>Line 1<br>Line 2</p>  <!-- <br> adds a line break -->`}</C>
                            </section>
                            <hr className="border-gray-200" />
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">The pre Element</h2>
                                <p className="text-gray-700 mb-4"><code className="bg-gray-100 px-1 rounded">&lt;pre&gt;</code> preserves both spaces and line breaks — perfect for poems or code:</p>
                                <C>{`<pre>
  My Bonnie lies over the ocean.

  My Bonnie lies over the sea.
</pre>`}</C>
                            </section>
                        </div>
                    )
                },
                {
                    id: 'styles',
                    title: 'HTML Styles',
                    content: (
                        <div className="space-y-8">
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">HTML Styles</h2>
                                <p className="text-gray-700 mb-4">The <code className="bg-gray-100 px-1 rounded">style</code> attribute is used to add styles to an element, such as color, font, size, and more. Syntax: <code className="bg-gray-100 px-1 rounded">style="property:value;"</code></p>
                                <C>{`<!-- Background color -->
<body style="background-color:powderblue;">

<!-- Text color & font -->
<h1 style="color:blue;">Hello World</h1>
<p style="font-family:courier;">A paragraph.</p>

<!-- Text size & alignment -->
<h1 style="font-size:300%;">Big Heading</h1>
<p style="text-align:center;">Centered paragraph.</p>`}</C>
                            </section>
                        </div>
                    )
                },
                {
                    id: 'formatting',
                    title: 'HTML Formatting',
                    content: (
                        <div className="space-y-8">
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">HTML Text Formatting</h2>
                                <p className="text-gray-700 mb-4">HTML provides special elements for defining text with a special meaning:</p>
                                <C>{`<b>Bold text</b>
<strong>Important text (bold + semantic)</strong>

<i>Italic text</i>
<em>Emphasized text (italic + semantic)</em>

<mark>Highlighted text</mark>
<small>Smaller text</small>
<del>Deleted (strikethrough) text</del>
<ins>Inserted (underlined) text</ins>

<!-- Subscript & Superscript -->
<p>H<sub>2</sub>O</p>
<p>2<sup>10</sup> = 1024</p>`}</C>
                            </section>
                        </div>
                    )
                },
            ]
        },
        {
            id: 'html-links-images',
            title: 'Links & Images',
            subItems: [
                {
                    id: 'links',
                    title: 'HTML Links',
                    content: (
                        <div className="space-y-8">
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">HTML Links</h2>
                                <p className="text-gray-700 mb-4">Links are defined with the <code className="bg-gray-100 px-1 rounded">&lt;a&gt;</code> tag. The <code className="bg-gray-100 px-1 rounded">href</code> attribute specifies the destination URL.</p>
                                <C>{`<a href="https://www.w3schools.com">Visit W3Schools</a>`}</C>
                            </section>
                            <hr className="border-gray-200" />
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">The target Attribute</h2>
                                <p className="text-gray-700 mb-4">Specifies where to open the linked document:</p>
                                <C>{`<!-- _self: same tab (default) -->
<a href="page.html" target="_self">Same Tab</a>

<!-- _blank: new tab/window -->
<a href="https://w3schools.com" target="_blank">New Tab</a>`}</C>
                            </section>
                            <hr className="border-gray-200" />
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Absolute vs Relative URLs</h2>
                                <C>{`<!-- Absolute URL: full address -->
<a href="https://www.w3schools.com/html/">HTML Tutorial</a>

<!-- Relative URL: relative to current page -->
<a href="html_images.asp">HTML Images</a>`}</C>
                            </section>
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Image as Link & Email Link</h2>
                                <C>{`<!-- Image as a link -->
<a href="default.asp">
  <img src="smiley.gif" alt="HTML tutorial" style="width:42px;height:42px;">
</a>

<!-- Email link -->
<a href="mailto:someone@example.com">Send email</a>

<!-- Button as link -->
<button onclick="document.location='default.asp'">HTML Tutorial</button>`}</C>
                            </section>
                        </div>
                    )
                },
                {
                    id: 'images',
                    title: 'HTML Images',
                    content: (
                        <div className="space-y-8">
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">HTML Images</h2>
                                <p className="text-gray-700 mb-4">Images are defined with the <code className="bg-gray-100 px-1 rounded">&lt;img&gt;</code> tag — an empty element with no closing tag. It has two required attributes: <code className="bg-gray-100 px-1 rounded">src</code> and <code className="bg-gray-100 px-1 rounded">alt</code>.</p>
                                <C>{`<img src="pic_trulli.jpg" alt="Italian Trulli">`}</C>
                            </section>
                            <hr className="border-gray-200" />
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Image Size, Alt, and Style</h2>
                                <C>{`<!-- Width and height attributes -->
<img src="img.jpg" alt="Flowers" width="500" height="600">

<!-- Using style attribute (recommended to prevent resize by CSS) -->
<img src="img.jpg" alt="Flowers" style="width:500px;height:600px;">

<!-- Alt text shown when image cannot load -->
<img src="wrongname.jpg" alt="This image cannot be found">`}</C>
                            </section>
                            <hr className="border-gray-200" />
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Image Floating</h2>
                                <C>{`<p>
  <img src="smiley.gif" alt="Smiley face"
       style="float:right;width:42px;height:42px;">
  The image floats to the right of the text.
</p>`}</C>
                            </section>
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Image Formats</h2>
                                <div className="overflow-x-auto">
                                    <table className="w-full border-collapse text-sm">
                                        <thead>
                                            <tr className="bg-gray-100">
                                                <th className="border border-gray-300 px-4 py-2 text-left">Format</th>
                                                <th className="border border-gray-300 px-4 py-2 text-left">Extension</th>
                                                <th className="border border-gray-300 px-4 py-2 text-left">Best For</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {[
                                                ['JPEG', '.jpg / .jpeg', 'Photographs'],
                                                ['PNG', '.png', 'Images with transparency'],
                                                ['GIF', '.gif', 'Animations'],
                                                ['SVG', '.svg', 'Logos and icons (vector)'],
                                                ['WebP', '.webp', 'Web images (modern, small)'],
                                            ].map(([fmt, ext, use]) => (
                                                <tr key={fmt} className="hover:bg-gray-50">
                                                    <td className="border border-gray-300 px-4 py-2 font-semibold">{fmt}</td>
                                                    <td className="border border-gray-300 px-4 py-2 font-mono text-blue-700">{ext}</td>
                                                    <td className="border border-gray-300 px-4 py-2">{use}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </section>
                        </div>
                    )
                },
            ]
        },
        {
            id: 'html-tables-lists',
            title: 'Tables & Lists',
            subItems: [
                {
                    id: 'tables',
                    title: 'HTML Tables',
                    content: (
                        <div className="space-y-8">
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">HTML Tables</h2>
                                <p className="text-gray-700 mb-4">A table consists of rows <code className="bg-gray-100 px-1 rounded">&lt;tr&gt;</code>, header cells <code className="bg-gray-100 px-1 rounded">&lt;th&gt;</code>, and data cells <code className="bg-gray-100 px-1 rounded">&lt;td&gt;</code>.</p>
                                <C>{`<table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</table>`}</C>
                            </section>
                            <hr className="border-gray-200" />
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Table Borders & Styling</h2>
                                <C>{`<style>
  table, th, td {
    border: 1px solid black;
    border-collapse: collapse;   /* removes double borders */
    padding: 8px;
  }
  th { background-color: #04AA6D; color: white; }
  tr:nth-child(even) { background-color: #f2f2f2; }  /* striped rows */
</style>`}</C>
                            </section>
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Colspan & Rowspan</h2>
                                <C>{`<!-- colspan: cell spans multiple columns -->
<tr>
  <th colspan="2">Name</th>
  <th>Age</th>
</tr>

<!-- rowspan: cell spans multiple rows -->
<tr>
  <td rowspan="2">Rambo</td>
  <td>First Blood</td>
</tr>
<tr>
  <td>Part II</td>
</tr>`}</C>
                            </section>
                        </div>
                    )
                },
                {
                    id: 'lists',
                    title: 'HTML Lists',
                    content: (
                        <div className="space-y-8">
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Unordered Lists</h2>
                                <p className="text-gray-700 mb-4">An unordered list uses <code className="bg-gray-100 px-1 rounded">&lt;ul&gt;</code> — items are marked with bullets by default.</p>
                                <C>{`<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>

<!-- Style the bullet marker -->
<ul style="list-style-type:disc;">...</ul>   <!-- ● -->
<ul style="list-style-type:circle;">...</ul> <!-- ○ -->
<ul style="list-style-type:square;">...</ul> <!-- ■ -->
<ul style="list-style-type:none;">...</ul>   <!-- no marker -->`}</C>
                            </section>
                            <hr className="border-gray-200" />
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Ordered Lists</h2>
                                <p className="text-gray-700 mb-4">An ordered list uses <code className="bg-gray-100 px-1 rounded">&lt;ol&gt;</code> — items are numbered automatically.</p>
                                <C>{`<ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>

<!-- type attribute changes numbering style -->
<ol type="1">...</ol>   <!-- 1, 2, 3 (default) -->
<ol type="A">...</ol>   <!-- A, B, C -->
<ol type="a">...</ol>   <!-- a, b, c -->
<ol type="I">...</ol>   <!-- I, II, III -->
<ol type="i">...</ol>   <!-- i, ii, iii -->

<!-- Start counting from a specific number -->
<ol start="50">
  <li>Coffee</li>
  <li>Tea</li>
</ol>`}</C>
                            </section>
                            <hr className="border-gray-200" />
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Description Lists</h2>
                                <C>{`<dl>
  <dt>Coffee</dt>
    <dd>- black hot drink</dd>
  <dt>Milk</dt>
    <dd>- white cold drink</dd>
</dl>`}</C>
                            </section>
                        </div>
                    )
                },
            ]
        },
        {
            id: 'html-structure',
            title: 'Page Structure',
            subItems: [
                {
                    id: 'block-inline',
                    title: 'Block & Inline Elements',
                    content: (
                        <div className="space-y-8">
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Block-level Elements</h2>
                                <p className="text-gray-700 mb-4">A block-level element always starts on a new line and takes up the full width available.</p>
                                <C>{`<!-- Block-level examples -->
<div>Hello World</div>
<p>A paragraph</p>
<h1>A heading</h1>
<ul><li>item</li></ul>

<!-- Common block tags: -->
<!-- <div> <p> <h1>-<h6> <ul> <ol> <li> -->
<!-- <table> <form> <header> <footer> <section> -->`}</C>
                            </section>
                            <hr className="border-gray-200" />
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Inline Elements</h2>
                                <p className="text-gray-700 mb-4">An inline element does <strong>not</strong> start on a new line — it only takes up as much width as necessary.</p>
                                <C>{`<p>This is <span style="color:red">an inline</span> element inside a paragraph.</p>

<!-- Common inline tags: -->
<!-- <span> <a> <img> <strong> <em> <br> <code> <button> -->`}</C>
                            </section>
                        </div>
                    )
                },
                {
                    id: 'classes-id',
                    title: 'Classes and Id',
                    content: (
                        <div className="space-y-8">
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">The class Attribute</h2>
                                <p className="text-gray-700 mb-4">The <code className="bg-gray-100 px-1 rounded">class</code> attribute is used to apply one or more CSS classes to an element. Multiple elements can share the same class.</p>
                                <C>{`<style>
  .city { background-color: tomato; color: white; padding: 10px; }
</style>

<div class="city">London</div>
<div class="city">Paris</div>
<div class="city">Tokyo</div>

<!-- Multiple classes -->
<div class="city main">London</div>`}</C>
                            </section>
                            <hr className="border-gray-200" />
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">The id Attribute</h2>
                                <p className="text-gray-700 mb-4">The <code className="bg-gray-100 px-1 rounded">id</code> attribute specifies a <strong>unique</strong> id for one element on the page. Used for CSS styling and JavaScript targeting.</p>
                                <C>{`<style>
  #myHeader { background-color: lightblue; padding: 40px; }
</style>

<h1 id="myHeader">My Header</h1>

<!-- JavaScript: target by id -->
<script>
  document.getElementById("myHeader").style.color = "red";
</script>

<!-- Bookmark links with id -->
<h2 id="C4">Chapter 4</h2>
<a href="#C4">Jump to Chapter 4</a>`}</C>
                            </section>
                        </div>
                    )
                },
                {
                    id: 'layout',
                    title: 'HTML Layout',
                    content: (
                        <div className="space-y-8">
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">HTML Semantic Layout Elements</h2>
                                <p className="text-gray-700 mb-4">HTML5 introduced semantic elements that define the structure of a web page clearly:</p>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                                    {[
                                        ['<header>', 'Page or section header'],
                                        ['<nav>', 'Navigation links'],
                                        ['<section>', 'Thematic group of content'],
                                        ['<article>', 'Independent content'],
                                        ['<aside>', 'Side content / sidebar'],
                                        ['<footer>', 'Page or section footer'],
                                        ['<main>', 'Main content of page'],
                                        ['<div>', 'Generic container (non-semantic)'],
                                    ].map(([tag, desc]) => (
                                        <div key={tag} className="bg-indigo-50 border border-indigo-200 rounded-lg p-3">
                                            <code className="text-indigo-700 font-bold text-sm">{tag}</code>
                                            <p className="text-gray-600 text-xs mt-1">{desc}</p>
                                        </div>
                                    ))}
                                </div>
                                <C>{`<!DOCTYPE html>
<html>
<body>
  <header>   <h1>My Website</h1>   </header>
  <nav>      <a href="/">Home</a>  </nav>
  <main>
    <section>
      <h2>Blog Posts</h2>
      <article>
        <h3>Post Title</h3>
        <p>Post content here.</p>
      </article>
    </section>
    <aside>
      <h4>Related Links</h4>
    </aside>
  </main>
  <footer>   <p>© 2026 My Website</p>  </footer>
</body>
</html>`}</C>
                            </section>
                        </div>
                    )
                },
                {
                    id: 'head',
                    title: 'HTML Head Element',
                    content: (
                        <div className="space-y-8">
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">The HTML &lt;head&gt; Element</h2>
                                <p className="text-gray-700 mb-4">The <code className="bg-gray-100 px-1 rounded">&lt;head&gt;</code> element contains metadata — data about the HTML document that is not displayed on the page.</p>
                                <C>{`<head>
  <!-- Page title (shown in browser tab) -->
  <title>My Page</title>

  <!-- Character encoding -->
  <meta charset="UTF-8">

  <!-- Viewport for responsive design -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Page description for SEO -->
  <meta name="description" content="This is my webpage">

  <!-- Link to external CSS -->
  <link rel="stylesheet" href="mystyle.css">

  <!-- Favicon -->
  <link rel="icon" type="image/x-icon" href="/images/favicon.ico">

  <!-- Embedded CSS -->
  <style>
    body { background-color: powderblue; }
  </style>

  <!-- JavaScript -->
  <script src="myscript.js"></script>
</head>`}</C>
                            </section>
                        </div>
                    )
                },
            ]
        },
        {
            id: 'html-forms',
            title: 'HTML Forms',
            subItems: [
                {
                    id: 'forms',
                    title: 'HTML Forms',
                    content: (
                        <div className="space-y-8">
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">HTML Forms</h2>
                                <p className="text-gray-700 mb-4">An HTML form is used to collect user input. The <code className="bg-gray-100 px-1 rounded">&lt;form&gt;</code> element is a container for different types of input elements.</p>
                                <C>{`<form action="/action.php" method="post">
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname" value="John"><br><br>

  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname" value="Doe"><br><br>

  <input type="submit" value="Submit">
</form>`}</C>
                            </section>
                            <hr className="border-gray-200" />
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">The action & method Attributes</h2>
                                <C>{`<!-- action: URL to send form data to -->
<form action="/submit.php">

<!-- method: GET (visible in URL) or POST (hidden) -->
<form action="/submit.php" method="get">
<form action="/submit.php" method="post">`}</C>
                            </section>
                            <hr className="border-gray-200" />
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">HTML Input Types</h2>
                                <C>{`<input type="text">      <!-- Single-line text -->
<input type="password">  <!-- Password (masked) -->
<input type="email">     <!-- Validates email format -->
<input type="number">    <!-- Numeric input -->
<input type="date">      <!-- Date picker -->
<input type="checkbox">  <!-- Checkbox -->
<input type="radio">     <!-- Radio button -->
<input type="file">      <!-- File upload -->
<input type="range">     <!-- Slider -->
<input type="color">     <!-- Color picker -->
<input type="submit">    <!-- Submit button -->
<input type="reset">     <!-- Reset form -->
<input type="hidden">    <!-- Hidden field -->`}</C>
                            </section>
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Form Elements</h2>
                                <C>{`<!-- Dropdown select -->
<select name="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="fiat" selected>Fiat</option>
</select>

<!-- Multi-line text input -->
<textarea name="message" rows="10" cols="30">
  The cat was playing in the garden.
</textarea>

<!-- Fieldset groups related inputs -->
<form>
  <fieldset>
    <legend>Personalia:</legend>
    <label for="fname">First name:</label>
    <input type="text" id="fname" name="fname">
  </fieldset>
  <input type="submit" value="Submit">
</form>`}</C>
                            </section>
                        </div>
                    )
                },
                {
                    id: 'input-attrs',
                    title: 'Input Attributes',
                    content: (
                        <div className="space-y-8">
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">HTML Input Attributes</h2>
                                <p className="text-gray-700 mb-4">Input attributes control the behaviour and appearance of form fields:</p>
                                <C>{`<!-- value: default value -->
<input type="text" value="John">

<!-- readonly: user cannot change the value -->
<input type="text" value="John" readonly>

<!-- disabled: not usable and not submitted -->
<input type="text" value="John" disabled>

<!-- size: visible width in characters -->
<input type="text" size="4">

<!-- maxlength: maximum characters allowed -->
<input type="text" maxlength="4">

<!-- min/max: for number and date inputs -->
<input type="number" min="0" max="100">
<input type="date" min="2000-01-02">

<!-- placeholder: hint text -->
<input type="text" placeholder="Enter your name">

<!-- required: must be filled before submit -->
<input type="text" required>

<!-- autofocus: auto-focused when page loads -->
<input type="text" autofocus>

<!-- pattern: validates against a regex -->
<input type="text" pattern="[A-Za-z]{3}">`}</C>
                            </section>
                        </div>
                    )
                },
            ]
        },
    ]
};
