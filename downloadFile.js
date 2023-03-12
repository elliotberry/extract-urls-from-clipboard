import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';
const outputDir = './download'; // change this to the directory you want to save the files in
const getFilename = (initialFilename, extension) => {
  let outputPath = path.join(outputDir, initialFilename);

  // Check if file with the same name already exists
  let i = 1;
  let filename = initialFilename;
  while (fs.existsSync(outputPath)) {
    filename = `image_${Date.now()}_${i}.${extension}`;
    outputPath = path.join(outputDir, filename);
    i++;
  }
  return outputPath;
};
async function downloadImage(url) {
  const response = await fetch(url);
  const buffer = await response.buffer();
  const extension = response.headers.get('content-type').split('/')[1];

  const finalFilename = getFilename(`image_${Date.now()}.${extension}`, extension);
  fs.writeFileSync(finalFilename, buffer);

  return finalFilename;
}
export default downloadImage;
