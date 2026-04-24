const fs = require('fs');
const path = require('path');

const tokensDir = path.join(__dirname, '..', 'tokens');
const outputFile = path.join(tokensDir, 'index.css');

const tokenFiles = ['colors.json', 'typography.json', 'spacing.json'];

function generateCSS() {
  let css = ':root {\n';
  const comments = {
    colors: 'Colors',
    typography: 'Typography',
    spacing: 'Spacing'
  };

  tokenFiles.forEach(file => {
    const filePath = path.join(tokensDir, file);
    const tokens = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    Object.keys(tokens).forEach(category => {
      css += `\n  /* ${comments[category] || category} */\n`;
      
      function processTokens(obj, prefix = '') {
        Object.keys(obj).forEach(key => {
          const token = obj[key];
          if (token.type && token.value !== undefined) {
            const varName = prefix ? `${prefix}-${key}` : key;
            css += `  --${varName}: ${token.value};\n`;
          } else if (typeof token === 'object') {
            const newPrefix = prefix ? `${prefix}-${key}` : key;
            processTokens(token, newPrefix);
          }
        });
      }
      
      processTokens(tokens[category], category.replace(/([A-Z])/g, '-$1').toLowerCase());
    });
  });

  css += '}\n';
  
  fs.writeFileSync(outputFile, css);
  console.log('✓ Design tokens CSS generated successfully');
}

generateCSS();
