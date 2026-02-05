
const fs = require('fs');
const path = require('path');

// Configuration
const SRC_DIR = './src'; // Directory to scan
const EXTENSIONS = ['.jsx', '.js', '.tsx', '.ts']; // Files to check
const EXCLUDE_DIRS = ['node_modules', 'dist', 'build', 'locales', 'assets'];

// Regex to find JSX text content not wrapped in {}
// This is a heuristic and won't be perfect, but catches common cases like:
// <div>Hello World</div>
// <p>Click here</p>
const JSX_TEXT_REGEX = />([^<{]+)</g;

// Regex to find text in attributes (placeholder, title, alt) that are string literals
// e.g. placeholder="Search..."
const ATTRIBUTE_REGEX = /(placeholder|title|alt|label)=["']([^"'{}+]+)["']/g;

function scanDirectory(directory) {
  const files = fs.readdirSync(directory);

  files.forEach(file => {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      if (!EXCLUDE_DIRS.includes(file)) {
        scanDirectory(fullPath);
      }
    } else {
      if (EXTENSIONS.includes(path.extname(file))) {
        checkFile(fullPath);
      }
    }
  });
}

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  let hasIssues = false;
  let issues = [];

  // Check for JSX Text
  let match;
  while ((match = JSX_TEXT_REGEX.exec(content)) !== null) {
    const text = match[1].trim();
    // Ignore empty strings, numbers-only, or very short generic symbols
    if (text && !/^\d+$/.test(text) && text.length > 1 && !['|', '-', '>', '<'].includes(text)) {
      // Check if it looks like a variable placeholder or similar safe pattern
      if (!text.startsWith('&')) {
        issues.push({ type: 'JSX Text', text, line: getLineNumber(content, match.index) });
      }
    }
  }

  // Check for Attributes
  while ((match = ATTRIBUTE_REGEX.exec(content)) !== null) {
    const text = match[2].trim();
    if (text && !/^\d+$/.test(text)) {
      issues.push({ type: `Attribute [${match[1]}]`, text, line: getLineNumber(content, match.index) });
    }
  }

  if (issues.length > 0) {
    console.log(`\n\x1b[1m\x1b[36mFile: ${filePath}\x1b[0m`);
    issues.forEach(issue => {
      console.log(`  \x1b[33mLine ${issue.line}\x1b[0m: [${issue.type}] "\x1b[31m${issue.text}\x1b[0m"`);
    });
  }
}

function getLineNumber(content, index) {
  return content.substring(0, index).split('\n').length;
}

console.log('Starting Static Text Audit...');
scanDirectory(SRC_DIR);
console.log('\nAudit Complete.');
