import extractUrls from "extract-urls";
import clipboard from 'clipboardy';

const returnUnique = (arr) => {
    let unique = [...new Set(arr)];
    return unique;
}
const parseURL = (url) => {
    let parsed = new URL(url);
    return parsed;
}

   

let cliptext = clipboard.readSync();
let urls = extractUrls(cliptext);
urls = returnUnique(urls);
//urls = urls.map(parseURL);
console.log(`got ${urls.length} unique urls from clipboard`);
//console.log(urls);
console.log(urls.join('\n'));
//=> ['https://github.com/huckbit/extract-urls', 'https://www.npmjs.com/package/extract-urls']