[日本語](./README.md) | English
  
# octo-log

octo-log is a command line tool that show commit logs of own all GitHub repos.


## Install

```bash
npm i -g @asaitoshiya/octo-log
```

### Create a GitHub token

  1. Visit https://github.com/settings/tokens
  2. Click on "Generate new token"
  3. Type "octo-log" in "Note"
  4. Select "repo" under "Select scopes"
  5. Click on "Generate token"


## Usage

```bash
octo-log (-t|--token) <token> [--author <author>]
```


## License

    MIT License
    
    Copyright (c) 2022 Asai Toshiya
    
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.