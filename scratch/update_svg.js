const fs = require('fs');
let content = fs.readFileSync('components/Svg.tsx', 'utf8');
content = content.replace(/stopColor="#ff38bb"/g, 'stopColor="#23B7CA"');
content = content.replace(/stopColor="#ff8038"/g, 'stopColor="#6CBD98"');
content = content.replace(/stopColor="#f5be66"/g, 'stopColor="#B4C465"');
content = content.replace(/stopColor="#f1fff7"/g, 'stopColor="#FDAB3B"');
content = content.replace(/stopColor="#f4dca8"/g, 'stopColor="#FDAB3B"');
fs.writeFileSync('components/Svg.tsx', content, 'utf8');
console.log('Updated Svg.tsx');
