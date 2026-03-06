const fs = require('fs');
const path = require('path');

// Create directory structure
const releaseDir = path.join(__dirname, '..', 'release');
const brands = ['brand-green', 'brand-red', 'brand-yellow'];

brands.forEach(brand => {
  const brandDir = path.join(releaseDir, brand);
  const blockDir = path.join(brandDir, 'blocks', 'title');
  
  // Create directory structure
  if (!fs.existsSync(blockDir)) {
    fs.mkdirSync(blockDir, { recursive: true });
  }
  
  // Move brand CSS to brand folder
  const brandSource = path.join(releaseDir, `${brand}.css`);
  const brandTarget = path.join(brandDir, `${brand}.css`);
  
  if (fs.existsSync(brandSource)) {
    fs.renameSync(brandSource, brandTarget);
    console.log(`Moved ${brand}.css -> ${brand}/${brand}.css`);
  }
  
  // Move title CSS to blocks folder
  const titleSource = path.join(releaseDir, `${brand}-title.css`);
  const titleTarget = path.join(blockDir, 'title.css');
  
  if (fs.existsSync(titleSource)) {
    fs.renameSync(titleSource, titleTarget);
    console.log(`Moved ${brand}-title.css -> ${brand}/blocks/title/title.css`);
  }
});

console.log('\nRelease folder organized successfully!');
