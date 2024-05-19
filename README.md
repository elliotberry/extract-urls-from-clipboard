## URL Extractor
![](./logo.svg)

Extracts unique URLs from a given text input, either from the command line, standard input, or clipboard, and prints them to the console.

### Installation

1. Clone the repository or download the script file.
2. Install the required dependencies using npm:

```bash
npm install extract-urls clipboardy
```

### Usage

You can run the script in different ways to extract URLs:

1. **From Command Line Argument:**

   Pass the text as a command line argument.

   ```bash
   node script.js "Here is some text with URLs: https://example.com and http://example.org"
   ```

2. **From Clipboard:**

   If no command line argument is provided, the script will read the text from the clipboard.

   ```bash
   node script.js
   ```

3. **From Standard Input:**

   You can also pipe input into the script.

   ```bash
   echo "Here is some text with URLs: https://example.com and http://example.org" | node script.js
   ```

### Output

The script will print the unique URLs found in the input text, each on a new line.

### Example

```bash
node script.js "Check out these sites: https://site1.com, https://site2.com, and https://site1.com"
```

Output:
```
https://site1.com
https://site2.com
```