const fs = require('fs');
const path = require('path');

const replacements = [
    { from: /@\/components\/About/g, to: '@/features/about/About' },
    { from: /@\/components\/Contact/g, to: '@/features/contact/Contact' },
    { from: /@\/components\/Experience/g, to: '@/features/experience/Experience' },
    { from: /@\/components\/GitHubRepos/g, to: '@/features/github/GitHubRepos' },
    { from: /@\/components\/Hero/g, to: '@/features/hero/Hero' },
    { from: /@\/components\/Projects/g, to: '@/features/projects/Projects' },
    { from: /@\/components\/Stats/g, to: '@/features/stats/Stats' },
    { from: /@\/components\/TechStack/g, to: '@/features/tech-stack/TechStack' },
    { from: /@\/components\/Navbar/g, to: '@/shared/ui/Navbar' },
    { from: /@\/components\/ui\/MotionWrapper/g, to: '@/shared/ui/MotionWrapper' },
    { from: /@\/components\/ui\/SectionHeading/g, to: '@/shared/ui/SectionHeading' },
];

function updateImports(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    let original = content;
    for (const { from, to } of replacements) {
        content = content.replace(from, to);
    }

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated imports in: ${filePath}`);
    }
}

function processDirectory(dir) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            processDirectory(fullPath);
        } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx')) {
            updateImports(fullPath);
        }
    }
}

processDirectory(path.join(__dirname, 'src'));
console.log('Import paths updated again.');
