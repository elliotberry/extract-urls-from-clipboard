import extractUrls from "extract-urls";
import clipboard from 'clipboardy';



let cliptext = clipboard.readSync();
let urls = extractUrls(cliptext);
console.log(urls.join('\n'));
//=> ['https://github.com/huckbit/extract-urls', 'https://www.npmjs.com/package/extract-urls']