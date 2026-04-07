const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const URLS = [
    { id: 'java-intro', url: 'https://www.w3schools.com/java/java_intro.asp', title: 'Java Intro' },
    { id: 'java-getstarted', url: 'https://www.w3schools.com/java/java_getstarted.asp', title: 'Java Getting Started' },
    { id: 'java-syntax', url: 'https://www.w3schools.com/java/java_syntax.asp', title: 'Java Syntax' },
    { id: 'java-output', url: 'https://www.w3schools.com/java/java_output.asp', title: 'Java Output' },
    { id: 'java-variables', url: 'https://www.w3schools.com/java/java_variables.asp', title: 'Java Variables' },
    { id: 'java-datatypes', url: 'https://www.w3schools.com/java/java_data_types.asp', title: 'Java Data Types' },
    { id: 'java-typecasting', url: 'https://www.w3schools.com/java/java_type_casting.asp', title: 'Java Type Casting' },
    { id: 'java-operators', url: 'https://www.w3schools.com/java/java_operators.asp', title: 'Java Operators' },
    { id: 'java-strings', url: 'https://www.w3schools.com/java/java_strings.asp', title: 'Java Strings' },
    { id: 'java-math', url: 'https://www.w3schools.com/java/java_math.asp', title: 'Java Math' },
    { id: 'java-booleans', url: 'https://www.w3schools.com/java/java_booleans.asp', title: 'Java Booleans' },
    { id: 'java-conditions', url: 'https://www.w3schools.com/java/java_conditions.asp', title: 'Java If...Else' },
    { id: 'java-switch', url: 'https://www.w3schools.com/java/java_switch.asp', title: 'Java Switch' },
    { id: 'java-whileloop', url: 'https://www.w3schools.com/java/java_while_loop.asp', title: 'Java While Loop' },
    { id: 'java-forloop', url: 'https://www.w3schools.com/java/java_for_loop.asp', title: 'Java For Loop' },
    { id: 'java-break', url: 'https://www.w3schools.com/java/java_break.asp', title: 'Java Break/Continue' },
    { id: 'java-arrays', url: 'https://www.w3schools.com/java/java_arrays.asp', title: 'Java Arrays' }
];

async function scrapePage(item) {
    try {
        const { data } = await axios.get(item.url);
        const $ = cheerio.load(data);

        // W3Schools content is usually inside #main
        const main = $('#main');

        // Remove exercise sections
        main.find('.w3-panel.w3-card.w3-light-grey:contains("Exercise")').remove();
        main.find('h2:contains("Exercise")').nextAll().remove();
        main.find('h2:contains("Exercise")').remove();
        main.find('.w3-example').each((i, el) => {
            // W3Schools code blocks
            const code = $(el).find('.w3-code').text().trim();
            if (code) {
                // We'll replace this with a placeholder that we can easily convert to our React format later
                $(el).replaceWith(`<div class="code-placeholder">|||CODEBLOCK_START|||${code}|||CODEBLOCK_END|||</div>`);
            }
        });

        let contentHtml = '';

        main.children().each((i, el) => {
            const tagName = el.tagName ? el.tagName.toLowerCase() : '';
            if (['h1', 'h2', 'h3', 'p', 'ul', 'ol', 'div', 'table'].includes(tagName)) {

                // Skip next/prev buttons
                if ($(el).hasClass('nextprev')) return;
                // Skip hr
                if (tagName === 'hr') return;

                let text = $(el).text().trim();
                if (!text) return;

                if (tagName === 'h1' || tagName === 'h2') {
                    contentHtml += `\n<h2 className="text-3xl font-extrabold text-blue-900 mt-12 mb-6 border-b-2 border-blue-100 pb-3">${text}</h2>\n`;
                } else if (tagName === 'h3') {
                    contentHtml += `\n<h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4 border-b border-gray-100 pb-2">${text}</h3>\n`;
                } else if (tagName === 'p') {
                    contentHtml += `<p className="text-gray-700 mb-4">${text}</p>\n`;
                } else if (tagName === 'ul') {
                    let items = '';
                    $(el).find('li').each((_, li) => {
                        items += `<li>${$(li).text().trim()}</li>\n`;
                    });
                    contentHtml += `<ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-6">\n${items}</ul>\n`;
                } else if (tagName === 'div' && text.includes('|||CODEBLOCK_START|||')) {
                    // Extract the code
                    const codePart = text.split('|||CODEBLOCK_START|||')[1]?.split('|||CODEBLOCK_END|||')[0];
                    if (codePart) {
                        // Escape backticks and backslashes
                        const escapedCode = codePart.replace(/\\/g, '\\\\').replace(/\`/g, '\\`');
                        contentHtml += `<CodeBlock code={\`${escapedCode}\`} />\n`;
                    }
                } else if (text.includes('|||CODEBLOCK_START|||')) {
                    const codePart = text.split('|||CODEBLOCK_START|||')[1]?.split('|||CODEBLOCK_END|||')[0];
                    if (codePart) {
                        const escapedCode = codePart.replace(/\\/g, '\\\\').replace(/\`/g, '\\`');
                        contentHtml += `<CodeBlock code={\`${escapedCode}\`} />\n`;
                    }
                } else if ($(el).hasClass('w3-panel') || $(el).hasClass('w3-note')) {
                    contentHtml += `<div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg my-4"><p className="text-yellow-800 text-sm">${text}</p></div>\n`;
                }
            }
        });

        return {
            id: item.id,
            title: item.title,
            content: `
            <div className="space-y-8 text-gray-800 leading-relaxed tracking-wide text-lg">
                ${contentHtml}
            </div>`
        };

    } catch (e) {
        console.error('Error scraping ' + item.url, e);
        return null;
    }
}

async function main() {
    let results = [];
    for (let u of URLS) {
        console.log('Scraping', u.title);
        const res = await scrapePage(u);
        if (res) results.push(res);
        // tiny delay to avoid blocking
        await new Promise(resolve => setTimeout(resolve, 500));
    }

    fs.writeFileSync('java_scraped.json', JSON.stringify(results, null, 2));
    console.log('Done scraping ' + results.length + ' pages');
}

main();
