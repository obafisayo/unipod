const fs = require('fs');
const files = ['aconData.ts', 'designData.ts', 'itrefData.ts', 'leadershipData.ts', 'mechanicalData.ts', 'platformData.ts'];
for (const file of files) {
  let content = fs.readFileSync('components/' + file, 'utf8');
  content = content.replace(/(para[1-4]|name|title|highlight[1]?):\s*'([\s\S]*?)'(,|(\r?\n\s*\}))/g, (match, key, val, end) => {
    val = val.replace(/`/g, '\\`');
    return key + ': `' + val + '`' + end;
  });
  fs.writeFileSync('components/' + file, content);
}
