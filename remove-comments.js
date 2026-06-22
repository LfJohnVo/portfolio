const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src');

function removeComments(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Remove JSX comments: {/* ... */}
    content = content.replace(/\{\/\*[\s\S]*?\*\/\}/g, '');

    // Remove single line comments that do not follow http: or https:
    // and aren't inside strings (basic heuristic)
    // Using negative lookbehind for http: and https:
    content = content.replace(/(?<!https?:)\/\/.*/g, '');

    // Remove empty lines that might have been left behind
    content = content.replace(/^\s*[\r\n]/gm, '');

    fs.writeFileSync(filePath, content, 'utf8');
}

function processDirectory(dir) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            processDirectory(fullPath);
        } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx')) {
            removeComments(fullPath);
            console.log(`Processed: ${fullPath}`);
        }
    }
}

processDirectory(directoryPath);
console.log('Done removing comments.');
