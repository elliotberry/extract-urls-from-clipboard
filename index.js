import extractUrls from 'extract-urls';
import clipboard from 'clipboardy';

const returnUnique = arr => {
  let unique = [...new Set(arr)];
  return unique;
};

let cliptext;
let urls;

if (process.argv.length > 2) {
  // Extract from the first argument
  cliptext = process.argv[2];
} else {
  // Extract from stdin or clipboard
  cliptext = clipboard.readSync();
}

urls = extractUrls(cliptext);
urls = returnUnique(urls);
console.log(urls.join('\n'));
